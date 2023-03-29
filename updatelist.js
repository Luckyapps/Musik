var updatelist_musik = {
    "source": "Musik",
    "content": [
        {
            id: "v.1.23031.1",
            title: "",
            name: "",
            date: "29.03.2023",
            type: "Release",
            description: "<ul><li><b>Originals</b><ul><li>Unter Originals werden <b>Originalinhalte verfügbar</b> sein.</li><li>Die Seite Originals kann über das Menüband geöffnet werden.</li><li><span style='color:red'><b>Achtung:</b> Funktion noch in einem frühen Entwicklungsstadium.</span></li></ul></li><li>Einstellungen.<ul><li>In den Einstellungen werden jetzt die genauen Versionsinformationen zu einzelnen Updates Angezeigt.</li></ul></li><li>Durch das drücken der Zurück-Taste am Smartphone oder dem zurücknavigieren im Browser wird nun das Flyin geschlossen.</li><li>Experimente mit <b>Radiotext für Radio Sauerland</b> <ul><li>Funktion noch in der Testphase.</li><li>Außerdem in Arbeit: Wenn verfügbar Album cover und andere Informationen auf dem Songscreen anzeigen lassen.</li></ul>"
        },{
            id: "v.1.23011.1",
            title: "Luckyapp Musik 2",
            name: "Brandneue Version",
            date: "24.01.2023",
            type: "Release",
            description: "<ul><li>Dies ist die erste Version, also gibt es keine Änderungen.</li></ul>"
        }
    ]
};

if(luckyapp_core){
    luckyapp_core.modules.updates.updatelists.musik = {loaded: true};
    luckyapp_core.modules.updates.updatelists.musik.list = updatelist_musik;
}