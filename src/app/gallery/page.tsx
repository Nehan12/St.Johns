"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Gallery",
  description:
    "Take a look inside Heritage Care — our facilities, activities and the warm environment we provide for our residents.",
};

export default function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  type Room = {
    name: string;
    image: string;

    details: string;
  };

  const commonArea = [
    {
      image: "/ca-1.jpeg",
    },
    {
      image: "/ca-2.jpeg",
    },
    {
      image: "/ca-3.jpeg",
    },
    {
      image: "/ca-4.jpeg",
    },
    {
      image: "/ca-5.jpeg",
    },
    {
      image: "/ca-6.jpeg",
    },
    {
      image: "/ca-7.jpeg",
    },
    {
      image: "/ca-8.jpeg",
    },
    {
      image: "/ca-9.jpeg",
    },
  ];

  const typeIRooms = [
    {
      name: "Type I Room",
      image: "/t1-r1.jpeg",
      details: "Single bed, shared bathroom facility, city view, free Wi-Fi.",
    },
    {
      name: "Type I Room",
      image: "/t1-r2.jpeg",
      details: "Single bed, shared bathroom facility, garden view, free Wi-Fi.",
    },
  ];

  const typeIIRooms = [
    {
      name: "Type II Room",
      image: "/t2-r1.jpeg",
      details: "Double bed, ensuite bathroom, garden view, free Wi-Fi.",
    },
    {
      name: "Type II Room",
      image: "/t2-r2.jpeg",
      details: "Double bed, ensuite bathroom, garden view, free Wi-Fi.",
    },
    {
      name: "Type II Room",
      image: "/t2-r3.jpeg",
      details: "Double bed, ensuite bathroom, modern interiors.",
    },
  ];

  useEffect(() => {
    // Simulate loading time
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
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section
        className="
        relative flex items-center justify-center md:py-24 pt-40 md:pt-36 pb-8
        bg-cover bg-no-repeat
        bg-center
        md:min-h-[85vh]"
        style={{
          backgroundImage: "url(/gallery.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white relative inline-block pb-4 md:pb-6">
              Gallery
            </h1>
            <br />
            <div className="underline mx-auto mt-2"></div>
            <p
              className="
                hidden landscape:block md:block
                text-lg md:text-xl text-white
                max-w-3xl mt-6 md:mt-10 mx-auto
              "
            >
              Explore our comfortable and modern rooms designed for your
              wellbeing and peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {/*Common Area */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
              Common Area
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {commonArea.map((room, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                >
                  <Image
                    width={100}
                    height={64}
                    src={room.image}
                    alt={"Image of Common Area"}
                    className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
          -{/* Type I Rooms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
              Type I Rooms
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {typeIRooms.map((room, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                >
                  <Image
                    width={100}
                    height={64}
                    src={room.image}
                    alt={room.name}
                    className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                      {room.name}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {room.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Type II Rooms */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-primary">
              Type II Rooms
            </h2>
            <div>
              {/* Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {typeIIRooms.map((room, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
                  >
                    <Image
                      width={100}
                      height={64}
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center px-4">
                      <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                        {room.name}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base mb-4">
                        {room.details.substring(0, 50)}...
                      </p>

                      {/* View More Button */}
                      {/* <button
                        onClick={() => setSelectedRoom(room)}
                        className="bg-[#E67E5A] hover:bg-[#D86A45] text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                      >
                        View More Details
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal */}
              {selectedRoom && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full mx-4 md:mx-0 shadow-xl">
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-gray-900 transition"
                      aria-label="Close modal"
                    >
                      ✕
                    </button>

                    {/* Image */}
                    <Image
                      width={100}
                      height={64}
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      className="w-full h-64 md:h-96 object-cover"
                    />

                    {/* Details */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-4">
                        {selectedRoom.name}
                      </h3>
                      <p className="text-gray-700 text-base md:text-lg">
                        {selectedRoom.details}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
