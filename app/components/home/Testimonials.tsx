import { Star, Sparkles, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Zeeshan Haider",
    role: "Founder, Zesty Gourmet Foods",
    project: "Packaging Design & Rigid Box Print",
    content: "AA Graphic Studio completely elevated our food packaging. The die-cut precision, vibrant CMYK offset print, and matte finish made our product look world-class on supermarket shelves. 10/10 recommended!",
    rating: 5
  },
  {
    name: "Hamza Tariq",
    role: "Managing Director, Apex Properties",
    project: "Corporate Brand Identity & Gold Foil Cards",
    content: "We ordered 2,000 velvet-touch business cards with raised gold foil stamping and spot UV for our real estate firm. The tactile quality and print clarity are extraordinary. Our clients always compliment our cards.",
    rating: 5
  },
  {
    name: "Ayesha Malik",
    role: "Creative Head, Bloom Modest Wear",
    project: "Social Media Campaigns & Brand Guidelines",
    content: "The graphic design team at AA Graphic Studio understands modern aesthetics better than anyone. They revamped our complete visual language, logos, and Instagram ad creatives. Outstanding speed and artistry.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#09090b] text-zinc-100 relative overflow-hidden border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles size={13} />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Loved by <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">Brands &amp; Businesses</span>
          </h2>
          <p className="text-zinc-400 text-base">
            See how our creative design and precision printing have propelled businesses across industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5 relative group"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-current text-amber-400" />
                  ))}
                </div>

                {/* Project Badge */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-zinc-800/80 text-[11px] font-mono text-amber-400/90 mb-4 border border-zinc-700/50">
                  {testimonial.project}
                </div>

                {/* Content */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-500">{testimonial.role}</p>
                </div>
                <Quote size={24} className="text-zinc-700 group-hover:text-amber-500/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
