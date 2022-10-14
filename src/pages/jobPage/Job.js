import React from 'react';
import { NavLink } from 'react-router-dom';
import JobList from './JobList';


const job = () => {
    return (
        <NavLink to={"/jobs"}>
            <JobList />

        </NavLink>
    );
};

export default job;