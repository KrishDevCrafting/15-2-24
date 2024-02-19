import React,{useEffect} from "react"

const TakeData = ()=>{

const [data,setdata] = React.useState([])

useEffect(()=>{

const value = async  ()=>{
try{
    const response = await fetch("http://localhost:7000/Empolyees   ")
    const add = await response.json()
    setdata(add)
}catch(err){
    console.error("Check Error",err);
}
}
value()
},[])



return <>
<div className="col-8 mx-auto border">


<ul>
{data.map((e)=>(
<li>

{e.age}

</li>

))}

</ul>
<div>
<table className="table bg-dark text-white">
    <tr>
{data.map((e)=>(
    <th>
        {e.position}
        
    </th>
    
))}
    </tr>
<tr>
    {data.map((e)=>(
        <td>
            {e.name}
        </td>
    ))}
</tr>

</table></div>
</div>

</>
}
export default TakeData