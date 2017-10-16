import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

class PingerCard extends React.Component {

  statics: {
    PENDING: 0,
    UP: 1,
    DOWN: 2
  }

  constructor(props) {
    super(props);
    this.state = {
      status : this.PENDING,
      color : 'grey',
      siteName : props.siteName,
      siteUrl : props.siteUrl,
      method : props.method,
      paylaod : null,
      lastChecked : 'N/A'
    };
    this.ping = this.ping.bind(this);

    //check on load
    this.ping();
  }

  ping () {
    var self = this;
  	this.getCORS('https://coordinates.hugthecenterline.com', function(request){
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
    xhr.onload = success;
    xhr.send();
    return xhr;
	}

  handleResponse(request) {
    //console.log('handling response')
    var response = request.currentTarget || request.target.responseText; //TODO: double check what you get with IE. I think the || is not what I want
    if (response.readyState==4 && response.status==200) {
      //success
      this.setState({status: this.UP});
      this.setState({color: 'green'});
    } else {
      //failure
      this.setState({status: this.DOWN});
      this.setState({color: 'red'});
    }
    this.setState({lastChecked: new Date().toLocaleString()})
  }

  render() {
    return (
      <div>
        <Card style={{width: '33%'}}>
          <CardTitle
            title="Headed Out"
            subtitle="https://coordinates.hugthecenterline.com"
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
