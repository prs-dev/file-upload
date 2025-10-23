import { useState, useEffect } from "react"

const Display = ({loading, setLoading}) => {
  const [state, setState] = useState(null)
  useEffect(() => {
    const handler = async() => {
      const res = await fetch('/api/photos/all')
      if(res.ok) {
        const data = await res.json()
        setState(data?.photos)
        console.log(data)
      }
    }
    handler()
  }, [loading])
  // console.log(loading)
  return (
    <div style={{
        padding: "10px",
        width: "100%"
    }}>
      <div>
        <h1>Photos</h1>
      </div>
      <div style={{display: "flex", gap: "20px"}}>
      {state?.map(photo => (
          <img style={{height: "100px", width: "100px"}} src={`http://localhost:5000/${photo.filename}`} alt="" />
        ))}
        </div>
    </div>
  )
}

export default Display