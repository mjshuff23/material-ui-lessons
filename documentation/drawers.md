# **Table of Contents**

- [**Table of Contents**](#table-of-contents)
- [**Material-UI Drawers**](#material-ui-drawers)
  - [Drawer Types](#drawer-types)
  - [Drawer Item State](#drawer-item-state)
  - [Additional Resources](#additional-resources)

# **Material-UI Drawers**

Material-UI uses drawers to present the user with the main navigation of the app. The
Drawer component acts like a physical drawer that can move out of view when it is not
being used.

## Drawer Types

There are three types (`variant`s) of `Drawer` components that you'll use in your app, as follows:

1. **Temporary**: A transient drawer that closes when an action is taken
2. **Persistent**: A drawer than can be opened and stays open until explicitly closed
3. **Permanent**: A drawer that is always visible

The Drawer component takes an `open` property, which displays the drawer when `true`. The
`variant` property determines the type of drawer to render.

## Drawer Item State

The items that are rendered in `Drawer` components are rarely static. Instead, the drawer
items are rendered based on the state of your component, allowing for more control over
how items are displayed

Let's say that you have a component that renders drawer navigation using the `Drawer`
component. Instead of writing the items state directly in the component markup, you want
to have the items state stored in the state of the component. For example, in response to
permission checks on the user, items might be disabled or completely hidden

- [Code Example](../material-ui-lesson/src/components/Drawer/DrawerItemState.js)

- The `open` state controls the visibility of the Drawer component
- The `content` state is the text that's displayed on the screen depending on which drawer item is clicked on. 
- The `items` state is an array of objects that is used to render the drawer items. 
  - Every object has a `label` property and an `Icon` property that are used to render the item text and icon respectively. The `Icon` property is capitalized in order to maintain the React convention of capitalizing components. This makes it easier to differentiate React components from other data when reading the code.
- The `disabled` property is used to render the item as disabled
  - For example, Page 3 is marked as disabled by setting this property to true: This could be due to permission restrictions for the user on this particular page, or some other reason. Because this is controlled through the component state instead of rendered statically, you could update the disabled state for any menu item at any time using any mechanism that you like, such as an API call. The `hidden` property uses the same principle, except when this value is `true`, the item isn't rendered at all. In this example, Page 5 isn't rendered because it's marked as `hidden`.
- The `items` array is filtered to remove hidden items. Then, `map()` is used to render each `ListItem` component. The `disabled` property is passed to `ListItem` and it will be visibly disabled when rendered. The `Icon` component also comes from the list item state. The `onClick()` event handler hides the drawer and updates the content label. The `onClick()` handler isn't executed when disabled list items are clicked on.

## Additional Resources

- [`Drawer` Demos](https://material-ui.com/demos/drawers/)
- [`Drawer` API Documentation](https://material-ui.com/api/drawer/)