import React, {useState} from 'react'
import ProgressBar from "./ProgressBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import '../styles/UploadForm.css'
import {motion} from 'framer-motion'

const UploadForm = ({variant}) => {
    const [file, setFile] = useState(null)
    const [fileError, setFileError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const handleUpload = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setFileError('')
        } else {
            setFile(null)
            setFileError('Please select an image file (png or jpeg)')
        }
    }

    return (
        <motion.form variants={variant} initial='initial' animate='animate'>
            <input type="file" id="image-upload" onChange={handleUpload}/>
            <label htmlFor="image-upload">
                <FontAwesomeIcon icon={faPlus}/>
            </label>
            <div className="file-output">
                {fileError && <div className="file-error">{fileError}</div>}
                {file && <div className="file-name">{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </motion.form>

    )
}

export default UploadForm
