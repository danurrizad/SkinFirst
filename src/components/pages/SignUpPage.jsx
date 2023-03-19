import React from "react";
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
      <>
        <section class="min-h-[50vh] px-30 pt-20 pb-20 bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-10 mx-auto">
                <a href="#home" class="flex items-center mb-6 text-3xl font-bold text-primary-0 ">
                {/* <img class="w-8 h-8 mr-2" rrrsrc={ImgLogo} alt="img-logo"> </img> */}
                Sign Up    
                </a>
                <div class="w-full bg-primary-0 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-primary-3 md:text-2xl ">
                            Create your account
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-primary-1">Username</label>
                                <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="admin123" required="">
                                </input>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-primary-1">Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="admin@gmail.com" required="">
                                </input>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-primary-1">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                                </input>
                            </div>
                            <div>
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-primary-1">Confirm Password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                                </input>
                            </div>
                            {/* <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
                                    </input>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#home">Terms and Conditions</a></label>
                                </div>
                            </div> */}
                            <button type="submit" class="w-full text-primary-0 bg-primary-1 hover:bg-primary-3 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                            <p class="text-sm font-medium text-primary-1 ">
                                Already have an account? <Link to='/login'><a href="#home" class="font-medium text-primary-4 underline hover:text-primary-2">Login here</a></Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
  
  export default SignUpPage