import React from "react";
import { useState } from "react";
import "./MainMenu.css";
import CreatMenu from "../CreatMenu/CreatMenu";
import Settings from "../Settings/Settings";
import { socketIO } from "../../..";
import { useEffect } from "react";
import { setPlayer } from "../../../store/player";
import { useDispatch, useSelector } from "react-redux";

const MainMenu = ({active, setActive}) => {
    const [creatMenuActive, setCreatMenuActive] = useState(false);
    const [SettingsActive, setSettingsActive] = useState(false);

    const dispatch = useDispatch();
    const player = useSelector(state => state.player)

    useEffect(() => {
        socketIO.on("InitPlayer", (data) => {
            data = JSON.parse(data)

            dispatch(setPlayer(data))
        })

        socketIO.emit("InitPlayer", JSON.stringify({"name": "Test" + Math.random() * 100}))
    }, [])

    const CloseAllMenu = () =>
    {
        setActive(false)
    }

    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="menu_content" onClick={e => e.stopPropagation()}>
                <h1>Добро пожаловать!</h1>
                <div className="creat_game" onClick={() => setCreatMenuActive(true)}>Играть</div>
                <div className="settings" onClick={() => setSettingsActive(true)}  >Настройки</div>
            </div>
            <CreatMenu active={creatMenuActive} setActive={setCreatMenuActive} closeAllMenu={CloseAllMenu}/>
            <Settings active={SettingsActive} setActive={setSettingsActive} closeAllMenu={CloseAllMenu}/>
        </div>
    );
};

export default MainMenu