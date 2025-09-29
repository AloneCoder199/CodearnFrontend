// src/components/PoliciesPage.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import BackButton from "./BackButton";

const policies = [
  {
    id: 1,
    title: "Privacy Policy",
    content: `
We collect your name, email, and message to provide services & updates.
- Used only for sending daily updates, course notifications, and reminders.
- Email is never shared or sold.
- Subscriber data is retained until you unsubscribe.
- Contact: contact@aapkidomain.com
`,
  },
  {
    id: 2,
    title: "Terms of Service",
    content: `
By using this site, you agree to our Terms of Service.
- Web development services, website creation, online courses.
- Paid subscriptions may apply.
- Misuse can lead to account suspension.
- Governing law: Pakistan laws.
`,
  },
  {
    id: 3,
    title: "Cookie Policy",
    content: `
We use cookies for a better experience:
- Necessary: sessions & login.
- Analytics: monitor site performance.
- Marketing: ads & reminders.
- Users can manage or disable cookies.
`,
  },
  {
    id: 4,
    title: "Refund / Cancellation Policy",
    content: `
Refund rules:
- Digital Courses: 7-day refund if <10% accessed.
- Web Services/Projects: Partial refunds by milestones.
- Request: refunds@aapkidomain.com
- Response: 7–14 business days.
`,
  },
  {
    id: 5,
    title: "Our Courses & Enrollment",
    content: `
Web Development Courses:
1. HTML & CSS – foundation.
2. Advanced JS – DOM, OOP, ES6.
3. MERN Stack – MongoDB, Express, React, Node.js.
4. Projects – build real websites/apps.
5. Daily updates via email.

Enroll Steps:
a) Sign up & verify email.
b) Choose Free/Paid plan.
c) Access dashboard & track progress.
`,
  },
];

const PoliciesPage = () => {
  const [openId, setOpenId] = useState(null);
  const [hovered, setHovered] = useState(false);

  // Auto open-close logic (5 seconds per accordion)
  useEffect(() => {
    if (hovered) return; // hover pe stop

    const interval = setInterval(() => {
      setOpenId((prev) => {
        if (prev === null) return policies[0].id;
        const currentIndex = policies.findIndex((p) => p.id === prev);
        const nextIndex = (currentIndex + 1) % policies.length;
        return policies[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [hovered]);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <div className="min-h-screen bg-white text-[#0D1B2A] relative overflow-hidden">
        <BackButton/>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-32 -top-40 w-96 h-96 rounded-full bg-[#00BCD4]/12"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-80px] bottom-[-80px] w-80 h-80 rounded-full bg-[#FF9800]/10"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        >
          <ShieldCheck className="inline w-10 h-10 text-[#00BCD4] mr-2" />
          Our Policies & Courses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 text-lg max-w-2xl text-center"
        >
          Everything you need to know about privacy, terms, cookies, refunds,
          and our web development courses.
        </motion.p>
      </section>

      {/* Accordion Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {policies.map((p, i) => (
          <motion.div
            key={p.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-400"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Accordion Button */}
            <button
              onClick={() => toggle(p.id)}
              className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 text-gray-900 text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {p.title}
              <motion.span
                animate={{
                  rotate: openId === p.id ? 45 : 0,
                  scale: openId === p.id ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.25,
                  type: "spring",
                  stiffness: 300,
                }}
                className="text-xl font-bold"
              >
                +
              </motion.span>
            </button>

            {/* Accordion Content */}
            <AnimatePresence>
              {openId === p.id && (
                <motion.div
                  key={`content-${p.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-6 py-5 text-sm md:text-base leading-relaxed text-gray-800 bg-white h-56 overflow-y-auto"
                >
                  {/* Structured content */}
                  {p.title === "Privacy Policy" && (
                    <>
                      <p className="mb-2">
                        We value your privacy and handle your data responsibly.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          Collect name, email, and message to provide updates.
                        </li>
                        <li>Emails are used only for notifications.</li>
                        <li>We never share or sell your data.</li>
                        <li>Subscriber info kept until you unsubscribe.</li>
                        <li>
                          Contact:{" "}
                          <span className="text-blue-600">
                            contact@aapkidomain.com
                          </span>
                        </li>
                      </ul>
                    </>
                  )}
                  {p.title === "Terms of Service" && (
                    <>
                      <p className="mb-2">
                        By using our site, you agree to our terms.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          Services: web development, websites, online courses.
                        </li>
                        <li>Paid subscriptions may apply.</li>
                        <li>Misuse may result in account suspension.</li>
                        <li>Governing law: Pakistan.</li>
                      </ul>
                    </>
                  )}
                  {p.title === "Cookie Policy" && (
                    <>
                      <p className="mb-2">
                        Cookies help us improve your experience.
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Necessary: session & login management.</li>
                        <li>Analytics: monitor site performance.</li>
                        <li>Marketing: ads and reminders.</li>
                        <li>You can manage or disable cookies anytime.</li>
                      </ul>
                    </>
                  )}
                  {p.title === "Refund / Cancellation Policy" && (
                    <>
                      <p className="mb-2">
                        Refund rules for services and courses:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>
                          Digital Courses: 7-day refund if under 10% accessed.
                        </li>
                        <li>
                          Web Services/Projects: Partial refunds per milestone.
                        </li>
                        <li>
                          Request at:{" "}
                          <span className="text-blue-600">
                            refunds@aapkidomain.com
                          </span>
                        </li>
                        <li>Response time: 7–14 business days.</li>
                      </ul>
                    </>
                  )}
                  {p.title === "Our Courses & Enrollment" && (
                    <>
                      <p className="mb-2">
                        Web Development Courses offered:
                      </p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>HTML & CSS – foundation for web design.</li>
                        <li>
                          Advanced JavaScript – DOM, OOP, ES6 features.
                        </li>
                        <li>
                          MERN Stack – MongoDB, Express, React, Node.js.
                        </li>
                        <li>
                          Projects – build real websites and applications.
                        </li>
                        <li>Daily updates via email.</li>
                      </ul>
                      <p className="mt-2">Enrollment Steps:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-4">
                        <li>Sign up & verify your email.</li>
                        <li>Choose Free or Paid plan.</li>
                        <li>Access dashboard and track progress.</li>
                      </ol>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default PoliciesPage;
