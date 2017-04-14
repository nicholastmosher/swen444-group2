/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Adam Audycki <apa7395@rit.edu>
 */
import React from 'react';

const GraphsView = (props) => (
  <div className="mainView">
    <h1>Graphs and Reports</h1>
    <div id="config_sidebar" className="sidebar box">
        <h2>Graph Configurations</h2>
        <h3>Type of Graph</h3>
        <div className="radio">
            <label><input type="radio" name="optradio"/>Bar Graph</label>
        </div>
        <div className="radio">
            <label><input type="radio" name="optradio"/>Line Graph</label>
        </div>
        <div className="radio">
            <label><input type="radio" name="optradio"/>Pie Chart</label>
        </div>
        <div className="radio">
            <label><input type="radio" name="optradio"/>Scatter Plot</label>
        </div>

        <h3>Filter by Date</h3>
            <input type="text" name="startDate" placeholder="MM/DD/YYYY"/><br/>
            <input type="text" name="endDate" placeholder="MM/DD/YYYY"/><br/>

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

    <div id="graph">
      <img src={'https://docs.oracle.com/javase/8/javafx/user-interface-tutorial/img/pie-sample.png'}/>
    </div>

    <div id="graphKey" className="box">
        <ul className="list-group">
            <li className="list-group-item color1">Food</li>
            <li className="list-group-item color2">Gas</li>
            <li className="list-group-item color3">Car Payment</li>
            <li className="list-group-item color4">College Payment</li>
            <li className="list-group-item color5">Utilities</li>
        </ul>
    </div>
  </div>
);

export default GraphsView;
