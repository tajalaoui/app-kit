// presets/crown/index.js
export default {
  // Button styling
  button: {
    root: ({ props }) => ({
      class: [
        "theme-transition rounded-md focus:outline-none focus:ring-2",
        {
          "bg-action hover:bg-action-hover text-white":
            props.severity === "primary" || !props.severity,
          "bg-success hover:bg-success/80 text-white":
            props.severity === "success",
          "bg-warning hover:bg-warning/80 text-white":
            props.severity === "warning",
          "bg-error hover:bg-error/80 text-white": props.severity === "danger",
          "bg-info hover:bg-info/80 text-black": props.severity === "info",
          "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-primary-text":
            props.text === true,
          "bg-transparent border border-action text-action hover:bg-action/10":
            props.outlined === true,
          "bg-disabled text-white/70 cursor-not-allowed pointer-events-none":
            props.disabled === true,
        },
      ],
    }),
  },

  // Card styling
  card: {
    root: {
      class:
        "bg-surface-bg border border-border rounded shadow-sm theme-transition",
    },
    title: {
      class: "text-primary-text font-medium text-lg mb-2",
    },
    subtitle: {
      class: "text-secondary-text text-sm mb-3",
    },
    content: {
      class: "text-primary-text",
    },
    footer: {
      class: "border-t border-border pt-3 mt-3",
    },
  },

  // DataTable styling
  datatable: {
    root: {
      class: "theme-transition",
    },
    header: {
      class: "p-3 border-b border-border bg-surface-bg",
    },
    table: {
      class: "w-full",
    },
    bodyRow: ({ context }) => ({
      class: [
        "transition-colors duration-200",
        "hover:bg-black/5 dark:hover:bg-white/5",
        {
          "bg-surface-bg": context.index % 2 === 0,
          "bg-surface-bg-50": context.index % 2 === 1,
        },
      ],
    }),
    headerCell: {
      class: "text-primary-text font-semibold p-3 border-b border-border",
    },
    bodyCell: {
      class: "p-3 border-b border-border/50",
    },
  },

  // Input styling
  inputtext: {
    root: {
      class:
        "bg-surface-bg text-primary-text border border-border rounded p-2 focus:border-action focus:ring-2 focus:ring-action/20 outline-none theme-transition w-full",
    },
  },

  // Dropdown styling
  dropdown: {
    root: {
      class: "theme-transition",
    },
    input: {
      class: "bg-surface-bg text-primary-text border border-border rounded",
    },
    panel: {
      class: "bg-surface-bg border border-border rounded shadow-md",
    },
    item: ({ context }) => ({
      class: [
        "cursor-pointer p-2 text-primary-text rounded-sm transition-colors",
        {
          "bg-action/10 text-action": context.selected,
          "hover:bg-black/5 dark:hover:bg-white/10": !context.selected,
        },
      ],
    }),
  },

  // Tag styling
  tag: {
    root: ({ props }) => ({
      class: [
        "inline-flex items-center px-2 py-1 text-xs rounded",
        {
          "bg-success/20 text-success": props.severity === "success",
          "bg-warning/20 text-warning": props.severity === "warning",
          "bg-error/20 text-error": props.severity === "danger",
          "bg-info/20 text-primary-text":
            props.severity === "info" || !props.severity,
        },
      ],
    }),
  },

  // Menu styling
  menu: {
    root: {
      class:
        "bg-surface-bg border border-border rounded shadow-md theme-transition",
    },
    menu: {
      class: "p-1",
    },
    content: ({ context }) => ({
      class: [
        "cursor-pointer rounded-sm p-2 transition-colors flex items-center",
        {
          "hover:bg-black/5 dark:hover:bg-white/10": !context.focused,
          "bg-action/10 text-action": context.focused,
        },
      ],
    }),
    label: {
      class: "text-primary-text ml-2",
    },
    icon: {
      class: "text-action",
    },
    separator: {
      class: "border-t border-border my-1",
    },
  },
};
