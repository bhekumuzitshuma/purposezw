import React from "react";

const AboutSection = () => {
  return (
    <div>
      <section className="bg-teal-50">
        <div className="gap-16 max-w-5xl mx-auto items-center py-8 px-6 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-800 sm:text-lg ">
            <h2 className="mb-4 md:text-left text-center text-4xl tracking-tight font-extrabold text-gray-900">
              About Our Company
            </h2>
            <p className="mb-4 italic md:text-left text-center text-sm">
              Registered by the Reserve Bnk of Zimbabwe as Purpose Asset
              Management (Private) Ltd (Licence Number 000012)
            </p>
            <p className="md:text-left text-center">
              We work closely with Vunani Fund Managers and Vunani Private
              Clients who offer a range of multi-asset, specialist equity,
              property and bond funds in RSA; to bring the full range of
              products to Zimbabwe. Currently registered by the Securities and
              Exchange Commission of Zimbabwe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/abt3.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/abt1.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
