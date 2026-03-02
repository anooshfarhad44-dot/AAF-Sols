import Section from '../ui/Section';
import { CheckCircle2 } from 'lucide-react';

const features = [
    "Expert Team of Developers & Designers",
    "Cutting-edge Technology Stack",
    "24/7 Dedicated Support",
    "Agile Development Methodology",
    "Competitive Pricing",
    "On-time Delivery"
];

const WhyChooseUs = () => {
    return (
        <Section className="bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                        Why Choose AAF Solutions?
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        We don't just build software; we build partnerships. Our commitment to quality and innovation sets us apart in the digital landscape.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform rotate-3 rounded-2xl opacity-10 blur-lg"></div>
                    <div className="relative bg-gray-900 rounded-2xl p-8 text-white shadow-2xl">
                        <div className="text-center mb-8">
                            <span className="text-5xl font-bold text-blue-400">100+</span>
                            <p className="text-gray-400 mt-2">Projects Completed</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 text-center border-t border-gray-700 pt-8">
                            <div>
                                <span className="text-3xl font-bold text-purple-400">50+</span>
                                <p className="text-gray-400 mt-1">Happy Clients</p>
                            </div>
                            <div>
                                <span className="text-3xl font-bold text-pink-400">24/7</span>
                                <p className="text-gray-400 mt-1">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default WhyChooseUs;
