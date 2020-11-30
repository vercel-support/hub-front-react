import React, { useEffect, useState, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
//https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/js/EmblaCarousel.js:207-219
import { DotButton, PrevButton, NextButton } from "./buttons";
import {
    ProductImageStyled,
    ProductNameStyled,
    ProductInfoWrapper,
    ProductPriceStyled,
    ProductTagStyled,
    ProductWrapper,
    TitleStyled,
    Wrapper,
  } from "./styles";
import { 
    Card, Grid 
} from "@material-ui/core";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";

const ProductsCarousel = ({type, sku, store}) => {
    const [viewportRef, embla] = useEmblaCarousel();
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
      embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;

        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      }, [embla, setSelectedIndex]);

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

    const [products, setProducts] = useState([]);

    const fetchSimilarProducts = async() => {
        try{
            const savedStore = localStorage.getItem("myStore")
            let url = savedStore && savedStore.id ?
                `${API_URL}/catalogs/products/similars?storeId=${savedStore.id}&sku=${sku}` :
                `${API_URL}/catalogs/products/similars?sku=${sku}`;
            let response = await axios.get(url);
            if(response.status === 200 && response.data.data.length > 0){
                setProducts(response.data.data);
            }
        }
        catch(error){
        }
    }

    useEffect(() => {
        if(type && sku){
            switch(type){
                case "similars":
                    fetchSimilarProducts();
                    break;
            }
        }
    }, []);

    const openProduct = (url) => {
        const newWindow = window.open(`https://www.geracaopet.com.br/${url}`, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null;

        if(embla) embla.reInit();
    }

    if(!products || products.length < 4) return null;

    return (

            <div className="embla">
                <TitleStyled>
                    <h2>SEU PET TAMBÉM PODE GOSTAR</h2>
                </TitleStyled>
                <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {products.map((product) => (
                    <div className="embla__slide" key={product.sku}>
                        <Card>
                        <div className="embla__slide__inner">
                            <ProductWrapper>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <ProductNameStyled onClick={() => openProduct(product.url)}>
                                            <h1>{product.name}</h1>
                                        </ProductNameStyled>
                                    </Grid>
                                    <Grid item xs={5}>
                                        <ProductImageStyled onClick={() => openProduct(product.url)}>
                                            <img src=
                                                {`https://e220k6tgf8.execute-api.sa-east-1.amazonaws.com/v1/resize-image?img=${product.image}&size=256`} 
                                            />
                                        </ProductImageStyled>

                                    </Grid>
                                    <Grid item xs={7}>
                                        <ProductInfoWrapper onClick={() => openProduct(product.url)}>
                                            <ProductPriceStyled>
                                                {product.bestPrice.specialPrice && (
                                                <span className="old">
                                                    {`de ${Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                    }).format(product.bestPrice.price)} por`}
                                                </span>
                                                )}
                                                <span className="new">
                                                {Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }).format(product.bestPrice.specialPrice ? product.bestPrice.specialPrice : product.bestPrice.price)}
                                                </span>
                                                <span className="installments">
                                                {`ou até 3x ${Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }).format(product.bestPrice.specialPrice ? product.bestPrice.specialPrice / 3 : product.bestPrice.price / 3)} sem juros`}
                                                </span>
                                            </ProductPriceStyled>

                                            {
                                                product.bestPrice.promotion_discount ?
                                                <ProductTagStyled>
                                                    {product.bestPrice.promotion_discount}% OFF
                                                </ProductTagStyled> : null
                                            }

                                            {
                                                product.expressDeliveryAvailable ?
                                                <ProductTagStyled>SUPER EXPRESSA</ProductTagStyled> : null
                                            }
                                                                                        
                                        </ProductInfoWrapper>
                                    </Grid>
                                </Grid>

                            </ProductWrapper>
                        </div>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>

        
    );
}

export default ProductsCarousel;