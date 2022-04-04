import PropTypes from 'prop-types'

function FeedbackStats({feedbackData}) {
  let avr = feedbackData.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedbackData.length;

  avr = avr.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedbackData.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avr) ? 0 : avr}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedbackData : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string
    })
  )
}

export default FeedbackStats