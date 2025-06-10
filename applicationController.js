const {
    uploadToJson,
    saveToJson
}  = require('../utils/storage');

exports.applyJob = async (req, res) => {
  try {
    const applications = await uploadToJson('application.json');
    const newId = applications.length ? applications[applications.length - 1].id + 1 : 1;

    const newApplication = {
      id: newId,
      ...req.body
    };
    applications.push(newApplication);
    await saveToJson('application.json', applications);
    return res.status(201).json(newApplication);

  } catch (err) {
    return res.status(500).json({ message: 'Failed to apply for job', error: err.message });
  }
};

exports.getApps = async (req, res) => {
  try {
    const applications = await uploadToJson('application.json');
    return res.status(200).json(applications);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to fetch applications', error: err.message });
  }
};

exports.deleteApp = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ message: 'Invalid ID' });

    let applications = await uploadToJson('application.json');
    const app = applications.find(a => a.id === id);

    if (!app) return res.status(404).json({ message: 'Application not found' });

    applications = applications.filter(a => a.id !== id);
    await saveToJson('application.json', applications);

    return res.status(200).json({ message: 'Application deleted successfully' });

  } catch (err) {
    return res.status(500).json({ message: 'Failed to delete application', error: err.message });
  }
};