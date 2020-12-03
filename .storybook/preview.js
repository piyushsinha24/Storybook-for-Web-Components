import { addParameters, addDecorator,setCustomElements } from '@open-wc/demoing-storybook';
import { withKnobs} from '@open-wc/demoing-storybook/';
addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

addDecorator(withKnobs);

async function run() {
  const customElements = await (
    await fetch(new URL('../custom-elements.json', import.meta.url))
  ).json();

  setCustomElements(customElements);
}

run();
