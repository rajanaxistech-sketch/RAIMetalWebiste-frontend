import { useState } from "react";
import Seo from "../components/Seo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

    if (formData.captcha.toUpperCase() !== captchaCode) {
      setResponseMsg("Invalid CAPTCHA. Please try again.");
      setCaptchaCode(generateCaptcha());
      return;
    }

    setLoading(true);
    setResponseMsg("");

    try {
      const payload = {
        ...formData,
        captchaCode: formData.captcha, 
        captcha: captchaCode,
      };

      console.log("Submitting:", payload);

      const res = await fetch("https://raimetalsapi.anaxistech.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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
    <div className="pt-[140px] bg-[#0b0b0b] text-white min-h-screen">
      <Seo
        title="Contact Rai Metals | Request Scrap Metal Quote"
        description="Contact Rai Metals for scrap metal sourcing, pricing, and global trading inquiries. Request a quote for ferrous and non-ferrous materials."
        keywords="contact Rai Metals, scrap metal quote, metal supplier inquiry, ferrous scrap pricing, non-ferrous scrap"
        robots="index, follow"
        canonicalPath="/contact"
        image="/uploads/Logo1.jpeg"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-14 border-t border-[#2a2a2a] pt-10">
          <p className="text-sm tracking-[0.2em] text-gray-400 uppercase">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
            Request a <span className="text-[#c9a34e]">Quote</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT PANEL */}
          <div className="space-y-8">
            <div className="border border-[#2a2a2a] p-6 rounded-xl bg-[#111]">
              <p className="text-[#c9a34e] text-sm mb-2">📍 ADDRESS</p>
              <p className="text-gray-300">
                5103 Ashcrest Ct, Tampa, Florida 33647
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-6 rounded-xl bg-[#111]">
              <p className="text-[#c9a34e] text-sm mb-2">📞 PHONE</p>
              <p className="text-gray-300">+1 980-229-1914</p>
            </div>

            <div className="border border-[#2a2a2a] p-6 rounded-xl bg-[#111]">
              <p className="text-[#c9a34e] text-sm mb-2">✉️ EMAIL</p>
              <p className="text-gray-300">amar@raimetals.net</p>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#111] border border-[#2a2a2a] rounded-xl p-8 grid gap-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />

              <input
                type="text"
                name="subject"
                placeholder="Company"
                value={formData.subject}
                onChange={handleChange}
                className="input"
              />

             <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData({ ...formData, phone })
                  }
                  inputClass="phone-input"
                  buttonClass="phone-button"
                  containerClass="w-full"
                />
            </div>

            <textarea
              name="message"
              placeholder="Estimated quantity & details..."
              value={formData.message}
              onChange={handleChange}
              rows={4} 
              required
              className="input"
            />

            {/* CAPTCHA */}
            <div className="flex items-center gap-4">
              <div className="px-6 py-3 rounded-lg bg-black border border-[#2a2a2a] tracking-[0.4em] text-[#c9a34e] font-bold">
                {captchaCode}
              </div>

              <button
                type="button"
                onClick={() => setCaptchaCode(generateCaptcha())}
                className="px-4 py-3 border border-[#2a2a2a] rounded-lg"
              >
                ↻
              </button>

              <input
                type="text"
                name="captcha"
                placeholder="Enter code"
                value={formData.captcha}
                onChange={handleChange}
                required
                className="input flex-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-[#c9a34e] text-black py-3 rounded-lg font-semibold"
            >
              {loading ? "Sending..." : "Send Inquiry →"}
            </button>

            {responseMsg && (
              <p className="text-sm text-green-400">{responseMsg}</p>
            )}
          </form>
        </div>
      </section>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          background: #0b0b0b;
          border: 1px solid #2a2a2a;
          padding: 12px 14px;
          border-radius: 8px;
          color: white;
          outline: none;
        }
        .input:focus {
          border-color: #c9a34e;
          box-shadow: 0 0 0 1px #c9a34e;
        }

        .submit-btn {
          width: 100%;
          background: #c9a34e;
          color: black;
          padding: 14px;
          border-radius: 10px;
          font-weight: 600;
        }

        .info-card {
          background: #111;
          border: 1px solid #2a2a2a;
          padding: 20px;
          border-radius: 16px;
        }

        .label {
          color: #c9a34e;
          font-size: 12px;
          margin-bottom: 6px;
        }

        .captcha-box {
          padding: 10px 16px;
          background: black;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          letter-spacing: 5px;
          color: #c9a34e;
          font-weight: bold;
        }

        .refresh-btn {
          padding: 10px 14px;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
        }

        .phone-input {
          width: 100% !important;
          background: #0b0b0b !important;
          border: 1px solid #2a2a2a !important;
          color: white !important;
          border-radius: 10px !important;
          height: 48px !important;
        }

        .phone-button {
          background: #0b0b0b !important;
          border: 1px solid #2a2a2a !important;
          border-right: none !important;
        }
      `}</style>
    </div>
  );
}

export default Contact;