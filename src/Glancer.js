import React from 'react';
import ReactDOM from 'react-dom';
import Frame from 'react-frame-component';

class Glancer extends React.Component {
  constructor(props) {
    super(props);

    fetch(this.props.curUrl)
    .then(function (repsponse) {
        console.log("Fetch the data");
        console.log(repsponse.body);
    });

  }

  componentDidMount() {
  }

  render() {
    return(
      <Frame>
      </Frame>
    );
  }
}

export default Glancer;
