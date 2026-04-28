import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock, FaUser, FaGoogle } from 'react-icons/fa';
import Logo from "../Shared/Logo";

const Registertion = () => {
  const navigate = useNavigate();
  const [passMatch, setPassMatch] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { createUser, googleSignIn, updateUserProfile } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
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
        name: `${firstName} ${lastName}`,
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
        navigate("/");
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
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Google Sign-In failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-slate-50/50">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 bg-white rounded-[1.5rem] sm:rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full max-w-5xl flex flex-col md:flex-row overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-700 ease-out">
        
        {/* Left Decor / Info */}
        <div className="hidden lg:flex flex-col justify-center items-center bg-brand-primary text-white w-[38%] p-12 relative overflow-hidden shrink-0">
           <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
           
           <div className="relative z-10 flex flex-col items-center text-center">
             <Logo className="w-24 h-24 mb-8 drop-shadow-2xl hover:scale-110 transition-transform duration-500" />
             <h2 className="text-4xl font-display font-black mb-6 leading-tight tracking-tight">Begin Your <br/><span className="text-brand-secondary">Adventure</span></h2>
             <p className="text-brand-accent text-sm font-medium opacity-80 leading-relaxed max-w-[240px]">
               Join our community of global explorers and access exclusive travel deals across the world.
             </p>
             <div className="mt-12 flex flex-col gap-4 w-full px-4">
               <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                 <div className="w-10 h-10 rounded-xl bg-brand-secondary/20 flex items-center justify-center text-brand-secondary font-black">01</div>
                 <p className="text-xs font-bold uppercase tracking-widest text-left">Swift Setup</p>
               </div>
               <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                 <div className="w-10 h-10 rounded-xl bg-brand-accent/20 flex items-center justify-center text-brand-accent font-black">02</div>
                 <p className="text-xs font-bold uppercase tracking-widest text-left">Secure Data</p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[62%] p-8 md:p-14 lg:p-14 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-4xl font-display font-black text-brand-primary mb-3 tracking-tighter">Create Account</h1>
            <p className="text-slate-400 font-medium text-sm">Fill in your details to start your journey.</p>
          </div>

          <button 
            onClick={handleGoogleSignIn} 
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:border-brand-secondary/30 hover:bg-white hover:shadow-lg hover:shadow-brand-secondary/5 transition-all font-bold text-slate-700 mb-8 active:scale-[0.98] group"
          >
            <FaGoogle className="text-brand-secondary group-hover:rotate-[360deg] transition-transform duration-500 text-sm sm:text-base" /> 
            <span>Continue with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-8">
            <span className="flex-1 h-px bg-slate-100" />
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest px-2">or register with email</span>
            <span className="flex-1 h-px bg-slate-100" />
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">First Name</label>
              <div className="relative group">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input required name="firstName" type="text" placeholder="John" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/20 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-200" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Last Name</label>
              <div className="relative group">
                <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input required name="lastName" type="text" placeholder="Doe" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/20 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-200" />
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative group">
                <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input required name="email" type="email" placeholder="explorer@mail.com" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/20 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-200" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input required name="password" type="password" placeholder="••••••••" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/20 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-200" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Confirm</label>
              <div className="relative group">
                <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 text-sm group-focus-within:text-brand-secondary transition-colors" />
                <input required name="confirmPassword" type="password" placeholder="••••••••" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-secondary/20 focus:bg-white focus:ring-0 transition-all font-bold text-brand-primary placeholder:text-slate-200" />
              </div>
            </div>

            <div className="md:col-span-2 mt-4 space-y-6">
              {(!passMatch || error) && (
                <div className="animate-shake">
                  <p className="text-brand-secondary text-[10px] sm:text-xs font-bold bg-brand-secondary/5 p-4 rounded-2xl border border-brand-secondary/10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full animate-pulse flex-shrink-0" />
                    {error || "Passwords do not match. Please verify your entry."}
                  </p>
                </div>
              )}
              <button 
                disabled={loading}
                type="submit" 
                className="w-full py-4.5 bg-brand-secondary text-white rounded-2xl font-black shadow-[0_10px_25px_-5px_rgba(250,139,120,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(250,139,120,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 uppercase tracking-[0.15em] text-xs sm:text-sm"
              >
                {loading ? "Establishing Profile..." : "Create Account"}
              </button>
            </div>
          </form>

          <div className="text-center mt-12 pb-4">
            <p className="text-sm font-medium text-slate-400">
              Already a member?{' '}
              <Link to="/login" className="text-brand-secondary font-black hover:underline underline-offset-4 decoration-2">Sign In Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registertion;
