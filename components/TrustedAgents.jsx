import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faStarHalfAlt, 
  faStar as farStar 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const TrustedAgents = () => {
    return ( 
        <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-black font-bold text-center mb-12">Our Trusted Agents</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Agent Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
            {/* <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Agent Sarah" className="w-32 h-32 rounded-full mx-auto mt-8 border-4 border-white shadow-md"> */}
            <div className="p-6">
              <h3 className="text-xl text-gray-900 font-bold">Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Senior Rental Agent</p>
              <div className="flex justify-center text-yellow-400 mb-4">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarHalfAlt} />
                <span className="text-gray-600 text-sm ml-2">4.7</span>
              </div>
              <p className="text-gray-600 mb-4">Specializing in downtown apartments and luxury rentals with 8 years of experience.</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-pink-500 hover:text-pink-700"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
              <a href="#" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Sarah</a>
            </div>
          </div>
          
          {/* Agent Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
            {/* <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent Michael" className="w-32 h-32 rounded-full mx-auto mt-8 border-4 border-white shadow-md"> */}
            <div className="p-6">
              <h3 className="text-xl text-gray-900 font-bold">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Property Manager</p>
              <div className="flex justify-center text-yellow-400 mb-4">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <span className="text-gray-600 text-sm ml-2">5.0</span>
              </div>
              <p className="text-gray-600 mb-4">Expert in commercial properties and property management with 12 years experience.</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-pink-500 hover:text-pink-700"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
              <a href="#" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Michael</a>
            </div>
          </div>
          
          {/* Agent Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow text-center">
            {/* <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Agent Jessica" className="w-32 h-32 rounded-full mx-auto mt-8 border-4 border-white shadow-md"> */}
            <div className="p-6">
              <h3 className="text-xl text-gray-900 font-bold">Jessica Williams</h3>
              <p className="text-blue-600 mb-2">Rental Specialist</p>
              <div className="flex justify-center text-yellow-400 mb-4">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={farStar} />
                <span className="text-gray-600 text-sm ml-2">4.2</span>
              </div>
              <p className="text-gray-600 mb-4">Focuses on student housing and affordable rentals with 5 years experience.</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="text-blue-400 hover:text-blue-600"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-pink-500 hover:text-pink-700"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-blue-700 hover:text-blue-900"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
              <a href="#" className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Jessica</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl text-black font-bold text-center mb-6">Become a RentX Agent</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">Join our network of professional agents and get access to thousands of potential renters and property owners.</p>
          <div className="text-center">
            <a href="#" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
     );
}
 
export default TrustedAgents;