import React from 'react';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { TbWorld, TbBooks, TbTestPipe } from 'react-icons/tb';
import { FiMonitor } from 'react-icons/fi';
import { BiBrush } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdFoodBank } from 'react-icons/md';

const Categories = () => {
  return (
    <div className='py-24 bg-base-200'>
      <h1 className='text-center font-bold pt-6 text-4xl'>Browse Categories</h1>
      <p className='text-center pt-2'>
        Most popular categories of portal, sorted by popularity
      </p>
      {/* ----------all cards-------------- */}
      <div className='grid grid-cols-1 lg:grid-cols-4 justify-items-center mx-12 py-12 gap-3'>
        {/* ------1st card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <BsFillHouseDoorFill size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Finance</h2>
            <p>(1000 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------2nd card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <TbWorld size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Sales/Marketing!</h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------3rd card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <TbBooks size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>
              Education/Training
            </h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------4th card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <FiMonitor size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Technologies</h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------5th card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <BiBrush size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Art/Design</h2>
            <p>(1807 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------6th card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <AiOutlineHeart size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Healthcare</h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------7th card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <TbTestPipe size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Science</h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
        {/* ------8th card------- */}
        <div
          onClick={() => alert('Hello')}
          className='card w-96 bg-base-100 transform hover:scale-105 duration-500 cursor-pointer'
        >
          <figure className='px-10 pt-10'>
            <MdFoodBank size='56px' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title hover:text-primary'>Food Services</h2>
            <p>(2002 Jobs)</p>
          </div>
        </div>
        {/* ----------end------------ */}
      </div>
      {/* -------end all cards-------- */}
    </div>
  );
};

export default Categories;
