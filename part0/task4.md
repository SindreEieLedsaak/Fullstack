```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note
    server->>browser: 302 Found
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/notes
    server->>browser: HTML-code
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/main.css
    server->>browser: main.css
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/main.js
    server->>browser: main.js
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/data.json
    server->>browser: data.json
```