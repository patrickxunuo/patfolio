import React from 'react'
import '../styles/ImageGrid.css'
import useFirestore from "../hooks/useFirestore"
import {motion} from 'framer-motion'

const ImageGrid = ({variant}) => {
    const {docs} = useFirestore('images')

    return (
        <motion.div className="lifepage__pic__grid" variants={variant} initial='initial' animate='animate' >
            {docs && docs.map(doc =>
                <motion.div className="lifepage__pic__wrap" key={doc.id} style={{backgroundImage: `url('${doc.url}')`}} whileHover={{opacity: 1}} layout
                initial={{opacity: 0}} animate={{opacity: 0.9, transition: {delay: 1, duration: 1}}}/>
            )}
        </motion.div>
    )
}

export default ImageGrid
