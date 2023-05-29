<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">  
</head>
<body>
  <h1>Weather</h1>

  <p>The "Weather" component is a React component that allows users to search for the weather condition of a specific city using the OpenWeatherMap API.</p>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js installed on your local machine</li>
    <li>API key from OpenWeatherMap (sign up at <a href="https://openweathermap.org/">OpenWeatherMap</a> to get an API key)</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository or download the source code.</li>
    <code>git clone https://github.com/your-username/weather-app.git</code>
    <li>Navigate to the project directory.</li>
    <code>cd weather-app</code>
    <li>Install the dependencies using npm or Yarn.</li>
    <code>npm install</code> or <code>yarn install</code>
    <li>Create a <code>.env</code> file in the root directory of the project and add your OpenWeatherMap API key.</li>
    <pre>REACT_APP_API_KEY=your-api-key</pre>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Start the development server.</li>
    <code>npm start</code> or <code>yarn start</code>
    <li>Open your web browser and navigate to <code>http://localhost:3000</code> to see the application.</li>
    <li>Enter a city name in the input field and press Enter or click the "Search" button to retrieve the weather condition for the specified city.</li>
  </ol>

  <h2>Technologies Used</h2>
  <ul>
    <li>React: JavaScript library for building user interfaces</li>
    <li>Axios: Promise-based HTTP client for making API requests</li>
    <li>OpenWeatherMap API: Provides weather data for the specified location</li>
  </ul>

  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

  <h2>Acknowledgements</h2>
  <ul>
    <li><a href="https://openweathermap.org/">OpenWeatherMap</a> for providing the weather data API.</li>
  </ul>
</body>
</html>
