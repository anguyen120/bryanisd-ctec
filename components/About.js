export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="bg-gradient-to-tr from-blue-500 to-blue-500 rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="mix-blend-overlay object-cover object-center h-full w-full"
              src="/ptti-edu-k9Dc5zT1Gq0-unsplash.jpg"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-full sm:pl-8 sm:pb-8 sm:mt-0 text-center sm:text-left">
              <h1 className="sm:text-3xl text-2xl font-medium text-left font-mono text-gray-900 mb-4">
                About Us
              </h1>
              <p className="leading-relaxed text-lg mb-4 mt-4">
                Connecting Firsthand Work Experience To Real-World Education:
                The more you understand, the more you have to be able to do.
                Yep. That’s our compass. Our educational compass—it’s North,
                South, East, West—everything we see and do, we tie back to that.
                And then that makes it more exciting for them. As a result of
                our hands-on approach to education, students have a direct
                connection between what they learn in school and how it will
                ultimately impact their futures…and the future of the global
                marketplace.
              </p>
              <a href="#" className="text-blue-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
