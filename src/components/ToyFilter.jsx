import React, { useState, useEffect } from 'react'

export default function ToyFilter({ toys, onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredToys, setFilteredToys] = useState(toys)
    const [sortCriteria, setSortCriteria] = useState('name')
    const [maxPrice, setMaxPrice] = useState(500)
    const [isInStockSort, setIsInStockSort] = useState(true)

    useEffect(() => {
        const newFilteredToys = toys.filter(toy => 
            toy.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            toy.price <= maxPrice
        ).sort((a, b) => {
            switch (sortCriteria) {
                case 'max-price':
                    return a.price - b.price;
                case 'in-stock':
                    return (b.inStock ? 1 : 0) - (a.inStock ? 1 : 0);
                default:
                    return a.name.localeCompare(b.name);
            }
        })
        setFilteredToys(newFilteredToys) 
        onFilterChange(newFilteredToys)
    }, [searchTerm, toys, sortCriteria, maxPrice])

    return (
        <div className="flex items-center justify-center bg-blue-300 p-4">
            <form className="flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    value={maxPrice} 
                    onChange={(e) => setMaxPrice(e.target.value)} 
                    className="mx-2" 
                />
                <span>{maxPrice}</span>
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => {
                            setIsInStockSort(!isInStockSort);
                            setSortCriteria(isInStockSort ? 'in-stock' : 'out-of-stock');
                        }} 
                        className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        Sort by {isInStockSort ? 'Out of Stock' : 'In Stock'}
                    </button>
                </div>
            </form>
        </div>
    )
}