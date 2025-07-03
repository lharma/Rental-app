// context/DataContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [listings, setListings] = useState([])
  const [user, setUser] = useState(null)
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchListings = async () => {
    const { data, error } = await supabase.from('apartment').select('*')
    if (error) {console.error('Error fetching listings:', error)
       alert(error.message || JSON.stringify(error));
    }
    else setListings(data)
  }
  const fetchUser = async () => {
  const {
    data: { user: fetchedUser },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.error('Auth error:', error);
    return;
  }
  setUser(fetchedUser);

  if (fetchedUser) {
    const { data: details, error: detailsError } = await supabase
      .from('users')
      .select('*')
      .eq('id', fetchedUser.id)
      .maybeSingle();

    if (detailsError) {
      console.error('User details error:', detailsError);
    } else if (!details) {
      // Insert user if not found
      const { error: insertError } = await supabase.from('users').insert([
        { id: fetchedUser.id, email: fetchedUser.email }
      ]);
      if (insertError) {
        console.error('Error inserting user:', insertError);
      } else {
        // Optionally fetch again to set userDetails
        const { data: newDetails } = await supabase
          .from('users')
          .select('*')
          .eq('id', fetchedUser.id)
          .maybeSingle();
        setUserDetails(newDetails);
      }
    } else {
      setUserDetails(details);
    }
  }
};

  useEffect(() => {
    const load = async () => {
      await fetchUser()
      await fetchListings()
      setLoading(false)
    }

    load()
  }, [])

  return (
    <DataContext.Provider value={{ listings, user, userDetails, loading }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
