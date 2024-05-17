import React from "react";
import { useState } from "react";
import "./PlayerList.css";



const PlayerList = ({ active, setActive }) => {
    const [nicknames, setNicknames] = useState(['Player1', 'Player2', 'Player3']);

    const joinPlayer = (nickname) => {
        console.log(`Присоединились к ${nickname}`);
    };


    return (
        <div className={active ? "listMenu active" : "listMenu"} onClick={() => setActive(false)}>
            <div className="listMenu_content" onClick={e => e.stopPropagation()}>
                <h2>Список игроков</h2>
                <ul>
                    {nicknames.map((nickname, index) => (
                        <li key={index}>
                            {nickname}
                            <button
                                className="join-button"
                                onClick={() => joinPlayer(nickname)}
                            >Пригласить
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlayerList