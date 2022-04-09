import React from 'react'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {items} from "../projectData";

const Item = ({id}) => {
    const {title, description} = items.find(item => item.id === id);

    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, transition: {duration: 0.15}}}
                transition={{duration: 0.2, delay: 0.15}}
                style={{pointerEvents: "auto"}}
                className="overlay"
            >
                <Link to="/project"/>
            </motion.div>
            <div className="card-content-container open">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                    >
                        <img className="card-image" src={`../images/${id}.png`} alt=""/>
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${id}`}
                    >
                        <h2>{title}</h2>
                    </motion.div>
                    <motion.div className="content-container" animate>
                        <p>{description} </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Item
