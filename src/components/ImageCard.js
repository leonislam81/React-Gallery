import React from "react";

function ImageCard({ image }) {
  const tags = image.tags.split(",");
  return (
    <div className="shadow-lg">
      <img src={image.webformatURL} alt={image.type} className="w-full" />
      <div className="px-4 py-3">
        <h4 className="text-lg font-light text-green-400">
          Photo by <strong>{image.user}</strong>
        </h4>
        <ul className="my-4 space-y-1">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
        <div className="flex space-x-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
