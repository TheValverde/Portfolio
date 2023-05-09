let scene, camera, renderer, particles;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.zIndex = '-1';

  particles = new THREE.Group();
  scene.add(particles);

  for (let i = 0; i < 1000; i++) {
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const particle = new THREE.Mesh(geometry, material);
    particle.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
    particle.velocity = new THREE.Vector3(Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01, Math.random() * 0.02 - 0.01);
    particles.add(particle);
  }

  window.addEventListener('resize', onWindowResize, false);
  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particles.children.forEach((particle) => {
    particle.position.add(particle.velocity);
    if (particle.position.x < -50 || particle.position.x > 50) particle.velocity.x = -particle.velocity.x;
    if (particle.position.y < -50 || particle.position.y > 50) particle.velocity.y = -particle.velocity.y;
    if (particle.position.z < -50 || particle.position.z > 50) particle.velocity.z = -particle.velocity.z;
  });

  renderer.render(scene, camera);
}

init();
