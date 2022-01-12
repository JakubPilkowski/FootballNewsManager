export type ViewLayout = {
  x: number;
  y: number;
  width: number;
  height: number;
  pageX: number;
  pageY: number;
};

type ClickAwayProps = {
  childrenIds: number[];
  onClickOutside: () => void;
  show: boolean;
};

export default ClickAwayProps;
