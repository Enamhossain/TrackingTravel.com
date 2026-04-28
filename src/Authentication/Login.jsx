import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import { FaEnvelope, FaLock, FaGoogle } from 'react-icons/fa';
import toast from "react-hot-toast";
import Logo from "../Shared/Logo";

const Login = () => {
  const { googleSignIn, singIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      await singIn(email, password);
      toast.success('Successfully logged in!');
      navigate('/');
    } catch (err) {
      setError(err.message);
      toast.error('Login failed. Please check your credentials.');
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

      toast.success('Welcome back!');
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Google Sign-In failed.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 sm:p-6 bg-slate-50/50">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      {/* Page Container */}
      <div className="relative z-10 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] w-full max-w-md overflow-hidden border border-slate-100 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out flex flex-col">
        
        {/* Header decoration */}
        <div className="bg-gradient-to-br from-brand-primary via-brand-primary to-slate-800 p-6 sm:p-8 flex flex-col items-center relative overflow-hidden shrink-0">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl animate-pulse" />
          <Logo className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 relative z-10 drop-shadow-2xl" />
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white relative z-10 tracking-tight">Welcome Back</h2>
          <p className="text-brand-accent/90 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">Access Your Journey</p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-10">
          <button 
            onClick={handleGoogleSignIn} 
            className="flex items-center justify-center gap-3 w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-slate-50 bg-white hover:border-brand-secondary hover:shadow-lg transition-all font-bold text-slate-700 mb-6 sm:mb-8 active:scale-[0.98] group"
          >
            <FaGoogle className="text-brand-secondary group-hover:rotate-[360deg] transition-transform duration-500 text-sm sm:text-base" /> 
            <span className="text-sm sm:text-base">Continue with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <span className="flex-1 h-px bg-slate-100" />
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center px-2">secure email login</span>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <FaEnvelope className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xs sm:text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input 
                  required 
                  name="email" 
                  type="email" 
                  placeholder="you@mail.com" 
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/30 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-300 text-sm sm:text-base" 
                />
              </div>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[9px] sm:text-[10px] font-black text-brand-secondary uppercase hover:tracking-wider transition-all">Forgot password?</button>
              </div>
              <div className="relative group">
                <FaLock className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xs sm:text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input 
                  required 
                  name="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-10 sm:pl-12 pr-4 sm:pr-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/30 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-300 text-sm sm:text-base" 
                />
              </div>
            </div>

            {error && (
              <div className="animate-shake">
                <p className="text-brand-secondary text-[10px] sm:text-xs font-bold bg-brand-secondary/5 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-brand-secondary/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse flex-shrink-0" />
                  {error}
                </p>
              </div>
            )}

            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-3.5 sm:py-4.5 bg-brand-secondary text-white rounded-xl sm:rounded-2xl font-black shadow-[0_10px_25px_-5px_rgba(250,139,120,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(250,139,120,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 uppercase tracking-[0.15em] text-xs sm:text-sm mt-2 sm:mt-4"
            >
              {loading ? "Verifying Access..." : "Access Account"}
            </button>
          </form>

          <div className="text-center mt-8 sm:mt-10 pb-2">
            <p className="text-xs sm:text-sm font-medium text-slate-400">
              New explorer?{' '}
              <Link to="/registertion" className="text-brand-secondary font-black hover:underline underline-offset-4 decoration-2">Create Account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
