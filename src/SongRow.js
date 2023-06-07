import React from 'react';
import "./SongRow.css"


function SongRow({track,playSong}) {

    return (
        <div onClick={() => playSong(track.id)} className="songRow">
            <img src={track.album?.images[0]?.url} alt=""/>
            <div className="songRow__info">
                <h4>{track.name}</h4>
                <p>{track.album.name}</p>
            </div>
              <p className="songRow__lenght">2.45</p>
        </div>
    );
}

export default SongRow;
