import React, { useContext } from 'react'
import context from './Context'
import { Link } from 'react-router-dom'

function Empcard({data,index}) {
    const {remove}=useContext(context)
    return (
        <div className='col-lg-3 p-4 bg-white rounded m-2' style={{ width: "18rem" }}>
            <h4>{data.first_name} {data.last_name}</h4>
            <div className='d-flex'>
                <h5>Email:</h5>
                <p> {data.email}</p>
            </div>
             <div className='d-flex'>
                <h5>Department: </h5>
                <p>{data.department}</p>
            </div>
             <div className='d-flex'>
                <h5>Role:</h5>
                <p>{data.role}</p>
            </div>

            <div className='d-flex justify-content-between'>
                <Link className='btn btn-primary' to={`/editemployee/${index}`}>Edit</Link>
                <button  className="btn btn-danger"onClick={()=>remove(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Empcard