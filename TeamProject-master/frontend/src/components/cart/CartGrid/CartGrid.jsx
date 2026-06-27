import React from "react";
import CartCard from "../CartCard/CartCard";

const CartGrid = ({cart, refetch}) => {
    return (
        <div className="lg:col-span-8">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <ul className="divide-y divide-slate-200">

                    {cart?.list?.map((item) => (
                        <CartCard key={item.orderProductId} item={item} refetch={refetch} />
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default CartGrid;