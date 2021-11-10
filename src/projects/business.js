const Project = require("./model");

module.exports = {
  getProjects: async (req, res) => {
    const pro = await Project.find({});
    return res.status(200).json(pro);
  },
  createProject: async (req, res) => {
    const newProject = new Project(req.body);
    const created = await newProject.save();
    return res.status(201).json(created);
  },
};
