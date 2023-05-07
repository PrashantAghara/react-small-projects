import axios from "axios";
import React, { useState } from "react";

export const Context = React.createContext();

export const Provider = (props) => {
  const initialState = {
    trackList: [],
    heading: "",
  };
  const [store, setStore] = useState(initialState);
  useState(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        setStore({
          trackList: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((e) => console.log(e));
  }, []);
  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;
