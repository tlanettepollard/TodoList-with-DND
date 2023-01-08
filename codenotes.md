# Welcome to My ToDo List Code Notes

## 02/12/2022

Today I am starting on the todo list. The hardest part is how to structure my files. I could go simple and have only five components or I could have each module for each task.

Resources:

- [Sass Guidelines](https://sass-guidelin.es/#architecture)
- [Implementing Dark Mode in your React App with SCSS](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)
- [Creating Add/Remove Effects for list items](https://dev.to/cmcwebcode40/simple-react-dark-mode-with-scss-lae)

## 02/13/2022

Just found out today that Node Sass has been deprecated. I got an error "Cannot find module sass". Thank you Stack Overflow! I decided to erase my app and start again. 🤞🏾 Now that I've started, I've been following the tutorial on MDN. I used a ul list for my tasks. I have six, but I know I can refactor them to be less.

Resources:

- [Add Sass to your React App in 2021!](https://medium.com/nerd-for-tech/add-sass-to-your-react-app-in-2021-here-is-how-c7260c323a5a)

### 02/17/2022

Today I'm following the MDN Tutorial. I'm trying to learn from the tutorial as I work on this app. I learned that visually-hidden will hide the element from sighted users, but be available for screen readers.

Resources:

- [Beginning our React todo list](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)

### 02/18/2022

Hi. Started early this morning. Finally figured out why I was having an undefined error for my Sass variables. I also changed the folder back to scss.

#### I learned today about making a unique ToDo task using name and adding props to the ToDoList Component. New-- used localeStorage for getting and holding task data. I was having a hard time figuring out how to import my sample tasks.

#### Learned: useState() creates a piece of state for a component, and its only parameter determines the initial value of that state. It returns two things: the state, and a function that can be used to update the state later.

#### Learned: how to use an object spread syntax to create a new object and toggle checked property before returning it.

#### Learned: using an Array.prototype.filter() to test and exclude a task from the new array if the id prop matches the id parameter passed into the deleteTask();

#### Learned: how React deals with events and handles state, and implemented functionality to add tasks, delete tasks, and toggle tasks as completed.

Resources:

- [Mileine](https://github.com/mileine/frontendmentor-todo-app-react)
- [How to Use Font Awesome 5 with React](https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react)--by Chris on Code; ended up not using the icons, but good information.

### 02/19/2022

Happy Saturday! Back again working on my todo list app. I have a better understanding of React components.

### 02/20/2022

Morning! My goal today is to add style and work on my theme-switcher. I have found a lot of research/samples for React apps.

Resources:

- [Mileine](https://github.com/mileine/frontendmentor-todo-app-react)-- used as reference for organizing theme and building theme changer.
- [Kremenovic](https://github.com/kremenovic/react-todo-app)-- resource sites for working with dark theme
- [How to create a dark mode in sass](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995) by Katie McTigue

### 02/21/2022

## Hey! Today I'm going to focus on styling the structure before I worry about the theme changing. Ugh! Now my delete button isn't working. It's deleting everything on the page.

### 02/22/2022

I decided to start again today. I was coming too confused about how to continue the app. I'm still going to refer to the MDN article. So I erased all of my files and I am starting from scratch.

Resources:

- [Cyishere.dev](https://codesandbox.io/s/iwfy7?file=/src/components/TodoList.js)-- followed his organization for component file structure and app template.

### 02/25/2022

Hi. I have a little time since we have a delayed opening today. I will try to get one or two components done. I was able to complete all of the components and add them to App. I also added my data file to my app to generate my fake todos.

### 02/27/2022

Hi, back again. Ready to work on this app. Today I'm going to add the interactivity to the app. Goal: To learn about handling events and state in React, and use those to start making the case study app interactive. I added functions for the editing and saving of edited todos. I also added the delete functionality for the todos. Tomorrow I will focus on the filters.

#### Learned

- Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

### 03/05/2022

Hey! I'm back. No coding the past few days due to house work. Now I'm ready to finish this app. Today I will work on the filter buttons. I left off with adding the editing feature on the user interface. I did a happy dance because I figured out how to get my 'clear completed' button to work. Now I am working on the styling and the themes for the app. I am referring to the article below for how to add dark mode to a React/Sass project.

#### Learn

- Object Keys method used to return an array of a given object's own enumerable property names iterated in the same order that a normal loop would.

Resource:

- [The Best Way to Add Dark Mode to Your React/Sass Project](https://javascript.plainenglish.io/the-best-way-to-add-dark-mode-to-your-react-sass-project-ce3ae3bd8616), by Jimmy Lam
- [Coding a CSS Theme Switcher: A Multitude of Ways](https://joshuatz.com/posts/2019/coding-a-css-theme-switcher-a-multitude-of-web-dev-options/#method-b)

### 03/06/2022

Hi. Today my focus is working on the styling and the theme switcher. I had a problem after I took a break from coding today. I couldn't get my app to appear in the browser with localhost. I searched for at least an hour and finally, I found the answer in the article below. I had made my tags in my Header component start with an uppercase. I had created an infinite loop by nesting the parent component within the same parent component. Once I changed the tags to lowercase, it worked.

Resources:
[Having Problems with Your React App Not Loading and Throwing Page Unresponsive Message? Here's the Fix](https://hashnode.com/post/having-problems-with-your-react-app-not-loading-and-throwing-the-page-unresponsive-message-heres-a-fix-ckmli1ims044ro4s14xgobdhc), by Adedotun Adedigba

### 03/07/2022

Hi again. Today I stayed home from school due to my allergies. This is giving me a chance to code. I did it!!! I got the theme to work and added the background image based on size.

### 03/08/2022

Hi. Still excited about getting the theme switcher to work. Today I need to redo the filters section.

### 03/10/2022

Hi! I'm home today due to illness, but I can code. I want to make my color system less complicated in my themes.

### 03/12/2022

Happy Saturday! It's cold, windy, and dreary. Focusing on the styling today. Today I learned how to style a checked list item. I got stuck on styling the checkboxes.

Resources:

- [MDN Web Docs- :checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
- [Style Checkboxes and Radio Buttons](https://www.cssportal.com/blog/style-checkboxes-radio-buttons/)
- [How to Style a Checkbox with CSS](https://www.w3docs.com/snippets/css/how-to-style-a-checkbox-with-css.html)

### 03/14/2022

Hi. Yesterday I was stuck on report card comments. Today I will focus on the checkbox. I learned today that you cannot change the default design of a checkbox on an input. However you can do a workaround to add your own style to the text box. I was able to get the checkbox to be round and put in the gradient background. Can't get the gradient hover yet.

Resources:

- [MDN: Advanced Form Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling#Check_boxes_and_radio_buttons)

### 03/15/2022

Hi. I'm going to put off the gradient hover today on the checkbox. I'm going to focus on the other styles. Today went well. I was able to style the filters and bottom navbar. I was also able to get my delete and edit icons to appear on hover.

### 03/16/2022

Hi. Today I'm going to focus on the other styling. I will also try to add the Drag and Drop.

Resources:

- [How to Add Drag and Drop in React with React Beautiful DND](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/)
- [Repository for DND](https://github.com/colbyfayock/my-final-space-characters/blob/master/src/App.js)
- [Build a To-Do App using React with Drag-and-Drop Functionality](https://betterprogramming.pub/build-a-to-do-app-using-react-with-drag-and-drop-functionality-954080ee9644)

### 03/17/2022

Happy St. Patrick's Day! Today I'm going to try the Drag and Drop. Wish me luck. Well, I didn't have any luck with DND. Will Try tomorrow.

### 03/19/2022

Happy Saturday! I spent some time on another activity yesterday. I am back to this today. My goal is to add more to my TodoList component for the DND. I tried doing the DND feature with not luck. I think it's because of how my components are structured. I've tried DND. I still got the error about the Draggable id requiring an integer index prop.

### 03/25/2022

Hi, I'm back again. I was working on another project. So, the last time I was here, I tried to do Draggable N Droppable. It didn't work for me yet. I may abandon that part of the project and make another todo list with that feature. 4:15pm- I decided to abandon the DND on this project. I will probably do another one with the DND later.

#### Part 2

I've decided to redo the project over because I really want to included the DND. So, this is my new version.

### 03/26/2022

Good morning. I am back to continue working on this new version of my todo app. I added what I needed for my DND Todo List. Tomorrow I will try the DND.

### 03/28/2022

Good afternoon. Time does get away from me. So I'm working on my todo list with DND today.
Still had problems with setting up the dnd.

### 03/29/2022

Good Morning. Today I'm going to try again with DND. This time I may use the HTML Drag and Drop API. I had such a tough time getting the React DND to work with my app. I'm determined to get this to work... I got sidetracked but I'm back. I have the dragging working, but the dropping is wonky. The dragged item won't stay in the placeholder.

Resources:

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [How to Use HTML Drag and Drop API with React](https://w3collective.com/drag-drop-react/#:~:text=In%20this%20tutorial%20we'll,lists%2C%20voting%2C%20or%20quizes.)

### 03/30/2022

Good morning. Trying to DND again. I was able to add the code without getting console errors. However, the dragged item won't stay in the placeholder.

### 01/08/2023

Happy New Year! It has been a long time since I've worked on this project. I did get my React Nanodegree from Udacity. It's time for me to keep my skills current. The last time I worked on this project, my dragged item wouldn't stay in the place where I dragged it to. I tried saving the item order state when dragging the item. It didn't work. I will have to look at it next time.

Resources:

- [How to add Drag and Drop in React with React Beautiful DND](https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/)

---

Code holder

.attribution { font-size: 11px; text-align: center; }
.attribution a { color: hsl(228, 45%, 44%); }

Todo

  <!-- Add dynamic number --> items left

All
Active
Completed

Clear Completed

Drag and drop to reorder list

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>

<ul
               className='todo-list'
               aria-labelledby='list-heading'
            >
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-0' type='checkbox' defaultChecked={true} />
                    <label className='todo-label' htmlFor='todo-0'>
                        Pick up groceries
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-1' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-1'>
                        Take Shinxley and Mozeley to the vet
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-2' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-2'>
                        Vacuum
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-3' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-3'>
                        Wash clothes
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-4' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-4'>
                        Make doctor's appointment
                    </label>
                </li>
                <li className='todo'>
                    <FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />
                    <input id='todo-5' type='checkbox' />
                    <label className='todo-label' htmlFor='todo-5'>
                        Make hair appointment with Jenice.
                    </label>
                </li>
            </ul>

<FontAwesomeIcon
                        className='input-icon'
                        icon={faCircle}
                    />

<TodoList name='Eat' completed={true} id='todo-0' />
              <TodoList name='Sleep' completed={false} id='todo-1'/>
              <TodoList name='Repeat' completed={false} id='todo-2'/>

              <div className='todos-count'>3 tasks remaining
                </div>
                <div className='control-btn desktop-filter-control btn-group'>
                  All Active completed
                </div>
                <div className='control-btn'>
                  <button className='btn'>
                    Clear Completed
                  </button>
                </div>



                <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn">
                    <img src={editIcon} alt='icon-edit' /> <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}>
                    <img src={crossIcon} alt='icon-cross' /> <span className="visually-hidden">{props.name}</span>
                </button>
            </div>

mobile
<button type="button" className="btn toggle-btn" aria-pressed="true">
<span className="visually-hidden">Show </span>
<span>all</span>
<span className="visually-hidden"> tasks</span>
</button>
<button type="button" className="btn toggle-btn" aria-pressed="false">
<span className="visually-hidden">Show </span>
<span>Active</span>
<span className="visually-hidden"> tasks</span>
</button>
<button type="button" className="btn toggle-btn" aria-pressed="false">
<span className="visually-hidden">Show </span>
<span>Completed</span>
<span className="visually-hidden"> tasks</span>
</button>

/\*@mixin themed() {

    @each $theme,
    $map in $themes {
        .theme-#{$theme} & {
            $theme-map: () !global;

            @each $key,
            $submap in $map {
                $value: map-get(map-get($themes, $theme), '#{$key}');
                $theme-map: map-merge($theme-map, ($key: $value)) !global;
            }

            @content;
            $theme-map: null !global;
        }
    }

}

@function t($key) {
    @return map-get($theme-map, $key);
}\*/
