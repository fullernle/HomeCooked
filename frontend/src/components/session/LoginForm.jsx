import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./SessionForm.module.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
		this.demoUser = this.demoUser.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user).then(() => {
      this.props.closeModal()
      this.props.history.push("/");
    });
  }

  demoUser() {
    let demoUser = { email: "test@test.com", password: "test123" };
    this.props.login(demoUser).then(() => {
      this.props.closeModal();
      this.props.history.push("/");
    });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className={styles.LoginFormWrapper}>
        <div onClick={this.props.closeModal} className={styles.CloseX}>
          x
        </div>
        <form className={styles.FormBox} onSubmit={this.handleSubmit}>
          <header className={styles.ModalHeader}>
            <span className={styles.ModalTitle}>{this.props.formType}</span>
            <span>{this.props.otherForm}</span>
          </header>

          {this.renderErrors()}
          <div className={styles.Form}>
            <label>
              <span className={styles.ModalInput}>Email:</span>
              <br />
              <input
                className={styles.FormInput}
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </label>
            <br />
            <label>
              <span className={styles.ModalInput}>Password:</span>
              <br />
              <input
                className={styles.FormInput}
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </label>
            <br />
            <input
              className={styles.SessionSubmit}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
        {this.props.formType === "Sign In" ? (
          <button className={styles.DemoButton} onClick={this.demoUser}>
            Demo Login
          </button>
        ) : null}
      </div>
    );
  }
}

export default withRouter(LoginForm);
