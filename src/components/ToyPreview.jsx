import { useNavigate } from 'react-router-dom';

export function ToyPreview({toy}) {
    const { _id, price, name, inStock, imageUrl } = toy
    const navigate = useNavigate();

    function handleClick(toyId) {
        navigate(`/toy/${toyId}`)
    }

    return (
        <div onClick={() => handleClick(_id)} key={_id} className="border box-shadow-lg hover:cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg overflow-hidden shadow-lg w-full">
            <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-700">${price}</p>
              <div className="flex items-center space-x-2 mt-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
                <p className={`text-${inStock ? 'green' : 'red'}-500`}>
                  {inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            </div>
          </div>
    )
}