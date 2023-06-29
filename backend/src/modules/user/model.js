const db = require("../../config/db-config");

const findAll = () => {
  return db.query("SELECT * FROM users").then((data) => {
    return data;
  });
};

const findById = (id) => {
  return db
    .query
      ('SELECT * from users where id = ? ',[id],
    )
    .then((data) => {
      return data;
    });
    
};

const insert = (user) => {
  const { email ,password , firstname,lastname,role,agency_id} = user;
  return db.execute(`insert into users (email ,password , firstname, lastname, role, agency_id) values (?, ?, ?, ?, ?, ?)`, [
    email ,password , firstname, lastname, role, agency_id
  ]);
};

const findByMail = async (email) => {
  const [data] = await db.execute(`select * from users where email = ? `, [email]);
  return data;
};

const updateOne = (users, id) => {
  return db.query("update users set ? WHERE id = ?", [users, id]).then(([result]) => result);
};


const deleteOne = (id) => {
  return db.execute("delete from users where id = ?", [id]).then(([result]) => {
    return result;
  });
};
module.exports = {
  findAll,
  findById,
  insert,
  findByMail,
  updateOne,
  deleteOne,
};
