import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/features/home/hero-section";
import { FeaturesSection } from "@/features/home/features-section";
import { CalculatorSection } from "@/features/home/calculator-section";
import { TradingSection } from "@/features/home/trading-section";
import { ComparisonSection } from "@/features/home/comparison-section";
import { SecuritySection } from "@/features/home/security-section";
import { MemecoinSection } from "@/features/home/memecoin-section";
import { BetaAppSection } from "@/features/home/beta-app-section";
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
 * 2. Features → What makes us different
 * 3. Trading Area → Primary conversion action
 * 4. Comparison → Overcome objections
 * 5. Calculator → Interactive engagement (pre-conversion hook)
 * 6. Security → Trust reinforcement
 * 7. FAQ → Address remaining concerns
 */
export default function Home() {
  return (
    <main suppressHydrationWarning className="min-h-screen relative overflow-hidden bg-black">
      {/* Navigation - Glassmorphic sticky header */}
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════════
          ABOVE THE FOLD: Capture attention + immediate value prop
          ═══════════════════════════════════════════════════════════════ */}

      {/* Hero: Animated gradient, 3D elements, trust counters, primary CTA */}
      <HeroSection />

      {/* ═══════════════════════════════════════════════════════════════
          VALUE PROPOSITION: Why choose itSwap?
          ═══════════════════════════════════════════════════════════════ */}

      {/* Features: 4 key differentiators with glassmorphism cards */}
      <FeaturesSection />

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
          ENGAGEMENT: Interactive elements before conversion
          ═══════════════════════════════════════════════════════════════ */}

      {/* Calculator: "You send → You get" - Reduces friction */}
      <CalculatorSection />

      {/* ═══════════════════════════════════════════════════════════════
          TRUST REINFORCEMENT: Security matters in crypto
          ═══════════════════════════════════════════════════════════════ */}

      {/* Security: Non-custodial, encryption, audits */}
      <SecuritySection />

      {/* ═══════════════════════════════════════════════════════════════
          MEMECOIN COMMUNITY: Social media & community links
          ═══════════════════════════════════════════════════════════════ */}

      {/* Memecoin: PumpFun, Twitter, Telegram links */}
      <MemecoinSection />

      {/* ═══════════════════════════════════════════════════════════════
          BETA APP: Android mobile app download with QR code
          ═══════════════════════════════════════════════════════════════ */}

      {/* Beta App: Download Android APK with QR code */}
      <BetaAppSection />

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
