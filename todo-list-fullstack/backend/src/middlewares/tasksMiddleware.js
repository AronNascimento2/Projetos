const validateTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    response.status(400).json({ message: 'The field "title" is required' });
  }

  if (body.title === "") {
    response.status(400).json({ message: "title cannot be empty" });
  }

  next();
};

const validateFieldStatus = (request, response, next) => {
  const { body } = request;

  if (body.staus === undefined) {
    response.status(400).json({ message: 'The field "staus" is required' });
  }

  if (body.staus === "") {
    response.status(400).json({ message: "staus cannot be empty" });
  }

  next();
};

module.exports = {
  validateTitle,
  validateFieldStatus,
};
