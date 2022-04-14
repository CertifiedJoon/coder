import {createContext, useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const response = await fetch ('http://localhost:5000/feedback?_sorted=id&_order=desc')
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const deleteFeedback = (id) => {
    if (window.confirm('The feedback will be deleted.')) {
        setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const updateFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    if (feedbackEdit.edit) {
      setFeedback(feedback.map((item) => {
        if (feedbackEdit.item.id === item.id) {
          return newFeedback
        } else {
          return item
        }
      }))
    }
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
      isLoading}}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;