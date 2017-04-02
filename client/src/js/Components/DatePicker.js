/**
 * @author Daniel Roberts
 */
import React, { PropTypes } from 'react';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash.omit';

import { DateRangePicker, isInclusivelyAfterDay } from 'react-dates';

import '../../stylesheets/vendors/_datepicker.scss';

const CONSTANTS = {
  DISPLAY_FORMAT: 'L',
  ISO_FORMAT: 'YYYY-MM-DD',

  START_DATE: 'startDate',
  END_DATE: 'endDate',

  HORIZONTAL_ORIENTATION: 'horizontal',
  VERTICAL_ORIENTATION: 'vertical',
  VERTICAL_SCROLLABLE: 'verticalScrollable',

  ANCHOR_LEFT: 'left',
  ANCHOR_CENTER: 'center',
  ANCHOR_RIGHT: 'right',
};

const propTypes = {
  // example props for the demo
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

};

const defaultProps = {
  // example props for the demo
  autoFocus: false,
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // input related props
  startDateId: CONSTANTS.START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: CONSTANTS.END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  orientation: CONSTANTS.HORIZONTAL_ORIENTATION,
  anchorDirection: CONSTANTS.ANCHOR_LEFT,
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  enableOutsideDays: true,
  isDayBlocked: () => false,
  isOutsideRange: day => !isInclusivelyAfterDay(day, moment()),
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: {
    closeDatePicker: 'Close',
    clearDates: 'Clear Dates',
  },
};

class DatePicker extends React.Component {
  constructor(props)
  {
    super(props);
    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = CONSTANTS.START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = CONSTANTS.END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  render() {

    const { focusedInput, startDate, endDate } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
    ]);

    return (
        <DateRangePicker
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
        />
    );

  }
}


DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
