const bcrypt = require("bcrypt");
class RoutesUser {
  constructor(app, db) {
    this.userEditView(app, db);
    this.userEdit(app, db);
    this.userAdd(app, db);
    this.userView(app, db);
    this.login(app, db);
    this.isLoggedIn(app, db);
    this.doLogout(app, db);
  }
  userEditView(app, db) {
    app.get("/user_edit_view/:id", async (req, res) => {
      var id = req.params.id;
      console.log(id);

      db.query("SELECT * FROM user WHERE id = ? LIMIT 1", id, (err, result) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          res.json(result[0]);
        }
      });
    });
  }

  userEdit(app, db) {
    app.post("/user_edit", async (req, res) => {
      var id = req.body.id;
      if (req.body.newPassword.length >= 5) {
        bcrypt.hash(req.body.newPassword, 10, function (err, hash) {
          let update_user = {
            username: req.body.username,
            password: hash,
            privilege: req.body.privilege,
            modified: new Date(),
          };
          db.query(
            "UPDATE user SET ? WHERE id = ?",
            [update_user, id],
            (err) => {
              if (err) {
                console.log(err);
                res.sendStatus(500);
                return false;
              } else {
                console.log("atualizado");
              }
            }
          );
        });
      } else {
        console.log(req.body.newPassword);
        let update_user = {
          username: req.body.username,
          privilege: req.body.privilege,
          modified: new Date(),
        };
        db.query("UPDATE user SET ? WHERE id = ?", [update_user, id], (err) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            console.log("atualizado");
          }
        });
      }
    });
  }

  userAdd(app, db) {
    app.post("/user_add", async (req, res, next) => {
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        let new_user = {
          username: req.body.username,
          password: hash,
          privilege: req.body.privilege,
          created: new Date(),
          modified: new Date(),
        };
        db.query("INSERT INTO user SET ?", new_user, (err, res) => {
          if (err) {
            console.log(err);
            return false;
          }
        });
      });
    });
  }
  userView(app, db) {
    app.get("/users_view", async (req, res) => {
      try {
        db.query(" SELECT * FROM user", (err, results) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);

            return;
          } else {
            res.json(results);
            return;
          }
        });
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    });
  }

  login(app, db) {
    app.post("/login", (req, res) => {
      let username = req.body.inputUsername;
      let password = req.body.inputPassword;

      if (password.length > 12) {
        res.json({
          success: false,
          msg: "Um erro ocorreu, tente novamente",
        });
        return;
      }
      let cols = [username];
      db.query(
        "SELECT * FROM user WHERE username = ? LIMIT 1",
        cols,
        (err, data, fields) => {
          if (err) {
            console.log(err);

            res.json({
              success: false,
              msg: "Ocorreu um erro, por favor tente novamente",
            });
            return;
          }
          //Confere se tem um usuario com esse username
          if (data && data.length === 1) {
            bcrypt.compare(
              password,
              data[0].password,
              (bcryptErr, verified) => {
                if (verified) {
                  req.session.userID = data[0].id;
                  res.json({
                    success: true,
                    username: data[0].username,
                  });
                  return;
                } else {
                  res.json({
                    success: false,
                    msg: "Usuário ou senha inválidos",
                  });
                }
              }
            );
          } else {
            res.json({
              success: false,
              msg: "Usuário não existe",
            });
          }
        }
      );
    });
  }

  doLogout(app, db) {
    app.post("/doLogout", (req, res) => {
      let userID = req.session.userID;
      if (userID) {
        req.session.destroy();
        res.json({
          success: true,
        });
        return true;
      } else {
        res.json({ success: false });
        return false;
      }
    });
  }

  isLoggedIn(app, db) {
    app.post("/isLoggedIn", (req, res) => {
      if (req.session.userID) {
        let sessID = [req.session.userID];
        db.query(
          "SELECT * FROM user WHERE id = ? LIMIT 1",
          sessID,
          (err, data, fields) => {
            if (data && data.length === 1) {
              res.json({
                success: true,
                username: data[0].username,
              });
              return true;
            } else {
              console.log(err);

              res.json({
                success: false,
              });
            }
          }
        );
      } else {
        res.json({
          success: false,
        });
      }
    });
  }
}
module.exports = RoutesUser;
