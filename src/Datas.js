export const atlasLayer = {
    source: "precomputed://https://s3.amazonaws.com/zbrain/atlas_owen",
    name: "zbrain_atlas",
    type: "segmentation",
    objectAlpha: 0.94,
    segments: [1,2,3,4,5,10],
};


const defaultPose = {
  pose: {
    position: {
      voxelSize: [798, 798, 2000],
      voxelCoordinates: [585, 321, 71],
    },
    zoomFactor: 1490,
  }
}


export const fullRequest = {
    layers: [atlasLayer],
    navigation: defaultPose,
    layout: "4panel",

    showDefaultAnnotations :false,
    perspectiveOrientation :[ 0.6953108310699463,-0.3531639873981476,0.2847987711429596,-0.5574116110801697],
    perspectiveZoom :11789,
};
