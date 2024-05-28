const { Url } = require('../models');
const shortid = require('shortid');

exports.createUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortUrl = shortid.generate();
  try {
    const url = await Url.create({ userId: req.user.id, originalUrl, shortUrl });
    res.json(url);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getUrls = async (req, res) => {
  try {
    const urls = await Url.findAll({ where: { userId: req.user.id } });
    res.json(urls);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateUrl = async (req, res) => {
  const { originalUrl } = req.body;
  try {
    let url = await Url.findByPk(req.params.id);
    if (!url) {
      return res.status(404).json({ msg: 'URL not found' });
    }
    if (url.userId !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    url.originalUrl = originalUrl;
    await url.save();
    res.json(url);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteUrl = async (req, res) => {
  try {
    let url = await Url.findByPk(req.params.id);
    if (!url) {
      return res.status(404).json({ msg: 'URL not found' });
    }
    if (url.userId !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await url.destroy();
    res.json({ msg: 'URL removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
