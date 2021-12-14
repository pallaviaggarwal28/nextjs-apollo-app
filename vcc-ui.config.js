import { styleRenderer } from "vcc-ui";

export function getRenderer() {
  const renderer = styleRenderer();
  renderer.renderStatic(
    {
      margin: 0,
      padding: 0
    },
    "body"
  );
  return renderer;
}
