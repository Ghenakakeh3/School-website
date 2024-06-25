import * as React from "react"



const Table =React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto ">
    <table
      ref={ref}
      className={` ${className} table-auto w-full overflow-x-auto rounded-md  `}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader =React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={`${className ? className : "" } bg-sky-900  w-full text-white`} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody =React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={ className}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter =React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={className}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow =React.forwardRef(({ className,rowIndex, ...props }, ref) => (
  <tr
    ref={ref}
    className={`${className ? className : "" }  ${rowIndex % 2 === 0 ? "bg-myGray-200 border-b " : ""}`
      
    }
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead =React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={
      className
}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={`${className ? className : "" } text-center py-4 text-sm `}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption =React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={ className}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
