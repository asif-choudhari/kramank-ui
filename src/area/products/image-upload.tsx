import { useState } from "react";
import axios from "axios";

const ProductImageUpload = () => {
  const [productId, setProductId] = useState("");
  const [images, setImages] = useState([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileChange = (e: any) => {
    const files: never[] = Array.from(e.target.files);
    setImages(files);
  };

  const handleUpload = async () => {
    if (!productId || images.length === 0) {
      alert("Please select a product and upload at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("productId", productId);
    images.forEach((image) => {
      formData.append(`images`, image);
    });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload-product-images`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Product images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading product images:", error);
      alert("Failed to upload product images.");
    }
  };

  return (
    <div>
      <h2>Upload Product Images</h2>
      <label htmlFor="productId">Product ID:</label>
      <input
        type="text"
        id="productId"
        name="productId"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />

      <label htmlFor="images">Select Images:</label>
      <input type="file" id="images" onChange={handleFileChange} multiple />

      <button onClick={handleUpload}>Upload Images</button>
    </div>
  );
};

export default ProductImageUpload;
