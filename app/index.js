const { json } = require("micro");

module.exports = (req, res) =>
  json(req)
    .then(js => js.name)
    .catch(e => "world")
    .then(name => `Hello ${name}`);

const dummy = () => {
  return "dummy";
};
