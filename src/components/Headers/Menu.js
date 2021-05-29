import React from "react";

import { Link } from "react-router-dom";
// components


export default function Menu() {
    return (
        <>
            {/* Header */}
            <div className="flex flex-wrap">
                <div className="w-1/2 py-2 px-3 flex-1">
                    <span className="hovery text-sm block my-0 p-5 py-6 text-blue-700 rounded-xlg border border-solid border-blueGray-100 bg-white text-center">
                        <img
                            alt="..."
                            src={require("assets/img/grid.png").default}
                            className="inline-block max-w-25-px"
                        />
                        <Link to="/admin/dashboard"  className='mt-1'
                        >
                            Dashboard
                </Link></span>
                </div>
                <div className="w-1/2 py-2 px-3 flex-1">
                    <span className="hovery text-sm block my-0 p-5 py-6 text-blue-700 rounded-xlg border border-solid border-blueGray-100 bg-white text-center">
                    <img
                            alt="..."
                            src={require("assets/img/chat.png").default}
                            className="inline-block max-w-25-px"
                        />
                    <div className='mt-1'>Chat</div></span>
                </div>
            </div>
            <div className="flex flex-wrap">
                <div className="w-1/2 py-2 px-3 flex-1">
                    <span className="hovery text-sm block my-0 p-5 py-6 text-blue-700 rounded-xlg border border-solid border-blueGray-100 bg-white text-center">
                    <img
                            alt="..."
                            src={require("assets/img/profile.png").default}
                            className="inline-block max-w-25-px"
                        />
                    <div  className='mt-1'>User Profile</div></span>

                </div>
                <div className="w-1/2 py-2 px-3 flex-1">
                    <span className="hovery text-sm block my-0 p-5 py-6 text-blue-700 rounded-xlg border border-solid border-blueGray-100 bg-white text-center">
                    <img
                            alt="..."
                            src={require("assets/img/faq.png").default}
                            className="inline-block max-w-25-px"
                        />
                    <div  className='mt-1'>Help & FAQ</div></span>
                </div>
            </div>
        </>
    );
}
