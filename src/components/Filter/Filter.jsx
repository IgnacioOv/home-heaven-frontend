import React, { useState, useEffect } from 'react';
// import productsData from '../../assets/productos.json'
import Card from '../Card/Card';  // Adjust the path as needed
import './Filter.css';

const Filter = () => {
    const [category, setCategory] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;
    const [categories, setCategories] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator
    const [error, setError] = useState(null); // State to store API errors

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true); // Set loading state to true
          try {
            const response = await fetch("http://localhost:3000/products");
            if (!response.ok) {
              throw new Error(`API request failed with status ${response.status}`);
            }
            const data = await response.json();
            setProductsData(data);
            const uniqueCategories = Array.from(new Set(data.map(product => product.categoria)));
            setCategories(uniqueCategories); // Update products state with fetched data
          } catch (error) {
            setError(error.message); // Set error state
          } finally {
            setIsLoading(false); // Set loading state to false regardless of success or error
          }
        };
    
        fetchData(); // Fetch data on component mount
      }, []);
  
    const filteredProducts = category
    ? productsData.filter(product => product.categoria.includes(category))
    : productsData;
    console.log(filteredProducts)
  
    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    console.log(totalPages)
  
    // Change page function
    const changePage = (page) => {
      setCurrentPage(page);
    };
  
    // Get current products to display
    const currentProducts = filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
    console.log(currentProducts)
  
    return (
      <div>
        <label htmlFor="category-select">Choose a Category:</label>
        <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todo</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>
        <div className="products-container">
          {productsData.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => changePage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Filter;