import React, { useContext, useState, useEffect } from "react";
import { store } from "../../../store";
import { Grid, Paper } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import {
    DeleteIconStyled,
    EditButtonsContainer,
    EditButton,
    DeleteButton,
    EditIconStyled,
    FormWrapper,
    InputContainer,
    NewAddressButton,
    NewIconStyled,
    PageWrapper,
    SaveButton,
} from "./styles";
const API_URL = process.env.API_URL;
const FRONTEND_URL = process.env.FRONTEND_URL;
import axios from "axios";

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddressCard = ({
    newAddress,
    desktop, 
    token, 
    id, 
    postalCode, 
    street, 
    number, 
    complement, 
    neighborhood, 
    phone, 
    firstName, 
    lastName,
    deleteAddressCallback,
    addAddressCallback
}) => {
    const [ editMode, setEditMode ] = useState(false);
    const [ addressData, setAddressData ] = useState({
        id, postalCode, street, number, neighborhood, phone, firstName, lastName
    });
    const [ responseMessage, setResponseMessage ] = useState({
        message: null, status: null
    });
    const [ snackOpen, setSnackOpen ] = useState(false);
    const [ deleteAddress, setDeleteAddress ] = useState({
        openAlert: false,
        address: null,
    });

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setSnackOpen(false);
    };

    const saveChanges = async() => {
        if(newAddress){
            addAddressCallback(addressData);
            return;
        }        

        let body = {
            token: token,
            ...addressData
        };
        try{
            await axios.post(`${API_URL}/customers/addresses/update`, body);
            setSnackOpen(true);
            setResponseMessage({
                message: "Endereço atualizado!",
                status: true
            });

        }
        catch(error){
            setSnackOpen(true);
            setResponseMessage({
                message: error.response.data.message,
                status: false
            });
        }
        setEditMode(false);
    }

    const handleInputChange = (event) => {
        setResponseMessage({message: null, status: null});
        setAddressData({
            ...addressData,
            [event.target.name]: event.target.value
        });
    }
    
    const handleAlertClose = () => {
        setDeleteAddress({
            ...deleteAddress,
            openAlert: false
        });
    };

    const confirmDelete = () => {
        setDeleteAddress({
            ...deleteAddress,
            openAlert: false
        });
        deleteAddressCallback(id);
    }

    const handleDeleteClick = () => {
        setDeleteAddress({
            openAlert: true,
            address: `${street}, ${number}`,
        })
    }

    useEffect(() => {
        if(newAddress) setEditMode(true);
    }, []);

    return (
        <Paper elevation={0} style={{'margin-bottom': '15px'}}>
            <FormWrapper>
                {!newAddress && (
                    <EditButtonsContainer>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <EditButton onClick={() => {setEditMode(!editMode)}}>
                                    <EditIconStyled/>
                                </EditButton>
                            </Grid>
                            <Grid item xs={6}>
                                <DeleteButton onClick={handleDeleteClick}>
                                    <DeleteIconStyled />
                                </DeleteButton>
                            </Grid>
                        </Grid>
                    </EditButtonsContainer>
                )}

                <Grid container>
                    <Grid item xs={ 12 }>
                        <InputContainer>
                            <h3>CEP</h3>
                            {
                                editMode ?
                                <input 
                                    name="postalCode"
                                    id={`${id}-postalCode`}
                                    type="text"
                                    value={addressData.postalCode}
                                    onChange={handleInputChange}
                                /> :
                                <p>{postalCode}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 6 : 12 }>
                        <InputContainer>
                            <h3>Rua</h3>
                            {
                                editMode ?
                                <input 
                                    name="street"
                                    id={`${id}-street`}
                                    type="text"
                                    value={addressData.street}
                                    onChange={handleInputChange}
                                /> :
                                <p>{street}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 6 : 12 }>
                        <InputContainer>
                            <h3>Número</h3>
                            {
                                editMode ?
                                <input 
                                    name="number"
                                    id={`${id}-number`}
                                    type="text"
                                    value={addressData.number}
                                    onChange={handleInputChange}
                                /> :
                                <p>{number}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 6 : 12 }>
                        <InputContainer>
                            <h3>Bairro</h3>
                            {
                                editMode ?
                                <input 
                                    name="neighborhood"
                                    iid={`${id}-neighborhood`}
                                    type="text"
                                    value={addressData.neighborhood}
                                    onChange={handleInputChange}
                                /> :
                                <p>{neighborhood}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 6 : 12 }>
                        <InputContainer>
                            <h3>Complemento</h3>
                            {
                                editMode ?
                                <input 
                                    name="complement"
                                    id={`${id}-complement`}
                                    type="text"
                                    value={addressData.complement}
                                    onChange={handleInputChange}
                                /> :
                                <p>{complement}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 3 : 12 }>
                        <InputContainer>
                            <h3>Nome</h3>
                            {
                                editMode ?
                                <input 
                                    name="firstName"
                                    iid={`${id}-firstName`}
                                    type="text"
                                    value={addressData.firstName}
                                    onChange={handleInputChange}
                                /> :
                                <p>{firstName}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 3 : 12 }>
                        <InputContainer>
                            <h3>Sobrenome</h3>
                            {
                                editMode ?
                                <input 
                                    name="lastName"
                                    iid={`${id}-lastName`}
                                    type="text"
                                    value={addressData.lastName}
                                    onChange={handleInputChange}
                                /> :
                                <p>{lastName}</p>
                            }
                        </InputContainer>
                    </Grid>
                    <Grid item xs={ desktop ? 6 : 12 }>
                        <InputContainer>
                            <h3>Telefone de entrega</h3>
                            {
                                editMode ?
                                <input 
                                    name="phone"
                                    iid={`${id}-phone`}
                                    type="text"
                                    value={addressData.phone}
                                    onChange={handleInputChange}
                                /> :
                                <p>{phone}</p>
                            }
                        </InputContainer>
                    </Grid>
                </Grid>

                <Snackbar open={snackOpen} autoHideDuration={3000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity={ responseMessage.status ? "success" : "error" }>
                        { responseMessage.message }
                    </Alert>
                </Snackbar>

                <Dialog
                    open={deleteAddress.openAlert}
                    onClose={handleAlertClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{`Remover ${deleteAddress.address}?`}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleAlertClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={confirmDelete} color="primary" autoFocus>
                            Remover
                        </Button>
                    </DialogActions>
                </Dialog>

                {
                    editMode && (
                        <SaveButton onClick={() => {saveChanges()}}>
                            <button>SALVAR</button>
                        </SaveButton>
                    )
                }

            </FormWrapper>

        </Paper>
    );
}

const CustomerAddresses = ({desktop}) => {
    const { dispatch, state } = useContext(store);
    const [ customerAddresses, setCustomerAddresses ] = useState([]);
    const [ createAddress, setCreateAddress ] = useState(false);

    const setNewAddress = async(addressData) => {
        try{
            dispatch({ type: "LOADING_DATA", payload: true });
            let serviceResponse = await axios.post(
                `${API_URL}/customers/addresses/new`, 
                { 
                    token: state.customerState.token ,
                    ...addressData
                }
            );
            setCustomerAddresses(serviceResponse.data.addresses);
            setCreateAddress(false);
            dispatch({ 
                type: "SET_USER_LOGGED_IN",
                payload: {
                    token: state.customerState.token, 
                    customerData: {
                        ...state.customerState.customerData,
                        addresses: serviceResponse.data.addresses
                    }
                }
            });
            dispatch({ type: "LOADING_DATA", payload: false });
        }
        catch(error){
            console.log(error);
            //window.location = `${FRONTEND_URL}/minha-conta`;
            dispatch({ type: "LOADING_DATA", payload: false });
        }
    }

    const deleteAddress = async(id) => {
        try{
            dispatch({ type: "LOADING_DATA", payload: true });
            let serviceResponse = await axios.post(
                `${API_URL}/customers/addresses/delete`, 
                { 
                    token: state.customerState.token ,
                    id
                }
            );
            dispatch({ type: "LOADING_DATA", payload: false });
            window.location.reload();
        }
        catch(error){
            console.log(error);
            dispatch({ type: "LOADING_DATA", payload: false });
            //window.location = `${FRONTEND_URL}/minha-conta`;
        }
    }

    useEffect(() => {
        if(state && state.customerState && state.customerState.loggedIn){
            console.log(state.customerState.customerData.addresses);
            setCustomerAddresses(state.customerState.customerData.addresses);
        }
        else{
            window.location = `${FRONTEND_URL}/minha-conta`;
        }
    }, []);

    return (
        <PageWrapper>
            <h1>Meus endereços</h1>
            {
                createAddress ? 
                <AddressCard
                    desktop={desktop}
                    newAddress={true}
                    addAddressCallback={setNewAddress}
                /> :
                <NewAddressButton onClick={() => {setCreateAddress(true)}}>
                    <NewIconStyled />
                    NOVO ENDEREÇO
                </NewAddressButton>
            }
            {
                customerAddresses.map((address) => (
                    <AddressCard
                        desktop={desktop}
                        token={state.customerState.token}
                        id={address.id} 
                        postalCode={address.postcode}
                        street={address.street[0]}
                        number={address.street[1]}
                        complement={address.street[2]}
                        neighborhood={address.street[3]}
                        phone={address.telephone}
                        firstName={address.firstname}
                        lastName={address.lastname}
                        deleteAddressCallback={deleteAddress}
                    />
                ))
            }
        </PageWrapper>
    );
};

export default CustomerAddresses;