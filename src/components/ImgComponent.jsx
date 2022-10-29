function ImgComponent({ url, alt }) {
  return (
    <img
      className="absolute z-0 object-cover h-full w-full"
      src={`http://image.tmdb.org/t/p/original${url}`}
      alt={alt}
    />
  );
}

export default ImgComponent;
