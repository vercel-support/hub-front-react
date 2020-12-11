import React, { useState } from "react";
import { Grid, Paper } from "@material-ui/core";
import {
    DeliveryInfoWrapper,
    DoneIconStyled,
    MobileStepLabelStyled,
    MoreInfoButton,
    NfeButton,
    OrderContainer,
    PageWrapper,
    ProductImage,
    ProductInfo,
    ShippingAmountInfo,
    ShippingInfo,
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

const DetailedOrder = ({desktop}) => {
    const steps = [ "Pedido efetuado", "Pagamento autorizado", "Pedido separado" ];
    const [ openNfeDialog, setOpenNfeDialog ] = useState(false);

    const handleOpenNfeClick = () => {
        setOpenNfeDialog(true);
    }

    const handleCloseNfe = () => {
        setOpenNfeDialog(false);
    }

    return (
        <DeliveryInfoWrapper>
            <Grid container>
                <StoreIconStyled>
                    <StoreIcon />
                    </StoreIconStyled>
                    <StoreInfoStyled>
                        <h3>Entregue por Petland Campolim</h3>
                        <p>Avenida Antônio Carlos Comitre, 1230 Térreo | Sorocaba-SP</p>
                </StoreInfoStyled>
                <Divider />
                <Grid item xs={12}>
                    {desktop ?
                    (
                        <Stepper activeStep={3} orientation="horizontal">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <StepLabelStyled>
                                                {label}
                                            </StepLabelStyled>
                                        </Grid>
                                        <Grid item xs={12} style={{"text-align": "center"}}>
                                            <DoneIconStyled />
                                        </Grid>
                                    </Grid>
                                </Step>
                            )) }
                        </Stepper>
                    ) :
                    (
                        <Stepper activeStep={3} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <Grid container>
                                        <Grid item xs={2}>
                                            <DoneIconStyled />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <MobileStepLabelStyled>
                                                {label}
                                            </MobileStepLabelStyled>
                                        </Grid>
                                    </Grid>
                                </Step>
                            )) }
                        </Stepper>
                    )}
                </Grid>
                <Grid item xs={12}>
                {desktop ?
                (                    
                    <Grid container>
                        <Grid item xs={3}>
                            <ProductImage>
                                <img src={"https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=/r/a/racao-biofresh-caes-adultos-racas-pequenas-frango1.jpg&size=256"} />
                            </ProductImage>
                        </Grid>
                        <Grid item xs={6}>
                            <ProductInfo>
                                <p>Ração Biofresh para Cães Adultos Raças Pequenas e Mini Sabor Frango - 10,1 kg</p>
                            </ProductInfo>
                        </Grid>
                        <Grid item xs={3}>
                            <ProductInfo>
                                <h3>1x R$ 176,72</h3>
                            </ProductInfo>
                        </Grid>
                    </Grid>
                ) :
                (
                    <Grid container>
                        <Grid item xs={4}>
                            <ProductImage>
                                <img src={"https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=/r/a/racao-biofresh-caes-adultos-racas-pequenas-frango1.jpg&size=256"} />
                            </ProductImage>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid item xs={12}>
                                <ProductInfo>
                                    <p>Ração Biofresh para Cães Adultos Raças Pequenas e Mini Sabor Frango - 10,1 kg</p>
                                </ProductInfo>
                            </Grid>
                            <Grid item xs={12}>
                                <ProductInfo>
                                    <h3>1x R$ 176,72</h3>
                                </ProductInfo>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
                </Grid>

                <Grid container>
                    <Grid item xs={ desktop ? 3 : 4 }>
                        <ShippingInfo>
                            <LocalShippingIcon />
                        </ShippingInfo>
                    </Grid>
                    <Grid item xs={ desktop ? 3 : 6 }>
                        <ShippingAmountInfo>
                            <h3>Entrega super expressa: R$ 9,90</h3>
                        </ShippingAmountInfo>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <NfeButton onClick={handleOpenNfeClick}>
                        <p>DETALHES DA NFE</p>
                    </NfeButton>    
                </Grid>
            </Grid>

            <Dialog open={openNfeDialog} onClose={handleCloseNfe} aria-labelledby="nfe-dialog-title">
                <DialogTitle id="nfe-dialog-title">NOTA FISCAL ELETRÔNICA</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <TextField
                            margin="dense"
                            id="nfe"
                            value={"código da nfe"}
                            type="text"
                            fullWidth
                        />
                    </DialogContentText>
                    <DialogContentText>
                        COMO CONSULTAR OU IMPRIMIR MINHA NOTA FISCAL?
                        <ul>
                            <li>
                                Copie a sua chave de acesso da nf-e acima;
                            </li>
                            <li>
                                Entre em um dos sites abaixo e insira a sua chave;
                            </li>
                        </ul>
                        <a target="_blank" href="http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=d09fwabTnLk=">
                            RESUMO DA NOTA FISCAL
                        </a>
                        <br/>
                        <a target="_blank" href="http://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=completa&tipoConteudo=XbSeqxE8pl8=">
                            NOTA FISCAL COMPLETA
                        </a>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseNfe} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

        </DeliveryInfoWrapper>
    );
}

const CustomerOrders = ({desktop}) => {
    const [ detailed, setDetailed ] = useState(false);

    return (
        <PageWrapper>
            <h1>Meus pedidos</h1>
            <Paper elevation={3}>
                { desktop ?
                    (              
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid xs={3}>
                                    <OrderContainer>
                                        <h3>Pedido</h3>
                                        <p>20046</p>
                                    </OrderContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderContainer>
                                        <h3>Data</h3>
                                        <p>01/01/2020</p>
                                    </OrderContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderContainer>
                                        <h3>Total</h3>
                                        <p>R$ 223,30</p>
                                    </OrderContainer>
                                </Grid>
                                <Grid xs={3}>
                                    <OrderContainer>
                                        <h3>Pagamento</h3>
                                        <p>Crédito | Aprovado</p>
                                    </OrderContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                    :
                    (
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid xs={4}>
                                        <OrderContainer>
                                            <h3>Pedido</h3>
                                            <p>20046</p>
                                        </OrderContainer>
                                    </Grid>
                                    <Grid xs={4}>
                                        <OrderContainer>
                                            <h3>Data</h3>
                                            <p>01/01/2020</p>
                                        </OrderContainer>
                                    </Grid>
                                    <Grid xs={4}>
                                        <OrderContainer>
                                            <h3>Total</h3>
                                            <p>R$ 223,30</p>
                                        </OrderContainer>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <OrderContainer>
                                    <h3>Pagamento</h3>
                                    <p>Crédito | Em análise</p>
                                </OrderContainer>
                            </Grid>
                        </Grid>
                    )
                }

                { detailed && (<DetailedOrder desktop={desktop}/>) }

                <MoreInfoButton onClick={() => setDetailed(!detailed)}>

                    <button>{ detailed ? "VER MENOS" : "VER MAIS" }</button>

                </MoreInfoButton>
            </Paper>
        </PageWrapper>
    );
};

export default CustomerOrders;