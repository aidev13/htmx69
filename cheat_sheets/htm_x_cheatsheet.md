
# HTMX Cheat Sheet

## Basic HTMX Attributes

| **Attribute**     | **Description**                                                      | **Example**                   |
|-------------------|----------------------------------------------------------------------|-------------------------------|
| `hx-get`          | Perform a GET request to the specified URL.                          | `hx-get="/some-url"`          |
| `hx-post`         | Perform a POST request to the specified URL.                         | `hx-post="/some-url"`         |
| `hx-patch`        | Perform a PATCH request to the specified URL.                        | `hx-patch="/some-url"`        |
| `hx-put`          | Perform a PUT request to the specified URL.                          | `hx-put="/some-url"`          |
| `hx-delete`       | Perform a DELETE request to the specified URL.                       | `hx-delete="/some-url"`       |
| `hx-target`       | Specifies the target element for the response.                       | `hx-target="#target-div"`     |
| `hx-trigger`      | Specifies the event(s) that trigger the request.                     | `hx-trigger="click"`          |
| `hx-swap`         | Controls how content is swapped into the target.                     | `hx-swap="innerHTML"`         |
| `hx-swap-oob`     | Swap content out-of-band.                                            | `hx-swap-oob="true"`          |
| `hx-include`      | Include additional elements in the request.                          | `hx-include="#another-input"` |
| `hx-params`       | Specifies parameters to include in the request.                      | `hx-params="*"`               |
| `hx-indicator`    | Indicates an element to show while the request is in progress.       | `hx-indicator="#spinner"`     |
| `hx-vals`         | Provides additional values for the request.                          | `hx-vals="{ 'key': 'value' }"`|
| `hx-headers`      | Specifies additional headers for the request.                        | `hx-headers="{ 'X-My-Header': 'value' }"` |

## Advanced HTMX Attributes

| **Attribute**           | **Description**                                                     | **Example**                       |
|-------------------------|---------------------------------------------------------------------|-----------------------------------|
| `hx-ext`                | Specifies extensions to be used.                                    | `hx-ext="json-enc"`               |
| `hx-encoding`           | Specifies the encoding type of the request.                         | `hx-encoding="multipart/form-data"` |
| `hx-push-url`           | Pushes a new URL onto the history stack.                            | `hx-push-url="true"`              |
| `hx-replace-url`        | Replaces the current URL in the history stack.                      | `hx-replace-url="true"`           |
| `hx-preserve`           | Prevents the element from being swapped out.                        | `hx-preserve="true"`              |
| `hx-prompt`             | Prompts the user for input.                                         | `hx-prompt="Enter your name"`     |
| `hx-confirm`            | Shows a confirmation dialog before the request is made.             | `hx-confirm="Are you sure?"`      |
| `hx-select`             | Specifies a CSS selector for elements to swap into the target.      | `hx-select=".important"`          |
| `hx-select-oob`         | Specifies a CSS selector for out-of-band swaps.                     | `hx-select-oob=".alert"`          |
| `hx-disable`            | Disables an element during the request.                             | `hx-disable="true"`               |
| `hx-on`                 | Attaches event listeners to the element.                            | `hx-on="load: someFunction()"`    |
| `hx-validate`           | Validates a form or input before the request is made.               | `hx-validate="true"`              |
| `hx-ws`                 | Sets up WebSocket connection for live updates.                      | `hx-ws="connect:/ws-url"`         |

## Swap Options

| **Option**         | **Description**                                                   | **Example**                   |
|--------------------|-------------------------------------------------------------------|-------------------------------|
| `innerHTML`        | Replaces the inner HTML of the target.                           | `hx-swap="innerHTML"`         |
| `outerHTML`        | Replaces the entire target element.                              | `hx-swap="outerHTML"`         |
| `beforebegin`      | Inserts content before the target element.                       | `hx-swap="beforebegin"`       |
| `afterbegin`       | Inserts content at the beginning of the target element.          | `hx-swap="afterbegin"`        |
| `beforeend`        | Inserts content at the end of the target element.                | `hx-swap="beforeend"`         |
| `afterend`         | Inserts content after the target element.                        | `hx-swap="afterend"`          |
| `delete`           | Removes the target element.                                      | `hx-swap="delete"`            |
| `none`             | No content swap.                                                 | `hx-swap="none"`              |
| `morph`            | Morphs the target content with minimal changes.                  | `hx-swap="morph"`             |

