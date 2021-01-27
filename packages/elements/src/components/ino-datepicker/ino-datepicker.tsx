import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  h,
  State,
} from '@stencil/core';
import flatpickr from 'flatpickr';
import monthSelectPlugin from 'flatpickr/dist/plugins/monthSelect';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { Instance } from 'flatpickr/dist/types/instance';
import { Locale } from 'flatpickr/dist/types/locale';

@Component({
  tag: 'ino-datepicker',
  styleUrl: 'ino-datepicker.scss',
  shadow: false,
})
export class Datepicker implements ComponentInterface {
  @Element() el!: HTMLElement;

  private flatpickr!: Instance;

  /**
   * Autofocuses this element.
   */
  @Prop({ attribute: 'autofocus' }) autoFocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The input name of this element.
   */
  @Prop() name?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() inoShowLabelHint?: boolean;

  /**
   * The currently selected date shown in the input field **unmanaged**. The given value
   * will not be formatted as date.
   */
  @Prop() value?: string = '';

  @Watch('value')
  valueChanged(value: string) {
    if (this.disabled) return;

    try {
      if (this.flatpickr) {
        this.setValidState(value);
      }

      if (this.flatpickr && this.isValid) {
        this.flatpickr.setDate(value, false);
      }
    } catch (e) {
      // Input could not be parsed e.g. empty spaces
      this.isValid = false;
    }
  }

  /**
   * The minimum date that a user can start picking from (inclusive).
   */
  @Prop() min?: string;

  @Watch('min')
  minChanged(value: string) {
    this.updateFlatpickr('minDate', value);
  }

  /**
   * The maximum date that a user can pick to (inclusive).
   */
  @Prop() max?: string;

  @Watch('max')
  maxChanged(value: string) {
    this.updateFlatpickr('maxDate', value);
  }

  /**
   * Styles the datepicker as outlined element.
   */
  @Prop() inoOutline?: boolean;

  /**
   * Defines the label for this element.
   */
  @Prop() inoLabel?: string;

  /**
   * The helper text.
   */
  @Prop() inoHelper?: string;

  /**
   * Displays the helper permanently.
   */
  @Prop() inoHelperPersistent?: boolean;

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() inoHelperValidation?: boolean;

  /**
   * If true, enables the user to choose two dates as an interval.
   * Only works with inoType="date"
   */
  @Prop() inoRange?: boolean;

  @Watch('inoRange')
  inoRangeChanged() {
    if (!this.disabled) this.create();
  }

  @Watch('disabled')
  disabledChanged(newValue: boolean) {
    newValue ? this.dispose() : this.create();
  }

  /**
   * A string to change the date format.
   * Possible values are listed [here](https://flatpickr.js.org/formatting/).
   * The default value is `d-m-Y` which accepts values like `01.01.2019`.
   */
  @Prop() inoDateFormat? = 'd-m-Y';

  @Watch('inoDateFormat')
  inoDateFormatChanged(dateFormat: string) {
    this.updateFlatpickr('inoDateFormat', dateFormat);
  }

  /**
   * A string/array containing the initial date of the datepicker overlay. If you're using `inoRange = true` provide an array.
   */
  @Prop() inoDefaultDate?: string | string[];

  @Watch('inoDefaultDate')
  inoDefaultDateChanged(defaultDate: string) {
    this.updateFlatpickr('inoDefaultDate', defaultDate);
  }

  /**
   * A number containing the initial hour in the date-time picker overlay.
   * The default is `12`
   */
  @Prop() inoDefaultHour = 12;

  @Watch('inoDefaultHour')
  inoDefaultHourChanged(value: string) {
    this.updateFlatpickr('inoDefaultHour', value);
  }

  /**
   * A number containing the initial minute in the date-time picker overlay.
   * The default is `0`
   */
  @Prop() inoDefaultMinute? = 0;

  @Watch('inoDefaultMinute')
  inoDefaultMinuteChanged(value: string) {
    this.updateFlatpickr('inoDefaultMinute', value);
  }

  /**
   * If true, displays time picker in 12 hour mode with AM/PM selection.
   */
  @Prop() inoTwelveHourTime?: boolean;

  @Watch('inoTwelveHourTime')
  inoTwelveHourTimeChanged(value: string) {
    this.updateFlatpickr('inoTwelveHourTime', value);
  }

  /**
   * Selects the correct picker corresponding to the given type.
   */
  @Prop() inoType?: 'date' | 'month' | 'time' | 'datetime' = 'date';

  @Watch('inoType')
  inoTypeChanged() {
    if (!this.disabled) this.create();
  }

  isDatePicker = () => this.inoType === 'date';
  isMonthPicker = () => this.inoType === 'month';
  isTimePicker = () => this.inoType === 'time';
  isDateTimePicker = () => this.inoType === 'datetime';

  /**
   * Adjusts the step for the minute input (incl. scrolling)
   * Default is 5
   */
  @Prop() minuteStep = 5;

  @Watch('minuteStep')
  minuteStepChanged(value: number) {
    this.updateFlatpickr('minuteIncrement', value);
  }

  /**
   * Adjusts the step for the hour input (incl. scrolling)
   * Default is 1
   */
  @Prop() hourStep = 1;

  @State() isValid: boolean = true;

  @Watch('hourStep')
  hourStepChanged(value: number) {
    this.updateFlatpickr('hourIncrement', value);
  }

  @Listen('click')
  inoInputClickedHandler(e) {
    const target = e.target;
    const tagName = target.tagName;

    if (
      this.disabled ||
      !tagName ||
      tagName !== 'INPUT' ||
      this.elementIsInput(target)
    ) {
      return;
    }

    this.flatpickr.toggle();
  }

