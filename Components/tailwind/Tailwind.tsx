import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorBoundary from "../anime/common/errorBoundary/ErroBoundary";
import Card from "./common/card/Card";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

export default function Tailwind() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(9);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://dummyjson.com/users?limit=${limit}`;
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data1 = await res.json();
      setData(data1?.users);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.error("Error : ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const load = () => {
    setLimit(limit + 9);
  };

  useEffect(() => {
    getData();
  }, [limit, isError]);

  return (
    <>
      <div>
        <Header />
        {/* <BreakPoints/> */}
        {isError ? (
          <div className="mt-28 p-20">
            <ErrorBoundary
              setIsError={() => {
                setIsError(false);
              }}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center bg-neutral-900 py-20">
            <InfiniteScroll
              dataLength={data.length}
              next={load}
              hasMore={true}
              loader={
                isLoading ? (
                  <h1 className="text-center text-2xl">Loading...</h1>
                ) : (
                  " "
                )
              }
              endMessage={
                <p className="flex justify-center items-center">
                  <b className="text-center">The End</b>
                </p>
              }
            >
              <div className="p-5 h-fit w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {data &&
                  data?.map((user, i) => {
                    return <Card key={i} data={user} />;
                  })}
              </div>
            </InfiniteScroll>
          </div>
        )}
        {/* <form>
          <div className="borderRed">
            Hello world!
          </div>
        </form> */}
        <Footer />
      </div>
    </>
  );
}
