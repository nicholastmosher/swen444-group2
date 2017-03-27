/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as BudgetActions from '../../actions/BudgetActions';

/**
 * Displays the navigation bar at the top of each "dashboard" page.
 */
const NavigationView = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <ul className="nav-inline">
        <li className="nav-inline-item">
            <NavLink to="/dashboard" activeClassName="active"><h1 className="navbar-brand mb-0">{props.title}</h1></NavLink>
          <h1 className="navbar-brand mb-0">{props.title}</h1>
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
                  <button className="dropdown-item"
                          onClick={()=>props.actions.selectPlan(id)}>
                    {plan.get('name')}
                  </button>
              ))}
            </div>
          </div>
        </li>
        <li className="nav-inline-item">
          <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
        </li>
        <li className="nav-inline-item">
          <NavLink to="/dashboard/transactions" activeClassName="active">Transactions</NavLink>
        </li>
        <li className="nav-inline-item">
          <NavLink to="/dashboard/graphs" activeClassName="active">Graphs</NavLink>
        </li>
        <li className="nav-inline-item">
          <NavLink to="/dashboard/collaborators" activeClassName="active">Collaborators</NavLink>
        </li>
        <li className="nav-inline-item-right">
          <ul>
            <li className="nav-inline-item">
              <NavLink to="/dashboard/notifications" activeClassName="active">Notifications</NavLink>
            </li>
            <li className="nav-inline-item">
              <h1 className="navbar-brand mb-0">Username</h1>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
);

const mapStateToProps = ({BudgetReducer}) => ({
  activePlan: BudgetReducer.get('plans').get(BudgetReducer.get('activePlan')).get('name'),
  plans: BudgetReducer.get('plans'),
  title: BudgetReducer.get('title'),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(BudgetActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
