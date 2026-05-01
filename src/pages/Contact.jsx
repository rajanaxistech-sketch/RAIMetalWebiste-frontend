import { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.captcha.toUpperCase() !== captchaCode) {
      setResponseMsg("Invalid CAPTCHA");
      setCaptchaCode(generateCaptcha());
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://raimetalsapi.anaxistech.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
        setResponseMsg("Something went wrong.");
      }
    } catch {
      setResponseMsg("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-[#111] border border-[#2a2a2a] rounded-2xl p-8 shadow-lg">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            Request a <span className="text-[#c9a34e]">Quote</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Fill the form and we’ll get back to you
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="input"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="input"
              required
            />
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Company"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="input"
            />

            {/* PHONE INPUT FIXED */}
            <div className="phone-wrapper">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(phone) =>
                  setFormData({ ...formData, phone })
                }
                containerClass="phone-container"
              />
            </div>
          </div>

          {/* MESSAGE */}
          <textarea
            rows={5}
            placeholder="Estimated quantity & details..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="input"
            required
          />

          {/* CAPTCHA */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="captcha-box">
                {captchaCode}
              </div>

              <button
                type="button"
                onClick={() => setCaptchaCode(generateCaptcha())}
                className="refresh-btn"
              >
                ↻
              </button>
            </div>

            <input
              type="text"
              placeholder="Enter code"
              value={formData.captcha}
              onChange={(e) =>
                setFormData({ ...formData, captcha: e.target.value })
              }
              className="input flex-1"
              required
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >
            {loading ? "Sending..." : "Send Inquiry →"}
          </button>

          {/* RESPONSE */}
          {responseMsg && (
            <p className="text-center text-sm text-green-400">
              {responseMsg}
            </p>
          )}
        </form>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          background: #0b0b0b;
          border: 1px solid #2a2a2a;
          padding: 12px 14px;
          border-radius: 10px;
          color: white;
          outline: none;
          transition: 0.2s;
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
          transition: 0.3s;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }

        .captcha-box {
          padding: 10px 16px;
          background: black;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          letter-spacing: 6px;
          color: #c9a34e;
          font-weight: bold;
        }

        .refresh-btn {
          padding: 10px 14px;
          border: 1px solid #2a2a2a;
          border-radius: 10px;
        }

        /* PHONE INPUT FIX */
        .phone-container {
          width: 100%;
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
          border-radius: 10px 0 0 10px !important;
        }
      `}</style>
    </div>
  );
}

export default Contact;