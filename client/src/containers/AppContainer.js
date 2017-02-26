/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppView from '../views/AppView';
import * as Actions from '../actions/Actions';

/**
 * Lambda takes an object with data to pass into the top-level App View.
 * @param greeting The "greeting" entry in the state tree.
 * @param actions The references to action functions.
 */
const App = ({ greeting, actions }) => (
    <AppView actions={actions}
             greeting={greeting}
    />
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
    greeting: state.get('greeting')
});

/**
 * Creates the actions object that will be accessible through "props.actions".
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions, dispatch),
});

/**
 * Creates a React component from the state mapper, dispatch mapper, and App object.
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);
