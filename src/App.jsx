import React, { useState } from 'react';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';
import ChatDashboard from './ChatDashboard';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate user login
    setCurrentUser({ email: formData.email, name: formData.name || 'User' });
  };

  // If user is logged in, show the main Chat Dashboard!
  if (currentUser) {
    return <ChatDashboard user={currentUser} onLogout={() => setCurrentUser(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#111b21] flex flex-col justify-center items-center p-4 relative">
      <div className="fixed top-0 left-0 right-0 h-56 bg-[#00a884] -z-0" />

      <div className="relative z-10 w-full max-w-md bg-[#202c33] rounded-2xl shadow-2xl overflow-hidden border border-[#2a3942]">
        <div className="p-8 text-center pb-4">
          <div className="w-16 h-16 bg-[#00a884] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-10 h-10 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.484 1.332 5.003L2 22l5.143-1.348a9.96 9.96 0 004.888 1.28h.005c5.517 0 9.993-4.476 9.993-9.993 0-2.671-1.04-5.183-2.927-7.07C17.218 3.04 14.704 2 12.031 2z"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#e9edef]">
            {isSignUp ? 'Create an Account' : 'Welcome to WhatsApp'}
          </h2>
          <p className="text-[#8696a0] text-sm mt-1">
            {isSignUp ? 'Sign up to start chatting' : 'Enter your details to sign in'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-2 space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-[#8696a0] uppercase mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8696a0]" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#111b21] text-[#e9edef] placeholder-[#8696a0] pl-10 pr-4 py-3 rounded-lg border border-[#2a3942] focus:outline-none focus:border-[#00a884] transition"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-[#8696a0] uppercase mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8696a0]" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-[#111b21] text-[#e9edef] placeholder-[#8696a0] pl-10 pr-4 py-3 rounded-lg border border-[#2a3942] focus:outline-none focus:border-[#00a884] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#8696a0] uppercase mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8696a0]" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-[#111b21] text-[#e9edef] placeholder-[#8696a0] pl-10 pr-4 py-3 rounded-lg border border-[#2a3942] focus:outline-none focus:border-[#00a884] transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-[#00a884] hover:bg-[#029071] text-[#111b21] font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition duration-200 shadow-md cursor-pointer"
          >
            <span>{isSignUp ? 'Sign Up' : 'Sign In'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="px-8 my-2 flex items-center gap-3">
          <div className="h-[1px] bg-[#2a3942] flex-1"></div>
          <span className="text-xs text-[#8696a0] uppercase">Or</span>
          <div className="h-[1px] bg-[#2a3942] flex-1"></div>
        </div>

        <div className="p-8 pt-2 space-y-4 text-center">
          <button
            type="button"
            onClick={() => setCurrentUser({ email: 'googleuser@gmail.com', name: 'Google User' })}
            className="w-full bg-[#111b21] hover:bg-[#182229] text-[#e9edef] font-medium py-3 px-4 rounded-lg border border-[#2a3942] flex items-center justify-center gap-3 transition"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
  <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z"/>
  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 22.3 12 22.3z"/>
</svg>
            <span>Continue with Google</span>
          </button>

          <p className="text-sm text-[#8696a0] pt-2">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
  type="button" 
  className="w-full py-2.5 px-4 rounded-lg bg-[#202c33] hover:bg-[#2a3942] text-white text-sm font-medium border border-gray-700 transition duration-200"
  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
>
  <svg style={{ width: '20px', height: '20px', flexShrink: 0 }} viewBox="0 0 24 24">
    <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.2 9 5 12 5z"/>
    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"/>
    <path fill="#FBBC05" d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15s.7 5.3 1.9 7.7l3.7-2.9z"/>
    <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.2-6.4-5.2L1.9 16C3.7 19.7 7.5 22.3 12 22.3z"/>
  </svg>
  <span>Continue with Google</span>
</button>
          </p>
        </div>

      </div>
    </div>
  );
}