import React from "react";
import { useForm } from "react-hook-form";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { ResumeFormStyles } from "./styles";

const ResumeForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ResumeFormStyles>
      <Typography variant="h5" component="h6">
        Resumo
      </Typography>
      <React.Fragment>
        <Card>
          <CardMedia title="Resume Title">
            <img src="/assets/images/resume.jpg" />
          </CardMedia>
          <CardContent>
            <p>
              Ração Royal Canin para Cães Adultos de Porte Pequeno Pelo Longo
              Castrado
            </p>
            <span>R$ 239,90</span>
          </CardContent>
        </Card>

        <Card>
          <CardMedia title="Resume Title">
            <img src="/assets/images/resume.jpg" />
          </CardMedia>
          <CardContent>
            <p>
              Ração Royal Canin para Cães Adultos de Porte Pequeno Pelo Longo
              Castrado
            </p>
            <span>R$ 239,90</span>
          </CardContent>
        </Card>

        <Card>
          <CardMedia title="Resume Title">
            <img src="/assets/images/resume.jpg" />
          </CardMedia>
          <CardContent>
            <p>
              Ração Royal Canin para Cães Adultos de Porte Pequeno Pelo Longo
              Castrado
            </p>
            <span>R$ 239,90</span>
          </CardContent>
        </Card>
      </React.Fragment>
    </ResumeFormStyles>
  );
};

export default ResumeForm;
