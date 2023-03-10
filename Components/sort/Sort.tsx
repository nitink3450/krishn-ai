import React, { useState } from "react";
import CategoryCard from "./common/CategoryCard";
import data from "../../data/data";
import Select from "react-select";
import { defaultStyles } from "react-select/dist/declarations/src/styles";
import DetailCard from "./common/DetailCard";
import Slider from "react-slick";

const options = [
  { value: "highToLow", label: "High to Low" },
  { value: "lowToHigh", label: "Low to High" },
];

export default function Sort() {
  //selected option
  const [selectedOption, setSelectedOption] = useState<{
    value: String;
    label: String;
  } | null>();
  // console.log("hh:", selectedOption);

  //select function
  const handleChange = (
    selectedOption: { value: String; label: String } | null
  ) => {
    setSelectedOption(selectedOption);
    console.log("selectedOption", selectedOption);
  };

  //custom style to select
  const customStyles = {
    //dropdown options list
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      fontSize: "1.125rem",
      lineHeight: " 1.75rem",
      fontWeight: 700,
      color: state.isSelected ? "#fff" : "#000",
      backgroundColor: state.isSelected ? "#009EFF" : "#fff",
      "&:hover": {
        backgroundColor: state.isSelected ? "#009EFF" : "#DFF6FF",
      },
    }),
    // Dropdown entire column
    menu: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#fff",
    }),
    //Entire select button:
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#F7F5EB",
      // padding: "15px 10px 5px 10px",
      // border: "none",
      // boxShadow: "none",
      // borderRadius: "0",
    }),
    //select input field
    input: (defaultStyles: any) => ({
      ...defaultStyles,
      // 120 is the space that we write
      gridTemplateColumns: "0px 120px",
    }),
    inputContainer: (defaultStyles: any) => ({
      ...defaultStyles,
    }),
    placeholder: (defaultStyles: any) => ({
      ...defaultStyles,
      fontSize: "1.125rem",
      lineHeight: " 1.75rem",
    }),
    valueContainer: (defaultStyles: any) => ({
      ...defaultStyles,
      paddingRight: "0",
      // paddingLeft: "0",
    }),
    indicatorSeparator: (defaultStyles: any) => ({
      ...defaultStyles,
      // visibility: "hidden",
    }),
    dropdownIndicator: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      // color: state.isSelected ? "#fff" : "#fff",
    }),
    singleValue: (defaultStyles: any) => ({
      ...defaultStyles,
      // color: "#fff",
      // backgroundColor: "#000",
    }),
  };

  //Slider settings
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <>
      <main className="h-fit flex-col px-2 py-3 md:py-5  md:px-10">
        <h1 className="font-Mohave mt-16 font-bold text-[34px] sm:text-[55px] md:text-[66px] lg:text-[77px] xl:text-[88px] text-center  font-stroke">
          OUR CATEGORIES
        </h1>
        <ul className="border flex gap-5 p-[20px] justify-center overflow-auto">
          {/* <Slider
            className="border border-red-500 h-[300px] overflow-hidden "
            {...settings}
          > */}
          {data &&
            data?.map((card, i) => {
              return (
                <>
                  <CategoryCard key={i} {...card} />
                </>
              );
            })}
          {/* </Slider> */}
        </ul>
        <section className="border mt-[50px] flex justify-center">
          <Select
            className=" min-w-[260px] w-auto md:w-[300px] "
            options={options}
            isClearable={true}
            defaultValue={selectedOption}
            onChange={handleChange}
            classNamePrefix="react-select"
            styles={customStyles}
          />
        </section>
        <section className="border h-screen mt-[50px] flex-wrap ">
          <DetailCard />
        </section>
      </main>
    </>
  );
}
