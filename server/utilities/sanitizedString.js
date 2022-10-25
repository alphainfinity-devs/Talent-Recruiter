const sanitizedString = (string) => {
  return string.replace(/[^a-zA-Z0-9]/g, " ");
};

module.exports = sanitizedString;
