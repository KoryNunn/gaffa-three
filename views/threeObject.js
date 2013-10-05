"use strict";

var THREE = require('three'),
    Gaffa = require('gaffa'),
    ZeroProperty = require('../zeroProperty');

function ThreeObject(){}
ThreeObject = Gaffa.createSpec(ThreeObject, Gaffa.ContainerView);
ThreeObject.prototype.type = 'threeObject';

ThreeObject.prototype.render = function(){
    this.renderedElement = this.renderedElement || new THREE.Object3D();

    this.views.content.element = this.views.content.element || this.renderedElement;

    Gaffa.ContainerView.prototype.render.apply(this, arguments);
};

ThreeObject.prototype.visible = null;
ThreeObject.prototype.title = null;
ThreeObject.prototype.enabled = null;
ThreeObject.prototype.classes = null;

ThreeObject.prototype.insertFunction = function(scene, renderedElement){
    scene.add(renderedElement);
};
ThreeObject.prototype.positionX = new ZeroProperty(function(viewModel, value){
    viewModel.renderedElement.position.x = value;
});
ThreeObject.prototype.positionY = new ZeroProperty(function(viewModel, value){
    viewModel.renderedElement.position.y = value;
});
ThreeObject.prototype.positionZ = new ZeroProperty(function(viewModel, value){
    viewModel.renderedElement.position.z = value;
});

module.exports = ThreeObject;