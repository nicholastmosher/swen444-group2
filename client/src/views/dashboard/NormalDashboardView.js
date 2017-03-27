/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React, { PropTypes } from 'react';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash.omit';
import { Chart } from 'react-google-charts';

import { DateRangePicker, DateRangePickerShape, isInclusivelyAfterDay } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';


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

class NormalDashboardView extends React.Component {
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="jumbotron-fluid">Dashboard</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="container">
                <div className="row container">
                  <h3>Summary</h3>
                </div>
                <div className="row">
                  <div className="container">
                    <Chart
                        chartType="ScatterChart"
                        data={[
                          ['Income', 'Money'],
                          ['Work', 22200],
                          ['Babysitting', 1000],
                          ['Coding', 3000],
                          ['Other', 5932],

                        ]}
                        options={{
                          title: 'My Budget',
                          is3D: true,
                        }}
                        width="100%"
                        graph_id="ScatterChart"
                    />
                  </div>
                </div>
                <div className="row container date-picker-container">
                  <div className="col-md-6">

                  </div>
                  <div className="col-md-6">
                    <DateRangePicker
                        className="DateRangePicker date-picker"
                        {...props}
                        onDatesChange={this.onDatesChange}
                        onFocusChange={this.onFocusChange}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDate={endDate}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="container">
                  <h3>Balance</h3>
                  <ul className="list-group">
                    <li className="list-group-item income-color">Income:</li>
                    <li className="list-group-item expense-color">Expenses:</li>
                    <li className="list-group-item">Net:</li>
                  </ul>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="container">
                  <h3>Collaborator Updates</h3>
                  <ul className="list-group">
                    <li className="list-group-item">Wife:</li>
                    <li className="list-group-item">No Wife:</li>
                  </ul>
                </div>
              </div>
              <br/>
              <div className="row container">
                <button className="btn delete-button" type="button">Delete Plan</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


NormalDashboardView.propTypes = propTypes;
NormalDashboardView.defaultProps = defaultProps;

export default NormalDashboardView;
