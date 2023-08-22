import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from "typewriter-effect";
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import logo from '../assets/logo.png'
import Cv from '../assets/MyCv.pdf'


const Home = () => {


    const clientCount = useRef(null)
    const projectCount = useRef(null)

    const animationClientsCount = () => {
        animate(0,80,{
            duration:2,
            onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
        });
    };
    const animationProjectCount = () => {
        animate(0,499,{
            duration:4,
            onUpdate:(k)=>(projectCount.current.textContent = k.toFixed()),
        });
    };

const animations = {
    h1:{
        initial:{
            x: '-100%',
            opacity: '0',
        },
            whileInView:{
                x:'0',
                opacity:'1',
            },
    },
    button:{
        initial:{
            y: '-100%',
            opacity: '0',
        },
            whileInView:{
                y:'0',
                opacity:'1',
            },
    }
}
  



  return <div id='home'>

<section>
        <div>
          <motion.h1  style={{
      fontFamily:'cursive',
    }} {...animations.h1}>
            Hi, I Am <br /> Kishan Kevadiya
          </motion.h1>

          <Typewriter
            options={{
              strings: ['A Full Stack Mern Developer','A Web Developer',"A Best Engineer", "A Designer", "A Student"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:kishankevadiya12345@gmail.com">Hire Me</a>
            <a href={Cv} download>
             <u> Resume <BsArrowUpRight /></u>
            </a>
          </div>

          <article>
            <p>
              <motion.span whileInView={animationClientsCount} ref={clientCount}></motion.span>+
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                  <motion.span  whileInView={animationProjectCount} ref={projectCount}>
                    500
                  </motion.span>+
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>kishankevadiya12345@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>

<section>




<img src={logo} alt="kishan" />
</section>
< BsChevronDown/>


  </div>
  
}

export default Home