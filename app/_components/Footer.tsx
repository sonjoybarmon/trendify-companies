import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* copyright text */}
      <div className="text-center text-black text-sm py-4">
        © {new Date().getFullYear()} All rights reserved. Designed by
        <Link
          href="mailto:srikar@trendify.com"
          target="_blank"
          rel="noreferrer"
          className="text-primary ml-1"
        >
          srikar@trendify.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
