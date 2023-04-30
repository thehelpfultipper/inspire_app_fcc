import { Fragment } from 'react';
import BackgroundImage from './Components/BackgroundImage';
import Card from './Components/Card/Card';

import './App.css';

function App() {
  return (
    <Fragment>
      <BackgroundImage>
        <Card />
      </BackgroundImage>
    </Fragment>
  );
}

export default App;
