import './App.css';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-left">
        <h1 className="text-3xl font-light text-gray-400">
          This is <span className="font-bold text-orange-500">IDEA YARD</span>
          <br />
          by <span className="font-bold text-black">Sukhdev Thukral.</span>
        </h1>
        {/* Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 shadow-md bg-white">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.7)]"></span>
          <span className="text-sm font-medium text-gray-700">LIVE</span>
        </div>        
      </div>
    </section>
  );
}

export default Hero;
