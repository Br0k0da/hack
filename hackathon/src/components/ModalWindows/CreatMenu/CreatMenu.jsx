import React from "react";
import { useState } from "react";   
import "./CreatMenu.css";
import PlayerList from "../PlayerList/PlayerList";
import { plusCount, minusCount } from "../../../store/grid";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

const CreatMenu = ({active, setActive}) => {
    const dispatch = useDispatch()
    const grid = useSelector(state => state.grid);
    const [listMenuActive, setListMenuActive] = useState(false);
    const Plus = () => {
        if(grid.count < 40){
            dispatch(plusCount())
        }
      };
    const Minus = () => {
        if(grid.count > 4){
            dispatch(minusCount())
        }
      };  

    return (
        <div className={active ? "creatmenu active" : "creatmenu"} >
            <div className="creatMenu_content" onClick={e => e.stopPropagation()}>
                <div className="creatMenu_buttonsBlock1">
                    <div className="withPlayers" onClick={() => setListMenuActive(true)}>Играть с человеком</div>
                    <div className="withBot">Играть с компьютером</div>
                </div>
                <div className="size">Размеры поля</div>
                <p>{grid.count} x {grid.count} </p>
                <div className="creatMenu_buttonsBlock2">
                    <div className = "minus"onClick={Minus} >-</div>
                    <div className = "plus" onClick={Plus}>+</div>
                </div>
            </div>
            <PlayerList active={listMenuActive} setActive={setListMenuActive}/>
        </div>
    );
};

export default CreatMenu