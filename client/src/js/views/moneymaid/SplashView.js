/**
 * @author Zachary Moran <zjm1065@rit.edu>
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RedirectIf from '../../components/RedirectIf';

const SplashView = (props) => (
  <RedirectIf condition={props.loggedIn} from="/" to="/dashboard">
    <div className="mm-splash">
      <div className="text-center parent">
        <div className="child">
          <h1>MoneyMaid</h1>
          <h3>Clean Up Your Finances Today!</h3><br/>
          <button className="button button-round" onClick={props.click}>Get Started</button>
        </div>
      </div>
    </div>
  </RedirectIf>
);

const mapStateToProps = ({AppReducer}) => ({
  loggedIn: AppReducer.get('userLoggedIn'),
});

const mapDispatchToProps = (dispatch) => ({
  click: () => dispatch(push('/auth'))
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashView);
