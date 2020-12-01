import React, { useEffect, useState, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
//Tutorial em:
//https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/js/EmblaCarousel.js:207-219
import { 
    PrevButton, 
    NextButton 
} from "./buttons";
import {
    Availability,
    CardBrand,
    CardImage,
    CardName,
    CardPrice,
  } from "../../atoms";
import {
    AvailabilityTagStyled,
    ProductCardStyled,
    ProductContainerStyled,
    ProductWrapper,
    TitleStyled,
    Wrapper,
} from "./styles";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;
import axios from "axios";
import Link from "next/link";

const ProductsCarousel = ({type, sku}) => {
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
            const savedStore = JSON.parse(localStorage.getItem("myStore") || {});
            let url = `${API_URL}/catalogs/products/similars?sku=${sku}`;
            if(savedStore && savedStore.id)
                url += `&storeId=${savedStore.id}`;
            let response = await axios.get(url);
            if(response.status === 200 && response.data.data.length > 0){
                setProducts(response.data.data);
            }
            else{
                setProducts([]);
            }
        }
        catch(error){
            setProducts([]);
        }
    }

    const handleProductClick = (url) => {
        window.location = `https://www.geracaopet.com.br/${url}`
    }

    useEffect(() => {
        if(type === "similars" && sku){
            fetchSimilarProducts();
        }
    }, [sku]);

    if(!products || products.length < 3) return null;

    return (
        <Wrapper>
            <div className="embla">
                <TitleStyled>
                    <h2>SEU PET TAMBÉM PODE GOSTAR</h2>
                </TitleStyled>
                <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {products.map((product) => (
                    <div className="embla__slide" key={product.sku}>

                        <div className="embla__slide__inner">
                            <ProductWrapper>
                                <ProductCardStyled>
                                    <ProductContainerStyled
                                        onClick={() => handleProductClick(product.url)}
                                    >
                                        <a>
                                            <CardImage image={product.image} name={product.name} />
                                            <CardName name={product.name} />
                                            {product?.brand?.label && <CardBrand brand={product.brand.label} />}
                                                <CardPrice
                                                price={product.bestPrice.price}
                                                specialPrice={product.bestPrice.specialPrice}
                                                />
                                                <AvailabilityTagStyled>
                                                    <Availability available={true} />
                                                </AvailabilityTagStyled>
                                            
                                        </a>

                                    </ProductContainerStyled>
                                </ProductCardStyled>
                            </ProductWrapper>
                        </div>

                    </div>
                    ))}
                </div>
                </div>
                <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
            </div>            
        </Wrapper>
        
    );
}

export default ProductsCarousel;