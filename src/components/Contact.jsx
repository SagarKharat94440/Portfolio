import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white flex items-center justify-center">
      <div className="max-w-md text-center">
        <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline-block mb-6">
          Contact
        </h2>
        <p className="flex items-center justify-center text-lg mb-4">
          <Phone className="mr-2 text-cyan-500" /> +91 9325833093
        </p>
        <p className="flex items-center justify-center text-lg">
          <Mail className="mr-2 text-cyan-500" /> sagarakharat2003@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
