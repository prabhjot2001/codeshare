# CodeShare 
**📌 Please give this repo a star if you find it helpful. It only takes a few seconds! 😇**
## Overview

This is a code-sharing application that enables users to write, run, and share code snippets in various programming languages. It provides a collaborative environment where multiple users can join a room, share code, and see the output in real-time.

## Preview

![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(5).png)
![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(4).png)
![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(2).png)
![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(3).png)
![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(6).png)
![Alt text](https://github.com/prabhjot2001/codeshare/blob/main/preview/preview%20(7).png)

## Features

- **Multi-language Support**: Write and execute code in JavaScript, Python, Java, and C++.
- **Theming**: Customize the code editor with various themes.
- **Font Size Adjustment**: Easily increase or decrease the font size for better readability.
- **Run Code**: Execute code snippets and view the output directly in the application.
- **Real-time Collaboration**: Multiple users can join a room and collaborate on code in real-time.
- **Copy Room ID**: Copy the room ID to the clipboard with a single click for easy sharing.
- **Mobile Responsive**: Optimized for both desktop and mobile devices with a collapsible sidebar for mobile users.

## Usage

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/prabhjot2001/codeshare.git
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Development Server**:
    ```bash
    npm run dev
    ```

4. **Navigate to the Application**:
    Open your browser and go to `http://localhost:3000`.

5. **Create or Join a Room**:
    Enter your username and create a new room or join an existing room using the room ID.

6. **Write Code**:
    Select the programming language and start writing code in the editor.

7. **Run Code**:
    Click the "Run" button to execute the code and see the output.

8. **Collaborate**:
    Share the room ID with others to collaborate in real-time. Use the sidebar to see joined members and copy the room ID.

## Key Components

### Editor Component

The `Editor` component integrates CodeMirror for the code editor functionality, allowing users to select languages, themes, and adjust font size. It also handles running the code and displaying the output.

### Sidebar Component

The `SideBar` component displays the joined members and provides options to copy the room ID and leave the room. It also includes navigation buttons for paging through the list of joined members.

## License

This project is licensed under the MIT License
