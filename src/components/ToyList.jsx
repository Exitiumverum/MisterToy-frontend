import { ToyPreview } from './ToyPreview.jsx'

export function ToyList({toys}) {
    console.log(toys);
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {toys.map(toy => (
                <ToyPreview key={toy._id} toy={toy} />
            ))}
        </div>
    )
}   