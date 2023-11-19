import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialLink = () => {
//   console.log(porps);
  return (
    <ul className="flex gap-4">
      <li className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center text-2xl">
      <Link to='/' className="text-white">
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
      </li>
      <li className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center text-2xl">
      <Link to='/' className="text-white">
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      </li>
      <li className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center text-2xl">
      <Link to='/' className="text-white">
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      </li>
      <li className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center text-2xl">
      <Link to='/' className="text-white">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Link>
      </li>
    </ul>
  );
};

export default SocialLink;
