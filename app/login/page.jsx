import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const LogIn = () => {
  return ( 
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl text-black font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to your RentX account to manage your properties and preferences.</p>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-8">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="you@example.com" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="••••••••" 
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
                />
                <label htmlFor="remember" className="ml-2 block text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium mb-4">
              Login
            </button>
            
            <div className="text-center">
              <p className="text-gray-600">Don't have an account? <a href="/register" className="text-blue-600 hover:text-blue-800">Sign up</a></p>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FontAwesomeIcon icon={faGoogle} className="text-blue-600" />
                <span className="ml-2">Google</span>
              </a>
              <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" />
                <span className="ml-2">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default LogIn;