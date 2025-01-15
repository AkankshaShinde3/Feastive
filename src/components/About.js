// AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 bg-gray-50">
      <header className="text-4xl text-center mb-4 text-orange-500">About Us</header>
      <section className="max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <strong>Feastive</strong>, your one-stop solution for satisfying cravings with just a few clicks! 
          We are committed to connecting you with the best local restaurants, ensuring that every meal you order 
          is a delicious experience delivered to your door.
        </p>

        <h2 className="text-2xl mt-6 text-orange-500">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-6">
          At Feastive, we aim to make food delivery simple, fast, and reliable. Whether you’re looking for a quick 
          snack, a full meal, or something special for a party, our app offers a wide range of options tailored to 
          suit your taste and preferences.
        </p>

        <h2 className="text-2xl mt-6 text-orange-500">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fast and reliable delivery service.</li>
          <li>A diverse menu from top-rated restaurants.</li>
          <li>Secure payment options for hassle-free transactions.</li>
          <li>Support for local and sustainable food businesses.</li>
        </ul>

        <h2 className="text-2xl mt-6 text-orange-500">Our Values</h2>
        <p className="text-lg leading-relaxed mb-6">
          We believe in bringing communities together through food. By partnering with local eateries and 
          ensuring quality at every step, we strive to build trust, convenience, and a shared love for great cuisine.
        </p>
      </section>

      {/* <footer className="mt-8 text-center">
        <p>
          Got questions? Contact us at <a href="mailto:support@feastive.com" className="text-blue-500 hover:underline">support@feastive.com</a>.
        </p>
        <p className="text-sm text-gray-600">© 2025 Feastive. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default AboutUs;
