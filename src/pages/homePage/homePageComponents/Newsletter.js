import React from 'react';
// bg-indigo-500
const Newsletter = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-col px-5 py-20 justify-center items-center">
                <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Subscribe Now For Update</h1>

                    <form className="flex w-full justify-center items-end">
                        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                            <input type="email" name="email" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Please Enter Your Email' required />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;