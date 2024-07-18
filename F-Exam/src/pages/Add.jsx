import React, { useState } from 'react'
import { ADDEM } from '../redux/action/action'
import { useDispatch } from 'react-redux'

const Add = () => {
    const dispatch = useDispatch()
    const [emid, setEmid] = useState("")
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [pass ,setPass] = useState("")
    const [city ,setCity] = useState("")
    const [salary  ,setSalary] = useState("")
    const [degignation   ,setDegignation] = useState("")

    const handlesubmit = (e) =>{
        e.preventDefault()
        let obj = {
            emid,name,email,pass,city,salary,degignation
        }
        dispatch(ADDEM(obj))
        setName("")
        setEmail("")
        setPass("")
        setCity("")
        setSalary("")
        setDegignation("")
        alert("user add")
    }

    return (
        <>
            <form className='col-6' align="center" onSubmit={ handlesubmit }>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={ (e) => setName(e.target.value)} value={name}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={ (e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Pass</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={ (e) => setPass(e.target.value)} value={pass}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">City</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={ (e) => setCity(e.target.value)} value={city}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={ (e) => setSalary(e.target.value)} value={salary}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Degignation</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={ (e) => setDegignation(e.target.value)} value={degignation}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Add