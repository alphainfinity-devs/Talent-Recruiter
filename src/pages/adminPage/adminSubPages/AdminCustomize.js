import React from "react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const AdminCustomize = () => {
  return (
    <>
      <div className="flex items-center justify-center md:my-14 my-3">
        <BsFillJournalBookmarkFill className="mr-2 md:w-9 md:h-9 w-5 h-5" />
        <h2 className="md:text-3xl uppercase md:font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          Customize Option
        </h2>
      </div>
      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
        <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span>
    <input type="checkbox" className="toggle toggle-primary" checked />
  </label>
</div>

         
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
</div>
          <label htmlFor="saturation">Saturation control
            <input
              type="range"
              min="0"
              max="100"
              value="20"
              className="range"
              />
     
              </label>
              </div>
            </div>
    </>
  );
};

export default AdminCustomize;
