const fallbackSiteUrl = "https://www.onenvideo.com";

export const env = {
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50700000000",
  n8nWebhookUrl: process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
};
