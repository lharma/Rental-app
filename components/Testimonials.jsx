const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial Cards */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-600 mb-4">"Great service! Found my dream home quickly."</p>
            <p className="font-medium">- Sarah Johnson</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;