
import { Brain, BarChart3, Target, Lightbulb, Database, TrendingUp } from 'lucide-react';

const TopicsSection = () => {
  const topics = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics Fundamentals",
      description: "Understanding the core principles of data analysis and interpretation"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Exploring artificial intelligence applications and machine learning algorithms"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Management",
      description: "Best practices for data collection, storage, and processing"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Business Applications",
      description: "Real-world implementation of data analytics in business decisions"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Future Trends",
      description: "Emerging technologies and future opportunities in data science"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Career Insights",
      description: "Pathways and opportunities in data analytics and AI careers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the world of data analytics and artificial intelligence with comprehensive coverage of key topics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-blue-600 mb-4">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
              <p className="text-gray-600 leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
