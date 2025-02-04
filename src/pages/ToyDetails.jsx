import React, { useState, useEffect } from 'react'
import { toyService } from '../../services/toy.service.js'
import { useNavigate } from 'react-router-dom'

export default function ToyDetails({toyId}) {
    const [toy, setToy] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        loadToy()
    })
    
    function loadToy() {
        toyService.getById(toyId)
        .then(setToy)
        .catch(err => showErrorMsg('couldn`y load toy: ', err))
    }

    function goBack() {
        navigate('/')
    }

    if(!toy) return <div>Loading...</div>
    
    
    return (
        <div className="p-6 text-center">
            <button onClick={goBack} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Back</button>
            <h1 className="text-2xl font-bold mb-4">Toy Details</h1>
            {toy ? (
                <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', maxWidth: '400px', margin: 'auto' }}>
                    <img src={toy.imageUrl} alt={toy.name} style={{ width: '100%', borderRadius: '8px' }} />
                    <h2>{toy.name}</h2>
                    <p>Price: ${toy.price}</p>
                    <p>Category: {toy.labels}</p>
                    <p>Age Range: {toy.inStock}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Buy Now</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}