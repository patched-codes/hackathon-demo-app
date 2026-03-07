"use client";

import { useEffect } from "react";

export default function Widget() {
  useEffect(() => {
    import("@patchedcodes/hackathon-widget").then(({ init }) => {
      init({
        endpoint: process.env.NEXT_PUBLIC_DEVLOYED_ENDPOINT!,
        apiKey: process.env.NEXT_PUBLIC_DEVLOYED_API_KEY!,
      });
    });
  }, []);

  return null;
}
