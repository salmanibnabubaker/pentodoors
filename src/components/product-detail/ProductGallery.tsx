"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  gallery: string[];
  name: string;
}

export default function ProductGallery({
  gallery,
  name,
}: ProductGalleryProps) {
  const [activeImage, setActiveImage] =
    useState(gallery[0]);

  return (
    <div>

      <div
        className="
          overflow-hidden
          bg-neutral-50
          border
        "
      >
        <Image
          src={activeImage}
          alt={name}
          width={1200}
          height={1200}
          priority
          className="
            w-full
            aspect-square
            object-cover
            hover:scale-105
            transition-transform
            duration-700
          "
        />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-5 pt-8">

        {gallery.map((image, index) => {
          const isActive =
            image === activeImage;

          return (
            <button
              key={index}
              onClick={() =>
                setActiveImage(image)
              }
              className={`
                overflow-hidden
                transition-all
                border
                ${
                  isActive
                    ? "border-black ring-1 ring-black"
                    : "border-neutral-200 hover:border-neutral-400"
                }
              `}
            >
              <Image
                src={image}
                alt={`${name} ${index + 1}`}
                width={300}
                height={300}
                className="
                  aspect-square
                  w-full
                  object-cover
                "
              />
            </button>
          );
        })}

      </div>

    </div>
  );
}