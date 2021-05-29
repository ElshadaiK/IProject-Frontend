import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Redirect } from "react-router-dom";

// components
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateSignature = value => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};
const validateInput = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 22) {
    error = maxLength;
  }
  return error;
};
function getFormattedDate() {
  let date = new Date()
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

const now = getFormattedDate()
export default class LoanForm1 extends Component {
  navigateToPage = () => {
    
    let element7 = document.getElementById('form-7')
    element7.style.display = "none";
    let element1 = document.getElementById('form-1')
    element1.style.display = "block";
    let self = this;
    setTimeout(function(){
      
    self.setState({ redirect: "admin/dashboard" });
    }, 100);
  
  }
  state = { redirect: null };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <>

        <div id='form-7'>
          <div className='border-b w-f mb-4 border-orange'>

          <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4">Declaration</h2>
          </div>
          <Formik
            initialValues={{

              agreementPlace: "MWICHE SKELTI",
              agreementDate: now,
              signatureOfParent: "",
              signatureOfStudent: "",
              acceptTerms: false
            }}
            validationSchema={Yup.object().shape({
              acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
            })}
            onSubmit={fields => {

              let element8 = document.getElementById('homee')
              element8.style.display = 'block';

            }}

          >
            {({ errors, touched, isValidating }) => (
              <div className="container">
                <div className="col-sm-12">
                  <Form>
                    <div className="flex flex-wrap mt-4">
                      <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                        <div className="form-group">
                          <label>Agreement Place: </label>
                          <Field
                            className="form-control"
                            type="text"
                            placeholder="MWICHE SKELTI"
                            name="agreementPlace"
                            validate={validateInput}
                          />
                          {errors.agreementPlace && touched.agreementPlace && errorMessage(errors.agreementPlace)}
                        </div>
                      </div>
                      <div className="w-full xl:w-6/12 px-4">
                        <div className="form-group">
                          <label>Agreement Date: </label>
                          <Field
                            className="form-control"
                            type="datetime"
                            placeholder="10, April, 2021"
                            name="agreementDate"
                            validate={validateInput}
                          />
                          {errors.agreementDate &&
                            touched.agreementDate &&
                            errorMessage(errors.agreementDate)}
                        </div>
                      </div>

                    </div>
                    <div className="flex flex-wrap mt-4">
                      <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                        <div className="form-group">
                          <label>Signature of Parent/Guardian</label>
                          <Field
                            className="form-control"
                            type="text"
                            placeholder="Parent's name"
                            name="signatureOfParent"
                            validate={validateSignature}
                          />
                          {errors.signatureOfParent && touched.signatureOfParent && errorMessage(errors.signatureOfParent)}
                        </div>
                      </div>
                      <div className="w-full xl:w-6/12 px-4">
                        <div className="form-group">
                          <label>Signature of Student</label>
                          <Field
                            className="form-control"
                            type="text"
                            placeholder="Student's name"
                            name="signatureOfStudent"
                            validate={validateSignature}
                          />
                          {errors.signatureOfStudent &&
                            touched.signatureOfStudent &&
                            errorMessage(errors.signatureOfStudent)}
                        </div>
                      </div>

                    </div>
                    <h2 className="text-blueGray-700 text-lg hidden lg:block font-bold mb-4 mt-4"
                    >Upload Documents: </h2>
                    <div className="form-group">
                      <Field
                        className="form-control"
                        type="file"
                        name="files"
                      />
                    </div>
                    <div className="form-group form-check">
                      <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                      <label htmlFor="acceptTerms" className="form-check-label inline-block ml-2 mt-3"> I hearby Accept all terms and conditions of
          <span className='font-bold'> Loan Agreement </span>and try to meet criteria of scholarship.
          </label>
                      <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group w-6/12">
                      <button className="w-10/12 mt-4 bg-blue-600 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                        type="submit">
                        Apply Loan

                  </button>
                      <div id='homee'> You application is submitted. You can now go to
                      <button
                          onClick={this.navigateToPage}


                          className="inline-block w-4/12 mt-4 text-blue-700 text-white  text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                        >
                          Home
                  </button>
                        {/* <button onClick={this.openPopupbox}>Click me</button>
            <PopupboxContainer /> */}
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            )}
          </Formik>
        </div>

      </>
    )
  }
}
