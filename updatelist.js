var updatelist_musik = {
    "source": "Musik",
    "content": [
        {
            id: "dv.1.23011.2",
            title: "Luckyapp Musik Update 1|jan23",
            name: "Bugfix 1",
            date: "11.01.2023",
            type: "BUGFIX",
            description: "<ul><li>IPad Kompatibilität erhöht, indem blur-effekte gefixt werden.</li><li>Die Anzahl der Konsolenausgaben wurde auf ein minimum verringert.</li></ul>"
        },{
            id: "dv.1.23011.1",
            title: "Luckyapp Musik Update 1|jan23",
            name: "Flyin Backbutton",
            date: "03.01.2023",
            type: "UPDATE",
            description: "<ul><li>Neue Möglichkeit zum Schließen des Flyins: <ul><li>Wird der Zurückbutton gedrückt, schließt sich das Flyin.</li></ul></li></ul>"
        },{
            id: "dv.1.22123.2",
            title: "Luckyapp Musik Update 3|dez22",
            name: "",
            date: "28.12.2022",
            type: "BUGFIX",
            description: "<ul><li>Bilder der Kronehit-Untersender wurden nicht richtig angezeigt.</li></ul>"
        },{
            id: "dv.1.22123.1",
            title: "Luckyapp Musik Update 3|dez22",
            name: "&#10084;&#65039;Favoriten 2",
            date: "27.12.2022",
            type: "UPDATE",
            description: "<ul><li>Verbesserung der Favoritenübersicht: <ul><li>Zum Bearbeiten muss nun zunächst ein Button gedrückt werden.</li></ul></li><li>Ein &#10084;&#65039; wurde im Songscreen hinzugefügt, um anzuzeigen, ob der Stream ein Favorit ist, und um es als Favorit auszuwählen.</li></ul>"
        },{
            id: "dv.1.22122.1",
            title: "Luckyapp Musik Update 2|dez22",
            name: "&#10084;&#65039;Favoriten 1",
            date: "23.12.2022",
            type: "UPDATE",
            description: "<ul><li>Favoriten wurden hinzugefügt: <ul><li>Mit einem Klick auf das Herz kann ein Stream zu den Favoriten hinzugefügt oder entfernt werden.</li><li>Über den Button '&#10084;&#65039;Favoriten' können die Favoriten abgerufen werden. <ul><li>Klickt man in dieser Übersicht auf einen der Streams, wird dieser aus den Favoriten entfernt.</li></ul></li></ul></li></ul>"
        },{
            id: "dv.1.22121.1",
            title: "Luckyapp Musik Update 1|dez22",
            name: "",
            date: "22.12.2022",
            type: "UPDATE",
            description: "<ul><li>Neuer Channel: <b>Kronehit</b><ul><li>Es wurden neue Kronehit-Untersender hinzugefügt.</li></ul></li></ul>"
        },{
            id: "dv.1.22111.1",
            title: "Luckyapp Musik Update 1|nov22",
            name: "",
            date: "18.11.2022",
            type: "UPDATE",
            description: "<ul><li>Zuletzt Gespielt: <ul><li>Der Button, über den der Stream gestartet und pausiert werden kann wurde überarbeitet.<ul><li>Neuer Text: Toggle (vorher: >)</li><li>Position und Größe angepasst</li></ul></li></ul></li><li>Settings:<ul><li>Die Einstellungen wurden aufgeräumt.</li><li>Der Reset-Button hat eine Animation.</li></ul></li><li>Designanpassungen<ul><li>Alle Playbuttons haben jetzt einen Schatten.</li><li>Nicht clickbare Homecards haben keine Animation mehr. (Beta)</li></ul></li><li><b>Neuer Abschnitt: Channels</b><ul><li>Es wurde ein Abschnitt im Homebereich hinzugefügt. Dort sieht man eine Übersicht über alle verfügbaren Channel.</li><li>Die Streams eines Channels können durch anclicken angezeigt werden.</li></ul></li></ul>"
        },{
            id: "dv.1.22102.1",
            title: "Luckyapp Musik Update 2|okt22",
            name: "Antenne Bayern Sender",
            date: "18.10.2022",
            type: "UPDATE",
            description: "<ul><li>Design: <ul><li>Channel-Anzeige <ul><li>neue Hintergrundfarbe</li><li>Hintergrundfarbe für die Channelbeschreibung</li></ul></li></ul></li><li>Settings: <ul><li>Die aktuelle Versionsnummer wird angezeigt.</li></ul></li><li><b>neue Sender</b> hinzugefügt <ul><li>Verschiedene <b>Antenne Bayern Themensender</b></li></ul></li><li><b>neuer Channel</b> hinzugefügt: <ul><li><b>Antenne Bayern</b></li></ul></li></ul>"
        },
        {
            id: "dv.1.22101.1",
            title: "Luckyapp Update 1|okt22",
            name:"Bugfix",
            date: "03.10.2022",
            type: "UPDATE",
            description: "<ul><li><b>Bugfix:</b> Es wurde ein Fehler behoben, der dafür gesorgt hat, dass das flyin-Fenster zu hoch geflogen ist, wenn die Seite nach unten gescrollt war.</li></ul>"
        }
    ]
};

if(luckyapp_core){
    luckyapp_core.modules.updates.updatelists.musik = {loaded: true};
    luckyapp_core.modules.updates.updatelists.musik.list = updatelist_musik;
}