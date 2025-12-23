export const ThinkingLoader = () => (
  <div className="flex items-center gap-2 text-accent">
    <svg
      width="24"
      height="6"
      viewBox="0 0 24 6"
      fill="currentColor"
    >
      <circle cx="3" cy="3" r="3">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="12" cy="3" r="3">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="21" cy="3" r="3">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="1.4s"
          begin="0.4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <span className="text-xs">Thinking…</span>
  </div>
);
