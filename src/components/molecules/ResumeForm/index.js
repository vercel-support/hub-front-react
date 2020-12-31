import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Divider
} from "@material-ui/core";
import { CardImage, CartPrice, CartResumePrices } from "../../atoms";
import { numberToPrice } from "../../../utils/helpers";
import { ResumeFormStyles, ResumeFormAmountStyles } from "./styles";

const ResumeForm = ({ cart }) => {
  const [resumeInfo, setResumeInfo] = useState({
    subtotal: 0, discount: 0, shipping: 0, total: 0
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(cart && cart.products){
      setProducts(cart.products);
      setResumeInfo({
        ...cart
      });
    }
  }, [cart]);

  return (
    <ResumeFormStyles>
      <Typography variant="h5" component="h6">
        Resumo
      </Typography>
      <React.Fragment>
        {products && products.map((item) => (
          <Card>
            <CardMedia title="Resume Title">
              <CardImage image={item.image} />
            </CardMedia>
            <CardContent>
              <p>{item.name}</p>
              <span>{numberToPrice(item.specialPrice || item.price)} {item.quantity > 1 ? `(${item.quantity} itens)` : null}</span>
            </CardContent>
          </Card>
        ))}

        <CartResumePrices cart={cart} />

      </React.Fragment>
    </ResumeFormStyles>
  );
};

export default ResumeForm;
