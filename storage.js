const fs = require('fs').promises;
const path = require('path');


async function uploadToJson(filename) {
    try{
        const filepath = path.join(__dirname , '..', 'data' , filename);
        const data = await fs.readFile(filepath, 'utf-8');
        return JSON.parse(data);

    }catch(err){
        if(err.code === 'ENOENT') return [];
    }
}

async function saveToJson(filename, data) {
    try{
        const filepath = path.join(__dirname , '..', 'data' , filename);
        return await fs.writeFile(filepath, JSON.stringify(data, null, 2));

    }catch(err){
        if(err.code === 'ENOENT') return [];
    }
}

module.exports = {
    saveToJson,
    uploadToJson
}