/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 * @author Zach Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavigationPlanView from './NavigationPlanView';
import AddPlanModal from './AddPlanModal';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
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
              Financial Plans
            </a>
            <AddPlanModal modalId="addPlanModal" />
            <ConfirmDeleteModal modalId="confirmDeletePlan"
                                message="Deleting a plan cannot be undone."/>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button className="dropdown-item" data-toggle="modal" data-target="#addPlanModal">
                <span className="glyphicon-plus">+ </span>
                New Plan
              </button>
              {props.plans.valueSeq().map((plan) => (
                  <NavLink key={plan.id} to="/dashboard" activeClassName="active"><NavigationPlanView plan={plan} modalId="confirmDeletePlan"/></NavLink>
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
              <div className="dropdown">
                <a className="dropdown-toggle"
                   role="button"
                   data-toggle="dropdown">
                  <h1 className="navbar-brand mb-0">{props.name}</h1>
                </a>
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={props.logout}>
                    Logout
                  </button>
                </div>
              </div>
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
