import React from "react";
import { useForm } from "react-hook-form";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import { CardImage, CartPrice } from "../../atoms";
import { numberToPrice } from "../../../utils/helpers";
import { ResumeFormStyles, ResumeFormAmountStyles } from "./styles";

const ResumeForm = ({ shipping, total }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <ResumeFormStyles>
      <Typography variant="h5" component="h6">
        Resumo
      </Typography>
      <React.Fragment>
        {shipping && shipping.items.map((item) => (
          <Card>
            <CardMedia title="Resume Title">
              <CardImage image={item.image} />
            </CardMedia>
            <CardContent>
              <p>{item.name}</p>
              <span>{numberToPrice(item.specialPrice)}</span>
            </CardContent>
          </Card>
        ))}

        <ResumeFormAmountStyles>
          <div className="resume-label">
            <Typography variant="h5" component="h6">
              Total:
            </Typography>
          </div>
          <div className="resume-total">
            <Typography variant="h5" component="h6">
              {numberToPrice(total)}
            </Typography>
          </div>
        </ResumeFormAmountStyles>
      </React.Fragment>
    </ResumeFormStyles>
  );
};

export default ResumeForm;
