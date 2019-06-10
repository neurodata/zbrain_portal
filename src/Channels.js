import React from 'react';
import ReactDOM from 'react-dom';

import RequestJson from './RequestJson'; 
import { func } from 'prop-types';

class Channels extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      sourcePrefix:   "precomputed://https://s3.amazonaws.com/zbrain/ZBrain/", 
      sourceFile:     "source_short.csv", 
      
      requestUrlPrefix:  "https://viz.neurodata.io", 
      requestJson: new RequestJson(), 

      // atlas layer is the base layer for all layers 
      baseLayer: {
        source: "precomputed://https://s3.amazonaws.com/zbrain/atlas_owen",
        name: "zbrain_atlas",
        type: "segmentation", 
        objectAlpha: 0.94, 
        segments: [], 
      }, 

      curLayer: {}, 
    }; 

    this.init(); 
    
    this.handleSelectChannel = this.handleSelectChannel.bind(this); 
    this.handleSelectSegment = this.handleSelectSegment.bind(this);
    
    this.handleSubmitChannel = this.handleSubmitChannel.bind(this);
    this.handleSubmitSegment = this.handleSubmitSegment.bind(this); 
  }

  handleSelectChannel(event) {
    const value = event.target.value;
    this.state.curLayer = {
      name: value, 
      source: this.state.sourcePrefix + value, 
      type: "image", 
    };
  }

  handleSelectSegment(event) {
    const value = event.target.value;
    this.state.baseLayer.segments.push(value);
  }

  handleSubmitChannel(event) {
    this.state.requestJson.layers.push(this.state.curLayer); 
    var jsonText = JSON.stringify(this.state.requestJson);
    jsonText = encodeURI(jsonText);
    var requestUrl = this.state.requestUrlPrefix + "/#!" + jsonText; 
    
    const element = (
      <iframe src={requestUrl} width="100%" height="100%">
        NeuroGlancer
      </iframe>
    );

    ReactDOM.render(element, document.getElementById('glancer'));

    event.preventDefault();
  }

  handleSubmitSegment(event) {
    this.state.baseLayer.segments.push(); 
    this.state.requestJson.layers[0] = this.state.baseLayer; 

    var jsonText = JSON.stringify(this.state.requestJson);
    jsonText = encodeURI(jsonText);
    var requestUrl = this.state.requestUrlPrefix + "/#!" + jsonText; 
    
    const element = (
      <iframe src={requestUrl} width="100%" height="100%">
        NeuroGlancer
      </iframe>
    );

    ReactDOM.render(element, document.getElementById('glancer'));

    event.preventDefault();
  }



  init() {
        // init all source names from reading a local csv file 
        var text = readFile(this.state.sourceFile);
        var names = text.split("\n");
        this.state.sources = names; 

        this.state.requestJson.addLayer(this.state.baseLayer); 
      
        var jsonText = JSON.stringify(this.state.requestJson);
        console.log(jsonText);
        jsonText = encodeURI(jsonText);
        var requestUrl = this.state.requestUrlPrefix + "/#!" + jsonText; 
        console.log(requestUrl);
    
        const element = (
          <iframe src={requestUrl} width="100%" height="100%">
            NeuroGlancer
          </iframe>
        );
    
        ReactDOM.render(element, document.getElementById('glancer'));
  
  }


  getSourceOptions(){
    return (
      this.state.sources.map((item) => <option value={item}> {item} </option>)
    );
  }

  getSegmentOptions() {
    const segments = readFile('segments.csv').split('\n');
    return (
      segments.map((value, index) => <option value={index}> {value} </option> )
    );
  }

  render() {
    
    return (
      <div> 
      <form onSubmit={this.handleSubmitChannel}>
        
        <label> Select channel 
          <select name="source" value={this.state.value} onChange={this.handleSelectChannel} >
            {this.getSourceOptions()}
          </select>
        </label>

        <input type="submit" value="ADD LAYER" />
      </form>
    
      <form onSubmit={this.handleSubmitSegment}>
          <label> SELECT SEGMENT
            <select name="source" value={this.state.value} onChange={this.handleSelectSegment} >
              {this.getSegmentOptions()} 
              {/* <option value="1">  1: Midbrain: Tectum  </option>
              <option value="2">  2: Midbrain: Torus Longitudinalis  </option>
              <option value="3">  3: Midbrain: Torus Semicircularis  </option> */}
            </select>
          </label>
      <input type="submit" value="ADD SEGMENT" />
      </form> 
      </div> 
    );
  }





}


/* Utitlity */ 

// TODO: make this method into the class 
function readFile(file) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      var allText = xmlhttp.responseText;          
    }
  };
  xmlhttp.open("GET", file, false);
  xmlhttp.send();
  return xmlhttp.responseText;
}


export default Channels; 

