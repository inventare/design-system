import { SpinnerProps } from "./spinner.types";

export const Spinner = (props: SpinnerProps) => {
  const { color, size, width } = props;

  const styles = {
    "--inventare-spinner-color": color,
    "--inventare-spinner-size": `${size}px`,
    "--inventare-spinner-width": `${width}px`,
  };

  return (
    <div className="spinner" data-testid="spinner" style={styles as any}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
