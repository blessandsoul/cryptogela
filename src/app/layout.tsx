import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://itswap.fun'),
  title: {
    default: 'itSwap.fun | Non-Custodial Crypto Exchange | 500+ Coins',
    template: '%s | itSwap.fun'
  },
  description: 'Secure, non-custodial cryptocurrency exchange. Swap 500+ coins with zero platform fees. No KYC required. Buy $ITSWAP tokens on Solana.',
  keywords: [
    'crypto exchange',
    'non-custodial',
    'Solana',
    'DeFi',
    'cryptocurrency swap',
    'ITSWAP token',
    'no KYC',
    'Bitcoin',
    'Ethereum',
    'meme coins',
    'pump.fun'
  ],
  authors: [{ name: 'itSwap.fun Team' }],
  creator: 'itSwap.fun',
  publisher: 'itSwap.fun',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://itswap.fun',
    title: 'itSwap.fun | Non-Custodial Crypto Exchange',
    description: 'Swap 500+ cryptocurrencies with zero platform fees. Non-custodial, no KYC required. Buy $ITSWAP on Solana.',
    siteName: 'itSwap.fun',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'itSwap.fun - Non-Custodial Crypto Exchange',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'itSwap.fun | Non-Custodial Crypto Exchange',
    description: 'Swap 500+ cryptocurrencies with zero platform fees. Non-custodial, no KYC required.',
    creator: '@itswapfun',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style id="webview-optimization" dangerouslySetInnerHTML={{__html: `
          * {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000;
            perspective: 1000;
          }
          
          html, body, #__next, main {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            will-change: transform;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          * {
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
          }
          
          button, a, input, select, textarea, [role="button"] {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            will-change: transform, opacity;
          }
          
          html {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            text-size-adjust: 100%;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
            color-scheme: light;
            -webkit-color-scheme: light;
          }
          
          body {
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
          
          img, picture, video, canvas, svg, [style*="background"] {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
          
          * {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
            tap-highlight-color: transparent;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          
          input, textarea, [contenteditable="true"] {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
          }
          
          html, body {
            overscroll-behavior: none;
            overscroll-behavior-x: none;
            overscroll-behavior-y: none;
            -webkit-overscroll-behavior: none;
          }
          
          body {
            overflow-x: hidden;
            position: fixed;
            width: 100%;
            height: 100%;
          }
          
          #__next, main {
            overflow-y: auto;
            overflow-x: hidden;
            height: 100%;
            width: 100%;
            position: relative;
          }
          
          img, svg, canvas, video {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            image-rendering: -webkit-optimize-contrast;
            image-rendering: optimizeQuality;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            will-change: transform;
          }
          
          svg {
            shape-rendering: geometricPrecision;
          }
          
          @media (prefers-reduced-motion: no-preference) {
            * {
              animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          
          [class*="animate"], [class*="transition"], [class*="hover"] {
            will-change: transform, opacity;
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          input, textarea, select {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 0;
          }
          
          *:focus {
            outline: none;
          }
          
          [style*="overflow"], .overflow-auto, .overflow-scroll {
            -webkit-overflow-scrolling: touch;
            will-change: scroll-position;
          }
        `}} />
        <script id="webview-performance-optimizer" dangerouslySetInnerHTML={{__html: `
          (function() {
            'use strict';
            
            const isWebView = (function() {
              const ua = navigator.userAgent.toLowerCase();
              const isAndroid = ua.indexOf('android') > -1;
              const isWebView = ua.indexOf('wv') > -1 || 
                                ua.indexOf('; wv)') > -1 ||
                                window.navigator.standalone === true ||
                                !window.matchMedia('(display-mode: browser)').matches;
              
              return isAndroid && isWebView;
            })();
            
            if (!isWebView) {
              console.log('Running in regular browser - optimizations skipped');
              return;
            }
            
            console.log('WebView detected - applying optimizations');
            
            function fixViewport() {
              let viewport = document.querySelector('meta[name="viewport"]');
              
              if (!viewport) {
                viewport = document.createElement('meta');
                viewport.name = 'viewport';
                document.head.appendChild(viewport);
              }
              
              viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
              
              let colorScheme = document.querySelector('meta[name="color-scheme"]');
              if (!colorScheme) {
                colorScheme = document.createElement('meta');
                colorScheme.name = 'color-scheme';
                colorScheme.content = 'light';
                document.head.appendChild(colorScheme);
              }
            }
            
            function debounce(func, wait) {
              let timeout;
              return function executedFunction(...args) {
                const later = () => {
                  clearTimeout(timeout);
                  func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
              };
            }
            
            function throttle(func, limit) {
              let inThrottle;
              return function(...args) {
                if (!inThrottle) {
                  func.apply(this, args);
                  inThrottle = true;
                  setTimeout(() => inThrottle = false, limit);
                }
              };
            }
            
            window.requestIdleCallback = window.requestIdleCallback || function(cb) {
              const start = Date.now();
              return setTimeout(function() {
                cb({
                  didTimeout: false,
                  timeRemaining: function() {
                    return Math.max(0, 50 - (Date.now() - start));
                  }
                });
              }, 1);
            };
            
            function deferTask(task) {
              if ('requestIdleCallback' in window) {
                requestIdleCallback(task);
              } else {
                setTimeout(task, 1);
              }
            }
            
            let ticking = false;
            
            const optimizedScroll = throttle(function(e) {
              if (!ticking) {
                window.requestAnimationFrame(function() {
                  ticking = false;
                });
                ticking = true;
              }
            }, 16);
            
            function makePassive() {
              let supportsPassive = false;
              try {
                const opts = Object.defineProperty({}, 'passive', {
                  get: function() {
                    supportsPassive = true;
                  }
                });
                window.addEventListener('testPassive', null, opts);
                window.removeEventListener('testPassive', null, opts);
              } catch (e) {}
              
              if (supportsPassive) {
                const addEvent = EventTarget.prototype.addEventListener;
                EventTarget.prototype.addEventListener = function(type, listener, options) {
                  const usesCapture = typeof options === 'boolean';
                  const usePassive = !usesCapture && (type === 'touchstart' || type === 'touchmove' || type === 'wheel' || type === 'mousewheel');
                  
                  if (usePassive && typeof options === 'object') {
                    options.passive = true;
                  } else if (usePassive) {
                    options = { passive: true, capture: false };
                  }
                  
                  addEvent.call(this, type, listener, options);
                };
              }
            }
            
            function optimizeImages() {
              const images = document.querySelectorAll('img');
              
              if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      const img = entry.target;
                      img.style.transform = 'translateZ(0)';
                      img.style.willChange = 'transform';
                      observer.unobserve(img);
                    }
                  });
                }, {
                  rootMargin: '50px'
                });
                
                images.forEach(img => imageObserver.observe(img));
              }
            }
            
            function preventInputZoom() {
              const inputs = document.querySelectorAll('input, textarea, select');
              inputs.forEach(input => {
                input.addEventListener('focus', function() {
                  if (this.style.fontSize !== '16px') {
                    this.setAttribute('data-original-size', this.style.fontSize);
                    this.style.fontSize = '16px';
                  }
                });
                
                input.addEventListener('blur', function() {
                  const originalSize = this.getAttribute('data-original-size');
                  if (originalSize) {
                    this.style.fontSize = originalSize;
                    this.removeAttribute('data-original-size');
                  }
                });
              });
            }
            
            function disableContextMenu() {
              document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                return false;
              }, false);
              
              document.addEventListener('touchstart', function(e) {
                if (e.target.tagName === 'IMG') {
                  e.preventDefault();
                }
              }, { passive: false });
            }
            
            function forceRepaint() {
              document.body.style.display = 'none';
              document.body.offsetHeight;
              document.body.style.display = '';
            }
            
            function optimizeMemory() {
              window.addEventListener('pagehide', function() {
                document.removeEventListener('scroll', optimizedScroll);
              });
              
              setInterval(function() {
                if (window.gc) {
                  window.gc();
                }
              }, 30000);
            }
            
            function init() {
              fixViewport();
              makePassive();
              disableContextMenu();
              optimizeMemory();
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                  optimizeImages();
                  preventInputZoom();
                  forceRepaint();
                });
              } else {
                optimizeImages();
                preventInputZoom();
                forceRepaint();
              }
              
              window.addEventListener('scroll', optimizedScroll, { passive: true });
              
              const observer = new MutationObserver(debounce(function(mutations) {
                deferTask(function() {
                  optimizeImages();
                  preventInputZoom();
                });
              }, 500));
              
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });
            }
            
            init();
            
            window.webViewOptimized = true;
            console.log('WebView optimizations applied successfully');
            
          })();
        `}} />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
