import React, { useEffect, useState } from "react";
import { Consumer } from "../../contexts";
import axios from "axios";

const Search = () => {
  const [trackTitle, setTrackTitle] = useState("");
  const onChangeHandler = (e) => {
    setTrackTitle(e.target.value);
  };

  const findTracks = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page=1&page_size=10&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        dispatch({ type: "SEARCH", payload: res.data.message.body.track_list });
      })
      .catch((e) => console.log(e));
    setTrackTitle("");
  };

  useEffect(() => {});

  return (
    <Consumer>
      {(value) => {
        return (
          <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
              <i className="fas fas-music"></i> Search For a Song
            </h1>
            <p className="lead text-center">Get the lyrics for any song</p>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Song Title..."
                  name="trackTitle"
                  value={trackTitle}
                  onChange={onChangeHandler}
                />
              </div>
              <button
                className="btn-primary btn-lg btn-block mb-5"
                type="submit"
                onSubmit={findTracks.bind(value.dispatch)}
              >
                Get Tracks
              </button>
            </form>
          </div>
        );
      }}
    </Consumer>
  );
};

export default Search;
