const validateUser = (req, res, next) => {

  const { name, email, age } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: "Valid email is required" });
  }

  if (!age) {
    return res.status(400).json({ message: " age is required" });
  }

  next();
};

export default validateUser;