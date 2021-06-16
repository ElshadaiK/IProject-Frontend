import React, { Component } from 'react'
import axios from 'axios'

// components

import CardRepaymentHistory from "components/Cards/CardRepaymentHistory.js";
import CardReviewHistory from "components/Cards/CardReviewHistory.js";
import CardStudentLoan from "components/Cards/CardStudentLoan.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import { useLocation } from "react-router-dom";

async function getProject(id){
  try{
    let res = await axios.get(`https://iproject-api.herokuapp.com/projects/${id}`, 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "X-Access-Token" : localStorage.getItem('token')
      }
    }
    )
    return res
  }
  catch(err){
    console.log(err)
  }

}
export default class StudentDashboard extends Component {
    state = {
      student_id: '',
      student_name: '',
      student_email: '',
      student_batch: '',
      student_verified: '',
      institution_id: '',
      projects: '',
      ongoing: [],
      pays: [],
      ratings: []
    }

  
    render() {

      const data = this.props.location.state.detail.result.data[0]
      this.student_batch = data.batch
      this.student_email = data.email
      this.student_name = data.name 
      this.student_id = data.student_id
      this.institution_id = data.institution_id
      this.student_verified = data.verified
      this.projects = data.works

      console.log(data)
      for (let index = 0; index < this.projects.length; index++) {
          const element = this.projects[index];
          if(element.pays.date){
            console.log(element.pays)
            this.state.pays.push(element.pays)
            console.log(this.state.pays)
          }
          if(element.ratings.length > 0){
            this.state.ratings.push(element.ratings)
          }
          if(!element.finished){
            getProject(element.id).then(res => this.ongoing.push(res)).catch(err => console.log(err))
          }
          
          
        }
      // for (let index = 0; index < this.projects.length; index++) {
      //   const element = this.projects[index];
      //   if(!element.finished){
      //     getProject(element.id).then(res => this.ongoing.push(res)).catch(err => console.log(err))
      //   }
        
        
      // }
      // console.log(this.ongoing)


      return (
            <>     
              
              <AdminNavbar />
              {/* Header */}
              <div pt-5>Dashboard</div>
              <HeaderStats />
              <div className="relative px-4 md:px-10 mx-auto w-full">
              <div className='flex flex-wrap'>
                      <div className="w-8/12 px-4">
                        <div className='w-f mb-8'>
                          <h4 className="mb-4 uppercase font-bold text-lg">Ongoing Projects</h4>
                        </div>
                      </div>
                      <div className="w-4/12 px-4 lg:ml-24">
                        <h1
                          className="bg-blue-50 text-black text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                        >
        
                          {this.state.ongoing.length}
                        </h1>
                      </div>
        
                    </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
                    <CardStudentLoan />
                  </div>
                  <div className="w-full xl:w-6/12 px-4">
                    <CardStudentLoan />
                  </div>
                </div>
              </div>
              <div className="relative px-4 md:px-10 mx-auto w-full">
              <div className='flex flex-wrap'>
                      <div className="w-8/12 px-4">
                        <div className=' w-f mb-8'>
                          <h4 className="mb-4 uppercase font-bold text-lg">Payment History</h4>
                        </div>
                      </div>
                      <div className="w-4/12 px-4 lg:ml-24">
                        <h1
                          className="text-black bg-blue-50 text-xs font-bold uppercase px-4 py-2 rounded-b shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                          
                        >
        
                        {this.state.pays.length}
                        </h1>
                      </div>
        
                    </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
                    <CardRepaymentHistory />
                  </div>
                </div>
                <div className="flex flex-wrap mt-4">
                  <div className="w-full xl:w-100 mb-12 xl:mb-0 px-4">
                    <CardReviewHistory />
                  </div>
                </div>
              </div>
              
            </>
          );
        }
  }