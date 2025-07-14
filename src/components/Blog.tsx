import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Understanding Your Pet\'s Blood Work Results',
      excerpt: 'Learn how to interpret common blood test values and what they mean for your pet\'s health.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Sarah Mitchell',
      date: 'March 15, 2025',
      readTime: '5 min read',
      category: 'Health Insights'
    },
    {
      title: 'The Complete Guide to Pet Genetic Testing',
      excerpt: 'Discover how genetic testing can help prevent health issues and optimize your pet\'s care.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Michael Chen',
      date: 'March 12, 2025',
      readTime: '8 min read',
      category: 'Genetics'
    },
    {
      title: 'Common Pet Allergies and How to Identify Them',
      excerpt: 'Signs, symptoms, and solutions for managing your pet\'s environmental and food allergies.',
      image: 'https://images.pexels.com/photos/6235657/pexels-photo-6235657.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Emily Rodriguez',
      date: 'March 10, 2025',
      readTime: '6 min read',
      category: 'Allergies'
    },
    {
      title: 'Senior Pet Care: What Every Owner Should Know',
      excerpt: 'Essential health monitoring and care tips for aging pets to ensure their golden years are comfortable.',
      image: 'https://images.pexels.com/photos/4498185/pexels-photo-4498185.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. James Wilson',
      date: 'March 8, 2025',
      readTime: '7 min read',
      category: 'Senior Care'
    },
    {
      title: 'Nutrition Testing: Optimizing Your Pet\'s Diet',
      excerpt: 'How nutritional analysis can help create the perfect diet plan for your pet\'s specific needs.',
      image: 'https://images.pexels.com/photos/4269985/pexels-photo-4269985.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Lisa Thompson',
      date: 'March 5, 2025',
      readTime: '4 min read',
      category: 'Nutrition'
    },
    {
      title: 'Preventive Care: The Key to Pet Longevity',
      excerpt: 'Why regular health screening is crucial for early detection and prevention of serious conditions.',
      image: 'https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Robert Kim',
      date: 'March 3, 2025',
      readTime: '6 min read',
      category: 'Prevention'
    }
  ];

  return (
    <section className="blog-section py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="blog-title text-4xl font-bold text-brand-black mb-4 opacity-0">
            <span className="font-bungee text-brand-yellow">Pet Health</span> Insights & Tips
          </h2>
          <p className="blog-subtitle text-xl text-gray-600 max-w-2xl mx-auto opacity-0">
            Stay informed with the latest research, tips, and insights from our veterinary experts 
            to keep your pet healthy and happy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="blog-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 opacity-0 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-brand-black mb-3 line-clamp-2 group-hover:text-brand-yellow transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <button className="flex items-center text-brand-yellow hover:text-yellow-600 transition-colors duration-300 text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="blog-cta bg-brand-black text-brand-yellow px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 opacity-0">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;