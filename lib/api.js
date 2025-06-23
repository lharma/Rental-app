
import { supabase } from './supabaseClient';


//  AUTH FUNCTIONS for uses account


export async function signUpUser({ email, password, fullName, role }) {
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role,
      },
    },
  });
}

export async function signInUser({ email, password }) {
  return await supabase.auth.signInWithPassword({ email, password });
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
}

export async function signOutUser() {
  return await supabase.auth.signOut();
}


//  APARTMENT FUNCTIONS


// Fetch all listings
export async function fetchAllListings() {
  return await supabase
    .from('apartments')
    .select('*')
    .order('created_at', { ascending: false });
}

// Fetch one listing by ID
export async function fetchListingById(id) {
  return await supabase
    .from('apartments')
    .select('*')
    .eq('id', id)
    .single();
}

// Add a new apartment listing
export async function addListing({
  title,
  description,
  price,
  location,
  latitude,
  longitude,
  bedrooms,
  bathrooms,
  images = [],
  owner_id,
  duration_years,
}) {
  return await supabase.from('apartments').insert([
    {
      title,
      description,
      price,
      location,
      latitude,
      longitude,
      bedrooms,
      bathrooms,
      images,
      owner_id,
      duration_years,
    },
  ]);
}

// Update an existing listing
export async function updateListing(id, updates) {
  return await supabase
    .from('apartments')
    .update(updates)
    .eq('id', id);
}

// Delete a listing
export async function deleteListing(id) {
  return await supabase
    .from('apartments')
    .delete()
    .eq('id', id);
}

//
// 📁 STORAGE (IMAGE UPLOAD)
//

export async function uploadImage(filePath, file) {
  return await supabase.storage
    .from('apartment-images')
    .upload(filePath, file);
}

export function getPublicImageUrl(path) {
  return supabase.storage
    .from('apartment-images')
    .getPublicUrl(path).data.publicUrl;
}
