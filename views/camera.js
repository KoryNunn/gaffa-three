"use strict";

var THREE = require('three'),
    ThreeObject = require('./threeObject.js'),
    Gaffa = require('gaffa');

function Camera(){}
Camera = Gaffa.createSpec(Camera, Gaffa.ThreeObject);
Camera.prototype.type = 'threeObject';

Camera.prototype.insertFunction = function(scene, renderedElement){
    //nothin'
};

module.exports = Camera;