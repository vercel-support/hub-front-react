import React from "react";
import Grid from '@material-ui/core/Grid';
import { ContentSeoStyled } from "./styles";

const FRONTEND_URL = process.env.FRONTEND_URL; 

const Content = () => (
    <>
    <ContentSeoStyled>
        <Grid container>
          <Grid item lg={3} xs={6}>
            <h3>cachorro</h3>
            <ul>
                <a href={`${FRONTEND_URL}/cachorro/alimentacao/racoes`}>
                    <li>Ração para cachorro</li>
                </a>
                <a href={`${FRONTEND_URL}/cachorro/farmacia/antipulgas-e-carrapatos-para-cachorro`}>
                    <li>Antipulgas para cachorro</li>
                </a>
                <a href={`${FRONTEND_URL}/cachorro/higiene/tapetes-higienicos`}>
                    <li>Tapete Higiênico para cachorro</li>
                </a>                
                <a href={`${FRONTEND_URL}/cachorro/boutique/camas`}>
                    <li>Cama para cachorro</li>
                </a>
                <a href={`${FRONTEND_URL}/cachorro/brinquedos`}>
                    <li>Brinquedo para cachorro</li>
                </a>
                <a href={`${FRONTEND_URL}/cachorro/passeio/coleiras-guias-peitorais`}>
                    <li>Coleiras e Guias para cachorro</li>
                </a>
            </ul>
          </Grid>
          <Grid item lg={3} xs={6}>
          <h3>gato</h3>
            <ul>
                <a href={`${FRONTEND_URL}/gato/alimentacao/racoes`}>
                    <li>Ração para gato</li>
                </a>
                <a href={`${FRONTEND_URL}/gato/alimentacao/fonte-para-gatos`}>
                    <li>Fonte para gato</li>
                </a>
                <a href={`${FRONTEND_URL}/gato/higiene/areia-para-gatos`}>
                    <li>Areia para gato</li>
                </a>
                <a href={`${FRONTEND_URL}/gato/brinquedos/arranhador-para-gatos`}>
                    <li>Arranhador para gato</li>
                </a>
                <a href={`${FRONTEND_URL}/gato/higiene/caixas-de-areia-para-gatos`}>
                    <li>Caixas para gato</li>
                </a>
                <a href={`${FRONTEND_URL}/gato/boutique/camas`}>
                    <li>Caminha para gato</li>
                </a>
            </ul>
          </Grid>
          <Grid item lg={3} xs={6}>
          <h3>rações</h3>
            <ul>
                <a href={`${FRONTEND_URL}/marcas/royal-canin`}>
                    <li>Ração Royal Canin</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/premier`}>
                    <li>Ração Premier</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/golden`}>
                    <li>Ração Golden</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/hills`}>
                    <li>Ração Hill´s</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/biofresh`}>
                    <li>Ração Biofresh</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/farmina`}>
                    <li>Ração Farmina</li>
                </a>
            </ul>
          </Grid>
          <Grid item lg={3} xs={6}>
          <h3>principais marcas</h3>
            <ul>
                <a href={`${FRONTEND_URL}/marcas/pet-choice`}>
                    <li>Pet Choice</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/bravecto`}>
                    <li>Bravecto</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/nexgard`}>
                    <li>Nexgard</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/bayer`}>
                    <li>Bayer</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/apoquel`}>
                    <li>Apoquel</li>
                </a>
                <a href={`${FRONTEND_URL}/marcas/revolution`}>
                    <li>Revolution</li>
                </a>
            </ul>
          </Grid>
        </Grid>
    </ContentSeoStyled>
    </>
  );
  
  export default Content;
