const { use } = require('react');
const {
    uploadToJson,
    saveToJson
} = require('../utils/storage');
const authfication = require('../middleware/authmiddleware');

exports.getmyprofile =  async (req,res) => {
    try{
        const id = Number(req.params.id);

        if(!id) return res.status(500);
        const users  = await uploadToJson('users.json');
        const user = users.find(u => u.id === id);

        if(!user) return res.status(500).json({message: 'the users do not exist'});
        
        return res.status(200).json(user);
    }catch(err){
        return res.status(500).json({message: 'error happen process : geting profile'})
    }

}

exports.deleteAccount = async (req,res) => {
    try{
        const id = Number(req.params.id);

        if(!id) return res.status(500);
        let users  = await uploadToJson('users.json');
        const user = users.find(u => u.id === id);

        if(!user) return res.status(500).json({message: 'the users do not exist'});
        users = users.filter(u => u.id !== id);

        return res.status(200).json({message: 'deleteing succed'});

    }catch(err){
        return res.status(500).json({message: 'error happen process : deleting'})
    }

}