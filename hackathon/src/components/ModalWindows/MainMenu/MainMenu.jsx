import React from "react";
import { useState } from "react";
import "./MainMenu.css";
import CreatMenu from "../CreatMenu/CreatMenu";
import Settings from "../Settings/Settings";


const MainMenu = ({active, setActive}) => {
    const [creatMenuActive, setCreatMenuActive] = useState(false);
    const [SettingsActive, setSettingsActive] = useState(false);
    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="menu_content" onClick={e => e.stopPropagation()}>
                <h1>Добро пожаловать!</h1>
                <div className="creat_game" onClick={() => setCreatMenuActive(true)}>Создать игру</div>
                <div className="settings" onClick={() => setCreatMenuActive(true)}  >Настройки</div>
            </div>
            <CreatMenu active={creatMenuActive} setActive={setCreatMenuActive}/>
            <Settings active={SettingsActive} setActive={setSettingsActive}/>
        </div>
    );
};

export default MainMenu