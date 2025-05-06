import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 rounded-lg shadow-lg mb-12">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unlock Your Business Potential</h1>
          <p className="text-lg md:text-xl mb-8">We provide expert consulting in project management, business strategy, and risk mitigation to drive your success. Our dedicated team works closely with you to understand your unique challenges and deliver tailored solutions that yield measurable results. Partner with us to navigate complexities and achieve sustainable growth.</p>
          <a href="#contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded hover:bg-gray-100 transition duration-300">Get Started</a>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Comprehensive Services</h2>
          <div className="space-y-12">
            {/* Project Management */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                {/* Placeholder for an image or icon */}
                <div className="bg-blue-100 h-40 w-full rounded flex items-center justify-center text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Project Management Excellence</h3>
                <p className="text-gray-700 mb-4">Navigate the complexities of project execution with our expert guidance. We offer end-to-end project management services, from initiation and planning to execution, monitoring, control, and closure. Our approach integrates proven methodologies like PMP, PRINCE2, and Agile, tailored to your specific industry and project requirements. We focus on clear communication, stakeholder management, risk mitigation, and quality assurance to ensure your projects are delivered successfully, meeting all objectives within scope, time, and budget constraints. Let us help you turn ambitious goals into tangible results.</p>
              </div>
            </div>

            {/* Business Consulting */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:ml-8">
                {/* Placeholder for an image or icon */}
                <div className="bg-green-100 h-40 w-full rounded flex items-center justify-center text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Strategic Business Consulting</h3>
                <p className="text-gray-700 mb-4">Gain a competitive advantage with our strategic business consulting services. We partner with you to analyze your current operations, identify areas for improvement, and develop actionable strategies for sustainable growth. Our expertise spans market analysis, operational efficiency, organizational design, change management, and digital transformation. We provide data-driven insights and practical recommendations to help you optimize performance, enhance customer value, and achieve long-term strategic objectives in a dynamic business environment.</p>
              </div>
            </div>

            {/* Risk Management */}
            <div className="bg-white p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
                {/* Placeholder for an image or icon */}
                <div className="bg-red-100 h-40 w-full rounded flex items-center justify-center text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6.364-6.364l-1.414 1.414M21 12h-2m-1.636-6.364l-1.414-1.414M12 3v2m6.364 6.364l1.414-1.414M3 12H1m1.636 6.364l1.414 1.414M12 21v-2m-6.364-6.364l-1.414 1.414" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9a3 3 0 100 6 3 3 0 000-6z" /></svg>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Risk Management</h3>
                <p className="text-gray-700 mb-4">Protect your business and ensure continuity with our robust risk management frameworks. We help you proactively identify, assess, prioritize, and mitigate risks across your organization, including financial, operational, strategic, and compliance risks. Our services include developing risk management policies, implementing control measures, conducting risk assessments, and establishing monitoring processes. By fostering a strong risk-aware culture, we empower you to make informed decisions, safeguard your assets, and build resilience against uncertainty.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mock Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 mb-4">
                "The project management expertise provided was exceptional. Our complex initiative was delivered ahead of schedule and under budget, thanks to their meticulous planning and execution. Communication was transparent and consistent throughout."
              </blockquote>
              <p className="font-semibold text-gray-800">- Alex Johnson, CEO, Tech Innovators Inc.</p>
            </div>
            {/* Mock Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 mb-4">
                "Their business consultants identified key inefficiencies in our workflow that we hadn't seen. Implementing their recommendations led to a significant increase in productivity and profitability within just six months. Highly recommended."
              </blockquote>
              <p className="font-semibold text-gray-800">- Maria Garcia, COO, Global Solutions Ltd.</p>
            </div>
            {/* Mock Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="italic text-gray-600 mb-4">
                "Navigating market risks was a major challenge for us. The comprehensive risk assessment and mitigation strategies developed by this firm gave us the confidence to expand internationally. Their team is knowledgeable and truly partners with you."
              </blockquote>
              <p className="font-semibold text-gray-800">- David Chen, Head of Strategy, Enterprise Dynamics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Info Placeholder */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-2"><span className="font-medium">Address:</span> [Placeholder Street Address], [Placeholder City], [Placeholder Country]</p>
              <p className="text-gray-700 mb-2"><span className="font-medium">Phone:</span> [Placeholder Phone Number]</p>
              <p className="text-gray-700 mb-4"><span className="font-medium">Email:</span> [Placeholder Email Address]</p>
              <p className="text-gray-700">We welcome inquiries and are ready to discuss how our consulting services can benefit your organization. Reach out to us via phone, email, or the contact form, and our team will respond promptly to schedule a consultation.</p>
              {/* Placeholder for a map? */}
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="your.email@example.com" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Inquiry Subject" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 w-full">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

