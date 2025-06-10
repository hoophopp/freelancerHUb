const {
    uploadToJson,
    saveToJson
} = require('../utils/storage');



exports.sendmsg = async (req, res) => {
    try {
        const messages = await uploadToJson('messages.json'); // added missing await
        const { jobId, toUserId, fromUserId } = req.body;

        if (!jobId || !toUserId || !fromUserId) { // fixed condition check
            return res.status(500).json({ message: 'please make sure to enter jobid or usr id' });
        }

        const newmsg = {
            id: messages.length ? messages[messages.length - 1].id + 1 : 1,
            ...req.body
        };

        messages.push(newmsg);
        await saveToJson('messages.json', messages);
        return res.status(200).json(newmsg);
    } catch (err) {
        return res.status(500).json({ message: 'error sending message', error: err.message });
    }
};

exports.getmessageuser = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(500).json({ message: 'please enter userid' });
        }

        const messages = await uploadToJson('messages.json');
        const msg = messages.filter(u => u.userId === userId || u.toUserId === userId || u.fromUserId === userId); // you can adjust this filter logic as needed

        if (!msg.length) { 
            return res.status(500).json({ message: 'no message from the user' });
        }

        res.status(200).json(msg);
    } catch (err) {
        return res.status(500).json({ message: 'error retrieving messages', error: err.message });
    }
};
