import React from "react";
import Lable from "../../Components/common/Label/Lable";

const SvgMulti = () => {
  return (
    <>
      <Lable title="SVG Multi path Stroke animation" />
      <div className="svgMulti">
        <svg className="svgMultiPath mt-20">
          <symbol id="text">
            <text
              className="svgMultiPath-text"
              text-anchor="middle"
              x="50%"
              y="30%"
            >
              NITIN
            </text>
            <text
              className="svgMultiPath-text"
              text-anchor="middle"
              x="50%"
              y="70%"
            >
              KANHURKAR
            </text>
          </symbol>
          <use xlinkHref="#text"></use>
        </svg>
      </div>
    </>
  );
};

export default SvgMulti;
