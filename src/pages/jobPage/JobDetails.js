import React from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';
import { MdCastForEducation } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';
import { BiNotepad } from 'react-icons/bi';

const JobDetails = () => {
    return (
        <div className='md:flex md:container '>
            <div className='lg:w-[60%]  m-4'>
                <div className=''>
                    <div className=' bg-gray-200 m-4'>
                        <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4 border-b-4 border-indigo-500'>
                            <div>
                                <div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </div>
                            <div className='grid justify-items-center lg:justify-items-start'>
                                <p className="text-lg font-bold">Software Engineer</p>
                                <div className='flex flex-row gap-4 mt-2 mb-2'>
                                    <p className="text-sm font-light flex flex-row gap-1 items-center"><FiBox />Hexagon</p>
                                    <p className="text-sm font-light flex flex-row gap-1 items-center"><FaMapMarkerAlt />Dhaka</p>
                                    <p className="text-sm font-light flex flex-row gap-1 items-center"><AiOutlineFieldTime />Full Time</p>
                                </div>
                                <p className="text-sm font-light">Deadline: Dec 01, 2022</p>

                            </div>
                            <div className='flex sm:flex-row flex-col gap-2'>
                                <button className="btn btn-outline btn-success">Apply Now</button>

                            </div>

                        </div>
                    </div>
                </div>
                <div className='bg-gray-200 m-4'>

                    {/* job description */}
                    <p className="text-2xl font-semibold p-4">Job Description</p>
                    <p className='p-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra a. Aliquam pellentesque nibh et nibh feugiat gravida. Maecenas ultricies, diam vitae semper placerat, velit risus accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit sed neque euismod fringilla. Curabitur lobortis nunc velit, et fermentum urna dapibus non. Vivamus magna lorem, elementum id gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc porttitor, ut hendrerit arcu efficitur.</p>

                    {/* Education */}
                    <p className='text-2xl font-semibold p-4'>Education + Experience</p>
                    <ul className="steps steps-vertical p-4">
                        <li className="step step-neutral " data-content="✓">M.B.S / M.B.A under National University with CA course complete.</li>
                        <li className="step  step-neutral" data-content="✓">3 or more years of professional design experience</li>
                        <li className="step  step-neutral" data-content="✓">Excellent communication skills, most notably a demonstrated ability to solicit and address creative.</li>
                        <li className="step  step-neutral" data-content="✓">3Masters of library science any Green University.</li>
                        <li className="step  step-neutral" data-content="✓">BA/BS degree in a technical field or equivalent practical experience.</li>
                        <li className="step  step-neutral" data-content="✓">Ability to work independently and to carry out assignments to completion within parameters of instructions .</li>

                    </ul>

                    {/* Responsibilities */}

                    <p className='text-2xl font-semibold p-4'>Responsibilities</p>
                    <ul className="steps steps-vertical p-4">
                        <li className="step step-neutral " data-content="✓">Explore and design dynamic and compelling consumer experiences.</li>
                        <li className="step  step-neutral" data-content="✓">Have sound knowledge of commercial activities.</li>
                        <li className="step  step-neutral" data-content="✓">Build next-generation web applications with a focus on the client side.</li>
                        <li className="step  step-neutral" data-content="✓">The applicants should have experience in the following areas</li>

                    </ul>


                    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                        <div className="items-center grid-flow-col">

                            <p>Share with your friends or more -</p>
                        </div>
                        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                            </a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </footer>


                </div>


            </div>
            <div className='lg:w-[30%]'>
                <div className='bg-gray-200 mt-8'>
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font p-5 underline underline-offset-8">Job Overview</h2>

                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < FaMoneyCheckAlt />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Salary</p>
                            <p className="text-sm font-light">£12,000 - £25,000</p>

                        </div>

                    </div>
                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < FaMapMarkerAlt />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Location</p>
                            <p className="text-sm font-light">New York City</p>

                        </div>

                    </div>

                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < BsGenderAmbiguous />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Gender</p>
                            <p className="text-sm font-light">Any</p>

                        </div>

                    </div>

                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < MdWorkOutline />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Job Type</p>
                            <p className="text-sm font-light">Full Time</p>

                        </div>

                    </div>

                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < MdCastForEducation />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Qualification</p>
                            <p className="text-sm font-light">Mba</p>

                        </div>

                    </div>

                    <div className='flex lg:flex-row flex-col justify-start items-center gap-5 p-4'>
                        <div className='p-5'>
                            < BiNotepad />

                        </div>
                        <div className='grid justify-items-center lg:justify-items-start'>
                            <p className="text-lg font-bold">Experience</p>
                            <p className="text-sm font-light">2 to 3 year</p>

                        </div>

                    </div>








                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font p-5 underline underline-offset-8 ">Quick Contacts
                    </h2>
                    <form className=' w-full p-5 '>
                        <div className="mb-3">


                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>

                        </div>
                        <div className="mb-3">
                            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send Message</button>
                        </div>

                    </form>
                </div>




            </div>




        </div>





    );
};

export default JobDetails;