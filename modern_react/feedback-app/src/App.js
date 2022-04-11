import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackInput from './components/FeedbackInput'
import AboutPage from './pages/AboutPage'
import AboutLink from './components/AboutLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('The feedback will be deleted.')) {
            setFeedbackData(feedbackData.filter((feedback) => feedback.id !== id));
        }
    }
    
    const handleAdd = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedbackData([newFeedback, ...feedbackData]);
    }

    return (
    <FeedbackProvider>
        <div className="container">
            <Router>
                <Header />
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackInput handleAdd={handleAdd}/>
                            <FeedbackStats feedbackData={feedbackData} />
                            <FeedbackList feedbackData={feedbackData} handleDelete={deleteFeedback}/>
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<AboutPage/>}></Route>
                </Routes>
                <AboutLink />
            </Router>
        </div>
    </FeedbackProvider>
    )
}

export default App;