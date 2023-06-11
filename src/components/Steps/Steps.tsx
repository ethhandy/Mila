const Steps = ({ total = 8, current = 0 }) => {
  const loop = [];

  for (let i = 0; i < total; i++) loop.push('');

  return (
    <div className="flex items-center justify-between">
      {loop.map((item, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full flex items-center justify-center ${
            current === index ? 'border border-[#d6f3ff]' : ''
          }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#D5DBE3]" />
        </div>
      ))}
    </div>
  );
};

export default Steps;
