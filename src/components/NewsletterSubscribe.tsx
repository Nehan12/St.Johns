"use client";
import { useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");
  type Status = "idle" | "loading" | "success" | "error";
  const [status, setStatus] = useState<Status>("idle");

  const handleSubscribe = async () => {
    if (!email.includes("@")) return;
    setStatus("loading");

    try {
      const formData = new FormData();
      formData.append("EMAIL", email);
      formData.append("b_2e7ec089a1fa075de4ea289ed_92100b8706", ""); // honeypot

      await fetch(
        "https://heritagecare.us20.list-manage.com/subscribe/post?u=2e7ec089a1fa075de4ea289ed&id=92100b8706&f_id=00067ceef0",
        { method: "POST", body: formData, mode: "no-cors" },
      );

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16">
      <div className="bg-[#f0faf4] border border-[#2d6a4f33] rounded-2xl p-8 text-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 8l9 6 9-6M3 8h18v12H3V8z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-primary mb-2">Stay Informed</h3>
        <p className="text-gray-600 mb-6 text-sm max-w-sm mx-auto">
          Get the latest care tips and Heritage Care articles delivered straight
          to your inbox.
        </p>

        {status === "success" ? (
          <div className="text-green-600 font-semibold">
            <p className="text-lg">✅ You&apos;re subscribed!</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-72 bg-white"
              />
              <button
                onClick={handleSubscribe}
                disabled={status === "loading"}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:brightness-90 transition disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2 justify-center">
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm mt-3">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="text-xs text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
