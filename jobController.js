const {
    uploadToJson,
    saveToJson
} = require('../utils/storage');

exports.postJob = async (req, res) => {
  try {
    const jobs = await uploadToJson('jobs.json');
    const newId = jobs.length ? jobs[jobs.length - 1].id + 1 : 1;

    const newJob = {
      id: newId,
      ...req.body
    };
    jobs.push(newJob);
    await saveToJson('jobs.json', jobs);

    return res.status(201).json(newJob);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.viewjob = async (req, res) => {
  try {
    const jobs = await uploadToJson('jobs.json');
    return res.status(200).json(jobs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


exports.getsjob = async (req, res) => {
  try {
    const jobs = await uploadToJson('jobs.json');
    const id = Number(req.params.id);

    if (!id) return res.status(400).json({ error: 'Invalid or missing ID.' });

    const job = jobs.find(job => job.id === id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    return res.status(200).json(job);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.editJob = async (req, res) => {
  try {
    const jobs = await uploadToJson('jobs.json');
    const id = Number(req.params.id);
    if (!id) return res.status(400).json({ error: 'Invalid ID' });
    const index = jobs.findIndex(job => job.id === id);
    if (index === -1) return res.status(404).json({ message: 'Job not found' });

    const updatedJob = {
      id,
      ...req.body
    };
    jobs[index] = updatedJob;
    await saveToJson('jobs.json', jobs);

    return res.status(202).json({ message: 'Job updated successfully', job: updatedJob });
  } catch (err) {
    res.status(500).json({ message: 'Error editing job', error: err.message });
  }
};

exports.dlt = async (req, res) => {
  try {
    let jobs = await uploadToJson('jobs.json');
    const id = Number(req.params.id);

    if (!id) return res.status(400).json({ error: 'Invalid ID' });

    const job = jobs.find(job => job.id === id);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    jobs = jobs.filter(j => j.id !== id);
    await saveToJson('jobs.json', jobs);

    return res.status(200).json({ message: 'Job deleted successfully' });
  } catch (err) {
    res.status(500).json({message: 'error deleting job'});
  }
}