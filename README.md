# ✅ To-Do List | Stay Organized, Get Things Done

<p align="center">
  <strong>A simple, responsive, and interactive task management web app to organize daily activities and boost productivity.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Storage-LocalStorage-4CAF50?style=for-the-badge" alt="Local Storage"/>
</p>

## 📌 About the Project

**To-Do List** is a lightweight web application designed to make daily task management simple and convenient.

Users can add tasks, mark them as completed, remove tasks, and personalize the interface with different color themes. The application uses the browser's Local Storage to retain tasks and the selected theme across page reloads.

Built using core web technologies, this project demonstrates DOM manipulation, event handling, browser storage, and responsive UI development.

## ✨ Features

- ➕ **Add Tasks:** Quickly create tasks for your daily activities.
- ✅ **Mark as Completed:** Track finished tasks with a completion indicator.
- 🗑️ **Delete Tasks:** Remove tasks that are no longer needed.
- 💾 **Local Storage:** Retains saved tasks and theme preferences in the browser.
- 🎨 **Theme Customization:** Switch between standard, light, and darker themes.
- 🕒 **Date and Time on Load:** Shows the date and time when the page opens; the display does not update continuously.
- 📱 **Responsive Interface:** Designed to work across different screen sizes.
- ✨ **Interactive UI:** Includes task action buttons, icons, and visual transitions.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Web page structure |
| CSS3 | Styling, themes, and layout |
| JavaScript | Task operations and interactivity |
| Local Storage API | Browser-based task persistence |
| Font Awesome | Task action icons |
| Google Fonts | Typography |

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser and a code editor such as VS Code.

### 1. Clone the repository

```bash
git clone https://github.com/sumitgole011/To-Do-list.git
cd To-Do-list
```

### 2. Open the project folder

Navigate to the application files:

```text
todo-list-master/todo-list-master/
```

The main files are:

- `index.html` — application structure
- `CSS/main.css` — primary styling and theme styles
- `CSS/corner.css` — additional visual styling
- `JS/main.js` — task management and local storage logic
- `JS/time.js` — date and time display

### 3. Run the application

Open `index.html` in your browser.

For development in VS Code, you can also use the **Live Server** extension to launch the page on a local development server.

No backend server or database setup is required.

## 📂 Project Structure

```text
To-Do-list/
└── todo-list-master/
    └── todo-list-master/
        ├── index.html
        ├── CSS/
        │   ├── main.css
        │   └── corner.css
        ├── JS/
        │   ├── main.js
        │   └── time.js
        ├── README.md
        └── AUTHORS
```

## ⚙️ How It Works

1. Enter a task in the input field.
2. Click the add button to create the task.
3. Mark tasks as completed using the check button.
4. Delete unwanted tasks using the trash button.
5. Choose a theme to customize the interface.
6. Refresh the page to see tasks and theme preferences restored from browser storage.

**Note:** Saved tasks are stored in the current browser's Local Storage, not in an online database. They are not automatically synchronized across devices.

**Current limitation:** Only task text is saved. Completed/checkmark status is not stored, so completed tasks appear unchecked after a page reload.

## 🧹 Resetting Saved Data

Tasks and theme preferences are saved locally in your browser. To start fresh, open your browser's developer tools, go to the **Application** (or **Storage**) panel, and clear the Local Storage for the page's origin. Reload the page afterward.

**Warning:** Clearing this storage removes the saved tasks and theme preferences for this app in that browser. This cannot be undone unless you have a separate backup. Browser menu names may vary.

## 🧠 Concepts Demonstrated

- HTML page structure and semantic elements
- CSS styling and theme customization
- JavaScript DOM manipulation
- Event listeners and event handling
- Dynamic HTML element creation
- Arrays and JSON serialization
- Browser Local Storage
- Responsive web design
- Basic UI animations and transitions

## 🔮 Future Improvements

- 📅 Add task deadlines and due-date reminders.
- 🏷️ Introduce task categories and priorities.
- 🔍 Add task search and filtering.
- 📊 Display progress statistics for completed tasks.
- ✏️ Allow users to edit existing tasks.
- ☁️ Add user authentication and cloud synchronization.
- 📱 Improve the mobile experience with additional UI refinements.

## 🙏 Original Project and Credits

This repository contains the To-Do List project originally published at [lordwill1/todo-list](https://github.com/lordwill1/todo-list). The included application's GitHub corner links to that upstream repository, and the bundled [`AUTHORS`](todo-list-master/todo-list-master/AUTHORS) file records its original contributors. The root README provides documentation for this repository's copy.

## 👨‍💻 Repository Maintainer

**Sumit Gole**

- GitHub: [@sumitgole011](https://github.com/sumitgole011)
- Repository: [To-Do List](https://github.com/sumitgole011/To-Do-list)

---

<p align="center">
  <strong>Plan your day. Track your progress. Get things done. ✅</strong>
</p>
