import {
  AmbientLight,
  DirectionalLight,
  HemisphereLight,
  MathUtils,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';

function createLights() {
  // const ambientLight = new AmbientLight('white', 2);

  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    5, // intensity
  );

  const mainLight = new DirectionalLight('white', 2);
  mainLight.position.set(10, 10, 10);
  
  const radiansPerSecond = MathUtils.degToRad(30);

  mainLight.tick = (delta) => {
    // increase the cube's rotation each frame
    mainLight.position.y += delta * radiansPerSecond * 50;
  };

  return { ambientLight, mainLight };
}

export { createLights };
