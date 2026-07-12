const reasons = [
  'Built for simple collaboration',
  'Designed with accessibility in mind',
  'Flexible for future growth'
]

function WhyChooseUs() {
  return (
    <section id="about" style={{ padding: '4rem 2rem', backgroundColor: '#f8fafc' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ color: '#0f172a', marginBottom: '1rem' }}>Why choose CureScane?</h2>
        <ul style={{ color: '#475569', lineHeight: 1.8 }}>
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default WhyChooseUs
