var updatelist_musik = {
    "source": "Musik",
    "content": [
        {
            id: "dv.1.22101.1",
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

luckyapp_core.modules.updates.updatelists.musik = {loaded: true};
luckyapp_core.modules.updates.updatelists.musik.list = updatelist_musik;