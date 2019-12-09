import { MDCRipple } from '@material/ripple';
import { Component, ComponentInterface, Element, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

import { ButtonType, ColorScheme, SurfaceType } from '../types';

import { CSS_CLASSES, SELECTORS } from './constants';

@Component({
  tag: 'ino-button',
  styleUrl: 'ino-button.scss',
  shadow: true
  // as exception, we use shadow DOM for the button to avoid
  // https://github.com/ionic-team/stencil/issues/1454.
  // TODO: We should either use ShadowDOM for all or no elements in future!!!
  // https://jira.inovex.de/browse/ELEMENTS-90
})
export class Button implements ComponentInterface {
  /**
   * An internal instance of the material design button.
   */
  private button: MDCRipple;

  @Element() el!: HTMLElement;
  /**
   * Sets the autofocus for this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the element.
   */
  @Prop() name?: string;

  /**
   * The form id this element origins to.
   */
  @Prop() form?: string;

  /**
   * The type of this form.
   *
   * Can either be `button`, `submit` or `reset`.
   */
  @Prop() type?: ButtonType = 'button';

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: ColorScheme = 'primary';

  /**
   * The fill type of this element.
   * Possible values: `solid` (default), `outline`, `raised` or `transparent`.
   */
  @Prop() inoFill?: SurfaceType = 'solid';

  /**
   * Adds an icon to the button.
   * The icon is appended before the text. Use `inoIconPrepend` to place it after the text.
   */
  @Prop() inoIcon?: string;

  /**
   * Prepends an icon after the text.
   */
  @Prop() inoIconPrepend?: boolean;

  /**
   * Makes the button text and container slightly smaller.
   */
  @Prop() inoDense?: boolean = false;

  componentDidLoad() {
    this.button = new MDCRipple(this.el.shadowRoot.querySelector(SELECTORS.MDC_BUTTON));
  }

  componentWillUnload() {
    this.button.destroy();
  }

  private handleClick = (e: Event) => {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    // this button wants to specifically submit a form
    // see https://github.com/ionic-team/ionic/blob/master/core/src/components/button/button.tsx
    const form = this.el.closest('form');
    if (form) {
      e.preventDefault();

      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      fakeButton.name = 'fake-button';
      form.appendChild(fakeButton);
      fakeButton.click();
      fakeButton.remove();
    }
  }

  render() {
    const classButton = classNames(
      CSS_CLASSES.MDC_BUTTON,
      this.inoFill === 'solid' && CSS_CLASSES.UNELEVATED,
      this.inoFill === 'outline' && CSS_CLASSES.OUTLINED,
      this.inoFill === 'raised' && CSS_CLASSES.RAISED,
      this.inoDense && CSS_CLASSES.DENSE
    );

    return (
      <Host onClick={this.handleClick}>
        <button
          class={classButton}
          autoFocus={this.autofocus}
          disabled={this.disabled}
          name={this.name}
          type={this.type}
          form={this.form}
        >
          {this.inoIcon && !this.inoIconPrepend && (
            <ino-icon
              class={CSS_CLASSES.MDC_BUTTON_ICON}
              ino-icon={this.inoIcon}
              aria-hidden="true"
            />
          )}
          <div class="mdc-button__label">
            <slot></slot>
          </div>
          {this.inoIcon && this.inoIconPrepend && (
            <ino-icon
              class={
                CSS_CLASSES.MDC_BUTTON_ICON +
                ' ' +
                CSS_CLASSES.MDC_BUTTON_ICON_RIGHT
              }
              ino-icon={this.inoIcon}
              aria-hidden="true"
            />
          )}
        </button>
      </Host>
    );
  }
}