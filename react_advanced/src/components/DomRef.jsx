import {useRef} from 'react'

function DomRef() {
  const inputRef = useRef()

  const handleClick = (e) => {
    e.preventDefault()
    inputRef.current.value = 'hehe click'
  }

  return (
    <form>
      <input type="text" ref={inputRef} placeholder="Anything" />
      <button type="submit" onClick={handleClick}>Click</button>
    </form>
  )
}

export default DomRef