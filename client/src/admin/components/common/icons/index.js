import React from "react";

import AddUser from "./AddUser";
import Class from "./Class";
import Home from "./Home";
import Phone from "./Phone";
import Trash from "./Trash";
import Message from "./Message";
import Email from "./Email";

import Cog from "./Cog";
import User from "./User";
import Users from "./Users";
import CreditCard from "./Credit_card";
import Books from "./Books";
import FileText2 from "./File_text2";
import Eye from "./eye";
import Mug from "./Mug";

const Icon = (props) => {
  switch (props.name) {
    case "mug":
      return <Mug {...props} />;
    case "cog":
      return <Cog {...props} />;
    case "eye":
      return <Eye {...props} />;
    case "class":
      return <Class {...props} />;
    case "home":
      return <Home {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "trash":
      return <Trash {...props} />;
    case "message":
      return <Message {...props} />;
    case "email":
      return <Email {...props} />;
    case "add-user":
      return <AddUser {...props} />;
    case "user":
      return <User {...props} />;
    case "users":
      return <Users {...props} />;
    case "credit-card":
      return <CreditCard {...props} />;
    case "books":
      return <Books {...props} />;
    case "file-text2":
      return <FileText2 {...props} />;

    default:
      return "";
  }
};

export default Icon;
