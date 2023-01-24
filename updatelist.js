var updatelist_musik = {
    "source": "Musik",
    "content": [
        {
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