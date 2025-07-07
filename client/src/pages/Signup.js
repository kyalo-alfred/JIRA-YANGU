import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    password: '',
    file: null,
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add signup logic
    alert('Signup submitted!');
  };

  return (
    <div className="signup-container main">
      <div className="navbar"></div>
      <div className="content">
        <div className="form">
          <h2>SIGN UP HERE!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter first name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Enter last name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmEmail">Confirm Email address</label>
              <input
                type="email"
                className="form-control"
                id="confirmEmail"
                name="confirmEmail"
                placeholder="Confirm email address"
                value={form.confirmEmail}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file">Example file input</label>
              <input
                type="file"
                className="form-control-file"
                id="file"
                name="file"
                onChange={handleChange}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checked"
                name="checked"
                checked={form.checked}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="checked">Check me out</label>
            </div>
            <button className="btnn" type="submit">Sign up to get started!</button>
          </form>
          <p className="link">Already have an account?<br />
            <a href="#" className="button">Log in</a> here
          </p>
          <p className="liw">Log in to our social media</p>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-skype"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup; 