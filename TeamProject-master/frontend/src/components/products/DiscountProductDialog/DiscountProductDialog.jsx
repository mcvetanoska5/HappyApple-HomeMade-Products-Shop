import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import { QuantityDropdown } from "../../QuantityDropdown"; // import your dropdown

const DiscountProductDialog = ({ open, onClose, product, addDiscount, deleteDiscount }) => {
    const [discount, setDiscount] = useState(0);

    // Initialize discount input with current discount if exists
    useEffect(() => {
        setDiscount(product?.discount || 0);
    }, [product]);

    const handleAddDiscount = async () => {
        if (discount < 0 || discount > 100) {
            alert("Discount must be between 0 and 100%");
            return;
        }
        try {
            await addDiscount(product.productId, discount);
            onClose();
        } catch (err) {
            console.error(err);
            alert("Failed to add discount.");
        }
    };

    const handleRemoveDiscount = async () => {
        try {
            await deleteDiscount(product.productId);
            onClose();
        } catch (err) {
            console.error(err);
            alert("Failed to remove discount.");
        }
    };

    const hasDiscount = product?.discount > 0;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: 300,          // fixed width
                    minHeight: 400,      // taller height
                    display: "flex",
                    flexDirection: "column",
                }
            }}
        >
            <DialogTitle>
                {hasDiscount ? "Remove Discount" : "Add Discount"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {hasDiscount ? (
                        <>
                            Product <strong>{product.productName}</strong> currently has a{" "}
                            <strong>{product.discount}%</strong> discount.
                        </>
                    ) : (
                        <>
                            Select a discount value (1–100%) for{" "}
                            <strong>{product.productName}</strong>:
                        </>
                    )}
                </DialogContentText>

                {!hasDiscount && (
                    <div className="mt-4">
                        <QuantityDropdown
                            initial={discount || 1}
                            onChange={(value) => setDiscount(value)}
                        />
                    </div>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                {hasDiscount ? (
                    <Button
                        color="error"
                        variant="contained"
                        onClick={handleRemoveDiscount}
                    >
                        Remove Discount
                    </Button>
                ) : (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleAddDiscount}
                    >
                        Add Discount
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default DiscountProductDialog;