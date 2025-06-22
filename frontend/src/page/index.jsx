import React from 'react'
import Nav from '../components/Nav'
import { NavLink } from 'react-router-dom'
import mentor from '../assets/mentor.png'
import TopMentors from '../components/TopMentors'

function Home() {
    return (
        <>
            <Nav />
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative bg-green-100 py-16 px-6 md:py-24">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                        {/* Text Content */}
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight">
                                <span className="text-5xl md:text-7xl text-green-900">Elevate Hub:</span>
                                <br />Your journey, our guidance
                            </h1>
                            <p className="mt-6 text-lg md:text-2xl text-green-700">
                                Every great achiever was inspired by a great mentor. Find yours today!
                            </p>
                            <div className="mt-8">
                                <NavLink to="/mentors">
                                    <button className="px-8 py-3 text-white text-lg font-medium bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
                                        Match with a Mentor
                                    </button>
                                </NavLink>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                            <div className="relative">
                                <img
                                    className="w-full max-w-lg rounded-lg shadow-lg"
                                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    alt="Mentorship Hub"
                                />
                                {/* Decorative Elements */}
                                <div className="absolute inset-0 bg-green-800 bg-opacity-10 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ABout SEction */}
                <section className="bg-[#F9F9F9]">
                    <div className="px-6 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24">
                        <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row sm:mx-auto">
                            <div className="relative lg:w-1/2">
                                <img
                                    src={mentor}  // Update with your own image
                                    alt="ElevateHub Mentoring"
                                    className="object-cover w-full lg:absolute h-80 lg:h-full"
                                />
                                <svg
                                    className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                                    viewBox="0 0 20 104"
                                    fill="currentColor"
                                >
                                    <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                                </svg>
                            </div>
                            <div className="p-12 bg-[#F1F1F1] lg:p-16 lg:pl-14 lg:w-1/2 rounded-lg shadow-lg">
                                <h5 className="mb-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
                                    Elevate Your Career with ElevateHub
                                </h5>
                                <p className="mb-6 text-lg text-gray-600">
                                    <span className="font-semibold text-gray-900">ElevateHub</span> is the ultimate platform designed to connect you with experienced mentors who can help you unlock your potential. Whether you're seeking career advice, skill development, or personal growth, ElevateHub is here to guide you every step of the way.
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 mb-4 sm:mb-0 font-medium tracking-wide text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300" disabled
                                    >
                                        Join ElevateHub
                                    </button>
                                    <a
                                        href="/learn-more"
                                        aria-label="Learn more about ElevateHub"
                                        className="inline-flex items-center justify-center font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                                    >
                                        Discover More
                                        <svg
                                            className="inline-block w-4 h-4 ml-2"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414 8 8 0 0 1 2.448 2.447l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181a8 8 0 0 1-2.448-2.447zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* feature section */}
                <section className="bg-[#f8f9fa] px-4 py-8">
                    <div className="max-w-screen-xl mx-auto px-6 lg:px-16 py-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Unlock Your Growth Journey with ElevateHub
                            </h2>
                            <p className="text-lg text-gray-600">
                                ElevateHub is designed to connect you with the right mentors, guiding you to success. Whether it's enhancing your skills or reaching career goals, we’re here to help you thrive.
                            </p>
                        </div>

                        <div className="grid gap-8 row-gap-10 md:grid-cols-2 lg:grid-cols-3">
                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Expert Career Guidance</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    Gain career insights and advice from seasoned mentors. Receive support for resume building, job interviews, and navigating your professional growth.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Personalized Learning Paths</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    Our mentors design personalized learning plans that cater to your unique goals, helping you stay focused and motivated throughout your journey.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Affordable and Flexible</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    ElevateHub ensures that mentorship is accessible to all. Choose flexible and affordable mentoring sessions that fit your budget and schedule.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Build Valuable Networks</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    Mentorship opens doors to valuable networking opportunities. Build lasting relationships with mentors and professionals in your field.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Continuous Progress Tracking</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    Monitor your progress and achievements with the help of our built-in tools, which make goal-setting and tracking easy and motivating.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>

                            <div className="max-w-md text-center bg-white p-8 rounded-lg shadow-xl transition-transform transform hover:scale-105">
                                <h6 className="text-xl font-semibold text-gray-900 mb-3">Global Mentorship Opportunities</h6>
                                <p className="text-sm text-gray-700 mb-4">
                                    With ElevateHub, you can connect with mentors from across the globe. Gain diverse perspectives and expand your horizons with international opportunities.
                                </p>
                                <a
                                    href="/"
                                    className="text-teal-600 hover:text-teal-700 font-semibold transition-colors duration-200"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>





                {/* How It Works Section */}
                <section className="px-6 py-10 bg-[#f3f4f6]">
                    <div className="container mx-auto text-center max-w-screen-xl">
                        <div className="mb-12">
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                Start Your Mentorship Journey with ElevateHub
                            </h2>
                            <p className="mt-4 text-lg text-gray-700">
                                Join ElevateHub today and connect with mentors who can guide you towards your goals. Follow our easy steps to start achieving more with personalized mentorship.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="relative">
                                <img
                                    src={mentor} // Use your preferred image here
                                    alt="Mentorship Journey"
                                    className="rounded-lg shadow-lg h-full w-full object-cover"
                                />
                            </div>
                            <div>
                                <ul className="space-y-8">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-teal-500 rounded-full">
                                            1
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-semibold text-gray-800">Create Your Profile</h3>
                                            <p className="text-gray-600">
                                                Start your ElevateHub journey by creating a personalized profile. Share your goals, interests, and areas for growth to help us match you with the right mentor.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-blue-500 rounded-full">
                                            2
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-semibold text-gray-800">Browse Mentor Profiles</h3>
                                            <p className="text-gray-600">
                                                Explore a wide variety of mentors from diverse fields. Use filters to find experts with the skills and experience that match your goals.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-green-500 rounded-full">
                                            3
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-semibold text-gray-800">Select Your Ideal Mentor</h3>
                                            <p className="text-gray-600">
                                                Review mentor profiles, read testimonials, and choose someone who aligns with your personal or professional growth journey.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-orange-500 rounded-full">
                                            4
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-semibold text-gray-800">Schedule Your First Session</h3>
                                            <p className="text-gray-600">
                                                Find a time that works for you and your mentor. Schedule your first session and kickstart your growth with expert guidance.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-yellow-500 rounded-full">
                                            5
                                        </div>
                                        <div className="ml-6">
                                            <h3 className="text-xl font-semibold text-gray-800">Achieve Milestones Together</h3>
                                            <p className="text-gray-600">
                                                Work closely with your mentor to develop key skills, stay motivated, and hit your personal or professional milestones.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Mentor Categories Section */}
                <section className="px-8 py-20 bg-gray-100">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
                            {/* Left Section - Heading & Description */}
                            <div className="mb-8 md:w-1/3 md:mr-12">
                                <h2 className="text-4xl font-extrabold text-green-700">
                                    Find the Right Mentor for You
                                </h2>
                                <p className="mt-4 text-lg text-gray-700">
                                    Unlock growth opportunities with expert mentors. Whether you're
                                    aiming to boost your career, enhance your skills, or explore new
                                    fields, Elevate Hub has the perfect mentor for you.
                                </p>
                                <a

                                    className="inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg"
                                >
                                    Get Started
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="currentColor"
                                        viewBox="0 0 12 12"
                                    >
                                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Right Section - Categories Grid */}
                            <div className="grid flex-grow grid-cols-2 gap-6 md:grid-cols-3">
                                {[
                                    "Career Coaches",
                                    "Business Mentors",
                                    "Creative Mentors",
                                    "Tech Experts",
                                    "Marketing Gurus",
                                    "Finance Advisors",
                                    "Wellness Coaches",
                                    "Education Mentors",
                                    "Social Impact Leaders",
                                ].map((category, index) => (
                                    <a
                                        key={index}
                                        href="/"
                                        onClick={(e) => e.preventDefault()} // Prevents page reload
                                        className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800 
                       border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed"
                                    >
                                        {category}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Image Section with Overlay */}
                        <div className="relative mt-10">
                            <img
                                className="object-cover w-full h-56 sm:h-96 rounded-lg shadow-md"
                                src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                alt="Mentorship"
                            />
                            <div className="absolute inset-0 bg-green-800 bg-opacity-10 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </section>


                <section
                    style={{
                        background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
                        backgroundSize: '200% 200%',
                        animation: 'gradientAnimation 6s ease infinite',
                    }}
                >
                    <div className="container mx-auto">
                        <TopMentors/>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="px-10 py-24 text-center bg-green-50">
                    <h2 className="mb-10 text-5xl font-extrabold text-green-700">
                        Flexible & Affordable Plans
                    </h2>
                    <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
                        Choose a plan that fits your growth journey. Elevate Hub offers free access for learners, with premium options for advanced mentorship and exclusive resources.
                    </p>
                    <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-green-500 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg " disabled>
                        View Pricing Plans
                    </button>
                </section>


                {/* FAQ's */}

                {/* Call to Action */}
                <section className="px-8 py-20 text-center bg-green-100">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="mb-6 text-5xl font-extrabold text-green-600">
                            Unlock Your Potential with the Right Mentor!
                        </h2>
                        <p className="mb-10 text-lg text-gray-700 leading-relaxed">
                            Connect with experienced mentors who can guide you towards your goals.
                            Whether you're starting a new career, learning new skills, or growing your
                            network—your journey begins here.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button
                                className="px-8 py-4 text-lg font-semibold text-white transition rounded-lg shadow-md bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl"
                                disabled >
                                Get Started
                            </button>
                            <button
                                className="px-8 py-4 text-lg font-semibold text-green-600 transition bg-white border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-md"
                                disabled  >
                                Explore More
                            </button>
                        </div>
                    </div>
                </section>


                {/* Footer */}
                <footer className="px-8 py-12 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                    <div className="max-w-6xl mx-auto text-center space-y-6">
                        <h2 className="text-xl font-semibold">Stay Connected</h2>
                        <p className="text-sm text-gray-400">
                            Follow us on social media for updates, inspiration, and mentorship tips!
                        </p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="#"
                                className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.672v-3.622h3.148V8.413c0-3.118 1.902-4.815 4.678-4.815 1.33 0 2.475.099 2.807.143v3.256h-1.923c-1.51 0-1.802.718-1.802 1.771v2.32h3.6l-.468 3.622h-3.132V24h6.144c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.173-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.386 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.631 1.953 2.445 3.376 4.604 3.416-1.68 1.318-3.809 2.105-6.102 2.105-.394 0-.779-.023-1.17-.067 2.188 1.402 4.768 2.221 7.548 2.221 9.142 0 14.307-7.721 14.307-14.417 0-.219-.005-.436-.015-.653.983-.713 1.833-1.6 2.506-2.614z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full bg-gray-700 hover:bg-[#00DFBD] transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M22.23 0H1.77C.79 0 0 .774 0 1.725v20.55C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.275V1.725C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9.084h3.56v11.368zm-1.78-12.85c-1.14 0-2.06-.927-2.06-2.065a2.063 2.063 0 1 1 4.12 0c0 1.138-.92 2.065-2.06 2.065zm15.172 12.85h-3.56v-5.604c0-1.34-.026-3.062-1.865-3.062-1.865 0-2.152 1.454-2.152 2.959v5.707h-3.56V9.084h3.42v1.548h.05c.476-.9 1.636-1.85 3.366-1.85 3.6 0 4.268 2.368 4.268 5.452v6.218z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-xs text-gray-500">© 2024 MentorHub. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Home