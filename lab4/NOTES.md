# Lab 04 — Event Loop Notes

## Prediction

Expected output order:

1. `1 start`
2. `4 end`
3. `3 promise`
4. `2 timeout`

## Explanation

Synchronous statements run first, so `1 start` prints before the timer and promise are scheduled. The next synchronous statement prints `4 end`. After the call stack becomes empty, the event loop processes the microtask queue before the task queue. Therefore the promise callback prints `3 promise` before the `setTimeout` callback prints `2 timeout`, even though the timer delay is zero.

## Concepts

- **Call stack:** holds functions that are currently executing.
- **Task queue:** holds callbacks from timers and events.
- **Microtask queue:** holds promise reactions and continuation code after `await`; it is processed before the next task.
- **Event loop:** coordinates queued work when the call stack is empty.
- **Closure:** `makeCounter()` returns a function that retains access to its own `count` variable after `makeCounter()` has returned.
- **Async/await:** `await delay(1000)` pauses the async event handler, not the whole page, allowing the browser to remain responsive.
- **Event delegation:** one click listener on the table body handles clicks from all matching booking buttons using `closest()` and `dataset.day`.

## Manual checks to complete in the browser

1. Open the folder in VS Code and run `index.html` with Live Server.
2. Select multiple office-hour slots and verify the live status count.
3. Use Tab, Enter, and Space to test keyboard interaction.
4. Open DevTools Console and run the event-loop snippet from the lab sheet.
5. Run Lighthouse Accessibility and save a screenshot. The score depends on the browser and environment.
6. Commit and push the folder to your own GitHub repository.
