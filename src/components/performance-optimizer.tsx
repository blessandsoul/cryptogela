"use client"

import { ReactNode, useEffect } from 'react'
import { useWebView } from '@/lib/webview-context'

interface PerformanceOptimizerProps {
  children: ReactNode
  disableAnimations?: boolean
  enableLogging?: boolean
}

export function PerformanceOptimizer({ 
  children, 
  disableAnimations = true,
  enableLogging = false 
}: PerformanceOptimizerProps) {
  const { isWebView, isAndroidWebView, isIOSWebView, isLoading } = useWebView()

  useEffect(() => {
    if (!isWebView || isLoading) return

    if (enableLogging) {
      console.log('[PerformanceOptimizer] WebView mode active', {
        android: isAndroidWebView,
        ios: isIOSWebView,
        disableAnimations,
      })
    }

    if (disableAnimations) {
      document.body.classList.add('webview-performance-mode')
      
      const style = document.createElement('style')
      style.id = 'performance-optimizer-styles'
      style.textContent = `
        .webview-performance-mode * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .webview-performance-mode [class*="blur"] {
          filter: none !important;
        }
        
        .webview-performance-mode [class*="backdrop-blur"] {
          backdrop-filter: none !important;
        }
      `
      document.head.appendChild(style)

      return () => {
        document.body.classList.remove('webview-performance-mode')
        const existingStyle = document.getElementById('performance-optimizer-styles')
        if (existingStyle) {
          existingStyle.remove()
        }
      }
    }
  }, [isWebView, isAndroidWebView, isIOSWebView, isLoading, disableAnimations, enableLogging])

  return <>{children}</>
}
