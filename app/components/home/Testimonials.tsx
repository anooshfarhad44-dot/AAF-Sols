import { Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Zeeshan Haider",
    role: "Founder, Zesty Gourmet Foods",
    project: "Packaging Design & Rigid Box Print",
    content: "AA Graphic Studio completely elevated our food packaging. The die-cut precision, vibrant CMYK offset print, and matte finish made our product look world-class on supermarket shelves. 10/10 recommended!",
    rating: 5,
    avatarColor: "bg-amber-100 text-amber-700 border-amber-200"
  },
  {
    name: "Hamza Tariq",
    role: "Managing Director, Apex Properties",
    project: "Corporate Brand Identity & Gold Foil Cards",
    content: "We ordered 2,000 velvet-touch business cards with raised gold foil stamping and spot UV for our real estate firm. The tactile quality and print clarity are extraordinary. Our clients always compliment our cards.",
    rating: 5,
    avatarColor: "bg-violet-100 text-violet-700 border-violet-200"
  },
  {
    name: "Ayesha Malik",
    role: "Creative Head, Bloom Modest Wear",
    project: "Social Media Campaigns & Brand Guidelines",
    content: "The graphic design team at AA Graphic Studio understands modern aesthetics better than anyone. They revamped our complete visual language, logos, and Instagram ad creatives. Outstanding speed and artistry.",
    rating: 5,
    avatarColor: "bg-rose-100 text-rose-700 border-rose-200"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-stone-50 text-stone-900 relative overflow-hidden border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-stone-900">
            Loved by{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Brands & Businesses
            </span>
          </h2>
          <p className="text-stone-500 text-base">
            See how our creative design and precision printing have propelled businesses across industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl p-7 bg-white border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between hover:shadow-lg relative group"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-amber-500" />
              </div>

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-stone-600 text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              <div className="border-t border-stone-100 pt-5 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full border-2 ${testimonial.avatarColor} flex items-center justify-center font-black text-base`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-stone-900">{testimonial.name}</p>
                  <p className="text-xs text-stone-400">{testimonial.role}</p>
                  <p className="text-[11px] text-amber-600 font-semibold mt-0.5">{testimonial.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
