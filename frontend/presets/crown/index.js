// presets/crown/index.js - Enhanced with more component coverage

export default {
  // Global theme styles - will apply to all components
  global: {
    css: `
      .theme-transition {
        transition: background-color 0.3s ease, color 0.3s ease, 
          border-color 0.3s ease, box-shadow 0.3s ease;
      }
    `,
  },

  // Button styling
  button: {
    root: ({ props }) => ({
      class: [
        // Base styles that apply to all buttons
        "theme-transition rounded-md focus:outline-none focus:ring-2",

        // Button types based on severity
        {
          // Primary style (default)
          "bg-action hover:bg-action-hover text-white":
            props.severity === "primary" || !props.severity,

          // Success style
          "bg-success hover:bg-success/80 text-white":
            props.severity === "success",

          // Warning style
          "bg-warning hover:bg-warning/80 text-white":
            props.severity === "warning",

          // Danger/Error style
          "bg-error hover:bg-error/80 text-white": props.severity === "danger",

          // Info style
          "bg-info hover:bg-info/80 text-black": props.severity === "info",

          // Text button style
          "bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-primary-text":
            props.text === true,

          // Outlined button style
          "bg-transparent border border-action text-action hover:bg-action/10":
            props.outlined === true,

          // Disabled state
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
    thead: {
      class: "",
    },
    tbody: {
      class: "",
    },
    tfoot: {
      class: "",
    },
    // Individual row styling can be handled here
    bodyRow: ({ context }) => ({
      class: [
        "transition-colors duration-200",
        // Hover state
        "hover:bg-black/5 dark:hover:bg-white/5",
        // Striped rows
        {
          "bg-surface-bg": context.index % 2 === 0,
          "bg-surface-bg-50": context.index % 2 === 1,
        },
      ],
    }),
    // Header cell styling
    headerCell: {
      class: "text-primary-text font-semibold p-3 border-b border-border",
    },
    // Body cell styling
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

  // NEW: InputGroup for form layouts
  inputgroup: {
    root: {
      class: "flex theme-transition",
    },
    input: {
      class: "flex-1 rounded-none first:rounded-l last:rounded-r",
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
    menuitem: {
      class: "",
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

  // NEW: Dialog styling
  dialog: {
    root: {
      class: "bg-surface-bg rounded-lg shadow-lg border border-border",
    },
    header: {
      class: "p-4 border-b border-border flex items-center justify-between",
    },
    title: {
      class: "text-primary-text font-medium text-lg",
    },
    content: {
      class: "p-4 text-primary-text",
    },
    footer: {
      class: "p-4 border-t border-border flex justify-end space-x-2",
    },
    closeButton: {
      class: "text-secondary-text hover:text-primary-text transition-colors",
    },
    mask: {
      class: "bg-black/40 theme-transition",
    },
  },

  // NEW: Calendar styling
  calendar: {
    root: {
      class: "bg-surface-bg border border-border rounded theme-transition",
    },
    input: {
      class:
        "bg-surface-bg text-primary-text border border-border rounded p-2 focus:border-action focus:outline-none w-full",
    },
    panel: {
      class: "bg-surface-bg border border-border rounded shadow-md",
    },
    header: {
      class: "p-2 border-b border-border",
    },
    footer: {
      class: "p-2 border-t border-border",
    },
    monthHeader: {
      class: "py-2 font-medium text-primary-text",
    },
    yearHeader: {
      class: "py-2 font-medium text-primary-text",
    },
    decade: {
      class: "py-2 font-medium text-primary-text",
    },
    dayHeader: {
      class: "p-2 text-center text-secondary-text",
    },
    day: ({ context }) => ({
      class: [
        "p-2 rounded-full transition-colors text-center",
        {
          "text-primary-text hover:bg-black/5 dark:hover:bg-white/10":
            !context.selected && context.selectable,
          "bg-action text-white": context.selected,
          "text-secondary-text": !context.selectable,
          "text-error": context.today,
        },
      ],
    }),
  },

  // NEW: Toast notification styling
  toast: {
    root: {
      class:
        "bg-surface-bg border border-border rounded shadow-lg theme-transition",
    },
    message: ({ props }) => ({
      class: [
        "p-4 border-l-4",
        {
          "border-success": props.severity === "success",
          "border-warning": props.severity === "warn",
          "border-error": props.severity === "error",
          "border-info": props.severity === "info",
        },
      ],
    }),
    title: {
      class: "font-medium text-primary-text mb-1",
    },
    content: {
      class: "text-secondary-text",
    },
    icon: ({ props }) => ({
      class: [
        "mr-2",
        {
          "text-success": props.severity === "success",
          "text-warning": props.severity === "warn",
          "text-error": props.severity === "error",
          "text-info": props.severity === "info",
        },
      ],
    }),
    closeButton: {
      class: "text-secondary-text hover:text-primary-text transition-colors",
    },
  },

  // NEW: Avatar styling
  avatar: {
    root: ({ props }) => ({
      class: [
        "inline-flex items-center justify-center overflow-hidden",
        {
          "rounded-full": props.shape === "circle",
          rounded: props.shape === "square",
          "h-8 w-8": props.size === "normal",
          "h-12 w-12": props.size === "large",
          "h-6 w-6": props.size === "small",
        },
      ],
    }),
    image: {
      class: "w-full h-full object-cover",
    },
  },
};
