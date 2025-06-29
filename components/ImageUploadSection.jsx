// 'use client';
// import { useRef, useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';

// export default function ImageUploadSection({ onUpload }) {
//   const fileInputRef = useRef();
//   const [images, setImages] = useState([]);

//   const handleFiles = async (files) => {
//     const validImages = Array.from(files).filter(file =>
//       file.type.startsWith('image/')
//     );

//     for (let file of validImages) {
//       const reader = new FileReader();

//       // Show preview
//       reader.onload = () => {
//         setImages(prev => [...prev, reader.result]);
//       };
//       reader.readAsDataURL(file);

//       // Upload to Supabase
//       const fileExt = file.name.split('.').pop();
//       const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
//       const filePath = `properties/${fileName}`;

//       const { data, error } = await supabase.storage
//         .from('property-images')
//         .upload(filePath, file);

//       if (error) {
//         console.error('Upload failed:', error.message);
//       } else {
//         const { data: publicData } = supabase
//           .storage
//           .from('property-images')
//           .getPublicUrl(filePath);

//         if (onUpload) {
//           onUpload(publicData.publicUrl); // return uploaded image URL to parent
//         }
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full px-4">
//       <div
//         className="w-full max-w-3xl px-6 py-10 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-blue-400 transition space-y-6"
//         onClick={() => fileInputRef.current.click()}
//       >
//         <div className="flex justify-center">
//           <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//           </svg>
//         </div>
//         <p className="text-gray-700 text-lg font-medium py-4">
//           Drop your images here, or click to browse
//         </p>
//         <p className="text-sm text-gray-400 pb-6">
//           Supports JPG, PNG, WebP up to 10MB each
//         </p>
//         <div className="flex justify-center">
//           <label
//             htmlFor="fileUpload"
//             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
//           >
//             <span className="text-lg font-bold">+</span>
//             Add Images
//           </label>
//           <input
//             ref={fileInputRef}
//             id="fileUpload"
//             type="file"
//             className="hidden"
//             accept="image/*"
//             multiple
//             onChange={(e) => handleFiles(e.target.files)}
//           />
//         </div>
//       </div>

//       {images.length > 0 && (
//         <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4">
//           {images.map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`Uploaded ${i}`}
//               className="w-[120px] h-[80px] object-cover rounded shadow-sm border"
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
'use client';
import { useRef, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function ImageUploadSection({ onUpload }) {
  const fileInputRef = useRef();
  const [previews, setPreviews] = useState([]);
  const [uploadedURLs, setUploadedURLs] = useState([]);

  const handleFiles = async (files) => {
    const validImages = Array.from(files).filter(file =>
      file.type.startsWith('image/')
    );

    for (let file of validImages) {
      // Preview logic
      const reader = new FileReader();
      reader.onload = () => {
        setPreviews(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);

      // Upload to Supabase
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `properties/${fileName}`;

      const { data, error } = await supabase.storage
        .from('property-images')
        .upload(filePath, file);

      if (error) {
        console.error('Upload failed:', error.message);
        continue;
      }

      const { data: publicData } = supabase
        .storage
        .from('property-images')
        .getPublicUrl(filePath);

      if (publicData?.publicUrl) {
        const newURL = publicData.publicUrl;

        setUploadedURLs(prev => {
          const updated = [...prev, newURL];
          if (onUpload) onUpload(updated); // send all URLs to parent
          return updated;
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-4">
      <div
        className="w-full max-w-3xl px-6 py-10 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-blue-400 transition space-y-6"
        onClick={() => fileInputRef.current.click()}
      >
        {/* Icon */}
        <div className="flex justify-center">
          <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>

        {/* Text */}
        <p className="text-gray-700 text-lg font-medium py-4">
          Drop your images here, or click to browse
        </p>
        <p className="text-sm text-gray-400 pb-6">
          Supports JPG, PNG, WebP up to 10MB each
        </p>

        {/* Upload button */}
        <div className="flex justify-center">
          <label
            htmlFor="fileUpload"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <span className="text-lg font-bold">+</span>
            Add Images
          </label>
          <input
            ref={fileInputRef}
            id="fileUpload"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
      </div>

      {/* Image previews */}
      {previews.length > 0 && (
        <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4">
          {previews.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Uploaded ${i}`}
              className="w-[120px] h-[80px] object-cover rounded shadow-sm border"
            />
          ))}
        </div>
      )}
    </div>
  );
}
