import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useContext, useState, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackInput() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');

  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit){
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit])

  const handleChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMsg("");
    } else if (text.trim().length < 10) {
      setMsg("Feedback must be at least 10 characters long");
    } else {
      setMsg("")
      setBtnDisabled(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      addFeedback(newFeedback)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h4>How would you rate our service?</h4>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleChange} type="text" placeholder="Write your review here" value={text}/>
          <Button type='Submit' isDisabled={btnDisabled}>Submit</Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackInput