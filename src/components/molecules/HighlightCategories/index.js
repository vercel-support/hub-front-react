import React from "react";
import Grid from '@material-ui/core/Grid';
import TextStyled from "./styles";


const HighlightCategories = () => (
<>
    <Grid item xs={12} container justify="center" alignItems="center">
        <h2>Principais Categorias</h2>
    </Grid>

    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/alimentacao/racoes"}>
        <img
          src= "/assets/images/categorias/racao-para-cachorro.jpg"
          alt="Ração para Cachorro"
          title="Ração para Cachorro"
          width="120px"
        />
        <TextStyled>Ração para Cachorro</TextStyled>
      </a>
    </Grid>

    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/farmacia/antipulgas-e-carrapatos-para-cachorro"}>
        <img
          src= "/assets/images/categorias/antipulgas-cachorro.jpg"
          alt="Antipulgas para Cachorro"
          title="Antipulgas para Cachorro"
          width="120px"
        />
        <TextStyled>Antipulgas para Cachorro</TextStyled>
      </a>
    </Grid>
        
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/higiene/tapetes-higienicos"}>
        <img
          src= "/assets/images/categorias/tapete-higienico.jpg"
          alt="Tapete Higiênico"
          title="Tapete Higiênico"
          width="120px"
        />
        <TextStyled>Tapete Higiênico</TextStyled>
      </a>
    </Grid>
    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/brinquedos"}>
        <img
          src= "/assets/images/categorias/brinquedo-para-cachorro.jpg"
          alt="Brinquedo para Cachorro"
          title="Brinquedo para Cachorro"
          width="120px"
        />
        <TextStyled>Brinquedo para Cachorro</TextStyled>
      </a>
    </Grid>
    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/boutique/camas"}>
        <img
          src= "/assets/images/categorias/cama-para-cachorro.jpg"
          alt="Cama para Cachorro"
          title="Cama para Cachorro"
          width="120px"
        />
        <TextStyled>Cama para Cachorro</TextStyled>
      </a>
    </Grid>
    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/cachorro/passeio/coleiras-guias-peitorais"}>
        <img
          src= "/assets/images/categorias/peitoral-para-cachorro.jpg"
          alt="Coleira, Guia e Peitoral para Cachorro"
          title="Coleira, Guia e Peitoral para Cachorro"
          width="120px"
        />
        <TextStyled>Coleira, Guia e Peitoral</TextStyled>
      </a>
    </Grid>





    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/alimentacao/racoes"}>
        <img
          src= "/assets/images/categorias/racao-para-gatos.jpg"
          alt="Ração para Gatos"
          title="Ração para Gatos"
          width="120px"
        />
        <TextStyled>Ração para Gatos</TextStyled>
      </a>
    </Grid>

    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/higiene/areia-para-gatos"}>
        <img
          src= "/assets/images/categorias/areia-higienica-para-gatos.jpg"
          alt="Areia Higiênica para Gatos"
          title="Areia Higiênica para Gatos"
          width="120px"
        />
        <TextStyled>Areia Higiênica para Gatos</TextStyled>
      </a>
    </Grid>

        
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/farmacia/antipulgas-gatos"}>
        <img
          src= "/assets/images/categorias/antipulgas-para-gatos.jpg"
          alt="Antipulgas para Gatos"
          title="Antipulgas para Gatos"
          width="120px"
        />
        <TextStyled>Antipulgas para Gatos</TextStyled>
      </a>
    </Grid>

    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/alimentacao/fonte-para-gatos"}>
        <img
          src= "/assets/images/categorias/fonte-para-gatos.jpg"
          alt="Fonte para Gatos"
          title="Fonte para Gatos"
          width="120px"
        />
        <TextStyled>Fonte para Gatos</TextStyled>
      </a>
    </Grid>

    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/brinquedos/arranhador-para-gatos"}>
        <img
          src= "/assets/images/categorias/arranhador-para-gatos.jpg"
          alt="Arranhador para Gatos"
          title="Arranhador para Gatos"
          width="120px"
        />
        <TextStyled>Arranhador para Gatos</TextStyled>
      </a>
    </Grid>

    
    <Grid item lg={2} md={2} sm={4} xs={4} style={{textAlign:"center"}}>
      <a href={"/gato/passeio/caixas-bolsas-de-transportes-gatos"}>
        <img
          src= "/assets/images/categorias/bolsa-transporte-para-gatos.jpg"
          alt="Bolsa de Transporte para Gatos"
          title="Bolsa de Transporte para Gatos"
          width="120px"
        />
        <TextStyled>Bolsa de Transporte</TextStyled>
      </a>
    </Grid>


</>
  
  );
  
  export default HighlightCategories;
