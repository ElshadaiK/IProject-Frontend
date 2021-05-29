import React from "react";
import { Formik, Form, Field } from "formik";


// components
const required = "This field is required";
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateAddress = value => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

const validateFile = value => {
    let error;
    if (!value) {
      error = required;
    }
    return error;
  };


export default function LoanForm3() {
  const initialValues = {
    town: "Lusaka",
    province: "Lusaka",
    residentialAddress: "Liaban South Nganji House 10538",
    nrc: "",
    passport: "",
    liscence: "",
  }

  function onSubmit(values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element3 = document.getElementById('form-3')
    element3.style.display="none";
    let element4 = document.getElementById('form-4')
    element4.style.display="block";
  }
  return (
    <>

      <div id='form-3'>
      <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4">Identification document: </h2>
        <Formik {...{ initialValues, onSubmit }}

        >
          {({ errors, touched, isValidating }) => (
            <div className="container">
              <div className="col-sm-12">
                <Form>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full  xl:mb-0 px-4">
                      <div className="form-group">
                        <label>NRC</label>
                        <Field
                          className="form-control"
                          type="file"
                          name="nrc"
                        />
                        {errors.nrc &&
                          touched.nrc &&
                          errorMessage(errors.nrc)}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="form-group">
                        <label>Driving Liscence</label>
                        <Field
                          className="form-control"
                          type="file"
                          name="liscence"
                        />
                        {errors.liscence &&
                          touched.liscence &&
                          errorMessage(errors.liscence)}
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="form-group">
                        <label>Passport</label>
                        <Field
                          className="form-control"
                          type="file"
                          name="passport"
                          validate={validateFile}
                        />
                        {errors.passport &&
                          touched.passport &&
                          errorMessage(errors.passport)}
                      </div>
                    </div>
                  </div>
                 
                <h2 className="text-blueGray-700 text-lg  hidden lg:block font-semibold mt-4 mb-4"
        >Address details: </h2>
        
                 <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Town/District</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Lusaka"
                          name="town"
                          validate={validateAddress}
                        />
                        {errors.town &&
                          touched.town &&
                          errorMessage(errors.town)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Province</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Lusaka"
                          name="province"
                          validate={validateAddress}
                        />
                        {errors.province &&
                          touched.province &&
                          errorMessage(errors.province)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Residential Address</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Liaban South Nganji House 10538"
                          name="residentialAddress"
                          validate={validateAddress}
                        />
                        {errors.residentialAddress &&
                          touched.residentialAddress &&
                          errorMessage(errors.residentialAddress)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group w-6/12">
                    <button className="w-10/12 mt-4 bg-blue-600 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                      type="submit">
                      Next
                </button>
                  </div>
                </Form>
              </div>
            </div>
          )}
        </Formik>
      </div>

    </>
  );
}
