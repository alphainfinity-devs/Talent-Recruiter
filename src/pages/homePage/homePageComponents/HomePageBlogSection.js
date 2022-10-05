import React from 'react';

const HomePageBlogSection = () => {
    return (
        <div className='my-28'>
            <div className='text-center  mb-14'>
                <h3 className='text-primary  text-4xl font-bold uppercase py-3'>Blog Post</h3>
                <h2 className='text-xl'>Proident aliquip sit amet culpa id.</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div className="">
                    <div className="block m-auto">
                        <img className="" src="https://placeimg.com/400/225/arch" alt="Shoes" />             
                        </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Blog Post - 1</h2>
                    <p>
                     Incididunt culpa officia commodo eiusmod esse enim nulla aliquip consequat. Voluptate consequat ex eiusmod ad. Labore occaecat laboris esse ad mollit minim nulla.

                    </p>
                </div>
                </div>            
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div className="">
                    <div className="block m-auto">
                        <img className="" src="https://placeimg.com/400/225/arch" alt="Shoes" />             
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Blog Post - 2</h2>
                    <p>
                     Incididunt culpa officia commodo eiusmod esse enim nulla aliquip consequat. Voluptate consequat ex eiusmod ad. Labore occaecat laboris esse ad mollit minim nulla.

                    </p>
                </div>
                </div>
                <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
                <div className="">
                {/* mask mask-circle */}
                    <div className="block m-auto">
                        <img className="" src="https://placeimg.com/400/225/arch" alt="Shoes" />             
                    </div>
       
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Blog Post - 3</h2>
                    <p>

                     Incididunt culpa officia commodo eiusmod esse enim nulla aliquip consequat. Voluptate consequat ex eiusmod ad. Labore occaecat laboris esse ad mollit minim nulla.

                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomePageBlogSection;