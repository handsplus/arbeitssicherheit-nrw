"use client";

import { PrimaryCtaLink } from "@/components/PrimaryCtaLink";

export function FaqCta() {
  return (
    <div className="mt-12 text-center">
      <PrimaryCtaLink
        theme="default"
        showIcon={false}
        className="inline-flex items-center justify-center rounded-full bg-nrw-rot px-8 py-4 font-semibold text-white hover:bg-nrw-rot-hover"
      />
    </div>
  );
}
