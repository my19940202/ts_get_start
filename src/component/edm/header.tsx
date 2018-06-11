import * as React from "react";
import {track_code, header_title, header_link} from './config';
const style1:any = {
    fontSize: 12,
    textAlign: 'center',
    margin: 0,
    padding: 0,
    color: '#6E6E6E',
};
const logoImg:string = 'images/logo.jpg';

export const Header = () => {
    return (
        <table width="800" height="108" border="0" cellpadding="0" cellspacing="0" align="center">
            <tr>
                <td align="center" valign="top" height="30">
                    <font face="'Microsoft Yahei', Arial, Helvetica, sans-serif"
                        style={style1}
                        >
                        <a style={{color: '#d96c0d'}} href={header_link} target="_blank">{header_title}</a>
                        <br/><br/>在浏览器中阅读邮件，
                        <a href="<%@ include view='MirrorPageURLGC' %>"  target="_blank" style={{textDecoration:'underline',color:'#6E6E6E'}}>点击这里</a>
                    </font>
                </td>
            </tr>
            <tr>
                <td>
                    <table width="800" height="78" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <a href={header_link} target="_blank">
                                    <img src={logoImg} width="270" height="78" alt="Club Med" style={{display: 'block'}} />
                                </a>
                            </td>
                            <td style={{fontWeight: 'bold',color:'#005589',textAlign: 'right'}}>
                                <p style={{paddingRight: 20}}>
                                    联系我们<br />021-6197-2846
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    );
};