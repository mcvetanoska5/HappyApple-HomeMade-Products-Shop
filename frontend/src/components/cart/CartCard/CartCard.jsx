import {Image} from "../../Image";
import {Link} from "../../Link";
import {Button} from "../../Button";
import {Text} from "../../Text";
import React, {useEffect, useState} from "react";
import orderProductRepository from "../../../repository/orderProductRepository";
import {useChangeQuantity} from "../../../hooks/Cart/useChangeQuantity";
import {useRemoveFromCart} from "../../../hooks/Cart/useRemoveFromCart";

const CartCard = ({item, refetch}) => {

    const {removeFromCart} = useRemoveFromCart();

    const handleRemove = async () => {
        try {
            await removeFromCart(item.orderProductId);
            refetch();
        } catch (err) {
            console.log(err);
        }
    };

    const {changeQuantity} = useChangeQuantity();

    const handleIncrease = async () => {
        try {
            await changeQuantity(item.orderProductId, item.requiredQuantity + 1);
            refetch();
        } catch (err) {
            console.log(err);
        }
    };

    const handleDecrease = async () => {
        if (item.requiredQuantity <= 1) return; // минимум 1

        try {
            await changeQuantity(item.orderProductId, item.requiredQuantity - 1);
            refetch();
        } catch (err) {
            console.log(err);
        }
    };

    const [price, setPrice] = useState(null);

    useEffect(() => {
        orderProductRepository
            .calculatePricePerOrderProduct(item.orderProductId)
            .then((res) => {
                setPrice(res.data);
            })
            .catch(console.log);
    }, [item.orderProductId, item.requiredQuantity]);

    return (
        <li className="p-6 flex flex-col sm:flex-row gap-6">
            <div
                className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                <Image
                    variant="cover"
                    className="w-full h-full object-center object-cover"
                    src={item.displayProductDto.images?.[0] || "https://via.placeholder.com/200"}
                    alt={item.displayProductDto.productName}
                />
            </div>
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">
                            <Link href={`/product/${item.displayProductDto.productId}`}
                                  state={{fromCart: true, quantity: item.requiredQuantity}}>
                                {item.displayProductDto.productName}
                            </Link>
                        </h3>

                        <p className="text-sm text-slate-500 mt-1">
                            {item.requiredQuantity} x {
                            item.displayProductDto.discount === 0
                                ? item.displayProductDto.productPrice
                                : Math.round(
                                    item.displayProductDto.productPrice *
                                    (1 - item.displayProductDto.discount / 100)
                                )
                        } MKD
                        </p>
                    </div>
                    <p className="text-lg font-bold text-slate-900"> {price} MKD </p>
                </div>
                <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center border border-slate-300 rounded-md">
                        <Button contentKey="cta_9"
                                onClick={handleDecrease}
                                className="px-3 py-1 text-slate-600 hover:bg-slate-50"> - </Button>
                        <Text className="px-2 py-1 text-slate-900 font-medium text-sm"> {item.requiredQuantity} </Text>
                        <Button contentKey="cta_10"
                                onClick={handleIncrease}
                                className="px-3 py-1 text-slate-600 hover:bg-slate-50"> + </Button>
                    </div>
                    <Button
                        onClick={handleRemove}
                        className="text-sm text-red-500 hover:text-red-700 font-medium"> Remove </Button>
                </div>
            </div>
        </li>
    );
};

export default CartCard;