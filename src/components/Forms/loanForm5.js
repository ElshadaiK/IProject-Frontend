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
  } else if (value.length > 30) {
    error = maxLength;
  }
  return error;
};

export default function LoanForm5() {
  const initialValues = {
    instituteName: "University of Zambia",
    faculity: "Science",
    yearOfAdmission: "",
    course: "BSc with Education degree",
    duration: "",
    fee: "K23,462.00",
    accomodation: "K1000",
    book: "0",
    project: "0",
    yearsFinanced: "",
    repayment: "",
  }

  function onSubmit(values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element5 = document.getElementById('form-5')
    element5.style.display="none";
    let element6 = document.getElementById('form-6')
    element6.style.display="block";
  }
  return (
    <>

      <div id='form-5'>
      <div className='border-b w-f mb-4 border-orange'>
      
      <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4">Detail of Institute:</h2>
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
                        <label>Institute Name: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="University of Zambia"
                          name="instituteName"
                          validate={validateInput}
                        />
                        {errors.instituteName && touched.instituteName && errorMessage(errors.instituteName)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Faculity: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Science"
                          name="faculity"
                          validate={validateInput}
                        />
                        {errors.faculity &&
                          touched.faculity &&
                          errorMessage(errors.faculity)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Year of admission</label>
                        <Field
                          className="form-control"
                          as="select" name="year">
                          <option className="form-control" value="2021">2021</option>
                          <option className="form-control" value="2020">2020</option>
                          <option className="form-control" value="2019">2019</option>
                          <option className="form-control" value="2018">2018</option>
                          validate={validateInput}
                        </Field>
                        {errors.yearOfAdmission && touched.yearOfAdmission && errorMessage(errors.yearOfAdmission)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Course Admitted for: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Bachelor of Science with Education degree"
                          name="course"
                          validate={validateInput}
                        />
                        {errors.course &&
                          touched.course &&
                          errorMessage(errors.course)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    
                    <div className="w-full px-4">
                      <div className="form-group">
                        <label>Course Duration</label>
                        <Field
                          className="form-control"
                          as="select" name="duration">
                          <option className="form-control" value="four">4 Years</option>
                          <option className="form-control" value="three">3 Years</option>
                          <option className="form-control" value="two">2 Years</option>
                          <option className="form-control" value="one">1 Year</option>
                          validate={validateInput}
                        </Field>
                        {errors.duration &&
                          touched.duration &&
                          errorMessage(errors.duration)}
                      </div>
                    </div>
                    
                  </div>
                  <h2 className="text-blueGray-700 mt-6 text-lg uppercase hidden lg:block font-semibold mb-4"
        >Loan requirements:</h2>
        
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Tuition Fees</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="K23,462.00"
                          name="fee"
                          validate={validateInput}
                        />
                        {errors.fee && touched.fee && errorMessage(errors.fee)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Accomodation/month</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="K1000"
                          name="accomodation"
                          validate={validateInput}
                        />
                        {errors.accomodation &&
                          touched.accomodation &&
                          errorMessage(errors.accomodation)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Book</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="0"
                          name="book"
                          validate={validateInput}
                        />
                        {errors.book && touched.book && errorMessage(errors.book)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Project</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="0"
                          name="project"
                          validate={validateInput}
                        />
                        {errors.project &&
                          touched.project &&
                          errorMessage(errors.project)}
                      </div>
                    </div>
                    
                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>No of years financed</label>
                        <Field
                          className="form-control"
                          as="select" name="yearsFinanced">
                          <option className="form-control" value="four">4 Years</option>
                          <option className="form-control" value="three">3 Years</option>
                          <option className="form-control" value="two">2 Years</option>
                          <option className="form-control" value="one">1 Year</option>
                          validate={validateInput}
                        </Field>
                        
                        {errors.yearsFinanced && touched.yearsFinanced && errorMessage(errors.yearsFinanced)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Repayment period</label>
                        <Field
                          className="form-control"
                          as="select" name="repayment">
                          <option className="form-control" value="four">4 Years</option>
                          <option className="form-control" value="three">3 Years</option>
                          <option className="form-control" value="two">2 Years</option>
                          <option className="form-control" value="one">1 Year</option>
                          validate={validateInput}
                        </Field>
                        {errors.repayment &&
                          touched.repayment &&
                          errorMessage(errors.repayment)}
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
