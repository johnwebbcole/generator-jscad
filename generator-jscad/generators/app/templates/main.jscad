// title      : <%= nameslug %>
// author     : <%= author %>
// license    : ISC License
// file       : main.jscad

// include:js
// endinject
/* exported main, getParameterDefinitions */
/* globals <%= nameslug %> */


function getParameterDefinitions() {

  return [{
    name: 'resolution',
    type: 'choice',
    values: [0, 1, 2, 3, 4],
    captions: ['very low (6,16)', 'low (8,24)', 'normal (12,32)', 'high (24,64)', 'very high (48,128)'],
    initial: 2,
    caption: 'Resolution:'
  }];
}

function main(params) {
  // echo('params', JSON.stringify(params));

  var resolutions = [
    [6, 16],
    [8, 24],
    [12, 32],
    [24, 64],
    [48, 128]
  ];
  CSG.defaultResolution3D = resolutions[params.resolution][0];
  CSG.defaultResolution2D = resolutions[params.resolution][1];
  util.init(CSG);

  return <%= nameslug %>.Sample();
}
