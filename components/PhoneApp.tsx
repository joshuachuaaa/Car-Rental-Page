"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // This might need installation: npm install react-intersection-observer


const PhoneApp = () => {

    const controls = useAnimation();

    const {ref,inView} = useInView({
        triggerOnce : true,
        threshold : 0.5
    })

    useEffect(()=>{
        if (inView){
            controls.start('visible')
        }
        else{
            controls.start('hidden')
        }
    },[controls,inView])

    const variants = {
        hidden: { 
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0, 
            transition: {
                duration: 0.7,
                ease: "easeOut"
              }
        }
    };

    return (
        <div className='phone-section'>

            <div className='section-wrapper'>
                <div className='app-graphic-wrapper'>
                    <motion.div 
                        className='app-graphic'
                        ref = {ref}
                        initial='hidden'
                        animate={controls}
                        variants={variants}>
                        <Image  src="/phoneappmockup.png" 
                                alt="mockup" 
                                objectFit='contain'
                                objectPosition='center'
                                layout='fill'></Image>
                    </motion.div>
                </div>
                <motion.div className='app-graphic-text'
                        initial='hidden'
                        animate={controls}
                        variants={variants}>
                    <text className='app-header-text'>Comprehensive App</text>
                    <p className='app-p-text'>
                        Our all-encompassing app to browse and manage your orders 
                        coupled with 24/7 customer service all directly in the app.
                    </p>
                    <div className='app-buttons'>
                        <Image src='/download_app_store.svg' alt='app-store-btn' width={150} height={100}/>
                        <Image src='/download_google_play.svg' alt='app-store-btn' width={150} height={100}/>
                    </div>
                </motion.div>     

            </div>
        </div>
    )
    }

export default PhoneApp