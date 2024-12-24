import axios from "axios";
import { useState, useEffect } from "react";
// import Swal from "sweetalert2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface Product{
    _id:string;
    name:string;
    qty:number;
    price:number;
    range:string[];
    image:string;
}

function AllProduct() {
    const [products,setProducts] = useState<Product[]>([]);
    const [showAddProductForm, setshowAddProductForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProductId, seteditingProductId]= useState<string | null>(null);
    const [newProduct, setNewProduct] = useState<Omit<Product,  "_id">>({
        name: "",
        qty: 0,
        price: 0,
        range: [],
        image: "",
    });
    // Exclude _id for creation
    const [rangeInput, setRangeInput] = useState("");

    useEffect(()=>{
        axios.get<Product[]>("http://localhost:3000/ProductDetails")
        .then(response => {
            setProducts(response.data);
            console.log(response.data);
        })
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProduct((prev) => ({ ...prev, [name]: value }));
    };
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeInput(e.target.value);
    };
    
    const handleAddRange = () => {
        if (rangeInput) {
          setNewProduct((prev) => ({
            ...prev,
            range: [...prev.range, rangeInput],
          }));
          setRangeInput(""); // Clear input after adding
        }
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let validationErrors: string[] = [];
    
        if (!newProduct.name) validationErrors.push("Product name is required.");
        if (!newProduct.image) validationErrors.push("Image URL is required.");
        if (newProduct.price <= 0) validationErrors.push("Price must be a positive number.");
        if (newProduct.qty < 0) validationErrors.push("Quantity cannot be negative.");
        if (newProduct.range.length === 0) validationErrors.push("At least one range is required.");
    
        if (validationErrors.length > 0) {
          alert(validationErrors.join("\n")); // Show errors to user
          return;
        }

        if(isEditing && editingProductId){
            handleUpdateProduct({ ...newProduct, _id: editingProductId});
        }else{
             // Add the product without _id
            axios
                .post("http://localhost:3000/ProductDetails", newProduct)
                .then((response) => {
                    setProducts((prev) => [...prev, response.data]);
                    setshowAddProductForm(false);
                    setNewProduct({ name: "", price: 0, qty: 0, range: [], image: "" });  
                    toast.success("Successfully added");
                })
                .catch((error) => {  
                    console.error("Error adding product:", error);  
                    toast.error("Failed to add product. Please try again later.");  
                });
        }
    };

    const handleUpdateProduct = (updatedProduct: Product) => {
        axios
            .put(`http://localhost:3000/ProductDetails/${updatedProduct._id}`, updatedProduct)
            .then((response) => {
                setProducts((prev) =>
                    prev.map((product) => (product._id === updatedProduct._id ? response.data : product))
                );
                setshowAddProductForm(false);
                setIsEditing(false);
                seteditingProductId(null);
                setNewProduct({ name: "", price: 0, qty: 0, range: [], image: "" }); // Reset form after update
                toast.success("Product updated successfully!");
            })
            .catch((error) => {
                console.error("Error updating product:", error);
                toast.error("Failed to update product. Please try again later.");
            });
    };
    const handleEditProduct = (product:Product)=>{
        setNewProduct({ name: product.name, qty: product.qty, price: product.price , range: product.range, image:product.image });
        setshowAddProductForm(true);
        seteditingProductId(product._id);
        setIsEditing(true);
    }
    const handleDeleteProduct = (productId: string) => {  
        axios  
            .delete(`http://localhost:3000/ProductDetails/${productId}`)  
            .then(() => {  
                setProducts((prev) => prev.filter(product => product._id !== productId));  
                toast.success("Product deleted successfully!");  
            })  
            .catch((error) => {  
                console.error("Error deleting product:", error);  
                toast.error("Failed to delete product. Please try again later.");  
            });  
    };
    return (
        <>
            <div className=" bg-body-tertiary">
                <h1 className=" text-center pt-5">All Products</h1>
                <ToastContainer/>
                <div className=" container ">
                    <button  
                        data-bs-toggle="modal" 
                        data-bs-target="#exampleModal" 
                        onClick={() => setshowAddProductForm(true)} 
                        className=" btn btn-success">
                        {showAddProductForm ?"Cancel" : "+ Add Product"}
                    </button>
                    <div className="modal fade" id="exampleModal" tabIndex={-1} >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">  
                                    <h2 >{isEditing ? "Edit Product" : "Add Product"}</h2>  
                                    <button  
                                    type="button"  
                                    className="btn-close"  
                                    onClick={() => {  
                                        setshowAddProductForm(false);  
                                        setIsEditing(false);
                                        seteditingProductId(null);
                                        setNewProduct({ name: "", price: 0, qty: 0, range: [], image: "" });   
                                    }}
                                    data-bs-dismiss="modal"  
                                    aria-label="Close"  
                                    ></button>  
                                </div>  
                                <div className="modal-body">
                                    {showAddProductForm && (
                                        <form onSubmit={handleSubmit} className="mt-2 p-2 rounded m-auto border border-success">
                                            <label htmlFor="name">Input Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Product Name"
                                                value={newProduct.name}
                                                className=" form-control"
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label htmlFor="qty">Input Quantity</label>
                                            <input
                                                type="number"
                                                name="qty"
                                                placeholder="Quantity"
                                                value={newProduct.qty}
                                                className=" form-control"
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label htmlFor="price">Input Price</label>
                                            <input
                                                type="number"
                                                name="price"
                                                placeholder="Price"
                                                value={newProduct.price}
                                                className=" form-control"
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label htmlFor="image">Input Image</label>
                                            <input
                                                type="text"
                                                name="image"
                                                placeholder="Image URL"
                                                value={newProduct.image}
                                                className=" form-control"
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label htmlFor="range">Input Range</label>
                                            <input
                                                type="text"
                                                placeholder="Add Range"
                                                value={rangeInput}
                                                className=" form-control"
                                                onChange={handleRangeChange}
                                            />
                                            <button type="button" className="btn btn-dark mt-3 mx-2" onClick={handleAddRange}>
                                                Add Range
                                            </button>
                                            <button  type="submit" className="btn btn-info mt-3 mx-2" data-bs-dismiss="modal"  >
                                                {isEditing ? "Update Product" : "Submit"}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container all">
                    <div className="row">
                        {products.length > 0 ? (
                            products.map(e=>(
                                <div className=" col-lg-3 my-4 " >
                                    <div className=" card p-2 ">
                                        <img className=" card-img-top" src={e.image} alt={e.name} style={{height:"170px"}}/>
                                        <div className=" card-body">
                                            <h4>Name: {e.name}</h4>
                                            <h6>Qty: {e.qty}</h6>
                                            <h6 className=" mt-3 text-danger">Price: ${e.price}</h6>
                                            <div className=" d-flex justify-content-end">
                                                <button onClick={() => handleDeleteProduct(e._id)} className="btn btn-danger">Delete</button>  
                                                <button onClick={() => handleEditProduct(e)} className="btn btn-primary mx-3"  
                                                    data-bs-toggle="modal"  
                                                    data-bs-target="#exampleModal"
                                                >Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ):(
                            <div>
                                <p className=" mt-3">No Product available</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllProduct;
