```mermaid
sequenceDiagram
    participant browser
    participant server
    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
    server->>browser: 201 Created
```