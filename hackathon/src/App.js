import './App.css';
import { useState } from 'react';
import MainMenu from './components/ModalWindows/MainMenu/MainMenu';
import PlayGround from './components/PlayGround/PlayGround';
import { connect } from 'react-redux';
import { getCount } from './store';

import { useSelector } from 'react-redux';

const App = (props) => {
  const [menuActive, setMenuActive] = useState(true);
  const grid = useSelector(state => state.grid);

  return (
    <div className="container">
      <MainMenu active={menuActive} setActive={setMenuActive} />
      <PlayGround gridSize={grid.count} className="playGround"/>
    </div>
  );
}


export default App;
