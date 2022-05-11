import {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import {db} from '../firebase.config'
import {doc, getDoc} from 'firebase/firestore'
import {toast} from 'react-toastify'

function Contact() {
  const [landlord, setLandlord] = useState(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useParams()

  useEffect(() => {
    const fetchLandlord = async () => {
      const docRef = doc(db, 'users', params.landlordId)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        setLandlord(docSnap.data())

      } else {
        toast.error('Landlord not found')
      }
    }
    fetchLandlord();
    setLoading(false);
  }, [params.landlordId])

  const onChange = e => (setMessage(e.target.value));

  if (loading) {
    return <h3>Loading</h3>
  }
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Contact Landlord</p>
      </header>
      {landlord !== null && (
        <main>
          <div className="contactLandlord">
            <p className="landlordName">
              Contact {landlord.name}
            </p>
          </div>

          <form className="messageForm">
            <div className="messageDiv">
              <label htmlFor="message" className="messageLabel">
                Message
              </label>
              <textarea name="message" id="message" cols="30" rows="5" className="textarea" value={message} onChange={onChange}></textarea>
            </div>

            <a href={`mailto:${landlord.email}?Subject=${searchParams.get(
              'listingName'
            )}&body=${message}`}>
              <button type='button' className="primaryButton">Send Message</button>
            </a>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact