import React from 'react';
import { atlasLayer, fullRequest } from './Datas';

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


class Segment extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.props.handleSegmentChange(e.target.value);
  }


  showAllOptions() {
    const segments = readFile('segments.csv').split('\n');
    return (
      segments.map((value, index) => <option value={index}> {value} </option> )
    );
  }

  render() {
    return(
      <div>
      <form>
        <label> Select Segment
          <select name="segment" value={this.props.curSegment}
          onChange={this.handleChange}>
          {this.showAllOptions()}
          </select>
          </label>
          </form>
    </div>
    );
  }
}

export default Segment;
