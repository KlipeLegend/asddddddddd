import React, { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const Dacode = () => {
  const [check, setCheck] = useState(false)
  const Check = () => {
    setCheck(!check)
  }
  return (
    <>
      <div className="hello">
        <h1>Hello there!</h1>
        <p>Please sign in or create account to continue</p>
      </div>
      <div className="search">
        <div className="serch">
          <h1>SIGN IN</h1>
          <form className='int'>
            <p>Email</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <div className="btun">
              <button onClick={Check}> {check ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />} </button>
              <p>remember my details</p>
            </div>
            <button>SIGN IN</button>
          </form>
        </div>
        <div className="serch">
          <h1>CREATE ACCOUNT</h1>
          <form className="int">
            <p>First name</p>
            <input type="text" />
            <p>Last name</p>
            <input type="password" />
            <p>Email</p>
            <input type="text" />
            <p>Create Password</p>
            <input type="password" />
            <p>Confirm Password</p>
            <input type="text" />
            <div className="btun">
              <button onClick={Check}> {check ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon />} </button>
              <p> I want to receive Safari newsletters with the best deals <br />and offers</p>
            </div>
            <button>CREATE ACCOUNT</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Dacode