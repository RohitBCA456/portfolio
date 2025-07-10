import { motion } from "framer-motion";

export default () => {
  const year = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Portfolio",
      items: [
        { href: "/", name: "Home" },
        { href: "/projects", name: "Projects" },
        { href: "/skills", name: "Skills" },
        { href: "/contact", name: "Contact" },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "#blog", name: "Blog" },
        { href: "#tips", name: "Tips & Guides" },
        { href: "#faq", name: "FAQs" },
        { href: "#newsletter", name: "Newsletter" },
      ],
    },
    {
      label: "Legal",
      items: [
        { href: "#terms", name: "Terms of Use" },
        { href: "#privacy", name: "Privacy Policy" },
        { href: "#license", name: "License" },
      ],
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <motion.footer
      className="pt-10 bg-gray-800 text-sm w-full"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      custom={0}
    >
      <div className="px-4 md:px-8 w-full">
        {/* Newsletter */}
        <motion.div
          className="md:flex justify-between items-center gap-6"
          variants={fadeUp}
          custom={1}
        >
          <motion.div
            className="text-white text-xl font-semibold"
            variants={fadeUp}
            custom={2}
          >
            Stay updated with my latest projects & articles.
          </motion.div>
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-x-3 mt-4 md:mt-0"
            variants={fadeUp}
            custom={3}
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full pl-4 pr-4 py-2 text-gray-800 bg-white border focus:border-indigo-500 rounded-lg shadow-sm"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg shadow">
              Subscribe
            </button>
          </motion.form>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footerNavs.map((section, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              custom={idx + 4}
            >
              <h4 className="text-white font-semibold mb-4">{section.label}</h4>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeUp}
                    custom={idx * 4 + i + 5}
                  >
                    <a
                      href={item.href}
                      className="hover:text-indigo-400 transition-colors duration-150"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-10 pt-6 border-t border-gray-700 flex flex-col items-center text-gray-400"
          variants={fadeUp}
          custom={10}
        >
          <p className="text-center">
            © {year} Rohit Yadav. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/RohitBCA456"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="hover:text-white"
              aria-label="Email"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
