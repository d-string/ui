import { Slot } from "@radix-ui/react-slot";
import { IconLoader, IconProps } from "@tabler/icons-react";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed",
  {
    defaultVariants: {
      size: "lg",
      variant: "primary",
    },
    variants: {
      size: {
        lg: "h-12 w-40 rounded-md px-14 text-sm",
        md: "h-11 w-32 rounded-md px-10 text-xs",
        sm: "h-11 w-24 rounded-md px-6 text-xxs",
      },
      variant: {
        primary:
          "bg-primary-500 text-white hover:enabled:shadow-lg focus:bg-primary-400 disabled:text-neutral-500 disabled:bg-neutral-200",
      },
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  rightIcon?: React.FC<IconProps>;
  size?: "lg" | "md" | "sm";
  variant?: "primary";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      disabled,
      fullWidth,
      loading,
      rightIcon: RightIcon,
      size,
      variant = "primary",
      ...props
    },
    ref,
  ): JSX.Element => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }), fullWidth && "w-full")}
        ref={ref}
        {...props}
        disabled={Boolean(loading) || disabled}
      >
        {loading ? <IconLoader className="mr-2 h-4 w-4 animate-spin" /> : null}
        {props.children}
        {RightIcon ? <RightIcon className="ml-2" size={16} /> : null}
      </Comp>
    );
  },
);

Button.displayName = "Button";
