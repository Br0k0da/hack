import React from "react";
import { useState } from "react";
import "./PlayerList.css";
import RoomSettings from "../RoomSettings/RoomSettings";
import { useEffect } from "react";
import { socketIO } from "../../..";


const PlayerList = ({ active, setActive, closeAllMenu }) => {
    
    const [nicknames, setNicknames] = useState(['Player1', 'Player2', 'Player3']);
    const [RoomSetingsActive, SetRoomSetingsActive] = useState(false);

    const [PlayerList, setPlayerList] = useState({})

    useEffect(() => {
        /*
            {
                {
                    name,
                    room,
                    opponent,
                },
                {
                    name,
                    room,
                    opponent
                }
            }
        */
        socketIO.on("GetPlayerList", (data) => {
            data = JSON.parse(data)

            setPlayerList(data)
        })

        socketIO.emit("GetPlayerList")
    }, [])

   
    const joinPlayer = (nickname) => {
        console.log(`Присоединились к ${nickname}`);
    };

    const CloseAllMenu = () =>
        {
            closeAllMenu()
            setActive(false)
        }


    return (
        <div className={active ? "listMenu active" : "listMenu"} onClick={() => setActive(false)}>
            <div className="listMenu_content" onClick={e => e.stopPropagation()}>
                <div className="creatRoombuttom1" onClick={() => {SetRoomSetingsActive(true)}}>Создать комнату</div>
                <h2>Список игроков</h2>
                <ul>
                    {Object.values(PlayerList).map((ply, index) => ply.opponent != undefined && ply.room != "" && (
                        <li key={index}>
                            {ply.name}
                            <button
                                className="join-button"
                                // onClick={() => joinPlayer(nickname)}
                            >Присоединиться
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <RoomSettings active={RoomSetingsActive} setActive={SetRoomSetingsActive} closeAllMenu={CloseAllMenu} />
        </div>
    );
};

export default PlayerList
