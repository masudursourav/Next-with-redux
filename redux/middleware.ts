import { createLogger } from "redux-logger";

const middleware = [
  createLogger({
    collapsed: true,
    diff: true,
  }),
];

export { middleware };
