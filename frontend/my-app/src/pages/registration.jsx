import {React, useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
const baseURL =  "http://127.0.0.1:5000";

function Registration() {
  return (
    <div>
      <nav>
        <Link to='/'>login</Link>
      </nav>
      <form>
        <div>
          <label>email</label>
          <input type="text" required/>
        </div>
        <div>
          <label>first name</label>
          <input type="text" required/>
        </div>
        <div>
          <label>last name</label>
          <input type="text" required/>
        </div>
        <div>
          <label>password</label>
          <input type="text" required/>
        </div>
        <div>
          <label>age</label>
          <input type="text" required/>
        </div>
        <div>
          <label>gender</label>
          <input type="text" required/>
        </div>
        <div>
          <button type="submit">register</button>
        </div>
      </form>
    </div>
  )
}

export default Registration