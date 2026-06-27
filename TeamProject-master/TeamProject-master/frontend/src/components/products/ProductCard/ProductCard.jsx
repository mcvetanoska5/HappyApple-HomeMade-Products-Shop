import {Link} from "../../Link";
import {Image} from "../../Image";
import {Text} from "../../Text";
import {Button} from "../../Button";
import React, {useContext, useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AuthContext from "../../../contexts/authContext";
import DeleteProductDialog from "../DeleteProductDialog/DeleteProductDialog";
import EditProductDialog from "../EditProductDialog/EditProductDialog";
import {Package, Tag} from "lucide-react";
import DiscountProductDialog from "../DiscountProductDialog/DiscountProductDialog";
import QuantityProductDialog from "../QuantityProductDialog/QuantityProductDialog";
import LoginRequiredModal from "../../auth/LoginRequiredModal";
import {useAddToCart} from "../../../hooks/Cart/useAddToCart";

const ProductCard = ({product, onEdit, onDelete, changeQuantity, addDiscount, deleteDiscount}) => {

    const { addToCart, showLoginModal, setShowLoginModal } = useAddToCart();

    const calcDiscount = (product) => {
        const price = Number(product.productPrice);
        const discount = Number(product.discount);
        return price - price * (discount / 100.0);
    };

    const {user} = useContext(AuthContext);

    const roles = user?.roles || [];

    const isOwner = roles.includes("ROLE_OWNER");

    const isAdmin = roles.includes("ROLE_ADMIN");

    const canManageProducts = isOwner || isAdmin;

    const [editItemDialogOpen, setEditItemDialogOpen] = useState(false);

    const [deleteItemDialogOpen, setDeleteItemDialogOpen] = useState(false);

    const [discountProductDialogOpen, setDiscountProductDialogOpen] = useState(false);

    const [quantityProductDialogOpen, setQuantityProductDialogOpen] = useState(false);


    return (
        <>
            <div className="group">
                <Link className="block" href={`/product/${product.productId}`}>
                    <div
                        className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden relative">
                        <Image variant="cover"
                               className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity"
                               src={product.images?.[0] || "https://via.placeholder.com/500"}
                               alt="Headphones"/>
                        {product.discount > 0 && (
                            <Text
                                variant="bold"
                                className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-md"
                            >
                                SALE
                            </Text>
                        )}
                    </div>
                    <h3 className="mt-4 text-sm text-slate-700 font-medium group-hover:text-primary-600">
                        {product.productName} </h3>
                    {product.discount === 0 ? (
                        <p className="mt-1 text-lg font-bold text-slate-900">
                            {product.productPrice} MKD
                        </p>
                    ) : (
                        <div className="flex items-center gap-2 mt-1">
                            <p className="text-lg font-bold text-slate-900">
                                {calcDiscount(product)} MKD
                            </p>
                            <p className="text-sm text-slate-400 line-through">
                                {product.productPrice} MKD
                            </p>
                        </div>
                    )}
                </Link>
                <Button contentKey="cta_15"
                        onClick={() =>
                            addToCart({
                                productId: product.productId,
                                requiredQuantity: 1
                            })
                        }
                        className="mt-3 w-full bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors">
                    Add to Cart
                </Button>

                {canManageProducts && (
                    <>
                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => setEditItemDialogOpen(true)}
                                className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                            >
                                <EditIcon fontSize="small"/>
                                Edit
                            </button>

                            <button
                                onClick={() => setDeleteItemDialogOpen(true)}
                                className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors"
                            >
                                <DeleteIcon fontSize="small"/>
                                Delete
                            </button>
                        </div>

                        <div className="mt-3 flex gap-2">
                            <button
                                onClick={() => setDiscountProductDialogOpen(true)}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-colors
            ${product.discount > 0 ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                            >
                                <Tag size={16}/>
                                {product.discount > 0 ? "Remove Discount" : "Add Discount"}
                            </button>

                            <button
                                onClick={() => setQuantityProductDialogOpen(true)}
                                className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                            >
                                <Package size={16}/>
                                Update Quantity
                            </button>
                        </div>
                    </>
                )}
            </div>

            <LoginRequiredModal
                open={showLoginModal}
                onClose={() => setShowLoginModal(false)}
            />

            <EditProductDialog
                open={editItemDialogOpen}
                onClose={() => setEditItemDialogOpen(false)}
                onEdit={onEdit}
                product={product}
            />
            <DeleteProductDialog
                open={deleteItemDialogOpen}
                onClose={() => setDeleteItemDialogOpen(false)}
                onDelete={onDelete}
                product={product}
            />
            <DiscountProductDialog
                open={discountProductDialogOpen}
                onClose={() => setDiscountProductDialogOpen(false)}
                addDiscount={addDiscount}
                deleteDiscount={deleteDiscount}
                product={product}
            />
            <QuantityProductDialog
                open={quantityProductDialogOpen}
                onClose={() => setQuantityProductDialogOpen(false)}
                changeQuantity={changeQuantity}
                product={product}
            />
        </>
    );
};

export default ProductCard;