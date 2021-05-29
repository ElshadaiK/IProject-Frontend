import React from "react";

export default function LoanForm2() {

  function onClicked(){
    // values, { setSubmitting }) {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
    let element3 = document.getElementById('form-2');
    element3.style.display="none";
    let element4 = document.getElementById('form-3');
    element4.style.display="block";
  }
  return (
    <>

      <div id='form-2'>
      <h2 className="text-blueGray-700 text-lg  md:block sm:block lg:block font-bold mb-4"
        >Conditions of the Loan Agreement:</h2>
        <div className='bg-lightBlue-100 p-4 rounded-lg mr-4'>

          <ol>
            <li>The loan is only valid for one academic year/semester but may be renewed on application
after production of satisfactory academic result</li>
            <li>Part of the loan due to the student shall include payment towards insurance of the loan</li>
            <li>Part of the loan due to the student may be paid to the beneficiary through a bank account
as <span className="font-semibold">funds become available</span></li>
            <li>Student awarded the loan are expected to <span className="font-semibold">meet any shortfall</span> not covered by the loan</li>
            <li>Student in receipt of the loan or scholarship provided by the board will not qualify for
any other offer at the same level of qualification</li>
            <li>The loan is given to obtain one study programme and <span className="font-semibold">it will not be extended </span>to enable
students <span className="font-semibold">undertake an additional or higher qualification </span> than that for which the selection
was made</li>

          </ol>
          <div className="w-6/12 mb-4">
            <button className="w-auto mt-4 bg-yellow text-white  text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
              Note
                </button>
          </div>
          <p className="ml-3 mb-4">The board will only effect the Loan if the student shows evidence of registration with the
university and has made valid bank account</p>

        </div>
        <div className="w-6/12">
          <button onClick={onClicked}
          className="w-10/12 mt-4 bg-blue-600 text-white active:bg-lightBlue-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
          >
            Next
                </button>
        </div>
      </div>

    </>
  );
}
