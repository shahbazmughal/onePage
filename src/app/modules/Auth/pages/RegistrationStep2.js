import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";
import { useHistory, useLocation } from "react-router-dom";
import {Form} from "react-bootstrap";
import "../../../../_metronic/_assets/sass/pages/register/register.scss";
import { Range } from 'react-range';

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

function RegistrationStep2(props) {

  const history = useHistory();
  const location = useLocation();

  //console.log(location.state.name, location.state.email, location.state.password)

  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      )
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      console.log(values)
    },
  });

  const handleChange = name => event => {
		//console.log(name,event.target.value)
	    setState({ ...state, [name]: event.target.value});
      setValues({ ...values, [name]: event.target.value });
      console.log(values.package)
	};

  const [values, setValues] = useState({
    package:""
  });

  const [state, setState] = useState({
    package:"",
    pkgSliderBlk1: "hide",
    pkgSliderBlk2: "hide",
    pkgSliderBlk3: "hide",
    range1: [10000],
    range2: [6000],
    range3: [1000]
  });

  console.log(state.range1)

  const nextStep =()=> {
    console.log(values.package)
  }

  const freePlan =()=> {
    setState({...state, pkgSliderBlk1:"hide", pkgSliderBlk2: "hide", pkgSliderBlk3: "hide"});
    console.log("Free Plan")
  }

  const marketingPlan =()=> {
    setState({...state, pkgSliderBlk1:"show", pkgSliderBlk2: "hide", pkgSliderBlk3: "hide"});
    console.log("marketing Plan")
  }

  const transactionalPlan =()=> {
    setState({...state, pkgSliderBlk1:"hide", pkgSliderBlk2: "show", pkgSliderBlk3: "show"});
    console.log("transactional Plan")
  }

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      <div className="pb-13 pt-lg-0 pt-5">
        <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Package Information</h3>
        <p className="text-muted font-weight-bold font-size-h4">Select Package Below.</p>
      </div>

      <div key={`custom-radio`} className="mb-3">
        <div className="checkBlk" onClick={freePlan}>
          <Form.Check
            custom
            name="package"
            type="radio"
            id={`custom-1`}
            value="1"
            onChange={handleChange("package")}
            label={`Free Plan`}
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="checkBlk" onClick={marketingPlan}>
          <div onClick={marketingPlan}>
            <Form.Check
              custom
              name="package"
              type="radio"
              id={`custom-2`}
              value="2"
              onChange={handleChange("package")}
              label={`Marketing & Newsletters`}
            />
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={`package-inner-blk `+ state.pkgSliderBlk1}>
          <div className="form-group" id="marketing_slider">
            <h4 className="package_name">10k</h4> 
            <h5 className="emails1 db_email">{state.range1} <span>Email</span></h5>
            <Range
              step={10000}
              min={10000}
              max={20000}
              values={state.range1}
              onChange={(values) => setState({...state,range1: values })}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '90%',
                    borderRadius:'10px',
                    backgroundColor: '#ccc',
                    marginBottom:'35px',
                    marginLeft:'5%'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '36px',
                    width: '36px',
                    border:"4px solid #3699ff",
                    borderRadius:'30px',
                    backgroundColor: '#FFF'
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="checkBlk">
          <div onClick={transactionalPlan}>
            <Form.Check
              custom
              name="package"
              type="radio"
              id={`custom-3`}
              value="3"
              onChange={handleChange("package")}
              label={`Transactional & Marketing`}
            />
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className={`package-inner-blk blk2 `+ state.pkgSliderBlk2}>
          <div className="form-group" id="transaction_slider_pkg">
            <h4 className="package_name">Default Package</h4> 
            <h5 className="emails1 db_email">{state.range2} <span>Email</span></h5>
            <Range
              step={6000}
              min={6000}
              max={50000}
              values={state.range2}
              onChange={(values) => setState({...state,range2: values })}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '90%',
                    borderRadius:'10px',
                    backgroundColor: '#ccc',
                    marginBottom:'35px',
                    marginLeft:'5%'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '36px',
                    width: '36px',
                    border:"4px solid #3699ff",
                    borderRadius:'30px',
                    backgroundColor: '#FFF'
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className={`package-inner-blk blk3 `+ state.pkgSliderBlk3}>
          <div className="form-group" id="transaction_slider_contacts">
            <h4 className="package_name">Number of contacts</h4> 
            <h5 className="emails1 db_email">{state.range3}  <span>Contacts</span></h5>
            <Range
              step={1000}
              min={1000}
              max={199000}
              values={state.range3}
              onChange={(values) => setState({...state,range3: values })}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '10px',
                    width: '90%',
                    borderRadius:'10px',
                    backgroundColor: '#ccc',
                    marginBottom:'35px',
                    marginLeft:'5%'
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '36px',
                    width: '36px',
                    border:"4px solid #3699ff",
                    borderRadius:'30px',
                    backgroundColor: '#FFF'
                  }}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="reg2ActionBlk">
        <Link to="/auth/registration">
          <button
            type="button"
            className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
          >
            Back
          </button>
        </Link>
        <button
          type="button"
          className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 ml-4 pull-ight"
          onClick={nextStep}
        >
          <span>Next</span>
        </button>
      </div>
        
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(RegistrationStep2));
