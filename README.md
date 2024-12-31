# design-system

The Inventare Design System

<p align="center">
  <a href="https://github.com/inventare/design-system/blob/main/LICENSE" target="_blank"><img alt="GitHub License" src="https://img.shields.io/github/license/inventare/design-system"/></a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@inventare/tokens" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inventare%2Ftokens?label=%40inventare%2Ftokens"/></a>
  <a href="https://www.npmjs.com/package/@inventare/styles" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inventare%2Fstyles?label=%40inventare%2Fstyles"/></a>
  <a href="https://www.npmjs.com/package/@inventare/icons" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inventare%2Ficons?label=%40inventare%2Ficons"/></a>
  <a href="https://www.npmjs.com/package/@inventare/vanilla" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inventare%2Fvanilla?label=%40inventare%2Fvanilla"/></a>
  <a href="https://www.npmjs.com/package/@inventare/react" target="_blank"><img alt="NPM Version" src="https://img.shields.io/npm/v/%40inventare%2Freact?label=%40inventare%2Freact"/></a>
</p>

## Introduction

Formally, the Inventare Design System was inspired by some libs, like the Bootstrap, Chakra-UI, Material-UI and others. We decided to create it to maintain the consistency about our user interfaces belong all of our products and services.

### Assumptions

We have some assumptions for creating this design-system:

1. Out of box support for the [htmx](https://htmx.org/).

### Roadmap

The creation of the design-system package's is motivated by the creation of a custom `django-admin` template for some products at the [inventare/django-admin-inventare](https://github.com/inventare/django-admin-inventare) repository. The first steps of the creation of this design system is fully to support the customization of this `django-admin` template.

> For the future, we are planning to refine this components and in most of the future, create new components required by another other products and services.

#### Create components for customize django-admin template

The currently motivation for the creation of this packages are support the `django-admin` template.

| Description                                                      | Motivation             | Reached At |
| ---------------------------------------------------------------- | ---------------------- | ---------- |
| Create select components prepared for autocomplete with HTMX.    | django-admin-inventare | -          |
| Make the Sidebar responsive for mobile.                          | django-admin-inventare | -          |
| Create skeleton to support HTMX loading-indicator.               | django-admin-inventare | -          |
| Complete supporting all the django "native" form widget's.       | django-admin-inventare | -          |
| Create application menu bar.                                     | django-admin-inventare | -          |
| Create title section's                                           | django-admin-inventare | -          |
