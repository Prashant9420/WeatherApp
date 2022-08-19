import React from "react";
// import Header from "./components/Header/Header";
// import Content from "./components/Content/Content";
import Content from "./components/form_components/Content/Content";
import style from "./App.css";
import Header from "./components/form_components/Header/Header";
function app(){
  return(
    <div className={style.body}>
      <Header/>
      <Content/>
    </div>
  )
}
export default app;