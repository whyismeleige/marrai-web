export function AiDiscoveryVisual() {
  return (
    <div className="relative h-48 w-full overflow-hidden sm:h-72 md:h-[28rem] lg:h-[20rem]">
      <svg
        className="absolute inset-0 size-full text-chart-2"
        viewBox="0 0 720 420"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="ai-discovery-growth-fill"
            x1="360"
            y1="74"
            x2="360"
            y2="420"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="currentColor" stopOpacity="0.46" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 210C58 197 95 185 139 169C176 156 214 167 260 158C315 147 346 121 401 111C442 103 471 113 510 100C575 78 632 72 720 65V420H0V210Z"
          fill="url(#ai-discovery-growth-fill)"
        />
        <path
          d="M0 210C58 197 95 185 139 169C176 156 214 167 260 158C315 147 346 121 401 111C442 103 471 113 510 100C575 78 632 72 720 65"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
