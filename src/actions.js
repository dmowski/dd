const createNewDomain = async function (req, res) {
  res.status(200).json({ domain:'a', frontendUrl:'b' });
};

const initRouts = (app) => {
  app.get("/create-new-domain/:domain", createNewDomain);
  app.get("/", async function (req, res) {
    res.status(200).json({ message: "Server is up" });
  });
};

module.exports = initRouts;
