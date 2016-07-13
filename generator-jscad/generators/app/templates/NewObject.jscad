/* globals <%= nameslug %> */
/* exported <%= nameslug %> */
<%= nameslug %> = {
  UnitCube: function () {
    return CSG.cube({
      center: [0, 0, 0],
      radius: [1, 1, 1]
    });
  },

  Sample: function () {
    var box1 = Parts.Cube([10, 10, 10])
      .fillet(1, 'z+')
      .color('orange');

    var box2 = Parts.Cube([5, 5, 5])
      .snap(box1, 'z', 'outside-')
      .align(box1, 'xy');

    var cyl1 = Parts.Cylinder(5, 10)
      .chamfer(2, 'z+')
      .rotateX(90)
      .snap(box2, 'y', 'outside+')
      .align(box2, 'xz')
      .color('green');
    return box1.union([box2.fillet(-1, 'z-').color('blue'), cyl1]);
  }

};
