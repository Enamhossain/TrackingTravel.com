import React, { useState } from "react";
import useAuth from "../Hook/useAuth";
import { FaEnvelope, FaLock, FaGoogle, FaTimes } from 'react-icons/fa';
import toast from "react-hot-toast";
import Logo from "../Shared/Logo";

const Login = ({ handleCloseLoginModal }) => {
  const { googleSignIn, singIn } = useAuth();
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
      handleCloseLoginModal();
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
      handleCloseLoginModal();
    } catch (err) {
      console.error(err);
      toast.error('Google Sign-In failed.');
    }
  };

  return (
    <section className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brand-primary/40 backdrop-blur-md" onClick={handleCloseLoginModal} />
      
      <div className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-300">
        
        {/* Header decoration */}
        <div className="bg-brand-primary p-8 flex flex-col items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <Logo className="w-16 h-16 mb-4 relative z-10" />
          <h2 className="text-2xl font-display font-black text-white relative z-10">Welcome Back</h2>
          <p className="text-brand-accent/80 text-xs font-bold uppercase tracking-widest relative z-10">TrackingTravel Account</p>
        </div>

        <div className="p-8 md:p-10">
          <button 
            onClick={handleCloseLoginModal} 
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 md:text-white md:hover:bg-white/10"
          >
            <FaTimes />
          </button>

          <button 
            onClick={handleGoogleSignIn} 
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:border-brand-secondary transition-all font-bold text-slate-700 mb-8 active:scale-[0.98]"
          >
            <FaGoogle className="text-brand-secondary" /> 
            <span>Sign in with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-8">
            <span className="flex-1 h-px bg-slate-100" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">or email login</span>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                <input required name="email" type="email" placeholder="you@mail.com" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between ml-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-black text-brand-secondary uppercase hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-sm" />
                <input required name="password" type="password" placeholder="••••••••" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-brand-secondary/20 transition-all font-bold text-brand-primary placeholder:text-slate-300" />
              </div>
            </div>

            {error && (
              <p className="text-brand-secondary text-xs font-bold bg-brand-secondary/5 p-3 rounded-xl border border-brand-secondary/10 mb-4">
                {error}
              </p>
            )}

            <button 
              disabled={loading}
              type="submit" 
              className="w-full py-4 bg-brand-secondary text-white rounded-2xl font-black shadow-xl shadow-brand-secondary/30 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 uppercase tracking-widest text-sm mt-4"
            >
              {loading ? "Verifying..." : "Access Account"}
            </button>
          </form>

          <div className="text-center mt-10">
            <p className="text-sm font-medium text-slate-500">
              New explorer?{' '}
              <a href="/registertion" className="text-brand-secondary font-black hover:underline underline-offset-4 decoration-2">Create Account</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
