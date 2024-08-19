# @inventare/styles

This package hosts the styles of the design-system.

## Development Standards

We have two type of components on this design-system: pure styles (and structured HTML) components and styles and JavaScript components. In the bellow sections we describe the development structure of each type of components.

### Pure Style Components

Some components of the design-system is pure structured HTML and styles. In this case, the `scss/components/ComponentName` folder contains some files that are not scss:

| File Name              | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `_component.scss`      | The component `.scss` styles.                   |
| `Component.ts`         | Used by storybook to create the HTML component. |
| `Component.stories.ts` | The storybook stories for the component.        |
| `Component.mdx`        | The storybook documentation page for component. |

### JavaScript Components

Some other components has a JavaScript part and, in this case, the `scss/components/ComponentName` contains only the scss file:

| File Name              | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `_component.scss`      | The component `.scss` styles.                   |

For the JavaScript components, the storybook parts is stored with the JavaScript (coded in TypeScript and transpiled ot JavaScript) parts on the `@inventare/vanilla` package.
