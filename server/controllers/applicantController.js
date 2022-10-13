const Job = require('../schemas/jobSchema')
const asyncHandler = require('express-async-handler')

// Create new room   =>   /api/rooms
const createJob = asyncHandler(async (req, res) => {
    const data =  {...req.body,company_name:"634695ce8421bda6f2efc74a"}
    const newJob = await Job.create(data);

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

})

module.exports ={
    createJob
}
