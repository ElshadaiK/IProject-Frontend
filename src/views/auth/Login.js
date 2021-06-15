import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
// import qs from "qs";   

async function getUser(formData){
  try{let res = await axios.post(`https://iproject-api.herokuapp.com/auth/login`, formData)
  let result = await axios.get(`https://iproject-api.herokuapp.com/${res.data.role}/${res.data.user_id}`)
  return result   }
  catch(err){
    console.log(err)
  }

}
export default class Login extends Component {
  state = {
    email: '',
    password: '',
    user: '',
    user_id: '',
    user_role: ''
  }

  handleChangeEmail = event => {
    this.email = event.target.value
  }
  handleChangePassword = event => {
    this.password = event.target.value
  }
  handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData()
    formData.append('email', this.email);
    formData.append('password', this.password);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }

  // let result = getUser(formData);
  // console.log(result)
  fetch("https://iproject-api.herokuapp.com/students/", {
    method: 'get'
  }).then(res => res.json())
    .then(
    (result) => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })

  }
  render() {
    return (
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center my-3 font-bold">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Sign In
                    </h6>     
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        name='email'
                        required
                        onChange={this.handleChangeEmail} 
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                        name='password'
                        required
                        onChange={this.handleChangePassword} 
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                          >Sign in
                        {/* <Link to="/admin/dashboard">
                        Sign In
                        </Link> */}
                            
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6 relative">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-blueGray-200"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <Link to="/auth/register" className="text-blueGray-200">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
