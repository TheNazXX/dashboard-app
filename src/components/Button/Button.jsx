
export const Button = ({title, color, backgroundColor, borderRadius, size, width}) => {
  return (
    <button
      type="button"
      style={{
        width: width ? width : '',
        backgroundColor ,
        color,
        borderRadius
      }}
      className={`text-${size ? size : "md"} p-3 hover:drop-shadow-xl`}
    >
      {title}
    </button>
  );
};
