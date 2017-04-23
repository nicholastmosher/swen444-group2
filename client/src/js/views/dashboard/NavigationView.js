/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../actions/AppActions';
import { selectPlan } from '../../actions/PlanActions';

/**
 * Displays the navigation bar at the top of each "dashboard" page.
 */
const NavigationView = (props) => (
  <div>
    <nav className="navbar budget-auth-navbar">
      <ul className="nav-inline">
        <li className="nav-inline-item">
          <NavLink to="/dashboard" activeClassName="active"><h1 className="navbar-brand mb-0">{props.title}</h1></NavLink>
        </li>
        <li className="nav-inline-item">
          <div className="dropdown">
            <a className="dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
              {props.planName}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {props.plans.valueSeq().map((plan) => (
                <button key={plan.id}
                        className="dropdown-item"
                        onClick={()=>props.selectPlan(plan.id)}>
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
          <NavLink to="/dashboard/graphs" activeClassName="active">Graphs and Reports</NavLink>
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
              <h1 className="navbar-brand mb-0"
                  onClick={props.logout}>{props.name}</h1>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
);

const mapStateToProps = ({AppReducer, PlanReducer}) => {
  const userId = AppReducer.getIn([ 'accounts', AppReducer.get('activeAccount'), 'user' ]);
  const user = AppReducer.getIn([ 'users', userId ]);
  return ({
    title: AppReducer.get('title'),
    userId,
    name: (user.firstName + ' ' + user.lastName),
    planName: PlanReducer.getIn([ 'plans', PlanReducer.get('activePlan'), 'name' ]),
    plans: PlanReducer.get('plans'),
  })
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logOut()),
  selectPlan: (id) => dispatch(selectPlan(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationView);
