import Link from "next/link";

const HeroSection = () => {
    return ( 
        <section class="bg-blue-600 text-white py-20">
            <div class="container mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Rental Home</h1>
                <p class="text-xl mb-8 max-w-2xl mx-auto">Discover thousands of properties across the country with RentX - your trusted rental partner.</p>
                <Link href='/listings' class="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">Browse Listings</Link>
            </div>
        </section>
     );
}
 
export default HeroSection;