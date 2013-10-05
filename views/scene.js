"use strict";

var THREE = require('three'),
    Gaffa = require('gaffa'),
    ZeroProperty = require('../zeroProperty');

function Animator(scene, camera){
    var animator = this,
        steps = this.steps = [];

    this.scene = scene;
    this.camera = camera;

    this.renderer = new THREE.WebGLRenderer();

    var renderLoop = function(){
        animator.render();
        requestAnimationFrame(renderLoop);
    };
    renderLoop();
}
Animator.prototype.addStep = function(callback){
    this.steps.push(callback);
};
Animator.prototype.render = function(){
    for(var i = 0; i < this.steps.length; i++){
        this.steps[i]();
    }
    this.renderer.render(this.scene, this.camera);
};

function Scene(){}
Scene = Gaffa.createSpec(Scene, Gaffa.ContainerView);
Scene.prototype.type = 'scene';

Scene.prototype.render = function(){
    var threeScene = new THREE.Scene(),
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
        animator = new Animator(threeScene, camera),
        renderedElement = animator.renderer.domElement;

    animator.renderer.setSize(window.innerWidth, window.innerHeight);

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5,3,5);
    directionalLight.lookAt(0,0,0);
    directionalLight.castShadow = true;
    directionalLight.shadowCameraVisible = true;
    threeScene.add(directionalLight);

    this.renderedElement = renderedElement;
    this.camera = camera;
    this.light = directionalLight;

    this.views.content.element = threeScene;

    this.__super__.render.apply(this, arguments);
};

Scene.prototype.cameraPositionX = new ZeroProperty(function(viewModel, value){
    viewModel.camera.position.x = value;
});
Scene.prototype.cameraPositionY = new ZeroProperty(function(viewModel, value){
    viewModel.camera.position.y = value;
});
Scene.prototype.cameraPositionZ = new ZeroProperty(function(viewModel, value){
    viewModel.camera.position.z = value;
});

Scene.prototype.lightPositionX = new ZeroProperty(function(viewModel, value){
    viewModel.light.position.x = value;
});
Scene.prototype.lightPositionY = new ZeroProperty(function(viewModel, value){
    viewModel.light.position.y = value;
});
Scene.prototype.lightPositionZ = new ZeroProperty(function(viewModel, value){
    viewModel.light.position.z = value;
});

module.exports = Scene;