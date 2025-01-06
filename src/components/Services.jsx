import { Clock, Crown, EyeOff, Headset, PenTool, ScrollText } from "lucide-react"

const Services = () => {
  return (
    <div id="services" className="services bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Pick Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Service Card */}
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <Crown className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">We ensure the highest quality in every piece of writing, with thorough checks and reviews to meet your standards.</p>
            </div>
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <PenTool className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Originality</h3>
                <p className="text-gray-600">Our work is 100% original, crafted from scratch to ensure uniqueness and avoid plagiarism.</p>
            </div>
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <Clock className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">We respect your deadlines and guarantee timely delivery of all projects, no matter the urgency.</p>
            </div>
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <Headset className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our support team is available around the clock to assist you with any queries or concerns.</p>
            </div>
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <EyeOff className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Confidentiality</h3>
                <p className="text-gray-600">We prioritize your privacy and ensure that all your information is kept secure and confidential.</p>
            </div>
            <div className="service-card bg-white shadow-md rounded-lg p-6 text-center">
                <div className="icon mb-4">
                    {/* Icon or image */}
                    <ScrollText className="w-12 h-12 mx-auto text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
                <p className="text-gray-600">From essays to dissertations, we offer a wide range of writing services to cater to all your academic needs.</p>
            </div>
        </div>
    </div>
  );
};

export default Services;