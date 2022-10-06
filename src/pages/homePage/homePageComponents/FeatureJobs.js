import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineUser } from 'react-icons/ai';

const FeatureJobs = () => {
  return (
    <div className='min-h-[60vh] bg-base-300'>
      <h1 className='text-center font-bold pt-12 text-4xl'>Featured Jobs</h1>
      <p className='text-center pt-2'>
        Hand-picked jobs featured depending on popularity and benefits
      </p>
      {/* ----------all cards-------------- */}
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center mx-12 px-12 py-12 gap-3'>
        {/* ------1st card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------2nd card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------3rd card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------4th card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------5th card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------6th card------- */}
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            {/* ----company logo section--------------- */}
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title font-bold'>Software Engineer</h2>
            <p className='font-semibold'>Miztech</p>
            {/* ----------other details section--------- */}
            <div className='flex gap-3'>
              <span className='badge badge-outline text-xs gap-2'>
                <GrLocation /> New Work
              </span>
              <span className='badge badge-outline text-xs gap-2'>
                <AiOutlineUser /> Jhon Smith
              </span>
            </div>
            {/* ------------end----------------- */}
            <div className='card-actions'>
              <button className='px-4 py-1 border border-purple-200 rounded-full text-sm text-purple-600 font-semibold hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2'>
                Full Time
              </button>
            </div>
          </div>
        </div>
        {/* ----------end------------ */}
      </div>
      {/* -------end all cards-------- */}
      {/* ----------all jobs button------------- */}
      <div className='mt-3 pb-4 flex justify-center align-items-center'>
        <button className='px-12 py-3 bg-primary hover:bg-secondary rounded-full text-white font-mediam tracking-wider transition'>
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
