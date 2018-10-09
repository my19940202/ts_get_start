import * as React from "react";
import {Render} from '@baidu/rcre-core';

// 熟悉RCRE的各种使用套路
function deleteItem(dataSource, key) {
    return dataSource.filter(item => item.rowKey !== key);
}

function addItem(dataSource, key) {
    dataSource.push(
        {
            "rowKey": dataSource.length + 1,
            "title": key
        }
    )
    return dataSource;
}

function moveUpItem(dataSource, key) {
    let moveIndex = dataSource.indexOf(dataSource.find(item => item.rowKey === key));
    if (moveIndex > 0) {
        dataSource[moveIndex - 1] = dataSource.splice(moveIndex, 1, dataSource[moveIndex - 1])[0]
    }
    return dataSource;
}

function moveDownItem(dataSource, key) {
    let moveIndex = dataSource.indexOf(dataSource.find(item => item.rowKey === key));
    if (moveIndex < dataSource.length - 1) {
        dataSource[moveIndex] = dataSource.splice(moveIndex + 1, 1, dataSource[moveIndex])[0]
    }
    return dataSource;
}

function reverseFormItem(dataSource) {
    console.log(dataSource);
    return dataSource.reverse();
}

window.RCRE.filter.setFilter('deleteItem', deleteItem);
window.RCRE.filter.setFilter('moveUpItem', moveUpItem);
window.RCRE.filter.setFilter('moveDownItem', moveDownItem);
window.RCRE.filter.setFilter('addItem', addItem);
window.RCRE.filter.setFilter('reverseFormItem', reverseFormItem);

