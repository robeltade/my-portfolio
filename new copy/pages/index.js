import Image from 'next/image';

import particlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer notion
import { motion } from 'framer-motion';
//variants
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          <h1 className='h1'>
            Transforming Ideas <br/> Into <span className='text-accent'>Digital Reality</span>
          </h1>
          <motion.p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac leo in ex porttitor fermentum. Sed mattis ullamcorper neque, quis malesuada mauris ultrices quis. Vestibulum  
          </motion.p>
          <div className=''>
          
          </div>
          <motion.div className=' flex justify-center bottom-5 relative  xl:flex' 
             //variants={fadeIn('down', 0.4)}
             initial='hidden'
             animate='show'
             exit='hidden'
             >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
        <div className='w-[1200px] h-full absolute right-0 bottom-0'>
          <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
        </div>
    </div>
  )
};

export default Home;
