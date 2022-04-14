import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackInput from './components/FeedbackInput'
import AboutPage from './pages/AboutPage'
import AboutLink from './components/AboutLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    return (
    <FeedbackProvider>
        <div className="container">
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackInput />
                            <FeedbackStats />
                            <FeedbackList />
                        </>
                    }>
                    </Route>
                    <Route exact path='/about' element={<AboutPage/>}></Route>
                </Routes>
                <AboutLink />
            </Router>
        </div>
    </FeedbackProvider>
    )
}

export default App;