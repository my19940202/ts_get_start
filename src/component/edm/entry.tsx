import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { Content } from "./content";

export const Entry = () => {
    return (
        <table width="800" border="0" cellpadding="0" cellspacing="0" align="center">
            <tbody><tr><td>
                <Header/>
                <Content/>
                <Footer/>
            </td></tr></tbody>
        </table>
    );
};