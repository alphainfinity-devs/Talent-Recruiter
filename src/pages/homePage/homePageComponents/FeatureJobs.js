import React from "react";
import FeaturejobCart from "./FeaturejobCart";
import { SiGoogletagmanager } from "react-icons/si";

const Featurejobs = () => {
  const featurejobs = [
    {
      _id: 1,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 2,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 3,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 4,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 5,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 6,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 7,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 8,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 9,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 10,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 11,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
    {
      _id: 12,
      title: "UI/UX Designer",
      website: "Example.com",
      type: "Full Time",
      salery: "$79k-$85k",
      location: "Location 210-27 Quadra, Market Street, Victoria Canada",
      icon: <SiGoogletagmanager />,
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-primary font-bold">Feature Jobs</h2>
          <p className="text-natural py-1">
            Hand-picked jobs featured depending on popularity and benifits
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featurejobs.map((job) => (
            <FeaturejobCart key={job._id} job={job}></FeaturejobCart>
          ))}
        </div>

        <div className="flex justify-center pt-16">
          <div className="btn-group gap-1">
            <button className="btn-primary border hover:marker:border-secondary btn-md text-white">
              Prev
            </button>
            <button className="btn-primary border hover:border-secondary btn-md text-white">
              1
            </button>
            <button className="btn-primary border hover:border-secondary btn-md text-white">
              2
            </button>
            <button className="btn-primary border hover:border-secondary btn-md text-white">
              3
            </button>
            <button className="btn-primary border hover:border-secondary btn-md text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featurejobs;
