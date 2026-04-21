"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CostsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-[var(--primary)] border-t-transparent mx-auto mb-4"></div>
          <p className="text-primary text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-main">
      <Navigation />

      {/* Hero */}
      <section
        className="
        relative flex items-center justify-center md:py-24 pt-40 md:pt-36 pb-8
        bg-cover bg-no-repeat
        bg-center
        md:min-h-[85vh]"
        style={{ backgroundImage: "url(/costs.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fee and Pricing Breakdown
          </h1>
          <div className="underline mx-auto mt-2"></div>
          <br />
          <p
            className="
                hidden landscape:block md:block
                text-lg md:text-xl text-white
                max-w-3xl mt-6 md:mt-10 mx-auto
              "
          >
            Transparent pricing, personalised care, and a lifestyle designed for
            comfort and dignity.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="leading-relaxed">
            At Heritage Care, choosing to join one of our homes means investing
            in a high standard of living, personalised support, and a warm,
            nurturing environment where you can truly feel at home.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Section Block */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Personalised Pre-Admission Assessment
            </h2>

            <p className="leading-relaxed">
              Before you move in, we carry out a comprehensive pre-admission
              assessment to understand your individual care needs, preferences,
              and daily routines. This ensures that the care you receive is
              fully tailored to you.
            </p>

            <p className=" leading-relaxed mt-4">
              Based on this assessment, we determine the most appropriate
              Monthly fee, taking into account the level of support required and
              your preferred room choice. Whether you require residential care,
              dementia support, or palliative care, your care plan will be
              carefully designed around your needs and wishes.
            </p>

            <p className="leading-relaxed mt-4">
              You will also have the opportunity to personalise your living
              space, helping you feel comfortable and settled from day one.
            </p>
          </div>

          {/* Section Block */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Clear and Open Conversations
            </h2>

            <p className="leading-relaxed">
              We understand that moving into care is both an emotional and
              financial decision. At Heritage Care, we prioritise transparency
              and open communication with you and your family.
            </p>

            <p className="leading-relaxed mt-4">
              To guide you effectively, we may ask for an overview of the
              financial resources available to support your care. This helps us
              ensure that your care plan is both suitable and sustainable in the
              long term.
            </p>
          </div>

          {/* What's Included */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">
              What’s Included in Your Monthly Fee
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "A private, fully furnished bedroom with access to communal dining areas",
                "24/7 personalised care from our trained and compassionate team",
                "Nutritious, freshly prepared meals and snacks tailored to your dietary needs and preferences",
                "Laundry and housekeeping services",
                "Access to Doctor support and routine health monitoring",
                "Social activities, entertainment, and events",
                "Use of shared facilities such as lounges, gardens, and relaxation areas",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[var(--secondary)] shadow-sm"
                >
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Additional Services
            </h2>

            <p className="leading-relaxed">
              At Heritage Care, we believe in creating a vibrant and engaging
              lifestyle for our residents.
            </p>

            <p className="leading-relaxed mt-4">
              Our activities programme includes a variety of options such as
              music sessions, arts and crafts, gardening, light exercise, and
              organised outings. Our dedicated activities coordinators take time
              to understand your interests and hobbies, ensuring each day is
              meaningful and enjoyable.
            </p>

            <p className="leading-relaxed mt-4">
              We also hold regular residents’ meetings, giving you the
              opportunity to share ideas and shape the activities offered within
              the home.
            </p>

            <p className="leading-relaxed mt-4">
              Some optional services may incur an additional cost. These will
              always be clearly explained in advance, allowing you to make
              informed choices.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Deposits & Payment Terms
            </h2>

            <p className="leading-relaxed">
              At Heritage Care, we keep our payment processes simple and
              transparent, so you can focus on settling in and feeling at home.
            </p>

            <p className=" leading-relaxed mt-4">
              We do charge administration and joining fees. Deposits are
              generally not required; however, if you wish to reserve a room,
              this can be discussed directly with the care home manager.
            </p>

            <div className="mt-6 space-y-4">
              <div className="p-6 bg-white rounded-xl border">
                <h3 className="font-semibold text-primary mb-2 ">
                  Respite Care
                </h3>
                <p>Fees payable in advance at the home.</p>
              </div>

              <div className="p-6 bg-white rounded-xl border">
                <h3 className="font-semibold text-primary mb-2">
                  Permanent Care
                </h3>
                <p>Monthly payments via direct debit.</p>
              </div>
            </div>
          </div>

          {/*Preferred Payment Method */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Preferred Payment Method
            </h2>

            <p className=" leading-relaxed">
              Our preferred method of payment for permanent care is direct
              debit, as it provides a secure and convenient way to manage
              monthly fees.
            </p>

            <p className="leading-relaxed mt-4">
              If an alternative arrangement is needed, our team will be happy to
              discuss options that best suit your circumstances.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
