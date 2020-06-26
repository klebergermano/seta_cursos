import React, { Component, useContext } from "react";
import { MobileContext } from "../../../../context/MobileContext";

const ImageInformatica = (props) => {
  const mobileInfo = useContext(MobileContext);

  console.log("------------------------------");
  console.log(props.imgDesktop);
  console.log("------------------------------");
  if (mobileInfo.isMobile) {
    return (
      <img
        src={require("../../../../assets/img/informatica/" + props.imgMobile)}
      />
    );
  } else {
    return (
      <img
        src={require("../../../../assets/img/informatica/" + props.imgDesktop)}
      />
    );
  }
};
export default ImageInformatica;
