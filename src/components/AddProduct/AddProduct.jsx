import React, { useState } from 'react';
import './AddProduct.css';
import { jwtDecode } from 'jwt-decode';
import { fetchWithAuth } from '../utils/fetchWithAuth';




function AddProductForm() {
  const token = localStorage.getItem('accessToken');
  const decodedToken = jwtDecode(token);
  const [product, setProduct] = useState({
    productName: '',
    imageUrl: '',
    productDescription: '',
    price: '',
    category: '',
    stock: '',
    sellerId:decodedToken.userId
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.productName || !product.imageUrl || !product.productDescription || !product.price || !product.category || !product.stock) {
        alert('Por favor llene el formulario correctamente!');
        return;  
      }

      //decode jwt

      try {
        const response = await fetchWithAuth('http://localhost:8080/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
      if (response.ok) {
        alert('Producto añadido correctamente!');
        setProduct({
          productName: '',
          imageUrl: '',
          productDescription: '',
          price: '',
          category: '',
          sellerId: decodedToken.userId,
        });
      }
    } catch (error) {
      alert('Error al añadir el producto');
    }
  };



  const categories = {
    "bathroom": "BAÑO",
    "kitchen": "COCINA",
    "decoration": "DECORACIÓN",
    "bedroom": "DORMITORIO",
    "living": "LIVING"
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="productName">Producto:</label>
          <input type="text" id="productName" name="productName" value={product.productName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Imagen URL:</label>
          <input type="text" id="imageUrl" name="imageUrl" value={product.imageUrl} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="productDescription">Descripción:</label>
          <input type= "text" id="productDescription" name="productDescription" value={product.productDescription} onChange={handleChange} ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="text" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={product.category} onChange={handleChange}>
          <option value="">Select a category</option>
          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="seller">Stock:</label>
          <input type="text" id="stock" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit">Añadir Producto</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;