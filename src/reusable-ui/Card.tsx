import styled from "styled-components";
import type { CoffeeProduct } from "../type/typeCofee";

export default function Card({
  popular,
  image,
  name,
  price,
  rating,
  votes,
  icon,
  available,
}: CoffeeProduct) {
  return (
    <CardStyles>
      <div className="top">
        {popular ? <span className="popular">Popular</span> : ""}
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="down">
        <div className="title-price">
          <h3 className="name">{name}</h3>
          {available ? (
            <div className="price-container">
              <div className="price">{price}</div>
            </div>
          ) : (
            <div className="soldout"> Sold out</div>
          )}
        </div>

        <div className="left-side">
          <span className="icon-container">
            <img src={icon} alt="" />
          </span>
          {votes === 0 ? (
            <div className="novotes"> No ratings</div>
          ) : (
            <div className="opinion">
              <span className="rating">{rating}</span>
              <span className="votes">({votes} votes)</span>
            </div>
          )}
        </div>
      </div>
    </CardStyles>
  );
}

const CardStyles = styled.div`
  padding: 5px 20px;
  color: #fef7ee;
  position: relative;

  .popular {
    color: black;
    position: absolute;
    top: 6%;
    left: 10%;
    font-size: 10px;
    background: #f6c768;
    padding: 4px 7px;
    border-radius: 30px;
    font-weight: 700;
  }
  .img-container {
    img {
      border-radius: 15px;
    }
  }
  .down {
    margin-top: 5px;
    height: 50px;
    .title-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 26px;
      .name {
        font-size: 14px;
      }
      .price-container {
        background: #bee3cc;
        padding: 5px 7px;
        border-radius: 5px;

        .price {
          color: black;
          font-size: 0.75rem;
          font-weight: bold;
        }
      }
      .soldout {
        color: red;
        font-size: 14px;
        font-weight: 600;
      }
    }
    .left-side {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 900;

      .icon-container {
        display: flex;
      }

      .novotes {
        margin-left: 3px;
        color: #6f757c;
      }

      .rating {
        margin-left: 3px;
      }

      .votes {
        margin-left: 3px;
        color: #6f757c;
      }
    }
  }
`;
