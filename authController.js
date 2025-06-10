const { use } = require('react');
const {
    uploadToJson,
    saveToJson
} = require('../utils/storage');
const authfication = require('../middleware/authmiddleware');


exports.register = async (req, res) => {
    try{
        const users = await uploadToJson('users.json');
        const newid = users.length ? users[users.length - 1].id + 1 : id;
        const {name, email, role} = req.body;
        if(!name || !email || !role){
            return res.status(404).json({message: 'email or name or role not found'});
        }
        const newuser = {
            id: newid,
            name, 
            email,
            role
        }
        users.push(newuser);
        await saveToJson('users.json', users);
        return res.status(200).json(newuser);
    }catch (err) {
        return res.status(500).json({ message: 'Registration failed', error: err.message });
    }
    
}

// 📌 Login User
exports.login = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }

    const users = await uploadToJson('users.json');
    const user = users.find(u => u.name === name && u.email === email);

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const token = `${user.role}:${user.name}:SECRET_TOKEN`;

    return res.status(200).json({ token });

  } catch (err) {
    return res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
