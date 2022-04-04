import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function FeedbackList({feedbackData, handleDelete}) {
  if (!feedbackData || feedbackData.length === 0) {
    return <p> No Feedback Yet </p>
  }

  return (
    <div className="feedbackList">
      {feedbackData.map((feedback) => {
        return <FeedbackItem key={feedback.id} feedback={feedback} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

FeedbackList.propTypes = {
  feedbackData : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}

export default FeedbackList