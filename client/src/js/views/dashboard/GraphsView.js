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
        if(event.target.value == 'Income'){
            data = [
                ['Income', 'Money'],
                ['Work', 22200],
                ['Babysitting', 1000],
                ['Coding', 3000],
                ['Other', 5932],
            ];
        }
        else if(event.target.value == 'Expenses'){
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
                <h1>Graphs and Reports</h1>
                <div className="row">

                    <div id="config_sidebar" className="col-md-3 sidebar">
                        <h2>Graph Configurations</h2>
                        <h3>Type of Graph</h3>

                        <div className="radio">
                            <label><input type="radio" name="chartRadio" value="BarChart" checked={this.state.selectedOption === 'BarChart'} onChange={this.onSiteChanged}/>Bar Graph</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="chartRadio" value="LineChart" checked={this.state.selectedOption === 'LineChart'} onChange={this.onSiteChanged}/>Line Graph</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="chartRadio" value="PieChart" checked={this.state.selectedOption === 'PieChart'} onChange={this.onSiteChanged}/>PieChart</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="chartRadio" value="ScatterChart" checked={this.state.selectedOption === 'ScatterChart'} onChange={this.onSiteChanged}/>Scatter Plot</label>
                        </div>

                        <h3>Filter by Date</h3>
                        <DatePicker />

                        <h3>Filter</h3>
                        <div className="radio">
                            <label><input type="radio" name="filterRadio" value="Income" defaultChecked onChange={this.onFilterChanged}/>Income</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="filterRadio" value="Expenses" onChange={this.onFilterChanged}/>Expenses</label>
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
