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
// //           .getPublicUrl(filePath);

// //         if (onUpload) {
// //           onUpload(publicData.publicUrl); // return uploaded image URL to parent
// //         }
// //       }
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center w-full px-4">
// //       <div
// //         className="w-full max-w-3xl px-6 py-10 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-blue-400 transition space-y-6"
// //         onClick={() => fileInputRef.current.click()}
// //       >
// //         <div className="flex justify-center">
// //           <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
// //             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
// //           </svg>
// //         </div>
// //         <p className="text-gray-700 text-lg font-medium py-4">
// //           Drop your images here, or click to browse
// //         </p>
// //         <p className="text-sm text-gray-400 pb-6">
// //           Supports JPG, PNG, WebP up to 10MB each
// //         </p>
// //         <div className="flex justify-center">
// //           <label
// //             htmlFor="fileUpload"
// //             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
// //           >
// //             <span className="text-lg font-bold">+</span>
// //             Add Images
// //           </label>
// //           <input
// //             ref={fileInputRef}
// //             id="fileUpload"
// //             type="file"
// //             className="hidden"
// //             accept="image/*"
// //             multiple
// //             onChange={(e) => handleFiles(e.target.files)}
// //           />
// //         </div>
// //       </div>

// //       {images.length > 0 && (
// //         <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4">
// //           {images.map((src, i) => (
// //             <img
// //               key={i}
// //               src={src}
// //               alt={`Uploaded ${i}`}
// //               className="w-[120px] h-[80px] object-cover rounded shadow-sm border"
// //             />
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// 'use client';
// import { useRef, useState } from 'react';
// import { supabase } from '@/lib/supabaseClient';

// export default function ImageUploadSection({ onUpload }) {
//   const fileInputRef = useRef();
//   const [previews, setPreviews] = useState([]);
//   const [imageFile, setImageFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);


//   const uploadImage = async () => {
//     try {
//       setIsUploading(true)
//       if (!file) throw new Error('No file selected')

//       const fileExt = file.name.split('.').pop()
//       const fileName = `${Date.now()}.${fileExt}`
//       const filePath = `uploads/${fileName}`

//       let { error } = await supabase.storage
//         .from('images') // bucket name
//         .upload(filePath, file)

//       if (error) throw error

//       alert('Uploaded successfully!')
//     } catch (error) {
//       console.error('Error uploading:', error.message)
//     } finally {
//       setIsUploading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col items-center justify-center w-full px-4">
//       <div
//         className="w-full max-w-3xl px-6 py-10 border-2 border-dashed border-gray-300 rounded-xl text-center cursor-pointer hover:border-blue-400 transition space-y-6"
//         onClick={() => fileInputRef.current.click()}
//       >
//         {/* Icon */}
//         <div className="flex justify-center">
//           <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
//           </svg>
//         </div>

//         {/* Text */}
//         <p className="text-gray-700 text-lg font-medium py-4">
//           Drop your images here, or click to browse
//         </p>
//         <p className="text-sm text-gray-400 pb-6">
//           Supports JPG, PNG, WebP up to 10MB each
//         </p>

//         {/* Upload button */}
//         <div className="flex justify-center" onClick={uploadImage}>
//           <label
//             htmlFor="fileUpload"
//             className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
//           >
//             <span className="text-lg font-bold">+</span>
//             Add Images
//           </label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files[0])}
//           />
//         </div>
//       </div>

//       {/* Image previews */}
//       {imageFile.length > 0 && (
//         <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-4">
//           {imageFile.map((src, i) => (
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
// }'use client';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import { supabase } from '@/lib/supabaseClient';
import { ReactSortable } from 'react-sortablejs';

export default function ImageUploaderSection({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  const onDrop = async (acceptedFiles) => {
    setUploading(true);
    const urls = [];

    // 🔐 Get the current user
    const { data: userData, error: userError } = await supabase.auth.getUser();
    const user = userData?.user;

    if (!user) {
      console.error("User not authenticated.");
      setUploading(false);
      return;
    }

    for (const file of acceptedFiles) {
      try {
        const compressed = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1024,
          useWebWorker: true,
        });

        const ext = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const path = `property-images/${user.id}/${fileName}`; // ✅ Folder matches RLS policy

        const { error } = await supabase.storage
          .from('property-images')
          .upload(path, compressed);

        if (error) {
          console.error('Upload error:', error.message);
          continue;
        }

        // ✅ Use signed URL if bucket is private
        const { data: signedUrlData, error: signedError } = await supabase
          .storage
          .from('property-images')
          .createSignedUrl(path, 60 * 60); // 1 hour

        if (signedError) {
          console.error('Signed URL error:', signedError.message);
          continue;
        }

        urls.push(signedUrlData.signedUrl);
      } catch (err) {
        console.error('Compression/Upload failed:', err);
      }
    }

    const newImages = [...images, ...urls.map((url, index) => ({ id: Date.now() + index, url }))];
    setImages(newImages);
    if (onUpload) onUpload(newImages.map(img => img.url));
    setUploading(false);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="w-full p-5 border-2 border-dashed border-gray-400 rounded-lg text-center cursor-pointer bg-white hover:border-blue-500 transition"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">Drag & drop images here, or click to select</p>
        {uploading && <p className="text-blue-600 mt-2">Uploading...</p>}
      </div>

      <ReactSortable list={images} setList={setImages} animation={200}>
        <div className="grid grid-cols-3 gap-3">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              className="w-full h-28 object-cover rounded shadow"
              alt="Uploaded preview"
            />
          ))}
        </div>
      </ReactSortable>
    </div>
  );
}
