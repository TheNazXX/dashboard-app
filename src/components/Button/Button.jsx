
export const Button = ({title, color, backgroundColor, borderRadius, size}) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor ,
        color,
        borderRadius
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {title}
    </button>
  );
};
