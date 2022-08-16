import useWindowDimensions from "../hooks/useWindowDimensions";

export const SliderCount = () => {
  const { width } = useWindowDimensions();
  let sliderCount = 0;
  if (width > 0) {
    sliderCount = 1;
  }
  if (width > 640) {
    sliderCount = 2;
  }
  if (width > 768) {
    sliderCount = 3;
  }
  if (width > 1440) {
    sliderCount = 5;
  }
  return sliderCount;
};
