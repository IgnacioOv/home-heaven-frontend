import React, { useState } from 'react';
import './AddProduct.css';

function AddProductForm() {
  const [product, setProduct] = useState({
    product: '',
    image: '',
    description: '',
    price: '',
    category: '',
    seller: '',
    recommended: false
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

    if (!product.product || !product.image || !product.description || !product.price || !product.category || !product.seller) {
        alert('Por favor llene el formulario correctamente!');
        return;  
      }

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      if (response.ok) {
        alert('Producto añadido correctamente!');
        setProduct({
          product: '',
          image: '',
          description: '',
          price: '',
          category: '',
          seller: '',
          recommended: false
        });
      }
    } catch (error) {
      console.error('Failed to add product:', error);
    }
  };

  const categories = ["BAÑO", "COCINA", "DECORACIÓN", "DORMITORIO", "LIVING"];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="product">Producto:</label>
          <input type="text" id="product" name="product" value={product.product} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Imagen URL:</label>
          <input type="text" id="image" name="image" value={product.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <input id="description" name="description" value={product.description} onChange={handleChange} ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Precio:</label>
          <input type="text" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={product.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
            ))}
        </select>
        </div>
        <div className="form-group">
          <label htmlFor="seller">Vendedor:</label>
          <input type="text" id="seller" name="seller" value={product.seller} onChange={handleChange} />
        </div>
        <div className="form-group checkbox-group">
        <label htmlFor="recommended" className="checkbox-label">
        Recomendado:
            <input type="checkbox" id="recommended" name="recommended" checked={product.recommended} onChange={handleChange} />
        </label>
        </div>
        <div className="form-group">
          <button type="submit">Añadir Producto</button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;