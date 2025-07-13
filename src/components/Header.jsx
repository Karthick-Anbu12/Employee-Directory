import React, { useContext } from 'react'
import Empcard from './Empcard'
import context from './Context'
import { Link } from 'react-router-dom'

function Header() {
    const { data, setdata } = useContext(context)
    const handlesearch = (e) => {
        setdata(data.filter(item => item.first_name.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    const handlechange = (e) => {
        setdata([...data.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]))])
    }
    return (
        <div>
        {/* Header contains website name and serach bar */}
            <div className='d-flex justify-content-between bg-dark text-light p-4'>
                <div><h2>Employee Directory</h2></div>
                <div><input type='text' placeholder='Search by name or email' onChange={handlesearch}></input></div>
            </div>
             {/* Sort using First name of employee and Department they work */}
            <div>
                <div className='d-flex justify-content-between bg-white text-dark p-3'>
                    <div>
                        <label className='mx-1' for='sort' >Sort:</label>
                        <select className='mx-1' name="Sort" id="sort" onChange={handlechange}>
                            <option disabled selected value>-select an option-</option>
                            <option value="first_name">First Name</option>
                            <option value="department">Department</option>
                        </select>
                        <button className='btn btn-dark' onClick={()=>window.location.reload()}>Home</button>
                    </div>
                    {/* Add Employee button to add a new employee */}
                    <div>
                        <Link className='btn btn-success' to="/addemployee">Add Employee</Link>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-wrap p-1 background'>
                {
                    data.map((item, index) => {
                        return <Empcard data={item} index={index} />
                    })
                }
            </div>
            <div style={{ height: "5rem" }} className='bg-dark text-light p-4' >
                <div className='container'>
                    <p>© 2025 Employee Directory App. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Header