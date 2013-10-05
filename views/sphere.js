"use strict";

var THREE = require('three'),
    ThreeObject = require('./threeObject.js'),
    Gaffa = require('gaffa');

function Sphere(){}
Sphere = Gaffa.createSpec(Sphere, ThreeObject);
Sphere.prototype.type = 'sphere';

Sphere.prototype.render = function(){
    var geometry = new THREE.SphereGeometry(this.radius.value, 30,30);
    var material = new THREE.MeshPhongMaterial({
            specular: 0x999999,
            map: this.map.value && THREE.ImageUtils.loadTexture(this.map.value),
            bumpMap: this.bumpMap.value && THREE.ImageUtils.loadTexture(this.bumpMap.value),
            bumpScale: 0.1,
            shininess: 0.1
        });

    this.renderedElement = new THREE.Mesh(geometry, material);

    this.__super__.render.apply(this, arguments);
};

Sphere.prototype.radius = new Gaffa.Property({
    update: function(viewModel, value){
        //todo, update sphere;
    },
    value: 2
});

Sphere.prototype.map = new Gaffa.Property(function(viewModel, value){
    //todo, update sphere;
});

Sphere.prototype.bumpMap = new Gaffa.Property(function(viewModel, value){
    //todo, update sphere;
});

module.exports = Sphere;