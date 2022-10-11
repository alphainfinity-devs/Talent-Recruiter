import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiBox } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const JobList = () => {
    return (
        <div className='md:flex md:container '>
            <div className='lg:w-[30%]  '>
                <div className='sticky top-4  bg-gray-200 m-4'>
                    <form className=' w-full p-5 '>
                        <div className="mb-3">
                            <label htmlFor="keywords" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Keywords</label>
                            <input type="text" id="keywords" placeholder="Search Keywords" className="input input-bordered input-info w-full " required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label>
                            <input type="text" id="location" placeholder="Search Locations" className="input input-bordered input-info w-full " required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="jobtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label>
                            <input type="text" id="jobtype" placeholder="Search Type" className="input input-bordered input-info w-full " required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label >
                            <select className="select select-info w-full " id="gender">
                                <option disabled selected>By Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div>
                        {/* <div className="mb-3">
                        <label htmlFor ="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label >
                        <select className="select select-info w-full max-w-xs" id="location">
                            <option disabled selected>All Location</option>
                            <option>Bangladesh</option>
                            <option>India</option>
                            <option>England</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="categories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Location</label >
                        <select className="select select-info w-full max-w-xs" id="categories">
                            <option disabled selected>All Categories</option>
                            <option>IT/Engineering</option>
                            <option>Design & Creative</option>
                            <option>Industrial Engineer</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="jobtype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Job Type</label >
                        <select className="select select-info w-full max-w-xs" id="jobtype">
                            <option disabled selected>Full Time</option>
                            <option>Part Time</option>
                            <option>Remote</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="datepost" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Posted</label >
                        <select className="select select-info w-full max-w-xs" id="datepost">
                            <option disabled selected>Post Time From Today</option>
                            <option>Last  Hour</option>
                            <option>Last 24 Hours</option>
                            <option>Last  7 days</option>
                            <option>Last 30 days</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="experience" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">experience</label >
                        <select className="select select-info w-full max-w-xs" id="experience">
                            <option disabled selected>Your Experience</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="salary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offered Salary</label >
                        <select className="select select-info w-full max-w-xs" id="salary">
                            <option disabled selected>Your Expected Salary</option>
                            <option>10k-20</option>
                            <option>20k-30k</option>
                            <option>30k-40k</option>
                            <option>40k-50k</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Qualification</label >
                        <select className="select select-info w-full max-w-xs" id="qualification">
                            <option disabled selected>Your Qualification</option>
                            <option>Intermidiate</option>
                            <option>Gradute</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor ="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label >
                        <select className="select select-info w-full max-w-xs" id="gender">
                            <option disabled selected>By Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div> */}
                    </form>
                </div>




            </div>

            <div className='lg:w-[70%]  m-4'>
                <div className=''>
                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5 mt-2 mb-2'>
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

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        </div>

                        <div className='flex sm:flex-row flex-col gap-2'>
                            <Link to="/jobdetails" className="btn btn-outline btn-success ">Job Details</Link>
                            <button className="btn btn-outline btn-success">Apply Now</button>

                        </div>

                    </div>

                    <div className="divider"></div>


                    {/* .................................................................................... */}
                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5 mt-2 mb-2'>
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

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        </div>

                        <div className='flex sm:flex-row flex-col gap-2'>
                            <button className="btn btn-outline btn-success ">Job Details</button>
                            <button className="btn btn-outline btn-success">Apply Now</button>

                        </div>

                    </div>

                    <div className="divider"></div>

                    {/* ........................................................................................ */}

                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5 mt-2 mb-2'>
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

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        </div>

                        <div className='flex sm:flex-row flex-col gap-2'>
                            <button className="btn btn-outline btn-success ">Job Details</button>
                            <button className="btn btn-outline btn-success">Apply Now</button>

                        </div>

                    </div>

                    <div className="divider"></div>

                    {/* ..................................................................................... */}
                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5 mt-2 mb-2'>
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

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        </div>

                        <div className='flex sm:flex-row flex-col gap-2'>
                            <button className="btn btn-outline btn-success ">Job Details</button>
                            <button className="btn btn-outline btn-success">Apply Now</button>

                        </div>

                    </div>

                    <div className="divider"></div>



                    {/* ..................................................................... */}
                    <div className='flex lg:flex-row flex-col justify-center items-center gap-5 mt-2 mb-2'>
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

                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                        </div>

                        <div className='flex sm:flex-row flex-col gap-2'>
                            <button className="btn btn-outline btn-success ">Job Details</button>
                            <button className="btn btn-outline btn-success">Apply Now</button>

                        </div>

                    </div>

                    <div className="divider"></div>



                </div>

            </div>
        </div>


    );
};

export default JobList;