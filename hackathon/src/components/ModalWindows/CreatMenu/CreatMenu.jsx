import React from "react";
import { useState } from "react";   
import "./CreatMenu.css";
import PlayerList from "../PlayerList/PlayerList";
import { plusCount, minusCount } from "../../../store/grid";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const CreatMenu = ({active, setActive, closeAllMenu}) => {

    const [listMenuActive, setListMenuActive] = useState(false);

    const CloseAllMenu = () =>
        {
            closeAllMenu()
            setActive(false)
        }

    return (
        <div className={active ? "creatmenu active" : "creatmenu"} >
            <div className="creatMenu_content" onClick={e => e.stopPropagation()}>
                <div className="creatMenu_buttonsBlock1">
                    <div className="withPlayers" onClick={() => setListMenuActive(true)}>Играть с человеком</div>
                    <div className="withBot" onClick={CloseAllMenu}>Играть с компьютером</div>
                </div>
            </div>
            <PlayerList active={listMenuActive} setActive={setListMenuActive} closeAllMenu={CloseAllMenu} />
        </div>
    );
};

export default CreatMenu