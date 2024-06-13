import * as React from "react";

import { cn } from "@/utils/utils";

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  [key: string]: any; // Permitir cualquier prop
}

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  darkTable?: boolean;
}

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    maxH?: string;
    darkTable?: boolean;
  }
>(({ className, maxH, darkTable, ...props }, ref) => (
  <div
    className={cn(
      "relative table-container overflow-y-auto w-full rounded-b-[35px] rounded-t-[30px]",
      darkTable ? "bg-primary" : "bg-blue-100",
      maxH,
    )}
  >
    <table
      ref={ref}
      className={cn("min-w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn(className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, index, darkTable, ...props }, ref) => {
    const evenRowBg = darkTable ? "bg-white bg-opacity-30" : "bg-blue-50";
    const oddRowBg = darkTable ? "bg-transparent" : "bg-blue-100";

    return (
      <tr
        ref={ref}
        className={cn(
          `transition-colors border-none`,
          index % 2 === 0 ? evenRowBg : oddRowBg,
          darkTable ? "hover:bg-transparent" : "hover:bg-white",
          className,
        )}
        {...props}
      />
    );
  },
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-transparent [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, darkTable, ...props }, ref) => (
    <td
      ref={ref}
      className={cn(
        "align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        darkTable ? "border-none" : "border-r-white border-r-[5px]",
        className,
      )}
      {...props}
    />
  ),
);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
