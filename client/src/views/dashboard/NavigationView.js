/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import {connect} from "react-redux";

/**
 * Displays the navigation bar at the top of each "dashboard" page.
 */
const NavigationView = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <ul className="nav navbar-nav">
        <li className="nav-item btn-group">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button">
              {props.activePlan}
            </button>
          </div>
          <div className="dropdown-menu">
            {props.plans.map((plan, id) => {
              console.log(id);
              console.log(plan);
              return (
                <a className="dropdown-item">{plan.get('name')}</a>
              )
            })}
          </div>
        </li>
      </ul>
    </nav>
  </div>
);

const mapStateToProps = ({BudgetReducer}) => ({
  activePlan: BudgetReducer.get('plans').get(BudgetReducer.get('activePlan')).get('name'),
  plans: BudgetReducer.get('plans'),
});

export default connect(mapStateToProps)(NavigationView);
