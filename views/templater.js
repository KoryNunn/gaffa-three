"use strict";

var THREE = require('three'),
    TemplaterProperty = require('gaffa/src/templaterProperty'),
    ThreeObject = require('./threeObject.js'),
    Gaffa = require('gaffa');

function Templater(){
    this.views.list = new Gaffa.ViewContainer(this.views.list);
}
Templater = Gaffa.createSpec(Templater, ThreeObject);
Templater.prototype.type = 'templater';

Templater.prototype.render = function(){
    this.renderedElement = new THREE.Object3D();

    this.views.list.element = this.renderedElement;

    this.__super__.render.apply(this, arguments);
};

Templater.prototype.list = new TemplaterProperty({
    viewsName: 'list'
});

module.exports = Templater;