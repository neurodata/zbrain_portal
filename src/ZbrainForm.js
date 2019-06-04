import React from 'react';


/* Utitlity */ 

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


/* ZbrainForm Class */ 
class ZbrainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      position_x: 0,
      position_y: 0,
      position_z: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value});


/*
    this.setState({
      formControls: {
        [name]: value
      }
    }); 
*/
    // this.setState({value: event.target.value});

  }

  handleSubmit(event) {

    //var text = JSON.stringify(this.state);
    console.log(this.state);
//    console.log(JSON.stringify(this.state));
/*
    // selected value is this.state.value 
    var url = 'https://viz.neurodata.io/';    
    var jsonData = readFile('sample.json');
    var text = JSON.stringify(jsonData); 
    text = encodeURIComponent(text).replace("\"", """);
    console.log(encodeURIComponent(text));
 
*/
/*
    fetch(
      url+text, {
        method: 'GET', // or 'PUT'
        body: JSON.stringify(jsonData), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));

*/
//    window.open(url + "#!" + text);



    /*
    fetch(url,

      fetch(this.state.value)
      .then(response => response.json())
      .then((jsonData) => {
        console.log(jsonData)
      })
      .catch((error) => {
        console.error(error)
      });

      alert('Select Channel is ' + this.state.value);
      */
    event.preventDefault();
  }

  render() {

    // init all options 
    var text = readFile('source_list.csv');
    var options = text.split("\n");
    this.state.options = options.map((item) => <option value={item}> {item} </option>); 

    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Source 
      <select name="source" value={this.state.source} onChange={this.handleChange}>
      {this.state.options}
      </select>
      </label>

      <label> 
      Position 
      <input name="position_x" type="number" value={this.state.position_x}
      onChange={this.handleChange} /> 
      <input name="position_y" type="number" value={this.state.position_y}
      onChange={this.handleChange} /> 
      <input name="position_z" type="number" value={this.state.position_z}
      onChange={this.handleChange} /> 
      </label> 


      <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZbrainForm; 

