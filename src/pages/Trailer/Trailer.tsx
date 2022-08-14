export const Trailer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="h-16 bg-trailerColor w-full mb-8">
        <h2 className="text-center text-4xl font-bold py-3">Trailer</h2>
      </div>
      <div className="wrapper">
        <video
          src={require("../../video/testvideo.webm")}
          width="w-full"
          height="300"
          //   controls="controls"
          //   autoplay="true"
        />
        <p className="flex justify-center items-center py-10 text-lg">
          All my project you can see on my
          <a
            href="https://github.com/kkiirill"
            target="_blank"
            rel="noreferrer"
            className="pl-1 text-center text-currentRed hover:animate-bounce"
          >
            github
          </a>
        </p>
      </div>
    </div>
  );
};
