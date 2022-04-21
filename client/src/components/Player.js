import '../style/player.css'
import { ThemeContext } from '../context'
import { useContext, useState, useEffect } from 'react'
import axios from 'axios'

function Player({currentVideo}) {
    
    const { modal, activeModal } = useContext(ThemeContext)

    const [ video, setVideo ] = useState('')

    useEffect(() => {
        setVideo(currentVideo)
    }, [currentVideo])

    axios
    .get('http://localhost:4000/api/files', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        setVideo(res.data)
    })

    return (
        <div className={`lightbox ${modal}`}>
            <button className="lightbox__close" onClick={() => {
                setVideo(currentVideo)
                activeModal()
            }}>Close</button>
            <div className="lightbox__container">
                {
                    video ? (
                        video.map((index) => {
                    
                            return (
                                <div key={index} className="photo-box">
                                    <video controls alt="trailer" width="100%" height="300">
                                        <source src={`../../`} type="video/mp4" />
                                    </video>
                                </div>
                            )
                        })) : (null)
                }
            </div>
        </div>
    )
}

export default Player
