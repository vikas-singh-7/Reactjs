import React from 'react'

const Home = () => {
    const style={
        height:"100vh",
        width:"100%",
        border:"2px solid black",
        backgroundColor:"grey",
        backgroundImage:"url(https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"3px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"

    }
  return (
    <div style={style}></div>
  )
}

export default Home