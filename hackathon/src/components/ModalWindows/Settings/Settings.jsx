import React from "react";
import "./Settings.css";


const Settings = ({ active, setActive }) => {


    return (
        <div className={active ? "settingsMenu active" : "settingsMenu"} >
            <div className="settingsMenu_content" onClick={e => e.stopPropagation()}>
                <h1>Настройки</h1>
            </div>
        </div>
    );
};

export default Settings