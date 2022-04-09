import React from 'react'
import List from './List'
import Item from './Item'
import {motion, AnimatePresence} from "framer-motion"
import {BrowserRouter as Router, Route} from 'react-router-dom'


const Project = ({match}) => {
    let {id} = match.params
    const imageHasLoaded = true

    return (
        <>
            <List selectedId={id}/>
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item"/>}
            </AnimatePresence>
        </>
    )
}

const Projects = () => {

    return (
        <motion.div className="projects" >
            <Router>
                <Route path={["/project/:id", "/project"]} component={Project} />
            </Router>
        </motion.div>
    )
}


export default Projects
