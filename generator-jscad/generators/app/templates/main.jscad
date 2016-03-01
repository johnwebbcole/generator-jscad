// title      : <%= name %>
// author     : <%= author %>
// license    : ISC License
// file       : main.jscad

// include:js
// endinject
/* exported main, getParameterDefinitions */
/* globals <%= name %> */

function getParameterDefinitions() {
  return [{
    name: 'show',
    type: 'choice',
    values: ['unitCube', 'unitAxis', '<%= name %>'],
    captions: ['unit Cube', 'unit Axis', '<%= name %>'],
    initial: '<%= name %>',
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
    <%= name %>: function () {
      return <%= name %>.Create('Sample', {});
    }
  };

  return show[params.show]();
}