/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Adam Audycki <apa7395@rit.edu>
 */
import React from 'react';
import DatePicker  from '../../components/DatePicker';
import { Chart } from 'react-google-charts';
import { Component } from 'react';

class GraphsView extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: 'PieChart',
      selectedFilter: 'Income',
      data: [
        ['Income', 'Money'],
        ['Work', 22200],
        ['Babysitting', 1000],
        ['Coding', 3000],
        ['Other', 5932],
      ]
    };
    this.onSiteChanged = this.onSiteChanged.bind(this);
    this.onFilterChanged = this.onFilterChanged.bind(this);
  }

  //This is triggered when one of the Type of Graph radio buttons are clicked.
  onSiteChanged(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  //Can retrieve the data here. The data just needs to be build up into either one of those conditionals.
  //This is triggered when one of the Filter radio buttons are clicked.
  //This is where the filter by data stuff could also be added.
  onFilterChanged(event) {
    var data;
    if (event.target.value == 'Income') {
      data = [
        ['Income', 'Money'],
        ['Work', 22200],
        ['Babysitting', 1000],
        ['Coding', 3000],
        ['Other', 5932],
      ];
    }
    else if (event.target.value == 'Expenses') {
      data = [
        ['Expenses', 'Money'],
        ['Food', 30000],
        ['Gas', 500],
        ['Utilities', 2500],
        ['Other', 1000],
      ]
    }
    this.setState({
      selectedFilter: event.target.value,
      data: data
    });
  }

  render() {
    return (
        <div className="container-fluid">
          <div className="row row-header">
            <div className="col-md-1"></div>
            <h2 className="col-md-2">Graphs and Reports</h2>
            <div className="col-md-9"></div>
          </div>
          <div className="row row-inner">
            <div className="col-md-1"></div>
            <div id="config_sidebar" className="col-md-2 verticalLine">
              <h3>Graph Configurations</h3>
              <h4 className="option-config">Type of Graph</h4>

              <div className="radio">
                <label>
                  <input type="radio" name="chartRadio" value="BarChart"
                         checked={this.state.selectedOption === 'BarChart'} onChange={this.onSiteChanged}/>
                  &nbsp;Bar Graph
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="chartRadio" value="LineChart"
                         checked={this.state.selectedOption === 'LineChart'} onChange={this.onSiteChanged}/>
                  &nbsp;Line Graph
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="chartRadio" value="PieChart"
                         checked={this.state.selectedOption === 'PieChart'} onChange={this.onSiteChanged}/>
                  &nbsp;Pie Chart
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="chartRadio" value="ScatterChart"
                         checked={this.state.selectedOption === 'ScatterChart'} onChange={this.onSiteChanged}/>
                  &nbsp;Scatter Plot
                </label>
              </div>

              <h4 className="option-config">Filter by Date</h4>
              <DatePicker />

              <h4 className="option-config">Filter by Category</h4>
              <div className="radio">
                <label>
                  <input type="radio" name="filterRadio" value="Income" defaultChecked
                         onChange={this.onFilterChanged}/>
                  &nbsp;Income
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" name="filterRadio" value="Expenses" onChange={this.onFilterChanged}/>
                  &nbsp;Expenses
                </label>
              </div>
              <h4 className="option-config">Filter by Tags</h4>
              <label>
                <input type="checkbox" name="vehicle" value="Bike"/>
                &nbsp;Tag 1
              </label><br/>
              <label>
                <input type="checkbox" name="vehicle" value="Bike"/>
                &nbsp;Tag 2
              </label><br/>
              <label>
                <input type="checkbox" name="vehicle" value="Bike"/>
                &nbsp;Tag 3
              </label><br/>
            </div>
            <div className="col-md-1"></div>

            <div className="col-md-7">
              <div className="graph-border">
              <Chart
                  chartType={this.state.selectedOption}
                  data={this.state.data}
                  options={{
                    title: 'My Budget',
                    is3D: true,
                  }}
                  width="100%"
                  graph_id={this.state.selectedOption}
              />
              </div>
              <div className="col-md-12">
              <div className="row row-inner">
                <div id="generateReport" className="col-md-12 row-inner text-right">
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#reportModal">
                    Generate a Report
                  </button>
                  <div className="modal fade" id="reportModal">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Generate a Report</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Report Content</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary" data-dismiss="modal">Print Report</button>
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="row horizontalLine">
                  <div className="col-md-12 topMargin">
                    <h3>Budget Progress Bars</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
    );
  }
}

export default GraphsView;
