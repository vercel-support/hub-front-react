import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { InformationFormStyles, InformationContentStyles } from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    card: {
        display: 'flex',
        marginBottom : theme.spacing(.5)
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
        padding : '.5rem 0 !important',
        '& p:first-child' : {
            margin : theme.spacing(1)          
        }        
      },
      cover: {        
        padding : theme.spacing(1),
      },            
      img: {
          width : '87px',
          height : '74px'
      },
      p : {
          font : '#000',
          margin: '0 !important',          
      },      
      span : {        
        fontWeight : 'bold'
      },
  }));

const InformationForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  const theme = useTheme();

  return (
      <InformationFormStyles>        
        <Paper elevation={0}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover} title="Resume Title">       
                    <AccountCircleIcon />             
                </CardMedia>
                <div className={classes.details}>
                    <CardContent className={classes.content}>    
                        <InformationContentStyles>
                          <span className={classes.span}>
                            Informações Pessoais                          
                          </span>                        
                          <p>
                              E-mail : marco@marco.com
                          </p>
                          <p>
                              Celular : (15) 9 9769-4495
                          </p>
                        </InformationContentStyles>
                    </CardContent>                
                </div>
            </Card>           
        </Paper>        
      </InformationFormStyles>
  );
}

export default InformationForm;