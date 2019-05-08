import React, { useState } from "react";
import "./Page.css";
import {
  Header,
  Menus,
  Banner,
  Clock,
  TWContainer,
  ListView,
  Footer,
  GridView
} from "../../Components";
import jsonData from "./data.json";

function App() {
  const [view, setView] = useState("list");

  function renderItems() {
    return typeof jsonData === "object" ? (
      view === "list" ? (
        <ListView data={jsonData} />
      ) : (
        <GridView data={jsonData} />
      )
    ) : (
      <div />
    );
  }
  return (
    <React.Fragment>
      <Header />
      <Menus />
      <Banner />
      <TWContainer>
        <div className="row">
          <div className="col-sm-8 col-xs-12">
            <Clock />
          </div>
          <div className="col-sm-4 col-xs-12 filters">
            <div className="box-center-filter">
              <table className="pull-right">
                <tbody>
                  <tr className="hidden-xs">
                    <td>
                      <div
                        onClick={() => {
                          setView("list");
                        }}
                        className={`viewsSelect list-view ${
                          view === "list" ? "active" : ""
                        }`}
                      />
                    </td>
                    <td>
                      <div
                        onClick={() => {
                          setView("grid");
                        }}
                        className={`viewsSelect grid-view ${
                          view === "grid" ? "active" : ""
                        }`}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" align="center">
                      <div className="dropdown filter-dropdown float-right">
                        <button
                          className="btn-default dropdown-toggle filter-btn"
                          type="button"
                          id="filters"
                        >
                          All Videos <i className="fa fa-chevron-down" />
                        </button>
                        <ul className="dropdown-menu filter-items">
                          <li>
                            <a href="#allvideos">All Videos</a>
                          </li>
                          <li>
                            <a href="#trending">Trending</a>
                          </li>
                          <li>
                            <a href="#last24hours" className="">
                              Last 24 hours
                            </a>
                          </li>
                          <li>
                            <a href="#last7days" className="last">
                              Last 7 Days
                            </a>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TWContainer>
      <TWContainer>{renderItems()}</TWContainer>
      <Footer />
    </React.Fragment>
  );
}

export default App;
