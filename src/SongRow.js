import React from 'react';
import "./SongRow.css"


function SongRow({track, playSong}) {

    let ms =track.duration_ms
    const convertMsToMinSec = (ms) => {
        let seconds = Math.floor(ms / 1000);
        let minutes = Math.floor(seconds / 60);
        let remainingSeconds = seconds % 60;

        return {
            minutes: minutes,
            seconds: remainingSeconds
        };
    }
    let min = convertMsToMinSec(ms)


    return (
        <div onClick={() => playSong(track.id)} className="songRow">
            <img src={track.album?.images[0]?.url} alt=""/>
            <div className="songRow__info">
                <h4>{track.name}</h4>
                <p>{track.album.name}</p>
            </div>
            <p className="songRow__lenght">{`${min.minutes } . ${min.seconds}`}</p>
            <p className="songRow__lenght">{track.id}</p>
        </div>
    );
}

export default SongRow;
