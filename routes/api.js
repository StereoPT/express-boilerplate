const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'GET Route',
    });
  } catch(error) {
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    res.json({
      message: 'POST Route',
    })
  } catch(error) {
    next(error);
  }
});

router.put('/', (req, res, next) => {
  try {
    res.json({
      message: 'PUT Route',
    })
  } catch(error) {
    next(error);
  }
});

router.delete('/', (req, res, next) => {
  try {
    res.json({
      message: 'DELETE Route',
    })
  } catch(error) {
    next(error);
  }
});

module.exports = router;