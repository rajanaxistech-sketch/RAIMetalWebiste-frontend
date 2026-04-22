import { useState } from "react";

function Contact() {
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  const [captchaCode, setCaptchaCode] = useState(generateCaptcha());

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
    captcha: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CAPTCHA validation
    if (formData.captcha.toUpperCase() !== captchaCode) {
      setResponseMsg("Invalid CAPTCHA. Please try again.");
      setCaptchaCode(generateCaptcha());
      return;
    }

    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://your-api-endpoint.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
          captcha: "",
        });
        setCaptchaCode(generateCaptcha());
      } else {
        setResponseMsg(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResponseMsg("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="pt-[76px] md:pt-[114px]">
      <section className="page-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* LEFT SIDE */}
          <div>
            <span className="section-tag">Contact</span>
            <h1 className="section-title">
              Request a <span className="text-gold">Quote</span>
            </h1>

            <div className="mt-8 space-y-6 text-gray-400">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-black border border-gold/30 flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-white font-semibold">Our Address</p>
                  <p>5103 Ashcrest Ct, Tampa, Florida 33647</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-black border border-gold/30 flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p>+1 980-229-1914</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-black border border-gold/30 flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p>ammar@raimetals.net</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="metal-panel grid gap-5 p-8 md:grid-cols-2 md:p-10 rounded-2xl border border-white/10 bg-black/60 backdrop-blur"
          >
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
              className="col-span-2 bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
            />

            {/* CAPTCHA */}
            <div className="col-span-2 flex items-center gap-4">
              {/* CAPTCHA DISPLAY */}
              <div className="relative px-6 py-3 rounded-lg bg-black border border-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[size:10px_10px]" />
                <span className="relative text-gold text-lg tracking-[0.3em] font-bold select-none skew-x-6">
                  {captchaCode}
                </span>
              </div>

              {/* Refresh */}
              <button
                type="button"
                onClick={() => setCaptchaCode(generateCaptcha())}
                className="px-3 py-3 bg-black border border-white/10 rounded-lg hover:border-gold transition"
              >
                🔄
              </button>

              {/* Input */}
              <input
                type="text"
                name="captcha"
                placeholder="Enter CAPTCHA"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="flex-1 bg-black border border-white/10 focus:border-gold focus:ring-1 focus:ring-gold text-white placeholder-gray-500 px-4 py-3 rounded-lg outline-none transition"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="col-span-2 mt-2 flex items-center justify-center gap-2 bg-gold text-black py-3 font-semibold rounded-lg hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Response */}
            {responseMsg && (
              <p className="col-span-2 text-sm text-green-400">
                {responseMsg}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;