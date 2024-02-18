import React from "react";

const Fetch = ()=>{
    const [data,setdata] = React.useState([])
const num = ()=>{
const arr = ["one","two","three","four"]
console.log(arr);
setdata(arr)

}
return <>
<button onClick={num}>Click-ME</button>
<ul>
{data.map((a,index)=>(
    <li key={index}>
{a}
    </li>
))}         
</ul>
</>
}
export default Fetch
