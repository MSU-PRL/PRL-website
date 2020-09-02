const fetch = require("node-fetch");
const { toNamespacedPath } = require("path");

// Try importing project, sorting by tags, then for each reference, 
// getting comments/notes

// * 1. Understand the problem:
// Fetch Sciwheel entries, each categorized, from the appropriate references collection
// pick 2-3 random entries from each category
// Grab the 'note' from each entry and display as a list.
// querySelector Web API to find the appropriate location in markup and replace the fallback/placeholder info. Determine markup later.
// Repeat this process on each reload. This ensures no two lists are the same.
// Have a hard coded HTML fallback in case the fetch doesn't work.

// Labels: 
  // * function fetchSciwheelAPI
  // ? array to store the entries?
  // ? entries as object including entry id and note?
  // custom list element through createElement Web API.

// *2. Explore Concrete Examples
// I have 20 entries, with four categories
// Fetch 2 or so random entries per category
// Get the notes for each entry
// Display the notes as a list on the About page. Ex:
// - 1999: lipid discovered in plants
// - Current faculty body includes 5 NAS members
// If the fetch call fails, or no JS on site, fallback is there

// *3. Break it down into steps
// Fetch Sciwheel info: to determine if I can select categories in one call
// or do I need to make various calls for each category?
// Push results in an array
// For each object in an array, need another fetch method to get notes iteratively
// INSTEAD Of ITERATION, can I recursively fetch notes?
// Create an array of all categories
// For each category, select two entries, fetch notes, add to new objecct, and pop category from array
// Base case, category array is empty.


// *4. Solution and refactoring
const fetchSciwheelAPI = () => {
  fetch('https://sciwheel.com/extapi/work/references?projectId=475188&tagIds=243301', { 
    // 'historical' tag ID is 243301. Use Chrome developer to find tagIds
    // About Page projectId is 475188
  method: 'Get',
  headers: {'Authorization': 'Bearer 3E6D88C2CB9D47494DE94FFF891FB9E7',
  }
})
  .then(res => res.json())
  .then(data => console.log(data.results))
  .catch(err => console.log(err))
}

fetchSciwheelAPI()