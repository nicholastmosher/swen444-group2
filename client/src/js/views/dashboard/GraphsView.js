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
       // const selectedOption = 'PieChart';
        GraphsView.state = {
            selectedOption : 'PieChart'
        };
        this.onSiteChanged = this.onSiteChanged.bind(this);
    }
    onSiteChanged(event) {
        console.log(event.target.value);
        //this.selectedOption = chart;
        this.setState({
            selectedOption: event.target.value
        });
        console.log(this);
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
                        <label><input type="radio" name="optradio" value="BarChart" onChange={this.onSiteChanged}/>Bar Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="LineChart" onChange={this.onSiteChanged}/>Line Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="PieChart" onChange={this.onSiteChanged}/>PieChart</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="ScatterChart" onChange={this.onSiteChanged}/>Scatter Plot</label>
                    </div>

                    <h3>Filter by Date</h3>
                    <DatePicker />

                    <h3>Filter</h3>
                    <div className="radio">
                        <label><input type="radio" name="radio"/>Income</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="radio" defaultChecked/>Expenses</label>
                    </div>
                    <div id="generateReport">
                        <button id="genReport" className="btn btn-success">Generate Report</button>
                    </div>
                </div>

                <div className="col-md-9">
                    <Chart
                        chartType={this.selectedOption}
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
                        graph_id={this.selectedOption}
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default GraphsView;
