import React from 'react';

class Layer extends React.Component {
  constructor(props) {
    super(props);
  }

  showLayers(){
    const layers = this.props.layers;
    return (
      layers.map((item) => <p> {item} </p> )
    );
  }

  render() {
    return (
      <div>
        {this.showLayers()}
      </div>
    );
  }
}


export default Layer;
