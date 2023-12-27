// links
import Link from "next/link";

// icons
import { 
  RiTwitterLine,
  RiFacebookLine,
  RiInstagramLine,   
  RiGithubLine, 
  RiLinkedinLine, 
  RiPinterestLine, 
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.twitter.com/robel_tade'} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/robel-tadesse-85b61a239/'} className="hover:text-accent transition-all duration-300">
        
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.instagram.com/robel_tade'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/robel-tadesse-85b61a239/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
        
      </Link>
    </div>
  );
};

export default Socials;
// line 33 <RiPinterestLine />