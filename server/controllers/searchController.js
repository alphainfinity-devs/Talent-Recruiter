const jobSchema = require("../schemas/jobSchema");
const sanitizedString = require("../utilities/sanitizedString");

const getSearchResult = async (req, res, next) => {
  try {
    const { keyword, location, category } = req.query;
    // console.log(sanitizedString(keyword));

    const searchResult = await jobSchema.find({
      $or: [
        { title: { $regex: sanitizedString(keyword), $options: "ig" } },
        { description: { $regex: sanitizedString(keyword), $options: "ig" } },
        { address: { $regex: sanitizedString(location), $options: "ig" } },
        // { category: { $regex: category, } },
      ],
    });
    res.status(200).json({ searchResult });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = getSearchResult;
