import './SearchResult.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

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
            const response = await fetch(`http://localhost:8080/products/search/${searchQuery}`);
            if (!response.ok) {
                throw new Error('Error al buscar productos');
            }
            const data = await response.json();
            if (data.length === 0) {
                throw new Error('No encontramos resultados para tu búsqueda');
            }
            setProducts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='search-container'>
            <h1>Resultados de tu búsqueda</h1>
            <div className='cardscontainer'>
                {isLoading ? (
                    <p>Loading products...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    products.map((product,index) => (
                        <Card key={index} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchResult;
