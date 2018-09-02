const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports = {
  post: (req, res) => {
    console.log('login', req.body);
    const username = req.body.username;
    const enteredPassword = req.body.password;

    return User.findOne({ username }, (UserFindError, user) => {
      if (UserFindError) { return res.status(500).json(UserFindError); }

      if (!user) {
        return res.status(403).send();
      }

      const storedPassword = user.password;
      if (storedPassword === enteredPassword) {
        return res.status(200).json({ token: 'abc' });
      } else {
        return res.status(403).send();
      }
    });
  },
}
