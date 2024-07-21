- HigherorderComponents

- Debouncing :
        typing slow 
        typing fast

- Performance :
    - No. of API Calls
    - iphone pro max = 14 Letters * 1000 = 14,000 api calls
    - with Debouncing = 3 * 1000 = 3,000 api calls

Debouncing applied with 200ms
 - if difference between 2 key strokes <200ms => Decline API Call
 - =>200ms make an API Call 
