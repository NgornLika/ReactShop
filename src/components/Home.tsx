import { FaShoppingCart } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { IoIdCardSharp } from "react-icons/io5";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
// import { IoStarOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductData from "./products.json";

interface Product{
    id:number;
    name:string;
    image:string;
    price:number;
    onSale:boolean;
}
const listCard : Product[]= ProductData.products|| [];

function Home(){
    const [Products,setProducts]= useState<Product[]>([]);
    const [selectedProduct,setselectedProduct]= useState<Product| null>(null);
    const handleProductClick = (product:Product)=>{
        setselectedProduct(product);
    };
    useEffect(()=>{
        setProducts(listCard);
    }, []);
    return(
        <> 
            <div className="main-home bg-body-tertiary ">
                <div className=" home">
                    <div className="row px-2 pt-3 ">
                        <div className="colleft col-md-6 mt-4 col-lg-6  order-2  order-md-1 ">
                            <img  className=" animate__animated animate__slideInLeft "  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" alt="" />
                        </div>
                        <div className="colright col-md-6 p-5 col-lg-6 order-1 order-md-2 flex flex-column justify-content-center text-center text-md-start px-5 pt-5 animate__animated animate__slideInRight">
                            <img src="../public/assets/logo-leaf-new.png" alt="" />
                            <h5>Best Quality Products</h5>
                            <h1>Join The Organic Movement!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <a href="#"><button className="btn mt-5"><FaShoppingCart /> Shop Now</button></a>
                        </div>
                    </div>
                </div>

                <div className=" content d-flex justify-content-center align-items-center p-4 ">
                    <div className=" container">
                        <div className="row">
                            <div className="col-lg-3 p-2">
                                <div className="card p-4 d-flex flex-row  text-light ">
                                    <MdLocalShipping  id="icon"/>
                                    <div className="text mx-3">
                                        <h4>Free Shipping</h4>
                                        <p>Above $5 Only</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="card p-4 d-flex flex-row  text-light ">
                                    <IoIdCardSharp id="icon"/>
                                    <div className="text mx-3">
                                        <h4>Certified Organic</h4>
                                        <p>100% Guarantee</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="card p-4 d-flex flex-row  text-light ">
                                    <FaMoneyBillAlt id="icon"/>
                                    <div className="text mx-3">
                                        <h4>Huge Savings</h4>
                                        <p>At Lowest Price</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="card p-4 d-flex flex-row  text-light ">
                                    <GiReturnArrow  id="icon"/>
                                    <div className="text mx-3">
                                        <h4>Easy Returns</h4>
                                        <p>No Questions Asked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="SellProduct  mt-5">
                    <div className=" title text-center ">
                        <h1>Best Selling Products</h1>
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png" alt="" />
                    </div>
                    <div className=" container ">
                        <div className="row p-1 ">
                            <div className="col-lg-3 col-md-6 p-2">
                                <div className="Product ">
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted-400x400.jpg" alt="" />
                                    <div className="text-center mt-2">
                                        <p id="Groceries">Groceries</p>
                                        <h6>Assorted Coffee</h6>
                                        <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                                        <h6>$35.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 p-2">
                                <div className="Product ">
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg" alt="" />
                                    <div className="text-center mt-2">
                                        <p id="Groceries">Groceries</p>
                                        <h6>Hand Sanitizer</h6>
                                        <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                                        <h6>$15.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 p-2">
                                <div className="Product ">
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg" alt="" />
                                    <div className="text-center mt-2">
                                        <p id="Groceries">Groceries</p>
                                        <h6>Handpicked Red Chillies</h6>
                                        <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                                        <h6>$19.00</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 p-2">
                                <div className="Product ">
                                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg" alt="" />
                                    <div className="text-center mt-2">
                                        <p id="Groceries">Groceries</p>
                                        <h6>Natural Extracted Edible Oil</h6>
                                        <IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline /><IoStarOutline />
                                        <h6>$35.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className=" container mt-5">
                    <div className=" title text-center ">
                        <h1>Best Selling Products</h1>
                        <img src="../public/assets/logo-leaf-new.png" alt="" />
                    </div>
                    <div className=" row mt-3">
                        {Products.map((e)=>{
                            return(
                                <div className=" col-lg-3 col-md-6 ">
                                    <ProductCard
                                        product={e}
                                        onClick= {()=>handleProductClick(e)}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className=" shop bg-body-secondary ">
                    <div className="container">  
                        <div className="Leaves d-flex align-items-center justify-content-center">
                            <span><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt="" /></span>
                        </div>  
                        <div className="row p-2 d-flex align-items-center justify-content-center">
                            <div className="card category1 col-lg-3 col-md-6 p-3 m-4">
                                <div className="card-body">
                                    <h5 className="card-title">Farm Fresh Fruits</h5>
                                    <p className="card-text">Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                                    <a href="#" className="btn btn-success ps-4 pe-3 "><FaArrowRight /> Shop now</a>
                                    <br /><br /><br /><br /><br />
                                </div>
                            </div>
                            <div className="card category2 col-lg-3 col-md-6 p-3  m-4">
                                <div className="card-body">
                                    <h5 className="card-title">Fresh Vegetables</h5>
                                    <p className="card-text">Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                                    <a href="#" className="btn btn-success ps-4 pe-3 "><FaArrowRight /> Shop now</a>
                                    <br /><br /><br /><br /><br />
                                </div>
                            </div>
                            <div className="card category3 col-lg-3 col-md-6 p-3 m-4">
                                <div className="card-body">
                                    <h5 className="card-title">Organic Legume</h5>
                                    <p className="card-text">Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</p>
                                    <a href="#" className="btn btn-success ps-4 pe-3 "><FaArrowRight /> Shop now</a>
                                    <br /><br /><br /><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="getDis d-flex flex-column flex-md-row align-items-center justify-content-between p-5  mt-5">
                        <h2 className=" fw-bolder">Get 25% Off On Your First Purchase!</h2>
                        <a href="#" className="btn btn-success ps-4 pe-3 py-2 text-center text-md-end mt-md-0 "><FaCartArrowDown /> Shop now</a>
                    </div>
                    <div className="Tryit d-flex justify-content-center align-content-center my-4 p-3">
                        <h4>Try It For Free. No Registration Needed.</h4>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="title text-center">
                        <h1>Trending Products</h1>
                        <img src="../public/assets/logo-leaf-new.png" alt="Logo" />
                    </div>
                    <div className="row mt-3">
                        {Products.slice(0, 4).map((e, index) => {
                            return(
                                <div className="col-lg-3 col-md-6" key={index}>
                                <ProductCard
                                    product={e}
                                    onClick={() => handleProductClick(e)}
                                />
                            </div>
                            )
                        })}
                    </div>
                </div>
                 {/* Selected Product Section */}
                {selectedProduct && (
                <div className="container mt-5">
                    <h2>Selected Product</h2>
                    <div className="selected-product-card">
                    <h3>{selectedProduct.name}</h3>
                    <img src={selectedProduct.image} alt={selectedProduct.name} />
                    <p>Price: ${selectedProduct.price}</p>
                    {selectedProduct.onSale && <p className="text-success">On Sale!</p>}
                    </div>
                </div>
                )}
            </div>
              
        </>
    )
}
export default Home