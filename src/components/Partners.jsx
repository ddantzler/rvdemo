import React from "react";

import config from "../config/config";

// Map the top menu which seems to be B2B or Partner links
export default function Partners() {
  return (
    <div className="partners">
      {config.partners.map(item => {
        return (
          <a href={item.href} className={item.icon} key={item.desc}>
            {item.desc}
          </a>
        );
      })}
    </div>
  );
}
