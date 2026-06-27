import useProducts from "../../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({products, addToCart, onEdit, onDelete, changeQuantity, addDiscount, deleteDiscount}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {products.map((product) => (

                <ProductCard key={product.productId} product={product}
                             addToCart={addToCart}
                             onEdit={onEdit}
                             onDelete={onDelete}
                             changeQuantity={changeQuantity} addDiscount={addDiscount}
                             deleteDiscount={deleteDiscount} />

            ))}
        </div>
    );
};

export default ProductGrid;