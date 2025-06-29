const Testimonials = () => {
  return (
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl text-black font-bold text-center mb-12">What Our Clients Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="flex items-center mb-4">
              {/* <img 
              src="https://randomuser.me/api/portraits/women/32.jpg" 
              alt="Sarah Johnson" 
              class="w-12 h-12 rounded-full mr-4"> */}
              <div>
                <h4 class="text-gray-900 font-bold">Sarah Johnson</h4>
                <p class="text-gray-600 text-sm">Austin, TX</p>
              </div>
            </div>
            <p class="text-gray-700">"RentX made finding my apartment so easy! The platform is user-friendly and I found exactly what I was looking for within my budget."</p>
            <div class="mt-4 text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="bg-gray-50 p-8 rounded-lg">
            <div class="flex items-center mb-4">
              {/* <img 
              src="https://randomuser.me/api/portraits/men/75.jpg" 
              alt="Michael Chen" 
              class="w-12 h-12 rounded-full mr-4"> */}
              <div>
                <h4 class="text-gray-900 font-bold">Michael Chen</h4>
                <p class="text-gray-600 text-sm">Chicago, IL</p>
              </div>
            </div>
            <p class="text-gray-700">"As a landlord, RentX has helped me find quality tenants quickly. The agent matching service is excellent and saves me so much time."</p>
            <div class="mt-4 text-yellow-400">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;