import brand from "@/content/brand.json";
export default function BrandLogo({ className, style }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox={brand.viewBox}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {brand.paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          fill="currentColor"
          fillRule={path.fillRule}
          style={{ "--part": index }}
        />
      ))}
    </svg>
  );
}
