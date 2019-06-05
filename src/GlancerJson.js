
/*
  Json object for generate request for neuroglancer 
*/ 

class GlancerJson {

  constructor() {

    this.layers = [{
      source: "",
      name: "",
      type: "image"
    }];
    
    this.navigation = {
      pose: {
        position: { 
          voxelSize: [100, 100, 100],
          voxelCoordinates: [100, 100, 100]
        },
        zoomFactor: 100 
      }
    };

    this.layout = "4panel"; 
  }


  // Setter and Getters for layers 
  setSource(newSource) {
    this.layers[0].source = newSource; 
  }
  
  getSource() { return this.layers[0].source; }

  setName(newName) {
    this.layers[0].name = newName; 
  }

  getName() {return this.layers[0].name; }

  setType(newType) {
    this.layers[0].type = newType; 
  }

  getType() {return this.layers[0].type; }


  // Setters and getters for navigation 

  setSize(newSize) {
    this.navigation.pose.position.voxelSize = newSize; 
  }

  getSize() {return this.navigation.pose.position.voxelSize; }

  setCoordinates(newCoordinates) {
    this.navigation.pose.position.voxelCoordinates = newCoordinates;
  }

  setCoordinate(newValue, axis) {
    this.navigation.pose.position.voxelCoordinates[axis] = newValue;
  }
  
  getCoordinates() {
    return this.navigation.pose.position.voxelCoordinates;
  }

  setZoomFactor(newFactor) {
    this.navigation.pose.zoomFactor = newFactor;
  }

  getZoomFactor() {
    return this.navigation.pose.zoomFactor; 
  }

  // setter and getter for layout 
  setLayout(newLayout) {
    this.layout = newLayout;
  }
 
  getLayout() {
    return this.layout; 
  }

}

export default GlancerJson; 
