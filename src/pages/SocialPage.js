import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import MediaIcon from "../components/MediaIcon";
import '../styles/SocialPage.css'
import mediaLinks from "../mediaLinks";

const SocialPage = () => {
    const [mediaInput, setMediaInput] = useState('')
    const [mediaOpened, setMediaOpened] = useState([])

    useEffect(() => {
        let mediaPresent = mediaLinks.find(media=> media.mediaName.toUpperCase() === mediaInput)
        if(!!mediaPresent){
            window.open(mediaPresent.mediaUrl, 'blank')
            setMediaOpened([...mediaOpened, mediaInput])
            setMediaInput('')
        }
    }, [mediaInput])

    const inputVariants = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {duration: 1}
        },
        exit: {
            opacity: 0,
            transition: {duration: 1}
        }
    }

    const checkMediaOpen = (mediaName) => {
        if (mediaOpened.includes(mediaName.toUpperCase())) {
            return 1
        }
        if (mediaName.toUpperCase().includes(mediaInput) && mediaInput !== '') {
            return 0.3
        }
        return 0
    }

    return (
        <section className='socialpage'>
            <motion.input className='socialpage__input' type="text" placeholder="Input media..."
                          variants={inputVariants}
                          initial='initial'
                          animate='animate'
                          exit='exit'
                          value={mediaInput.toUpperCase()}
                          onChange={evt => {
                              setMediaInput(evt.target.value.toUpperCase())
                          }} autoFocus/>
            <div className='socialpage__icon__wrap'>
                {
                    mediaLinks.map(media=>
                        <MediaIcon checkMediaOpen={checkMediaOpen} mediaName={media.mediaName} key={media.mediaName}/>
                    )
                }
            </div>
        </section>
    )
}

export default SocialPage
