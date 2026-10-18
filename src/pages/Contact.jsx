import { useState } from "react";
import { Github, Info, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import usePageMeta from "../components/usePageMeta.js";
import { site } from "../data/site.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.message.trim()) errors.message = "Please write a message.";
  else if (values.message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

function buildMailto({ name, email, message }) {
  const subject = `Portfolio message from ${name.trim()}`;
  const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const contactItems = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: MapPin, label: "Location", value: site.locationShort },
  { icon: Github, label: "GitHub", value: "Princebharti516", href: site.github, external: true },
  { icon: Linkedin, label: "LinkedIn", value: "princebharti49", href: site.linkedin, external: true },
];

export default function Contact() {
  usePageMeta(
    "Contact | Prince Kumar",
    "Get in touch with Prince Kumar via email, phone, GitHub, or LinkedIn."
  );

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [opened, setOpened] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    setOpened(false);
    // Re-validate a field only after it has shown an error, so typing feels calm.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field.
      const first = ["name", "email", "message"].find((k) => found[k]);
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    setOpened(true);
    window.location.href = buildMailto(values);
  };

  const field = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: `input ${errors[name] ? "input-error" : ""}`,
  });

  const error = (name) =>
    errors[name] && (
      <p id={`contact-${name}-error`} className="field-error" role="alert">
        {errors[name]}
      </p>
    );

  return (
    <>
      <PageHeader
        title="Let's Connect"
        subtitle="I'm always interested in connecting with fellow developers, discussing technology, and learning through new projects."
      />

      <section className="page-container page-section pb-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <ul className="space-y-3 lg:col-span-2">
            {contactItems.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <>
                  <span className="icon-tile">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{label}</span>
                    <span className="block break-words text-slate-100">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="card card-hover flex items-center gap-3 !p-4"
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-3 !p-4">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <form onSubmit={handleSubmit} noValidate className="card space-y-5 lg:col-span-3" aria-label="Contact form">
            <div>
              <label htmlFor="contact-name" className="label">
                Name
              </label>
              <input type="text" autoComplete="name" placeholder="Your name" {...field("name")} />
              {error("name")}
            </div>
            <div>
              <label htmlFor="contact-email" className="label">
                Email
              </label>
              <input type="email" autoComplete="email" placeholder="you@example.com" {...field("email")} />
              {error("email")}
            </div>
            <div>
              <label htmlFor="contact-message" className="label">
                Message
              </label>
              <textarea rows={6} placeholder="How can I help?" {...field("message")} />
              {error("message")}
            </div>

            <button type="submit" className="btn btn-primary w-full sm:w-auto">
              <Send size={16} aria-hidden="true" /> Open in Email App
            </button>

           
            <div aria-live="polite">
              {opened && (
                <p className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                  Your email app should now be open. Press Send there to deliver your message — nothing has been sent
                  yet.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
