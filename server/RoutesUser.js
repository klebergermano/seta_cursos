const bcrypt = require("bcrypt");
class RoutesUser {
  constructor(app, db) {
    this.login(app, db);
    this.isLoggedIn(app, db);
    this.doLogout(app, db);
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
