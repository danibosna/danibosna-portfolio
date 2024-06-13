type SpanResizerProps = {
    handleResize: (e: MouseEvent) => void;
    setIsResizing: (val: boolean) => void;
    isResizing: boolean;
};
export default function SpanResizer({ handleResize, isResizing, setIsResizing, ...props }: SpanResizerProps): import("react/jsx-runtime").JSX.Element;
export {};
