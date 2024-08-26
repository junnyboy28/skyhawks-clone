import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-white py-10"
      style={{ backgroundImage: "url('/images/soccerfl.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-2">FIND YOUR PROGRAM</h3>
          <div className="space-y-1 flex flex-wrap">
            <ul className="mr-8 mb-4">
              {['Baseball', 'Basketball', 'Cheerleading', 'Flag Football', 'Golf', 'Lacrosse'].map((item, index) => (
                <li key={index} className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">{item}</li>
              ))}
            </ul>
            <ul>
              {['Soccer', 'Tennis', 'Track & Field', 'Volleyball', 'STEM Sports®', 'SuperTots'].map((item, index) => (
                <li key={index} className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-2">BROWSE THE SITE</h3>
          <ul className="space-y-1">
            {['Contact Us', 'FAQ', 'About', 'Blog', 'Store', 'Franchise', 'Evaluations', 'Positive Coaching Alliance'].map((item, index) => (
              <li key={index} className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-2">A BIT ABOUT US</h3>
          <p className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
            Learn more about our programs and how we impact the community.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-2">FOLLOW US:</h3>
          <ul className="space-y-1">
            {['Facebook', 'YouTube', 'Twitter', 'Instagram'].map((item, index) => (
              <li key={index} className="hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
                <a href="#" className="flex items-center space-x-2">
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <p className="mb-2 text-sm">Powered by:</p>
            <Image src="/images/footact.jpg" alt="Powered by Activity Tree" width={150} height={80} />
          </div>
        </div>
      </div>
      <div className="relative mt-8 px-6 text-center text-sm sm:text-base">
        <p>
          Looking to log in to the old registration site to view your purchase history or download tax forms?{' '}
          <a href="#" className="underline hover:text-yellow-300 transition-colors duration-300 cursor-pointer">CLICK HERE</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
