import React, { useEffect, useState } from "react";
import UserData from "./UserData";
import "./style.css"

function GitFinder() {
  const [UserName, setUserName] = useState("karankumar12345");
  const [userData,setUserData]=useState(null)
  const [loading ,setLoading]=useState(false)
async function fetchGitHubUserData(){
    setLoading(true)
           const ref=await fetch(`https://api.github.com/users/${UserName}`)
           const data =await ref.json()
           if(data){
            setUserData(data)
            setLoading(false)
            setUserName('')
           }
}
  useEffect(() => {
    fetchGitHubUserData()
  }, []);

  function handleSubmit(){
    fetchGitHubUserData()
  }
  if(loading){
    return <h1>loading Data please wait</h1>
  }
  return (
    <>
      <div className="github-profile-container">
        <div className="input-wrapper">
          <input style={{height:'30px'}}
            type="text"
            name="search"
            placeholder="Search GitHub UserName"
            value={UserName}
            onChange={(event)=>setUserName(event.target.value)}
          />
          <button style={{backgroundColor:'red', height:'35px', marginLeft:'2%'}} onClick={handleSubmit}>Search</button>
        </div>
        {
            userData!==null?  <UserData user={userData}/>:null
        }
      </div>
    </>
  );
}

export default GitFinder;
