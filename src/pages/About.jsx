import React from 'react'

const About = () => {
    const style={
        height:"100vh",
        width:"100%",
        border:"2px solid black",
        backgroundColor:"orangered",
        padding:"3px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundImage:"url(https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize:"cover",
        backgroundPosition:"top"

    }
  return (
    <div style={style}></div>
  )
}

export default About