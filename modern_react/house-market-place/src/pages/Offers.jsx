import {useEffect, useState} from 'react'
import {collection, getDocs, query, where, orderBy, limit, startAfter} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import ListingItem from '../components/ListingItem'

function Offers() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(2))
        const querySnap = await getDocs(q)
        const lastVisible = querySnap.docs[querySnap.docs.length - 1]
        setLastFetchedListing(lastVisible)
        let listings = []
        querySnap.forEach((doc) => { 
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setListings(listings)
        setLoading(false)
      } catch (error) {
        toast.error('Oops, Cannot get listings')
        setLoading(false)
        return
      }
    }
    fetchListings()
  }, [])

  const handleFetchMoreListings = async () => {
    try {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'), 
        startAfter(lastFetchedListing),
        limit(10))
      const querySnap = await getDocs(q)

      const lastVisible = querySnap.docs[querySnap.docs.length - 1]
      setLastFetchedListing(lastVisible)

      let listings = []
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data()
        })
      })
      setListings((prevState) => [...prevState, ...listings])
      setLoading(false)
    } catch (error) {
      toast.error('Oops, Cannot get listings')
    }
  }

  return <div className="catgory">
    <header>
      <p className="pageHeader">
        Offers
      </p>
    </header>
    {loading? 'loading...': listings && listings.length > 0 ? (
      <>
        <main>
          <ul className="categoryListings">
            {listings.map((listing) => (
              <ListingItem listing={listing.data} id={listing.id} key={listing.id}/>
            ))}
          </ul>
        </main>
        <br />
        <br />
        {lastFetchedListing && (
          <p className="loadMore" onClick={handleFetchMoreListings}>Load More</p>
        )}
      </>
    ):(
      <p>There is no current offers.</p>
    )}
  </div>;
}

export default Offers;
