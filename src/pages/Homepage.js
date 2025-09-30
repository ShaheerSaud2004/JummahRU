import React from 'react';
import { Link } from 'react-router-dom';
import khateebsData from '../data/khateebs.json';
import weeklyContentData from '../data/weeklyContent.json';
import OptimizedImage from '../components/OptimizedImage';

const Homepage = () => {
  // Get the next upcoming khateeb
  const upcomingKhateeb = khateebsData.find(khateeb => khateeb.isUpcoming);
  
  // Get recent weekly content (last 2 items)
  const recentContent = weeklyContentData.slice(-2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rutgers-red via-rutgers-light-red to-rutgers-dark-red text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-10">
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white/20">
                <img 
                  src={process.env.PUBLIC_URL + "/logo.jpg"} 
                  alt="Rutgers Jumu'ah Logo" 
                  className="w-28 h-28 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-28 h-28 bg-rutgers-red rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-white font-bold text-4xl">J</span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
                JUMU'AH
              </h1>
              <p className="text-2xl md:text-3xl font-light opacity-95 mb-2">at Rutgers</p>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>
            
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
              Stories from your Rutgers Jumu'ah Community. Join us every Friday at 1:20 pm at the Cook Student Center MPR!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/khateebs" className="btn-primary">
                View Khateebs
              </Link>
              <Link to="/community" className="btn-secondary">
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </section>

        {/* Weekly Khutbah Card */}
        {upcomingKhateeb && (
          <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-rutgers-red mb-4">This Week's Khutbah</h2>
                <p className="text-xl text-gray-600">Join us for Jumu'ah prayer and khutbah</p>
                <div className="w-20 h-1 bg-rutgers-red mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="max-w-5xl mx-auto">
                <div className="card-rutgers p-8 md:p-12 shadow-2xl border-4 border-rutgers-red/20">
                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    {/* Khateeb Photo */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-rutgers-red shadow-xl">
                        <OptimizedImage
                          src={upcomingKhateeb.image}
                          alt={upcomingKhateeb.name}
                          className="w-full h-full object-cover"
                          size={160}
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  
                  {/* Khateeb Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-serif font-bold text-rutgers-red mb-2">
                      {upcomingKhateeb.name}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">{upcomingKhateeb.title}</p>
                    <p className="text-gray-700 mb-6">{upcomingKhateeb.bio}</p>
                    
                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-rutgers-red rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-600">Date</p>
                        </div>
                        <p className="font-bold text-rutgers-red text-lg">
                          {new Date(upcomingKhateeb.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-rutgers-red rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-600">Khutbah Time</p>
                        </div>
                        <p className="font-bold text-rutgers-red text-lg">1:20 PM</p>
                      </div>
                      <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 bg-rutgers-red rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <p className="text-sm font-medium text-gray-600">Location</p>
                        </div>
                        <p className="font-bold text-rutgers-red text-lg">Cook Student Center MPR</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 italic">
                      Surah Al-Kahf Circle at 12:50 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Weekly Updates Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rutgers-red mb-4">Weekly Updates</h2>
            <p className="text-xl text-gray-600">Qur'an ayat and Du'as from our community</p>
            <div className="w-20 h-1 bg-rutgers-red mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {recentContent.map((content) => (
              <div key={content.id} className="card-rutgers p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="mb-6">
                    <span className="bg-rutgers-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {content.type === 'ayah' ? 'Qur\'an Ayah' : 'Du\'a'}
                    </span>
                  </div>
                  <div className="text-arabic text-rutgers-red mb-6 leading-relaxed">
                    {content.arabic}
                  </div>
                  {content.transliteration && (
                    <p className="text-sm text-gray-600 italic mb-4 leading-relaxed">
                      {content.transliteration}
                    </p>
                  )}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {content.translation}
                  </p>
                  {content.reference && (
                    <p className="text-sm text-rutgers-red font-semibold bg-red-50 px-3 py-1 rounded-full inline-block">
                      {content.reference}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/updates" className="btn-primary">
              View All Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-rutgers-red mb-4">Community</h2>
            <p className="text-xl text-gray-600">Get involved and stay connected</p>
            <div className="w-20 h-1 bg-rutgers-red mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-rutgers p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-rutgers-red to-rutgers-dark-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-rutgers-red mb-3">Join Our Team</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Apply for leadership positions and get involved in organizing events</p>
              <Link to="/community" className="inline-flex items-center text-rutgers-red font-semibold hover:text-rutgers-dark-red transition-colors duration-200">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-rutgers p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-rutgers-red to-rutgers-dark-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-rutgers-red mb-3">Request Forms</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Submit announcements, feedback, or request materials</p>
              <Link to="/community" className="inline-flex items-center text-rutgers-red font-semibold hover:text-rutgers-dark-red transition-colors duration-200">
                View Forms 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="card-rutgers p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-rutgers-red to-rutgers-dark-red rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-bold text-rutgers-red mb-3">Stay Connected</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Follow us on social media and join our email list</p>
              <Link to="/community" className="inline-flex items-center text-rutgers-red font-semibold hover:text-rutgers-dark-red transition-colors duration-200">
                Connect 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
