import { Link } from "react-router-dom";

const variants = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

/**
 * One button for every use:
 *  - `to`   → internal route (React Router Link)
 *  - `href` → external link (opens in a new tab securely) or mailto:/tel:
 *  - neither → regular <button>
 */
export default function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const classes = `${variants[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
