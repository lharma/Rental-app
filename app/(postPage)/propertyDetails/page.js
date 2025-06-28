"use client";
import ImageUploadSection from '../../../components/ImageUploadSection';
import RegionMunicipalSelect from '../../../components/RegionMunicipalSelect';
import '../../css/propertyDetails.css' 
import { supabase } from '@/lib/supabaseClient';
import { useState , useEffect } from 'react';
import { useRouter } from 'next/navigation';
function PropertyDetails(){
const [houseDetails ,setHouseDetails] =useState({

})
const router = useRouter()
const handleSubmit = async (e)=>{
    e.preventDefault()
    const{error} = await supabase.from("appartment").insert({houseDetails})
    if(!error){
        router.push('/useProfile')
    }
    else{
        console.log('failed to post',error.message)
    }
}
    return (
    <>
    
      <div className="relative overflow-hidden flex justify-center bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 to-slate-800/5"></div>
        <div className="relative px-6 py-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-1xl font-bold tracking-tight text-slate-900 sm:text-1xl lg:text-2xl">
              List Your
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"> </span>
              Property
            </h1>
          </div>
        </div>
      </div>

    <div className='property-info'>

                <div className='listing-progress'>
                    <div className='listing-progress-title'>
                        <p>Listing Progress</p>
                    </div>
                    <div className='listing-progress-pages'>
                        <div>Property Details</div>
                        <div>Images & Media</div>
                        <div>Review & Publish</div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <fieldset className='property-overview'>
                        <h1 className='fieldset-heading'>Property Overview </h1>

                        <label>Property Title *</label>
                        <input className='title-input' placeholder='Luxury Penthouse with City Views' />

                        <label>Property Description *</label>
                        <textarea className='desc-input' placeholder="Describe your property's unique features, location highlights, and what makes it special ..." />
                    </fieldset>

                    <fieldset className='property-details'>
                        <h1 className='fieldset-heading'>Property Details</h1>

                        <div className='small-section'>
                            <label>Price *</label>
                            <input type='number' className='small-input' placeholder='$ 2,500.000' />
                        </div>

                        <div className='small-section'>
                            <label>Bedrooms</label>
                            <input type='number' className='small-input' placeholder='Number of Bedrooms' />
                        </div>

                        <div className='small-section'>
                            <label>Bathrooms</label>
                            <input type='number' className='small-input' placeholder='Number of Bathrooms' />
                        </div>

                        <div className='small-section'>
                            <label>Area (sq ft)</label>
                            <input type='number' className='small-input' placeholder='2,500' />
                        </div>

                        {/* Property Type Section */}
                        <label>Property Type *</label>
                        <div className='property-type-grid '>
                            <div className='grid-item'><i className="ri-home-fill text-black"></i> <br />House</div>
                            <div className='grid-item'><i className="ri-building-fill text-black"></i> <br />Apartment</div>
                           
                        </div>
                    </fieldset>

                    {/* Location Section */}
                    <fieldset className='property-overview'>
                        <h1 className='fieldset-heading'>Location </h1>
                        <label>Property Address *</label>
                        <input className='location-input' placeholder='123 Park Avenue, Kumasi, AK 000-0000' />
                        <p className='location-input-p'>Enter the complete address for accurate location mapping</p>
                        < RegionMunicipalSelect />
                    </fieldset>

                    {/* Image Section */}
                    <div className='property-overview'>
                        <h1 className='fieldset-heading'>Property Images </h1>
                        <p className='image-title'>Upload high-quality images to showcase your property. First image will be used as the main photo.</p>
                    <ImageUploadSection />
                    </div>
                </form>



{/*                <button type="submit" className="submit-button">
                    Proceed
                </button>*/}
            </div>
            </>
    );
}

export default PropertyDetails