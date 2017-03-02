"use strict";
var Task = (function () {
    function Task(date, title, description, priority) {
        if (date && title && description && priority) {
            this.date = date;
            this.title = title;
            this.description = description;
            this.priority = priority;
        }
        else {
            date = null;
            title = null;
            description = null;
            priority = null;
        }
    }
    return Task;
}());
exports.Task = Task;
