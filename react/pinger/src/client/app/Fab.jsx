import React from 'react';
import {Button} from 'react-toolbox/lib/button';

class Fab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.checkSite = this.checkSite.bind(this);
  }

  checkSite () {
  }

  render() {
    return (
      <div>
        <Button id='fab' icon='add' floating accent />
      </div>
    );
  }

}

export default Fab;
