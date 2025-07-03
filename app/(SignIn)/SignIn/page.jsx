
'use client'
import React, { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const router = useRouter();
const [errorMsg, setErrorMsg] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMsg('');
  if (!email || !password) {
    setErrorMsg('Please enter both email and password.');
    return;
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim(),
    password,
  });

  if (error) {
    setErrorMsg(error.message);
    return;
  }

  if (data.user) {
    console.log('Login successful:', data.user);
    router.push('/LandingPage');
  }
};

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-black">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-black mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          {errorMsg && (
  <div className="text-red-600 text-center mb-2">{errorMsg}</div>
)}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Page;
