import React from "react";

function Navigation(props) {

  const tabs = ["Home", "Contact", "FOOD", "Places"];

  return (
    
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
        {tabs.map((tab, i) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick= {()=>props.setcurrentPage(i)}
         
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;