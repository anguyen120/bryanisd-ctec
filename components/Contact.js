export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0"
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?q=Bryan%20ISD%20CTE%20Center&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            frameBorder={0}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-mono font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                6753 Mumford Rd
                Bryan, TX 77807
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-mono font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:9792091000" className="text-blue-500 leading-relaxed">979-209-1000</a>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h1 className="text-gray-900 text-lg mb-1 font-medium font-mono">
            Contact Us
          </h1>
          <p className="leading-relaxed mb-5 text-gray-600">
            Questions? Comments? We're here to help!
          </p>
          <div className="relative mb-4">
          <label htmlFor="name" class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" class="label">
              <span class="label-text">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="py-2 btn btn-primary">
            Submit
          </button>
          <a href="#" className="text-xs text-gray-500 mt-3">
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
}
