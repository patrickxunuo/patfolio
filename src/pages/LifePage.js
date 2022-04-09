import React, {useState, useEffect} from 'react'
import Leaves from "../img/testing.jpg"
import UploadForm from "../components/UploadForm";
import {motion, AnimatePresence} from 'framer-motion'
import '../styles/LifePage.css'
import ImageGrid from "../components/ImageGrid";


const LifePage = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTran, setIsTran] = useState(false)
    const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]};

    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    let variants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {duration: 1, when: 'beforeChildren'}
        },
        exit: {
            opacity: 0,
            transition: {duration: 1, when: 'afterChildren'}
        }
    }

    let textVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: {duration: 1}
        }
    }

    let imgVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
            transition: {duration: 1, ease: 'easeOut'}
        }
    }


    let transImgVariants = {
        initial: {
            width: 'auto',
            y: 0,
        },
        animate: {
            width: windowWidth * 0.9,
            height: 'auto',
            y: -(windowWidth * 0.4),
            transition: {delay: 0.3, ...transition}
        },
        exit: {
            y: -(windowHeight * 0.2) - 100,
            opacity: 0,
            transition: {...transition}
        }
    }

    let transTextVariants = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {...transition}
        }
    }

    let galleryVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 0.9,
        }
    }

    const handleExpand = () => {
        setIsExpanded(true)
        setIsTran(true)
        setTimeout(() => setIsTran(false), 3000)
    }

    return (
        <AnimatePresence>
            {!isExpanded &&
            <motion.section className="lifepage" variants={variants} initial='initial' animate='animate' exit='exit'>
                <motion.div className="port-wrap-vertical lifepage__wrap">
                    <motion.div key="text" className="text lifepage__text" variants={textVariants} initial='initial'
                                animate='animate'
                                exit='exit'>
                        I love exploring life.
                    </motion.div>
                    <motion.img className="lifepage__img" key="img" src={Leaves} alt="explore" variants={imgVariants} initial='initial'
                                animate='animate' exit='exit'/>
                </motion.div>
                <div className="lifepage__btn__wrap">
                    <button className="lifepage__btn" onClick={handleExpand}>More</button>
                </div>
            </motion.section>
            }
            {
                isExpanded &&
                <section className='lifepage__special'>
                    <div className="port-wrap-vertical lifepage__special__wrap">
                        {
                            isTran &&
                            <motion.div key="text" className="text lifepage__special__text " variants={transTextVariants}
                                        initial='initial'
                                        animate='animate'>
                                I love exploring life.
                            </motion.div>
                        }
                        <motion.img className="lifepage__special__img" src={Leaves} alt="" variants={transImgVariants} initial='initial'
                                    animate='animate'/>
                    </div>
                    {
                        !isTran &&
                        <>
                            <motion.div style={{height: windowHeight * 0.4}}/>
                            <motion.div className="text lifepage__special__text__after" variants={galleryVariants} initial='initial'
                                        animate='animate'>
                                MY GALLERY
                            </motion.div>
                            <UploadForm variant={galleryVariants}/>
                            <ImageGrid variant={galleryVariants}/>
                        </>
                    }
                </section>
            }
        </AnimatePresence>
    )
}

export default LifePage
