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

## Additional Resources

- [`Drawer` Demos](https://material-ui.com/demos/drawers/)
- [`Drawer` API Documentation](https://material-ui.com/api/drawer/)