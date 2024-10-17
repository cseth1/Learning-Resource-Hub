const Resource = require('../models/Resource');
const { Op } = require('sequelize');

exports.createResource = async (req, res) => {
  try {
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (error) {
    res.status(400).json({ message: 'Resource creation failed', error: error.message });
  }
};

exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources', error: error.message });
  }
};

exports.getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resource', error: error.message });
  }
};

exports.updateResource = async (req, res) => {
  try {
    const [updated] = await Resource.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedResource = await Resource.findByPk(req.params.id);
      res.json(updatedResource);
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Resource update failed', error: error.message });
  }
};

exports.deleteResource = async (req, res) => {
  try {
    const deleted = await Resource.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Resource not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error: error.message });
  }
};

exports.searchResources = async (req, res) => {
  try {
    const { query } = req.query;
    const resources = await Resource.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${query}%` } },
          { description: { [Op.iLike]: `%${query}%` } },
          { subject: { [Op.iLike]: `%${query}%` } }
        ]
      }
    });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error searching resources', error: error.message });
  }
};
