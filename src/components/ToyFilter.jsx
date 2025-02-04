import React, { useState, useEffect } from 'react'

export default function ToyFilter({ toys, onFilterChange }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredToys, setFilteredToys] = useState(toys)

    useEffect(() => {
        const newFilteredToys = toys.filter(toy => 
            toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            toy.price <= parseFloat(searchTerm) ||
            toy.labels.some(label => label.toLowerCase().includes(searchTerm.toLowerCase())) ||
            toy.inStock.toString() === searchTerm 
        )
        setFilteredToys(newFilteredToys) 
        onFilterChange(newFilteredToys)
    }, [searchTerm, toys])

    return (
        <div className="flex items-center justify-center bg-blue-300 p-4">
            <form className="flex items-center" onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-r-none" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Search</button>
            </form>
        </div>
    )
}