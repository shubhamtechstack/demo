import React from "react";

const CompanyInfo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Company Information</h1>

        <div className="space-y-6">

          <section>
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="text-gray-700 mt-2">
              We are a leading technology company focused on delivering high-quality
              digital solutions. Our mission is to innovate and create products that
              improve everyday life. With a team of talented engineers, designers, and
              creators, we aim to push boundaries and exceed expectations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p className="text-gray-700 mt-2">
              To become a global leader in technology by building impactful,
              user-friendly, and sustainable digital products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-700 mt-2">
              To empower businesses and individuals through innovation, modern
              technology, and exceptional customer experiences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Core Values</h2>
            <ul className="list-disc ml-6 text-gray-700 mt-2">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Customer Satisfaction</li>
              <li>Team Collaboration</li>
              <li>Quality & Excellence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p className="text-gray-700 mt-2">
              Email: support@yourcompany.com <br />
              Phone: +1 234 567 890 <br />
              Address: 123 Tech Street, Innovation City, USA
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
