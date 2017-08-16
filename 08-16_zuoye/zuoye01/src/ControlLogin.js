/**
 * Created by dllo on 17/8/16.
 */
import React, {Component} from 'react';
import NoLogin from './NoLogin';
import NowLogin from './NowLogin';
import ReadLogin from './ReadLogin';
import './Login.css';
class ControlLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginState: '1',
            username: ''
        }
    }

    LoginClick1 = ()=> {
        this.setState({
            loginState: '2'
        })
    };
    LoginClick2 = ()=> {
        var isState = this.state.username;
        if (isState === '' || isState.indexOf(' ') !== -1) {
            alert('请输入正确的用户名')
        } else {
            this.setState({
                loginState: '3',
            })
        }
    };
    LoginOutClick = ()=> {
        this.setState({
            loginState: '1',
            username: '',
            isLogin: false
        })
    };
    Change = (e)=> {
        this.setState({
            username: e.target.value
        })
    };

    render() {
        var state = this.state.loginState;
        var username = this.state.username;
        if (state === '1') {
            return <NoLogin click={this.LoginClick1}/>
        } else if (state === '2') {
            return <NowLogin click={this.LoginClick2} change={this.Change}/>
        } else if (state === '3') {
            return <ReadLogin click={this.LoginOutClick} name={username}/>
        }
    }
}
export default ControlLogin;