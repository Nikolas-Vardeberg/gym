import { browser } from "process";
import { CgBrowser } from "react-icons/cg";


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
                        ]),
                ),
            S.divider(),
            //BLOG -----------
            //GLOBAL ----------
        ])

