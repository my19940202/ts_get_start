import * as React from "react";
import {Render} from '@baidu/rcre-core';

// 熟悉RCRE的各种使用套路 
export const RcreDemo = () => {
    document.title = 'rcre入门使用';

    const config: any = {
        body: [{
                type: 'text',
                text: 'helloworld'
            }, {
                "type": "container",
                "model": "formThree",
                "children": [
                    {
                        "type": "input",
                        "name": "text",
                        "style": {
                            "width": 200
                        }
                    },
                    {
                        "type": "text",
                        "text": "如果你给input组件输入一些文字，文字的值会自动同步到Container组件"
                    },
                    {
                        "type": "text",
                        "style": {
                            "display": "block"
                        },
                        "text": "从Container组件读取到的值： #ES{$data.text}"
                    }
                ]
            }, {
                "type": "container",
                "model": "hiddenExample",
                "data": {
                    "hidden": false
                },
                "children": [{
                    "type": "checkbox",
                    "text": "隐藏",
                    "name": "hidden"
                }, {
                    "type": "text",
                    "text": "这是一个文本 this I书特",
                    "hidden": "#ES{$data.hidden}",
                    "style": {
                        "fontSize": 20
                    }
                }, {
                    "type": "text",
                    "text": "这是另外一个文本",
                    "show": "#ES{$data.hidden}"
                }]
            }, {
                "type": "container",
                "model": "testExample",
                "data": {
                    "test": false
                },
                "children": [
                    {
                        "type": "div",
                        "name": "text",
                        "style": {
                            "width": 400,
                            "height": 80,
                            "background": "red"
                        }
                    }, {
                        "type": "input",
                        "name": "text",
                        "style": {
                            "width": 200,
                            "color": "red",
                            "fontSize": 18
                        }
                    }
                ]
            }, {
                "type": "container",
                "model": "xsb_test",
                "children": [
                    {
                        "type": "div",
                        "children": [{
                                "type": "checkbox",
                                "text": "转换前",
                                "name": "fuck1"
                            }, {
                                "type": "text",
                                "text": "content: #ES{$data.fuck1}",
                            }]
                    }
                ]
            }
        ]
    };

    let configData: any  = {
        body: [{
                "type": "container",
                "model": "loading",
                "data": {
                    "q": "apple"
                },
                "dataProvider": [
                    {
                        "mode": "ajax",
                        // "namespace": "firstRequest",
                        "config": {
                            "url": "https://api.github.com/search/repositories",
                            "method": "GET",
                            "data": {
                                "q": "#ES{$data.q}"
                            }
                        },
                        // response时 rewrite
                        // "responseRewrite": {
                        //     "node_id": "#ES{$output.items[0].node_id || 'fuck you'}",
                        //     "created_at": "#ES{$output.items[0].created_at || 'fuck you'}"
                        // },
                        "debug": true
                    },

                ],
                "children": [
                    {
                        "type": "text",
                        "hidden": "#ES{$data.$loading === false}",
                        "text": "loading..."
                    },
                    {
                        "type": "text",
                        "hidden": "#ES{$data.$loading === true}",
                        "text": "total count: #ES{$data.total_count}"
                    }, {
                        "type": "text",
                        "text": "刷新页面即能看到加载中"
                    }, {
                        "type": "text",
                        "name": "node_id",
                        "text": "#ES{$data.items[0].node_id}"
                    }, {
                        "type": "text",
                        "name": "created_at",
                        "text": "#ES{$data.items[0].created_at}"
                    }
                ]
        }]
    }

    let configTri:any = {
        "body": [
            {
                "type": "container",
                "model": "triggerExample",
                "data": {
                    "count": 0
                },
                "dataCustomer": {
                    "customers": [
                        {
                            "mode": "pass",
                            "name": "updateCount",
                            "config": {
                                "model": "triggerExample",
                                "assign": "#ES{$trigger.updateCount}"
                            }
                        }
                    ]
                },
                "children": [
                    {
                        "type": "text",
                        "text": "now count is: #ES{$data.count}"
                    }, {
                        "type": "button",
                        "text": "click to add",
                        "trigger": [
                            {
                                "event": "onClick",
                                "targetCustomer": "updateCount",
                                "params": {
                                    "count": "#ES{$data.count + 1}"
                                }
                            }
                        ]
                    }, {
                        "type": "button",
                        "text": "click to cut",
                        "trigger": [
                            {
                                "event": "onClick",
                                "targetCustomer": "updateCount",
                                "params": {
                                    "count": "#ES{$data.count - 1}"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };

    let divOO: any = {
        body: [{
            "type": "container",
            "model": "xsb_div_test",
            "children": [{
                "type": "div",
                "style": {
                    "padding": 10,
                    "background": "red"
                },
                "children": [{
                    "type": "div",
                    "style": {
                        "padding": 10,
                        "background": "blue"
                    },
                    "children": [{
                        "type": "div",
                        "style": {
                            "width": 300,
                            "height": 300,
                            "padding": 10,
                            "background": "yellow"
                        }
                    }]
                }]
            }]
        }]
    }

    let configRow:any = {
        "body": [
            {
                "type": "row",
                "showBorder": true,
                "children": [
                    {
                        "type": "text",
                        "style": {
                            'border': '1px solid red'
                        },
                        "text": "A"
                    },
                    {
                        "type": "text",
                        "style": {
                            'border': '1px solid red'
                        },
                        "text": "B"
                    },
                    {
                        "type": "text",
                        "style": {
                            'border': '1px solid red'
                        },
                        "text": "C"
                    },
                    {
                        "type": "text",
                        "style": {
                            'border': '1px solid red'
                        },
                        "text": "D"
                    }
                ]
            }
        ]
    };

    return (
        <div>
            <h1>rcre入门使用</h1>
            <Render code={JSON.stringify(config)} />
            <h1>数据获取</h1>
            <Render code={JSON.stringify(configData)} />
            
            <h1>事件</h1>
            <Render code={JSON.stringify(configTri)} />

            <h1>组件事件通信</h1>

            <h1>元素嵌套 和布局</h1>
            <Render code={JSON.stringify(divOO)} />
            <Render code={JSON.stringify(configRow)} />

            
        </div>
    );
};
