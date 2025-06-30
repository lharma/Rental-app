'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">RentX</h3>
            <p className="text-gray-400">Your trusted partner for finding rental properties across the country.</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/listings" className="text-gray-400 hover:text-white transition-colors">Listings</Link></li>
              <li><Link href="/agents" className="text-gray-400 hover:text-white transition-colors">Agents</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/property-management" className="text-gray-400 hover:text-white transition-colors">Property Management</Link></li>
              <li><Link href="/services/rental-assistance" className="text-gray-400 hover:text-white transition-colors">Rental Assistance</Link></li>
              <li><Link href="/services/valuation" className="text-gray-400 hover:text-white transition-colors">Home Valuation</Link></li>
              <li><Link href="/services/screening" className="text-gray-400 hover:text-white transition-colors">Tenant Screening</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-4" />
                123 Rental St, Suite 100
              </p>
              <p className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2 w-4" />
                (053) 463-4845
              </p>
              <p className="mb-2 flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-4" />
                info@rentx.com
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RentX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;