import React from "react";
import { Consumer } from "../../contexts";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

const Tracks = () => {
  return (
    <Consumer>
      {(value) => {
        const { trackList, heading } = value;
        if (trackList === undefined || trackList.length === 0) {
          return <Spinner />;
        }
        return (
          <>
            <h3 className="text-center mb-4">{heading}</h3>
            <div className="row">
              {trackList.map((track) => (
                <Track track={track.track} key={track.track.track_id} />
              ))}
            </div>
          </>
        );
      }}
    </Consumer>
  );
};

export default Tracks;
