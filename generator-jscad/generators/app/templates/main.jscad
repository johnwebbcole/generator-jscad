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
    name: 'show',
    type: 'choice',
    values: ['unitCube', 'unitAxis', '<%= nameslug %>'],
    captions: ['unit Cube', 'unit Axis', '<%= nameslug %>'],
    initial: '<%= nameslug %>',
    caption: 'Show:'
  }];
}


function main(params) {
  util.init(CSG);
  echo('params', JSON.stringify(params));

  var unitCube = CSG.cube({
    center: [0, 0, 0],
    radius: [0.5, 0.5, 100]
  }).setColor(1, 0, 0);

  var unitAxis = unitCube.union([unitCube.rotateY(90).setColor(0, 1, 0), unitCube.rotateX(90).setColor(0, 0, 1)]);

  var show = {
    unitCube: function () {
      return unitCube;
    },
    unitAxis: function () {
      return unitAxis;
    },
    <%= nameslug %>: function () {
      return <%= nameslug %>.Create('Sample', {});
    }
  };

  return show[params.show]();
}