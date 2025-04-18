/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  return maxBy(
    Object.entries(
      data.asteroids.reduce((accumulator, asteroid) => {
        accumulator[asteroid.discoveryYear] =
          (accumulator[asteroid.discoveryYear] || 0) + 1;
        return accumulator;
      }, {})
    ).map((asteroid) => {
      return { year: Number(asteroid[0]), count: asteroid[1] };
    }),
    (asteroid) => asteroid.count
  ).year;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
