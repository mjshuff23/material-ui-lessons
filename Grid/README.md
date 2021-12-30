# **Material-UI Grid**

Material-UI grids are used to control the layout of screens in your app. Rather then
implement your own styles to manage the layout of your Material-UI components, you can
leverage the `Grid` component. Behind the scenes, it uses CSS **flexbox** properties to handle
flexible layouts.

## Breakpoints

A **breakpoint** is used by Material-UI to determine at what point to break the flow of
content on the screen and continue it on the next line. Understanding how to apply
breakpoints with `Grid` components is fundamental to implementing layouts in Material-UI
applications

Each of the breakpoint properties that you can pass to Grid components correspond to
screen widths, as follows:

- xs >= 0px
- sm >= 600px
- md >= 960px
- lg >= 1280px
- xl >= 1920px

![Grid Example](../images/grid-01.png)

The screen shown previously had a pixel width of 725, which means that the `Grid`
components used the sm breakpoint. The value passed to this property was 6. This can be a
number from 1 to 12 and defines how many items will fit into the grid. This can be
confusing, so it's helpful to think of these numbers in terms of percentages. For example, 6
would be 50% and, as the preceding screenshot shows, the Grid items take up 50% of the
width.

For example, let's say that you want the width of each Grid item to take up 75% of the
screen width when the small breakpoint is active. You could set the sm value to 9 (9/12 =
0.75)

You can use the `auto` value for every breakpoint value if you're unsure of which value to
use. I would recommend replacing auto with a value from 1–12 at some point. The auto value
is good enough that you can get started on other things without worrying too much about
layout, but it's far from perfect for your production app. At least by setting up auto this
way, you have all of your Grid components and breakpoint properties in place. You just
need to play with the numbers until everything looks good.