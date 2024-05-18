import React from "react";
import { useState } from "react";
import "./RoomSettings.css";
import { plusCount, minusCount } from "../../../store/grid";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


const RoomSettings = ({ active, setActive, closeAllMenu }) => {
    

    const dispatch = useDispatch()
    const Plus = () => {
        if (grid.count < 16) {
            dispatch(plusCount())
        }
    };
    const Minus = () => {
        if (grid.count > 4) {
            dispatch(minusCount())
        }
    };
    const grid = useSelector(state => state.grid);

    const CloseAllMenu = () =>
        {
            closeAllMenu()
            setActive(false)
        }

    return (
        <div className={active ? "roomSetings active" : "roomSetings"} onClick={() => setActive(false)}>
            <div className="roomSetings_content" onClick={e => e.stopPropagation()}>
                <div className="size">Количество точек</div>
                <h1>{grid.count} </h1>
                <div className="roomSetings_buttonsBlock2">
                    <div className="minus" onClick={Minus} >-</div>
                    <div className="plus" onClick={Plus}>+</div>
                </div> 
                <div className="creatRoombuttom" onClick={CloseAllMenu}>Начать Игру</div>
            </div>
        </div>
    );
};

export default RoomSettings

