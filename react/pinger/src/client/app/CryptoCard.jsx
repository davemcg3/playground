import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';
import Configurator from './Configurator.jsx'


class CryptoCard extends React.Component {

  constructor(props) {
    super(props);
    this.id = props.settings.id;
    this.state = {
      name : props.settings.name,
    };
    this.ping = this.ping.bind(this);
    this.handleConfiguratorClick = this.handleConfiguratorClick.bind(this);
    this.handleConfiguratorSave = this.handleConfiguratorSave.bind(this);

    //check on load
    this.ping();
  }

  // setStatus(status){
  //   this.setState({status: status, color: this.color[status], lastChecked: new Date().toLocaleString()});
  // }

  ping () {
    // on load setting state here causes an error because the component isn't mounted yet
    if (this.state.color !== 'grey'){
      this.setStatus(this.status.PENDING);
    }

    //set the 'this' context outside of the callback and let the binding
    //handle the reference
    var self = this;
  	this.getCORS(self.state.siteUrl, function(request){
      //failed on a named function callback that request wasn't defined, but
      //passing an anonymous function that calls the named function is fine
      self.handleResponse(request);
    });
  }

  getCORS(url, success) {
    //console.log('sending request...');
    var xhr = new XMLHttpRequest();
    if (!('withCredentials' in xhr)) xhr = new XDomainRequest(); // fix IE8/9 //untested by me because I don't have to support IE right now
    xhr.open('GET', url);
    xhr.onloadend = success;
    xhr.send();
	}

  handleResponse(request) {
    //console.log('handling response for ' + this.state.siteName)
    var response = request.currentTarget || request.target.responseText; //TODO: double check what you get with IE. I think the || is not what I want
    if (response.readyState==4) {
      if (response.status >= 200 && response.status <= 299){
        //success
        this.setStatus(this.status.UP);
      } else if (response.status >= 300 && response.status <= 499) {
        //server is up but you're hitting a bad page
        this.setStatus(this.status.BAD);
      } else {
        //500 or unreachable server, either through DNS or CORS issues
        this.setStatus(this.status.DOWN);
      }
    } else {
      //unknown failure
      this.setStatus(this.status.PENDING);
    }
  }

  handleConfiguratorClick () {
    this.configurator.loadOptions(this.omitValue(Object.assign({active:true}, this.state), null));
  }

  // omitKey(obj, omitKey) {
  //   return Object.keys(obj).reduce((result, key) => {
  //     if(key !== omitKey) {
  //        result[key] = obj[key];
  //     }
  //     return result;
  //   }, {});
  // }

  omitValue(obj, omitValue) {
    return Object.keys(obj).reduce((result, key) => {
      if(obj[key] !== omitValue) {
         result[key] = obj[key];
      }
      return result;
    }, {});
  }

  handleConfiguratorSave (settings) {
    this.setState(Object.assign(this.state, settings));
    this.ping();
  }

  render() {
    return (
      <div className="cardWrapper" style={{marginTop: "1rem", marginBottom: "1rem", marginRight: "1%", marginLeft: "1%", display: "inline-block", verticalAlign: "top"}}>
        <Card>
          <CardTitle
            title={this.state.name}
            subtitle={this.state.price}
          />
          <CardText>
            <div className="cardtext">
              <svg height="20" width="20" viewBox="0 0 20 20">
                //https://stackoverflow.com/a/36564885/5812364
                <defs>
                  <filter id={"glow-" + this.id} x="-150%" y="-150%" width="300%" height="300%">
                      <feFlood result="flood" floodColor={this.state.color} floodOpacity="1"></feFlood>
                      <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in"></feComposite>
                      <feMorphology in="mask" result="dilated" operator="dilate" radius="0.5"></feMorphology>
                      <feGaussianBlur in="dilated" result="blurred" stdDeviation="3"></feGaussianBlur>
                      <feComposite in="blurred" in2="SourceGraphic" operator="arithmetic" k2="1" k3="-1" result="nocombine"></feComposite>
                      <feMerge>
                          <feMergeNode in="nocombine"></feMergeNode>
                          <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                  </filter>
                </defs>

                <title>{this.altText[this.state.status]}</title>
                <circle cx="10" cy="10" r="5" fill={this.state.color} filter={"url(#glow-" + this.id + ")"} />
                Sorry, your browser does not support inline SVG.
              </svg>
              <span>Last checked: {this.state.lastChecked}</span>
            </div>
          </CardText>
          <CardActions>
            <Button label="Settings" onClick={this.handleConfiguratorClick} />
            <Button label="Check" onClick={this.ping} />
          </CardActions>
        </Card>
        <Configurator ref={(conf) => { this.configurator = conf; }} callback={this.handleConfiguratorSave} />
      </div>
    );
  }

}

export default PingerCard;
