import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import {searchUsers} from '../../context/github/GithubAction'

function UserSearch() {
  const [text, setText] = useState('')

  const {users, dispatch, clearUsers} = useContext(GithubContext)

  const {showAlert} = useContext(AlertContext)

  const handleChange = (e) => setText(e.target.value) 

  const handleClear = (e) => {
    clearUsers()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      showAlert('Please Enter A Username.', 'error')
    } else {
      dispatch({type:'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type:'GET_USERS', payload:users})
    }
  }
  
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 l:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input onChange={handleChange} type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" placeholder="Search" value={text}/>
              <button className="absolute top-0 right-0 rounded-l-none w-36 h-16 btn btn lg" type="submite">Go</button>
            </div>
          </div>
        </form>
      </div>
      {
        users.length > 0 && 
        <div>
          <button onClick={handleClear} className="btn-ghost btn-large">
            Clear
          </button>
        </div>
      }
    </div>
  )
}

export default UserSearch