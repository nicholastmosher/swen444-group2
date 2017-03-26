/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
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
        <ul className="nav-inline">
          <li className="nav-inline-item">
            <h1 className="navbar-brand mb-0">MoneyMaid</h1>
          </li>
          <li className="nav-inline-item">
            <div className="dropdown">
              <a className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                {props.activePlan}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {props.plans.map((plan, id) => (
                    <a className="dropdown-item" href="/dashboard">{plan.get('name')}</a>
                ))}
              </div>
            </div>
          </li>
          <li className="nav-inline-item">
            <NavLink to="/dashboard/transactions" activeClass="active">Transactions</NavLink>
          </li>
          <li className="nav-inline-item">
            <NavLink to="/dashboard/graphs" activeClass="active">Graphs</NavLink>
          </li>
          <li className="nav-inline-item">
            <NavLink to="/dashboard/collaborators" activeClass="active">Collaborators</NavLink>
          </li>
          <li className="nav-inline-item-right">
            <li className="nav-inline-item">
              <NavLink to="/dashboard/notifications" activeClass="active">Notifications</NavLink>
            </li>
            <li className="nav-inline-item">
              <h1 className="navbar-brand mb-0">Username</h1>
            </li>
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
