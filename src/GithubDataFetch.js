import React, { useEffect, useState} from 'react'

function GithubDataFetch() {
    const [post,setPost] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users?since=135')

        .then((res) => res.json())
        .then(json=>{setPost(json)})
        // .catch(err=>console.log(err))
    },[])
    console.log(post)
  return (
    <div>
      {
        post.map((item)=>(
         <>
          <h4>login:</h4><span>{item.login}</span><br/>
          <h4>id:</h4><span>{item.id}</span><br/>
          <h4>type:</h4><span>{item.type}</span><br/>
          
          <hr></hr>
          </>
        ))
      }
    </div>
  )
}

export default GithubDataFetch