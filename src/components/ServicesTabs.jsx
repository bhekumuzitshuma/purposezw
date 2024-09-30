import { useState } from "react";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaClipboardList,
  FaExchangeAlt,
  FaBuilding,
  FaChartBar,
} from "react-icons/fa";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("fixedIncome");

  const tabs = [
    {
      id: "fixedIncome",
      label: "Fixed Income Portfolio Management",
      icon: <FaChartLine />,
    },
    {
      id: "cashManagement",
      label: "Cash Management",
      icon: <FaMoneyBillWave />,
    },
    {
      id: "investmentAdvisory",
      label: "Investment Advisory Services",
      icon: <FaClipboardList />,
    },
    {
      id: "alternativeTrading",
      label: "Alternative Trading Platform",
      icon: <FaExchangeAlt />,
    },
    { id: "propertyFund", label: "Property Fund", icon: <FaBuilding /> },
    {
      id: "stockMarket",
      label: "Stock Market Portfolio",
      icon: <FaChartBar />,
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "fixedIncome":
        return <p>Content for Fixed Income Portfolio Management.</p>;
      case "cashManagement":
        return <p>Content for Cash Management.</p>;
      case "investmentAdvisory":
        return <p>Content for Investment Advisory Services.</p>;
      case "alternativeTrading":
        return <p>Content for Alternative Trading Platform.</p>;
      case "propertyFund":
        return <p>Content for Property Fund.</p>;
      case "stockMarket":
        return <p>Content for Stock Market Portfolio.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="md:flex">
      <ul className="p-2 space-y-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab.id);
              }}
              className={`inline-flex items-center px-4 py-2 rounded-lg w-full ${
                activeTab === tab.id
                  ? "text-white bg-teal-700 "
                  : "bg-gray-100 hover:bg-amber-600 hover:text-white transition duration-300  "
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              <span
                className={`w-4 h-4 me-2 ${
                  activeTab === tab.id ? "text-white" : "text-black"
                }`}
              >
                {tab.icon}
              </span>
              {tab.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="p-6  bg-gray-50 text-medium text-gray-500 rounded-lg w-full">
        {renderContent()}
      </div>
    </div>
  );
};

export default TabsComponent;
