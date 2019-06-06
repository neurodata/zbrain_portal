import React from 'react';
import ReactDOM from 'react-dom';
import AtlasJson from './AtlasJson';

class AtlasForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      source:   "precomputed://https://s3.amazonaws.com/zbrain/atlas_owen", 
      requestPrefix:  "https://zbrain.viz.neurodata.io/", 

      atlasJson: new AtlasJson(), 
    }
    
    // init source list 
    this.initSources();
    
    // handle form changed 
    this.handleSrcChange = this.handleSrcChange.bind(this);
    
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
    this.state.atlasJson.addSeg(value);
  }


  handleSubmit(event) {

    var jsonText = JSON.stringify(this.state.atlasJson);
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



  render() {
    
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label> Atlas </label>  
        
        <label> SELECT SIGMENT 
          <select name="source" value={this.state.value} onChange={this.handleSrcChange} >
            <option value="1"> foo </option>
            <option value="2"> bar </option>
            <option value="3"> zoo </option>
          </select>
        </label>

        <input type="submit" value="SUBMIT" />
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


export default AtlasForm; 

