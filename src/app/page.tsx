"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Star, Heart } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="compact"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="outline"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Call Now",            href: "tel:(816)231-3916"
          }}
          brandName="H & H Plumbing"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Kansas City's Trusted 24/7 Plumbing Experts"
          description="Fast response. Fair pricing. Reliable service when you need it most. We're available around the clock for emergency plumbing repairs, drain cleaning, and professional installations."
          tag="5.0 Star Rated"
          tagIcon={Star}
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=1",              imageAlt: "Professional plumbing service technician"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?_wi=1",              imageAlt: "Emergency plumbing repair service"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/plumbing-repair-service_181624-27146.jpg?_wi=1",              imageAlt: "Drain cleaning and maintenance"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-fixing-kitchen-sink_53876-139620.jpg?_wi=1",              imageAlt: "Leak detection and repair"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990710.jpg?_wi=1",              imageAlt: "Bathroom plumbing installation"
            }
          ]}
          buttons={[
            {
              text: "📞 Call Now (816) 231-3916",              href: "tel:(816)231-3916"
            },
            {
              text: "Request Service",              href: "#contact"
            }
          ]}
          mediaAnimation="slide-up"
          buttonAnimation="slide-up"
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardOne
          title="Our Plumbing Services"
          description="Comprehensive plumbing solutions for residential and light commercial properties. From emergency repairs to new installations, we handle it all with professional expertise and fair pricing."
          tag="Services"
          tagAnimation="blur-reveal"
          textboxLayout="default"
          features={[
            {
              title: "Emergency Plumbing",              description: "24/7 emergency response for urgent plumbing issues. We're here when you need us most.",              imageSrc: "http://img.b2bpic.net/free-photo/man-fixing-kitchen-sink_53876-13430.jpg?_wi=2",              imageAlt: "Emergency plumbing repair",              button: {
                text: "Learn More",                href: "#"
              }
            },
            {
              title: "Drain Cleaning",              description: "Professional drain cleaning and unclogging services to keep your pipes flowing smoothly.",              imageSrc: "http://img.b2bpic.net/free-photo/plumbing-repair-service_181624-27146.jpg?_wi=2",              imageAlt: "Drain cleaning service",              button: {
                text: "Learn More",                href: "#"
              }
            },
            {
              title: "Leak Repair",              description: "Fast leak detection and repair to prevent water damage and save on your water bill.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-fixing-kitchen-sink_53876-139620.jpg?_wi=2",              imageAlt: "Leak repair service",              button: {
                text: "Learn More",                href: "#"
              }
            },
            {
              title: "Septic Tank Services",              description: "Septic tank pumping, inspection, and maintenance for reliable waste management.",              imageSrc: "http://img.b2bpic.net/free-photo/male-worker-operating-machinery-factory_107420-96043.jpg?_wi=2",              imageAlt: "Septic tank service",              button: {
                text: "Learn More",                href: "#"
              }
            },
            {
              title: "Basement Flood Repair",              description: "Emergency flood mitigation and water damage restoration for your home.",              imageSrc: "http://img.b2bpic.net/free-photo/lost-school-sport-gym-with-swimming-pool-chernobyl-city-zone-radioactivity-ghost-town_627829-11732.jpg",              imageAlt: "Basement flood repair",              button: {
                text: "Learn More",                href: "#"
              }
            },
            {
              title: "Kitchen & Bathroom Plumbing",              description: "Expert installation and renovation of kitchen and bathroom plumbing systems.",              imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990710.jpg?_wi=2",              imageAlt: "Kitchen and bathroom plumbing",              button: {
                text: "Learn More",                href: "#"
              }
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Why Choose H & H Plumbing Co"
          description={[
            "We're a locally owned and operated plumbing company serving Kansas City and surrounding areas since 1995. Our team of experienced, licensed technicians is committed to delivering fast, reliable service with upfront, fair pricing.",            "We understand that plumbing emergencies can't wait. That's why we offer 24/7 service availability and pride ourselves on quick response times. Whether you need emergency repairs or planned maintenance, we treat your home with respect and complete the job right the first time.",            "Our 5.0 star rating on Google reflects our dedication to customer satisfaction. We stand behind our work with quality craftsmanship and transparent communication every step of the way."
          ]}
          buttons={[
            {
              text: "Call Us Today",              href: "tel:(816)231-3916"
            },
            {
              text: "Request Service",              href: "#contact"
            }
          ]}
          buttonAnimation="blur-reveal"
          useInvertedBackground={false}
          showBorder={true}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="See why homeowners and property managers throughout Kansas City trust H & H Plumbing for all their plumbing needs."
          tag="Reviews"
          tagAnimation="blur-reveal"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              role: "Homeowner",              testimonial: "Super job, fast service, knowledgeable, fair priced, highly recommend. They fixed our emergency leak in under an hour!"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Property Manager",              testimonial: "Amazing service from start to finish. They also got the better prices in town. We use them for all our properties now."
            },
            {
              id: "3",              name: "Emily Rodriguez",              role: "Homeowner",              testimonial: "Very understanding of my schedule and worked around my availability. Professional, courteous, and they explained everything they were doing."
            },
            {
              id: "4",              name: "David Kim",              role: "Landlord",              testimonial: "Called for an emergency at 2 AM and they answered immediately. Technician was at the property in 30 minutes. Outstanding service!"
            },
            {
              id: "5",              name: "Jennifer Martinez",              role: "Homeowner",              testimonial: "They replaced our water heater and did all the plumbing work beautifully. The team was clean, respectful, and very professional."
            }
          ]}
          animationType="slide-up"
          useInvertedBackground={false}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Need Plumbing Help? We're Available 24/7"
          description="Get a quick response from our team. Fill out the form below or call us directly at (816) 231-3916. We'll get back to you as soon as possible."
          inputs={[
            {
              name: "name",              type: "text",              placeholder: "Your Name",              required: true
            },
            {
              name: "phone",              type: "tel",              placeholder: "Phone Number",              required: true
            },
            {
              name: "email",              type: "email",              placeholder: "Email Address",              required: true
            },
            {
              name: "service",              type: "text",              placeholder: "Service Needed (e.g., Emergency Repair, Drain Cleaning)",              required: true
            }
          ]}
          textarea={{
            name: "description",            placeholder: "Describe your plumbing issue",            rows: 4,
            required: true
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-man-sitting-floor-with-tap_259150-58260.jpg"
          imageAlt="Professional plumbing tools and equipment"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Request Service Now"
          onSubmit={() => console.log('Form submitted')}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Services",              items: [
                { label: "Emergency Plumbing", href: "#services" },
                { label: "Drain Cleaning", href: "#services" },
                { label: "Leak Repair", href: "#services" },
                { label: "Septic Tank Services", href: "#services" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Reviews", href: "#reviews" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Contact",              items: [
                { label: "📞 (816) 231-3916", href: "tel:(816)231-3916" },
                { label: "📍 Kansas City, MO", href: "#" },
                { label: "🕐 Open 24 Hours", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2025 H & H Plumbing Co. All rights reserved. Locally owned and operated in Kansas City, MO."
          bottomRightText="Available 24/7 for Emergency Plumbing Service"
        />
      </div>
    </ThemeProvider>
  );
}
