import { Components } from '@inovex.de/elements';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-chip.scss';

export default {
  title: 'Buttons/<ino-chip>',
  component: 'ino-chip',
  decorators: [(story) => decorateStoryWithClass(story)],
  parameters: {
    actions: {
      handles: ['chipClicked', 'chipRemoved'],
    },
  },
} as Meta;

export const Playground: Story<Components.InoChip> = (args) => html`
  <ino-chip
    class="customizable-chip"
    color-scheme="${args.colorScheme}"
    disabled="${args.disabled}"
    fill="${args.fill}"
    label="${args.label}"
    removable="${args.removable}"
    selectable="${args.selectable}"
    selected="${args.selected}"
    value="${args.value}"
  >${args.defaultSlot}</ino-chip>
`;

Playground.args = {
  defaultSlot: 'My chip label',
  colorScheme: 'default',
  disabled: false,
  fill: 'solid',
  label: '',
  removable: false,
  selectable: false,
  selected: false,
  value: '',
};

Playground.argTypes = {
  colorScheme: {
    control: {
      type: 'select',
    },
    options: [
      'default',
      'primary',
      'secondary',
      'success',
      'warning',
      'error',
      'light',
      'dark',
    ],
  },
  fill: {
    control: {
      type: 'radio',
    },
    options: ['solid', 'outline'],
  },
};

export const Fill = (): TemplateResult => html`
  <div class="ino-chip-story">
    <ino-chip label="Chip Solid" fill="solid"></ino-chip>
    <ino-chip label="Chip Outline" fill="outline"></ino-chip>
  </div>
`;

export const Colors = (): TemplateResult => html`
  <div class="ino-chip-story">
    <ino-chip label="Default"></ino-chip>
    <ino-chip color-scheme="primary">Primary</ino-chip>
    <ino-chip color-scheme="secondary">Secondary</ino-chip>
    <ino-chip color-scheme="success">Success</ino-chip>
    <ino-chip color-scheme="warning">Warning</ino-chip>
    <ino-chip color-scheme="error">Error</ino-chip>
    <ino-chip color-scheme="light">Light</ino-chip>
    <ino-chip color-scheme="dark">Dark</ino-chip>
  </div>
  <div class="ino-chip-story">
    <ino-chip fill="outline">Outline</ino-chip>
    <ino-chip fill="outline" color-scheme="primary">Primary</ino-chip>
    <ino-chip
      fill="outline"
      label="Secondary"
      color-scheme="secondary"
    ></ino-chip>
    <ino-chip fill="outline" color-scheme="success">Success</ino-chip>
    <ino-chip fill="outline" color-scheme="warning">Warning</ino-chip>
    <ino-chip fill="outline" color-scheme="error">Error</ino-chip>
    <ino-chip fill="outline" color-scheme="light">Light</ino-chip>
    <ino-chip fill="outline" color-scheme="dark">Dark</ino-chip>
  </div>
`;

export const Icons = (): TemplateResult => html`
  <div class="ino-chip-story">
    <ino-chip>
      Leading
      <ino-icon slot="icon-leading" icon="star"></ino-icon>
    </ino-chip>
    <ino-chip>
      Trailing
      <ino-icon slot="icon-trailing" icon="star"></ino-icon>
    </ino-chip>
    <ino-chip>
      <span>Leading & Trailing</span>
      <ino-icon slot="icon-leading" icon="star"></ino-icon>
      <ino-icon slot="icon-trailing" icon="star"></ino-icon>
    </ino-chip>
  </div>
`;

export const States = (): TemplateResult => html`
  <div class="ino-chip-story">
    <ino-chip removable>Removable</ino-chip>
    <ino-chip selected selectable>Selected</ino-chip>
    <ino-chip disabled>Disabled</ino-chip>
  </div>
`;

export const Selection = (): TemplateResult => {
  const chips = ['Chip 1', 'Chip 2', 'Chip 3'];

  const handleClick = (chip: HTMLInoChipElement) => {
    const allChips = document
      .querySelector('#chip-selection')
      .getElementsByTagName('ino-chip');
    Array.from(allChips).forEach((chip) => (chip.colorScheme = 'default'));
    chip.colorScheme = 'primary';
  };

  return html`
    <div id="chip-selection" class="ino-chip-story">
      ${chips.map(
        (value, index) =>
          html` <ino-chip
            color-scheme="${index === 0 ? 'primary' : 'default'}"
            value="${value}"
            @chipClicked="${(ev) => handleClick(ev.target)}"
          >${value}</ino-chip>`
      )}
    </div>
  `;
};

export const Filter = (): TemplateResult => {
  const values = ['Chip 1', 'Chip 2', 'Chip 3'];
  const selectedChips = new Set<string>();

  const handleClick = (chip: HTMLInoChipElement) => {
    const isSelected = selectedChips.has(chip.value);
    chip.selected = !isSelected;

    if (isSelected) {
      selectedChips.delete(chip.value);
    } else {
      selectedChips.add(chip.value);
    }
  };

  return html`
    <div class="ino-chip-story">
      ${values.map(
        (value) =>
          html` <ino-chip
            value="${value}"
            selectable
            @chipClicked="${(ev) => handleClick(ev.target)}"
          >${value}</ino-chip>`
      )}
    </div>
  `;
};

export const Remove = (): TemplateResult => {
  const chips = ['Chip 1', 'Chip 2', 'Chip 3'];

  const handleClick = (chip: HTMLInoChipElement) => chip.remove();

  return html`
    <div class="ino-chip-story">
      ${chips.map(
        (value, index) =>
          html` <ino-chip
            value="${value}"
            removable="${index !== 0}"
            @chipRemoved="${(ev) => handleClick(ev.target)}"
          >${value}</ino-chip>`
      )}
    </div>
  `;
};