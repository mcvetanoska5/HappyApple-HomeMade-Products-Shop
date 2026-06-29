import React, {useEffect, useState} from 'react';
import {Button} from '../components/Button';
import {Icon} from '../components/Icon';
import {Image} from '../components/Image';
import {Link} from '../components/Link';
import {Text} from '../components/Text';
import {QuantityDropdown} from "../components/QuantityDropdown";
import useProductDetails from "../hooks/useProductDetails";
import {useLocation, useParams} from "react-router-dom";
import ProductRating from "../components/products/ProductRating/ProductRating";
import FeatureList from "../components/products/FeatureList/FeatureList";
import {useAddToCart} from "../hooks/Cart/useAddToCart";


export const ProductPage = ({className, children, variant, contentKey, ...props}) => {

    const location = useLocation();

    const {id} = useParams();
    const {product, fetch} = useProductDetails(id);

    const [quantity, setQuantity] = useState(
        location.state?.fromCart ? location.state.quantity : 1
    );

    const {addToCart, loading} = useAddToCart();

    const handleAddToCart = async () => {
        if (!product) return;

        const orderProduct = {
            productId: product.productId,
            requiredQuantity: quantity
        };

        try {
            await addToCart(orderProduct);
        } catch (err) {
            console.error(err);
        }
    };

    const calcDiscount = (product) => {
        const price = Number(product.productPrice);
        const discount = Number(product.discount);
        return price - price * (discount / 100.0);
    };

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (product?.images?.length > 0) {
            setImages(product.images);
        }
    }, [product]);

    const handleImageClick = (index) => {
        const newImages = [...images];

        // swap first image with clicked one
        [newImages[0], newImages[index]] = [newImages[index], newImages[0]];

        setImages(newImages);
    };

    return (
        <>
            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex text-sm font-medium text-slate-500">
                        <Link className="hover:text-slate-900" href="index.html"> Home </Link>
                        <Text className="mx-2"> / </Text>
                        <Link className="hover:text-slate-900" href={`/products`}> Shop </Link>
                        <Text className="mx-2"> / </Text>
                        <Text className="text-slate-900"> {product ? product.productName : ''} </Text>
                    </nav>
                </div>
            </div>
            {/* Product Details */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                                variant="cover"
                                className="w-full h-full object-center object-cover"
                                src={images[0]}
                                alt="Main product"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            {images.slice(1).map((img, index) => (
                                <Button
                                    key={index}
                                    onClick={() => handleImageClick(index + 1)}
                                    className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden hover:opacity-75"
                                >
                                    <Image
                                        variant="cover"
                                        className="w-full h-full object-center object-cover"
                                        src={img}
                                        alt={`Thumb ${index}`}
                                    />
                                </Button>
                            ))}
                        </div>
                    </div>
                    {/* Product Info */}
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-slate-900 mb-2"> {product ? product.productName : ''} </h1>

                        {/* Rating */}
                        <ProductRating>

                        </ProductRating>

                        {/* SALE badge above the price */}
                        {product?.discount > 0 && (
                            <div className="mb-2">
        <span
            className="inline-flex bg-red-500 text-white font-bold rounded flex items-center justify-center text-base px-6 py-2">
            SALE
        </span>
                            </div>
                        )}

                        {product ? (
                            product.discount === 0 ? (
                                <p className="text-2xl font-bold text-slate-900 mb-6">
                                    {product.productPrice.toLocaleString('mk-MK')} MKD
                                </p>
                            ) : (
                                <div className="flex items-center gap-2 mb-6">
                                    <p className="text-2xl font-bold text-slate-900">
                                        {calcDiscount(product).toLocaleString('mk-MK')} MKD
                                    </p>
                                    <p className="text-lg text-slate-400 line-through">
                                        {product.productPrice.toLocaleString('mk-MK')} MKD
                                    </p>
                                </div>
                            )
                        ) : (
                            <p className="text-2xl text-gray-400 mb-6"></p>
                        )}

                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {product?.description}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-4 mb-8">

                            <QuantityDropdown
                                max={100}
                                initial={quantity}
                                onChange={setQuantity}
                            />

                            <Button onClick={handleAddToCart}
                                    disabled={loading}
                                    variant="primary" contentKey="cta_8"
                                    className="flex-1 bg-primary-600 text-white py-3 px-8 rounded-md font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                                <Icon className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round"
                                          strokeLinejoin="round" strokeWidth="2"></path>
                                </Icon>
                                Add to Cart </Button>
                            <Button
                                className="w-12 flex items-center justify-center border border-slate-300 rounded-md hover:bg-slate-50 text-slate-400 hover:text-red-500 transition-colors"><Icon
                                className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                            </Icon></Button>
                        </div>

                        {/* Features List */}
                        <FeatureList product={product}>

                        </FeatureList>

                    </div>
                </div>
            </div>
        </>
    );
};

