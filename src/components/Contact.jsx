import React from "react";
import { toast } from "react-toastify";
import {motion} from "framer-motion"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0c3712dc-7627-457f-9f43-ca3a943e5ec9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      event.target.reset();
      toast.success("Form Submitted Successfully");
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <motion.div initial={{opacity: 0, x:-200}} transition={{duration: 1}} whileInView={{opacity: 1, x:0}} viewport={{once: true}}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        class="max-w-md mx-auto mt-5 p-6 bg-white rounded-lg shadow-lg space-y-4"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          {result? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
