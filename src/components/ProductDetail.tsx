import { useParams } from "react-router-dom";
import ProductData from "./products.json";
import ProductCard from "./ProductCard";
import { useCart } from "./CardContext"; // Assuming this is the correct hook name
import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    stock: number;
    onSale: boolean;
}

interface CartItem extends Product {
    quantity: number;
}

const ProductDetail: React.FC = () => {
    const { addToCart, error, clearError } = useCart(); // Assuming this is the correct hook name
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (error) {
            alert(error);
            clearError();
        }
    }, [error, clearError]);

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const foundProduct = ProductData.products.find((prod: Product) => prod.id.toString() === id);
        setProduct(foundProduct || null); // Set the product or null if not found
    }, [id]);

    const handleAddCart = () => {
        if (product) {
            if (quantity > product.stock) {
                alert(`Cannot add more than ${product.stock} items to cart.`);
                return;
            }
            const cartItem: CartItem = { ...product, quantity };
            addToCart(cartItem);
        }
    };
    
    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const RelatedProducts = ProductData.products.filter(
        (prod) => prod.id !== product.id // Exclude the current product
    );
    const visibleProducts = showAll ? RelatedProducts : RelatedProducts.slice(0, 4);
    
    return (
        <div className="product-detail px-3 pt-3">
            <div className="row d-flex justify-content-center">
                <div className="colleft col-md-5 mt-4 col-lg-5 order-1 order-md-1 p-4">
                    <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="colright col-md-5 py-5 px-4 col-lg-5 order-2 order-md-2">
                    <h1>{product.name}</h1>
                    <p>${product.price.toFixed(2)} + Free Shipping</p>
                    <p>{product.description}</p>
                    <p>Stock: {product.stock} available</p>
                    <p>{product.onSale ? "On Sale" : "Regular Price"}</p>

                    <div className="quantity-selector">
                        <button className="btn btn-dark mx-2" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                            -
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                            min="1"
                            max={product.stock}
                        />
                        <button className="btn btn-success mx-2" onClick={() => setQuantity(Math.max(1, quantity + 1))}>
                            +
                        </button>
                    </div>
                    <button className="btn btn-success mt-2" onClick={handleAddCart}>
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className=" ">
                <hr />
                <div className="container mt-5">
                <div className="title fw-bolder">
            <h2>Related Products</h2>
        </div>
        <div className="row mt-3">
            {visibleProducts.map((e) => (
                <div key={e.id} className="col-lg-3 col-md-6">
                    <ProductCard
                        product={e}
                        onClick={() => setProduct(e)} // Optional: Set the selected product
                    />
                </div>
                ))}
            </div>
                {RelatedProducts.length > 4 && (
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAll((prev) => !prev)}
                        >
                            {showAll ? "Show Less" : "Show More"}
                        </button>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
