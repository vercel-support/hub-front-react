  
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Tab,
  Tabs,
  Typography,
  useMediaQuery
} from '@material-ui/core';

import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TripOriginIcon from '@material-ui/icons/TripOrigin';

import { useTheme } from '@material-ui/core/styles';
import { numberToPrice } from '../../../utils/helpers';

import {
  InfoStyled
} from "./styles";

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  titleContainer: {
    backgroundColor: '#2983B9',
    color: '#ffffff'
  },
  agreeButton: {
    textAlign: 'left'
  }
}));

const RewardsInfoDialog = ({data, handleCloseAbout}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [ open, setOpen ] = useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setOpen(false);
    handleCloseAbout();
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={open}
      scroll="paper"
      maxWidth="md"
      fullScreen={fullScreen}
    >
      <DialogTitle className={classes.titleContainer} id="scroll-dialog-title">
        Sobre a promoção {data.code}
      </DialogTitle>
        <DialogContent dividers="true">

        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Condições" icon={<ShoppingBasket />} {...a11yProps(0)} />
              <Tab label="Como usar o crédito" icon={<MonetizationOnIcon />} {...a11yProps(1)} />
              <Tab label="Sobre o cashback" icon={<HelpIcon />} {...a11yProps(2)} />
              
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            { data.conditions && data.conditions.length > 0 ?
              <InfoStyled>
                <h4>
                  Com a promoção {data.code}, você ganha {data.reward}!<br/>
                  Para isso, você precisa:
                </h4> 
                <List>
                  {data.conditions.map((condition) => (
                    <ListItem>
                      <ListItemIcon>
                        <CircularProgressWithLabel value={parseInt(Math.min(condition.completed, 100))} />
                      </ListItemIcon>
                      <ListItem>
                        {condition.condition}
                      </ListItem>
                    </ListItem>
                  ))}
  
                </List>
              </InfoStyled> :
              <InfoStyled>
                <h4>Com a promoção {data.code}, você ganha {data.reward}!</h4>
                <h4>Aproveita que ela é válida para QUALQUER compra!</h4>
              </InfoStyled>
            }

          </TabPanel>
          <TabPanel value={value} index={1}>
            <InfoStyled>
              <h4>
                Você recebe {data.reward} de volta automaticamente como desconto na sua próxima compra.
              </h4>
              <p>
                Vale lembrar que:
              </p>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <TripOriginIcon />
                  </ListItemIcon>
                  <ListItem>
                    O crédito é liberado após {data.timeInDaysToApprove} dias a aprovação do pagamento da primeira compra.
                  </ListItem>          
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <TripOriginIcon />
                  </ListItemIcon>
                  <ListItem>
                    O crédito é válido por {data.expirationTimeInDays} dias após a liberação do crédito.
                  </ListItem>          
                </ListItem>

                { data.discountLimit ?
                  <ListItem>
                    <ListItemIcon>
                      <TripOriginIcon />
                    </ListItemIcon>
                    <ListItem>
                      O valor máximo do desconto na próxima compra é de {numberToPrice(data.discountLimit)}.
                    </ListItem>            
                  </ListItem> : null }

                </List>
            </InfoStyled>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <InfoStyled>
              <h3>O que é CASHBACK?</h3>
              <p>
                Para nós, é um jeito de fidelizarmos nossos clientes. <br/>
                Para você, significa receber parte do seu dinheiro de volta após fazer uma compra!
                <br/><br/>
                Funciona assim: se sua compra atende a uma de nossas promoções de cashback,
                você recebe automaticamente parte do seu dinheiro de volta como desconto na sua próxima compra.
              </p>
            </InfoStyled>
          </TabPanel>

    </div>

        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid xs={12}>
            <Button onClick={handleClose} color="primary">
              Entendi
            </Button>
            </Grid>
          </Grid>

        </DialogActions>
    </Dialog>
  );
};

export default RewardsInfoDialog;