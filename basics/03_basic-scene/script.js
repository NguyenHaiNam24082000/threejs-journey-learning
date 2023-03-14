// Scene
const scene = new THREE.Scene();

// Red cube
const geomertry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const mesh = new THREE.Mesh(geomertry, material);
scene.add(mesh);

//Sizes
const sizes = {
    width: 800,
    height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera);


// Renderer
const canvas = document.querySelector('.webgl');
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);