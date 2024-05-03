import './SearchResult.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import CategoriesBar from '../CategoriesBar/CategoriesBar';

const SearchResult = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('query');
      if (query) {
        setSearchQuery(query);
        fetchProducts(query);
      }
    }, [location.search]);
    


    
    const fetchProducts = async (searchQuery) => {
            setIsLoading(true);
        try {
                    await fetch('http://localhost:3000/products')
                    .then((response) => response.json())
                    .then(json =>{
                    const results = json.filter((product)=>{
                            return product.product && product.product && product.product.toLowerCase().includes(searchQuery.toLowerCase())
                    });
            if (results.length === 0) {
                throw new Error('No encontramos resultados para tu búsqueda');
            }
            setProducts(results);
        }) 
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        } 
    };
    console.log("entre al search result")
    return (
      <>
    <div className='search-container'>
      <h1>Resultados de tu búsqueda</h1>
        <div className='cardscontainer'>
          {isLoading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p> {error}</p>
          ) : (
            
            products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          )}
          </div>
      </div>
      
  </>
    );
};

export default SearchResult;