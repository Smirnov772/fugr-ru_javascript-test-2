import React from "react";
import './SectionWithForm.css' ;
function SectionWithForm(props) {
  return (
    <div className="forms-container">
      <h3 className="forms-container__title">{props.title}</h3>
      <form className="forms" onSubmit={props.onSubmit}>{props.children}</form>
    </div>
  )
}

export default SectionWithForm;
