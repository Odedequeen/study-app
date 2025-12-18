import './Debug.css'

export default function Debug() {
  const now = new Date().toLocaleTimeString()
  return (
    <div className="debug-banner" title="Debug banner">
      App mounted — {now}
    </div>
  )
}
