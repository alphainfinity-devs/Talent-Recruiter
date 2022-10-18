const Job = require('../schemas/jobSchema')
const asyncHandler = require('express-async-handler');


// @desc Get Job All Via Applicant Id
const getJobByRequiter = asyncHandler(async (req, res, next) => {
    try{
        const getJobByRequiter = await Job.find({company_name:req.user.id});

        if(getJobByRequiter){
            res.status(200).json({
                getJobByRequiter
            })
        }else{
            res.status(400).json({
                message: "Something went wrong. Please try Again",
            })
        }
    }catch(err){
        console.log(err);
        next(err)
    }
})

// @desc Post New Job Controller
const postJob = asyncHandler(async (req, res, next) => {
    const data =  {...req.body}
    try{
        const newJob = await Job.create({...data,company_name:req.user.id});

        if(newJob){
            res.status(200).json({
                success: true,
                message: "Successfully Create The Job",
                newJob
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Something went wrong. Please try again",
            })
        }
    }catch(err){
        next(err)
    }

})

// @desc  Delete Job Controller
const deleteJob = asyncHandler(async(req,res,next)=>{

    try{
        const isDelete = await Job.findOneAndDelete({_id:req.params.id, user:req.user.id})
        if(isDelete){
            res.status(200).json({
                success: true,
                message: `Job deleted successfully`
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: `Job not found by the id: ${req.params.id}`
            })
    }
    }catch(err){
        next(err)
    }

})
module.exports ={
    postJob, getJobByRequiter, deleteJob
}
