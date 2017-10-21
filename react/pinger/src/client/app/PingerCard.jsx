import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

class PingerCard extends React.Component {

  constructor(props) {
    super(props);
    this.status = {
      PENDING: 0,
      UP: 1,
      DOWN: 2
    }
    this.state = {
      status : this.status.PENDING,
      color : 'grey',
      siteName : props.settings.siteName,
      siteUrl : props.settings.siteUrl,
      method : props.settings.method,
      payload : props.settings.payload,
      lastChecked : 'N/A'
    };
    this.ping = this.ping.bind(this);

    //check on load
    this.ping();
  }

  ping () {
    var self = this;
    // on load setting state here causes an error because the component isn't mounted yet
    if (this.state.color !== 'grey'){
      this.setState({status: this.status.PENDING, color: 'grey'});
    }
    //console.log(self.state);

  	this.getCORS(self.state.siteUrl, function(request){
      //failed on a named function callback that request wasn't defined, but
      //passing an anonymous function that calls the named function is fine
      //set the 'this' context outside of the callback and let the binding
      //handle the reference
      self.handleResponse(request);
    });
  }

  getCORS(url, success) {
    //console.log('sending request...');
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9
    xhr.open('GET', url);
    xhr.onloadend = success;
    xhr.send();
	}

  handleResponse(request) {
    console.log('handling response for ' + this.state.siteName)
    console.log(request);
    var response = request.currentTarget || request.target.responseText; //TODO: double check what you get with IE. I think the || is not what I want
    if (response.readyState==4 && response.status==200) {
      //success
      this.setState({status: this.status.UP, color: 'green'});
    } else {
      //failure
      this.setState({status: this.status.DOWN, color: 'red'});
    }
    this.setState({lastChecked: new Date().toLocaleString()})
  }

  render() {
    return (
      <div>
        <Card style={{width: '33%'}}>
          <CardTitle
            title={this.state.siteName}
            subtitle={this.state.siteUrl}
          />
          <CardText>
            <div className="cardtext">
              <svg height="20" width="20">
                <circle cx="10" cy="10" r="10" fill={this.state.color} />
                Sorry, your browser does not support inline SVG.
              </svg>
              <span>Last checked: {this.state.lastChecked}</span>
            </div>
          </CardText>
          <CardActions>
            <Button label="Settings" />
            <Button label="Check" onClick={this.ping} />
          </CardActions>
        </Card>
      </div>
    );
  }

}

export default PingerCard;
