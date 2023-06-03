import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaFreeCodeCamp,
  FaRegUserCircle,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full fixed left-0 bottom-0">
      <div className="w-full flex items-center justify-center pt-4 mb-4">
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="w-8 h-8 text-black m-2" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="w-8 h-8 m-2 text-linkedin" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FaCodepen className="w-8 h-8  m-2 text-linkedin" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FaFreeCodeCamp className="w-8 h-8  m-2 text-linkedin" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <FaRegUserCircle className="w-8 h-8 text-black m-2" />
        </a>
      </div>
      <div className="flex items-center justify-center mb-4">
        <span className="text-xs text-gray-400">
          Copyright © 2023. All rights reserved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
