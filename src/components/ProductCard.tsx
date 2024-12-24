// import { renderToString } from "react-dom/server";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}:any)=>{
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/product/${product.id}`);
    }
    const renderStars = (rating:any)=>{
        const stars =[];
        for(let i=1; i<=5; i++){
            stars.push(
                <span key={i} className={i <= rating? 'star filled':'star'}>
                    ☆
                </span>

            );
        }
        return stars;
    }
    return(
        <div className="product-card p-2" onClick={handleClick} style={{ position: 'relative', cursor: 'pointer' }}>
            {product.onSale && product.stock > 0 && (
                <div className="sale-badge text-center d-flex align-items-center justify-content-center">
                    <span>Sale!</span>
                </div>
            )}
            <img src={product.image} className="card-img" alt={product.name} />
            <div className="card-body">
                <p className="category text-center">{product.category || 'Groceries'}</p>
                <h5 className="product-name text-center">{product.name}</h5>
                <div className="rating text-center">
                    {renderStars(product.rating)}
                </div>
                <p className="price">
                    {product.onSale ? (
                        <div className="text-center">
                            <del style={{ color: 'red' }} className="original-price mx-2">
                                ${(product.price * 1.2).toFixed(2)}
                            </del>
                            <span className="sale-price">${product.price.toFixed(2)}</span>
                        </div>
                    ) : (
                        <span>£{product.price.toFixed(2)}</span>
                    )}
                </p>
            </div>
        </div>
    )
}
export default ProductCard