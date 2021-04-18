/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Switch, Redirect } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { ContentRoute } from "../../../../_metronic/layout";
import Login from "./Login";
import Registration from "./Registration";
import RegistrationStep2 from "./RegistrationStep2";
import ForgotPassword from "./ForgotPassword";
import "../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss";

export function AuthPage() {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        {/*begin::Login*/}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/*begin::Aside*/}
          <div
            className="login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat  pt-35 text-center"
            style={{
              backgroundColor: "#F2C98A",
            }}
          >
            {/*begin: Aside Container*/}
            <div className="d-flex flex-row-fluid flex-column justify-content-between">
              {/* start:: Aside header */}
              <Link to="/" className="flex-column-auto mt-5 pb-lg-0 pb-10 mb-10">
                <img
                  alt="Logo"
                  className="max-h-70px"
                  src={toAbsoluteUrl("/media/logos/logo-letter-1.png")}
                />
              </Link>
              {/* end:: Aside header */}

              <h3 className="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style={{color: "#986923"}}>
                Discover Amazing Metronic 
						    <br />with great build tools
              </h3>

              <div 
                className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" 
                style={{backgroundImage: "url(/media/images/login-visual-1.svg)"}}
              >
              </div>
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            
            {/* begin::Content body */}
            <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">
              <Switch>
                <ContentRoute path="/auth/login" component={Login} />
                <ContentRoute
                  path="/auth/registration"
                  component={Registration}
                />
                <ContentRoute
                  path="/auth/registration-step2"
                  component={RegistrationStep2}
                />
                <ContentRoute
                  path="/auth/forgot-password"
                  component={ForgotPassword}
                />
                <Redirect from="/auth" exact={true} to="/auth/login" />
                <Redirect to="/auth/login" />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
              <div className="text-dark-50 font-size-lg font-weight-bolder mr-10">
                &copy; 2021  <Link to="/" className="text-dark-75 text-hover-primary pl-2">Mumara</Link>
              </div>
              <div className="d-flex order-1 order-sm-2">
                <Link to="/terms" className="text-primary font-weight-bolder font-size-lg">
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="text-primary ml-5 font-weight-bolder font-size-lg"
                >
                  Legal
                </Link>
                <Link
                  to="/terms"
                  className="text-primary ml-5 font-weight-bolder font-size-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
