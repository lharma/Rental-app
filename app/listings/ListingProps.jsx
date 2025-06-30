'use client';
import { FaChevronDown, FaFilter, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const ListingProps = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$1,200/mo",
      location: "New York, NY",
      beds: 2,
      baths: 1,
      area: "850 sqft",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      status: "NEW",
      statusColor: "bg-blue-600"
    },
    {
      id: 2,
      title: "Cozy Family House",
      price: "$1,800/mo",
      location: "Austin, TX",
      beds: 3,
      baths: 2,
      area: "1,200 sqft",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      status: "AVAILABLE",
      statusColor: "bg-green-600"
    },
    {
      id: 3,
      title: "Affordable Studio",
      price: "$850/mo",
      location: "Chicago, IL",
      beds: 1,
      baths: 1,
      area: "500 sqft",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      status: "AVAILABLE",
      statusColor: "bg-green-600"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl text-black font-bold mb-4 md:mb-0">Available Properties</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md pl-4 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Sort by: Newest</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Bedrooms</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <FaChevronDown className="w-3 h-3" />
              </div>
            </div>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image 
                  src={property.image} 
                  alt={property.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-2 right-2 ${property.statusColor} text-white text-xs font-bold px-2 py-1 rounded`}>
                  {property.status}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl text-gray-900 font-bold">{property.title}</h3>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                    {property.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-1" />
                  {property.location}
                </p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <FaBed className="text-blue-500 mr-1" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <FaBath className="text-blue-500 mr-1" />
                    {property.baths} Bath
                  </span>
                  <span className="flex items-center">
                    <FaRulerCombined className="text-blue-500 mr-1" />
                    {property.area}
                  </span>
                </div>
                <Link 
                  href={`/listings/${property.id}`} 
                  className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <Link href="#" className="px-3 py-1 rounded-md bg-blue-600 text-white">&laquo;</Link>
            <Link href="#" className="px-3 py-1 rounded-md bg-blue-600 text-white">1</Link>
            <Link href="#" className="px-3 py-1 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300">2</Link>
            <Link href="#" className="px-3 py-1 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300">3</Link>
            <Link href="#" className="px-3 py-1 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300">&raquo;</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default ListingProps;