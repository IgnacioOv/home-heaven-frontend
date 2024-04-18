import React, { useState, useEffect } from 'react';
import Item from './Item';  
import './catalogo.css';
import SillaImage from './productos/Syltherine.png';
import MesaImage from './productos/Leviosa.png';
import SillonImage from './productos/Lolito.png';
import CosoImage from './productos/Respira.png';


export default function CatalogPage() {
        
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const [items, setItems] = useState([
        { id: 1, name: 'Syltherine', price: 20, originalPrice: 50, category: 'HomeDeco', description: 'Una buena silla',imageUrl:SillaImage },
        { id: 2, name: 'Leviosa', price: 30, originalPrice: 50, category: 'HomeDeco', description: 'Una buena mesa',imageUrl:SillonImage},
        { id: 3, name: 'Lolito', price: 25, originalPrice: 50, category: 'HomeDeco', description: 'Un buen sillon',imageUrl:MesaImage },
        { id: 4, name: 'Respira', price: 20, originalPrice: 50, category: 'OutDoor', description: 'Una buena cosa',imageUrl:CosoImage },
    ])

    const [filter, setFilter] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);
    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);    

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
        let results;
        if (filter === '') {
            results = items;
        } else {
            results = items.filter(item => item.category.toLowerCase() === filter.toLowerCase());
        }
        setFilteredItems(results);
    }, [filter, items]);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

    function handleCategoryChange(e) {
    setFilter(e.target.value);
    setCurrentPage(1);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <label for="filter" style={{ marginRight: '10px' }}>Filter:</label>
                <select id="filter" onChange={handleCategoryChange}>
                    <option value="">All</option>
                    <option value="HomeDeco">Home Deco</option>
                    <option value="OutDoor">Out Door</option>
                </select>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginTop: '20px',
                maxWidth: '1200px', // Adjust according to your layout preference
                margin: 'auto' // Center the grid horizontally
            }}>
                {currentItems.map(item => (
                    <Item
                        key={item.id}
                        name={item.name}
                        originalPrice={item.originalPrice}
                        price={item.price}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '20px',
            }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)} style={{ margin: '5px' }}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}