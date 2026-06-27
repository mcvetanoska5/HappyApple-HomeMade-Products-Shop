import React from 'react';
import {Button} from '../components/Button';
import {Text} from '../components/Text';
import CartGrid from "../components/cart/CartGrid/CartGrid";
import {useCart} from "../providers/CartProvider";
import {Link} from "../components/Link"
import {useNavigate} from "react-router-dom";

export const CartPage = ({className, children, variant, contentKey, ...props}) => {

    const navigate = useNavigate();

    const {cart, loading, error, refetch} = useCart();

    const isCartEmpty = !cart?.list || cart.list.length === 0;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-heading font-bold text-slate-900 mb-8"> Shopping Cart </h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">


                {/* Cart Items */}
                {cart?.list?.length > 0 ? (
                    <CartGrid cart={cart} refetch={refetch}/>
                ) : (
                    <div
                        className="lg:col-span-8 flex flex-col items-center justify-center py-24 bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-xl">
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-slate-100 mb-6">
                            <span className="text-4xl">🛒</span>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-2">
                            Your cart is empty
                        </h2>

                        <p className="text-slate-500 text-center max-w-md mb-8">
                            Add products you like and they will appear here. Ready when you are.
                        </p>

                        <Link href="/products">
                            <Button
                                variant="primary"
                                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 shadow-lg"
                            >
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Order Summary */}
                <div className="lg:col-span-4">
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 sticky top-24">
                        <h2 className="text-lg font-bold text-slate-900 mb-6"> Order Summary </h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-slate-600">
                                <Text> Subtotal </Text>
                                <Text> {cart?.totalPrice || 0} MKD </Text>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <Text> Shipping </Text>
                                <Text className="text-green-600 font-medium"> Free </Text>
                            </div>
                            <div
                                className="border-t border-slate-200 pt-4 flex justify-between text-lg font-bold text-slate-900">
                                <Text> Total </Text>
                                <Text> {cart?.totalPrice || 0} MKD </Text>
                            </div>
                        </div>
                        <Button
                            variant="primary"
                            contentKey="cta_13"
                            disabled={isCartEmpty || loading}
                            onClick={() => navigate("/delivery")}
                            className={`w-full py-3 rounded-md font-bold transition-colors shadow-lg
        ${isCartEmpty || loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-primary-600 hover:bg-primary-700 text-white"
                            }`
                            }
                        >
                            Proceed to Delivery Info
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    );
};