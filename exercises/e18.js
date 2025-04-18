/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const result = Object.entries(
    data.asteroids.reduce(function (accumulator, asteroid) {
      if (accumulator[asteroid.discoveryYear]) {
        accumulator[asteroid.discoveryYear]++;
      } else {
        accumulator[asteroid.discoveryYear] = 1;
      }
      return accumulator;
    }, {})
  ).map(function (asteroid) {
    return { year: Number(asteroid[0]), count: asteroid[1] };
  });
  const mostDiscoveredYear = maxBy(result, function (asteroid) {
    return asteroid.count;
  });
  return mostDiscoveredYear.year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
