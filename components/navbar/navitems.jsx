import Link from "next/link";

export default function NavItem({ children, variants, type }) {
  const variant = {
    fill: "opacity-100",
    fade: "opacity-50 hover:opacity-100",
  };

  if (type === "regular") {
    return (
      <div
        className={`font-Poppins transition-all ${
          variants ? (variants == "fade" ? variant.fade : variant.fill) : ""
        }`}
      >
        <span className="cursor-pointer">{children}</span>
      </div>
    );
  } else
    return (
      <div
        className={`font-Poppins transition-all ${
          variants ? (variants == "fade" ? variant.fade : variant.fill) : ""
        }`}
      >
        <Link href="/">{children}</Link>
      </div>
    );
}
