interface GeneratorCardProps {
  title: string;
  capacity: string;
  features: string[];
  popular?: boolean;
}

export default function GeneratorCard({
  title,
  capacity,
  features,
  popular = false,
}: GeneratorCardProps) {
  return (
    <div
      className={`
        relative rounded-2xl p-8 flex flex-col justify-between
        border transition-all duration-300 hover:-translate-y-2
        ${
          popular
            ? `
              bg-[#FFF5F5] border-[#C4161C] shadow-2xl
              dark:bg-[#1A0F12] dark:border-[#C4161C]
            `
            : `
              bg-white border-gray-200 shadow-lg
              dark:bg-[#0F172A] dark:border-[#1F2937]
            `
        }
      `}
    >
      {/* POPULAR BADGE */}
      {popular && (
        <span
          className="
            absolute -top-4 right-6
            bg-[#C4161C] text-white
            text-xs px-4 py-1 rounded-full
            font-semibold tracking-wide shadow-lg
          "
        >
          Most Popular
        </span>
      )}

      {/* CONTENT */}
      <div>
        <h3 className="text-2xl font-bold text-[#C4161C] mb-2">
          {capacity}
        </h3>

        <p className="font-medium mb-6 text-[#1F2937] dark:text-gray-300">
          {title}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-sm text-[#111827] dark:text-gray-200"
            >
              <span className="text-[#C4161C] text-lg">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ACTION BUTTON */}
      <a
        href="/contact"
        className={`
          text-center font-semibold py-3 rounded-lg transition-all duration-300
          ${
            popular
              ? `
                bg-[#C4161C] text-white
                hover:bg-red-700 shadow-md
              `
              : `
                border-2 border-[#1F2937] text-[#1F2937]
                hover:bg-[#1F2937] hover:text-white
                dark:border-gray-400 dark:text-gray-200
                dark:hover:bg-white dark:hover:text-black
              `
          }
        `}
      >
        View Details
      </a>
    </div>
  );
}
