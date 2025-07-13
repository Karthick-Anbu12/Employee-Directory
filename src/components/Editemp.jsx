import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate, useParams } from 'react-router-dom'
import context from './Context'
function Editemp() {
  const { data, setdata } = useContext(context)
  const params = useParams()
  const navigate = useNavigate()
  //Formik to validate the user input and edit in the site
  const formik = useFormik({
    initialValues: {
      "id": "",
      "first_name": "",
      "last_name": "",
      "email": "",
      "department": "",
      "role": ""
    }, validate: (values) => {
      let error = {};
      if (values.first_name == "" || values.first_name.length <= 2) {
        error.first_name = "Kindly enter valid first name "
      }
      if (values.last_name == "" || values.last_name.length <= 2) {
        error.last_name = "Kindly enter valid last name "
      }
      if (values.email == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = "Kindly enter valid Email "
      }
      if (values.department == "") {
        error.department = "Kindly select department"
      }
      if (values.role == "") {
        error.role = "Kindly select role"
      }
      return error
    },
    onSubmit: (values) => {
      data[params.id] = values
      navigate("/")
    }
  })
  const getvalue = () => {
    formik.setValues(data[params.id])
  }
  useEffect(() => {
    getvalue()
  }, [])
  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title mb-4">Add Employee</h4>
          {/* Form to edit an employee details for a selected employee */}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className={`form-control ${formik.errors.first_name && 'is-invalid'}`} id="firstName" placeholder="Enter first name" name='first_name' onChange={formik.handleChange} value={formik.values.first_name} />
            </div>
            <div className="mb-3">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className={`form-control ${formik.errors.last_name && 'is-invalid'}`} id="lastName" placeholder="Enter last name" name='last_name' onChange={formik.handleChange} value={formik.values.last_name} />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className={`form-control ${formik.errors.email && 'is-invalid'}`} id="email" placeholder="name@example.com" name='email' onChange={formik.handleChange} value={formik.values.email} />
              </div>
              <div className="col-md-6 mb-3">
                <label for="department" className="form-label">Department</label>
                <select className={`form-select ${formik.errors.department && 'is-invalid'}`} id="department" name='department' onChange={formik.handleChange} value={formik.values.department}>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label for="role" className="form-label">Role</label>
              <select className={`form-select ${formik.errors.role && 'is-invalid'}`} id="role" name='role' onChange={formik.handleChange} value={formik.values.role}>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Product Manager">Product Manager</option>
                <option value="HR Manager">HR Manager</option>
                <option value="Sales Executive">Sales Executive</option>
                <option value="Support Representative">Support Representative</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <Link type="button" className="btn btn-secondary me-2" to="/">Cancel</Link>
              <button type="submit" className="btn btn-primary">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Editemp