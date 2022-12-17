import React, { useEffect, useState } from "react";
import s from "./Anime.module.scss";

const Anime = () => {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(1);
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
    setSize(size + 1);
    window.scroll();
  };
  useEffect(() => {
    getData();
  }, [size]);
  // console.log(data[0]);
  return (
    <>
      <div className={s.mainCont}>
        <div className={s.cards}>
          {data &&
            data.map((ele, i) => {
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
                      <h2>Title : {ele.title} </h2>
                      <p>Genres : {ele.genres} </p>
                      <p>Ranking : {ele.ranking} </p>
                      <p>Status : {ele.status} </p>
                      <p>Description : {ele.synopsis.slice(0, 400)}</p>
                    </div>
                  </div>
                </>
              );
            })}
          <div onClick={load} className={s.btn}>
            Load More
          </div>
        </div>
      </div>
    </>
  );
};

export default Anime;
