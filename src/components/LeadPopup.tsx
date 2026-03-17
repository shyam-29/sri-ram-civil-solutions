import { useState, useEffect } from "react";
import { X } from "lucide-react";


const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    location: "",
  });

  useEffect(() => {
    const dismissed = sessionStorage.getItem("lead-popup-dismissed");
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("lead-popup-dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card rounded-xl shadow-2xl w-full max-w-md animate-fade-up overflow-hidden">
        <div className="bg-navy p-6 text-center relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-secondary-foreground/60 hover:text-secondary-foreground"
          >
            <X size={20} />
          </button>
          <img src={logo} alt="Shree Ram Construction" className="w-16 h-12 object-contain mx-auto mb-3 rounded" />
          <h3 className="font-display font-bold text-xl text-secondary-foreground">Get a FREE Consultation</h3>
          <p className="font-body text-secondary-foreground/60 text-sm mt-1">Fill the form and ER. Satendra Prasad's team will reach out!</p>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-primary text-3xl">✓</span>
            </div>
            <h4 className="font-display font-semibold text-lg text-card-foreground">Thank You!</h4>
            <p className="font-body text-muted-foreground text-sm mt-1">We'll contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <input type="text" placeholder="Your Name *" required maxLength={100} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <input type="tel" placeholder="Mobile Number *" required maxLength={15} pattern="[0-9+\-\s]+" value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <input type="email" placeholder="Email ID *" required maxLength={255} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <input type="text" placeholder="Your City *" required maxLength={100} value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground" />
            <select required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              <option value="">Select Service Location *</option>
              <option value="Jharsuguda">Jharsuguda</option>
              <option value="Sambalpur">Sambalpur</option>
              <option value="Sundargarh">Sundargarh</option>
            </select>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-body font-bold text-sm hover:shadow-gold transition-all">
              Book Free Consultation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadPopup;
