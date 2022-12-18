import React, { useEffect, useState } from "react";
import s from "./Anime.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
const Anime = () => {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(4);

  const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=" + size;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae068bb7c9msh5721ac08acb5619p17efbbjsn76169cfb2f1e",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };
  const getData = async () => {
    const res = await fetch(url, options);
    const data1 = await res.json();
    setData(data1.data);
  };
  const load = () => {
    setTimeout(() => {
      setSize(size + 4);
    }, 1000);
  };
  useEffect(() => {
    getData();
  }, [size]);
  // console.log(data);
  return (
    <>
      <div className={s.mainCont}>
        <InfiniteScroll
          dataLength={size}
          next={load}
          hasMore={true}
          loader={
            <h1 style={{ marginBottom: "100px", textAlign: "center" }}>
              Loading...
            </h1>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>The end</b>
            </p>
          }
        >
          <div className={s.cards}>
            {data &&
              data.map((ele) => {
                return (
                  <>
                    <div className={s.card} key={ele._id}>
                      <div className={s.left}>
                        <img
                          src={ele.image}
                          alt=""
                          height="300px"
                          width="230px"
                        />
                      </div>
                      <div className={s.right}>
                        <h2>{ele.title} </h2>
                        <p>
                          <b>Genres </b>: {ele.genres}{" "}
                        </p>
                        <p>
                          <b>Ranking</b> : {ele.ranking}{" "}
                        </p>
                        <p>
                          <b>Status </b>: {ele.status}{" "}
                        </p>
                        <p>
                          <b>Description</b> : {ele.synopsis.slice(0, 400)}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default Anime;
