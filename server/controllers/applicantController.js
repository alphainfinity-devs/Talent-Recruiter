
const asyncHandler = require('express-async-handler');
const AppliedJob= require('../schemas/appliedJobSchema');
const BookmarkJob = require('../schemas/bookmarkJobSchema');

// @desc Get BookMarked Job
const getBookmarkedJob = asyncHandler(async (req, res, next) => {
    try{
        const isBookmark = await BookmarkJob.find({user:{_id:req.user.id}}).populate('job','_id title');
        console.log(isBookmark);
        if(isBookmark){
            res.status(200).json({
                success: true,
                bookmarkedjobs:isBookmark
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

// @desc Create BookMarked 
const bookmarkJob = asyncHandler(async (req, res, next) => {
    try{
        const isBookmark = await BookmarkJob.create({job:req.params.id,user:req.user.id});

        if(isBookmark){
            res.status(200).json({
                success: true,
                message: "Successfully Bookmark The Job",
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
const deleteBookmark = asyncHandler(async(req,res,next)=>{

    try{
        const isDelete = await BookmarkJob.findOneAndDelete({_id:req.params.id, user:req.user.id})
        if(isDelete){
            res.status(200).json({
                success: true,
                message: `Bookmark deleted successfully`
            })
        }
        else{
            res.status(404).json({
                success: false,
                message: "Bookmark not found"
            })
    }
    }catch(err){
        next(err)
    }

})


//  @desc Apply Job 
const getAppliedJob = asyncHandler(async(req, res, next) =>{
    try{
        const isApplied = await AppliedJob.find({user:req.user.id}).populate('job','_id title');;

        if(isApplied){
            res.status(200).json({
                success: true,
                appliedjobs:isApplied
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
//  @desc Apply Job 
const applyJob = asyncHandler(async(req, res, next) =>{
    try{
        const isApplied = await AppliedJob.find({job:req.params.id,user:req.user.id}).count();
        if(isApplied>0){
            res.status(400).json({
                success: false,
                message: "Already Applied This Job",
            })
        }else{
            const applied = await AppliedJob.create({job:req.params.id,candidate:req.user.id});
            if(applied){
                res.status(200).json({
                    success: true,
                    message: "Successfully Applied This Job",
                })
            }
        }
    }catch(err){
        next(err)
    }
})

const isAppliedOrBookmarke = asyncHandler(async(req, res, next) =>{
    console.log(req.user)
    try{
        const isApplied = await AppliedJob.exists({job:req.params.id,candidate:req.user.id}).count()
        const isBookmarked = await BookmarkJob.exists({job:req.params.id, user:req.user.id}).count();
        
        console.log(isApplied,isBookmarked)
        
        if(isApplied || isBookmarked){
            res.status(200).json({
                isApplied,
                isBookmarked
            })
        }
    }catch(err){
        next(err)
    }
})

module.exports ={
    getBookmarkedJob, bookmarkJob,deleteBookmark, getAppliedJob, applyJob, isAppliedOrBookmarke
}
