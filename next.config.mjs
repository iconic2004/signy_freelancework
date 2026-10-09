/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/service.html', destination: '/services', permanent: true },
      { source: '/bulk-sms.html', destination: '/services/bulk-sms', permanent: true },
      { source: '/whats-app-business-api.html', destination: '/services/whatsapp-business-api', permanent: true },
      { source: '/voice-calls.html', destination: '/services/voice-calls', permanent: true },
      { source: '/google-verified-sms.html', destination: '/services/google-verified-sms', permanent: true },
      { source: '/rcs.html', destination: '/services/rcs', permanent: true },
      { source: '/chatbots.html', destination: '/services/chatbots', permanent: true },
      { source: '/contact-us.html', destination: '/contact', permanent: true },
      { source: '/why-us.html', destination: '/why-us', permanent: true },
      { source: '/privacy-policy.html', destination: '/privacy-policy', permanent: true },
      { source: '/terms-and-conditions.html', destination: '/terms-and-conditions', permanent: true },
      { source: '/cancellation-refund-policy.html', destination: '/cancellation-refund-policy', permanent: true },
      { source: '/seo-service.html', destination: '/services/seo', permanent: true },
      { source: '/socialmediapage.html', destination: '/services/social-media', permanent: true },
      { source: '/web-developement.html', destination: '/services/web-development', permanent: true },
      { source: '/two-way-communication.html', destination: '/services/two-way-communication', permanent: true },
    ];
  },
};

export default nextConfig;
