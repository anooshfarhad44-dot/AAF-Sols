import Section from '../ui/Section';
import Card from '../ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Ali Khan",
        role: "CEO, TechFlow",
        content: "AAF Solutions transformed our digital presence. Their team is professional, skilled, and delivered beyond our expectations.",
        rating: 5
    },
    {
        name: "Sarah Ahmed",
        role: "Marketing Director, CreativeCorner",
        content: "The UI/UX design they created for our app was stunning. Our user engagement increased by 40% immediately.",
        rating: 5
    },
    {
        name: "John Smith",
        role: "Founder, StartUp Inc",
        content: "Reliable, fast, and high-quality code. I highly recommend AAF Solutions for any web development project.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    What Our Clients Say
                </h2>
                <p className="text-gray-600">
                    Trusted by businesses worldwide.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-white p-8">
                        <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                        <div>
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
