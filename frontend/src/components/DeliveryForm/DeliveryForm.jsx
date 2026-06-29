import React, {useState} from "react";
import { useCart } from "../../providers/CartProvider";
import { useClearCart } from "../../hooks/Cart/useClearCart";

export default function DeliveryForm({onSubmit}) {

    const { setCart } = useCart();
    const { clearCart } = useClearCart();

    const [success, setSuccess] = useState(false);

    const [form, setForm] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        postalCode: ""
    });

    const [errors, setErrors] = useState({});

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validate = (data) => {
        const newErrors = {};

        if (!data.name.trim()) newErrors.name = "Name is required";
        if (!data.surname.trim()) newErrors.surname = "Surname is required";

        if (!data.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(data.email)) newErrors.email = "Invalid email format";

        if (!data.phone.trim()) newErrors.phone = "Phone is required";
        else if (data.phone.length < 8) newErrors.phone = "Invalid phone number";

        if (!data.address.trim()) newErrors.address = "Address is required";
        if (!data.city.trim()) newErrors.city = "City is required";
        if (!data.postalCode.trim()) newErrors.postalCode = "Postal code is required";

        return newErrors;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        const updated = {...form, [name]: value};
        setForm(updated);
        setErrors(validate(updated));
    };

    const isValid = Object.keys(errors).length === 0 &&
        Object.values(form).every(v => v.trim() !== "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(form);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const confirmOrder = window.confirm(
            "Are you sure you want to place this order (Cash on Delivery)?"
        );

        if (!confirmOrder) return;

        try {
            await clearCart();      // backend
            setCart({ list: [] });  // frontend sync

            onSubmit?.({
                ...form,
                phone: "+389 " + form.phone
            });

            setSuccess(true);

            setForm({
                name: "",
                surname: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                postalCode: ""
            });

        } catch (err) {
            console.error("Failed to clear cart", err);
        }
    };

    return (
        <div className="my-12">

            {/* ✅ Success message */}
            {success && (
                <div
                    className="max-w-2xl mx-auto p-6 bg-green-100 border border-green-300 rounded-xl text-green-800 text-center">
                    <h2 className="text-xl font-bold mb-2">
                        🎉 Order Confirmed!
                    </h2>
                    <p>
                        Your order has been successfully placed. You will pay upon delivery.
                    </p>
                </div>
            )}

            {/* ✅ Form */}
            {!success && (
                <form
                    onSubmit={handleSubmit}
                    className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-5"
                >
                    <h2 className="text-2xl font-bold">Delivery Details</h2>

                    {/* Name */}
                    <div>
                        <input
                            name="name"
                            placeholder="Name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    {/* Surname */}
                    <div>
                        <input
                            name="surname"
                            placeholder="Surname"
                            value={form.surname}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div className="flex">
                    <span className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l">
                        +389
                    </span>
                        <input
                            name="phone"
                            placeholder="7X XXX XXX"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border p-3 rounded-r"
                        />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    {/* Address */}
                    <div>
                        <input
                            name="address"
                            placeholder="Address"
                            value={form.address}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>

                    {/* City */}
                    <div>
                        <input
                            name="city"
                            placeholder="City"
                            value={form.city}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                    </div>

                    {/* Postal Code */}
                    <div>
                        <input
                            name="postalCode"
                            placeholder="Postal Code"
                            value={form.postalCode}
                            onChange={handleChange}
                            className="w-full border p-3 rounded"
                        />
                        {errors.postalCode && (
                            <p className="text-red-500 text-sm">{errors.postalCode}</p>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-3 rounded font-bold text-white transition
                        ${isValid ? "bg-green-600 hover:bg-green-700" : "bg-gray-400 cursor-not-allowed"}
                    `}
                    >
                        Confirm Order (Cash on Delivery)
                    </button>
                </form>
            )}
        </div>
    );
}