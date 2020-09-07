import React, { useEffect, useState } from "react";
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

const ResumeForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const [resumeInfo, setResumeInfo] = useState({
    subtotal: 0, discount: 0, shipping: 0, total: 0
  });
  const [products, setProducts] = useState([]);

  const calculateResumeInfo = () => {
    let subtotal = 0;
    products.map(product =>{
      subtotal+= (product.specialPrice || product.price) * product.quantity;
    });

    const selectedShippingMethod = localStorage.getItem("selected-shipping-method");
    const shippingOptions = JSON.parse(localStorage.getItem("shipping-options"), "{}");
    const selectedShippingOption = shippingOptions[selectedShippingMethod];
    if(selectedShippingMethod != "")
      setResumeInfo({
        ...resumeInfo,
        subtotal, shipping: selectedShippingMethod.price, total: subtotal + selectedShippingOption.price
      });
    else
      setResumeInfo({
        ...resumeInfo,
        subtotal, shipping: 0, total: subtotal
      });  
  }

  useEffect(() => {
    calculateResumeInfo();
  }, [products]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("productList") || "[]"));
  }, []);

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
              <span>{numberToPrice(item.specialPrice || item.price)}</span>
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
              {numberToPrice(resumeInfo.total)}
            </Typography>
          </div>
        </ResumeFormAmountStyles>
      </React.Fragment>
    </ResumeFormStyles>
  );
};

export default ResumeForm;
