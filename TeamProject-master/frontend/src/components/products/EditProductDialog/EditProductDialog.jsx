import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from "@mui/material";

const EditProductDialog = ({ open, onClose, onEdit, product }) => {

    const [formData, setFormData] = useState({
        productName: "",
        productPrice: "",
        productQuantity: "",
        description: "",
        images: [],
        featureList: []
    });

    // ✅ IMPORTANT: sync product -> form when dialog opens
    useEffect(() => {
        if (product) {
            setFormData({
                productName: product.productName || "",
                productPrice: product.productPrice || "",
                productQuantity: product.productQuantity || "",
                description: product.description || "",
                images: product.images || [],
                featureList: product.featureList || []
            });
        }
    }, [product, open]);

    // -----------------------
    // BASIC INPUT
    // -----------------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "productQuantity" && Number(value) <= 0) return;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // -----------------------
    // IMAGES
    // -----------------------
    const handleImageChange = (index, value) => {
        const updated = [...(formData.images || [])];
        updated[index] = value;
        setFormData({ ...formData, images: updated });
    };

    const addImage = () => {
        setFormData({
            ...formData,
            images: [...(formData.images || []), ""]
        });
    };

    const removeImage = (index) => {
        const updated = (formData.images || []).filter((_, i) => i !== index);
        setFormData({ ...formData, images: updated });
    };

    // -----------------------
    // FEATURES
    // -----------------------
    const handleFeatureChange = (index, value) => {
        const updated = [...(formData.featureList || [])];
        updated[index] = value;
        setFormData({ ...formData, featureList: updated });
    };

    const addFeature = () => {
        setFormData({
            ...formData,
            featureList: [...(formData.featureList || []), ""]
        });
    };

    const removeFeature = (index) => {
        const updated = (formData.featureList || []).filter((_, i) => i !== index);
        setFormData({ ...formData, featureList: updated });
    };

    // -----------------------
    // SUBMIT
    // -----------------------
    const handleSubmit = () => {
        onEdit(product.productId, {
            ...formData,
            images: (formData.images || []).filter(i => i.trim() !== ""),
            featureList: (formData.featureList || []).filter(f => f.trim() !== "")
        });

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>Edit Product</DialogTitle>

            <DialogContent>

                <TextField
                    margin="dense"
                    label="Name"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Price"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Quantity"
                    name="productQuantity"
                    type="number"
                    value={formData.productQuantity}
                    onChange={handleChange}
                    fullWidth
                />

                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                />

                {/* ---------------- IMAGES ---------------- */}
                <h3>Images</h3>

                {(formData.images || []).map((img, index) => (
                    <div key={index} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <TextField
                            fullWidth
                            value={img}
                            onChange={(e) => handleImageChange(index, e.target.value)}
                        />
                        <Button color="error" onClick={() => removeImage(index)}>
                            X
                        </Button>
                    </div>
                ))}

                <Button onClick={addImage}>+ Add Image</Button>

                {/* ---------------- FEATURES ---------------- */}
                <h3>Features</h3>

                {(formData.featureList || []).map((feature, index) => (
                    <div key={index} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                        <TextField
                            fullWidth
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                        />
                        <Button color="error" onClick={() => removeFeature(index)}>
                            X
                        </Button>
                    </div>
                ))}

                <Button onClick={addFeature}>+ Add Feature</Button>

            </DialogContent>

            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditProductDialog;