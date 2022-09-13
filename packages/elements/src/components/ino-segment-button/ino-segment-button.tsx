import {Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop,} from '@stencil/core';
import classNames from 'classnames';

import {generateUniqueId} from '../../util/component-utils';

/**
 * @slot default - Label of the button
 */
@Component({
  tag: 'ino-segment-button',
  styleUrl: 'ino-segment-button.scss',
  shadow: false,
})
export class InoSegmentButton implements ComponentInterface {
  private buttonId = `ino-segment-button-id_${generateUniqueId()}`;

  @Element() el!: HTMLInoSegmentButtonElement;

  /**
   * Activates the button
   */
  @Prop() checked = false;

  /**
   * Disables the button
   */
  @Prop() disabled = false;

  /**
   * Slightly decreases the size of the button
   */
  @Prop() dense = false;

  /**
   * Name of the element
   */
  @Prop() name?: string;

  /**
   * Value of the element
   */
  @Prop() value?: string;

  /**
   * Emits if the user interacts with the button.
   * If the button is disabled or checked, the event will not be emitted.
   */
  @Event() checkedChange!: EventEmitter;

  private handleClick = (e: Event) => {
    if (!this.checked && !this.disabled) {
      this.checkedChange.emit(true);
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const hostClasses = classNames('ino-segment-button', {
      'ino-segment-button--disabled': this.disabled,
    });

    const buttonClasses = classNames('button', {
      'button--dense': this.dense,
      'button--active': this.checked,
    });

    return (
      <Host
        checked={this.checked}
        onClick={this.handleClick}
        class={hostClasses}
      >
        <button
          class={buttonClasses}
          disabled={this.disabled}
          id={this.buttonId}
          name={this.name}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
