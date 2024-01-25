```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/spa
    server->>browser: HTML-code
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/main.css
    server->>browser: main.css
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/main.js
    server->>browser: main.js
    browser->>server: GET https://fullstack-exampleapp.herokuapp.com/data.json
    server->>browser: data.json
    
```