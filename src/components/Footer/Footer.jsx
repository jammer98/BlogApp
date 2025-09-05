import React from "react";
import { Link } from "react-router-dom"
import Logo from "../Logo";

function Footer (){


        return (
    <section className="relative bg-gray-400 py-10 border border-t-2 border-t-black overflow-hidden">
            <div className="z-10 relative mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap -m-6">
                    <div className="p-6 w-full md:w-1/2 lg:w-5/12">
                        <div className="flex flex-col justify-between h-full">
                            <div className="inline-flex items-center mb-4">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-gray-600 text-sm">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 w-full md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-9 font-semibold text-gray-500 text-xs uppercase tracking-px">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 w-full md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="mb-9 font-semibold text-gray-500 text-xs uppercase tracking-px">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 w-full md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="mb-9 font-semibold text-gray-500 text-xs uppercase tracking-px">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-gray-900 hover:text-gray-700 text-base"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
    
}

export default Footer;

