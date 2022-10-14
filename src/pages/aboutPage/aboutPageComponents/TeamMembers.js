import TeamMember from "./TeamMember";

function TeamMembers() {
  const teamMembers = [
    {
      _id: 1,
      name: "Dr. AR Rahaman",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 2,
      name: "Dr. Ibrahim Halder",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 3,
      name: "Dr. Aklima Shikder",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 4,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 5,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 6,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 7,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: "",
    },
    {
      _id: 8,
      name: "Dr. Janifer Tulshi",
      designation: "Dentist",
      img: "",
    },
  ];
  return (
    <section className="bg-[#F9FCFF] py-16">
      <div className="container mx-auto px-5">
        <div className="text-center mb-4 md:mb-8 lg:mb-16">
          <p className="text-xl md:text-xl font-bold uppercase text-primary mb-1">
            OUR COMPANY
          </p>
          <h1 className="text-2xl md:text-4xl font-bold">Meet Our Team</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member._id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
