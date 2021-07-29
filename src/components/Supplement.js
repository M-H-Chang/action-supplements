import React from "react";

const Supplement = (props) => {
  const { supplement } = props;
  return (
    <>
    <h4>{supplement.name}</h4>
    <h5>{supplement.price}</h5>
    <h5>{supplement.description}</h5>
    {supplement.stock > 0 ? (
              <small>{supplement.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Available</small>
            )}
            <button onClick={() =>
                  props.addToCart({
                    id: supplement.name,
                    supplement,
                    amount: 1
                  })
                } >Add to cart</button>

    </>
  )
}

export default Supplement;