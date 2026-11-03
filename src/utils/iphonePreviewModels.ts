import type { ImageMetadata } from "astro";
import proMaxBezel from "@/assets/images/bezels/iphone-18-pro-max-burgundy.png";
import proMaxMask from "@/assets/images/bezels/iphone-18-pro-max-burgundy-mask.png";
import proMaxBounds from "@/assets/images/bezels/iphone-18-pro-max-burgundy-mask.json";
import duoBezel from "@/assets/images/bezels/iphone-duo-night-sky.png";
import duoMask from "@/assets/images/bezels/iphone-duo-night-sky-mask.png";
import duoBounds from "@/assets/images/bezels/iphone-duo-night-sky-mask.json";

interface IPhonePreviewModel {
  bezel: ImageMetadata;
  mask: ImageMetadata;
  bounds: { left: number; top: number; width: number; height: number };
  maxWidth: string;
  imageWidth: number;
}

export const iphonePreviewModels = {
  iPhone18ProMax: {
    bezel: proMaxBezel,
    mask: proMaxMask,
    bounds: proMaxBounds,
    maxWidth: "15.7rem",
    imageWidth: 500,
  },
  iPhoneDuo: {
    bezel: duoBezel,
    mask: duoMask,
    bounds: duoBounds,
    maxWidth: "23.3rem",
    imageWidth: 750,
  },
} satisfies Record<string, IPhonePreviewModel>;

export type IPhoneModel = keyof typeof iphonePreviewModels;
