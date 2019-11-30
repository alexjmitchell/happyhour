import React from "react";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

function Slider() {
  const fn = function() {};
  return (
    <div>
      <div>hhhh</div>
      <div>ddd</div>
      <Coverflow
        width="960"
        height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={false}
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
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
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
      ,
      {/* <StyleRoot>
        <Coverflow
          displayQuantityOfSide={2}
          navigation
          infiniteScroll
          enableHeading
          media={{
            "@media (max-width: 900px)": {
              width: "600px",
              height: "300px"
            },
            "@media (min-width: 900px)": {
              width: "960px",
              height: "600px"
            }
          }}
        >
          <img
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
            alt="HHPLace one"
          />
          <img
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
            alt="HHPlace two"
          />
          <img
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
            alt="HHPlace three"
          />
          <img
            src="https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?cs=srgb&dl=cheers-drink-hand-544961.jpg&fm=jpg"
            alt="HHPlace four"
          />
        </Coverflow>
      </StyleRoot> */}
    </div>
  );
}

export default Slider;
