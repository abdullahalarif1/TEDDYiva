const Banner = () => {
  return (
    <div
      className="hero hero-img  space-y-20 pb-10 sm:min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/KV1DxyW/8683985.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl">
          <h1 className="mb-5 font-mono text-2xl md:text-5xl font-bold">
            Make Memories Last.
          </h1>
          <p className="mb-5 font-thin">
            Preserve your toys and make your child-hood memories last.We know
            that your toys are important tp retain the same character and we can
            make sure it will come back tp you healthy and strong for you tp hug
            and love.
          </p>
          <button className="btn btn-outline btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
