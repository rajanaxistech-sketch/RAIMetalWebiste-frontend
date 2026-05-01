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
      const res = await fetch(
        "https://raimetalsapi.anaxistech.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

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
    <div className="min-h-screen bg-[#0b0b0b] text-white px-4 py-10 pt-48">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 tracking-widest">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl font-bold">
            Request a <span className="text-[#c9a34e]">Quote</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE INFO */}
          <div className="space-y-6">

            <div className="info-card">
              <p className="label">📍 ADDRESS</p>
              <p>5103 Ashcrest Ct, Tampa, Florida 33647</p>
            </div>

            <div className="info-card">
              <p className="label">📞 PHONE</p>
              <p>+1 980-229-1914</p>
            </div>

            <div className="info-card">
              <p className="label">✉️ EMAIL</p>
              <p>amar@raimetals.net</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

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
              <div className="flex gap-4 items-center">
                <div className="captcha-box">{captchaCode}</div>

                <button
                  type="button"
                  onClick={() => setCaptchaCode(generateCaptcha())}
                  className="refresh-btn"
                >
                  ↻
                </button>

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

              <button
                type="submit"
                disabled={loading}
                className="submit-btn"
              >
                {loading ? "Sending..." : "Send Inquiry →"}
              </button>

              {responseMsg && (
                <p className="text-center text-green-400 text-sm">
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>
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