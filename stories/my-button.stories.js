import { html } from 'lit-html';
import '../src/my-button.js';
import { text, withKnobs, withWebComponentsKnobs } from '@open-wc/demoing-storybook';

export default {
  title: 'my-button',
  component: 'my-button',
  decorators: [withKnobs, withWebComponentsKnobs],
  parameters: { options: { selectedPanel: 'storybookjs/knobs/panel' } },
};

export const Primary = () =>
  html`
    <my-button buttonText="Primary"></my-button>
    <style>
    html {
      --my-button-font-color: #fff;
      --my-button-font-size: 16px;
      --my-button-bg-color: #4caf50;
    }
  </style>
  `;
 
export const Danger = () =>
  html`
    <my-button buttonText="Danger"></my-button>
    <style>
    html {
      --my-button-font-color: #fff;
      --my-button-font-size: 16px;
      --my-button-bg-color: #cd2b2c;
    }
  </style>
  `;
 