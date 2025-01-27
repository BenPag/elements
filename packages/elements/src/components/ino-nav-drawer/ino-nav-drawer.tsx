import { MDCDrawer } from '@material/drawer';
import {
  Component,
  ComponentInterface,
  Element,
  Host,
  Prop,
  Watch,
  Event,
  EventEmitter,
  h,
  Listen,
} from '@stencil/core';
import { NavDrawerAnchor, NavDrawerVariant, NavDrawerLabels } from '../types';
import classNames from 'classnames';

/**
 * A navigation drawer component with different variants, setting up the base layout for your app.
 * It functions as a wrapper around the material [drawer](https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/) component.
 *
 * > Note: The navigation drawer works best with `ino-list` and `ino-nav-item`s inside.
 *
 * @slot header - For a custom header on top of the navigation bar
 * @slot logo - For the logo on top of the navigation bar (cannot be used with the `header` slot)
 * @slot subtitle - For the element just below the logo (cannot be used with the `header` slot)
 * @slot content - For the content of the navigation bar (usually used with `ino-list` and `ino-nav-item`)
 * @slot footer - For elements below the content slot
 * @slot app - For the application located next to this nav-drawer
 */
@Component({
  tag: 'ino-nav-drawer',
  styleUrl: 'ino-nav-drawer.scss',
  shadow: true,
})
export class NavDrawer implements ComponentInterface {
  /**
   * An internal instance of the material design drawer.
   */
  private drawerInstance: MDCDrawer;
  private drawerEl: HTMLElement;
  @Element() el!: HTMLInoNavDrawerElement;

  /**
   * Marks this element as open. (**unmanaged**)
   */
  @Prop() open?: boolean = false;

  @Watch('open')
  openChanged(newOpen: boolean) {
    if (this.drawerInstance) {
      this.drawerInstance.open = newOpen;
    }
  }

  /**
   * Side from which the drawer will appear.
   * Possible values: `left` (default), `right`.
   */
  @Prop() anchor?: NavDrawerAnchor = 'left';

  /**
   * The variant to use for the drawer.
   */
  @Prop() variant?: NavDrawerVariant = 'docked';

  /**
   * The aria-labels used for content and footer nav elements.
   * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role.
   */
  @Prop() a11yLabels?: NavDrawerLabels = {
    content: 'Main Navigation',
    footer: 'Footer Navigation',
    toggleBtn: 'Toggle Navigation',
  };

  @Watch('variant')
  variantChanged(newVariant: NavDrawerVariant) {
    if (newVariant === 'mobile') {
      this.activateMobileMode();
    } else {
      this.deactivateMobileMode();
    }
  }

  componentDidLoad() {
    this.drawerInstance = new MDCDrawer(
      this.el.shadowRoot.querySelector('.mdc-drawer'),
    );
    // set initial value of open state
    if (this.drawerInstance) {
      this.drawerInstance.open = this.open || false;
    }
    this.drawerEl.addEventListener('MDCDrawer:closed', this.closeDrawer);
    this.initTabindex('content');
    this.initTabindex('footer');

    // set initial mobile or desktop mode
    if (this.variant === 'mobile') {
      this.activateMobileMode();
    } else {
      this.deactivateMobileMode();
    }
  }

  disconnectedCallback() {
    this.drawerEl.removeEventListener('MDCDrawer:closed', this.closeDrawer);
    this.drawerInstance?.destroy();
  }

  private activateMobileMode() {
    const navItems = this.el.querySelectorAll('ino-nav-item');
    navItems.forEach((item) => {
      item.classList.add('mobile-nav-item');
    });
  }

  private deactivateMobileMode() {
    const navItems = this.el.querySelectorAll('ino-nav-item');
    navItems.forEach((item) => {
      item.classList.remove('mobile-nav-item');
    });
  }
  // This listener ensures that only the most recently clicked/selected list item appears as "activated"
  @Listen('clickEl')
  handleListItemClick(event: CustomEvent) {
    const listItem: HTMLInoListItemElement = event.detail;

    if (!listItem || listItem.tagName !== 'INO-LIST-ITEM') {
      return;
    }

    this.deactivateAllItems();
    listItem.activated = true;
  }

  private deactivateAllItems() {
    const allItems: NodeListOf<HTMLInoListItemElement> =
      this.el.querySelectorAll('ino-list-item');
    allItems.forEach((item) => (item.activated = false));
  }

  /**
   * Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`.
   */
  @Event() openChange!: EventEmitter<boolean>;

  private closeDrawer = (e: Event) => {
    e.preventDefault();
    this.openChange.emit(false);
  };

  private toggleDrawer = (e: Event) => {
    const newOpenState = !this.open;
    this.openChange.emit(newOpenState);
    e.stopPropagation();
  };

  private initTabindex(slotName: string) {
    const contentElements = this.el.querySelector(`[slot="${slotName}"]`);
    const contentListItems = contentElements.querySelectorAll('ino-list-item');
    contentListItems[0].attrs = { tabIndex: 0 };
  }

  render() {
    const { anchor, variant } = this;

    const isMobile = variant === 'mobile';

    const classDrawer = classNames({
      'mdc-drawer': true,
      'mdc-drawer--docked': variant === 'docked',
      'mdc-drawer--dismissible':
        variant === 'dismissible' || variant === 'docked', // docked is a modifier of MDC's dismissible inoVariant
      'mdc-drawer--modal': variant === 'modal' || isMobile,
      'mdc-drawer--anchor-left': anchor === 'left',
      'mdc-drawer--anchor-right': anchor === 'right',
      'mobile-drawer': isMobile, // custom class for mobile drawer
    });

    const classAppContent = classNames({
      'mdc-drawer-app-content':
        variant === 'docked' || variant === 'dismissible',
    });

    const nav = (
      <aside class={classDrawer} ref={(el) => (this.drawerEl = el)}>
        <div class="mdc-drawer__header">
          <slot name="header">
            <div class="mdc-drawer__logo">
              <slot name="logo"></slot>
            </div>
            <div class="mdc-drawer__subtitle">
              <slot name="subtitle"></slot>
            </div>
          </slot>
        </div>

        <nav class="mdc-drawer__content" aria-label={this.a11yLabels.content}>
          <slot name="content"></slot>
        </nav>

        <nav class="mdc-drawer__footer" aria-label={this.a11yLabels.footer}>
          <slot name="footer"></slot>
          <ino-icon-button
            class={{
              'mdc-drawer__toggle': true,
              'visually-hidden': isMobile, // Hide visually on mobile, but remains in DOM to meet focus-trap requirements
            }}
            icon="arrow_right"
            tabIndex={isMobile ? -1 : null} // Exclude from tab navigation on mobile drawer
            aria-hidden={isMobile} // Hide from screen readers on mobile as it's only used to prevent focus-trap error and has no functional use
            onClick={this.toggleDrawer}
            attrs={{
              ariaLabel: this.a11yLabels.toggleBtn,
            }}
          />
        </nav>
      </aside>
    );

    const main = (
      <div class={classAppContent}>
        <slot name="app"></slot>
      </div>
    );

    return (
      <Host>
        {nav}
        {(isMobile || variant === 'modal') && (
          <div class="mdc-drawer-scrim"></div>
        )}
        {main}
      </Host>
    );
  }
}
