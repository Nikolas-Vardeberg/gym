
export const deskStructure = (S, context) =>
    S.list()
        .title("Gym Admin")
        .items([
            //PAGES -----------
            S.listItem()
                .title("Sider")
                .child(
                    S.list()
                        .title("Sider")
                        .items([
                            S.documentTypeListItem("home").title("Hjemmeside"),
                            S.documentTypeListItem("page").title("Blog Sider"),
                            S.documentTypeListItem("blog").title("Artikkler"),
                            S.documentTypeListItem("category").title("Kategorier"),
                            S.documentTypeListItem("news").title("Nyheter")
                        ]),
                ),
            S.divider(),
            //BLOG -----------
            //GLOBAL ----------
        ])

