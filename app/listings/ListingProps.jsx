'use client';
import { FaChevronDown, FaFilter, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ListingsProps() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      const { data: apartments, error } = await supabase
        .from('apartment') // or 'properties'
        .select('*');

      if (error) {
        console.error('Error fetching listings:', error.message);
        return;
      }

      // For each apartment, generate signed image URLs
      const listingsWithImages = await Promise.all(
        apartments.map(async (apt) => {
          const signedImages = await Promise.all(
            (apt.image_keys || []).map(async (key) => {
              const { data, error } = await supabase
                .storage
                .from('property-images')
                .createSignedUrl(key, 60 * 60); // 1 hour

              return data?.signedUrl || null;
            })
          );

          return {
            ...apt,
            imageUrls: signedImages.filter(Boolean),
          };
        })
      );

      setListings(listingsWithImages);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (loading) return <p>Loading listings...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <div key={listing.id} className="bg-white p-4 shadow rounded">
          {listing.imageUrls[0] && (
            <img
              src={listing.imageUrls[0]}
              alt={listing.title}
              className="w-full h-48 object-cover rounded"
            />
          )}
          <h2 className="text-xl font-semibold mt-2">{listing.title}</h2>
          <p className="text-gray-600">₵{listing.price}</p>
        </div>
      ))}
    </div>
  );
}
