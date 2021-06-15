import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./SessionForm.module.scss";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
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
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
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
      <div className="signup-form-container">
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
              {/* <span className={styles.ModalInput}>Email:</span> */}
              <input
                className={styles.FormInput}
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
            </label>

            <label>
              {/* <span className={styles.ModalInput}>Username:</span> */}
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className={styles.FormInput}
								placeholder="Username"
              />
            </label>

            <label>
              {/* <span className={styles.ModalInput}>Password:</span> */}
              <input
                className={styles.FormInput}
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </label>
            <label>
              {/* <span className={styles.ModalInput}>Confirm Password:</span> */}
              <input
                className={styles.FormInput}
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
            </label>
            <br />
            <input class={styles.SessionSubmit} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
