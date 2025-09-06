import logo from "../../assets/lg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faFacebook,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">

        
        <div className="flex items-center space-y-2">
          <img src={logo} alt="Thyro Health Logo" className="h-10 w-10" />
          <span className="text-xl font-semibold text-white">Thyro Health</span>
        </div>

        
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-center">
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white">Security</a></li>
          <li><a href="#" className="hover:text-white">Sitemap</a></li>
        </ul>

       
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 
                       hover:bg-blue-500 hover:shadow-[0_0_15px_#1DA1F2] 
                       transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-lg text-white" />
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 
                       hover:bg-gray-600 hover:shadow-[0_0_15px_#6e7681] 
                       transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub} className="text-lg text-white" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 
                       hover:bg-blue-600 hover:shadow-[0_0_15px_#1877F2] 
                       transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-lg text-white" />
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 
                       hover:bg-pink-500 hover:shadow-[0_0_15px_#EA4C89] 
                       transform hover:scale-110 transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={faDribbble} className="text-lg text-white" />
          </a>
        </div>

    
        <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 pt-6 border-t border-gray-700 text-sm">
          
         
          <div className="flex justify-center md:justify-start">
            <select className="bg-gray-800 text-gray-300 px-5 py-2 rounded w-40">
              <option>English</option>
              <option>Urdu</option>
              <option>Punjabi</option>
            </select>
          </div>

          
          <div className="flex justify-center md:justify-end text-gray-500">
            © {new Date().getFullYear()} Thyro Health. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
