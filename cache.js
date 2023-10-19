// Define an empty cache object
const cache = {};

// Function to fetch data, simulating a resource-intensive operation
function fetchData(key) {
  // Simulate a delay to mimic a real API request
  const delay = 2000; // 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ${key}`);
    }, delay);
  });
}

// Function to get data from the cache or fetch it if not present
async function getData(key) {
  if (cache[key]) {
    console.log(`Data for ${key} found in cache: ${cache[key]}`);
  } else {
    console.log(`Fetching data for ${key}...`);
    const data = await fetchData(key);
    cache[key] = data; // Cache the fetched data
    console.log(`Data for ${key} cached: ${data}`);
  }
}

// Example usage
getData('user123'); // Fetches and caches data for 'user123'
getData('user123'); // Retrieves data from the cache, no additional fetch

// Wait for a while, then fetch 'user456'
setTimeout(() => {
  getData('user456'); // Fetches and caches data for 'user456'
}, 4000);
