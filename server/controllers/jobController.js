const Job = require('../schemas/jobSchema')
const asyncHandler = require('express-async-handler')

// @desc All Job Controller
const getAllJobs = asyncHandler(async (req, res, next) => {
    try{
        const Jobs = await Job.find().populate('company_name','_id name');
            res.status(200).json({
                success: true,
                Jobs
        })
    }catch(err){
        next(err)
    }
    
})

// @desc Job Detail Controller
const getSingleJob = asyncHandler(async (req, res, next) => {

    try{
        const job = await Job.findById(req.params.id).populate('company_name','_id name');;
        if (!job) {
            res.status(404).json({message:'Job not found'})
        }
        res.status(200).json({
            success: true,
            job
        })
    }catch(err){
        next(err)
    }
})

module.exports ={
    getAllJobs,
    getSingleJob
}
