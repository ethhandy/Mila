const TextField = ({ placeholder = '', Icon = <></> }) => {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder={placeholder}
        className="pl-14 border border-gray rounded text-lg h-12 w-96"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      />
      <div className="absolute w-12 h-12 flex justify-center items-center">{Icon}</div>
    </div>
  );
};

export default TextField;
