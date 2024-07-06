import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';
import HeaderCategory from '../HeaderCategory/HeaderCategory';  
import FooterCategory from '../FooterCategory/FooterCategory';
import './CategoryPage.css';
import CategoriesBar from '../CategoriesBar/CategoriesBar';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/products/category/${categoryName}`,
        
          { headers: { 'Content-Type': 'application/json' },method: 'GET'}
        );
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = products.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>  
      <Navbar />
      <div className='category-page-container'>
        <CategoriesBar />
        <HeaderCategory categoryName={categoryName} />
        <div className="category-grid">
          {currentItems.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <nav className="pagination">
          <ul>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <li key={number}>
                <button onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                  {number}
                </button>
              </li>
            ))}
          {currentPage < totalPages && (
            <button onClick={nextPage} aria-label="Go to next page">
              Next
            </button>
          )}
          </ul>
        </nav>
        <FooterCategory />
      </div>
    </>
  );
}

export default CategoryPage;
