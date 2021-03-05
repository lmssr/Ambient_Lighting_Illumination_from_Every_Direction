import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createMaterial() {
  // create a texture loader.
  let textureLoader = new TextureLoader();

  let materialArray = [];
  // load a texture
  let texture_ft = textureLoader.load(
    '/assets/textures/arid2_ft.jpg',
  );
  let texture_bk = textureLoader.load(
    '/assets/textures/arid2_bk.jpg',
  );
  let texture_up = textureLoader.load(
    '/assets/textures/arid2_up.jpg',
  );
  let texture_dn = textureLoader.load(
    '/assets/textures/arid2_dn.jpg',
  );
  let texture_rt = textureLoader.load(
    '/assets/textures/arid2_rt.jpg',
  );
  let texture_lf = textureLoader.load(
    '/assets/textures/arid2_lf.jpg',
  );
  // create a "standard" material using
  // the texture we just loaded as a color map
  materialArray.push( new MeshStandardMaterial({ map: texture_bk }));
  materialArray.push( new MeshStandardMaterial({ map: texture_ft }));
  materialArray.push( new MeshStandardMaterial({ map: texture_up }));
  materialArray.push( new MeshStandardMaterial({ map: texture_dn }));
  materialArray.push( new MeshStandardMaterial({ map: texture_rt }));
  materialArray.push( new MeshStandardMaterial({ map: texture_lf }));

  return materialArray;
}

function createCube() {
  let geometry = new BoxBufferGeometry(10, 10, 10);
  let material = createMaterial();
  let cube = new Mesh(geometry, material);


  return cube;
}

export { createCube };
