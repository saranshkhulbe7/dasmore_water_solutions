export default function ContactForm() {
  const recipient = "myworkmyy@gmail.com";

  return (
    <div
      className="bg-black text-white py-24 2xl:pt-52 2xl:pb-16 px-6"
      id="contact"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center">Get In Touch</h2>
        <p className="mt-4 text-center text-2xl">
          Ready to build the next clean water innovation? Get started with us.
        </p>

        <form
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          action={`mailto:${recipient}`}
          method="POST"
          encType="text/plain"
        >
          {/* First name */}
          <input
            type="text"
            name="Name"
            placeholder="Name"
            required
            className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />

          {/* Company (full width) */}
          <input
            type="text"
            name="Company"
            placeholder="Company Name"
            className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />

          {/* Message (full width) */}
          <textarea
            name="Message"
            placeholder="Message"
            rows={6}
            className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none resize-none"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="mt-2 md:mt-0 bg-[#004AAD] hover:bg-blue-700 text-white text-lg font-medium rounded-lg py-3 px-6 w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
