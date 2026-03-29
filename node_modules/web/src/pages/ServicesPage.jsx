
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Search,
  BarChart3,
  Map,
  Cpu,
  GraduationCap,
} from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: 'AI Maturity Audit',
      price: '$1,000 AUD',
      description: 'Comprehensive assessment of your organisation\'s AI readiness across five critical dimensions: data, tools, talent, strategy, and governance. Includes maturity score, traffic light heatmap, industry benchmark, opportunity report, prioritised roadmap, and executive presentation. Delivered within 5 business days.',
    },
    {
      icon: BarChart3,
      title: 'AI Audit Analytics',
      description: 'Visual dashboards and heatmaps showing your AI maturity score, industry benchmarks, and gap analysis. Interactive tools to explore your results, track progress over time, and share insights with stakeholders. Perfect for ongoing monitoring and board reporting.',
    },
    {
      icon: Map,
      title: 'AI Strategy & Roadmap',
      description: 'Develop a comprehensive AI strategy aligned with your business objectives. We help you prioritise initiatives, allocate resources, define success metrics, and create a phased implementation plan. Includes stakeholder workshops, competitive analysis, and risk assessment.',
    },
    {
      icon: Cpu,
      title: 'AI System Design & Build',
      description: 'Custom AI solution development from concept to deployment. We design and build AI systems tailored to your specific use cases, ensuring they integrate seamlessly with existing infrastructure. Includes proof of concept, pilot deployment, and production rollout support.',
    },
    {
      icon: GraduationCap,
      title: 'AI Advisory & Training',
      description: 'Ongoing advisory support and team training to build internal AI capabilities. Executive briefings, technical workshops, and hands-on training programs. We help your team understand AI fundamentals, evaluate vendors, and make informed technology decisions.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services — AI Audit, Strategy & Implementation | Saizor</title>
        <meta name="description" content="From AI maturity audits to custom system development. We support Perth organisations at every stage of their AI journey." />
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
              Our services
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              We support Perth organisations at every stage of their AI journey — from initial assessment to full implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  price={service.price}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {services.slice(2).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServicesPage;
