import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Icon from "../lib/Icon";

function Slider() {
  const fn = function() {};
  return (
    <div>
      <p>
        Check Your Liked List Here:{" "}
        <Link to="/liked">
          {" "}
          <Icon icon="heart" />
        </Link>
      </p>
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg    />"
            alt="HH description"
            data-action="our link"
            style={{
              display: "block",
              width: "100%"
            }}
          />
        </div>
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
        <img
          src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
          alt="HH description"
          data-action="our link"
        />
      </Coverflow>
    </div>
  );
}

export default Slider;
