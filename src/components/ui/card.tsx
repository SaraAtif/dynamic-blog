import * as React from 'react'
import {cn } from "../../lib/utilities";

const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
  ref={ref}
  className={cn(
    "rounded-xl border bg-card text-card-foreground shadow",
    className
  )}
  {...props}/>
))

Card.displayName="Card"
const CardHeader = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
> (({ className, ...props }, ref) => (
  <div
  ref={ref}
  className={cn(
    "flex flex-col p-6 space-y-1.5",
    className
  )}
  {...props}/>
))

CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLHeadingElement>
> (({ className, ...props }, ref) => (
  <h3
  ref={ref}
  className={cn( "font-samibold leading-none tracking-tight",
  className)}
  {...props}/>
))
CardTitle.displayName = "CardTitle"


const CardDescription = React.forwardRef<
HTMLParagraphElement,
React.HTMLAttributes<HTMLParagraphElement>
> (({ className, ...props }, ref) => (
  <h3
  ref={ref}
  className={cn( "text-sm text-muted-foreground",className)}
  {...props}/>
))
CardDescription.displayName = "CardDescription"



const CardContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
> (({ className, ...props }, ref) => (
  <div
  ref={ref}
  className={cn( "p-6 pt-0",className)}
  {...props}/>
))
CardContent.displayName = "CardContent"



const CardFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
> (({ className, ...props }, ref) => (
  <div
  ref={ref}
  className={cn( "p-6 pt-0 flex items-center",className)}
  {...props}/>
))
CardFooter.displayName = "CardFooter"


export {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter}


