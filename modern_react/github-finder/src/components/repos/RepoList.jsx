function RepoList({repos}) {
  return (
    <>
     <div className="card rounded-lg shadow-lg bg-base-100">
       <h2 className="card-title">
         Public Repos
       </h2>
       {repos && 
        <table className="table w-full">
          <thead>
            <tr>
              <th>Repository</th>
              <th className='lg:visible invisible'>Description</th>
              <th className='lg:visible invisible'>Forks</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id}>
                <td>{repo.name}</td>
                <td className='lg:visible invisible'>{repo.description}</td>
                <td className='lg:visible invisible'>{repo.forks}</td>
              </tr>
            ))}
          </tbody>
        </table>
       }
     </div>
    </>
  )
}

export default RepoList