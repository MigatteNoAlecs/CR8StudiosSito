"use client";

import { useEffect, useId, useRef } from "react";
import { BOOKING_WIDGET } from "@/lib/content";

type BookingButtonProps = {
  className?: string;
};

export function BookingButton({ className }: BookingButtonProps) {
  const mountId = useId().replace(/:/g, "");
  const mountRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || mount.dataset.cr8Ready === "true") return;

    const script = document.createElement("script");
    script.src = BOOKING_WIDGET.scriptSrc;
    script.async = true;
    script.setAttribute("data-api", BOOKING_WIDGET.api);
    script.setAttribute("data-rest-id", BOOKING_WIDGET.restId);
    script.setAttribute("data-rest-name", BOOKING_WIDGET.restName);
    script.setAttribute("data-mode", "button");
    script.setAttribute("data-target", `#${mountId}`);

    scriptRef.current = script;
    mount.dataset.cr8Ready = "true";
    document.body.appendChild(script);

    return () => {
      mount.replaceChildren();
      delete mount.dataset.cr8Ready;
      scriptRef.current?.remove();
      scriptRef.current = null;
    };
  }, [mountId]);

  return (
    <div
      ref={mountRef}
      id={mountId}
      className={["cr8-booking-slot", className].filter(Boolean).join(" ")}
    />
  );
}
