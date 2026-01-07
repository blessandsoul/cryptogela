import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/home/hero-section";
import { PartnersSection } from "@/features/home/partners-section";
import { FeaturesSection } from "@/features/home/features-section";
import { CalculatorSection } from "@/features/home/calculator-section";
import { TradingSection } from "@/features/home/trading-section";
import { ComparisonSection } from "@/features/home/comparison-section";
import { TestimonialsSection } from "@/features/home/testimonials-section";
import { SecuritySection } from "@/features/home/security-section";
import { ReferralBanner } from "@/features/home/referral-banner";
import { FAQSection } from "@/features/faq/faq-section";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/layout/sticky-cta";
import { ChatWidget } from "@/components/layout/chat-widget";

/**
 * itSwap.fun Landing Page
 * 
 * Architecture: Feature-based component composition
 * Design System: 2025 Minimal (Linear/Vercel aesthetic)
 * 
 * Section Order (Optimized for Conversion):
 * 1. Hero → Immediate value proposition & primary CTA
 * 2. Partners → Social proof (trust first)
 * 3. Features → What makes us different
 * 4. Calculator → Interactive engagement (pre-conversion hook)
 * 5. Trading Area → Primary conversion action
 * 6. Comparison → Overcome objections
 * 7. Testimonials → Peer validation
 * 8. Security → Trust reinforcement
 * 9. Referral → Secondary conversion path
 * 10. FAQ → Address remaining concerns
 */
export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-black">
      {/* Navigation - Glassmorphic sticky header */}
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          ABOVE THE FOLD: Capture attention + immediate value prop
          ═══════════════════════════════════════════════════════════════ */}

      {/* Hero: Animated gradient, 3D elements, trust counters, primary CTA */}
      <HeroSection />

      {/* Partners: Immediate social proof - builds trust before features */}
      <PartnersSection />

      {/* ═══════════════════════════════════════════════════════════════
          VALUE PROPOSITION: Why choose itSwap?
          ═══════════════════════════════════════════════════════════════ */}

      {/* Features: 4 key differentiators with glassmorphism cards */}
      <FeaturesSection />

      {/* ═══════════════════════════════════════════════════════════════
          ENGAGEMENT: Interactive elements before conversion
          ═══════════════════════════════════════════════════════════════ */}

      {/* Calculator: "You send → You get" - Reduces friction */}
      <CalculatorSection />

      {/* ═══════════════════════════════════════════════════════════════
          PRIMARY CONVERSION: The main action area
          ═══════════════════════════════════════════════════════════════ */}

      {/* Trading: Get SOL + Buy $ITSWAP with ShadCN Tabs */}
      <TradingSection />

      {/* ═══════════════════════════════════════════════════════════════
          OVERCOME OBJECTIONS: Why us over competitors?
          ═══════════════════════════════════════════════════════════════ */}

      {/* Comparison: itSwap vs CEX vs Other DEX */}
      <ComparisonSection />

      {/* ═══════════════════════════════════════════════════════════════
          SOCIAL PROOF: Real user validation
          ═══════════════════════════════════════════════════════════════ */}

      {/* Testimonials: Carousel with 5-star reviews */}
      <TestimonialsSection />

      {/* ═══════════════════════════════════════════════════════════════
          TRUST REINFORCEMENT: Security matters in crypto
          ═══════════════════════════════════════════════════════════════ */}

      {/* Security: Non-custodial, encryption, audits */}
      <SecuritySection />

      {/* ═══════════════════════════════════════════════════════════════
          SECONDARY CONVERSION: Alternative action path
          ═══════════════════════════════════════════════════════════════ */}

      {/* Referral: Earn $10 per friend */}
      <ReferralBanner />

      {/* ═══════════════════════════════════════════════════════════════
          ADDRESS CONCERNS: Pre-purchase questions
          ═══════════════════════════════════════════════════════════════ */}

      {/* FAQ: 8 comprehensive Q&A items */}
      <FAQSection />

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER & FLOATING ELEMENTS
          ═══════════════════════════════════════════════════════════════ */}

      <Footer />

      {/* Sticky Mobile CTA (appears on scroll) */}
      <StickyCTA />

      {/* AI Chat Widget (bottom-right) */}
      <ChatWidget />
    </main>
  );
}
