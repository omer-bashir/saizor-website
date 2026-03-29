
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Lightbulb,
  Target,
  FileText,
  Presentation,
  Database,
  Cpu,
  Users,
  Shield,
  Briefcase,
  CheckCircle2,
  Clock,
  TrendingUp,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FAQItem from '@/components/FAQItem.jsx';

const AuditPage = () => {
  const deliverables = [
    {
      icon: BarChart3,
      title: 'AI Maturity Score',
      description: 'Quantified assessment across five dimensions with clear benchmarks and gap analysis.',
    },
    {
      icon: TrendingUp,
      title: 'Traffic Light Heatmap',
      description: 'Visual dashboard showing strengths, weaknesses, and priority areas at a glance.',
    },
    {
      icon: Target,
      title: 'Industry Benchmark',
      description: 'See how you compare to similar organisations in your sector and region.',
    },
    {
      icon: Lightbulb,
      title: 'AI Opportunity Report',
      description: 'Prioritised list of AI use cases specific to your business model and industry.',
    },
    {
      icon: FileText,
      title: 'Prioritised Roadmap',
      description: 'Clear next steps with timelines, resource requirements, and expected outcomes.',
    },
    {
      icon: Presentation,
      title: 'Executive Presentation',
      description: 'Board-ready slide deck with key findings and recommendations. No jargon.',
    },
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery Call',
      duration: '30 mins, free',
      description: 'We learn about your business, current AI initiatives, and key challenges.',
    },
    {
      number: '2',
      title: 'Assessment Workshop',
      duration: '2–3 hours',
      description: 'Structured interview with key stakeholders covering all five maturity dimensions.',
    },
    {
      number: '3',
      title: 'Analysis',
      duration: 'Internal',
      description: 'We score your responses, benchmark against industry data, and identify opportunities.',
    },
    {
      number: '4',
      title: 'Delivery',
      duration: 'Within 5 business days',
      description: 'Receive your full report, heatmap, roadmap, and executive presentation.',
    },
  ];

  const dimensions = [
    {
      icon: Database,
      title: 'Data Readiness',
      description: 'Quality, accessibility, governance, and infrastructure of your data assets.',
    },
    {
      icon: Cpu,
      title: 'Tools & Technology',
      description: 'Current AI/ML tools, cloud infrastructure, and technical capabilities.',
    },
    {
      icon: Users,
      title: 'Talent & Skills',
      description: 'Team capabilities, training programs, and access to AI expertise.',
    },
    {
      icon: Briefcase,
      title: 'Strategy & Leadership',
      description: 'Executive buy-in, strategic alignment, and investment in AI initiatives.',
    },
    {
      icon: Shield,
      title: 'Governance & Ethics',
      description: 'Policies, risk management, compliance, and ethical AI frameworks.',
    },
  ];

  const faqs = [
    {
      question: 'Do I need technical knowledge to participate?',
      answer: 'No. The audit is designed for business leaders, not technical teams. We translate everything into plain language and focus on business outcomes, not technical specifications.',
    },
    {
      question: 'How long does the audit take?',
      answer: 'The assessment workshop takes 2–3 hours. You\'ll receive your full report within 5 business days. Total time commitment from your team is minimal.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We\'ve completed audits across healthcare, finance, retail, manufacturing, and professional services. Our framework adapts to any industry with AI potential.',
    },
    {
      question: 'Is the $1,000 fee really all-inclusive?',
      answer: 'Yes. $1,000 AUD covers the discovery call, assessment workshop, full analysis, report, heatmap, roadmap, and executive presentation. No hidden costs.',
    },
    {
      question: 'What happens after the audit?',
      answer: 'You own the report and can act on it independently. If you need help implementing recommendations, we offer follow-on services including strategy development and system design.',
    },
    {
      question: 'Can you build AI systems for us?',
      answer: 'Yes, but only after an audit. We believe in understanding your maturity and opportunities before building anything. This ensures we build the right solution.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Maturity Audit — $1,000 AUD Flat Fee | Saizor</title>
        <meta name="description" content="Structured independent assessment of your AI readiness. Board-ready reports delivered in 5 business days. Perth-based expertise." />
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
              AI maturity audit — $1,000 AUD flat fee
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              A structured, independent assessment of your organisation's AI readiness. Know where you stand, what's possible, and what to do next.
            </p>
            <Button asChild size="lg" className="transition-all duration-200 active:scale-[0.98]">
              <Link to="/contact">Book your audit</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What you get for $1,000</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A comprehensive assessment package delivered within 5 business days.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-spacing bg-secondary/30">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A simple four-step process from discovery to delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-6 border border-border h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{step.duration}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 5 Dimensions */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 5 dimensions we audit</h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A holistic view of your AI readiness across all critical areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <dimension.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{dimension.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{dimension.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing bg-secondary/30">
        <div className="max-w-3xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  value={`item-${index}`}
                />
              </motion.div>
            ))}
          </Accordion>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your AI maturity audit</h2>
            <p className="text-2xl font-semibold text-primary mb-8">
              $1,000 AUD — Flat Fee — No Hidden Costs
            </p>
            <Button asChild size="lg" className="mb-6 transition-all duration-200 active:scale-[0.98]">
              <Link to="/contact">Book now</Link>
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

export default AuditPage;
