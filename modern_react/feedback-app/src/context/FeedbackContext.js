import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([{
    id: 'A',
    text: 'This is feedback one',
    rating: 10
  },]);

  return (
    <FeedbackContext.Provider value={{feedback,}}>
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;