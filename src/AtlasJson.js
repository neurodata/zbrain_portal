
class AtlasJson {

    constructor() {
      this.layers = [{
        source: "precomputed://https://s3.amazonaws.com/zbrain/atlas_owen",
        name: "zbrain_atlas",
        type: "segmentation", 
        objectAlpha: 0.94, 
        segments: [], 
      }];
      
      this.navigation = {
        pose: {
          position: { 
            voxelSize: [798, 798, 2000],
            voxelCoordinates: [585, 321, 71]
          },
          zoomFactor: 1490,  
        }
      };

      this.showDefaultAnnotations = false; 

      this.perspectiveOrientation = [ 0.6953108310699463,-0.3531639873981476,0.2847987711429596,-0.5574116110801697]; 

    this.perspectiveZoom = 11789; 

    this.showSlices = false; 

    this.jsonStateServer = "https://json.neurodata.io/v1"; 

    this.selectedLayer = {layer: "zbrain_atlas"};  

    this.layout = "4panel"; 

    }


    // Add segmentation 
    // TODO: make sure no repicate indexes 
    addSeg(newSeg) {
        this.layers[0].segments.push(newSeg);
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
  
  export default AtlasJson; 
  