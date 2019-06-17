import React from 'react';


import { atlasLayer, fullRequest } from './Datas';

import Checkbox from './Checkbox';
import Channel from './Channel';
import Layer from './Layer';
import Segment from './Segment';

import Glancer from './Glancer';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showAtlas: true,
      showRef: true,

      curChannel: "",
      layers: [],

      curSegment: 0,
      segments: [],

      curRequest: fullRequest,
      curUrl: "https://viz.neurodata.io/",
    };


    this.handleShowAtlas = this.handleShowAtlas.bind(this);
    this.handleShowRef = this.handleShowRef.bind(this);

    this.handleChannelChange = this.handleChannelChange.bind(this);

    this.handleSegmentChange = this.handleSegmentChange.bind(this);


  }



  // Checkbox
  handleShowAtlas(value) {
    this.setState({showAtlas: value});

  }

  handleShowRef(value) {
    this.setState({showRef: value});
  }

  // Select Channel and add to iframe
  handleChannelChange(value) {
    this.setState({curChannel: value});
    const list = this.state.layers;
    list.push(value);
    this.setState({layers: list});
  }

  // select segment
  handleSegmentChange(value) {
    this.setState({curSegment: value});
    const list = this.state.segments;
    list.push(value);
    this.setState({segments: list});
    console.log(this.state.segments);
  }



  render() {

    return(
      <div className='flex-container'>
        <div id='sidebar' className='flex-item'>

          <Checkbox
          showAtlas={this.state.showAtlas}
          showRef={this.state.showRef}
          onHandleShowAtlas={this.handleShowAtlas}
          onHandleShowRef={this.handleShowRef} />

          <Channel
          curChannel={this.state.curChannel}
          handleChannelChange={this.handleChannelChange}
          />

          <Layer
          layers={this.state.layers}
          />

          <Segment
          curSegment={this.state.curSegment}
          handleSegmentChange={this.handleSegmentChange}
          />

        </div>

        <div id='glancer' className='flex-item' ref='glancer'>
          <Glancer
          />
        </div>

      </div>
    );
  }
}


export default App;
