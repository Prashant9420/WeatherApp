import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import style from "./App.css";
function app(){
  return(
    <div className={style.body}>
      <Header/>
      <Content/>
    </div>
  )
}
export default app;