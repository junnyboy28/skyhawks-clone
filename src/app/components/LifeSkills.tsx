import Image from 'next/image';

const LifeSkills = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
        TEACHING LIFE SKILLS THROUGH SPORTS
      </h2>
      <div className="flex flex-col sm:flex-row sm:justify-center gap-8 sm:gap-16">
        <button className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px] flex flex-col items-center border-2 border-transparent hover:border-blue-500 transition-all duration-300">
          <Image
            src="/images/SHawksLogo.png"
            alt="Skyhawks Logo"
            width={300}
            height={150}
            className="mx-auto mb-4"
          />
          <hr className="w-full border-gray-300 mb-4" />
          <p className="text-center text-gray-700 text-lg">
            Skill-Based Camps, After-School Programs, Classes & Leagues for Ages 4 to 14
          </p>
        </button>
        <button className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-[400px] flex flex-col items-center border-2 border-transparent hover:border-blue-500 transition-all duration-300">
          <Image
            src="/images/SuperTots-Logo-H-RGB.png"
            alt="SuperTots Logo"
            width={300}
            height={150}
            className="mx-auto mb-4"
          />
          <hr className="w-full border-gray-300 mb-4" />
          <p className="text-center text-gray-700 text-lg">
            Game-Based Classes & Enrichment Programs for Ages 18 Months to 5 Years
          </p>
        </button>
      </div>
    </section>
  );
};

export default LifeSkills;
