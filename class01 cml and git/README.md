# JS05 Class 01 - Command Line, Git + Github

Local = Git 
* Adds version control
* Command line program
 * Make a folder
 * Tell Git it's a git: git init
 * Tell Git what to add: git add .
 * Take a photo of them: git commit -m "X"


Online = Github
* Make a git a remote: git remote 
* Adding changes to the online: git push
* Bringing changes from teh online: git pull



## Command Line Interface

#### Why use it?
* It's (eventually) very fast
* It's automatable and flexible No interruptions
* It gives us what we expect Sometimes it is the only way
    * Command Line Interaction (C.L.I.) 
    * Web servers

Bash is a regular program on your computer It was created to take commands from you
We talk to it using the Bash Shell Language When I say "shell", it's just that program we were
talking about before
It's an interface to interact with other programs
     @threequal
2.5
 
 Are there other shells?
Bash "Bourne Again shell" C shell
Z shell "zsh"
Korn shell
Bourne shell
Debian's Almquist shell "dash"
      @threequal
2.6
 
 What can you do with it?
Most of you will have a lot of experience with the WIMP (Windows, Icons, Menus, Pointer) style of system
That's not the only way. We are going to be using a text- only "console" or "terminal"
This is going to seem alien and primitive but you will soon see the power!
@threequal
2.7
 
 What can you do with it?
Anything! Run programs to make all sorts of changes
Editing files and images Converting files between types
Creating back-ups
Making and copying files
Downloading, compiling, and running programs We can do a lot more with the Terminal
 telnet towel.blinkenlights.nl
        @threequal
2.8
 
How do you work with it?
Non-interactively
Running scripts. We are already doing this!
Interactively
Opening up a REPL

```
pwd        # Where am I? The programmer's "um"
ls         # List all files in the current directory
cd         # Change Directories
mkdir      # Make a Directory
rmdir      # Remove an empty directory
rm         # Remove a file or a directory
touch      # Create a file
open       # Open a file in the default application
code       # Open the VSCode Editor (atom will open in Atom)
say        # Make your computer talk
```