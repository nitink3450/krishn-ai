import React from "react";
import Sort from "../../Components/sort/Sort";
import Header from "../../Components/common/header/Header";
import Lable from "../../Components/common/Label/Lable";

function SortPage() {
  return (
    <div className="border bg-[#F8FAFC]">
      <Lable title="Sort Filter with Ecart cards" />
      <Sort />
    </div>
  );
}

export default SortPage;
