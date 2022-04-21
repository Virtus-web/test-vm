import { ThemeContext } from './context'
import { useState } from 'react'
import VideoUpload from './components/VideoUpload'
import VideoList from './components/VideoList'
// import Player from './components/Player'
import Header from './components/Header'

function App() {

    const [modal, setModal] = useState('')
    const activeModal = () => {
        setModal(modal === 'active' ? '' : 'active')
    }

    return (
        <div className='container'>
        <ThemeContext.Provider value={{ modal, activeModal }}>
            <Header />
            <VideoUpload />
            <VideoList />
            {/* <Player /> */}
        </ThemeContext.Provider>
        </div>
    )
}

export default App
