import React from "react";
import {Link} from 'react-router-dom';
import  '../style/Login.scss';




// Log In Component
export default function Login() {
  return (
    <section className="h-100 gradient-form">
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-9">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img
                      src={require("../style/logo.jpg")}
                      style={{ width: '155px'}}
                      alt="logo"
                    />
                    <h4 className="mt-3 mb-5 pb-1">We are The campbell Team</h4>
                  </div>
                  <form>
                    <p>Please login to your account</p>
                    <div className="form-outline mb-4">
                      <input type="email" id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                      <label className="form-label" >
                        Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        className="form-control"
                      />
                      <label className="form-label" >
                        Password
                      </label>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button
                        className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                        type="button"
                      >
                        Log in
                      </button>
                      <Link to="/resetpw" className="text-muted" href="#!">
                        Forgot password?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just Link company</h4>
                  <p className="small mb-0">
                   Campbell Decor is here  for your any events
                   decoration includes ballon garland,flower decrotion an.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}
