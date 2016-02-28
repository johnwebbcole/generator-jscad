<%= name %> = {
  UnitCube: function (options) {
    return CSG.cube({
      center: [0, 0, 0],
      radius: [1, 1, 1]
    });
  },


  Create: function (part, options) {
    // return this.UnitCube();
    return this[part](options);
  }
};