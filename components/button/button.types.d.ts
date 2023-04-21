import { HTMLProps } from "../../core";
export type ButtonVariant = "default" | "primary" | "danger";
export type ButtonSize = "normal" | "small" | "large";
export type ButtonLoadingType = "text" | "spinner";
export interface ButtonProps extends HTMLProps<"button"> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    square?: boolean;
    isLoading?: boolean;
    loadingType?: ButtonLoadingType;
    loadingText?: string;
    loadingSpinnerWidth?: number;
    loadingSpinnerSize?: number;
    outline?: boolean;
}
