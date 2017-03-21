/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions';
import AppView from '../views/AppView';

/**
 * The AppContainer renders exactly to a AppView, passing
 * in all of the props (actions, greeting, and children).
 */
const App = (props) => (
  <AppView {...props}/>
);

/**
 * If we want to divide the state tree into individual props attributes,
 * we do that here and return an object with the separated values.
 *
 * As a default, however, we're just mapping props directly to the state
 * tree.
 *
 * @param state The state of the application.
 * @returns {{state: *}}
 */
const mapStateToProps = (state) => ({
  greeting: state.BudgetReducer.get('greeting')
});

/**
 * Creates the actions object that will be accessible through "props.actions".
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
