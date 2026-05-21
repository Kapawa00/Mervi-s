"use client";

export default function StatusModal({
  type = "success", // success | error
  title,
  message,
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  const accent = isSuccess ? "#7A8B7A" : "#c0392b";

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div
        className="bg-white rounded-3xl p-8 text-center w-[350px] animate-fadeIn"
        style={{ border: "1px solid #ECE7E0" }}
      >
        {/* SVG Animation */}
        <svg
          viewBox="0 0 130.2 130.2"
          className="w-[100px] mx-auto"
        >
          <circle
            className="path circle"
            fill="none"
            stroke={accent}
            strokeWidth="6"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />

          {isSuccess ? (
            <polyline
              className="path check"
              fill="none"
              stroke={accent}
              strokeWidth="6"
              strokeLinecap="round"
              points="100.2,40.2 51.5,88.8 29.8,67.5"
            />
          ) : (
            <>
              <line
                className="path line"
                fill="none"
                stroke={accent}
                strokeWidth="6"
                strokeLinecap="round"
                x1="34.4"
                y1="37.9"
                x2="95.8"
                y2="92.3"
              />
              <line
                className="path line"
                fill="none"
                stroke={accent}
                strokeWidth="6"
                strokeLinecap="round"
                x1="95.8"
                y1="38"
                x2="34.4"
                y2="92.2"
              />
            </>
          )}
        </svg>

        <h4
          className="mt-4 text-xl font-semibold"
          style={{ color: accent }}
        >
          {title}
        </h4>

        <p className="mt-3 text-sm" style={{ color: "#6B6B6B" }}>
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-5 px-5 py-2 text-white rounded-lg transition"
          style={{ backgroundColor: accent }}
        >
          OK
        </button>
      </div>
    </div>
  );
}