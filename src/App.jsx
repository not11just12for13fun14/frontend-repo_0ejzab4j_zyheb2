import React from 'react'
import Spline from '@splinetool/react-spline'
import { BarChart3, Database, MessageSquare, Sparkles, ArrowRight, CheckCircle2, Bot, Cpu } from 'lucide-react'

function App() {
  const FeatureCard = ({ icon: Icon, title, description, bullets }) => (
    <div className="group relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur border border-white/60 shadow-sm hover:shadow-xl transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-blue-100/30 to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )

  const Step = ({ number, title, text }) => (
    <div className="relative rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6">
      <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center font-semibold shadow">
        {number}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2 pl-8">{title}</h4>
      <p className="text-gray-600 pl-8">{text}</p>
    </div>
  )

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.08),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(37,99,235,0.08),transparent_50%)]">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-amber-500" />
            <div>
              <p className="text-base font-semibold text-gray-900 leading-tight">Flames AI Automations</p>
              <p className="text-xs text-gray-500 -mt-0.5">Services • Strategy • Delivery</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#solutions" className="hover:text-gray-900">Solutions</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#results" className="hover:text-gray-900">Results</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-lg shadow">
            Free strategy call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700 mb-4">
              <Bot className="w-4 h-4 text-purple-600" /> AI services and end-to-end automations
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Build AI assistants and automations that grow your business
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              From revenue dashboards to analyst copilots and customer chatbots — we design, build, and ship personalized AI systems tailored to your workflows.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-5 py-3 rounded-xl font-semibold shadow">
                Book a strategy call <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#solutions" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border border-white/60 bg-white/60 backdrop-blur text-gray-800">
                Explore solutions
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Fast delivery</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Measurable ROI</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Secure by design</div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[480px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/60 bg-white/40 shadow-lg">
              {/* Gradient aura overlay should not block Spline interactions */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.18),rgba(251,146,60,0.14),transparent_70%)]" />
              </div>
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700 mb-3">
            <Cpu className="w-4 h-4 text-blue-600" /> What we build
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">High‑impact AI automations</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Pick a starting point — we tailor each solution to your data, tools, and goals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={BarChart3}
            title="Sales Dashboards"
            description="Live revenue, pipeline, and retention dashboards connected to your CRM, billing, and product analytics."
            bullets={["Auto-ingested from CRM & billing", "Cohorts, LTV, CAC, churn", "Alerts on anomalies"]}
          />

          <FeatureCard
            icon={Database}
            title="Data Analyst Co‑pilot"
            description="Ask questions in plain English and get SQL, charts, and summaries — safely on top of your data."
            bullets={["Natural language to SQL", "Secure data sandboxing", "Notebooks & scheduled reports"]}
          />

          <FeatureCard
            icon={MessageSquare}
            title="AI Chatbots"
            description="On-brand chat agents for support and sales across web, Intercom, Slack, and WhatsApp."
            bullets={["RAG over your docs & CRM", "Handover to human seamlessly", "Analytics & fine-tuning"]}
          />

          <FeatureCard
            icon={Sparkles}
            title="Custom AI Apps"
            description="From lead scoring to personalized recommendations — purpose-built apps for your workflows."
            bullets={["Integrates with your stack", "Governance & audit trails", "Deployed to cloud or on‑prem"]}
          />
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700 mb-3">
            <Sparkles className="w-4 h-4 text-purple-600" /> How we work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">From idea to outcomes — fast</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A pragmatic, secure approach that gets real results into your hands in weeks, not months.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Step number={1} title="Discovery" text="We map goals, data sources, stack, and success metrics in a focused workshop." />
          <Step number={2} title="Design" text="Propose architecture, models, and UX with a clear delivery plan and timeline." />
          <Step number={3} title="Build" text="Implement integrations, data pipelines, and AI agents with security best practices." />
          <Step number={4} title="Launch" text="Ship, measure ROI, and iterate with ongoing support and enhancement options." />
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="rounded-3xl border border-white/60 bg-white/60 backdrop-blur p-8 md:p-10">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Proven outcomes</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> 40% faster sales cycles with automated lead qualification and follow‑ups</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> 25% reduction in support load with knowledge‑grounded chatbots</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 w-5 h-5 text-green-600" /> Hours to insights, not weeks — self‑serve analytics for business teams</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/60 bg-gradient-to-br from-purple-600 to-blue-600 text-white p-6 shadow-lg">
              <p className="text-lg font-semibold">Get a tailored roadmap</p>
              <p className="text-white/90 mt-1">Share your goals — we’ll outline highest‑ROI automations for your context.</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-white/90 px-4 py-2 rounded-lg font-medium">
                Book your call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-20 pb-20">
        <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur p-8 md:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Let’s build your AI advantage</h3>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Tell us about your funnel, data, and goals. We’ll come prepared with ideas, timelines, and clear ROI projections.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-5 py-3 rounded-xl font-semibold shadow">
              Email us
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border border-white/60 bg-white/60 backdrop-blur text-gray-800">
              Download one‑pager
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/60 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames AI Automations. All rights reserved.</p>
          <div className="text-sm text-gray-600 flex items-center gap-4">
            <a href="#solutions" className="hover:text-gray-900">Solutions</a>
            <a href="#process" className="hover:text-gray-900">Process</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
