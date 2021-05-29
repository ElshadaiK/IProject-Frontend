import React from "react";
import { Formik, Form, Field } from "formik";


// components
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
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

export default function LoanForm4() {
  const initialValues = {
    bankName: "ZANACO",
    accountName: "XAPIT",
    branch: "DIGITAL",
    accountNumber: "9390005654049",
    program: "POST GRADUATION",
    year: "",
    id: "2019030276",
  }

  function onSubmit(values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element4 = document.getElementById('form-4')
    element4.style.display="none";
    let element5 = document.getElementById('form-5')
    element5.style.display="block";
  }
  return (
    <>

      <div id='form-4'>
      
      <div className='border-b w-f mb-4 border-orange'>
      <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4"  >Student Bank Details:</h2>
        
      </div>
        <Formik {...{ initialValues, onSubmit }}

        >
          {({ errors, touched, isValidating }) => (
            <div className="container">
              <div className="col-sm-12">
                <Form>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Bank Name: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="ZANACO"
                          name="bankName"
                          validate={validateInput}
                        />
                        {errors.bankName && touched.bankName && errorMessage(errors.bankName)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Account Name: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="XAPIT"
                          name="accountName"
                          validate={validateInput}
                        />
                        {errors.accountName &&
                          touched.accountName &&
                          errorMessage(errors.accountName)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Branch Name: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="DIGITAL"
                          name="branch"
                          validate={validateInput}
                        />
                        {errors.branch && touched.branch && errorMessage(errors.branch)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Account Number: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="9390005654049"
                          name="accountNumber"
                          validate={validateInput}
                        />
                        {errors.accountNumber &&
                          touched.accountNumber &&
                          errorMessage(errors.accountNumber)}
                      </div>
                    </div>
                    
                  </div>
                  <h2 className="text-blueGray-700 mt-6 text-lg uppercase hidden lg:block font-semibold mb-4"
        >Student Details:</h2>
        
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Programme of Study</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="POST GRADUATION"
                          name="program"
                          validate={validateInput}
                        />
                        {errors.program && touched.program && errorMessage(errors.program)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Year of Study</label>
                        <Field
                          className="form-control"
                          as="select" name="year">
                          <option className="form-control" value="first">FIRST YEAR</option>
                          <option className="form-control" value="second">SECOND YEAR</option>
                          <option className="form-control" value="third">THIRD YEAR</option>
                          <option className="form-control" value="fourth">FOURTH YEAR</option>
                          validate={validateInput}
                        </Field>
                        {errors.year &&
                          touched.year &&
                          errorMessage(errors.year)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    
                    <div className="w-full px-4">
                      <div className="form-group">
                        <label>Student identification Number:: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="2019030276"
                          name="id"
                          validate={validateInput}
                        />
                        {errors.id &&
                          touched.id &&
                          errorMessage(errors.id)}
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
