import React, { useState } from "react";
import Layout from "@/components/Layout";
import { FaFileDownload, FaSearch, FaFolderOpen } from "react-icons/fa";

const formsData = [
  { title: "Stock Market Mandate", file: "/forms/Stock Market Mandate.pdf" },
  {
    title: "Notice New KYC Requirements June 2017",
    file: "/forms/NOTICE -NEW  KYC REQUIREMENTS JUNE 2017.pdf",
  },
  {
    title: "KYC Update Form",
    file: "/forms/KYC Update Form - Individual  Purpose.pdf",
  },
  {
    title: "Mandate Form -Institutions",
    file: "/forms/KYC form-Institutions.PDF",
  },
  {
    title: "Account Opening Form -Individual",
    file: "/forms/ACCOUNT OPENING FOR  FORM-INDIVIDUALS.pdf",
  },
  {
    title: "Account Opening Form -Corporates",
    file: "/forms/ACCOUNT OPENING FORM-CORPORATES.pdf",
  },
];

const FormsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredForms = formsData.filter((form) =>
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="">
        {/* Hero Section */}
        <div className="bg-teal-600">
          <div className="max-w-6xl mx-auto text-white px-6 py-6 mb-6 flex items-center">
            <FaFolderOpen className="text-5xl mr-4" />
            <div>
              <h1 className="text-4xl font-bold">Downloadable Forms</h1>
              <p className="mt-2">
                Access and download all necessary forms easily.
              </p>
            </div>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="max-w-5xl flex items-center justify-center md:justify-start mx-auto">
          <div className="breadcrumbs text-sm mb-4">
            <ul className="flex space-x-2">
              <li>
                <a
                  href="/"
                  className="text-teal-600 hover:underline hover:text-amber-800"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/forms"
                  className="text-teal-600 hover:underline hover:text-amber-800"
                >
                  Forms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-8 px-2 md:px-0">
          {/* Search Bar */}
          <div className="flex items-center mb-6">
            <div className="relative w-full">
              <FaSearch className="absolute left-3 top-2 text-teal-600" />
              <input
                type="text"
                placeholder="Search forms..."
                className="pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Forms Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="py-3 px-4 text-left">Form Title</th>
                  <th className="py-3 px-4 text-left">Download</th>
                </tr>
              </thead>
              <tbody>
                {filteredForms.length > 0 ? (
                  filteredForms.map((form, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="py-3 px-4">{form.title}</td>
                      <td className="py-3 px-4">
                        <a
                          href={form.file}
                          download
                          className="text-teal-600 hover:text-amber-800 flex items-center"
                        >
                          <FaFileDownload className="mr-1" /> Download
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center py-3 text-gray-500">
                      No forms found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormsPage;
