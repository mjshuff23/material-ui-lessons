# **Table of Contents**

- [**Table of Contents**](#table-of-contents)
- [**Material-UI App Bars**](#material-ui-app-bars)
  - [**Fixed Positioning and CSS Grid**](#fixed-positioning-and-css-grid)
  - [**Hide On Scroll**](#hide-on-scroll)
  - [Toolbar Abstraction](#toolbar-abstraction)
  - [**Additional Resources**](#additional-resources)

# **Material-UI App Bars**

App Bars are the anchor point of any Material-UI application. They provide context and are usually always visible as the user navigates around the application.

## **Fixed Positioning and CSS Grid**

You probably want your `App Bar` component to stay visible at all times. By using `fixed` positioning or CSS `Grid`, the `App Bar` components remain visible even as the user scrolls down the page.  `fixed` is the `App Bar` component's default setting, but by setting it explicitly, readers can better understand your code

- [Code Example](../material-ui-lesson/src/components/AppBar/FixedPosition.js)

When the screen in this example first loads, some of the content is hidden behind the `AppBar` component. This is because the position is fixed and it has a higher z-index value than the regular content. This is expected, so that when you scroll, the regular content goes behind the `AppBar` component. The solution is to add a top margin to your content. The problem is that you don't necessarily know the height of the `AppBar`. You could just set a value that looks good. A better solution is to use the toolbar mixin styles. You can access this mixin object by making styles a function that returns an object. Then, you'll have access to the theme argument, which has a toolbar mixin object.

## **Hide On Scroll**

If you have a lot of content on your screen that requires the user to scroll vertically, the App Bar could be a distraction. One solution is to hide the `AppBar` component while the user is scrolling down.

To hide the `AppBar` component while the user is scrolling down, you have to know when the user is scrolling. This requires listening to the scroll event on the window object. You can implement a component that listens to this event and hides the `AppBar` component while scrolling.

- [Code Example](../material-ui-lesson/src/components/AppBar/ScrolledAppBar.js)

`Fade` can also be replaced with the `Grow` component

## Toolbar Abstraction

Toolbar code can get verbose if you have to render toolbars in several places. To address
this, you can create your own Toolbar component that encapsulates the content patterns of
toolbars, making it easier to render AppBar components in several places.

Let's assume that your app renders AppBar components on several screens. Each
AppBar component also renders Menu and title to the left, as well as Button to the right.
Here's how you can implement your own AppBar component so that it's easier to use on
several screens:

- [Code Example](../material-ui-lesson/src/components/AppBar/ToolbarAbstraction.js)

## **Additional Resources**

- [Guide to CSS Positioning](https://developer.mozilla.org/en-US/docs/Learn/)
- [AppBar Demos](https://material-ui.com/demos/app-bar/)
- [AppBar API Documentation](https://material-ui.com/api/app-bar/)
- [Toolbar API Documentation](https://material-ui.com/api/toolbar/)
- [Fade API Documentation](https://material-ui.com/api/fade/)
- [Grow API Documentation](https://material-ui.com/api/grow/)
- [Slide API Documentation](https://material-ui.com/api/slide/)
- [React Router Documentation](https://reacttraining.com/react-router/)