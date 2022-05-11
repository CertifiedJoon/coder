import { updateProfile, getAuth } from 'firebase/auth';
import { updateDoc, doc, collection, getDocs, query, where, orderBy, deleteDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
import ListingItem from '../components/ListingItem'
import homeIcon from '../assets/svg/homeIcon.svg'
import arrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg'

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

  useEffect(() => {
    const fetchUserListings = async () => {
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, where('userRef', '==', auth.currentUser.uid), orderBy('timestamp', 'desc'))
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

    fetchUserListings()
  }, [auth.currentUser.uid])

  const handleDelete = async (listingId) => {
    if(window.confirm('Proceed deleting?')) {
      await deleteDoc(doc(db, 'listings', listingId))
      const updatedListings = listings.filter((listing) => listing.id !== listingId)
      setListings(updatedListings)
      toast.success('Deletion Successful')
    }
  }

  const handleEdit = (listingId) => navigate(`/edit-listing/${listingId}`)

  const handleSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // Update in auth
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // Update in firestore
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Could Not Update Profile');
    }
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...formData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <>
      <div className="profile">
        <header className="profileHeader">
          <p className="pageHeader">My Profile</p>
          <button type="button" onClick={handleLogOut} className="logOut">
            Logout
          </button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailsText">Personal Details</p>
            <p
              className="changePersonalDetails"
              onClick={() => {
                editMode && handleSubmit();
                setEditMode((prevState) => !prevState);
              }}
            >
              {editMode ? 'Done' : 'Edit'}
            </p>
          </div>
          <div className="profileCard">
            <form>
              <input
                className={editMode ? 'profileNameActive' : 'profileName'}
                type="text"
                id="name"
                disabled={!editMode}
                value={name}
                onChange={handleChange}
              />
              <input
                className={editMode ? 'profileEmailActive' : 'profileEmail'}
                type="email"
                id="email"
                disabled={!editMode}
                value={email}
                onChange={handleChange}
              />
            </form>
          </div>
          <Link to='/create-listing'>
            <div className="createListing">
              <img src={homeIcon} alt="" />
              <p>Upload Your Listing</p>
              <img src={arrowRightIcon} alt="" />
            </div>
          </Link>

          {!loading && listings?.length > 0 && (
            <>
              <p className="listingText">Your Listings</p>
              <ul className="listingsList">
                {listings.map((listing) => (
                  <ListingItem key={listing.id} listing={listing.data} id={listing.id} onDelete={() => handleDelete(listing.id)} onEdit={() => handleEdit(listing.id)}/>
                ))}
              </ul>
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default Profile;
