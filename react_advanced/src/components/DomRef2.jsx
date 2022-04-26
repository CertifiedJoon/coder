import {useState, useEffect, useRef} from 'react'

function DomRef2() {
  const [name, setName] = useState('')
  const previousName = useRef('')
  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1  
    previousName.current = name
  }, [name])

  return (
    <div>
      <form>
        <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </form>
      <p>render count: {renderCount.current}</p>
      <p>previous name: {previousName.current}</p>
    </div>
  )
}

export default DomRef2