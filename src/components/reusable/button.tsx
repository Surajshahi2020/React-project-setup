import { cva } from "../../utils/cva";
import { twMerge } from "tailwind-merge";
import Loading from "./loading"; // Your spinner component
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "../../utils/cva";

// CVA styles for variants
const buttonStyles = cva(
  "flex items-center justify-center gap-2 transition-all duration-300 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
        danger: "bg-red-600 text-white hover:bg-red-700",
        dark: "bg-gray-800 text-white hover:bg-gray-900",
      },
      size: {
        small: "h-9 px-3 text-sm",
        medium: "h-12 px-4 text-base",
        large: "h-14 px-6 text-lg",
      },
      rounded: {
        small: "rounded-sm",
        medium: "rounded-md",
        large: "rounded-xl",
        full: "rounded-full",
      },
      block: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      rounded: "medium",
      block: false,
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  isLoading?: boolean;
  preIcon?: ReactNode;
  postIcon?: ReactNode;
}

export default function Button({
  variant,
  size,
  rounded,
  block,
  isLoading,
  preIcon,
  postIcon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(buttonStyles({ variant, size, rounded, block }), className)}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loading height={20} width={20} className="text-white" />
      ) : (
        <>
          {preIcon && <span>{preIcon}</span>}
          {children}
          {postIcon && <span>{postIcon}</span>}
        </>
      )}
    </button>
  );
}
