'use client';
import { useData } from '../../../context/DataProvider';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';

export default function UserProfile() {
  const { user, loading } = useData();
  const [bio, setBio] = useState(user?.bio || '');
  const [description, setDescription] = useState(user?.description || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [gps, setGps] = useState(user?.gps || '');
  const [image, setImage] = useState(user?.image || '');
  const [uploading, setUploading] = useState(false);

  // Handle image file selection and upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;
    setUploading(true);

    const fileExt = file.name.split('.').pop();
  const filePath = `userprofile-images/${user.id}/${file.name}`



    const { error: uploadError } = await supabase.storage
      .from('userprofile-images') // <-- use the same bucket here
      .upload(filePath, file, { upsert: true });

    if (uploadError) {
      console.error('Image upload error:', uploadError);
      setUploading(false);
      return;
    }

    // Get public URL from the same bucket
    const { data } = supabase.storage.from('userprofile-images').getPublicUrl(filePath);
    setImage(data.publicUrl);
    setUploading(false);
  };

  const handleUpdateUserProfile = async () => {
   const updateData = {
  bio,
  description,
  phone,
  gps,
  image: [image], // <-- this is the image URL from state
};
    try {
      const { data, error } = await supabase
        .from('my_users')
        .insert([updateData])

        if(error){
          console.log('failed to update', error);
        }
    } catch (error) {
      console.log('error occured', error);
    }
  }

  return (
    <>
      <div className=" inset-0 w-full flex items-center justify-center bg-blue-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <div className="flex flex-col items-center">
            {loading ? (
              <div className="text-blue-700 text-lg">Loading...</div>
            ) : !user ? (
              <div className="text-red-600 text-lg">User not found.</div>
            ) : (
              <>
                {image ? (
                  <img
                    src={image}
                    alt="User"
                    className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-200"
                  />
                ) : (
                  <div className="w-24 h-24 bg-blue-200 rounded-full flex items-center justify-center mb-4">
                    <span className="text-3xl text-blue-700 font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </span>
                  </div>
                )}
                {/* Image upload input */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="mb-4 text-black border-1 border-slate-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={uploading}
                />
                {uploading && <div className="text-blue-500 mb-2">Uploading...</div>}
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">{user.name}</h2>
                <p className="text-blue-600 mb-1">{user.email}</p>
                <div className="w-full">
                  <label className="block text-blue-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full border border-blue-200 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                  <label className="block text-blue-700 mb-1" htmlFor="gps">
                    GPS Location
                  </label>
                  <input
                    id="gps"
                    type="text"
                    className="w-full border border-blue-200 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={gps}
                    onChange={e => setGps(e.target.value)}
                    placeholder="Enter your GPS coordinates"
                  />
                  <label className="block text-blue-700 mb-1" htmlFor="bio">
                    Bio
                  </label>
                  <input
                    id="bio"
                    type="text"
                    className="w-full border border-blue-200 rounded text-black  px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    placeholder="Enter your bio"
                  />
                  <label className="block text-blue-700 mb-1" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="w-full border border-blue-200 rounded text-black px-3 py-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter a description"
                    rows={3}
                  />
                  <button
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
                    onClick={handleUpdateUserProfile}
                    disabled={uploading}
                  >
                    Update Profile
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}