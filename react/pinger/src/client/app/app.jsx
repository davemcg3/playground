import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {Button} from 'react-toolbox/lib/button';
import PingerCard from './PingerCard.jsx'
import Fab from './Fab.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    var nextId = 0;
    this.state = {
      cards: [
        {
          siteName: 'Headed Out',
          siteUrl: 'https://coordinates.hugthecenterline.com',
          method: 'get',
          payload: null,
          id: nextId++
        },
        {
          siteName: '404 from real server failed',
          siteUrl: 'https://coordinates.hugthecenterline.com/booga',
          method: 'get',
          payload: null,
          id: nextId++
        },
        {
          siteName: '404 from no domain',
          siteUrl: 'https://thereisnourlhere.com',
          method: 'get',
          payload: null,
          id: nextId++
        },
        {
          siteName: 'CORS blocked',
          siteUrl: 'https://www.google.com',
          method: 'get',
          payload: null,
          id: nextId++
        }
      ],
      nextId: nextId,
      cryptoCards: [
        {
          name: 'BTC',
          id: nextId++
        }
      ]
    }
    this.addCard = this.addCard.bind(this);
  }

  addCard(settings) {
    this.setState({cards: this.state.cards.concat([
    {
      siteName: settings.siteName,
      siteUrl: settings.siteUrl,
      method: settings.method,
      payload: settings.payload,
      id: this.state.nextId++
    }
    ])});
  }

  render() {
    return(
      <div>
        <AppBar title='Pinger' >
          <Navigation type='horizontal'>
          </Navigation>
        </AppBar>

        <p style={{display: "none"}}>Add a site to ping by clicking the button in the bottom right.</p>
        <Fab callback={this.addCard} />
        <div style={{width: "100%"}}>
          {
            this.state.cards.map((item, i) => (
              <PingerCard key={i} settings={item} />
            ))
            this.state.cryptoCards.map((item, i) => (
              <CryptoCard key={i} settings={item} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
