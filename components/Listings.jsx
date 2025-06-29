'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faBed, 
  faBath, 
  faRulerCombined, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import Link from 'next/link';

const Listings = () => {
  const [favorites, setFavorites] = useState([]);
  
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$1,200/mo",
      location: "New York, NY",
      beds: 2,
      baths: 1,
      area: "850 sqft",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Cozy Family House",
      price: "$1,800/mo",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Affordable Studio",
      price: "$850/mo",
      location: "Chicago, IL",
      beds: 1,
      baths: 1,
      area: "500 sqft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return ( 
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative">
              <button 
                onClick={() => toggleFavorite(property.id)}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label={favorites.includes(property.id) ? "Remove from favorites" : "Add to favorites"}
              >
                <FontAwesomeIcon 
                  icon={favorites.includes(property.id) ? faHeart : faRegularHeart} 
                  className={favorites.includes(property.id) ? "text-red-500" : "text-gray-400"}
                  size="lg"
                />
              </button>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{property.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                    {property.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2" />
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faBed} className="text-blue-500 mr-2" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faBath} className="text-blue-500 mr-2" />
                    {property.baths} Bath
                  </span>
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faRulerCombined} className="text-blue-500 mr-2" />
                    {property.area}
                  </span>
                </div>
                <Link 
                  href={`/listings/${property.id}`} 
                  className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/listings" 
            className="inline-block border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Listings;