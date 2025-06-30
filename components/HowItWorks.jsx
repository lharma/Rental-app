import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faKey, faSearch } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
    return ( 
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-black font-bold text-center mb-12">How RentX Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon 
                            icon={ faSearch } 
                            className="text-blue-600 text-xl" 
                            size="lg" />
                        </div>
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Find Your Home</h3>
                        <p className="text-gray-600">Browse our extensive listings to find properties that match your criteria.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon 
                            icon={ faCalendar } 
                            className="text-blue-600 text-xl" 
                            size="lg" />
                        </div>
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Schedule a Visit</h3>
                        <p className="text-gray-600">Contact the property owner or agent to schedule a viewing.</p>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon 
                            icon={ faKey } 
                            className="text-blue-600 text-xl" 
                            size="lg" />
                        </div>
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Move In</h3>
                        <p className="text-gray-600">Complete the paperwork and move into your new home!</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HowItWorks;