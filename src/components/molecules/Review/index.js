import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ReviewStyles, ReviewCepStyles } from "./styles";
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';

const products = [
  { name: "Product 1", desc: "A nice thing", price: "$9.99" },
  { name: "Product 2", desc: "Another thing", price: "$3.45" },
  { name: "Product 3", desc: "Something else", price: "$6.51" },
  { name: "Product 4", desc: "Best thing of all", price: "$14.11" },
  { name: "Shipping", desc: "", price: "Free" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const useCardStyles = makeStyles({
  root: {
    minWidth: 275,    
    backgroundColor : '#dedede80',
    padding: '8px 12px !important;',
    width : '100%',
    margin : '0 10px 0 10px',

    '& p' : {
      color : '#656262'
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  action : {
    display : 'flex',
    justifyContent : 'center',

    '& input' : {
      width : '100%'
    },

    '& input[type=submit]' : {
      backgroundColor : '#6666668a'
    }
  }
});

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  const classesCard = useCardStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <ReviewStyles>    
      <Grid container spacing={3}>
        <Grid xs={12} sm={12}>
          
          <form>
              <Grid container spacing={3}>
                <Grid xs={12} sm={12} class="cards">

                  <Card className={classesCard.root} variant="outlined">
                    <CardContent>                
                      <Typography variant="h5" component="h2">
                        Marcos Domingues
                      </Typography>                
                      <Typography variant="body2" component="p">
                        Rua Fernandes Camacho, 160 - 
                        <br />
                        Casa 55 - Jardim Alvorada - 
                        <br />
                        Sorocaba/SP
                        <br />
                        CEP: 18080-430
                      </Typography>
                    </CardContent>
                    <CardActions className={classesCard.action}>
                      <input type="submit" value="Entregar nesse endereço" />                
                    </CardActions>
                  </Card>                

                  <Card className={classesCard.root} variant="outlined">
                    <CardContent>                
                      <Typography variant="h5" component="h2">
                        Marcos Domingues
                      </Typography>                
                      <Typography variant="body2" component="p">
                        Rua Fernandes Camacho, 160 - 
                        <br />
                        Casa 55 - Jardim Alvorada - 
                        <br />
                        Sorocaba/SP
                        <br />
                        CEP: 18080-430
                      </Typography>
                    </CardContent>
                    <CardActions className={classesCard.action}>
                      <input type="submit" value="Entregar nesse endereço" />                
                    </CardActions>
                  </Card>
                  
                </Grid>
              </Grid>
            </form>

        </Grid>

        <Grid xs={12} sm={12}>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>

                <Grid xs={12} sm={12}>
                  <div class="icon">
                    <RoomIcon />
                    <Typography variant="h6" gutterBottom>
                      Novo Endereço
                    </Typography>
                  </div>
                </Grid>        
                
                <Grid  xs={12} sm={12}>
                  <ReviewCepStyles>
                    <label htmlFor="CEP">CEP</label>
                    <div>
                      <input type="text" name="cep" ref={register}/>
                      <input type="button" value="OK" />              
                    </div>
                  </ReviewCepStyles>
                </Grid>            
                <Grid  xs={8} sm={8}>
                  <label htmlFor="rua">Rua</label>
                  <input type="text" name="rua" ref={register}></input>              
                </Grid>            
                <Grid  xs={4} sm={4}>
                  <label htmlFor="numero">Número</label>
                  <input type="text" name="numero" ref={register}>                
                  </input>              
                </Grid>            
                <Grid  xs={8} sm={8}>
                  <label htmlFor="complemento">Complemento</label>
                  <input type="text" name="complemento" ref={register}></input>              
                </Grid>            
                <Grid  xs={4} sm={4}>
                  <label htmlFor="bairro">Bairro</label>
                  <input type="text" name="bairro" ref={register}></input>              
                </Grid>            
                <Grid  xs={8} sm={8}>
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" name="cidade" ref={register}></input>              
                </Grid>            
                <Grid  xs={4} sm={4}>
                  <label htmlFor="estado">Estado</label>
                  <input type="text" name="estado" ref={register}></input>              
                </Grid>            
                <Grid  xs={12} sm={12}>
                  <label htmlFor="destinatario">Nome do destinatário</label>
                  <input type="text" name="destinatario" ref={register}></input>          
                  <p>Nome de quem retira ou recebe o pedido</p>    
                </Grid>  
                <Grid  xs={12} sm={12} className="submit">
                  <input type="submit" value="Entregar nesse Endereço" />
                </Grid>         
            </Grid>              
          </form>

        </Grid>
      </Grid>  
      

    </ReviewStyles>
  );
};

export default Review;
