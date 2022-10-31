import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { GoPlug } from "react-icons/go";
import { IoBookmarksOutline } from "react-icons/io5";
import { MdPostAdd, MdDeleteSweep } from "react-icons/md";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../features/userAuth/userAuthSlice";
import Avatar from "react-avatar";

export default function AdminSidebar() {
  const location = useLocation().pathname;
  const { user } = useSelector((state) => state.auth || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <>
      <div className="flex flex-col justify-between bg-[#d0ffce] md:w-full w-[75%]">
        <div className="px-4 py-6">
          <nav className="mt-6 flex flex-col space-y-1">
            <NavLink
              to="dashboard"
              className={(props) => {
                return `${
                  (props.isActive ||
                    location === ("/admin" || "/dashboard/")) &&
                  "bg-gray-300"
                } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
              }}
            >
              <svg
                className="mr-2 h-5 w-5 opacity-75"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Dashboard
            </NavLink>

            <NavLink
              to="admin-users"
              className={(props) => {
                return `${
                  props.isActive && "bg-gray-300"
                } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 opacity-75"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span className="ml-3 md:text-sm text-xs md:font-medium">
                Users
              </span>
            </NavLink>

            {/* <NavLink
              to="admin-customize"
              className={(props) => {
                return `${
                  props.isActive && "bg-gray-300"
                } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
              }}
            >
              <GoPlug size={20} className="opacity-75" />
              <span className="ml-3 md:text-sm text-xs md:font-medium">
                Customize
              </span>
            </NavLink> */}

            <NavLink
              to="admin-jobs"
              className={(props) => {
                return `${
                  props.isActive && "bg-gray-300"
                } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
              }}
            >
              <IoBookmarksOutline size={20} className="opacity-75" />
              <span className="ml-3 md:text-sm text-xs md:font-medium">
                Jobs
              </span>
            </NavLink>
            <NavLink
              to="admin-email-campaign"
              className={(props) => {
                return `${
                  props.isActive && "bg-gray-300"
                } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3 md:text-sm text-xs md:font-medium">
                Email Campaign
              </span>
            </NavLink>
            <details className="group">
              <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <BsFillFileEarmarkPostFill size={20} className="opacity-75" />
                <span className="ml-3 md:text-sm text-xs md:font-medium">
                  Posts
                </span>

                <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav className="mt-1.5 ml-8 flex flex-col">
                <NavLink
                  to="admin-add-post"
                  className={(props) => {
                    return `${
                      props.isActive && "bg-gray-300"
                    } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
                  }}
                >
                  <MdPostAdd size={20} className="opacity-75" />
                  <span className="md:ml-3 md:text-sm text-xs md:font-medium">
                    Add Post
                  </span>
                </NavLink>

                <NavLink
                  to="admin-all-posts"
                  className={(props) => {
                    return `${
                      props.isActive && "bg-gray-300"
                    } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="md:ml-3 md:text-sm text-xs md:font-medium">
                    All Posts
                  </span>
                </NavLink>
              </nav>
            </details>
            <details className="group">
              <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <BiCategoryAlt size={20} className="opacity-75" />
                <span className="ml-3 md:text-sm text-xs md:font-medium">
                  Category
                </span>

                <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav className="mt-1.5 ml-8 flex flex-col">
                <NavLink
                  to="admin-add-category"
                  className={(props) => {
                    return `${
                      props.isActive && "bg-gray-300"
                    } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
                  }}
                >
                  <MdPostAdd size={20} className="opacity-75" />
                  <span className="md:ml-3 md:text-sm text-xs md:font-medium">
                    Add Category
                  </span>
                </NavLink>
                <NavLink
                  to="admin-delete-category"
                  className={(props) => {
                    return `${
                      props.isActive && "bg-gray-300"
                    } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
                  }}
                >
                  <MdDeleteSweep size={20} className="opacity-75" />
                  <span className="md:ml-3 md:text-sm text-xs md:font-medium">
                    Delete Category
                  </span>
                </NavLink>
              </nav>
            </details>

            <details className="group">
              <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="ml-3 md:text-sm text-xs md:font-medium">
                  Account
                </span>
                <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <nav className="mt-1.5 ml-8 flex flex-col">
                <NavLink
                  to="admin-details"
                  className={(props) => {
                    return `${
                      props.isActive && "bg-gray-300"
                    } flex items-center md:text-sm text-xs md:font-medium rounded-lg hover:bg-gray-100 px-4 py-2 text-gray-700`;
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>
                  <span className="ml-3 md:text-sm text-xs md:font-medium">
                    Details
                  </span>
                </NavLink>
                <button
                  onClick={handleLogOut}
                  className="flex w-full items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span className="ml-3 md:text-sm text-xs md:font-medium">
                    Logout
                  </span>
                </button>
              </nav>
            </details>
          </nav>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <span className="flex shrink-0 items-center bg-white p-4 hover:bg-gray-50">
            <Avatar name={user.name} size="50" round={true} maxInitials={2} />
            <div className="ml-1.5">
              <p className="text-xs">
                <strong className="block uppercase font-extrabold">
                  {user.name}
                </strong>
              </p>
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
