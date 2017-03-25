/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

/**
 * Displays the navigation bar at the top of each "dashboard" page.
 */
const NavigationView = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
              {props.activePlan}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {props.plans.map((plan, id) => (
                <button className="dropdown-item">{plan.get('name')}</button>
              ))}
            </div>
          </div>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/transactions" activeClassName="active">Transactions</NavLink>
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
