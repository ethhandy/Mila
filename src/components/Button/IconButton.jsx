const IconButton = ({ diameter = 0, color = '', bgColor = '', Icon = <></> }) => {
  return (
    <button
      className="flex items-center justify-center rounded-full"
      style={{ width: diameter, height: diameter, backgroundColor: bgColor, color }}
    >
      {Icon}
    </button>
  );
};

export default IconButton;
