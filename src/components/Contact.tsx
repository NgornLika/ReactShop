import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
function Contact(){

    return(
        <>
            <div className=" contact">
                <div className="getin p-5 d-flex justify-content-center align-items-center">
                    <h1 className=" fw-semibold">Get In Touch</h1>
                </div>
                 
                <div className="contactUs d-flex justify-content-center align-items-center">
                    <div className="row text-center">
                        <div className="Leaves d-flex justify-content-center align-items-center">
                            <span><img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png" alt="" /></span>
                        </div> 
                        <div className="col-lg-4 p-3 ">
                            <div className="card p-4 d-flex flex-row d-flex justify-content-center align-items-center">
                                <div className="text mx-3">
                                    <IoCall />
                                    <p>+123 456 7890</p>
                                    <p>+123 456 7890</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="card p-4 d-flex flex-row justify-content-center align-items-center">
                                <div className="text mx-3">
                                    <IoIosMail/>
                                    <p>info@example.com</p>
                                    <p>support@example.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 p-3">
                            <div className="card p-4 d-flex flex-row d-flex justify-content-center align-items-center">
                                <div className="text mx-3">
                                    <FaMapMarkerAlt />
                                    <p>Street 217, Phnom Penh</p>
                                    <p>Cambodia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="question text-center mt-5 ">
                    <div>
                        <h2 className=" fs-1 fw-bold">Frequently Asked Question! </h2><br />
                        <img src="../public/assets/logo-leaf-new.png" alt="" />
                    </div>
                    <div className="row faq d-flex flex-row justify-content-center align-items-center p-4">
                        <div className="faq-item col-4 mx-4 mt-2">
                            <div className="faq-question">
                                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                <b>Pulvinar nostrud class cum facilis?</b>
                                </button>
                            </div>
                            <div id="faq1" className="collapse">
                                <p>
                                I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item col-4 mx-4 mt-2">
                            <div className="faq-question ">
                                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq1">
                                <b>Pon excepturi numquam, facilis?</b>
                                </button>
                            </div>
                            <div id="faq2" className="collapse">
                                <p>
                                I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. Ut elit tellus, 
                                luctus nec mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item col-4 mx-4 mt-3">
                            <div className="faq-question">
                                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq1">
                                <b>Pon excepturi numquam, facilis?</b>
                                </button>
                            </div>
                            <div id="faq3" className="collapse">
                                <p>
                                I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, adipiscing elit. 
                                Ut elit tellus, luctus nec mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        <div className="faq-item col-4 mx-4 mt-3">
                            <div className="faq-question">
                                <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq1">
                                <b>Consequat nesciunt fusce facilisi?</b>
                                </button>
                            </div>
                            <div id="faq4" className="collapse">
                                <p>
                                I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Ut luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-5">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Contact