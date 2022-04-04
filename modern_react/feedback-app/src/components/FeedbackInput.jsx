import Card from './shared/Card'
import Button from './shared/Button'
import {useState} from 'react'

function FeedbackInput() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMsg("");
    } else if (text.trim().length < 10) {
      setMsg("Feedback must be at ledast 10 characters long");
    } else {
      setMsg("")
      setBtnDisabled(false)
    }
    console.log(e.target.value);
  }

  return (
    <Card>
      <form>
        <h4>How would you rate our service?</h4>
        <div className="input-group">
          {/* @Todo: place rating selection */}
          <input onChange={handleChange} type="text" placeholder="Write your review here" />
          <Button isDisabled={btnDisabled}>Submit</Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackInput