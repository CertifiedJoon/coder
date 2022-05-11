import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {db} from '../firebase.config'
import {getDocs, query, orderBy, limit, collection} from 'firebase/firestore'
import {Pagination} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

function Slider() {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchListing = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
      const querySnap = await getDocs(q)

      let listings = []

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data()
        })
      })

      setListings(listings)
      setLoading(false)
    }
    fetchListing()
  }, [])
  
  if (loading) {
    return <h3>Loading...</h3>
  }
  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>

        <Swiper slidesPerView={1} pagination={{clickable: true}} modules={[Pagination]}>
        {listings.map(({data, id}) => (
          <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
            <div style={{background: `url(${data.imageUrls[0]}) center no-repeat`, backgroundSize:'cover'}}className="swiperSlideDiv">
              <p className="swiperSlideText">{data.name}</p>
              <p className="swiperSlidePrice">${data.offer ? data.discountedPrice : data.regularPrice }</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </>
    )
  )
}

export default Slider