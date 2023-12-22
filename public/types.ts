export type HandleFunction = () => void;

export interface ContextProps {
  handleControlPanel: HandleFunction;
  handleNotificationCenter: HandleFunction;
}