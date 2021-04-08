//https://stackoverflow.com/questions/44104516/a-frame-mobile-phone-how-touch-move-up-or-down-by-finger-gesture
//https://stackoverflow.com/questions/62591178/how-do-i-animate-a-camera-movement-in-a-frame-using-javascript

window.addEventListener('touchmove', onTouchMove2);
function onTouchMove2(evt) {
    // window.location.href = 'http://google.com';
    // evt.stopPropagation();

    // init variables
    var direction;
    var camera = document.querySelector("a-camera");
    var sceneEl = document.querySelector('a-scene');
    // var canvas = this.el.sceneEl.canvas;
    var canvas = sceneEl.canvas;
    var deltaY;
    // var yawObject = this.yawObject;
    var yawObject = camera.components["look-controls"].yawObject;
    var pitchObject = camera.components["look-controls"].pitchObject;
    var touchStarted = camera.components["look-controls"].touchStarted;
    var data = camera.components["look-controls"].data;
    var touchStart = camera.components["look-controls"].touchStart;

    if (!touchStarted || !data.touchEnabled) { return; }

    // move vertically also
    deltaX = 2 * Math.PI * (evt.touches[0].pageY - touchStart.y) / canvas.clientHeight;
    direction = data.reverseTouchDrag ? 1 : -1;
    pitchObject.rotation.x -= deltaX * 0.5 * direction;
}
