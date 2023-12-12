export type HandleFunction = () => void;

export interface PanelProps {
  handleNotificationVisibility: HandleFunction;
  handleControlVisibility: HandleFunction;
}