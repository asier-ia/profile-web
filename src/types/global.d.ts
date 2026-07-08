interface UmamiEvent {
  track: (event: string, data?: Record<string, unknown>) => void
}

interface Window {
  umami?: UmamiEvent
}
