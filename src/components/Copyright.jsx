import React from "react";

import config from "../config/config";

// Stateless component that renders the Copyright bar
export default function Copyright() {
  return (
    <div className="copyright">
      <hr />
      &copy; 2018 Pool Pros
      {config.copyright.map(item => {
        return (
          <span key={item.desc}>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href={item.href} key={item.desc}>
              {item.desc}
            </a>
          </span>
        );
      })}
    </div>
  );
}
