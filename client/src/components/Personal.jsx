import React,{useEffect,useState} from 'react'

function Personal() {
   
    const [info,setinfo] = useState()
    
    const id = localStorage.getItem('id')

   useEffect(()=>{
   const posting = `https://qr-parking-vzxn.onrender.com/user/info/${id}`
   const postdata = async()=>{
    try {
        const posted = await fetch(posting,{
            method: 'Get',
        })
        const data = await posted.json()
        console.log(data)
        setinfo(data)
    } catch (error) {
        console.log(error.message)
    }   
}
 postdata()
   },[])


   const Personal = ({ info }) => {
  if (!info) {
    return <p>Loading user info...</p>;
  }}
  //  const [name,email,phone] = info.user
  return (
    <>
    <div className="card mb-3" style={{width: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="..." className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{info? info.name:'sorry '}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Personal;
