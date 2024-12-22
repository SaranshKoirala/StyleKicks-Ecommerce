function NoItems() {
  return (
    <div className="h-[660px] flex justify-center items-center">
      <h1 className="text-4xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center p-4">
        No Items Found :(
      </h1>
      <img src="/cat.png" height="200px" />
    </div>
  );
}

export default NoItems;
