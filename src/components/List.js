import React from 'react'
import {items} from "../projectData";
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodepen, faGithub} from "@fortawesome/free-brands-svg-icons";

const Card = ({id, title, url, source}) => {
    let oddVariants = {
        initial: {
            left: 400,
            opacity: 0,
        },
        animate: {
            left: 300,
            opacity: 1,
            transition: {duration: 1}
        },
        exit: {
            left: 400,
            opacity: 0,
            transition: {duration: 1}
        }
    }
    let evenVariants = {
        initial: {
            right: 400,
            opacity: 0,
        },
        animate: {
            right: 300,
            opacity: 1,
            transition: {duration: 1, delay: 0.5}
        },
        exit: {
            right: 400,
            opacity: 0,
            transition: {duration: 1}
        }
    }

    return (
        <motion.li className={"card"} variants={id === 'a' || id === 'c' ? oddVariants : evenVariants} initial='initial'
                   animate='animate' exit='exit'>
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="card-image" src={`images/${id}.png`} alt=""/>
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link to={`/project/${id}`} className={`card-open-link`}/>
            <div className="card-link">
                <a href={url} target="blank">
                    <FontAwesomeIcon icon={faCodepen}/>
                </a>
                {source !== '' &&
                <a href={source} target="blank">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                }
            </div>
        </motion.li>
    )
}


const List = ({selectedId}) => {

    return (
        <ul className="card-list">
            {items.map(card => (
                <Card key={card.id} {...card} isSelected={card.id === selectedId}/>
            ))}
        </ul>
    )
}
export default List
