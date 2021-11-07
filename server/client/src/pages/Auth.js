import React from "react";

export class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''};

        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
        // alert(`${this.state.login}, добро пожаловать!`);
        event.preventDefault();

    }

    onChangeLogin(event) {
        this.setState({login: event.target.value})
    }

    onChangePassword(event){
        this.setState({password: event.target.value})
    }


    render() {
         return (<form onSubmit={this.onSubmit}>
             <p>
                 <label>
                     Логин: <input type='text' autoComplete="off" name="login" value={this.state.login}
                                   onChange={this.onChangeLogin}/>
                 </label>
             </p>
             <p>
                 <label>
                     Пароль: <input type='text' autoComplete= "off"  name="password" value={this.state.password}
                                   onChange={this.onChangePassword}/>
                 </label>
             </p>

             <p>
                 <label>
                     <input type='submit' value="вход"/>
                 </label>

                 <label>
                     <input type='submit' value="регистрация"/>
                 </label>
             </p>
         </form>)

    }

}
