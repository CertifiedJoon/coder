import {useState, useEffect} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/bundle'
import {doc, getDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {getAuth} from 'firebase/auth'
import shareIcon from '../assets/svg/shareIcon.svg'


function Listing() {
  const [listing, setListing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const auth = getAuth()

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId);
      const docSnap = await getDoc(docRef)

      if (docSnap.exists) {
        setListing(docSnap.data())
        setLoading(false)
      } else {
        toast.error('No Listing Found')
      }
    }

    fetchListing()
  }, [navigate, params.listingId])

  if (loading) {
    return <h3>Loading...</h3>
  } else {
    return <main>
      <Swiper slidesPerView={1} pagination={{clickable: true}} modules={[Pagination]}>
        {listing.imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="" className="swiperSlideImg"/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="shareIconDiv" onClick={() => {
        navigator.clipboard.writeText(window.location.href)
        setShareLinkCopied(true)
        setTimeout(() => {
          setShareLinkCopied(false)
        }, 2000)
      }}>
        <img src={shareIcon} alt="share" />
      </div>

      {shareLinkCopied && <p className='linkCopied'>Link Copied</p>}

      <div className="listingDetails">
        <p className="listingName">
          {listing.name} - $0{listing.offer ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p className="listingLocation">{listing.location}</p>
        <p className="listingType">
          For {listing.type === 'rent' ? 'Rent' : 'Sale'}
        </p>
        {listing.offer && (
          <p className="discountPrice">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}

        <ul className="listingDetailsList">
          <li>{listing.bedrooms > 1 ? `${listing.bedrooms} bedrooms` : '1 bedroom'}</li>
          <li>{listing.bathrooms > 1 ? `${listing.bathrooms} bathrooms` : '1 bathroom'}</li>
          <li>{listing.parking && 'Parking Spot'}</li>
          <li>{listing.furnished && 'Furnished'}</li>
        </ul>

        <p className="listingLocationTitle">Location</p>

      {/* Map */}

        {auth.currentUser?.uid !== listing.userRef && (
          <Link to={`/contact/${listing.userRef}?listingName=${listing.name}`} className='primaryButton'>Contact Landlord</Link>
        )}
      </div>
    </main>
  }
}

export default Listing