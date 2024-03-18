# **Automan**

new header
Automan is tool to automate the manual test cases created by testing team. This tools has two part one Automan-client and Automan-server

**Automan-client: -**

Automan client helps user to run the test cases or test scenarios. This is similar to any modern browser and allows the user to enter website address and start executing test cases. In the background Automan-client capture all the actions taken by user and sends that information to Automan-man server for storage and processing. Please refer below screenshot for Automan-client.

1. User enters url <https://demo.applitools.com/>, provides user id and password and clicks on Sing In button.
![](https://i-ams.github.io/images/screenshots/1.png "Automan client - User login screen")

2. Application logs in the user and redirects him to dashboard. 
![](https://i-ams.github.io/images/screenshots/2.png "Automan client - User dashboard")

# **Automan-server: -**

Automan-server collects all the information sent by client and stores test cases executed by user. Server also provided UI application wherein user can check all the captured information and re-executes test cases with different test data and on different environment.

![](https://i-ams.github.io/images/screenshots/3.png "Automan server - User events")
