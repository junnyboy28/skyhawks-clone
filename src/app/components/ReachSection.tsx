import Image from 'next/image';

export default function ReachSection() {
  return (
    <div className="flex justify-center mt-16">
      <section className="bg-white w-[1000px] text-center py-8 px-4">
        <h2 className="text-blue-800 text-2xl font-bold mb-2">JOIN THE LEADING YOUTH SPORTS FRANCHISE</h2>

        <div className="mb-6">
          <Image src="/images/hr-iron-cross_1.png" alt="Decorative line" width={1000} height={10} className="mx-auto" />
        </div>

        <div className="mb-8">
          <Image 
            src="/images/us_map_icon_4.png" 
            alt="Awards, Recognition, and Our Reach" 
            width={1000} 
            height={600} 
            className="mx-auto"
          />
        </div>

        <p className="text-blue-800 mt-4 text-lg">Domestic & International Franchise Opportunities</p>

        <button className="mt-6 bg-orange-500 text-white font-bold py-3 px-12 text-lg uppercase">
          LEARN MORE
        </button>
      </section>
    </div>
  );
}
