import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const TeamMember = ({ member }) => {
  const { designation, name, img } = member;
  return (
    <div className="card rounded-none lg:max-w-lg bg-base-100 shadow-md hover:shadow-xl">
      <figure className="px-5 pt-5">
        <img
          src={img}
          alt="Shoes"
          className="rounded-full h-[200px] w-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-xl">{name}</h2>
        <p className="font-bold text-primary py-2">{designation}</p>
        {/* social icon link start */}
        <div>
          <ul className="flex gap-5 justify-center items-center">
            <li>
              <Link to="#">
                <div className="bg-primary text-white p-2 rounded-full cursor-pointer hover:bg-white border-primary border-2 hover:text-primary">
                  <GrFacebookOption />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="bg-primary text-white p-2 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <AiOutlineTwitter />
                </div>
              </Link>
            </li>
            <li>
              <Link to="#">
                <div className="bg-primary text-white p-2 rounded-full cursor-pointer  hover:bg-white border-primary border-2 hover:text-primary">
                  <FiInstagram />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* social icon link end */}
      </div>
    </div>
  );
};

export default TeamMember;
