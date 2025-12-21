import type { FC, ReactNode } from "react";

type ImageTextContainerProps = {
  imageSrc: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  reverse?: boolean; // image left or right
};

const ImageTextContainer: FC<ImageTextContainerProps> = ({
  imageSrc,
  imageAlt = "image",
  title,
  description,
  children,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full md:w-48 h-36 md:h-36 object-cover rounded-lg flex-shrink-0"
      />

      {/* Text content */}
      <div className="flex flex-col justify-center gap-2 md:ml-4 md:mr-4 flex-1">
        {title && <h2 className="text-lg font-semibold text-gray-800">{title}</h2>}
        {description && <p className="text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default ImageTextContainer;
