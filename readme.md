<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/harshsrivastav8055/stock_price">
    <img src="https://c8.alamy.com/comp/M16AYE/symbol-image-turbulence-volatility-stock-price-digital-currency-gold-M16AYE.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Live Stock Price</h3>

  <p align="center">
    project_description
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    <br/>
    <p>Hey this project is for showcasing the real-time market price of stocks with the help of a line chart</p>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a real-time price tracking application that simulates fluctuating values (e.g., stock prices) and displays them dynamically on a line chart. It involves both a backend server to generate data and a frontend client to visualize it, connected using WebSockets for real-time communication.

Key Components
1.Backend:

Built with Node.js.
Uses a WebSocket server to broadcast random price values at regular intervals (e.g., every 2 seconds).
The price values are generated randomly, simulating a fluctuating market.

2.Frontend:

Built with React.
Utilizes Chart.js through react-chartjs-2 to render a line chart.
Establishes a WebSocket connection to receive real-time updates from the server.
The data received is used to update the chart dynamically, showcasing price fluctuations over time.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [JavaScript-url]
* [React-url]
* [Node.js-url]
* [Web-Socket-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/harshsrivastav8055/stock_price.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up for frontend
    ```sh
    cd vite-project
    npm run dev                               # Run React app
    ```
4.Set for Backend
```
    node server.js       # Run the WebSocket server
```
6. Change the git remote URL to avoid accidental pushes to the base project
   ```sh
   git remote set-url origin harshsrivastav8055/stock_price
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/harshsrivastav8055/stock_price](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[JavaScript]: https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png
[JavaScript-url]: https://www.javascript.com/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Node.js]:https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/800px-Node.js_logo.svg.png
[Node.js-url]: https://nodejs.org/en
[Web-Scoket]: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqWz7aMlinMNdeQ2i5p8ITrqe9f81e9W_xA&s
[Web-Socket]: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API
