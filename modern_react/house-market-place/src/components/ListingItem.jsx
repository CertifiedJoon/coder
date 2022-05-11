import {Link} from 'react-router-dom'
import {ReactComponent as DeleteIcon} from '../assets/svg/deleteIcon.svg'
import {ReactComponent as EditIcon} from '../assets/svg/editIcon.svg'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({listing, id, onDelete, onEdit}) {
  return (
    <li className="categoryListing">
      <Link className="categoryListingLink" to={`/category/${listing.type}/${id}`}>
        <img className="categoryListingImg" src={listing.imageUrls[0]} alt={listing.name} />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{listing.location}</p>
          <h3 className="categoryListingName">{listing.name}</h3>
          <p className="categoryListingPrice">${listing.offer ? listing.discountedPrice : listing.regularPrice} / Month</p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText"> {listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}</p>
            <img src={bathtubIcon} alt="bed" />
            <p className="categoryListingInfoText"> {listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}</p>
          </div>
        </div>
      </Link>
      {onDelete && (
        <DeleteIcon className='removeIcon' fill='rgb(231,76,60)' onClick={()=> onDelete(listing.id, listing.name)} />
      )}
      {onEdit && (
        <EditIcon className='editIcon' fill='rgb(231,76,60)' onClick={()=> onEdit(listing.id)} />
      )}
    </li>
  )
}

export default ListingItem