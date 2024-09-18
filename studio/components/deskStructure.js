
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
                            S.documentTypeListItem("page").title("Sider"),
                            S.documentTypeListItem("blog").title("Artikkler"),
                            S.documentTypeListItem("category").title("Kategorier"),
                        ]),
                ),
            S.divider(),
            //BLOG -----------
            //GLOBAL ----------
        ])

