import Header from "./Header";

export default function Hero() {
  return (
    <section className="bg-primary h-screen">
      <Header />
      <section className="text-primary-content mt-20">
        <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
          <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
            <h1 className="mb-8 text-2xl font-black tracking-tighter md:text-5xl font-mono">
              Empowering Today's Students for Tomorrow Today.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left">
              The CTE Program nurtures students while they explore the available
              career paths and offers customized learning opportunities to help
              them reach their goals.
            </p>
            <div className="flex flex-col justify-center lg:flex-row">
              <button className="btn btn-secondary rounded-btn text-secondary-content">
                Apply now
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2" />
        </div>
      </section>
    </section>
  );
}
