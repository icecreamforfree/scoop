/**
 * Setup functions ran when main.js imports this module
 */

const quit = "quit";

/**
 * @function setupExecutor
 * @param {array} setupFunctions Pass in an array of functions to ran in order
 * @returns Returns a bool to indicate if setup functions were ran successfully.
 */
function setupExecutor() {
  for (const setupIndex in arguments) {
    // Quit/End the Vue JS app if any setup function requests so
    if (arguments[setupIndex]() === quit) {
      (function quitApp() {
        console.log("Quit app requested from a setup function");
        // @todo Use a better way instead of simply removing item from DOM as it is still in memory and cant be GCed
        // Removes the div that the vue js app mounts on to stop the app from running
        const element = document.getElementById("app");
        const { parentNode } = element;
        parentNode.removeChild(element);
        console.log("Vue JS app is deleted from DOM");
      })();

      // Mount a new page/app to show 400 app died or something instead of leaving it blank

      return false; // Indicate failure
    }
  }
  return true; // Indicate success
}

function checkOnline() {
  // Instead of relying on this, ping our own server's /ping route with a timestamp query to see if we get an ans
  const isOnline = navigator.onLine;

  // @todo Attach event listeners to for when the connection changes
  // Event listeners to set a network error flag in vuex store's flag object. Which will trigger an image overlay till netowrk is back

  console.log("Network connection: ", isOnline);
  if (!isOnline) {
    alert("App is not connected to the internet");
    return quit;
  }
}

// Call setupExecutor with all the setup functions to run and export the setup process result
export default setupExecutor(checkOnline);
