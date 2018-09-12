# Frontend-nanodegree-feedreader jasmine testing

This was an exercise designed to demonstrate how jasmine works.

## What is being tested
Within the test suite 'RSS Feeds' there are three tests 'Are defined', 'URL defined', and 'Name defined'.
'URL defined' loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
'Name defined' loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

The next test suite is called 'The menu' which has two tests: 'element hidden' and 'element visible when clicked, disappears when clicked again'.
'element hidden' ensures the menu element is hidden by default.
'element visible when clicked, disappears when clicked again' ensures the menu changes visibility when the menu icon is clicked.

The third test suite is named "Initial Entries".
'Async loadFeed has at least one entry' ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

The last test suite is called "New Feed Selection".
The test 'Async loadFeed content changes' ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## How to get started
Navigate to the Clone or download button.
Copy the clone URL. In Git Bash change the working directory to the location where you want the cloned directory to go. After typing `git clone` paste the clone URL that you copied. Press enter and your local clone will be created.
Then open index.html in a browser.

### Acknowledgments
The descriptions of the tests were adapted from the instructions provided by the Udacity team. Comments in the code were also only slightly modified. All files except the modifications I made to feedreader.js were provided by Udacity.   
