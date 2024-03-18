import { FaClock, FaRobot, FaChartLine, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">TimeMind</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center fadeInUp">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Effortlessly Track and Optimize Your Time</h2>
          <p className="text-xl text-gray-600 mb-8">TimeMind automatically tracks how you spend your time and provides an AI assistant to help you be more productive.</p>
          <a href="#" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wide hover:bg-blue-600">
            Get Started
          </a>
        </section>

        <section className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mr-6">
                <FaClock size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Automatic Time Tracking</h3>
                <p className="text-gray-600">TimeMind runs in the background and intelligently tracks time spent on tasks, projects, and apps - no manual entry required.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mr-6">
                <FaRobot size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600">Your personal AI assistant analyzes your time data and provides actionable recommendations to optimize your productivity.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mr-6">
                <FaChartLine size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Detailed Reports</h3>
                <p className="text-gray-600">Gain insights into how you spend your time with detailed reports and visualizations. Identify trends and areas for improvement.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md flex items-center">
              <div className="bg-blue-500 text-white p-4 rounded-full mr-6">
                <FaCheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Personalized Recommendations</h3>
                <p className="text-gray-600">Your AI assistant suggests tasks that could be automated or outsourced based on your unique time usage patterns.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Take Control of Your Time Today</h2>
          <p className="text-xl text-gray-600 mb-8">Sign up now and start optimizing your productivity with TimeMind's AI-powered time tracking and insights.</p>
          <a href="#" className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold uppercase tracking-wide hover:bg-blue-600">
            Get Started for Free
          </a>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-gray-600">
          <p>&copy; 2023 TimeMind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
