import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; //use for route data
import { Link } from "react-router-dom";

const Login : React.FC = ()=>{
    const [ email, setEmail] = useState<string>("");
    const [ password, setPassword] = useState<string>("");
    const [ error, setError] = useState<String>("");
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent)=>{
        event.preventDefault();
        if(!email || !password){
            setError('Please enter both email and password.');
            return;
        }
        try{
            const response = await axios.post('http://localhost:3000/users/login', { email,password});
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            navigate('/');
        }catch(error : any){
            if(axios.isAxiosError(error)){
                if(error.response){
                    setError(error.response.data.message || 'Invailid username or password');
                }else if(error.request){
                    setError('No response from the server. Please try again later.');
                }else{
                    setError('Error occurred: ' + error.message);
                }
            }else{
                setError('An unexpected error occurred');
            }
        }
    };
    const handleInputChange =()=>{
        setError(''); //clear error when input change
    };
    return(
        <>
            <div className=" container-fluid d-flex justify-content-center align-items-center mt-5">
                <div className=" col-4 rounded m-auto border border-success p-2 shadow p-3 mb-5 bg-body rounded">
                    <h2 className="mt-3"><center>Login</center></h2>
                    {error && <div className="error text-danger text-center">{error}</div>}
                    <form className=" px-4 py-3" onSubmit={handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="text"
                                className="form-control" 
                                placeholder="email@example.com"
                                value={email}
                                onChange={(e) =>{
                                    setEmail(e.target.value);
                                    handleInputChange();
                                }}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password:</label>
                            <input type="password"
                                className="form-control" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    handleInputChange();
                                }}
                                required
                            />
                        </div>
                        <button type="submit" className=" btn btn-primary w-100 float-sm-end"> Login</button> <br />
                    </form>
                    <p><center>Don't have an account <Link to="/register"> Register</Link></center></p>
                </div>
            </div>
        </>
    )
}

export default Login