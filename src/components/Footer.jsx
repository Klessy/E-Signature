import { event } from 'jquery';
import React from 'react'

const Footer = ({ name, setName, date, setDate }) => {

   function handleNameChange(event) {
    event.preventDefault();
    setName(event.target.value);
   }

   function handleDateChange(e) {
    e.preventDefault();
    setDate(e.target.value);
   }

  const footerStyle = {
    border: "none",
    borderBottom: "1px dotted",
    outline: "none",
    backgroundColor: "#fff",
    padding: "10px 20px",
    // marginLeft: "5rem"
  }

  return (
    <footer className="d-flex" 
      style={{
        position: "relative",
        top: "40vh",
        paddingBottom: "40px" 
      }}
    >
      <input style={footerStyle} type="text" value={name}placeholder="Name" autoComplete="off" onChange={handleNameChange} />
      <input style={footerStyle} type="date" value={date}autoComplete="off" onChange={handleDateChange} />
    </footer>
  )
}

export default Footer
