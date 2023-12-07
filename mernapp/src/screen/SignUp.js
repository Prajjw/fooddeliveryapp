import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export default function () {
    const [credenditals, setcredenditals] = useState({name:"", email: "", password:"", location:""})


    const handleSumbit = async(e) =>{
        
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/creatuser",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({name: credenditals.name, email: credenditals.email, password: credenditals.password, location: credenditals.location})


       

        });
        const json = await response.json()
        console.log(json);
        
        if(!json.success){
            alert("Enter Valid Credenditals")
        }
        

        

    }
    

   const onChange = (event) =>{
    setcredenditals({...credenditals,[event.target.name]: event.target.value})
   }
    return (
        <>
        <div  className='container'> 
            <form onSubmit={handleSumbit}>
                <div className="mb-3">
                    <label htmlFor="" className="form-label"> Name</label>
                    <input type="text" className="form-control" name='name'value={credenditals.name}onChange={onChange}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" className="form-control"name='email' value={credenditals.email}onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control "name='password' value={credenditals.password}onChange={onChange} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="example" className="form-label">Address</label>
                    <input type="text" className="form-control" name='location'value={credenditals.location}onChange={onChange} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <Link to= "/login" className="m-3 btn btn-danger">Already User</Link>
            </form>
            </div>

        </>
    )
}
