import React, { createContext, useEffect, useState } from "react";
//Context api to manage the data through out the website
const context = createContext()
export const UserProvider = ({ children }) => {
    //Model employee data
    let empdata = [
        {
            "employee_id": 1,
            "first_name": "Brian",
            "last_name": "Johnson",
            "email": "brian.johnson@example.com",
            "department": "Engineering",
            "role": "Software Engineer"
        },
        {
            "employee_id": 2,
            "first_name": "Carla",
            "last_name": "Kim",
            "email": "carla.kim@example.com",
            "department": "Human Resources",
            "role": "HR Manager"
        },
        {
            "employee_id": 3,
            "first_name": "Jake",
            "last_name": "Mendes",
            "email": "jake.mendes@example.com",
            "department": "Marketing",
            "role": "Marketing Specialist"
        },
        {
            "employee_id": 4,
            "first_name": "Isabella",
            "last_name": "Chen",
            "email": "isabella.chen@example.com",
            "department": "Finance",
            "role": "Financial Analyst"
        },
        {
            "employee_id": 5,
            "first_name": "Felix",
            "last_name": "Roberts",
            "email": "felix.roberts@example.com",
            "department": "Sales",
            "role": "Sales Executive"
        },
        {
            "employee_id": 6,
            "first_name": "David",
            "last_name": "Tran",
            "email": "david.tran@example.com",
            "department": "Customer Support",
            "role": "Support Representative"
        },
        {
            "employee_id": 7,
            "first_name": "Elena",
            "last_name": "Lee",
            "email": "elena.lee@example.com",
            "department": "Product",
            "role": "Product Manager"
        },
        {
            "employee_id": 8,
            "first_name": "Alice",
            "last_name": "Patel",
            "email": "alice.patel@example.com",
            "department": "IT",
            "role": "Systems Administrator"
        },
        {
            "employee_id": 9,
            "first_name": "Grace",
            "last_name": "Nguyen",
            "email": "grace.nguyen@example.com",
            "department": "Legal",
            "role": "Legal Advisor"
        },
        {
            "employee_id": 10,
            "first_name": "Henry",
            "last_name": "Thompson",
            "email": "henry.thompson@example.com",
            "department": "Engineering",
            "role": "DevOps Engineer"
        }
    ]
    const [data, setdata] = useState(empdata)
    const remove = (index) => {
        data.splice(index, 1);
        setdata([...data])
    }
    return <context.Provider value={{ data, remove, setdata }}>
        {children}
    </context.Provider>
}

export default context