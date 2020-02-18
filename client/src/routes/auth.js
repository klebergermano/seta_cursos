import Cookies from "js-cookie";

export const isAuthenticated = new Promise((resolve, reject) => {
  var data = {
    sid: Cookies.get("sid")
  };
  fetch("/check_session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      if (res) {
        resolve(true);
      } else {
        reject(false);
      }
    });
});
