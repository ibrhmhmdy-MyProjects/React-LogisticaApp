import './About.css'
import {imgAbout} from '../../assets/images'
import { AboutContent, AboutImage } from '../../components/index'

const About = () => {
   return ( 
      <div className='container-fluid overflow-hidden py-5 px-lg-0'>
         <div className='container about py-5 px-lg-0' >
            <div className='row g-5 mx-lg-0'>
               <AboutImage image={imgAbout} />
               <AboutContent/>
            </div>
         </div>
      </div>
   )
}

export default About