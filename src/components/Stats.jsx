 const Stats = () => {
  return (
    <div id="stats" className="stats bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            {/* Stat Item */}
            <div className="stat-item">
                <p className="text-4xl font-bold text-blue-600">500+</p>
                <p className="text-gray-600">Completed Projects</p>
            </div>
            {/* Repeat for other stats */}
            <div className="stat-item">
                <p className="text-4xl font-bold text-blue-600">300+</p>
                <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="stat-item">
                <p className="text-4xl font-bold text-blue-600">150+</p>
                <p className="text-gray-600">Expert Writers</p>
            </div>
            <div className="stat-item">
                <p className="text-4xl font-bold text-blue-600">24/7</p>
                <p className="text-gray-600">Customer Support</p>
            </div>
        </div>
    </div>
  )
}

export default Stats