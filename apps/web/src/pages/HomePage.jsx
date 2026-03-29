
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Shield, 
  FileText, 
  MessageSquare,
  Search,
  Lightbulb,
  BarChart3,
  Target,
  Users,
  Zap,
  Award,
  Building2,
  DollarSign,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TrustBadge from '@/components/TrustBadge.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
import StatCard from '@/components/StatCard.jsx';
import MaturityLevelCard from '@/components/MaturityLevelCard.jsx';

const HomePage = () => {
  const trustBadges = [
    { icon: CheckCircle2, text: '100+ Audits Completed' },
    { icon: MapPin, text: 'Perth Based' },
    { icon: Shield, text: 'Independent Advice' },
    { icon: FileText, text: 'Board-Ready Reports' },
    { icon: MessageSquare, text: 'No Tech Jargon' },
  ];

  const services = [
    {
      icon: Search,
      title: 'AI Maturity Audit',
      description: 'Comprehensive assessment of your organisation\'s AI readiness across five critical dimensions: data, tools, talent, strategy, and governance.',
    },
    {
      icon: Lightbulb,
      title: 'AI Opportunity Mapping',
      description: 'Identify high-impact AI use cases specific to your industry and business model, with prioritised recommendations based on ROI and feasibility.',
    },
    {
      icon: BarChart3,
      title: 'AI Audit Analytics',
      description: 'Visual dashboards and heatmaps showing your AI maturity score, industry benchmarks, and gap analysis to guide strategic decision-making.',
    },
  ];

  const whySaizor = [
    {
      icon: Shield,
      title: 'Independent first',
      description: 'We audit before we build. No vendor lock-in, no hidden agendas. Just honest, actionable insights.',
    },
    {
      icon: Award,
      title: 'Experienced',
      description: 'Over 100 AI maturity audits completed across healthcare, finance, retail, manufacturing, and professional services.',
    },
    {
      icon: MapPin,
      title: 'Local',
      description: 'Perth-based team with deep understanding of Australian business context and regulatory requirements.',
    },
    {
      icon: Target,
      title: 'Actionable',
      description: 'Board-ready reports with clear priorities, timelines, and next steps. No jargon, just practical roadmaps.',
    },
  ];

  const maturityLevels = [
    {
      level: '1',
      title: 'Unaware',
      description: 'Limited understanding of AI capabilities and potential business applications.',
    },
    {
      level: '2',
      title: 'Exploring',
      description: 'Investigating AI use cases and building foundational knowledge across the organisation.',
    },
    {
      level: '3',
      title: 'Piloting',
      description: 'Running small-scale AI experiments with defined success metrics and learnings.',
    },
    {
      level: '4',
      title: 'Scaling',
      description: 'Deploying AI solutions across multiple departments with measurable business impact.',
    },
    {
      level: '5',
      title: 'Leading',
      description: 'AI embedded in core strategy with continuous innovation and competitive advantage.',
    },
  ];

  const testimonials = [
    {
      quote: 'The audit gave us clarity we desperately needed. Within three weeks, we had a roadmap our board actually understood and approved.',
      author: 'Maya Chen',
      role: 'Chief Operating Officer',
      company: 'Meridian Health Group',
    },
    {
      quote: 'Saizor cut through the hype and showed us exactly where we stood. The traffic light heatmap made it easy to prioritise our next moves.',
      author: 'Raj Patel',
      role: 'Head of Digital Transformation',
      company: 'Coastal Financial Services',
    },
    {
      quote: 'Best $1,000 we\'ve spent. The industry benchmark data alone was worth it — we finally know how we compare to our competitors.',
      author: 'Lucia Torres',
      role: 'Managing Director',
      company: 'Torres Manufacturing',
    },
  ];

  const stats = [
    { icon: CheckCircle2, value: '100+', label: 'Audits Completed' },
    { icon: DollarSign, value: '$1,000', label: 'Flat Fee' },
    { icon: Briefcase, value: '5', label: 'Industry Sectors' },
    { icon: MapPin, value: 'Perth', label: 'Based Since Day One' },
  ];

  return (
    <>
      <Helmet>
        <title>Saizor — AI Maturity Audits for Perth Businesses</title>
        <meta name="description" content="Independent AI readiness assessments for Perth organisations. $1,000 flat fee. Board-ready reports. No tech jargon." />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1678995635432-d9e89c7a8fc5" 
            alt="Abstract digital technology background with circuit patterns"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
          <div className="absolute inset-0 circuit-pattern opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto container-padding w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              Is your business ready for the age of AI?
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Saizor helps Perth organisations understand their AI maturity, identify opportunities, and build practical roadmaps — without the hype.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base transition-all duration-200 active:scale-[0.98]">
                <Link to="/audit">Book your AI audit — $1,000</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base transition-all duration-200 active:scale-[0.98]">
                <Link to="/contact">Talk to an expert</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary/50 border-y border-border py-8">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <TrustBadge icon={badge.icon} text={badge.text} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we do</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We assess, map, and measure your AI readiness — so you can make informed decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
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
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Saizor */}
      <section className="section-spacing bg-secondary/30">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Saizor</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              We audit first, build second. Independent advice you can trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whySaizor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Maturity Framework */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI maturity framework</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Where does your organisation sit on the AI maturity scale?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {maturityLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MaturityLevelCard
                  level={level.level}
                  title={level.title}
                  description={level.description}
                  isActive={index === 2}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
              <Link to="/audit">Find out your level — Book an audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-secondary/30">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What our clients say</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Real feedback from Perth organisations we've helped.
            </p>
          </motion.div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="section-spacing bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard
                  icon={stat.icon}
                  value={stat.value}
                  label={stat.label}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to know where you stand?</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              $1,000 flat fee. No hidden costs. Board-ready report delivered within 5 business days.
            </p>
            <Button asChild size="lg" className="mb-6 transition-all duration-200 active:scale-[0.98]">
              <Link to="/audit">Book your audit now</Link>
            </Button>
            <div className="text-sm text-foreground/60 space-y-1">
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

export default HomePage;
