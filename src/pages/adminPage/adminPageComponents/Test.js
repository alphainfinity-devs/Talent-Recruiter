import React from 'react';
import { Outlet } from 'react-router-dom';

const Test = () => {
    return (
        <div>
            <h2 className='text-red-500 text-2xl'>Hey There</h2>
             <Outlet />
        </div>
    );
};

export default Test;