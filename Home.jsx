import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CartData from "./CartData";
import { addToCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

function Home() {
  const [CartData2, setCartData2] = useState(CartData);
  const dispatch = useDispatch();

  // add to cart
  const send = (e) => {
    // console.log("first", e);
    dispatch(addToCart(e));
    toast.success("Item added In Your Cart");
  };
  return (
    <>
      <section className="item-section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: "400" }}>
          Restaurants in Lahore Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {CartData2.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.address}</h5>
                      <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-items-center ">
                      <img src={element.arrimg} className="limg" alt="" />

                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                          borderRadius: "5px",
                        }}
                        variant="outline-light"
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add To Cart
                      </Button>

                      <img src={element.delimg} className="laimg" alt="" />
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;