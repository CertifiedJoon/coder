import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackInput from './components/FeedbackInput'

function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData)

    const deleteFeedback = (id) => {
        if (window.confirm('The feedback will be deleted.')) {
            setFeedbackData(feedbackData.filter((feedback) => feedback.id !== id));
        }
    }
    
    return (
    <div className="container">
        <Header />
        <FeedbackInput />
        <FeedbackStats feedbackData={feedbackData} />
        <FeedbackList feedbackData={feedbackData} handleDelete={deleteFeedback}/>
    </div>
    )
}

export default App;