"use strict";

var THREE = require('three'),
    ThreeObject = require('./threeObject.js'),
    Gaffa = require('gaffa');

function Sphere(){}
Sphere = Gaffa.createSpec(Sphere, ThreeObject);
Sphere.prototype.type = 'sphere';

Sphere.prototype.render = function(){
    var geometry = new THREE.SphereGeometry(this.radius.value, 30,30);
    var material = new THREE.MeshBasicMaterial();

    this.renderedElement = new THREE.Mesh(geometry, material);
    this.material = material;
    this.geometry = geometry;

    ThreeObject.prototype.render.apply(this, arguments);
};

Sphere.prototype.radius = new Gaffa.Property({
    update: function(viewModel, value){
        var renderedElement = viewModel.renderedElement;
        if(value){
            renderedElement.scale.x = value;
            renderedElement.scale.y = value;
            renderedElement.scale.z = value;
        }
    },
    value: 1
});

module.exports = Sphere;