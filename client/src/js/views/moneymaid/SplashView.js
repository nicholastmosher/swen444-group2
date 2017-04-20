/**
 * @author Zachary Moran <zjm1065@rit.edu>
 */
import React from 'react';

var SplashView = React.createClass({

    handleOnClick: function() {
        window.location = '#/auth/';
    },

    render: function() {
        return (
            <div className="mm-splash">
                <div className="text-center parent">
                    <div className="child">
                        <h1>MoneyMaid</h1>
                        <h3>Clean Up Your Finances Today!</h3><br/>
                        <button className="button button-round" onClick={ this.handleOnClick }>Get Started</button>
                    </div>
                </div>
            </div>
        );
    }
});

export default SplashView;