## Event Triggers

### Basic Event Triggers

| **Event**    | **Description**                                  | **Example**            |
|--------------|--------------------------------------------------|------------------------|
| `click`      | Triggered on mouse click.                        | `hx-trigger="click"`   |
| `dblclick`   | Triggered on double mouse click.                 | `hx-trigger="dblclick"`|
| `change`     | Triggered when input value changes.              | `hx-trigger="change"`  |
| `input`      | Triggered when an input event occurs.            | `hx-trigger="input"`   |
| `submit`     | Triggered when a form is submitted.              | `hx-trigger="submit"`  |
| `mouseover`  | Triggered when mouse hovers over an element.     | `hx-trigger="mouseover"` |
| `mouseout`   | Triggered when mouse leaves an element.          | `hx-trigger="mouseout"` |
| `keydown`    | Triggered when a key is pressed down.            | `hx-trigger="keydown"` |
| `keyup`      | Triggered when a key is released.                | `hx-trigger="keyup"`   |
| `focus`      | Triggered when an element gains focus.           | `hx-trigger="focus"`   |
| `blur`       | Triggered when an element loses focus.           | `hx-trigger="blur"`    |
| `load`       | Triggered when the page or element is fully loaded. | `hx-trigger="load"` |

### Advanced Event Triggers

| **Event**     | **Description**                                   | **Example**              |
|---------------|---------------------------------------------------|--------------------------|
| `mousedown`   | Triggered when a mouse button is pressed down.    | `hx-trigger="mousedown"` |
| `mouseup`     | Triggered when a mouse button is released.        | `hx-trigger="mouseup"`   |
| `dragstart`   | Triggered when the user starts dragging an element. | `hx-trigger="dragstart"` |
| `dragend`     | Triggered when a drag operation is ended.         | `hx-trigger="dragend"`   |
| `drop`        | Triggered when an element is dropped.             | `hx-trigger="drop"`      |
| `mouseenter`  | Triggered when mouse enters an element.           | `hx-trigger="mouseenter"`|
| `mouseleave`  | Triggered when mouse leaves an element.           | `hx-trigger="mouseleave"`|
| `contextmenu` | Triggered when the right mouse button is clicked. | `hx-trigger="contextmenu"`|
| `wheel`       | Triggered when the mouse wheel is scrolled.       | `hx-trigger="wheel"`     |
| `touchstart`  | Triggered when a touch event starts.              | `hx-trigger="touchstart"`|
| `touchend`    | Triggered when a touch event ends.                | `hx-trigger="touchend"`  |
| `touchmove`   | Triggered when touch points move.                 | `hx-trigger="touchmove"` |

### HTMX Specific Triggers

| **Event**                | **Description**                                                 | **Example**                  |
|--------------------------|-----------------------------------------------------------------|------------------------------|
| `revealed`               | Triggered when an element becomes visible in the viewport.      | `hx-trigger="revealed"`      |
| `htmx:configRequest`     | Triggered before HTMX configures an HTTP request.               | `hx-trigger="htmx:configRequest"` |
| `htmx:beforeRequest`     | Triggered before an HTTP request is made by HTMX.               | `hx-trigger="htmx:beforeRequest"` |
| `htmx:afterRequest`      | Triggered after an HTTP request completes.                      | `hx-trigger="htmx:afterRequest"` |
| `htmx:beforeSwap`        | Triggered before content is swapped into the DOM.               | `hx-trigger="htmx:beforeSwap"` |
| `htmx:afterSwap`         | Triggered after content has been swapped into the DOM.          | `hx-trigger="htmx:afterSwap"` |
| `htmx:responseError`     | Triggered if an error occurs during an HTTP request.            | `hx-trigger=" "`
