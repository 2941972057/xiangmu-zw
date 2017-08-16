/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
class ReadLogin extends Component {
    render() {
        return (
            <div className="Login-box">
                <div className="LoginState">用户: {this.props.name}</div>
                <input type="submit" onClick={this.props.click} value='退出' className="Login-btn"/>
            </div>
        )
    }
}
export default ReadLogin;