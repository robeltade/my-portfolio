import Image from "next/image";

//next link
import Link from "next/link";

//icons
import { HiArrowRight } from "react-icons/hi2";


const ProjectsBtn = () => {
  return (
     <div className='mx-auto xl:mx-0'>
      <Link href={'/work'}
      className='relative w-[165px] h-[165px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group  bottom-10'>
        <Image 
        src={'/rounded-text.png'}
        width={121}
        height={128}
        alt="my project"
        className='animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]'/>
        <HiArrowRight  className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
      
      </Link>
     </div>

  );
};

export default ProjectsBtn;
