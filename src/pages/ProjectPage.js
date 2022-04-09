import React from 'react'
import {motion, AnimateSharedLayout} from "framer-motion";
import Projects from "../components/Projects";
import '../styles/ProjectPage.css'

const ProjectPage = () => {
    let variants = {
        initial: {
            opacity: 0,
            backgroundColor: 'white',
        },
        animate: {
            opacity: 1,
            backgroundColor: 'black',
            transition: {duration: 1, when: 'beforeChildren'},
        },
        exit: {
            opacity: 0,
            backgroundColor: 'black',
            transition: {duration: 0.5, when: 'afterChildren', delay: 0.5},
        }
    }


    return (
        <AnimateSharedLayout type="crossfade">
            <motion.section className='section-project' variants={variants} initial='initial' animate='animate'
                            exit='exit'>
                <div className="port-wrap-vertical port-project">
                    <div className="text text-2">I create websites and widgets.</div>
                    <Projects/>
                </div>
                <motion.div className="projects-line"/>
                <motion.div className="projects-line-dark"/>
                }
            </motion.section>
        </AnimateSharedLayout>
    )
}

export default ProjectPage
