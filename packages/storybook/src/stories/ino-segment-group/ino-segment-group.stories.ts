import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-segment-group.scss';

export default {
  title: 'Buttons/ino-segment-group',
  component: 'ino-segment-group',
  decorators: [(story) => decorateStoryWithClass(story, 'story-segment-group')],
  parameters: {
    actions: {
      handles: ['checkedChange'],
    },
  },
  argTypes: {
    value: {
      control: {
        type: 'select',
      },
      options: ['opt-1', 'opt-2', 'opt-3', 'opt-4'],
    },
  },
  args: {
    name: '',
    value: 'opt-2',
  },
} as Meta<Components.InoSegmentGroup>;

const checkedChangeHandler = ({ detail, target }: CustomEvent<string>) =>
  ((target as HTMLInoSegmentGroupElement).value = detail);

const template = new TemplateGenerator<Components.InoSegmentGroup>(
  'ino-segment-group',
  (args) => html`
    <ino-segment-group
      id="segment-grp"
      name="${args.name}"
      value="${args.value}"
      @valueChange="${checkedChangeHandler}"
    >
      <ino-segment-button value="opt-1">Option 1</ino-segment-button>
      <ino-segment-button value="opt-2">Option 2</ino-segment-button>
      <ino-segment-button value="opt-3">Option 3</ino-segment-button>
      <ino-segment-button value="opt-4">Option 4</ino-segment-button>
    </ino-segment-group>
  `
);

export const Playground = template.generatePlaygroundStory();
