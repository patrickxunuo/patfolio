import React from 'react'
import Selfie from "../img/aboutme.png";
import {motion} from 'framer-motion'
import '../styles/HomePage.css'

const HomePage = () => {
    let containerVariants = {
        initial: {
            opacity: 0,
            backgroundColor: 'black',
        },
        animate: {
            opacity: 1,
            backgroundColor: 'white',
            transition: {duration: 1, when: 'beforeChildren'}
        },
        exit: {
            opacity: 0,
            backgroundColor: 'white',
            transition: {duration: 1, when: 'afterChildren'},
        }
    }

    let textVariants = {
        initial: {
            y: -100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {duration: 1, delay: 1}
        },
        exit: {
            y: -100,
            transition: {duration: 1}
        }
    }

    let imgVariants = {
        initial: {
            opacity: 0,
            scale: 1.5,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {duration: 1},
        },
        exit: {
            opacity: 0,
            transition: {duration: 1}
        }
    }

    return (
        <motion.section className="homepage" variants={containerVariants} initial='initial' animate='animate'
                        exit='exit'>
            <motion.div className="port-wrap-horizontal homepage__wrap">
                <motion.img className="homepage__img" src={Selfie} alt="me" variants={imgVariants} initial='initial'
                            animate='animate' exit='exit'/>
                <motion.div className="homepage__text" variants={textVariants} initial='initial' animate='animate'
                            exit='exit'>
                    <div className="text ">Hi, I am Patrick Xu.</div>
                    <div className="text ">I am a web developer.</div>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default HomePage
