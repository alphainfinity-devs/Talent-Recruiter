const featureJobsSchema = require("../schemas/featureJobsSchema");

// get all feature jobs
const getFeatureJobs = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const result = await featureJobsSchema
      .find({})
      .populate("job")
      .skip(page ? (page - 1) * limit : 0)
      .limit(limit ? limit : 0)
      .exec();
    const total = await featureJobsSchema.count();
    res
      .status(200)
      .json({
        result,
        total,
        currentPage: +page,
        totalPage: Math.ceil(total / limit),
      });
  } catch (error) {
    console.log("from get feature job", error);
    next(error?.message);
  }
};
// post a feature job
const postFeatureJob = async (req, res, next) => {
  try {
    const { job, payment_through } = req.body;
    console.log(job, payment_through);
    const result = await featureJobsSchema.create({
      payment_through,
      job,
    });
    res.status(200).json({ result });
  } catch (error) {
    console.log("from feature job", error?.message);
    next(error?.message);
  }
};

module.exports = {
  getFeatureJobs,
  postFeatureJob,
};
