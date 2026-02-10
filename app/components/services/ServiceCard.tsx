import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
}

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
    return (
        <Card className="flex flex-col h-full hover:border-blue-400">
            <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
            <p className="text-gray-600 mb-6">{description}</p>

            <ul className="mb-8 space-y-3 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                        <span className="mr-2 text-blue-500">•</span>
                        {feature}
                    </li>
                ))}
            </ul>

            <Button href="/contactUs" variant="outline" className="w-full justify-center">
                Learn More
            </Button>
        </Card>
    );
};

export default ServiceCard;
