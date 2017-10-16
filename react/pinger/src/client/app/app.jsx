import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {Button} from 'react-toolbox/lib/button';
import PingerCard from './PingerCard.jsx'
import Fab from './Fab.jsx'

class App extends React.Component {
  render() {
    return(
      <div>
        <AppBar title='Pinger' >
          <Navigation type='horizontal'>
          </Navigation>
        </AppBar>

        <p>Add a site to ping by clicking the button in the bottom right.</p>
        <Fab />

        <PingerCard />
      </div>
    );
  }
}

export default App;
