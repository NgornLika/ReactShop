import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
function About(){

    return(
        <>
            <div className=" about">
                <div className=" p-5 aboutUs d-flex justify-content-center align-items-center">
                    <h1 className=" fw-semibold">About Us</h1>
                </div>
                <div className="Leaves d-flex align-items-center justify-content-center">
                    <span><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt="" /></span>
                </div>  

                <div className="infoDetail p-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="colleft col-md-6 col-lg-6 order-1 order-md-1 flex flex-column justify-content-center text-center text-md-start px-5">
                            <h1 className=" fw-bolder">We Are Your Favourite Store.</h1>
                            <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. 
                            Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu. <br /><br />
                            Officiis fuga harum porro et? Similique rhoncus atque! 
                            Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, 
                            malesuada proident platea corrupti expedita.</p>
                        </div>
                        <div className="colright col-md-5 mt-4 col-lg-5  order-1 order-md-1 mb-4">
                            <img  className=""  src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg" alt="" />
                        </div>  
                    </div>
                </div>

                <div className=" numberpro ">
                    <div className="row text-center">
                        <div className="col-lg-3 px-5 py-4 text-light fw-bolder">
                            <h4>Numbers Speak For Themselves!</h4>
                        </div>
                        <div className="col-lg-3 px-5 py-4 text-light">
                            <h1>5,000+</h1>
                            <p>Curated Products</p>
                        </div>
                        <div className="col-lg-3 px-5 py-4 text-light">
                            <h1>800+</h1>
                            <p>Curated Products </p>
                        </div>
                        <div className="col-lg-3 px-5 py-4 text-light">
                            <h1>40+</h1>
                            <p>Product Categories</p>
                        </div>
                    </div>
                </div>

                <div className=" certified ">
                    <div className="row d-flex justify-content-center align-content-center">
                        <div className="col-lg-5 ">
                            <div className=" card border-0 " >
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg" className="d-block w-100 rounded" alt="" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg" className="d-block w-100 rounded" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg" className="d-block w-100 rounded" alt="..." />
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>                              
                                <div className="card-body my-4 text-center">
                                    <p>⭐⭐⭐⭐⭐</p>
                                    <p className="card-text">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-5 ps-5 mt-5">
                            <div className=" d-flex ">
                                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png" className="w-25 h-25 " alt="" />
                                <div>
                                    <h2>Certified Products</h2>
                                    <p>Click edit button to change this text. Lorem ipsum dolor sit amet</p>
                                </div> 
                            </div>
                            <h1 className=" mt-4 fw-bolder">We Deal With Various Quality Organic Products!</h1>
                            <img src="../public/assets/logo-leaf-new.png" className=" mt-3 " alt="" />
                            <div className="START d-flex mt-4">
                                <div>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Fresh fruits</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Dry fruits</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Fresh vegetables</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Dried vegetables</p>
                                    <a href="#"><button className="btn mt-5"><FaShoppingCart /> START SHOPPING</button></a>
                                </div>
                                <div className=" ms-5">
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Beauty products</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Milk products</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Organic honey</p>
                                    <p><IoMdCheckmarkCircleOutline className=" text-success"/>  Organic tea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default About