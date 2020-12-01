import React from "react";

const ProductReview = ({id}) => (
    <>
        <div id="yv-reviews"></div>
        <div class="yv-qa"></div>
        <div class="yv-id" style={{display: "none"}}>{id}</div>
    </>
);

export default ProductReview;
