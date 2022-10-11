import LineChart from "../adminPageComponents/LineChart";
import AllState from "../adminPageComponents/AllState";

export default function AdminDashboard() {
  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 relative md:top-20 top-28">
        <div className="px-3 md:px-8">
          <div className="container h-max">
            <LineChart />
          </div>
          <div className="container my-20">
            <AllState />
          </div>
        </div>
      </div>
    </>
  );
}
