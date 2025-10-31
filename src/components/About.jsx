import { SITE } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section fade-in">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">About Me</h2>
        <div className="card max-w-3xl text-lg leading-relaxed">
          <p className="text-neutral-300 whitespace-pre-line">
            {SITE.aboutLong}
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">Core Skills</h3>

          {/* Core Skills */}
          <ul className="flex flex-wrap gap-2 text-sm text-neutral-300 justify-start">
            <li className="pill">Python</li>
            <li className="pill">SQL</li>
            <li className="pill">Java</li>
            <li className="pill">Pandas</li>
            <li className="pill">NumPy</li>

            {/* Line break */}
            <div className="basis-full h-0" />

            <li className="pill">AI / Machine Learning (scikit-learn, TensorFlow, PyTorch)</li>
            <li className="pill">Data Visualization (Matplotlib, Plotly)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
