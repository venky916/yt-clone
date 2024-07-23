# YouTube Frontend Clone

## Overview

This project is a frontend clone of YouTube built using modern web technologies. The main focus is on delivering a high-performance, responsive, and visually appealing user interface with advanced features such as live chat, nested comments, infinite scrolling, and optimized search functionality.

## Technologies Used

- **ReactJS:** For building the user interface components.
- **Redux:** For state management across the application.
- **TailwindCSS:** For styling and animations.

## Features

1. **Lazy Loading:** Implemented lazy loading for components and images to improve performance by loading content only when it is needed.
2. **Debouncing:** Used debouncing for infinite scroll and search bar to enhance user experience and reduce unnecessary API calls.
3. **Live Chat:** Developed a live chat feature with API polling every 1500ms to simulate real-time interaction.
4. **Nested Comments:** Created nested comments using recursion and higher-order components to manage and display comment threads effectively.
5. **Custom Infinite Scroll:** Built a custom infinite scroll with debouncing to load additional content seamlessly as the user scrolls down.
6. **Shimmer Effects:** Added shimmer effects to improve UI aesthetics and indicate loading states to users.
7. **Custom Search with Debouncing:** Implemented a custom search feature with debouncing to provide real-time suggestions without overwhelming the server.
8. **Custom Slide Navigation:** Designed a custom slide navigation for button lists to enhance user interaction and accessibility.

## Performance Metrics

- **Render Time:** 25.5ms
- **Layout Effects:** 0.2ms
- **Passive Effects:** 1.6ms
- **Key Component Performance:**
  - **App:** 2.2ms
  - **Button:** 1.8ms
  - **Head:** 1ms
  - **Sidebar:** 0.6ms
  - **VideoContainer:** 2.6ms
  - **VideoCard:** 0.1ms

## Network Performance

- **Initial Load:**
  - **DOMContentLoaded:** 347ms
  - **Load:** 347ms
  - **Finish:** 5.18s
- **Refresh Load:**
  - **DOMContentLoaded:** 157ms
  - **Load:** 158ms
  - **Finish:** 544ms

## Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository:**
   git clone https://github.com/venky916/yt-clone.git
   cd yt-clone

2. **Install Dependencies:**
    npm install
3. **Start the Development Server:**
    npm start
4. **Build for Production:**
    npm run build

## Usage

After starting the development server, you can access the application in your browser at `http://localhost:3000`. The app will load the main YouTube interface with all the implemented features. You can test the live chat, search functionality, infinite scroll, and view the nested comments.

## Contributing

If you wish to contribute to this project, please fork the repository and create a new branch for your feature or bug fix. Once your changes are ready, submit a pull request for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please contact me at venkateshsmsv1999@gmail.com.
