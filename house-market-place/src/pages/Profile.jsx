import { updateProfile, getAuth } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase.config';
function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;

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
        </main>
      </div>
    </>
  );
}

export default Profile;
