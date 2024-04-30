import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import HeaderCategory from '../HeaderCategory/HeaderCategory';  // Ensure this import is correct
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        if (categoryName.toUpperCase() === 'TODOS') {
          setProducts(data);
        } else {
          setProducts(data.filter(product => product.category === categoryName));
        }
      });
  }, [categoryName]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems = products.slice(indexOfLastItem - itemsPerPage, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
          {pageNumbers.map(number => (
            <li key={number}>
              <button onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <Footer />
    </div>
  );
}

export default CategoryPage;