import Link from 'next/link';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CTA = () => {
    return (
        <Section className="bg-blue-900 text-white text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to Elevate Your Business?
                </h2>
                <p className="text-blue-100 text-xl mb-10">
                    Let's discuss your project and create something amazing together.
                </p>
  <Button
  href="/contactUs"
  variant="light"
  className="text-lg px-10 py-4"
>
  Get a Free Quote
</Button>



            </div>
        </Section>
    );
};

export default CTA;
