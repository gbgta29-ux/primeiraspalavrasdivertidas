"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

const PIXEL_ID = "1890886645197913";

const FacebookPixel = () => {
  const [loaded, setLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!loaded) return;

    window.fbq("track", "PageView");
  }, [pathname, loaded]);

  return (
    <Script
      id="fb-pixel"
      src="/scripts/pixel.js"
      strategy="afterInteractive"
      onLoad={() => {
        setLoaded(true);
        window.fbq("init", PIXEL_ID);
        window.fbq("track", "PageView");
      }}
    />
  );
};

export default FacebookPixel;
