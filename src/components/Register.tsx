import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //use for route data
import { Link } from "react-router-dom";

const Register : React.FC = ()=>{
    const [ username, setUsername] = useState<string>("");
    const [ email, setEmail] = useState<string>("");
    const [ password, setPassword] = useState<string>("");
    const [ error, setError] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent)=>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/users/register', {username,email,password});
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/login');
        } catch(error){
            setError('Register failed. Please try again.');
        }
    }
    return(
        <>
            <div className=" container-fluid d-flex justify-content-center align-items-center mt-5">
                <div className=" col-4 rounded m-auto border border-success p-2 shadow p-3 mb-5 bg-body rounded ">
                    <h2 className="mt-3"><center>Register</center></h2>
                    {error && <div className="error text-danger text-center">{error}</div>}
                    <form className=" px-4 py-3" onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="user">Username:</label>
                            <input type="text" 
                                className="form-control"
                                placeholder="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email"
                                className="form-control" 
                                placeholder="email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password"
                                className="form-control" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className=" btn btn-primary w-100 float-sm-end"> Register</button><br />
                    </form>
                    <p><center>Already have an account? <Link to="/login"> Login Here</Link></center></p>
                </div>
            </div>
        </>
    )
}

export default Register