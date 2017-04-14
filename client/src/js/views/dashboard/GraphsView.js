/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Adam Audycki <apa7395@rit.edu>
 */
import React from 'react';
import DatePicker  from '../../components/DatePicker';
import { Chart } from 'react-google-charts';
import { Component } from 'react';
import { Map } from 'immutable';

class GraphsView extends Component {
    constructor() {
        super();
        this.state = Map({
            graph: '',
        });
    }

    onSiteChanged(e) {
        console.log(e);
        this.state.set('graph', e.target.value);
    }

    render() {
        return (

            <div className="container-fluid">
                <h1>Graphs and Reports</h1>
            <div className="row">

                <div id="config_sidebar" className="col-md-3">
                    <h2>Graph Configurations</h2>
                    <h3>Type of Graph</h3>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="BarChart"/>Bar Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="LineChart"/>Line Graph</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="PieChart" onChange={this.onSiteChanged}/>Pie
                            Chart</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="ScatterChart"/>Scatter Plot</label>
                    </div>

                    <h3>Filter by Date</h3>
                    <DatePicker />

                    <h3>Filter</h3>
                    <div className="radio">
                        <label><input type="radio" name="optradio"/>Income</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" defaultChecked/>Expenses</label>
                    </div>
                    <div id="generateReport">
                        <button id="genReport" className="btn btn-success">Generate Report</button>
                    </div>
                </div>

                <div className="col-md-9">
                    <Chart
                        chartType="PieChart"
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
                        graph_id="PieChart"
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default GraphsView;
