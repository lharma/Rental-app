import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope, 
  faClock 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return ( 
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl text-black font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl text-gray-900 font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">Have questions about our listings or services? Fill out the form below and our team will get back to you as soon as possible.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="first-name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="last-name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>General Inquiry</option>
                  <option>Property Listing</option>
                  <option>Agent Services</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium">
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl text-gray-900 font-bold mb-6">Contact Information</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Our Office</h3>
                  <p className="text-gray-600">123 Rental Street, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">Main: (555) 123-4567<br />Support: (555) 765-4321</p>
                </div>
              </div>
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">info@rentx.com<br />support@rentx.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FontAwesomeIcon icon={faClock} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 6pm
                    <br />Saturday: 10am - 4pm
                    <br />Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;