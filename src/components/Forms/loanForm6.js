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
  } else if (value.length > 32) {
    error = maxLength;
  }
  return error;
};

export default function LoanForm6() {
  const initialValues = {
    parentPhoneNumber: "+260 9725635",
    nameOfParent: "Mary Banda",
    parentGender: "Female",
    relationship: "",
    parentNationality: "Zambia",
    parentTown: "LUSAKA",
    parentProvince: "LUSAKA",
    parentResidentialAddress: "LIABAN SOUTH NGANJI HOUSE 10538",
    parentEmail: "Thulanimusaila@gmail.com"
  }

  function onSubmit(values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element6 = document.getElementById('form-6')
    element6.style.display="none";
    let element5 = document.getElementById('form-7')
    element5.style.display="block";
  }
  return (
    <>

      <div id='form-6'>
      <div className='border-b w-f mb-4 border-orange'>
      
      <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4">Loan witness</h2>
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
                        <label>Name of Parent/Guardian</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Mary Banda"
                          name="nameOfParent"
                          validate={validateInput}
                        />
                        {errors.nameOfParent && touched.nameOfParent && errorMessage(errors.nameOfParent)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Gender: </label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="Female"
                          name="parentGender"
                          validate={validateInput}
                        />
                        {errors.parentGender &&
                          touched.parentGender &&
                          errorMessage(errors.parentGender)}
                      </div>
                    </div>

                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Relationship</label>
                        <Field
                          className="form-control"
                          as="select" name="relationship">
                          <option className="form-control" value="mother">Mother</option>
                          <option className="form-control" value="father">Father</option>
                          <option className="form-control" value="sibling">Sibling</option>
                          <option className="form-control" value="legalGuardian">Legal Guardian</option>
                          validate={validateInput}
                        </Field>
                        {errors.relationship && touched.relationship && errorMessage(errors.relationship)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Nationality</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="ZAMBIA"
                          name="parentNationality"
                          validate={validateInput}
                        />
                        {errors.parentNationality &&
                          touched.parentNationality &&
                          errorMessage(errors.parentNationality)}
                      </div>
                    </div>

                  </div>
                  <div className="flex flex-wrap mt-4">

                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Town/District</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="LUSAKA"
                          name="parentTown"
                          validate={validateInput}
                        />
                        {errors.parentTown &&
                          touched.parentTown &&
                          errorMessage(errors.parentTown)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Province</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="LUSAKA"
                          name="parentProvince"
                          validate={validateInput}
                        />
                        {errors.parentProvince &&
                          touched.parentProvince &&
                          errorMessage(errors.parentProvince)}
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-6/12 xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Residential Address:</label>
                        <Field
                          className="form-control"
                          type="text"
                          placeholder="LIABAN SOUTH NGANJI HOUSE 10538"
                          name="parentResidentialAddress"
                          validate={validateInput}
                        />
                        {errors.parentResidentialAddress &&
                          touched.parentResidentialAddress &&
                          errorMessage(errors.parentResidentialAddress)}
                      </div>
                    </div>
                    <div className="w-full xl:w-6/12 px-4">
                      <div className="form-group">
                        <label>Email</label>
                        <Field
                          className="form-control"
                          type="email"
                          placeholder="Thulanimusaila@gmail.com"
                          name="parentEmail"
                          validate={validateInput}
                        />
                        {errors.parentEmail &&
                          touched.parentEmail &&
                          errorMessage(errors.parentEmail)}
                      </div>
                    </div>

                  </div>
                  <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:mb-0 px-4">
                      <div className="form-group">
                        <label>Phone number</label>
                        <Field
                          className="form-control"
                          type="tel"
                          placeholder="+260 9725635"
                          name="parentPhoneNumber"
                          validate={validateInput}
                        />
                        {errors.parentPhoneNumber &&
                          touched.parentPhoneNumber &&
                          errorMessage(errors.parentPhoneNumber)}
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
