import Script from "next/script";
import { env } from "@/lib/env";

export function AnalyticsScripts() {
  return (
    <>
      {env.gtmId ? (
        <>
          <Script id="gtm-base" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
              });
            `}
          </Script>
          <Script
            id="gtm-script"
            src={`https://www.googletagmanager.com/gtm.js?id=${env.gtmId}`}
            strategy="afterInteractive"
          />
        </>
      ) : null}

      {env.gaId ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${env.gaId}`} strategy="afterInteractive" />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${env.gaId}', { send_page_view: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
