import Image from 'next/image';

const Signmeup = () => {
  return (
    <div className="bg-orange-600 text-white flex items-center justify-center px-5 py-2 ">
      <div className="flex items-center">
        <Image src="/images/email_icon_2.png" alt="Email Icon" width={150} height={150} />
        <div className="mx-6 text-center">
          <p className="text-xl leading-tight">Get updates and discounts</p>
          <p className="text-xl leading-tight">delivered right to your inbox.</p>
        </div>
        <button className="bg-white text-orange-600 font-bold py-2 px-4">
          SIGN ME UP!
        </button>
      </div>
    </div>
  );
};

export default Signmeup;
