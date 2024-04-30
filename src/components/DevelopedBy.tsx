const developedBy_style: React.CSSProperties = {
  height: "50px",
  // background: "red",
  borderStyle: "solid",
  borderWidth: "1px",
  display: "flex",
  alignItems: "center",
  padding: "10px",
};

export const DevelopedBy = () => {
  return (
    <div style={developedBy_style}>
      Developed by Eng: &#160;{" "}
      <a href="https://rami.sd" target="_blank">
        <b>Rami Mohamed</b>
      </a>
    </div>
  );
};
