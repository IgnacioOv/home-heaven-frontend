import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './CategoryPage.css';

function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(16);  

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const filteredProducts = data.filter(product => product.category === categoryName);
        setProducts(filteredProducts);
      });
  }, [categoryName]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Category: {categoryName}</h1>
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
    </div>
  );
}

export default CategoryPage;