import React from "react"

const Count = () =>{
const [data,setdata] = React.useState(0)

const Click = ()=>{
    setdata(data + 1)
}

    return<>
    
    <div>
<h1>{data}</h1>
<button type="button" className="btn bg-danger" onClick={Click}>Increment..!</button>

    </div>
    </>
}
export default Count