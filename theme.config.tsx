// For reference of a in-production config - https://github.com/cn-turbo/docs/blob/7a26b7d08bd7cb0550bc387004c261fa5c5b2ccd/theme.config.js

import React, { useState, useEffect } from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Kevin B. Ridgway - Today I Learned</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Kevin B. Ridgway's Today I Learned Site",
    };
  },
  project: {
    link: "https://github.com/program247365/kbr-til",
  },
  toc: {
    float: true,
  },
  search: {
    placeholder: "Search Kevin's TILs...",
  },
  docsRepositoryBase: "https://github.com/program247365/kbr-til/blob/main/",
  footer: {
    text: "Kevin B. Ridgway's Today I Learned Site",
  },
  gitTimestamp({ timestamp }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [dateString, setDateString] = useState(timestamp.toISOString());

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      setDateString(
        timestamp.toLocaleDateString(navigator.language, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    }, [timestamp]);

    return <>Updated Last：{dateString}</>;
  },
};

export default config;
