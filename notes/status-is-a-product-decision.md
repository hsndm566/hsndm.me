# Status is a product decision

## The purpose

A status page is not only for major incidents. It tells people which public systems are being observed and what the current signals mean.

## The first monitoring layer

The status page checks the primary portfolio, the project-enquiry endpoint, and the GitHub-backed field-log source whenever the page is loaded. It reports the response code and measured request time, then refreshes while the page is open.

## The deliberate boundary

This is a live-view health page, not a historical monitoring service. It does not claim uptime percentages, store incidents, or send alerts that it cannot yet support.

## Next iteration

When public client services require dependable operational commitments, add durable checks, incident history, and notification rules around the systems that need them.
