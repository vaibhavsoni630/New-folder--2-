import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Modal from '../../modal/Modal';;


const Studentlogin = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

     const openModal = () => {
       setIsModalOpen(true);
     };
   
     const closeModal = () => {
       setIsModalOpen(false);
     };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Successfully logged in with email:', user.email);
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error logging in:', errorCode, errorMessage);
        window.alert('Invalid email or password');
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <a className="bg-gradient-to-r from-fuchsia-800 to-pink-600 bg-clip-text text-transparent text-sm" href="#">
              Forgot password?
            </a>
          </div>
          <div className="">
            <button
              className="bg-gradient-to-r from-fuchsia-800 to-pink-600 text-white py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600 text-xs">
          Don't have an account?{' '}
          <button className="bg-gradient-to-r from-fuchsia-800 to-pink-600 bg-clip-text text-transparent" onClick={openModal}>
            Sign Up
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}/>
          
        </p>
      </div>
    </div>
  );
};

export default Studentlogin;