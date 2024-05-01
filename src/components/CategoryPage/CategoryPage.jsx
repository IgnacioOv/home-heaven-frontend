import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HeaderCategory from '../HeaderCategory/HeaderCategory';  
import FooterCategory from '../FooterCategory/FooterCategory';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => {
        if (categoryName.toUpperCase() === 'TODOS') {
          setProducts(data);
        } else {
          setProducts(data.filter(product => product.category === categoryName));
        }
      });
  }, [categoryName]);

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = products.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
        <Navbar />
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
          </ul>
          {currentPage < totalPages && (
            <button onClick={nextPage} aria-label="Go to next page">
              Next
            </button>
          )}
        </nav>
        <FooterCategory />
    </div>
  );
}

export default CategoryPage;