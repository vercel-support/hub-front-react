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
        width: 14%;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
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

    .des {
        font-size: 12px;
        color: #888;
    }

    .save {
        position: absolute;
        right: 10px;
        bottom: 2px;
    }
  
`;
