import React from 'react';
import ReactDOM from 'react-dom';
import GlancerJson from './GlancerJson';

/* ZbrainForm Class */ 
class ZbrainForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      sourcePrefix:   "precomputed://https://s3.amazonaws.com/zbrain/ZBrain/", 
      sourceFile:     "source_short.csv", 
      requestPrefix:  "https://viz.neurodata.io", 

      glancerJson: new GlancerJson(), 
    }
    
    // init source list 
    this.initSources();
    
    // handle form changed 
    this.handleSrcChange = this.handleSrcChange.bind(this);
    this.handleCrdChange = this.handleCrdChange.bind(this);
    
    // submit json
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initSources() {
        // init all source names from reading a local csv file 
        var text = readFile(this.state.sourceFile);
        var names = text.split("\n");
        this.state.sources = names; 

  }

  // ############### Handlers #################### 

  handleSrcChange(event) {
    const value = event.target.value;
    this.state.glancerJson.setName(value);
    this.state.glancerJson.setSource(this.state.sourcePrefix + value); 
  }

  handleCrdChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'x') {
      this.state.glancerJson.setCoordinate(value, 0);
    }
    else if (name === 'y') {
      this.state.glancerJson.setCoordinate(value, 1);
    }
    else if (name === 'z') {
      this.state.glancerJson.setCoordinate(value, 2);
    }
    event.preventDefault();
  }

  handleSubmit(event) {

    var jsonText = JSON.stringify(this.state.glancerJson);
    console.log(jsonText);
    jsonText = encodeURI(jsonText);
    var requestUrl = this.state.requestPrefix + "/#!" + jsonText; 
    console.log(requestUrl);

    const element = (
      <iframe src={requestUrl} width="100%" height="100%">
        NeuroGlancer
      </iframe>
    );

    ReactDOM.render(element, document.getElementById('glancer'));

    event.preventDefault();
  }

  getSourceOptions(){
    return (
      this.state.sources.map((item) => <option value={item}> {item} </option>)
    );
  }


  render() {
    
    return (
      <form onSubmit={this.handleSubmit}>
        
        <label> Select channel 
          <select name="source" value={this.state.value} onChange={this.handleSrcChange} >
            {this.getSourceOptions()}
          </select>
        </label>

        <label> Set coordinates 
          <input name="x" type="number" onChange={this.handleCrdChange} onFocus={this.handleCrdChange} />
          <input name="y" type="number" onChange={this.handleCrdChange} onFocus={this.handleCrdChange} />
          <input name="z" type="number" onChange={this.handleCrdChange} onFocus={this.handleCrdChange} /> 
        </label> 

        <input type="submit" value="Submit" />
      </form>
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



export default ZbrainForm; 

