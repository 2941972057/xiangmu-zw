/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
class NowLogin extends Component {
    render() {
        return (
            <div className="Login-box">
                <input type="text" onChange={this.props.change} className="username" placeholder="请输入户名"/>
                <input type="text" className="password" placeholder="请输入密码"/>
                <input type="submit" value='登录' onClick={this.props.click} className="Login-btn"/>
            </div>
        )
    }
}
export default NowLogin;