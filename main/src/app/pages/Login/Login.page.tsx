import React, { Component } from 'react';
import { IonContent, IonList, IonPage, IonInput, IonButton, IonItem, IonLabel, IonRow, IonCol, IonToggle, IonImg, IonIcon } from '@ionic/react';
import PropTypes from 'prop-types'
import './Login.page.scss';

const props = {
    userData: PropTypes.any,
    loading: PropTypes.bool,
    loginError: PropTypes.bool,
    handleSubmit: PropTypes.func.isRequired
}

type propTypes = PropTypes.InferProps<typeof props>;

class LoginPage extends Component<propTypes> {

    state = {
        username: '',
        password: '',
        rememberme: false
    }
    constructor(props: any) {
        super(props)
        window.addEventListener('keyboardWillShow',this.keyboardshowHandler);
        window.addEventListener('keyboardWillHide',this.keyboardhideHandler);
    }
    componentDidMount() {
        if (!this.props.userData || !this.props.userData.rememberme)
            return;
        this.setState((state, props) => ({
            username: props.userData.username,
            password: props.userData.password,
            rememberme: props.userData.rememberme
        }))
    }


    handleChange = (event: any) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    onRememberMe = (event: any) => {
        console.log(event);
        const { name, checked } = event.target;
        this.setState({
            [name]: checked
        });
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const { username, password, rememberme } = this.state;
        this.props.handleSubmit(username, password, rememberme)
    }

    showPassword = () => {
        let element = document.getElementsByName("password")[0];
        if (element instanceof HTMLElement) {
            if (element.getAttribute("type") === "password") {
                element.setAttribute("type", "text");
            } else {
                element.setAttribute("type", "password");
            }
        }
    }
    keyboardshowHandler = () => {
        const headerDiv = document.getElementsByClassName("login_logo_container")[0];
        headerDiv.setAttribute("class", "login_logo_container login_logo_container_change");

    }
    keyboardhideHandler = () => {
        const headerDiv = document.getElementsByClassName("login_logo_container")[0];
        headerDiv.setAttribute("class", "login_logo_container");
    }
    render() {
        return (
            <IonPage className="root-page">
                <div className="login_logo_container">
                    <img alt="logo" id="header_logo" src="assets/icon/logo-white.png"></img>
                </div>
                <IonContent class="background login_content_padding">
                    <div className="login-contianer">
                        <form className="login-form" onSubmit={(event) => this.handleSubmit(event)}>
                            <IonList class="login_form_feild" mode="ios">
                                <IonItem mode="ios" class={`ion-no-padding ${this.props.loginError ? 'login_error' : null}`}>
                                    <IonLabel mode="ios" position="floating">Enter Your Email ID</IonLabel>
                                    <IonInput className="cts-form-control" name="username" type="text" value={this.state.username} onKeyUp={(event) => this.handleChange(event)} onBlur={(event) => this.handleChange(event)} />
                                    <IonImg slot="end" alt="logo" src="assets/icon/user.svg" className="login_input_icon" />
                                </IonItem>
                                <IonItem mode="ios" class={`ion-no-padding ${this.props.loginError ? 'login_error' : null}`}>
                                    <IonLabel mode="ios" position="floating">Enter Your Password</IonLabel>
                                    <IonInput className="cts-form-control" name="password" type="password" value={this.state.password} onKeyUp={(event) => this.handleChange(event)} onBlur={(event) => this.handleChange(event)} />
                                    <IonImg slot="end" alt="logo" src="assets/icon/pass-icon.svg" item-right className="login_input_icon" onClick={() => this.showPassword()} />
                                </IonItem>
                            </IonList>
                            <IonRow class="login_remember_link">
                                <IonCol>
                                    <IonRow>
                                        <IonCol size="3">
                                            <IonToggle checked={this.state.rememberme} mode="ios" name="rememberme" onIonChange={this.onRememberMe}>
                                            </IonToggle>
                                        </IonCol>
                                        <IonCol size="9"><span className="login_remember_text"> Remember me</span></IonCol>
                                    </IonRow>
                                </IonCol>
                                <IonCol> <span>Forgot Password?</span></IonCol>
                            </IonRow>

                            {this.props.loginError && <div id="errorMsg"><IonIcon src="assets/icon/error_icon.svg"></IonIcon> InCorrect Email or Credential</div>}

                            <div className="button-container ion-text-center">
                                <IonButton class={`cts-btn  ${!this.state.username || this.state.password.length<3 ? 'disabled-login' : 'login-btn'}`} data-kind="primary" type="submit" disabled={!this.state.username || !this.state.password} expand="block">LOGIN</IonButton>
                            </div>
                        </form>
                        <div className="login_devider">
                            <hr className="login_devider_line" /><div className="login_devider_text">OR</div>
                            <hr className="login_devider_line" />
                        </div>
                    </div>

                    <div className="login_alternate">
                        <IonButton class="login-btn login_withmobile_btn" data-kind="primary" type="submit" expand="block">LOGIN WITH MOBILE NUMBER</IonButton>
                        <div className="sign_up">
                            <span className="signup_link"> New to Schneider?  <a href="https://schneider.com">Sign Up</a></span>
                        </div>
                    </div>
                </IonContent>
            </IonPage>
        );
    }
}

export default LoginPage;