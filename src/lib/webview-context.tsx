"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface WebViewContextType {
  isWebView: boolean
  isAndroidWebView: boolean
  isIOSWebView: boolean
  isLoading: boolean
}

const WebViewContext = createContext<WebViewContextType>({
  isWebView: false,
  isAndroidWebView: false,
  isIOSWebView: false,
  isLoading: true,
})

export function useWebView() {
  return useContext(WebViewContext)
}

export function detectWebView() {
  if (typeof window === 'undefined') {
    return {
      isWebView: false,
      isAndroidWebView: false,
      isIOSWebView: false,
    }
  }

  const ua = navigator.userAgent.toLowerCase()
  const isAndroid = ua.indexOf('android') > -1
  const isIOS = /iphone|ipod|ipad/.test(ua)
  
  const isAndroidWebView = isAndroid && (
    ua.indexOf('wv') > -1 || 
    ua.indexOf('; wv)') > -1 ||
    /version\/\d+\.\d+\.\d+\.\d+ mobile/.test(ua)
  )
  
  const isIOSWebView = isIOS && (
    (window.navigator as any).standalone === true ||
    !window.matchMedia('(display-mode: browser)').matches
  )
  
  const isWebView = isAndroidWebView || isIOSWebView

  return {
    isWebView,
    isAndroidWebView,
    isIOSWebView,
  }
}

export function WebViewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WebViewContextType>({
    isWebView: false,
    isAndroidWebView: false,
    isIOSWebView: false,
    isLoading: true,
  })

  useEffect(() => {
    const detection = detectWebView()
    setState({
      ...detection,
      isLoading: false,
    })

    if (detection.isWebView) {
      console.log('[WebView] Detected:', {
        android: detection.isAndroidWebView,
        ios: detection.isIOSWebView,
      })
    }
  }, [])

  return (
    <WebViewContext.Provider value={state}>
      {children}
    </WebViewContext.Provider>
  )
}
