import axios from "axios"
import { useEffect,useState } from "react"
function App01(){
  const [product,setProduct]=useState([{ Name:"",price:0.0,img:""}]);
  useEffect(()=>{ getProduct() });
  const getProduct = async()=>{
    const respone = await axios.get('http://localhost:8000/products/');
    if(respone.status === 200){
      setProduct(respone.data);
    }else{
      console.log("Product not found"+respone.status);
    }
  }
  console.log("Data returned: " + product);
  return(
    <>
       <div className=" container mt-5">
        <div className=" row">
          {product && product.map(p=>{
            return(
              <>
                <div className=" col-md-3 p-3">
                  <div className=" card p-3">
                    <img className=" img-fluid card-img" src={p.img} alt="" style={{height:"200px"}}/>
                    <h3 className=" text-success">Name:{p.Name}</h3>
                    <h3 className=" text-success">Price:{p.price}$</h3>
                  </div>
                </div>
              </>
            )
          })}
        </div>
       </div>
    </>
  )
}

export default App01
