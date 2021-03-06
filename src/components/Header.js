import React from "react";

const Header = props => (
  <header className="top">
    <h2>
      <svg height="35" width="250">
        {/* <g transform="scale(0.3)">
          <path
            d="M119.1,16.9C109.3,12.9,90.5,0,77.4,0c-1,0-1.6,0.2-1.6,0.7c0,1.8,7.9,8.4,7.9,13.9c0,7.8-31.1,13-41.7,13
		c-12.8,0-30.7-14.8-38.9-14.8c-1.9,0-3,0.5-3,1.4c0,1.1,23.1,15.7,23.1,30.6C23.3,60.7,0,78,0,79.5c0,0.5,0.7,0.6,1.2,0.6
		c7.9,0,13-2.6,34.7-26.2c5.3-5.8,19.1-26.6,61.1-26.6c28.8,0,52.1,13.8,52.1,26.3c0,11.9-20.1,22-44.9,22c-22.1,0-38.9-9.8-38.9-19
		c0-8.2,9.7-17.6,30.8-17.6c16.4,0,29,6.5,29,14.4c0,9.9-27.6,10.1-27.6,0.8c0-6.3,12-4.4,12-4.4s-1.9-5.3-12.4-5.3
		c-12.9,0-20.9,5.7-20.9,12.3c0,7.1,12.9,13.1,29.8,13.1c19.9,0,32.2-7.8,32.2-16.2c0-10.8-19.5-20.7-42.1-20.7
		c-28.8,0-45.3,12-45.3,23.8c0,11.7,20.4,26.3,54.5,26.3c40.5,0,65.6-22.5,65.6-30.4C171,41.6,135.4,23.6,119.1,16.9z"
          />
        </g> */}
        <image href="/images/fruit_menu.svg" width="25" height="35" />
        <text x="55" y="25" fill="#fcb034">
          FRUITMART
        </text>
        Sorry, your browser does not support inline SVG.
      </svg>
      {/* Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day */}
    </h2>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;
