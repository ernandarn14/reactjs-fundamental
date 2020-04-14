import React from "react";

const BookCard = (props) => {
  const { book } = props;
  const { author, title, review, desc, price, discount, image, stock } = book;

  return (
    <div className="container"
      style={{
        width: "600px",
        textAlign: "justify",
        margin: "10px",
      }}
    >
      <div className="row">
        <div className="col-md-5">
          <p>{image}</p>
        </div>

        <div className="col-md-7 text-lg-left">
          <p>{author}</p>
          <h3 id="title">{title}</h3>
          <p>{review} / 5 review</p>
          <p>{desc}</p>
          {discount > 0 ? (
            <div className="d-flex justify-content-start">
              <div>
                <p style={{ fontWeight: "bold" }}>
                  ${(price - (price * discount) / 100).toFixed(2)}
                </p>
              </div>
              <div className="ml-2">
                <p
                  style={{
                    color: "grey",
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                  }}
                >
                  ${price}
                </p>
              </div>
            </div>
          ) : (
              <p style={{ fontWeight: "bold" }}>${price}</p>
            )}
          {stock > 0 ? (
            <button type="button" className="btn btn-outline-primary btn-block">
              Buy Now
            </button>
          ) : (
              <button type="button" disabled className="btn btn-secondary btn-block">
                Buy Now
              </button>
            )}
        </div>
      </div>
    </div>
  );

};

export default BookCard;
