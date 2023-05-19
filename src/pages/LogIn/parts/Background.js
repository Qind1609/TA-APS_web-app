

const Background = ({ children, src }) => {
  return (
    <div className="background">
      <div className={`absolute top-0 w-full h-full bg-[url(${src})]`}>
        {children}
      </div>
    </div>
  );
}

export default Background;