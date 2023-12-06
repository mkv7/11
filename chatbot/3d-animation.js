let scene, camera, renderer, cube;
let animationFrameId;

function stopAnimation() {
  cancelAnimationFrame(animationFrameId);
}


function init3D() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  
  renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('background').appendChild(renderer.domElement);

  // Add cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  animate();
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);

  // Rotate cube
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init3D();

