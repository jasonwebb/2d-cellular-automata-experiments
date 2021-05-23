import { createGroup, createSlider, createCheckbox } from './components';
import variables from '../variables'
import { resetTextureSizes } from '../entry';

export function createCanvasGroup() {
  let group = createGroup('Canvas');

  // Width slider
  group.appendChild(
    createSlider('Width', 1, variables.canvas.width.max, 1, variables.canvas.width.value, (e) => {
      variables.canvas.width.value = e.target.value;
      resetTextureSizes();
    })
  );

  // Height slider
  group.appendChild(
    createSlider('Height', 1, variables.canvas.height.max, 1, variables.canvas.height.value, (e) => {
      variables.canvas.height.value = e.target.value;
      resetTextureSizes();
    })
  );

  // Maximized checkbox
  group.appendChild(
    createCheckbox('Maximized', variables.canvas.maximized, (e) => {
      variables.canvas.maximized = e.target.value;
      resetTextureSizes();
    })
  );

  // Edge wrapping (X) checkbox
  group.appendChild(
    createCheckbox('Wrap X', variables.wrap.x, () => {
      console.log('wrap x changed');
      variables.wrap.x = !variables.wrap.x;
    })
  );

  // Edge wrapping (Y) checkbox
  group.appendChild(
    createCheckbox('Wrap Y', variables.wrap.y, () => {
      console.log('wrap y changed');
      variables.wrap.y = !variables.wrap.y;
    })
  );

  return group;
}