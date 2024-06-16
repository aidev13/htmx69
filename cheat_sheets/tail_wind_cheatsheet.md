
# Tailwind CSS Cheat Sheet

---

## Setup and Configuration
- **CDN link** `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.1/dist/tailwind.min.css" rel="stylesheet">`

- **Install via npm**: `npm install tailwindcss`
- **Generate config file**: `npx tailwindcss init`

---

## Container
- `container`: Applies a fixed-width layout.

---

## Spacing
- **Margin**: `m-{size}`, `mt-{size}`, `mr-{size}`, `mb-{size}`, `ml-{size}`
  - Sizes: `0`, `1`, `2`, `4`, `8`, `16`, etc.
- **Padding**: `p-{size}`, `pt-{size}`, `pr-{size}`, `pb-{size}`, `pl-{size}`
  - Sizes: `0`, `1`, `2`, `4`, `8`, `16`, etc.

---

## Flexbox
- **Display**: `flex`, `inline-flex`
- **Direction**: `flex-row`, `flex-col`
- **Justify Content**: `justify-start`, `justify-center`, `justify-end`, `justify-between`
- **Align Items**: `items-start`, `items-center`, `items-end`
- **Align Content**: `content-start`, `content-center`, `content-end`
- **Wrap**: `flex-wrap`, `flex-nowrap`

---

## Grid
- **Display**: `grid`
- **Template Columns**: `grid-cols-{n}`
- **Gap**: `gap-{size}`

---

## Typography
- **Font Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, etc.
- **Font Weight**: `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`
- **Text Align**: `text-left`, `text-center`, `text-right`, `text-justify`
- **Line Height**: `leading-none`, `leading-tight`, `leading-normal`, `leading-loose`

---

## Colors
- **Text Color**: `text-{color}-{shade}`
- **Background Color**: `bg-{color}-{shade}`
  - Example: `text-blue-500`, `bg-red-200`
- **Border Color**: `border-{color}-{shade}`
  - Example: `border-gray-300`

---

## Background
- **Background Color**: `bg-{color}-{shade}`
- **Background Image**: `bg-none`, `bg-gradient-to-r`, `bg-gradient-to-l`
- **Background Position**: `bg-center`, `bg-top`, `bg-bottom`
- **Background Size**: `bg-cover`, `bg-contain`

---

## Borders
- **Border Width**: `border`, `border-0`, `border-2`, `border-4`, `border-8`
- **Border Radius**: `rounded-none`, `rounded-sm`, `rounded`, `rounded-md`, `rounded-lg`, `rounded-full`
- **Border Style**: `border-solid`, `border-dashed`, `border-dotted`

---

## Shadows
- **Box Shadow**: `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`

---

## Sizing
- **Width**: `w-{fraction}`, `w-auto`, `w-full`, `w-screen`
  - Example: `w-1/2`, `w-1/3`, `w-1/4`
- **Height**: `h-{fraction}`, `h-auto`, `h-full`, `h-screen`
  - Example: `h-1/2`, `h-1/3`, `h-1/4`
- **Max Width**: `max-w-{size}`
- **Max Height**: `max-h-{size}`

---

## Positioning
- **Position**: `static`, `relative`, `absolute`, `fixed`, `sticky`
- **Top / Right / Bottom / Left**: `top-0`, `right-0`, `bottom-0`, `left-0`
- **Z-Index**: `z-0`, `z-10`, `z-20`, `z-30`, etc.

---

## Miscellaneous
- **Opacity**: `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`
- **Cursor**: `cursor-pointer`, `cursor-default`, `cursor-not-allowed`
- **Overflow**: `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll`

---

## Pseudo-Classes
- **Hover**: `hover:{utility}` 
  - Example: `hover:bg-blue-500`
- **Focus**: `focus:{utility}`
  - Example: `focus:ring-2`
- **Active**: `active:{utility}`
  - Example: `active:bg-gray-700`

---

# Example Usage

```html
<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold text-center">Hello Tailwind!</h1>
  <p class="text-lg text-gray-700 mt-4">
    This is a basic example to showcase some Tailwind CSS utilities.
  </p>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Click Me!
  </button>
</div>