export const RcreDemo = () => {
    document.title = 'rcre入门使用';

    // const config: any = {
    //     body: [{
    //             type: 'text',
    //             text: 'helloworld'
    //         }, {
    //             "type": "container",
    //             "model": "formThree",
    //             "children": [
    //                 {
    //                     "type": "input",
    //                     "name": "text",
    //                     "style": {
    //                         "width": 200
    //                     }
    //                 },
    //                 {
    //                     "type": "text",
    //                     "text": "如果你给input组件输入一些文字，文字的值会自动同步到Container组件"
    //                 },
    //                 {
    //                     "type": "text",
    //                     "style": {
    //                         "display": "block"
    //                     },
    //                     "text": "从Container组件读取到的值： #ES{$data.text}"
    //                 }
    //             ]
    //         }, {
    //             "type": "container",
    //             "model": "hiddenExample",
    //             "data": {
    //                 "hidden": false
    //             },
    //             "children": [{
    //                 "type": "checkbox",
    //                 "text": "隐藏",
    //                 "name": "hidden"
    //             }, {
    //                 "type": "text",
    //                 "text": "这是一个文本 this I书特",
    //                 "hidden": "#ES{$data.hidden}",
    //                 "style": {
    //                     "fontSize": 20
    //                 }
    //             }, {
    //                 "type": "text",
    //                 "text": "这是另外一个文本",
    //                 "show": "#ES{$data.hidden}"
    //             }]
    //         }, {
    //             "type": "container",
    //             "model": "testExample",
    //             "data": {
    //                 "test": false
    //             },
    //             "children": [
    //                 {
    //                     "type": "div",
    //                     "name": "text",
    //                     "style": {
    //                         "width": 400,
    //                         "height": 80,
    //                         "background": "red"
    //                     }
    //                 }, {
    //                     "type": "input",
    //                     "name": "text",
    //                     "style": {
    //                         "width": 200,
    //                         "color": "red",
    //                         "fontSize": 18
    //                     }
    //                 }
    //             ]
    //         }, {
    //             "type": "container",
    //             "model": "xsb_test",
    //             "children": [
    //                 {
    //                     "type": "div",
    //                     "children": [{
    //                             "type": "checkbox",
    //                             "text": "转换前",
    //                             "name": "fuck1"
    //                         }, {
    //                             "type": "text",
    //                             "text": "content: #ES{$data.fuck1}",
    //                         }]
    //                 }
    //             ]
    //         }
    //     ]
    // };

    // let configData: any  = {
    //     body: [{
    //             "type": "container",
    //             "model": "loading",
    //             "data": {
    //                 "q": "apple"
    //             },
    //             "dataProvider": [
    //                 {
    //                     "mode": "ajax",
    //                     // "namespace": "firstRequest",
    //                     "config": {
    //                         "url": "https://api.github.com/search/repositories",
    //                         "method": "GET",
    //                         "data": {
    //                             "q": "#ES{$data.q}"
    //                         }
    //                     },
    //                     // response时 rewrite
    //                     // "responseRewrite": {
    //                     //     "node_id": "#ES{$output.items[0].node_id || 'fuck you'}",
    //                     //     "created_at": "#ES{$output.items[0].created_at || 'fuck you'}"
    //                     // },
    //                     "debug": true

    //             ],
    //             "children": [
    //                 {
    //                     "type": "text",
    //                     "hidden": "#ES{$data.$loading === false}",
    //                     "text": "loading..."
    //                 },
    //                 {
    //                     "type": "text",
    //                     "hidden": "#ES{$data.$loading === true}",
    //                     "text": "total count: #ES{$data.total_count}"
    //                 }, {
    //                     "type": "text",
    //                     "text": "刷新页面即能看到加载中"
    //                 }, {
    //                     "type": "text",
    //                     "name": "node_id",
    //                     "text": "#ES{$data.items[0].node_id}"
    //                 }, {
    //                     "type": "text",
    //                     "name": "created_at",
    //                     "text": "#ES{$data.items[0].created_at}"
    //                 }
    //             ]
    //     }]
    // };

    // let configTri:any = {
    //     "body": [
    //         {
    //             "type": "container",
    //             "model": "triggerExample",
    //             "data": {
    //                 "count": 0
    //             },
    //             "dataCustomer": {
    //                 "customers": [
    //                     {
    //                         "mode": "pass",
    //                         "name": "updateCount",
    //                         "config": {
    //                             "model": "triggerExample",
    //                             "assign": "#ES{$trigger.updateCount}"
    //                         }
    //                     }
    //                 ]
    //             },
    //             "children": [
    //                 {
    //                     "type": "text",
    //                     "text": "now count is: #ES{$data.count}"
    //                 }, {
    //                     "type": "button",
    //                     "text": "click to add",
    //                     "trigger": [
    //                         {
    //                             "event": "onClick",
    //                             "targetCustomer": "updateCount",
    //                             "params": {
    //                                 "count": "#ES{$data.count + 1}"
    //                             }
    //                         }
    //                     ]
    //                 }, {
    //                     "type": "button",
    //                     "text": "click to cut",
    //                     "trigger": [
    //                         {
    //                             "event": "onClick",
    //                             "targetCustomer": "updateCount",
    //                             "params": {
    //                                 "count": "#ES{$data.count - 1}"
    //                             }
    //                         }
    //                     ]
    //                 }
    //             ]
    //         }
    //     ]
    // };

    // let divOO: any = {
    //     body: [{
    //         "type": "container",
    //         "model": "xsb_div_test",
    //         "children": [{
    //             "type": "div",
    //             "style": {
    //                 "padding": 10,
    //                 "background": "red"
    //             },
    //             "children": [{
    //                 "type": "div",
    //                 "style": {
    //                     "padding": 10,
    //                     "background": "blue"
    //                 },
    //                 "children": [{
    //                     "type": "div",
    //                     "style": {
    //                         "width": 300,
    //                         "height": 300,
    //                         "padding": 10,
    //                         "background": "yellow"
    //                     }
    //                 }]
    //             }]
    //         }]
    //     }]
    // };

    // let configRow:any = {
    //     "body": [
    //         {
    //             "type": "row",
    //             "showBorder": true,
    //             "children": [
    //                 {
    //                     "type": "text",
    //                     "style": {
    //                         'border': '1px solid red'
    //                     },
    //                     "text": "A"
    //                 },
    //                 {
    //                     "type": "text",
    //                     "style": {
    //                         'border': '1px solid red'
    //                     },
    //                     "text": "B"
    //                 },
    //                 {
    //                     "type": "text",
    //                     "style": {
    //                         'border': '1px solid red'
    //                     },
    //                     "text": "C"
    //                 },
    //                 {
    //                     "type": "text",
    //                     "style": {
    //                         'border': '1px solid red'
    //                     },
    //                     "text": "D"
    //                 }
    //             ]
    //         }
    //     ]
    // };

    // // 理解parent和props的用法
    // let propsConfig:any = {
    //     body: [{
    //         "type": "container",
    //         "model": "props_test",
    //         "data": {
    //             "q": "apple",
    //             "num": 1
    //         },
    //         // "dataProvider": [
    //         //     {
    //         //         "mode": "ajax",
    //         //         "config": {
    //         //             "url": "https://api.github.com/search/repositories",
    //         //             "method": "GET",
    //         //             "data": {
    //         //                 "q": "#ES{$data.q}"
    //         //             }
    //         //         },
    //         //         "responseRewrite": {
    //         //             "num": "#ES{$output.items.length}",
    //         //         },
    //         //         "debug": true
    //         // ],
    //         "children": [
    //             {
    //                 "type": "container",
    //                 "model": "fuck_test",
    //                 "dataCustomer": {
    //                     "customers": [
    //                         {
    //                             "mode": "pass",
    //                             "name": "add",
    //                             "config": {
    //                                 "model": "props_test",
    //                                 "assign": "#ES{$trigger.add}"
    //                             }
    //                         }
    //                     ]
    //                 },
    //                 "children": [
    //                     {
    //                         "type": "text",
    //                         "text": "#ES{$parent.num}",
    //                         "trigger": [
    //                             {
    //                                 "event": "onClick",
    //                                 "targetCustomer": "add",
    //                                 "params": {
    //                                     "num": "#ES{$parent.num + 1}"
    //                                 },
    //                                 debug: true
    //                             }
    //                         ],
    //                         "style": {
    //                             display: 'block',
    //                             padding: 20,
    //                             color: '#fff',
    //                             background: '#bbb'
    //                         }
    //                     },
    //                 ]
    //             },
    //             {
    //                 "type": "container",
    //                 "model": "xsb_test",
    //                 "data": {
    //                     len: 1
    //                 },
    //                 "dataProvider": [
    //                     {
    //                         "mode": "ajax",
    //                         "config": {
    //                             "url": "https://api.github.com/search/repositories",
    //                             "method": "GET",
    //                             "data": {
    //                                 "q": "#ES{$parent.num}"
    //                             }
    //                         },
    //                         "responseRewrite": {
    //                             "len": "#ES{$output.total_count}",
    //                         },
    //                         "debug": true
    //                     }
    //                 ],
    //                 "children": [
    //                     {
    //                         "type": "text",
    //                         "text": "#ES{$data.len}",
    //                         "style": {
    //                             display: 'block',
    //                             padding: 20,
    //                             color: '#fff',
    //                             background: '#ddd'
    //                         }
    //                     },
    //                 ]
    //             },

    //         ]
    //     }]
    // };

    let checkBox:any = {
        body: [{
            type: "container",
            model: "xx_xx",
            data: {
                checkboxList: [{
                    key: 'test',
                    text: 'test',
                }, {
                    text: 'funk',
                    key: 'funk',
                }]
            },
            children: [
                {
                    type: 'form',
                    name: 'filterForm',
                    children:[
                        {
                            type: 'formItem',
                            label: '维度',
                            labelCol: {
                                span: 3
                            },
                            wrapperCol: {
                                span: 21
                            },
                            required: true,
                            hasFeedBack: false,
                            control: {
                                type: 'checkbox',
                                name: 'dimensions',
                                groups: '#ES{$data.checkboxList)}'
                            }
                        },
                        {
                            type: 'text',
                            text: 'test btn',
                            trigger:[
                                {
                                    event: 'onClick',
                                    targetCustomer: '$this',
                                    params: {
                                        // test: '#ES{console.log(123)}',
                                        checkboxList: [{
                                                key: 'test',
                                                text: 'test'
                                            }, {
                                                key: 'funk',
                                                text: 'funk'
                                            }]
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }]
    };

    let newCheckBox:any = {
        body: [{
            type: "container",
            model: "xx_xx",
            data: {
                "groups": [
                    {
                        "key": "name",
                        "text": "姓名"
                    },
                    {
                        "key": "age",
                        "text": "年龄"
                    },
                    {
                        "key": "company",
                        "text": "公司"
                    }
                ]
            },
            children: [
                 {
                    "type": "checkbox",
                    "name": "boxGroup",
                    "groups": "#ES{$data.groups}",
                    "groupSelectAll": true
                }
            ]
        }]
    };

    let newForeachData:any = {
        "body": [
            {
                "type": "container",
                "model": "forEachFormWithRowKey",
                "data":  {
                    "dataSource": [
                        {
                            "rowKey": 1,
                            "title": "username"
                        }, {
                            "rowKey": 2,
                            "title": "password"
                        }, {
                            "rowKey": 3,
                            "title": "email"
                        }
                    ]
                },
                "children": [
                    {
                        "type": "form",
                        "name": "rowKeydemo",
                        "children": [
                            {
                                "type": "foreach",
                                "dataSource": "#ES{$data.dataSource}",
                                "control": {
                                    "type": "row",
                                    "children": [
                                        {
                                            "type": "formItem",
                                            "label": "#ES{$item.title}",
                                            "control": {
                                               "type": "input",
                                               "style": {
                                                  "width": 150
                                               },
                                               "name": "formData.#ES{$index}.value"
                                            },
                                            "gridCount": 8
                                        }, {
                                            "type": "icon",
                                            "icon": "arrow-up",
                                            "style": {
                                                "cursor": "pointer"
                                            },
                                            "trigger": [{
                                                "event": "onClick",
                                                "targetCustomer": "$this",
                                                "params": {
                                                    "dataSource": "#ES{moveUpItem($data.dataSource, $index)}"
                                                },
                                                "debug": true
                                            }],
                                            "gridWidth": 40
                                        }, {
                                            "type": "icon",
                                            "icon": "arrow-down",
                                            "style": {
                                                "cursor": "pointer"
                                            },
                                            "trigger": [{
                                                "event": "onClick",
                                                "targetCustomer": "$this",
                                                "params": {
                                                    "dataSource": "#ES{moveDownItem($data.dataSource, $index)}"
                                                },
                                                "debug": true
                                            }],
                                            "gridWidth": 40
                                        }, {
                                            "type": "icon",
                                            "icon": "delete",
                                            "style": {
                                                "cursor": "pointer"
                                            },
                                            "trigger": [{
                                                "event": "onClick",
                                                "targetCustomer": "$this",
                                                "params": {
                                                    "dataSource": "#ES{deleteItem($data.dataSource, $index)}"
                                                },
                                                "debug": true
                                            }],
                                            "gridWidth": 40
                                        }
                                    ]
                                }
                            }
                        ]
                    },
                    {
                        "type": "text",
                        "text": "#ES{$data.formData}"
                    },
                    {
                        "type": "input",
                        "name": "addName"
                    },
                    {
                        "type": "button",
                        "text": "Add",
                        "trigger": [{
                            "event": "onClick",
                            "targetCustomer": "$this",
                            "params": {
                                "dataSource": "#ES{addItem($data.dataSource, $data.addName)}"
                            }
                        }]
                    }, {
                        "type": "button",
                        "text": "Reverse",
                        "trigger": [{
                            "event": "onClick",
                            "targetCustomer": "$this",
                            "params": {
                                "dataSource": "#ES{reverseFormItem($data.dataSource)}"
                            }
                        }]
                    }
                ]
            }
        ]
    };

    return (
        <div>
            <h1>rcre入门使用</h1>
            {
                // <Render code={JSON.stringify(config)} />
                // <h1>数据获取</h1>
                // <Render code={JSON.stringify(configData)} />
                
                // <h1>事件</h1>
                // <Render code={JSON.stringify(configTri)} />
    
                // <h1>组件事件通信</h1>
    
                // <h1>元素嵌套 和布局</h1>
                // <Render code={JSON.stringify(divOO)} />
                // <Render code={JSON.stringify(configRow)} />

                // <h1>理解parent和props的用法</h1>
                // <Render code={JSON.stringify(propsConfig)} />
                <Render code={JSON.stringify(newForeachData)} />
            }
            <h1>testExample you</h1>
        </div>
    );
};
