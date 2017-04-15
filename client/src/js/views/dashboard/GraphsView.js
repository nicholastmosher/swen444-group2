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
            selectedOption : 'PieChart',
            selectedFilter : 'Income',
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
    onSiteChanged(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }
    onFilterChanged(event) {
        this.setState({
            selectedFilter: event.target.value,
        });
    }

    render() {
        return (

            <div className="container-fluid">
                <h1>Graphs and Reports</h1>
            <div className="row">

                <div id="config_sidebar" className="col-md-3 sidebar">
                    <h2>Graph Configurations</h2>
                    <h3>Type of Graph</h3>

                    <div className="radio">
                        <label><input type="radio" name="optradio" value="BarChart" checked={this.state.selectedOption === 'BarChart'} onChange={this.onSiteChanged}/>Bar Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="LineChart" checked={this.state.selectedOption === 'LineChart'} onChange={this.onSiteChanged}/>Line Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="PieChart" checked={this.state.selectedOption === 'PieChart'} onChange={this.onSiteChanged}/>PieChart</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="ScatterChart" checked={this.state.selectedOption === 'ScatterChart'} onChange={this.onSiteChanged}/>Scatter Plot</label>
                    </div>

                    <h3>Filter by Date</h3>
                    <DatePicker />

                    <h3>Filter</h3>
                    <div className="radio">
                        <label><input type="radio" name="radio" defaultChecked onChange={this.onFilterChanged}/>Income</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="radio" onChange={this.onFilterChanged}/>Expenses</label>
                    </div>
                </div>

                <div className="col-md-7">
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
                <div id="generateReport" className="col-md-2">
                    <button id="genReport" className="btn btn-success">Generate Report</button>
                </div>
            </div>
            </div>
        );
    }
}

export default GraphsView;
