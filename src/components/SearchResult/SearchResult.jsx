import React from 'react';
import './SearchResult.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

const SearchResult = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('query');
      if (query) {
        setSearchQuery(query);
        fetchProducts(query);
      }
    }, [location.search]);
    
    
    const fetchProducts = (searchQuery) => {
        fetch('http://localhost:3000/products')
            .then((response) => response.json())
            .then(json =>{
            const results = json.filter((product)=>{
                return product.product && product.product && product.product.toLowerCase().includes(searchQuery.toLowerCase())
            });
            setProducts(results);
        });
    }

    return (
        <>
            {products.map((product)=>(
                <Card key={product.id} product={product}/>
            ))
            }
        </>
    );
};

export default SearchResult;