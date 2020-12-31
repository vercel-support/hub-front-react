import styled from 'styled-components';

export const ProductCartStyles = styled.li`
    display: flex;
    margin-bottom: 8px;
    padding: 10px 10px;
    min-height: 62px;

    .goods-img {
        position: relative;
        margin-right: 4%;
        display: block;
        width: 10%;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
        }
    }

    .goods-info {
        position: relative;
        width: 80%;

        .goods-title {
            width: 80%;
            height: 38px;
            color: #363636;
            line-height: 1.4;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
        }

        .goods-price {
            margin-top: 6px;
            line-height: 1;

            .goods-price span {
                font-size: 15px;
                color: #7a45e5;
            }
        }
    }
    
    .save {
        position: absolute;
        right: 5px;
        bottom: 10px;
        text-align: right;

        select {
            padding: 10px 36px 10px 13px;
        }

        a {
            padding: 0;
            margin: 0;
            background: 0 0;
            border: none;
            color: gray;
            text-decoration: underline;
            font-weight: 400;
            font-size: 14px;
            text-transform: lowercase;
            display: block;
            text-align: center;
        }

    }
  
`;