  @Listen('clickEl')
  inoIconClickedHandler() {
    this.focusInputField();
    this.flatpickr.toggle();
  }

  focusInputField = () => {
    const currentFocus: Element = document.activeElement;
    const input = this.el.querySelector('input') as HTMLInputElement;

    // Don't change focus if current focus is an input field (e.g. time picker)
    if (currentFocus.tagName !== 'input') {
      input.focus();
    }
  };

  private static INPUT_CLASSES = [
    'cur-year',
    'flatpickr-hour',
    'flatpickr-minute',
    'flatpickr-time',
  ];

  private elementIsInput(element: Element) {
    const elementClasses = element.className;
    return Datepicker.INPUT_CLASSES.some((cl) => elementClasses.includes(cl));
  }

  /**
   * Emits when the value of the datepicker changes.
   * The value can be found in `event.detail`
   */
  @Event() valueChange!: EventEmitter<string>;

  componentDidLoad() {
    if (!this.disabled) this.create();
  }

  disconnectedCallback() {
    this.dispose();
  }

  private static WEEKDAYS_SHORT = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  private static MONTHS_LONG = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  private static NUMBERS_WITH_SPECIAL_CHARS = /(\d[^a-z]+)/g;

  private create() {
    this.dispose();

    if (this.disabled) return;

    const sharedOptions: Partial<BaseOptions> = {
      allowInput: true,
      clickOpens: false,
      ignoredFocusElements: [],
      onValueUpdate: (_, newValue) => this.valueChange.emit(newValue),
      onChange: () => this.focusInputField(),
    };

    const typeSpecificOptions: Partial<BaseOptions> = this.getTypeSpecificOptions();
    const options = { ...sharedOptions, ...typeSpecificOptions };

    const target = this.el.querySelector('ino-input > div') as HTMLElement;
    this.flatpickr = flatpickr(target, options);
    this.flatpickr.l10n.weekdays.shorthand = Datepicker.WEEKDAYS_SHORT as Locale['weekdays']['shorthand'];
    this.flatpickr.l10n.months.longhand = Datepicker.MONTHS_LONG as Locale['months']['longhand'];
  }

  createMonthPickerOptions = () => ({
    plugins: [
      monthSelectPlugin({
        dateFormat: this.inoDateFormat === 'd-m-Y' ? 'm.Y' : this.inoDateFormat,
      }),
    ],
  });

  createTimePickerOptions = () => ({
    defaultHour: this.inoDefaultHour,
    defaultMinute: this.inoDefaultMinute,
    enableTime: true,
    time_24hr: !this.inoTwelveHourTime,
    minuteIncrement: this.minuteStep,
    hourIncrement: this.hourStep,
    noCalendar: this.isTimePicker(),
  });

  createDatePickerOptions = (): Partial<BaseOptions> => ({
    dateFormat: this.inoDateFormat,
    minDate: this.min,
    maxDate: this.max,
    mode: this.inoRange && this.isDatePicker() ? 'range' : 'single',
  });

  private setValidState(value: string): void {
    if (this.inoRange) {
      this.isValid = !value
        .match(Datepicker.NUMBERS_WITH_SPECIAL_CHARS)
        .map((match) => this.hasCorrectFormat(match.trim()))
        .includes(false);

      return;
    }

    if (value) {
      let isValueValid = true;
      const parsedValue: Date = this.flatpickr.parseDate(value);

      if (this.min) {
        const minDate = this.flatpickr.parseDate(this.min);
        isValueValid = isValueValid && minDate <= parsedValue;
      }

      if (this.max) {
        const maxDate = this.flatpickr.parseDate(this.max);
        isValueValid = isValueValid && maxDate >= parsedValue;
      }

      this.isValid = isValueValid && this.hasCorrectFormat(value);
      return;
    }

    if (!value && !this.required) {
      this.isValid = true;
      return;
    }
  }

  private hasCorrectFormat(value: string): boolean {
    const parsedDate: Date = this.flatpickr.parseDate(value);
    const formattedDate: string = this.flatpickr.formatDate(
      parsedDate,
      this.flatpickr.config.dateFormat
    );

    return formattedDate == value;
  }

  private getTypeSpecificOptions(): Partial<BaseOptions> {
    switch (this.inoType) {
      case 'month':
        return this.createMonthPickerOptions();
      case 'time':
        return this.createTimePickerOptions();
      case 'date':
        return this.createDatePickerOptions();
      case 'datetime':
        return {
          ...this.createDatePickerOptions(),
          ...this.createTimePickerOptions(),
        };
    }
  }

  private updateFlatpickr(option, value) {
    if (this.flatpickr) {
      this.flatpickr.set(option, value);
    }
  }

  private dispose() {
    if (this.flatpickr) {
      this.flatpickr.destroy();
    }
  }

  render() {
    return (
      <Host>
        <ino-input
          type="text"
          autocomplete="off"
          disabled={this.disabled}
          autoFocus={this.autoFocus}
          name={this.name}
          required={this.required}
          ino-label={this.inoLabel}
          ino-error={!this.isValid}
          ino-icon-leading
          value={this.value}
          ino-helper={this.inoHelper}
          ino-outline={this.inoOutline}
          ino-helper-persistent={this.inoHelperPersistent}
          ino-helper-validation={this.inoHelperValidation}
          ino-show-label-hint={this.inoShowLabelHint}
          onValueChange={(e) => this.valueChange.emit(e.detail)}
        >
          <ino-icon
            ino-clickable={!this.disabled}
            slot={'ino-icon-leading'}
            ino-icon={this.isTimePicker() ? 'time' : 'calendar'}
          ></ino-icon>
        </ino-input>
      </Host>
    );
  }
}
