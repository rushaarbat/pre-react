import Radium from "radium";

const RadiumDemo = () => {
  return (
    <div style={[styles.block]}>
      <h1> In RadiumDemo</h1>
      <button style={[styles.baseButton, styles.primaryButton]}>
        Primary Button
      </button>
      <br />
      <button style={[styles.baseButton, styles.secondaryButton]}>
        Secondary Button
      </button>
    </div>
  );
};
const styles = {
  block: {
    backgroundColor: "#557a95",
  },
  baseButton: {
    backgroundColor: "red",
  },
  primaryButton: {
    backgroundColor: "5d5c61",
  },

  secondaryButton: {
    backgroundColor: "379683",
  },
};

export default Radium(RadiumDemo);
