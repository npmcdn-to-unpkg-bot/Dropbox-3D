function init(){function e(n){n.alpha&&(controls=new THREE.DeviceOrientationControls(camera,!0),controls.connect(),controls.update(),element.addEventListener("click",fullscreen,!1),window.removeEventListener("deviceorientation",e,!0))}renderer=new THREE.WebGLRenderer,element=renderer.domElement,container=document.getElementById("example"),container.appendChild(element),effect=new THREE.StereoEffect(renderer),scene=new THREE.Scene,camera=new THREE.PerspectiveCamera(90,1,.001,700),camera.position.set(0,10,0),scene.add(camera),controls=new THREE.OrbitControls(camera,element),controls.rotateUp(Math.PI/4),controls.target.set(camera.position.x+.1,camera.position.y,camera.position.z),controls.noZoom=!0,controls.noPan=!0,window.addEventListener("deviceorientation",e,!0);var n=new THREE.HemisphereLight(7829367,0,.6);scene.add(n);var t=THREE.ImageUtils.loadTexture("images/textures/patterns/checker.png");t.wrapS=THREE.RepeatWrapping,t.wrapT=THREE.RepeatWrapping,t.repeat=new THREE.Vector2(50,50),t.anisotropy=renderer.getMaxAnisotropy();var r=new THREE.MeshPhongMaterial({color:16777215,specular:16777215,shininess:20,shading:THREE.FlatShading,map:t}),a=new THREE.PlaneGeometry(1e3,1e3),o=new THREE.Mesh(a,r);o.rotation.x=-Math.PI/2,scene.add(o),window.addEventListener("resize",resize,!1),setTimeout(resize,1)}function resize(){var e=container.offsetWidth,n=container.offsetHeight;camera.aspect=e/n,camera.updateProjectionMatrix(),renderer.setSize(e,n),effect.setSize(e,n)}function update(e){resize(),camera.updateProjectionMatrix(),controls.update(e)}function render(e){renderer.render(scene,camera)}function animate(e){requestAnimationFrame(animate),update(clock.getDelta()),render(clock.getDelta())}function fullscreen(){container.requestFullscreen?container.requestFullscreen():container.msRequestFullscreen?container.msRequestFullscreen():container.mozRequestFullScreen?container.mozRequestFullScreen():container.webkitRequestFullscreen&&container.webkitRequestFullscreen()}var camera,scene,renderer,effect,controls,element,container,clock=new THREE.Clock;init(),animate();