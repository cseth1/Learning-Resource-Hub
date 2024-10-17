const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, resourceController.createResource);
router.get('/', resourceController.getAllResources);
router.get('/:id', resourceController.getResourceById);
router.put('/:id', authMiddleware, resourceController.updateResource);
router.delete('/:id', authMiddleware, resourceController.deleteResource);
router.get('/search', resourceController.searchResources);

module.exports = router;
