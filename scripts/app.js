var Gaffa = require('gaffa'),
    myApp = {},
    gaffa = new Gaffa(),
    views = gaffa.views.constructors = require('./views'),
    actions = gaffa.actions.constructors = require('./actions'),
    behaviours = gaffa.behaviours.constructors = require('./behaviours');

myApp.gaffa = window.gaffa = gaffa;

gaffa.model.set({
    cameraZ: 20,
    lightX: 5,
    lightY: 3,
    lightZ: 5
});

// Make the apps UI
function createAppView(){
    var appWrapper = new views.container(),
        scene = new views.scene(),
        planet = new views.sphere();

    scene.cameraPositionZ.binding = '[cameraZ]';

    scene.lightPositionX.binding = '[lightX]';
    scene.lightPositionY.binding = '[lightY]';
    scene.lightPositionZ.binding = '[lightZ]';


    scene.views.content.add([
        planet
    ]);

    appWrapper.views.content.add([
        scene
    ]);

    return appWrapper;
}


// You can create views before window.load as long as they are not added to gaffa.
var appView = createAppView();

// Add the views on load.
// This inserts them into the DOM.
window.addEventListener('load', function(){
    gaffa.views.add(appView);
});