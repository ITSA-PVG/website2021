import React, { useEffect } from 'react'
import Parallax from 'parallax-js'
import ScrollAnimation from 'react-animate-on-scroll'

import './landing.css'
import parallaxgreen from '../../assets/parallax-green.svg'
import parallaxyellow from '../../assets/parallax-yellow.svg'
import parallaxblue from '../../assets/parallax-blue.svg'
import parallaxgrey from '../../assets/parallax-grey.svg'
import ITSALogo from '../../assets/logo.png'

const Landing = ({
    props
}) => {

    useEffect(() => {
        let scene = document.getElementById('scene')
        new Parallax(scene, {
            invertX: false,
            invertY: false,
            clipRelativeInput: true,
            scalarX: 7,
            scalarY: 7
        })
    })

    const goToAbout = () => {
        window.scrollTo({
            top: window.innerHeight * 0.95,
            left: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.scroll({
            top:0,
            left:0,
            behavior:'smooth'
        })
    }, [])

    return (
        <div className="section-container landing-container">
            
            <div id="scene"> 

                <div data-depth={0.8} className="parallax-green-large">
                    <img src={parallaxgreen} className="parallax-shadow"/>
                </div>
                <div data-depth={0.3} className="parallax-yellow-large">
                    <img src={parallaxyellow} className="parallax-shadow"/>
                </div>
                <div data-depth={0.15} className="parallax-blue-large">
                    <img src={parallaxblue} className="parallax-shadow"/>
                </div>
                <div data-depth={0.4} className="parallax-grey-large">
                    <img src={parallaxgrey} className="parallax-shadow"/>
                </div>
                <div data-depth={0.7} className="parallax-green-small">
                    <img src={parallaxgreen} className="parallax-shadow"/>
                </div>
                <div data-depth={0.5} className="parallax-yellow-small">
                    <img src={parallaxyellow} className="parallax-shadow"/>
                </div>
                <div data-depth={0.9} className="parallax-blue-small">
                    <img src={parallaxblue} className="parallax-shadow"/>
                </div>
                <div data-depth={0.7} className="parallax-grey-small">
                    <img src={parallaxgrey} className="parallax-shadow"/>
                </div>

            </div>

            <div className="landing-info">

                <img src={ITSALogo} className="mobile-logo"/>
                
                <ScrollAnimation 
                    animateIn="zoomIn"
                    delay={200}
                    duration={1.2}
                    animateOnce
                >

                    <div className="slogan">
                        <p className="h0 ta-center white">
                            Information Technology
                        </p>
                        <p className="h0 ta-center white">
                            Students Association
                        </p>
                        <p className="h4 ta-center mediumgrey" style={{letterSpacing: 1.3, marginTop: 20, fontSize: 20}}>
                            PVGCOET & GKPWIM
                        </p>
                        {/* <p className="h0 ta-center linear-wipe">
                            get developed
                        </p>
                        <p className="h0 ta-center white">
                            into products
                        </p> */}
                    </div>

                </ScrollAnimation>

                <ScrollAnimation 
                    animateIn="fadeIn"
                    delay={1000}
                    duration={1}
                    animateOnce
                >
                    <p className="h3 blue linear-wipe" style={{fontWeight: 600, letterSpacing: 1}}>#ExploreToInspire</p>
                    
                </ScrollAnimation>

                <ScrollAnimation 
                    animateIn="fadeIn"
                    offset={0}
                    delay={1500}
                    animateOnce
                >
 
                    <button className="know-more-button" onClick={goToAbout}>
                        <p className="h4 white" style={{letterSpacing: 1, margin:'0px 10px'}}>Explore ITSA Activities</p>
                    </button>

                </ScrollAnimation>
                
            </div>

        </div>
    )
}

export default Landing