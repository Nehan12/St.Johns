export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NursingHome",
          name: "Heritage Care",
          url: "https://heritagecare.lk",
          logo: "https://heritagecare.lk/mainLogo-green.png",
          telephone: ["+94771654202", "+94777253873"],
          email: "heritagecarelk@gmail.com",
          description:
            "Senior residential, nursing, memory and rehabilitation care in Sri Lanka.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Diyagala Boys Town",
            addressLocality: "Ragama",
            addressCountry: "LK",
          },
          openingHours: "Mo-Su 00:00-24:00",
          hasMap: "https://maps.google.com/?q=Heritage+Care+Ragama",
          sameAs: [
            "https://www.facebook.com/heritagecare", // update with real links
          ],
        }),
      }}
    />
  );
}
