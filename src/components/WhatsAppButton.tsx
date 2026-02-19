const WhatsAppButton = () => {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hello SRI RAM Engineers! I'm interested in your construction services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse"
      style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.044-1.94A15.907 15.907 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.608c-.39 1.098-1.932 2.01-3.174 2.276-.852.18-1.964.324-5.71-1.228-4.8-1.988-7.886-6.862-8.124-7.18-.228-.318-1.916-2.55-1.916-4.864 0-2.314 1.212-3.45 1.644-3.924.39-.428 1.026-.624 1.632-.624.198 0 .374.01.534.018.468.02.702.048 1.012.786.384.924 1.32 3.222 1.434 3.456.118.234.234.534.048.852-.178.324-.268.526-.534.81-.264.284-.556.634-.792.852-.264.244-.54.508-.232.998.31.484 1.374 2.268 2.95 3.672 2.028 1.81 3.658 2.396 4.226 2.646.428.19.938.15 1.288-.228.444-.478.994-1.272 1.552-2.054.396-.558.896-.63 1.368-.438.478.184 3.026 1.428 3.546 1.688.518.26.864.39.992.608.126.218.126 1.268-.264 2.366z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
