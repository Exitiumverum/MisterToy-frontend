export const utilService = {
    loadFromStorage,
    saveToStorage
}

function saveToStorage(keyDB, val) {
    const VAL_STR = JSON.stringify(val)
    localStorage.setItem(keyDB, VAL_STR)
}

function loadFromStorage(keyDB) {
    const VAL = localStorage.getItem(keyDB)
    return JSON.parse(VAL)
}


// function readJsonFile(path){
//     const STR = fs.readFileSync(path,'utf8')
//     const JSON = JSON.parse(STR)
//     return JSON
// }

