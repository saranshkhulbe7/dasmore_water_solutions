// export default function ContactForm() {
//   const recipient = "myworkmyy@gmail.com";

//   return (
//     <div
//       className="bg-black text-white py-24 2xl:pt-52 2xl:pb-16 px-6"
//       id="contact"
//     >
//       <div className="max-w-5xl mx-auto">
//         <h2 className="text-5xl font-bold text-center">Get In Touch</h2>
//         <p className="mt-4 text-center text-2xl">
//           Ready to build the next clean water innovation? Get started with us.
//         </p>

//         <form
//           className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
//           action={`mailto:${recipient}`}
//           method="POST"
//           encType="text/plain"
//         >
//           {/* First name */}
//           <input
//             type="text"
//             name="Name"
//             placeholder="Name"
//             required
//             className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
//           />

//           {/* Email */}
//           <input
//             type="email"
//             name="Email"
//             placeholder="Email"
//             required
//             className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
//           />

//           {/* Company (full width) */}
//           <input
//             type="text"
//             name="Company"
//             placeholder="Company Name"
//             className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
//           />

//           {/* Message (full width) */}
//           <textarea
//             name="Message"
//             placeholder="Message"
//             rows={6}
//             className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none resize-none"
//           />

//           {/* Submit button */}
//           <button
//             type="submit"
//             className="mt-2 md:mt-0 bg-[#004AAD] hover:bg-blue-700 text-white text-lg font-medium rounded-lg py-3 px-6 w-fit"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzC2di7wZYk3JzQhjqyhFcYFBOg_lU2K7SlzE2LP5w8T2xN_-lKAxbryBTcsZhfLkaK/exec"; // your Web App URL

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Capture the form element and its data synchronously
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const payload = {
      Name: formData.get("Name"),
      Email: formData.get("Email"),
      Company: formData.get("Company"),
      Message: formData.get("Message"),
    };

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      setStatus("success");
      formEl.reset(); // use the captured reference, not e.currentTarget
    } catch (err) {
      console.error("Submission error", err);
      setStatus("error");
    }
  };

  return (
    <div className="bg-black text-white py-24 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-center">Get In Touch</h2>
        <p className="mt-4 text-2xl text-center">
          Ready to build the next clean water innovation? Get started with us.
        </p>

        <form
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleSubmit}
        >
          <input
            name="Name"
            type="text"
            placeholder="Name"
            required
            className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />
          <input
            name="Email"
            type="email"
            placeholder="Email"
            required
            className="col-span-1 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />
          <input
            name="Company"
            type="text"
            placeholder="Company Name"
            className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none"
          />
          <textarea
            name="Message"
            placeholder="Message"
            rows={6}
            className="col-span-1 md:col-span-2 w-full bg-white/10 text-gray-300 placeholder-white/45 placeholder:text-xl rounded-lg py-4 px-5 focus:outline-none resize-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 md:mt-0 bg-[#004AAD] hover:bg-blue-700 text-white text-lg font-medium rounded-lg py-3 px-6 w-fit"
          >
            {status === "sending"
              ? "Sending…"
              : status === "success"
              ? "Sent ✓"
              : status === "error"
              ? "Try Again"
              : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-400 text-center">
            Thanks! We got your message.
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 text-center">
            Oops, something went wrong.
          </p>
        )}
      </div>
    </div>
  );
}
