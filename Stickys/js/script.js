var db = null;

if (window.openDatabase) {
    db = openDatabase("NoteTest", "1.0", "Stickys Database", 10000000);
    if (!db) {
        alert("Failed to open database");
    }
} else {
    alert("Failed to open database, make sure your browser supports HTML5 web storage");
}
