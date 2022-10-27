import TeamMember from "./TeamMember";

function TeamMembers() {
  const teamMembers = [
    {
      _id: 1,
      name: "Hamid Rahaman",
      designation: "CEO",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 2,
      name: "Ibrahim Halder",
      designation: "CTO",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 3,
      name: "Rasel Mahamud",
      designation: "Director",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/7.jpg",
    },
    {
      _id: 4,
      name: "Nayim Hossen",
      designation: "Product Manager",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg",
    },
    {
      _id: 5,
      name: "Janifer Tulshi",
      designation: "Digital Markater",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/3.jpg",
    },
    {
      _id: 6,
      name: "Jerry Hudson",
      designation: "Diractor",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/7.jpg",
    },
    {
      _id: 7,
      name: "Mac Jonas",
      designation: "Developer",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/4.jpg",
    },
    {
      _id: 8,
      name: "Tom Potter",
      designation: "Suport Manager",
      img: "https://templates.hibootstrap.com/gable/default/assets/img/home-1/profile/1.jpg",
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
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member) => (
            <TeamMember key={member._id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
