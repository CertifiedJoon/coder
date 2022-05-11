import { useState, useEffect, useRef } from 'react'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {db} from '../firebase.config'
import {doc, updateDoc, getDoc, serverTimestamp} from 'firebase/firestore'
import {useNavigate, useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import {v4 as uuidv4} from 'uuid'

function EditListing() {
  const [loading, setLoading] = useState(false)
  const [listing, setListing] = useState(null)
  const [formData, setFormData] = useState({
    bathrooms: 1,
    bedrooms: 1,
    discountedPrice: 0,
    furnished: false,
    images: [],
    location: '',
    name: '',
    offer: false,
    parking: false,
    regularPrice: 0,
    type: 'rent',
    latitude: 0,
    longitude: 0
  })

  const {type, name, bedrooms, bathrooms, parking, furnished, location, offer, regularPrice, discountedPrice, images, latitude, longitude} = formData
  const auth = getAuth()
  const navigate = useNavigate()
  const params = useParams()
  const isMounted = useRef(true)

  useEffect(() => {
    setLoading(true)
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setListing(docSnap.data())
        setFormData({
          ...docSnap.data()
        })
        setLoading(false)
      } else {
        navigate('/')
        toast.error('Listing not found')
      }
    }
    fetchListing()
  }, [params.listingId, navigate])

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({...formData, userRef: user.uid})
        } else {
          navigate('/sign-in')
        }
      })
    }

    return () => {
      isMounted.current = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true)

    if (discountedPrice >= regularPrice) {
      setLoading(false)
      toast.error('Discounted price must be less thatn regular price')
      return
    }

    if (images.length > 6) {
      setLoading(false)
      toast.error('Max 6 images')
      return
    }
    
    //Store images in firebase
    const storeImage = async(image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage()
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`

        const storageRef = ref(storage, 'images/' + fileName)

        const uploadTask = uploadBytesResumable(storageRef, image)

        uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          reject(error)
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL)
          })
        }
      )
      }) 
    }

    const imageUrls = await Promise.all(
      [...images].map((image) => storeImage(image))
    ).catch(() => {
      setLoading(false)
      toast.error('Upload Failed')
      return
    })

    const formDataCopy = {
      ...formData,
      imageUrls,
      timestamp: serverTimestamp()
    }

    delete formDataCopy.images
    !formDataCopy.offer && delete formDataCopy.discountedPrice

    const docRef = doc(db, 'listings', params.listingId)
    await updateDoc(docRef, formDataCopy)

    setLoading(false)
    toast.success('Listings saved')
    navigate(`/category/${formDataCopy.type}/${docRef.id}`)
  }

  const handleMutate = (e) => {
    let boolean = null
    if (e.target.value === 'true') {
      boolean = true
    }
    if (e.target.value === 'false') {
      boolean = false
    }

    //file
    if (e.target.files) {
      setFormData((prevState) => ({
          ...prevState,
          images: e.target.files
      }))
    } else {
      setFormData((prevState) => ({
        ...prevState, 
        [e.target.id]: boolean ?? e.target.value
      }))
    }
  }


  if (loading) {
    return <h3>Loading</h3>
  } else {
    return <div className="profile">
      <header>
        <p className="pageHeader">Edit Listing</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label className='formLabel'>Sell / Rent</label>
          <div className="formButtons">
            <button type='button' className={type === 'sale' ? 'formButtonActive' : 'formButton'} id='type' value='sale' onClick={handleMutate}>
              Sell
            </button>
            <button type='button' className={type === 'rent' ? 'formButtonActive' : 'formButton'} id='type' value='rent' onClick={handleMutate}>
              Rent
            </button>
          </div>

          <label className="formLabel">Name</label>
          <input id='name' value={name} onChange={handleMutate} maxLength='32' minLength='10' required type="text" className="formInputName" />

          <div className="formRooms flex">
            <div>
              <label className="formLabel">Bedrooms</label>
              <input id='bedrooms' value={bedrooms} onChange={handleMutate} required type="number" className="formInputSmall" min='1' max='50'/>
            </div>
            <div>
              <label className="formLabel">Bathrooms</label>
              <input id='bathrooms' value={bathrooms} onChange={handleMutate} required type="number" className="formInputSmall" min='1' max='50'/>
            </div>
          </div>

          <label className='formLabel'>Parking Spot</label>
          <div className="formButtons">
            <button type='button' className={parking === true ? 'formButtonActive' : 'formButton'} id='parking' value='true' onClick={handleMutate}>
              Yes
            </button>
            <button type='button' className={parking === false ? 'formButtonActive' : 'formButton'} id='parking' value='false' onClick={handleMutate}>
              No
            </button>
          </div>

          <label className='formLabel'>Furnished</label>
          <div className="formButtons">
            <button type='button' className={furnished === true ? 'formButtonActive' : 'formButton'} id='furnished' value='true' onClick={handleMutate}>
              Yes
            </button>
            <button type='button' className={furnished === false ? 'formButtonActive' : 'formButton'} id='furnished' value='false' onClick={handleMutate}>
              No
            </button>
          </div>

          <label className="formLabel">Location</label>
          <textarea onChange={handleMutate} name="location" id="location" cols="30" rows="3" value={location} className="formInputAddress"></textarea>

          <label className='formLabel'>Offer</label>
          <div className="formButtons">
            <button type='button' className={offer === true ? 'formButtonActive' : 'formButton'} id='offer' value='true' onClick={handleMutate}>
              Yes
            </button>
            <button type='button' className={offer === false ? 'formButtonActive' : 'formButton'} id='offer' value='false' onClick={handleMutate}>
              No
            </button>
          </div>

          <label className="formLabel">Regular Price</label>
          <div className="formPriceDiv">
            <input id='regularPrice' value={regularPrice} onChange={handleMutate} required  type="number" className="formInputSmall" min='1' max='750000000'/>
            {type === 'rent' && (
              <p className='formPriceText'>$ / Month</p>
            )}
          </div>

          { offer && <>
            <label className="formLabel">Discounted Price</label>
            <div className="formPriceDiv">
              <input id='discountedPrice' value={discountedPrice} onChange={handleMutate} required  type="number" className="formInputSmall" min='1' max='750000000'/>
              {type === 'rent' && (
                <p className='formPriceText'>$ / Month</p>
              )}
            </div>
          </>
          }

          <label className="formLabel">Images</label>
          <p className="imagesInfo">The first Image will be the cover (max 6)</p>
          <input type="file" className='formInputFile' id='images' onChange={handleMutate} max='6' accept='.jpg,.png,.jpeg' multiple required />

          <button type='submit' className='primaryButton createListingButton'>Edit Listing</button>
        </form>
      </main>
    </div>
  }
}

export default EditListing