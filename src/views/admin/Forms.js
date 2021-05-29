import React from "react";
import LoanForm1 from "components/Forms/loanForm1"
import LoanForm2 from "components/Forms/loanForm2"
import LoanForm3 from "components/Forms/loanForm3"
import LoanForm4 from "components/Forms/loanForm4"
import LoanForm5 from "components/Forms/loanForm5"
import LoanForm6 from "components/Forms/loanForm6"
import LoanForm7 from "components/Forms/loanForm7"


export default function Forms() {
  return (
    <>

      <div className="flex flex-wrap mt-24">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 rounded">
          <div className="border-b w-f mb-4 border-yellow">
        <h1
          className="text-blueGray-700 text-md uppercase md:block sm:block lg:block font-semibold mb-1  "
        >
          new loan
                </h1>
                </div>
            <LoanForm1 />
            <LoanForm2 />
            <LoanForm3 />
            <LoanForm4 />
            <LoanForm5 />
            <LoanForm6 />
            <LoanForm7 />
          </div>
        </div>
      </div>
    </>
  );
}
