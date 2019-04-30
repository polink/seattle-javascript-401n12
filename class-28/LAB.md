![cf](http://i.imgur.com/7v5ASc8.png) 28: To Do App
===

## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  
	* Attach a picture of your state/props map

## Requirements  
 
#### Feature Tasks 
Create the following components and structure them according to the following diagram.  
``` 
App
  Landing
  Dashboard
    NoteCreateForm
    NoteList
      Noteitem (Optional)
```
###### App Component
* The App component should manage the frontend routes and have a navbar
* the `/` route should display the `Landing` component
* the `/dashboard` route should display the `Dashboard` component

###### Landing Component
* The Landing component should display a brief description of the notes app

###### Dashboard Component 
* The Dashboard component should manage the entire **application state**
* The state should contain a notes array
* It should have a bound `addNote(note)` method that adds a note to `state.notes`
  * each note that gets added should have the following data
    * `id`: always should contain the result of `uuid.v1()`
    * `content`: user provided content
    * `title`: user provided title
* It should have a bound `removeNote(note)` method that removes a note from `state.notes` based on its `id` Hint Hint: filter/reduce method

###### NoteForm Component
* `onComplete` the NoteForm should add a note to the application state

###### NoteList Component 
* should display an unordered list of NoteItem components

###### NoteItem
* should display the notes content and title
* should display a delete button (stretch goal)
  * `onClick` the note should be removed from the application state

#### Documentation  
Write a description of the project in your README.md
