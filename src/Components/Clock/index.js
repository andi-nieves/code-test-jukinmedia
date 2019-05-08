import React, { useState, useEffect } from "react";
import moment from "moment";
import "./Style.css";

function Component() {
  const [clock, setClock] = useState(null);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const time = moment();
      setClock({
        h: time.format("hh"),
        m: time.format("mm"),
        s: time.format("ss"),
        ap: time.format("A"),
        day: time.format("dddd"),
        date: time.format("MMM MM, YYYY")
      });
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, [clock]);
  return clock ? (
    <div className="row">
      <div className="col-sm-6">
        <ul className="clock">
          <li id="hours">{clock.h}</li>
          <li id="point">:</li>
          <li id="min">{clock.m}</li>
          <li id="point">:</li>
          <li id="sec">{clock.s}</li>
          <li id="ampm">{" " + clock.ap}</li>
          <div id="DateMobile" className="d-block d-sm-none">
            {`${clock.day} ${clock.date}`}
          </div>
        </ul>
      </div>
      <div className="col-sm-4">
        <div className="date d-none d-sm-block">
          {clock.day}
          <br />
          {clock.date}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Component;
