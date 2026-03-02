import Link from 'next/link';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { ArrowRight, Code, Palette, Smartphone, LineChart } from 'lucide-react';

const services = [
    {
        icon: <Code className="w-8 h-8 text-blue-600" />,
        title: "Web Development",
        description: "Custom websites built with modern technologies like Next.js and React for speed and performance.",
        link: "/services#web-dev"
    },
    {
        icon: <Smartphone className="w-8 h-8 text-purple-600" />,
        title: "App Development",
        description: "Native and cross-platform mobile apps that provide seamless user experiences.",
        link: "/services#app-dev"
    },
    {
        icon: <Palette className="w-8 h-8 text-pink-600" />,
        title: "UI/UX Design",
        description: "Intuitive and beautiful designs that engage users and elevate your brand identity.",
        link: "/services#design"
    },
    {
        icon: <LineChart className="w-8 h-8 text-green-600" />,
        title: "Digital Marketing",
        description: "Strategies to grow your online presence and reach your target audience effectively.",
        link: "/services#marketing"
    }
];

const ServicesPreview = () => {
    return (
        <Section className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
                    Our Expertise
                </h2>
                <p className="text-gray-600 text-lg">
                    We provide end-to-end digital solutions tailored to your business goals.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col h-full hover:border-blue-200">
                        <div className="mb-4 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                        <Link href={service.link} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 mt-auto group">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default ServicesPreview;
