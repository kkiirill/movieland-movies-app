export const Series: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <img
        src={require("../../images/bg-batman.png")}
        className="w-full h-full absolute top-0 left-0 z-1"
        alt=""
      />
      <div className="fixed top-0 left-0  bg-black/60 opacity-1 z-10"></div>

      <div className="z-50 flex flex-col justify-center items-center text-white w-full h-screen">
        <span className="text-bold">Oooppss</span>
        <h1 className="text-6xl">
          This page <b>is</b> under developed
        </h1>
        <p className="pt-2">I guess this page needs a hero</p>
        <img
          src={require("../../images/batman.png")}
          className="block w-14 h-14 hover:scale-150"
          alt=""
        />
      </div>
    </div>
  );
};
