import React from "react";
import { useCart, CartItem } from "./CardContext";

const Card: React.FC = () => {
    const { cart, getTotalPrice } = useCart();

    return (
        <div className="container cart mt-4">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover ">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item: CartItem, index: number) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            style={{
                                                width: "70px",
                                                height: "70px",
                                                marginRight: "10px",
                                            }}
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cardTotal text-start ">   
                        <table className="tablee float-end">
                            <h3>Cart Totals</h3>
                            <tbody>
                                <tr>  
                                    <td>Subtotal</td>
                                    <td>${getTotalPrice()}</td>
                                </tr> 
                                <tr>  
                                    <td>Total</td>
                                    <td>${getTotalPrice()}</td>  
                                </tr> 
                                <tr>
                                    <button className=" btn btn-success mt-3">PROCCEED TO CHECKOUT</button>
                                </tr>  
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Card;
