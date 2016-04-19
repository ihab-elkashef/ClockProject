This archive contains a simple clock API developed using plain JavaScript. An example of its use was done in the attached HTML.

The API offers simple methods like starting a clock, stopping it, getting the time between both those actions as a String or as a TimeObject and finally, reinitializing the clock.

The last method available is subscribe(). It allows the user to execute his/her own method at a specific interval.

The subscribe() method was implemented with the Observer design pattern in mind. Because the relationship between the Clock and the subscriber is a 1-1 relationship, it is not exactly an Observer, however, this could be the subject of a future evolution of this API.

The main difficulty encountered was the ability to notify my subscriber of the changes every second. This eventually was accomplished using the setInterval standard Javascript function.


