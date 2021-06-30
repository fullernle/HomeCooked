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
    };

    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.openModal();
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleEnter(e) {
    if (e.key === "Enter") this.handleSubmit(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);

    this.props.signup(user);
  }

  renderErrors() {
    return (
      <ul>
				{console.log(this.props.errors)}
        {Object.values(this.props.errors).map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.isSignedIn) {
      this.props.openModal();
    }

		const { errors } = this.props;
    return (
      <div className={styles.SignupFormWrapper}>
        <div onClick={this.props.closeModal} className={styles.CloseX}>
          x
        </div>
        <form className={styles.FormBox} onSubmit={this.handleSubmit}>
          <header className={styles.ModalHeader}>
            <span className={styles.ModalTitle}>{this.props.formType}</span>
            <span>{this.props.otherForm}</span>
          </header>

          {/* {this.renderErrors()} */}
          <div className={styles.Form}>
            <label>
              <span className={styles.Errors}>{errors.email}</span>
              <input
                className={styles.FormInput}
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                onKeyPress={this.handleEnter}
              />
            </label>

            <label>
              <span className={styles.Errors}>{errors.username}</span>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className={styles.FormInput}
                placeholder="Username"
                onKeyPress={this.handleEnter}
              />
            </label>

            <label>
              <span className={styles.Errors}>{errors.password}</span>
              <input
                className={styles.FormInput}
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                onKeyPress={this.handleEnter}
              />
            </label>
            <label>
              <span className={styles.Errors}>{errors.password2}</span>
              <input
                className={styles.FormInput}
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
                onKeyPress={this.handleEnter}
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
