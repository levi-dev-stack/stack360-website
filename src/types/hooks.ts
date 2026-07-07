export type Step = {
  delay: number;
  callback: () => void;
};

export type WindowEventHandlerMap = {
  [K in keyof WindowEventMap]?: (event: WindowEventMap[K]) => void;
};
