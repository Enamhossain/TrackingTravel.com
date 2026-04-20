import React, { useState } from "react";
import Login from "./Login";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser, FaPhone, FaGoogle, FaTimes } from 'react-icons/fa';
import Logo from "../Shared/Logo";

const Registertion = ({ handleCloseEditModal }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [passMatch, setPassMatch] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { createUser, googleSignIn } = useAuth();

  const handleOpenLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
   
    if (password !== confirmPassword) {
      setPassMatch(false);
      setLoading(false);
      return;
    }

    setPassMatch(true);

    try {
      await createUser(email, password);
      
      const SaveUserInfo = {
        email,
        firstName,
        lastName,
        phoneNumber,
        password,
        role: 'user',
        createdAt: new Date().toISOString()
      };

      const res = await fetch("https://trackingtrip-server.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(SaveUserInfo),
      });

      if (res.ok) {
        toast.success('Welcome to TrackingTravel!');
        handleCloseEditModal();
        // Use a slight delay before navigating/reloading if needed, 
        // but usually useAuth handle user state globally
      }
    } catch (err) {
      setError(err.message);
      toast.error('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photoURL: result.user?.photoURL,
        role: 'user'
      };

      await fetch("https://trackingtrip-server.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      toast.success('Signed in with Google!');
      handleCloseEditModal();
    } catch (err) {
      console.error(err);
      toast.error('Google Sign-In failed.');
    }
  };

  return (
    <>
      {showLoginModal ? (
        <Login handleCloseLoginModal={handleCloseLoginModal} />
      ) : (
        <section className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-primary/40 backdrop-blur-md" onClick={handleCloseEditModal} />
          
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden border border-white/20 animate-in fade-in zoom-in duration-300">
            
            {/* Left Decor / Info */}
            <div className="hidden md:flex flex-col justify-center items-center bg-brand-primary text-white w-[40%] p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
               
               <Logo className="w-24 h-24 mb-8" />
               <h2 className="text-4xl font-display font-black mb-4 text-center">Start Your Journey</h2>
               <p className="text-brand-accent text-center font-medium opacity-90 leading-relaxed">
                 Join our community of global explorers and access exclusive travel deals.
               </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-[60%] p-8 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
              <button 
                onClick={handleCloseEditModal} 
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 group"
              >
                <FaTimes className="group-hover:rotate-90 transition-transform" />
              </button>

              <div className="mb-10">
                <h1 className="text-3xl font-display font-black text-brand-primary mb-2">Create Account</h1>
                <p className="text-slate-500 font-medium text-sm">Please enter your details to register.</p>
              </div>

              <button 
                onClick={handleGoogleSignIn} 
                className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-slate-100 bg-white hover:border-brand-secondary transition-all font-bold text-slate-700 mb-8 active:scale-[0.98]"
              >
                <FaGoogle className="text-brand-secondary" /> 
                <span>Continue with Google</span>
              </button>

              <div className="flex items-center gap-4 mb-8">
                <span className="flex-1 h-px bg-slate-100" />
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">or register with email</span>
                <span className="flex-1 h-px bg-slate-100" />
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                    <input required name="firstName" type="text" placeholder="John" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                    <input required name="lastName" type="text" placeholder="Doe" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="md:col-span-2 space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                    <input required name="email" type="email" placeholder="example@mail.com" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                    <input required name="password" type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Confirm</label>
                  <div className="relative">
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                    <input required name="confirmPassword" type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="md:col-span-2 mt-4">
                  {(!passMatch || error) && (
                    <p className="text-brand-secondary text-xs font-bold mb-4 bg-brand-secondary/5 p-3 rounded-xl border border-brand-secondary/10">
                      {error || "Passwords do not match. Please check again."}
                    </p>
                  )}
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full py-4 bg-brand-secondary text-white rounded-2xl font-black shadow-xl shadow-brand-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 uppercase tracking-widest text-sm"
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                </div>
              </form>

              <div className="text-center mt-10">
                <p className="text-sm font-medium text-slate-500">
                  Already have an account?{' '}
                  <button onClick={handleOpenLoginModal} className="text-brand-secondary font-black hover:underline underline-offset-4 decoration-2">Sign In</button>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Registertion;
