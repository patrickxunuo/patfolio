import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-brands-svg-icons";
import {motion} from "framer-motion";

const MediaIcon = (props) => {
    const checkMediaOpen = props.checkMediaOpen
    const mediaName = props.mediaName

    return (
        <motion.div className='socialpage__icon'
                    style={{opacity: checkMediaOpen(mediaName)}}>
            <FontAwesomeIcon icon={Icons[`fa${mediaName}`]}/>
        </motion.div>
    )
}

export default MediaIcon
