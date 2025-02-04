import { utilService } from "./util.service.js";
import { storageService } from "./asyncStorage.js";

const STORAGE_KEY = 'toyDB'



export const toyService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter
}

const labels = [
    'On wheels', 'Boxgame', 'Art',
    'Baby', 'Doll', 'Puzzle',
    'Outdoor', 'Battery Powered']

function query(filterBy = getDefaultFilter()) {
    return storageService.query(STORAGE_KEY)
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
}

_createToys()

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (toys) return

    toys = []

    for (let i = 1; i <= 30; i++) {
        toys.push({
            _id: `t10${i}`,
            name: `Toy ${i}`,
            price: Math.floor(Math.random() * 100) + 50, 
            labels: ['Doll', 'Battery Powered', 'Baby'], 
            createdAt: Date.now(),
            inStock: Math.random() < 0.5,
            imageUrl: `https://robohash.org/${i}`
        });
    }

    utilService.saveToStorage(STORAGE_KEY, toys)
    console.log('service toys: ', toys);
}

function getDefaultFilter() {
    return { txt: '', labels: labels }
}