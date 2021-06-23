const moment = require('../config/moment');

const connection = require('../config/db');

class Message {
  constructor(row) {
    this.row = row;
  }

  get id() {
    return this.row.id;
  }

  get name() {
    return this.row.name;
  }

  get content() {
    return this.row.content;
  }

  // eslint-disable-next-line camelcase
  get created_at() {
    return moment(this.row.created_at);
  }

  static create(name, content, callback) {
    connection.query(
      'INSERT INTO messages SET name = ?, content = ?, created_at = ?',
      [name, content, new Date()],
      (err, result) => {
        if (err) throw err;
        callback(result);
      },
    );
  }

  static all(callback) {
    connection.query(
      'SELECT * FROM messages ORDER BY created_at DESC',
      (err, rows) => {
        if (err) throw err;
        callback(rows.map((row) => new Message(row)));
      },
    );
  }
}

module.exports = Message;
