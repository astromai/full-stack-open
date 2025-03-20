```mermaid
sequenceDiagram
    participant browser
    participant server


    Note right of browser: The spa page is already render in the browser

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: The submitted comment
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes


```

