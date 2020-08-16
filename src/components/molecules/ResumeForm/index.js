import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { Paper } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import { ResumeFormStyles } from './styles'

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
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
        padding : '0 !important'
      },
      cover: {        
        padding : theme.spacing(1),
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      playIcon: {
        height: 38,
        width: 38,
      },
      img: {
          width : '87px',
          height : '74px'
      },
      p : {
          font : '#000',
          marginBottom : theme.spacing(1)
      },
      span : {
        font : '#000',
        fontWeight : 'bold'
      }
  }));

const ResumeForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  const theme = useTheme();

  return (
      <ResumeFormStyles>
        <Typography variant="h5" component="h6">
          Resumo
        </Typography>
        <Paper elevation={0}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover} title="Resume Title">
                    <img
                      className={classes.img} 
                      src="/assets/images/resume.jpg" />
                </CardMedia>
                <div className={classes.details}>
                    <CardContent className={classes.content}>                        
                        <p className={classes.p}>
                            Ração Royal Canin para Cães Adultos de Porte Pequeno Pelo Longo Castrado                            
                        </p>
                        <span className={classes.span}>
                            R$ 239,90
                        </span>
                    </CardContent>                
                </div>
            </Card>
            <Divider />
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}                    
                    title="Resume Title">
                    <img
                      className={classes.img} 
                      src="/assets/images/resume.jpg" />
                </CardMedia>
                <div className={classes.details}>
                    <CardContent className={classes.content}>                        
                        <p className={classes.p}>
                            Ração Royal Canin para Cães Adultos de Porte Pequeno Pelo Longo Castrado                            
                        </p>
                        <span className={classes.span}>
                            R$ 239,90
                        </span>
                    </CardContent>                
                </div>
            </Card>
        </Paper>
      </ResumeFormStyles>
  );
}

export default ResumeForm;