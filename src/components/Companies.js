import React from "react";

const theLinks = [
  {
    label: "Znanylekarz"
  },
  {
    label: "Doctoralia"
  },
  {
    label: "MioDottore"
  },
  {
    label: "DoktorTakvimi"
  },
  {
    label: "Znamylekar"
  }
];
function Companies(props) {
  let tab = [];
  tab = theLinks.map((el, i) => (
    <div labell={i} className="links">
      <ul>
        <li>
          <a href="#">
            <div className="label">{el.label}</div>
            <img
              className="image"
              src="https://www.docplanner.com/img/sygnet.png"
            />
          </a>
        </li>
      </ul>
    </div>
  ));
  return tab;
}
export default Companies;
