import VideoPlayer from "./VideoPlayer";

const videoJsOptions = {
  sources: [
    {
      src: require("../../video/testvideo.mp4"),
      type: "video/mp4",
      width: "w-full",
      height: "h-full",
    },
  ],
};

export const Trailer: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center xl:justify-start items-center lg:pt-10 pb-10">
      <div className="h-16 bg-trailerColor w-full mb-8">
        <h2 className="text-center text-4xl font-bold py-3">Trailer</h2>
      </div>
      <div className="wrapper w-full h-full flex justify-center items-center">
        <VideoPlayer options={videoJsOptions} />
      </div>
    </div>
  );
};
