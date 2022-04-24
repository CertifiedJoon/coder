import {useEffect, useState} from 'react'
import Spinner from '../layouts/Spinner'

function UserResult() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchUsers = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      header : {
        Authorization : `token ${process.env.REACT_APP_GITHUB_URL}`
      }
    })

    const data = await res.json()
    setUsers(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <h3>{user.login}</h3>
        })}
      </div>
    )
  } else {
    return (
      <Spinner />
    )
  }
}

export default UserResult