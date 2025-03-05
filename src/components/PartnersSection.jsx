import React, { useState } from "react";

import deloitteLogo from "../assets/client-logos/deloitte-logo.png";
import cybersportLogo from "../assets/client-logos/cyberport-logo.png";
import hkstpLogo from "../assets/client-logos/hkstp-logo.png";
import hkustLogo from "../assets/client-logos/hkust-logo.png";
import investHKLogo from "../assets/client-logos/investhk-logo.png";
import fintechHKLogo from "../assets/client-logos/fintechhk-logo.png";
import itmoUniversityLogo from "../assets/client-logos/itmo-university-logo.png";
import sparcusTechnologiesLogo from "../assets/client-logos/sparcus-logo.png";
import hktdcLogo from "../assets/client-logos/hktdc-logo.png";
import hkfcLogo from "../assets/client-logos/hkfc-logo.png";
import hkpcLogo from "../assets/client-logos/hkpc-logo.png";
import hkbioLogo from "../assets/client-logos/hkbio-logo.png";
import awsLogo from "../assets/client-logos/aws-logo.png";
import hongKongLogo from "../assets/client-logos/hongkong-a-logo.png";

export default function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const partners = [
    {
      logo: deloitteLogo,
      name: "Deloitte",
      description:
        "Deloitte is a leading global provider of audit and assurance, consulting, financial advisory, risk advisory, tax, and related services.",
    },
    {
      logo: cybersportLogo,
      name: "Cyberport",
      description:
        "Cyberport is a creative digital community that nurtures start-ups and promotes innovation.",
    },
    {
      logo: hkstpLogo,
      name: "HKSTP",
      description:
        "Hong Kong Science and Technology Parks Corporation (HKSTP) supports technology companies in Hong Kong.",
    },
    {
      logo: hkustLogo,
      name: "HKUST",
      description:
        "The Hong Kong University of Science and Technology (HKUST) is a public research university.",
    },
    {
      logo: investHKLogo,
      name: "InvestHK",
      description:
        "Invest Hong Kong (InvestHK) is the government department responsible for foreign direct investment.",
    },
    {
      logo: fintechHKLogo,
      name: "FinTech HK",
      description:
        "Fintech Hong Kong is a community-driven initiative that promotes fintech in Hong Kong.",
    },
    {
      logo: itmoUniversityLogo,
      name: "ITMO University",
      description:
        "ITMO University is a leading Russian university in IT and computer science.",
    },
    {
      logo: sparcusTechnologiesLogo,
      name: "Sparcus Technologies",
      description:
        "Sparcus provides innovative solutions for business automation.",
    },
    {
      logo: hktdcLogo,
      name: "HKTDC",
      description:
        "The Hong Kong Trade Development Council (HKTDC) promotes trade in Hong Kong.",
    },
    {
      logo: hkfcLogo,
      name: "HKFc",
      description:
        "The Hong Kong Food Council advocates for food safety and quality.",
    },
    {
      logo: hkpcLogo,
      name: "HKPC",
      description:
        "The Hong Kong Productivity Council (HKPC) helps businesses enhance productivity and competitiveness.",
    },
    {
      logo: hkbioLogo,
      name: "HKBIO",
      description:
        "HKBIO supports the development of the biotechnology industry in Hong Kong.",
    },
    {
      logo: awsLogo,
      name: "AWS",
      description:
        "Amazon Web Services (AWS) provides on-demand cloud computing platforms.",
    },
    {
      logo: hongKongLogo,
      name: "Hong Kong",
      description: "Hong Kong Asia's World City logo",
    },
  ];

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
  };

  return (
    <section className="py-16 px-40 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-6 border-b-2 text-white border-yellow-500 inline-block">
          Our Partners
        </h2>
        <p className="text-white mb-12">
          We have forged extensive international partnerships with institutions
          and businesses.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
          {partners.slice(0, 10).map((partner, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handlePartnerClick(partner)}
            >
              <div className="bg-white p-4 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  className="w-full h-20 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-purple-600 bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <span className="text-white font-semibold">Read More</span>
              </div>
            </div>
          ))}
        </div>

        {/* Last Row Centered */}
        <div className="flex justify-center gap-6 mt-6">
          {partners.slice(10).map((partner, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handlePartnerClick(partner)}
            >
              <div className="bg-white p-4 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-105">
                <img
                  src={partner.logo}
                  className="w-full h-20 object-contain"
                />
              </div>
              <div className="absolute inset-0 bg-purple-600 bg-opacity-30 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <span className="text-white font-semibold">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-white mt-6">Among many others...</p>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto relative">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute text-purple-500 top-4 right-4 font-bold text-4xl"
            >
              ×
            </button>
            <img
              src={selectedPartner.logo}
              alt={selectedPartner.name}
              className="w-72 mx-auto mb-6 object-contain justify-center self-center items-center py-20"
            />
            <p className="text-center text-black mb-4">
              {selectedPartner.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
