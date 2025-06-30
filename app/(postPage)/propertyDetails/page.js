"use client";
import ImageUploadSection from '../../../components/ImageUploadSection';
import RegionMunicipalSelect from '../../../components/RegionMunicipalSelect';
import '../../css/propertyDetails.css';
import { supabase } from '@/lib/supabaseClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function PropertyDetails() {
    const [regionData, setRegionData] = useState({ region: '', municipal: '' });
    const [houseDetails, setHouseDetails] = useState({
        title: '',
        description: '',
        price: '',
        gps: '',
        bedroom: '',
        bathroom: '',
        area: '',
        propertyType: '',
    });
    const [imageUrls, setImageUrls] = useState([]);

    const router = useRouter();

    const handleImageUpload = (url) => {
        setImageUrls(prev => [...prev, url]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHouseDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePropertyTypeSelect = (type) => {
        setHouseDetails((prev) => ({
            ...prev,
            propertyType: type,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (
                !houseDetails.title ||
                !houseDetails.description ||
                !houseDetails.price ||
                !houseDetails.gps ||
                !regionData.region ||
                !regionData.municipal
            ) {
                alert("Please fill in all required fields.");
                return;
            }
            // const { data: session } = await supabase.auth.getSession();
            // const userEmail = session?.session?.user?.email;

            const dataToInsert = {
                title: houseDetails.title,
                description: houseDetails.description,
                price: houseDetails.price === "" ? null : Number(houseDetails.price),
                gps: houseDetails.gps,
                bedroom: houseDetails.bedroom === "" ? null : Number(houseDetails.bedroom),
                bathroom: houseDetails.bathroom === "" ? null : Number(houseDetails.bathroom),
                region: regionData.region,
                municipal: regionData.municipal,
                image_urls: imageUrls,
                // userEmail: userEmail,
            };
const { error } = await supabase.from("apartment").insert([dataToInsert]);
if (error) {
    console.log('Supabase insert error:', error); // <-- log the full error
}
        } catch (err) {
            // Optionally handle error
            console.log('error', err.message)
        }
        setHouseDetails({
            title: '',
            description: '',
            price: '',
            gps: '',
            bedroom: '',
            bathroom: '',
            area: '',
            propertyType: '',
        });
    };

    return (
        <>
            <div className="relative overflow-hidden flex justify-center bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 to-slate-800/5"></div>
                <div className="relative px-4 py-4 sm:px-8 lg:px-12"></div>
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                        List Your
                        <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-[]"> </span>
                        Property
                    </h1>
                </div>
            </div>

            <div className="property-info max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="listing-progress mb-6">
                    <div className="listing-progress-title mb-2">
                        <p className="font-semibold text-lg">Listing Progress</p>
                    </div>
                    <div className="listing-progress-pages flex flex-wrap gap-2 text-sm">
                        <div className="bg-blue-100 text-blue-700 font-semibold rounded px-3 py-1">Property Details</div>
                        <div className="bg-slate-100 rounded px-3 py-1">Images & Media</div>
                        <div className="bg-slate-100 rounded px-3 py-1">Review & Publish</div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off">
                    <fieldset className="property-overview mb-6">
                        <legend className="fieldset-heading text-lg font-semibold mb-3">Property Overview</legend>
                        <label className="block mb-1" htmlFor="title">Property Title *</label>
                        <input
                            id="title"
                            className="title-input w-full mb-3 p-2 border rounded"
                            placeholder="Luxury Penthouse with City Views"
                            name="title"
                            required
                            value={houseDetails.title}
                            onChange={handleChange}
                        />

                        <label className="block mb-1" htmlFor="description">Property Description *</label>
                        <textarea
                            id="description"
                            className="desc-input w-full mb-3 p-2 border rounded"
                            placeholder="Describe your property's unique features, location highlights, and what makes it special ..."
                            name="description"
                            required
                            value={houseDetails.description}
                            onChange={handleChange}
                        />
                    </fieldset>

                    <fieldset className="property-details mb-6">
                        <legend className="fieldset-heading text-lg font-semibold mb-3">Property Details</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="small-section">
                                <label className="block mb-1" htmlFor="price">Price *</label>
                                <input
                                    id="price"
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border rounded"
                                    placeholder="$2,500,000"
                                    name="price"
                                    required
                                    value={houseDetails.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="small-section">
                                <label className="block mb-1" htmlFor="bedroom">Bedrooms *</label>
                                <input
                                    id="bedroom"
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border rounded"
                                    placeholder="Number of Bedrooms"
                                    name="bedroom"
                                    required
                                    value={houseDetails.bedroom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="small-section">
                                <label className="block mb-1" htmlFor="bathroom">Bathrooms *</label>
                                <input
                                    id="bathroom"
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border rounded"
                                    placeholder="Number of Bathrooms"
                                    name="bathroom"
                                    required
                                    value={houseDetails.bathroom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="small-section">
                                <label className="block mb-1" htmlFor="area">Area (sq ft) *</label>
                                <input
                                    id="area"
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border rounded"
                                    placeholder="2,500"
                                    name="area"
                                    required
                                    value={houseDetails.area}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Property Type Section */}
                        <label className="block mt-4 mb-1">Property Type *</label>
                        <div className="property-type-grid grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                className={`grid-item flex flex-col items-center p-2 border rounded cursor-pointer transition ${
                                    houseDetails.propertyType === 'House' ? 'bg-blue-100 border-blue-500' : ''
                                }`}
                                onClick={() => handlePropertyTypeSelect('House')}
                            >
                                <span>House</span>
                            </button>
                            <button
                                type="button"
                                className={`grid-item flex flex-col items-center p-2 border rounded cursor-pointer transition ${
                                    houseDetails.propertyType === 'Apartment' ? 'bg-blue-100 border-blue-500' : ''
                                }`}
                                onClick={() => handlePropertyTypeSelect('Apartment')}
                            >
                                <span>Apartment</span>
                            </button>
                        </div>
                    </fieldset>

                    {/* Location Section */}
                    <fieldset className="property-overview mb-6">
                        <legend className="fieldset-heading text-lg font-semibold mb-3">Location</legend>
                        <label className="block mb-1" htmlFor="gps">Property Address *</label>
                        <input
                            id="gps"
                            className="w-full mb-2 p-2 border rounded"
                            placeholder="123 Park Avenue, Kumasi, AK 000-0000"
                            name="gps"
                            required
                            value={houseDetails.gps}
                            onChange={handleChange}
                        />
                        <p className="location-input-p text-xs mb-2">
                            Enter the complete address for accurate location mapping
                        </p>
                        <RegionMunicipalSelect onChange={setRegionData} />
                    </fieldset>

                    {/* Image Section */}
                    <div className="property-overview mb-6">
                        <h1 className="fieldset-heading text-lg font-semibold mb-3">Property Images</h1>
                        <p className="image-title text-xs mb-2">
                            Upload high-quality images to showcase your property. First image will be used as the main photo.
                        </p>
                        <ImageUploadSection onUpload={handleImageUpload} />
                    </div>
                    <button
                        type="submit"
                        className="submit-button w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </>
    );
}

export default PropertyDetails;