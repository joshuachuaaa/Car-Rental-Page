import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1300px] mx-auto px-4 border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-8">
        <div className="flex flex-row items-start md:items-center space-x-4 w-full">
          <div className="w-20 h-20 relative">
            <Image src="/car-icon-black.png" layout="fill" objectFit="contain" alt="Car Icon"/>
          </div>
          <div className="space-y-4 mb-8 md:mb-0">
            <h3 className="font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li>Cars</li>
              <li>Futures</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Subscribe to News</h3>
          <div className="flex">
            <input
                type="email"
                placeholder="Your e-mail"
                className="bg-gray-100 px-4 py-2 rounded-l-full"
            />
            <button className="bg-gray-800 text-white px-4 py-2 rounded-r-full w-[160px]">
                Subscribe
            </button>
            </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-4 border-t border-gray-200">
        <div className="space-x-4">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
