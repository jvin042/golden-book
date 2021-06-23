const Message = require('../models/message');

exports.createMessage = (req, res) => {
  if (req.body.name === undefined || req.body.name === '' || req.body.message === undefined || req.body.message === '') {
    req.flash('error', 'Il y a une erreur vous n\'avez pas posté de message.');
    res.redirect('/');
  } else {
    Message.create(req.body.name, req.body.message, () => {
      req.flash('success', 'Merci pour votre message !');
      res.redirect('/');
    });
  }
};

exports.getAll = (req, res) => {
  Message.all((messages) => {
    res.render('index', { messages });
  });
};
