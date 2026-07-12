const features = [
  {
    title: 'Fast onboarding',
    description: 'Get started quickly with a clean experience designed for everyday use.'
  },
  {
    title: 'Secure access',
    description: 'Protect patient information with reliable and carefully managed access controls.'
  },
  {
    title: 'Actionable insights',
    description: 'Track progress and make informed decisions with intuitive dashboards.'
  }
]

function Features() {
  return (
    <section id="features" style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0f172a' }}>Key Features</h2>
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {features.map((feature) => (
            <article key={feature.title} style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#f8fafc', boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)' }}>
              <h3 style={{ marginTop: 0, color: '#1d4ed8' }}>{feature.title}</h3>
              <p style={{ color: '#475569', marginBottom: 0 }}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
