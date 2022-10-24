const jobSchema = require("../schemas/jobSchema");

const getSearchResult = async (req, res, next) => {
    try {
        const { search } = req.query;
        const searchResult = await jobSchema.find({
        $or: [
            { jobTitle: { $regex: search, $options: "i" } },
            { jobDescription: { $regex: search, $options: "i" } },
            { jobLocation: { $regex: search, $options: "i" } },
            { jobType: { $regex: search, $options: "i" } },
            { jobCategory: { $regex: search, $options: "i" } },
        ],
        });
        res.status(200).json({ searchResult });
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports = getSearchResult;
    
