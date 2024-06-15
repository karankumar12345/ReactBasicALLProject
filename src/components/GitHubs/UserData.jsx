import React from "react";

function UserData({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    url,
    created_at,
  } = user;
  const createDate=new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="users" />
      </div>
      <div>
      <a style={{fontSize:'30px'}} href={`https://github.com/${login}`}>{login}</a>
    <p style={{fontSize:'30px'}} > User Joined on {`${createDate.getDate()} ${createDate.toLocaleString("en-us",{
      month:"short"
    })} ${createDate.getFullYear()}`} </p>
    </div>
    <div style={{fontSize:'20px'}}>
         <p>Public Repo </p>
         <p>{public_repos}</p>
    </div>
    <div style={{fontSize:'20px'}}>
    <p>followers </p>
         <p>{followers}</p>
    </div>
    <div style={{fontSize:'20px'}}>
    <p>following </p>
         <p>{following}</p>
    </div>
    </div>
    
  );
}

export default UserData;
