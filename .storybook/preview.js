import {SimpleModal} from "../src/SimpleModal";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storyContainers: [
    {
      id: "modal",
      label: "Modal",
      container: SimpleModal,
    },
    {
      id: "inline",
      label: "Inline",
      container: ({ children }) => (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0cf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      ),
    },
  ],
}
