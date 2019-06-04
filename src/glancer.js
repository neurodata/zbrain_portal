var Iframe = React.createClass({     
  render: function() {
    return(         
      <div>          
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
      </div>
    )
  }
});

ReactDOM.render(
  <Iframe src="https://viz.neurodata.io/#!%7B%22layers%22:%5B%7B%22source%22:%22precomputed://https://s3.amazonaws.com/zbrain/ZBrain/Anti_5HT_MeanOf40%22%2C%22type%22:%22image%22%2C%22name%22:%22Anti_5HT_MeanOf40%22%7D%5D%2C%22navigation%22:%7B%22pose%22:%7B%22position%22:%7B%22voxelSize%22:%5B798%2C798%2C2000%5D%2C%22voxelCoordinates%22:%5B703%2C310.5%2C69%5D%7D%7D%2C%22zoomFactor%22:798%7D%2C%22layout%22:%224panel%22%7D" height="500" width="500"/>,
  document.getElementById('glancer')
);


