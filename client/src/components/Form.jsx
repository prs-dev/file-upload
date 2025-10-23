import { useState } from "react"
const Form = ({loading, setLoading}) => {
    const [state, setState] = useState(null)
    const [caption, setCaption] = useState('')
    const handleSubmit = async(e) => {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', state)
        formData.append('caption', caption)
        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData
        })
        if(res.ok) {
            const data = await res.json()
            console.log(data)
        } 
        setLoading(false)
        console.log("formData", formData)
    }

  return (
    <form encType="multipart/form-data" style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }} onSubmit={handleSubmit}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <label>Select photo</label>
            <input type="file" name="" id="" onChange={e => setState(e.target.files[0])}/>
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}>
            <label>Enter caption</label>
            <input type="text" value={caption} onChange={e => setCaption(e.target.value)}/>
        </div>
        <div>
            <button type="submit">Save</button>
        </div>
    </form>
  )
}

export default Form