
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Correct import statement
import { auth } from '../../firebase';
import {  Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';




const StudenSignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const location = useLocation();
    const navigate = useNavigate();

    const toRedirect=()=>{
      navigate('/login')
    }
    // const from = location.state?.from?.pathname || "/"

    const handleSubmit = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('Successfully created user account with email:', user.email);
          navigate('/home')
          window.alert("succesfully registered for STUDENT!!!")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          window.alert(errorCode)
          const errorMessage = error.message;
          console.error('Error registering user:', errorCode, errorMessage);
        });
    };

   

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded w-full max-w-md">
        <form className=" py-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password (must be 6 digits)"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div className="mb-4 ">
            <a className="bg-gradient-to-r from-fuchsia-800 to-pink-600 bg-clip-text text-transparent text-sm" href="#">
              Forgot password?
            </a>
          </div>
          <div className="">
            <button
              className="bg-gradient-to-r from-fuchsia-800 to-pink-600 text-white  py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign-Up for student
            </button>
          </div>
        </form>
        <p className="text-center  text-gray-600 text-xs">
          Already have an account?{' '}
          <Link className="bg-gradient-to-r from-fuchsia-800 to-pink-600 bg-clip-text text-transparent" to={'/login'}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default StudenSignUpForm;
