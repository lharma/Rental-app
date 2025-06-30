const CallToAction = () => {
    return ( 
        <section class="py-16 bg-blue-600 text-white">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
                <p class="text-xl mb-8 max-w-2xl mx-auto">Join thousands of happy renters who found their perfect home through RentX.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <a href="register.html" class="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">Sign Up Now</a>
                    <a href="contact.html" class="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600">Contact Us</a>
                </div>
            </div>
        </section>
     );
}
 
export default CallToAction;