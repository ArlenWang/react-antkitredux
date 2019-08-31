import React from 'react'

const SvgComponent = props => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    width={200}
    height={200}
    {...props}
  >
    <defs>
      <style>
        {
          '@font-face{font-family:taokezhushoufont;src:url(data:application/x-font-ttf;base64,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) format("truetype")}'
        }
      </style>
    </defs>
    <path d="M967.617 531.386c0-244.532-200.372-442.762-447.545-442.762-247.171 0-447.544 198.23-447.544 442.762 0 1.44.017 2.878.03 4.315-.014 1.437-.03 2.876-.03 4.317 0 244.531 200.373 442.761 447.544 442.761 247.173 0 447.545-198.23 447.545-442.76 0-1.442-.016-2.88-.03-4.318.014-1.437.03-2.874.03-4.315zm-247.589 44.981a54.661 54.661 0 0 1-4.68 4.16l-240.133 237.07c-21.352 21.351-55.968 21.351-77.32 0s-21.35-55.966 0-77.318l205.897-202.828-205.895-206.328c-21.35-21.35-21.35-55.966 0-77.317 21.35-21.35 55.966-21.35 77.319 0l240.136 240.567a55.318 55.318 0 0 1 4.676 4.16c10.741 10.74 16.073 24.838 16.007 38.918.066 14.075-5.266 28.173-16.007 38.916z" />
  </svg>
)

export default SvgComponent
