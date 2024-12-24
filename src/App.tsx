import { Link, Outlet, NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useCart } from "./components/CardContext";
import './App.css';

function App() {
  const {cart,addToCart,removeFromCart, getTotalPrice} = useCart();
  const handleQuantityChange = (id:number, newQuantity: number)=>{
    if(newQuantity <1){
      removeFromCart(id);
    }else{
      const item = cart.find(cartItem => cartItem.id === id);
      if(item){
        addToCart({ ...item, quantity:newQuantity});
      }
    }
  }
  return (
    <>
      <div className="container-fluid">
        {/* <header> */}
          <div className="header ">
            <nav className="navbar navbar-expand-lg bg-light-subtle ">
              <div className="container-fluid">
                <div className="navbar-brand">
                  <Link to={'/'}>
                    <img src='/assets/organic-store-logo5.svg' alt="Organic Store Logo" />
                  </Link>
                </div>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav">
                  <FaBars />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"} to={'/'}>
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"} to={'/all'}>
                        All Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"} to={'/about'}>
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"} to={'/contact'}>
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? "text-success" : "text-dark"}`}  
                      to={'/account'} role="button" data-bs-toggle="dropdown" aria-expanded="false"> Account</NavLink>
                      <ul className="dropdown-menu">
                        <li><Link to={'/login'} className="dropdown-item">Login</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink  to={'/card'} className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"}>
                        <span>${getTotalPrice()}</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({ isActive }) => isActive ? "nav-link text-success" : "nav-link text-dark"} to={''}>
                        <FaCartPlus 
                          data-bs-toggle="offcanvas" 
                          data-bs-target="#offcanvasRight" 
                          aria-controls="offcanvasRight"
                        />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        {/* </header> */}
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Shopping Cart</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            {cart.length === 0 ?(
              <p>Your Cart is empty.</p>
            ):(
              <div>
                {cart.map((item, index)=>(
                  <div key={index} className="d-flex justify-content-between align-items-center mb-3">
                    <div className=" d-flex align-items-center">
                      <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{width:'50px',height:'50px',marginRight:'10px'}}
                          />
                    </div>
                    <div>
                      <p className="mb-0">{item.name}</p>
                      <p className=" mb-0">
                        <button onClick={() =>handleQuantityChange(item.id, (item.quantity || 1) - 1)} className=" border-0 px-2 mx-4">-</button>
                        {item.quantity} x ${item.price.toFixed(2)}
                        <button onClick={() =>handleQuantityChange(item.id, (item.quantity || 1) + 1)} className=" border-0 px-2 mx-4">+</button>
                      </p>
                    </div>
                    <button className=" btn-close" aria-label="Remove item" onClick={()=>removeFromCart(item.id)}></button>
                  </div>
                ))}
                <h6>SubTotal : ${getTotalPrice()}</h6>
                <div className=" d-flex justify-content-between mt-3">
                  <NavLink to={'/card'}><button className=" btn btn-primary">View Cart</button></NavLink>
                  <button className=" btn btn-success">Checkout</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className=" body">
          <Outlet />
        </div>

        <footer>
          <div className="footer bg-dark text-light mt-5">
            <div className="p-5 d-flex flex-column flex-md-row justify-content-between align-items-start">
              {/* Left Section */}
              <div className="left mx-4 mt-2 text-center text-md-start">
                <img src="assets/organic-store-white-logo.png" alt="Organic Store Logo" className="img-fluid" />
                <h6 className="pt-4 mt-3">
                  Maecenas mi justo, interdum at consectetur vel, tristique et arcu. <br /> Ut quis eros blandit, ultrices diam in, elementum ex.
                </h6>
              </div>
              {/* Right Section */}
              <div className="right text-center text-md-end mt-4 mt-md-0">
                <h3>Download Our Mobile App</h3>
                <h6 className="mt-4">Lorem ipsum dolor sit, consectetur adipiscing.</h6>
                <h6>Praesent porta enim, non tincidunt libero interdum sit amet.</h6>
                <div className="d-flex justify-content-center justify-content-md-end mt-4 gap-3">
                  <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" alt="Play Store" 
                      className="img-fluid" style={{ maxWidth: '120px' }}/>
                  <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/app-store.png" 
                      alt="App Store" className="img-fluid" style={{ maxWidth: '120px' }}/>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
