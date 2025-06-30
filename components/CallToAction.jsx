import Link from "next/link";

const CallToAction = () => {
    return ( 
        <section className="py-16 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of happy renters who found their perfect home through RentX.</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/register" className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100">Sign Up Now</Link>
                    <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600">Contact Us</Link>
                </div>
            </div>
        </section>
     );
}
 
export default CallToAction;