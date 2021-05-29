import React from "react";
import { Formik, Form, Field } from "formik";


// components
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const errorMessage = error => {
  return <div className="invalid-feedback">{error}</div>;
};
const validateGender = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 12) {
    error = maxLength;
  }
  return error;
};
const validateName = value => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length > 22) {
    error = maxLength;
  }
  return error;
};

const validateEmail = value => {
  let error;
  if (!value) {
    error = required;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validateMobileNumber = value => {
  let error;
  if (value.length > 12) {
    error = maxLength;
  }
  return error;
};

const validateNationality = value => {
  let error;
  if (!value) {
    error = required;
  }
  return error;
};

const validateDateOfRegistration = value => {
  let error;
  if (!value) {
    error = required;
  } else if (
    !/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/i.test(
      value
    )
  ) {
    error = "Please use the following format MM/DD/YYYY";
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
export default function LoanForm1() {
  const initialValues = {
    name: "Jenna Stones",
    gender: "",
    mobilenumber: "+260 988877",
    email: "banda@gmail.com",
    parentsGuardian: "Mary Banda",
    nationality: "Zambian",
    DateofRegistration: now,
  }

  function onSubmit(values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element1 = document.getElementById('form-1')
    element1.style.display = "none";
    let element2 = document.getElementById('form-2')
    element2.style.display = "block";
  }
  return (
    <>

      <div id='form-1'>
        <div className='px-4'>
          <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4"
          >Student Loan Agreement form:</h2>

        </div>
        <p className="mb-12 px-4">An agreement made and entered between the higher Education Loans and Scholarship Board (here in called the loan board) of the first part.</p>
        <Formik {...{ initialValues, onSubmit }}

        >
          {({ errors, touched, isValidating }) => (
            <div className="container">
              <div className="col-sm-12">
                <Form>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-4/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Student Name: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Jenna Stones"
                          name="name"
                          validate={validateName}
                        />
                        {errors.name && touched.name && errorMessage(errors.name)}
                      </div>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                      <div className="form-group">
                        <label>Gender: </label>
                        <Field
                          className="form-control"
                          as="select" name="gender">
                          <option className="form-control" value="female">Female</option>
                          <option className="form-control" value="male">Male</option>
                          validate={validateGender}
                        </Field>
                        {errors.gender &&
                          touched.gender &&
                          errorMessage(errors.gender)}
                      </div>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                      <div className="form-group">
                        <label>Email: </label>
                        <Field
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="banda@gmail.com"
                          validate={validateEmail}
                        />
                        {errors.email && touched.email && errorMessage(errors.email)}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-full xl:w-4/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Mobile No: </label>
                        <Field
                          className="form-control"
                          type="tel"
                          placeholder="+260 988877"
                          name="mobilenumber"
                          validate={validateMobileNumber}
                        />
                        {errors.mobilenumber &&
                          touched.mobilenumber &&
                          errorMessage(errors.mobilenumber)}
                      </div>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                      <div className="form-group">
                        <label>Parents/Guardian: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Mary Banda"
                          name="parentsGuardian"
                        />
                      </div>
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                      <div className="form-group">
                        <label>Nationality: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Zambian"
                          name="nationality"
                          validate={validateNationality}
                        />
                        {errors.nationality &&
                          touched.nationality &&
                          errorMessage(errors.nationality)}
                      </div>

                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6">
                    <div className="w-full xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Date of Registration: </label>
                        <Field
                          className="form-control"
                          type="datetime"
                          placeholder="10 Jun, 2020"
                          name="DateofRegistration"
                          validate={validateDateOfRegistration}
                        />
                        {errors.DateofRegistration &&
                          touched.DateofRegistration &&
                          errorMessage(errors.DateofRegistration)}
                      </div>
                    </div>
                  </div>
                  <p className="mt-12 px-4"><span className="font-semibold">Now therefore</span>, in consideration of the undertaking by the student here in contained, the board grants  to the student such a loan by making payment for the following:</p>
                  <div>
                    <div className="mt-12 bg-orange-light #050505 px-4 p-4 rounded-lg"><p><span className="font-bold">Note: </span>Any amount payable to the student is determined by the board at the time of application, and is not
                negotiable by the student or students union</p></div>
                  </div>
                  <div className="form-group w-6/12">
                    <button className="w-10/12 mt-4 bg-blue-600 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
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
