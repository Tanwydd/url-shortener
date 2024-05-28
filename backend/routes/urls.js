const express = require('express');
const { createUrl, getUrls, updateUrl, deleteUrl } = require('../controllers/urlController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, createUrl);
router.get('/', auth, getUrls);
router.put('/:id', auth, updateUrl);
router.delete('/:id', auth, deleteUrl);

module.exports = router;
