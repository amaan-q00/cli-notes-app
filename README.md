cli-notes-app
# cli-notes-app

### This is a command line note taking application forged from nodejs.
How to run:(Nodejs must be installed on the system)

To install node:
-goto https://nodejs.org/en/download/ and download the setup suited for your machine.
-after downloading, run the setup and finish installing.
-to check if it is installed, goto any CLI and type ```node -v```

How to run: open terminal and run the following=>

```
git clone https://github.com/Steven2056/cli-notes-app
cd cli-notes-app
npm i
node app.js [command <args>]

//To add a new note
node app.js add --title="mytitle" --body="note body"

//To remove a note
node app.js remove --title="mytitle"

//To read a note
node app.js read --title="mytitle"

//To list all notes
node app.js list
```
