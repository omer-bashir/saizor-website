
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ValueCard from '@/components/ValueCard.jsx';

const AboutPage = () => {
  const values = [
    {
      icon: Search,
      title: 'Audit before everything',
      description: 'We believe in understanding before building. Every engagement starts with an independent assessment of your AI maturity and opportunities. No solutions sold before problems are understood.',
    },
    {
      icon: Lightbulb,
      title: 'Clarity',
      description: 'AI doesn\'t have to be complicated. We translate technical concepts into plain language, deliver board-ready reports, and ensure every stakeholder understands the path forward.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on business outcomes, not technology for its own sake. Every recommendation is tied to measurable value, realistic timelines, and practical next steps your team can execute.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Saizor — Perth-Based AI Audit Experts</title>
        <meta name="description" content="Independent AI maturity assessments for Perth organisations. Audit-first approach with technical capability to build what we recommend." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              About Saizor
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Saizor is a Perth-based AI consultancy that helps organisations understand their AI readiness before making technology investments. We believe the best AI projects start with honest assessment, not vendor pitches.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Our audit-first approach means we assess your current state, identify opportunities, and map a practical roadmap — all before recommending any specific tools or solutions. This independence ensures you get advice aligned with your business needs, not our product catalogue.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              We've completed over 100 AI maturity audits across healthcare, finance, retail, manufacturing, and professional services. Our clients range from mid-sized Perth businesses to national organisations looking for local expertise.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              While we start with audits, we also have the technical capability to design and build the AI systems we recommend. This means our assessments are grounded in real-world implementation experience — we know what works because we've built it.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Based in Perth, Western Australia, we understand the unique challenges of operating in a regional market while competing globally. We speak your language, understand your context, and deliver practical advice you can act on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-secondary/30">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our values</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              The principles that guide every engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work with us?</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Book an AI maturity audit or get in touch to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
                <Link to="/audit">Book an audit — $1,000</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
            <div className="text-sm text-foreground/60 space-y-1 mt-6">
              <p>Call us: <a href="tel:+61484311234" className="text-primary hover:underline">+61 (0) 484 311 234</a></p>
              <p>Email: <a href="mailto:omer.bashir@saizor.com" className="text-primary hover:underline">omer.bashir@saizor.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
