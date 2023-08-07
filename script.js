//your JS code here. If required.
 function delayAndResolve() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello, world!");
        }, 1000); // 1 second
      });
    }

    const outputElement = document.getElementById("output");

    delayAndResolve().then((message) => {
      outputElement.textContent = message;
    });