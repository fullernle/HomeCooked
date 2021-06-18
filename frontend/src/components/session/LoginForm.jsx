import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./SessionForm.module.scss";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  handleEnter(e) {
    if (e.key === "Enter") this.handleSubmit(e);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.login(user).then(() => {
			if (this.props.errors.length < 1) {
        this.props.closeModal();
      } 
		})

    
  }

  demoUser() {
    let demoUser = { email: "test@test.com", password: "test123" };
    this.props.login(demoUser).then(() => {
      this.props.closeModal();
    });
  }

  renderErrors() {
    return (
      <ul>
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
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
					{this.props.success}
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
                onKeyPress={this.handleEnter}
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
                onKeyPress={this.handleEnter}
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
