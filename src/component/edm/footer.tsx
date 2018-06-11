import * as React from "react";
import {img_site, img_telephone, img_code} from './config';
export const Footer = () => {
    return (
        <table border="0" cellspacing="0" cellpadding="0" width="800" align="center">
            <tr>
                <td>
                    <table width="800" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td width="78"></td>
                            <td>
                                <a href="https://www.clubmed.com.cn?utm_source=edm&utm_medium=Email&utm_campaign=EM_EA3Y_sunS18EBBPhase10306&utm_content=edm&cmcid=EM_sunS18EBBPhase10306" style={{color:'#000',fontSize: 18}} target="_blank">
                                    <img src={img_site} width="186" height="126" alt="假期早规划优惠享不停" />
                                </a>
                            </td>
                            <td width="75"></td>
                            <td>
                                <table>
                                    <tr>
                                        <td>
                                            <a href="tel:021-6197-2846">
                                                <img src={img_telephone} width="155" height="76" alt="假期早规划优惠享不停" style={{display:'block'}} />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="50" align="top" style={{verticalAlign: 'top',textAlign: 'center'}}>
                                            <a href="tel:021-6197-2846" style={{fontSize: 16,color: '#3e3a39', textDecoration: 'none'}}>
                                                021-6197-2846
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td width="105"></td>
                            <td>
                                <img src={img_code} width="135" height="126" alt="假期早规划优惠享不停" />
                            </td>
                            <td width="66"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td height="25"></td>
            </tr>
            <tr>
                <td align="center">
                    <a href="https://www.clubmed.com.cn?utm_source=edm&utm_medium=Email&utm_campaign=EM_EA3Y_sunS18EBBPhase10306&utm_content=edm&cmcid=EM_sunS18EBBPhase10306" style={{color:'#000',fontSize: 18}} target="_blank">*详情请查看官网信息</a>
                </td>
            </tr>
            <tr>
                <td height="25"></td>
            </tr>
            <tr>
                <td align="center">
                    <a href="<%@ include view='UnsubLinkGC' %>" target="_blank" style={{color:'#000',fontSize: 12}}>如果您不想收到Club Med特别优惠及相关信息,请点击这里</a>
                </td>
            </tr>
            <tr>
                <td height="25"></td>
            </tr>
        </table>
    );
};