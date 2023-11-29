const validateFields = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined || body.title === '' || body.status === undefined || body.status === '') {
    return res.status(400).json({ message: 'O campo "title" ou "status" é obrigatório' });
  }
  next();
};

module.exports = {
  validateFields,
};