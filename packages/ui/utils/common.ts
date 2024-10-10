import { type ClassValue, clsx } from "clsx";
import { createTailwindMerge, getDefaultConfig, mergeConfigs } from "tailwind-merge";

const twMerge = createTailwindMerge(getDefaultConfig, (config) =>
  mergeConfigs<"font-size">(config, {
    extend: {
      classGroups: {
        "font-size": ["text-xxs"],
      },
    },
  }),
);

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
