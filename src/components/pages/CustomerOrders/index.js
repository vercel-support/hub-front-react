import React, { useContext, useState, useEffect } from "react";
import { store } from "../../../store";
import { Grid, Paper } from "@material-ui/core";
import {
    CanceledIconStyled,
    CopyButton,
    DeliveryInfoWrapper,
    DoneIconStyled,
    LinkContainer,
    MobileStepLabelStyled,
    MoreInfoButton,
    NfeButton,
    OrderInfoContainer,
    OrderContainer,
    PageWrapper,
    ProductImage,
    ProductInfo,
    ShippingAmountInfo,
    ShippingInfo,
    StatusBulletIconStyled,
    StepLabelStyled,
    StoreIconStyled,
    StoreInfoStyled,
} from "./styles";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Divider from '@material-ui/core/Divider';
import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { numberToPrice } from '../../../utils/helpers';

const API_URL = process.env.API_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
import axios from "axios";

const InoviceDetail = ({invoiceNumber, open, handleCloseNfe}) => {
    const [ invoiceCopied, setInvoiceCopied ] = useState(false);
    const copyInvoiceNumber = () => {
        setInvoiceCopied(true);
        navigator.clipboard.writeText(invoiceNumber);
    }

    return (
        <Dialog open={open} onClose={handleCloseNfe} aria-labelledby="nfe-dialog-title">
            <DialogTitle id="nfe-dialog-title">NOTA FISCAL ELETRÔNICA</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <TextField
                        margin="dense"
                        id={`nfe-${invoiceNumber || ""}`}
                        value={invoiceNumber}
                        type="text"
                        fullWidth
                    />
                </DialogContentText>
                <DialogContentText>
                    Como consultar minha nota fiscal?
                    <CopyButton onClick={copyInvoiceNumber}>
                        { invoiceCopied ? "Copiado!" : "Copie a chave de acesso"}
                    </CopyButton>
                    Entre em um dos sites:
                    <LinkContainer>
                        <a target="_blank" href="http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=d09fwabTnLk=">
                            RESUMO DA NOTA FISCAL
                        </a>
                        <br/>
                        <a target="_blank" href="http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=">
                            NOTA FISCAL COMPLETA
                        </a>
                    </LinkContainer>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseNfe} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const DetailedOrder = ({desktop, order}) => {
    const [ openNfeDialog, setOpenNfeDialog ] = useState(false);

    const handleOpenNfeClick = () => {
        setOpenNfeDialog(true);
    }

    const handleCloseNfe = () => {
        setOpenNfeDialog(false);
    }

    return (
        <Grid container>
            { order.splittedOrders.map((split) => (
                <DeliveryInfoWrapper>
                    <Grid container>
                        <StoreIconStyled>
                            <StoreIcon />
                            </StoreIconStyled>
                            <StoreInfoStyled>
                                <h3>{split.deliveredBy.title}</h3>
                                { split.deliveredBy.address && (<p>{split.deliveredBy.address}</p>) }
                                { split.deliveredBy.phone && (<p>{split.deliveredBy.phone}</p>) }
                                { split.deliveredBy.whatsApp && (<p>{split.deliveredBy.whatsApp}</p>) }
                        </StoreInfoStyled>
                        <Divider />
                        <Grid item xs={12}>
                            {desktop ?
                            (
                                <Stepper activeStep={3} orientation="horizontal">
                                    {split.statusHistory.map((status, index) => (
                                        <Step key={status.label}>
                                            <Grid container>
                                                <Grid item xs={12}>
                                                    <StepLabelStyled>
                                                        {status.label}
                                                    </StepLabelStyled>
                                                </Grid>
                                                <Grid item xs={12} style={{"text-align": "center"}}>
                                                    { status.status === "CANCELADO" ?
                                                        <CanceledIconStyled /> :
                                                        <DoneIconStyled type={status.type}/>
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Step>
                                    )) }
                                </Stepper>
                            ) :
                            (
                                <Stepper activeStep={3} orientation="vertical">
                                    {split.statusHistory.map((status, index) => (
                                        <Step key={status.label}>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    { status.status === "CANCELADO" ?
                                                        <CanceledIconStyled /> :
                                                        <DoneIconStyled type={status.type}/>
                                                    }
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <MobileStepLabelStyled>
                                                        {status.label}
                                                    </MobileStepLabelStyled>
                                                </Grid>
                                            </Grid>
                                        </Step>
                                    )) }
                                </Stepper>
                            )}
                        </Grid>
                        
                        {split.items.map((item) => 
                            desktop ?
                            (
                                
                                <Grid container>
                                    <Grid item xs={3}>
                                        <ProductImage>
                                            <img src={`https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${item.image}&size=256`} />
                                        </ProductImage>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ProductInfo>
                                            <p>
                                                <a target="_blank" href={`${FRONTEND_URL}/${item.url}`}>
                                                    {item.name}
                                                </a>
                                            </p>
                                        </ProductInfo>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ProductInfo>
                                            <h3>{numberToPrice(item.price)}</h3>
                                        </ProductInfo>
                                    </Grid>
                                    { item.quantity >= 1 && (
                                        <Grid item xs={2}>
                                            <ProductInfo>
                                                <h3>{item.quantity} un.</h3>
                                            </ProductInfo>
                                        </Grid>
                                    ) }
                                </Grid>
                            )
                            :
                            (
                                <Grid container>
                                    <Grid item xs={4}>
                                        <ProductImage>
                                            <img src={`https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${item.image}&size=256`} />
                                        </ProductImage>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Grid item xs={12}>
                                            <ProductInfo>
                                                <p>
                                                    <a target="_blank" href={`${FRONTEND_URL}/${item.url}`}>
                                                        {item.name}
                                                    </a>
                                                </p>
                                            </ProductInfo>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ProductInfo>
                                                <h3>{numberToPrice(item.price)}</h3>
                                            </ProductInfo>
                                        </Grid>
                                        { item.quantity >= 1 && (
                                            <Grid item xs={6}>
                                                <ProductInfo>
                                                    <h3>{item.quantity} un.</h3>
                                                </ProductInfo>
                                            </Grid>
                                        ) }
                                    </Grid>
                                </Grid>
                            ))
                        }

                        { desktop ? 
                            (
                                <Grid container>
                                    <Grid item xs={3}>
                                        <ShippingInfo>
                                            <LocalShippingIcon />
                                        </ShippingInfo>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ShippingAmountInfo>
                                            <p>{split.deliveredBy.data.label}</p>
                                        </ShippingAmountInfo>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ShippingAmountInfo>
                                            <h3>
                                                {
                                                    split.deliveredBy.data.cost == 0 ? "Frete grátis" :
                                                    numberToPrice(split.deliveredBy.data.cost)
                                                }
                                            </h3>
                                        </ShippingAmountInfo>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ShippingAmountInfo>
                                            {split.deliveredBy.data.company && (
                                                <p>
                                                    <a target="_blank" href={split.deliveredBy.data.url}>{split.deliveredBy.data.company}</a>
                                                </p>
                                            )}
                                        </ShippingAmountInfo>
                                    </Grid>
                                </Grid>
                            ) 
                            : 
                            (
                                <Grid container>
                                    <Grid item xs={ desktop ? 3 : 4 }>
                                        <ShippingInfo>
                                            <LocalShippingIcon />
                                        </ShippingInfo>
                                    </Grid>
                                    <Grid item xs={ desktop ? 3 : 6 }>
                                        <ShippingAmountInfo>
                                            <p>{split.deliveredBy.data.label}</p>
                                            <h3>
                                                {
                                                    split.deliveredBy.data.cost == 0 ? "Frete grátis" :
                                                    numberToPrice(split.deliveredBy.data.cost)
                                                }
                                            </h3>
                                            {split.deliveredBy.data.company && (
                                                <p>
                                                    <a target="_blank" href={split.deliveredBy.data.url}>{split.deliveredBy.data.company}</a>
                                                </p>
                                            )}
                                        </ShippingAmountInfo>
                                    </Grid>
                                </Grid>
                            ) 
                        }
                        { split.invoiceNumber && (
                        <Grid item xs={12}>
                            <NfeButton onClick={handleOpenNfeClick}>
                                <p>DETALHES DA NFE</p>
                            </NfeButton>    
                        </Grid>
                        )}


                    </Grid>
                    {split.invoiceNumber && (
                        <InoviceDetail 
                            invoiceNumber={split.invoiceNumber}
                            open={openNfeDialog}
                            handleCloseNfe={handleCloseNfe}
                        />
                    )}

                </DeliveryInfoWrapper>
            ))}
        </Grid>
    );

}

const ResumedOrder = ({desktop, order}) => {
    const [ detailed, setDetailed ] = useState(false);

    return (
        <OrderContainer>
            <Paper elevation={3}>
                { desktop ?
                    (              
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid xs={3}>
                                    <OrderInfoContainer>
                                        <h3>Pedido</h3>
                                        <p>{order.orderId}</p>
                                    </OrderInfoContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderInfoContainer>
                                        <h3>Data</h3>
                                        <p>{order.orderDate}</p>
                                    </OrderInfoContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderInfoContainer>
                                        <h3>Total</h3>
                                        <p>{numberToPrice(order.totalAmount)}</p>
                                    </OrderInfoContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderInfoContainer>
                                        <h3>Pagamento</h3>
                                        <p><StatusBulletIconStyled color={order.paymentData.status.color} /> {order.paymentData.type} | {order.paymentData.status.status}</p>
                                    </OrderInfoContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                    :
                    (
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid xs={6}>
                                        <OrderInfoContainer>
                                            <h3>Pedido</h3>
                                            <p>{order.orderId}</p>
                                        </OrderInfoContainer>
                                    </Grid>
                                    <Grid xs={6}>
                                        <OrderInfoContainer>
                                            <h3>Data</h3>
                                            <p>{order.orderDate}</p>
                                        </OrderInfoContainer>
                                    </Grid>
                                    <Grid xs={6}>
                                        <OrderInfoContainer>
                                            <h3>Total</h3>
                                            <p>{numberToPrice(order.totalAmount)}</p>
                                        </OrderInfoContainer>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <OrderInfoContainer>
                                            <h3>Pagamento</h3>
                                            <p><StatusBulletIconStyled color={order.paymentData.status.color} /> {order.paymentData.type} | {order.paymentData.status.status}</p>
                                        </OrderInfoContainer>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                }

                { detailed && (<DetailedOrder desktop={desktop} order={order}/>) }

                <MoreInfoButton onClick={() => setDetailed(!detailed)}>

                    <button>{ detailed ? "VER MENOS" : "VER MAIS" }</button>

                </MoreInfoButton>
            </Paper>
        </OrderContainer>
    );
}

const CustomerOrders = ({desktop}) => {
    const { dispatch, state } = useContext(store);
    const [ orders, setOrders ] = useState([]);
    const [ emptyOrdersMessage, setEmptyOrdersMessage ] = useState(null);

    const fetchOrders = async(token) => {
        try{
            dispatch({ type: "LOADING_DATA", payload: true });
            let serviceResponse = await axios.get(`${API_URL}/customers/orders?token=${token}`);
            if(serviceResponse.status === 200 && serviceResponse.data.data){
                setOrders(serviceResponse.data.data);
            }
            dispatch({ type: "LOADING_DATA", payload: false });
        }
        catch(error){
            setEmptyOrdersMessage(`Ops, você ainda não possui pedidos.`);
            dispatch({ type: "LOADING_DATA", payload: false });
        }
    }

    useEffect(() => {
        if(state && state.customerState && state.customerState.loggedIn){
            fetchOrders(state.customerState.token);
        }
        else{
            window.location = `${FRONTEND_URL}/minha-conta`;
        }
    }, []);

    return (
        <PageWrapper>
            <h1>Meus pedidos</h1>
            { orders.length === 0 ? (
                <p>{emptyOrdersMessage}</p>
            ) : (
                <React.Fragment>
                    {
                        orders.map((order) => (
                            <ResumedOrder 
                                desktop={desktop} 
                                order={order}
                            />
                        ))
                    }
                </React.Fragment>
            ) }

        </PageWrapper>
    );
};

export default CustomerOrders;