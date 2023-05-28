// eslint-disable-next-line
const ButtonDarkMode = ({ children, className, onClick }) => {
  return (
    <button
      className={`flex md:inline-block  p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDarkMode;
