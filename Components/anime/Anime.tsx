/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import s from "./Anime.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import ErrorBoundary from "./common/errorBoundary/ErroBoundary";
import Spinner from "./common/spin/Spin";
const Anime = () => {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(4);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=" + size;
  const url2 = "https://jsonplaceholder.typicode.com/photos?_limit=" + size;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae068bb7c9msh5721ac08acb5619p17efbbjsn76169cfb2f1e",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };
  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url2, options);
      const data1 = await res.json();
      // console.log(data1);

      // const mainData = data1?.data?.map((ele:any, i:number)=>{
      //   return{
      //     img : ele?.image,
      //   }
      // })

      setData(data1);
      console.log("try");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      console.log("error", error);
      console.log("catch");
    } finally {
      setIsLoading(false);
      console.log("finally");
    }
  };
  // console.log(data);
  const load = () => {
    setSize(size + 4);
  };
  useEffect(() => {
    getData();
  }, [size, isError]);

  return (
    <>
      {/* <div className={s.spin}>
        <Spinner />
      </div> */}
      <div className={s.mainCont}>
        <Header />
        {isError ? (
          <ErrorBoundary
            setIsError={() => {
              setIsError(false);
            }}
          />
        ) : (
          <>
            <InfiniteScroll
              dataLength={size}
              next={load}
              hasMore={true}
              loader={
                isLoading ? (
                  <h1 style={{ margin: "100px 0", textAlign: "center" }}>
                    Loading...
                  </h1>
                ) : (
                  " "
                )
              }
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>The end</b>
                </p>
              }
            >
              <div className={s.cards}>
                {data &&
                  data?.map((ele: any, i) => {
                    return (
                      <>
                        <div className={s.card} key={i}>
                          <div className={s.left}>
                            {ele?.url && (
                              <img
                                src={ele?.url}
                                alt=""
                                height="300px"
                                width="230px"
                              />
                            )}
                          </div>
                          <div className={s.right}>
                            {ele?.title && <h2>{ele.title}</h2>}
                            {/* {ele?.genres && (
                              <p>
                                <b>Genres </b>: {ele.genres}
                              </p>
                            )} */}
                            {ele?.ranking && (
                              <p>
                                <b>Ranking</b> : {ele.id}
                              </p>
                            )}
                            {/* {ele?.status && (
                              <p>
                                <b>Status </b>: {ele.status}
                              </p>
                            )}
                            {ele?.synopsis && (
                              <p>
                                <b>Description</b> :{" "}
                                {ele.synopsis.slice(0, 100)}
                              </p>
                            )} */}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </InfiniteScroll>
          </>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Anime;
