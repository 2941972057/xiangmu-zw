/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
class NoLogin extends Component {
    render() {
        return (
            <div className="Login-box">
                <div className="LoginState">请登录</div>
                <input type="submit" value='登录' onClick={this.props.click} className="Login-btn"/>
            </div>
        )
    }
}
export default NoLogin;