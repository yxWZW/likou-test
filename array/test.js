// const chunk = function (arr, num) {
//   num = num * 1 || 1;
//   var ret = [];
//   arr.forEach(function (item, i) {
//     if (i % num === 0) {
//       ret.push([]);
//     }
//     ret[ret.length - 1].push(item);
//   });
//   return ret;
// };

// const result = chunk([1,2,3,4,5,6,7,8,9,10], 5);
// console.log(result);


const list = [
    {
        "code": 34,
        "father_code": 1,
        "level": "Province",
        "name": "安徽省",
        "sub_districts": [
            {
                "code": 340800,
                "father_code": 34,
                "level": "City",
                "name": "安庆市",
                "sub_districts": [
                    {
                        "code": 340803,
                        "father_code": 340800,
                        "level": "District",
                        "name": "大观区",
                        "sub_districts": [
                            {
                                "code": 340803001,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "德宽路街道"
                            },
                            {
                                "code": 3408031000003,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "海口镇"
                            },
                            {
                                "code": 340803007,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "花亭路街道"
                            },
                            {
                                "code": 340803005,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "集贤路街道"
                            },
                            {
                                "code": 340803004,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "菱湖街道"
                            },
                            {
                                "code": 340803003,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "龙山路街道"
                            },
                            {
                                "code": 340803006,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "石化路街道"
                            },
                            {
                                "code": 3408032010001,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "山口乡"
                            },
                            {
                                "code": 3408032000001,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "十里铺乡"
                            },
                            {
                                "code": 3408035000003,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "皖河农场"
                            },
                            {
                                "code": 340803002,
                                "father_code": 340803,
                                "level": "Town",
                                "name": "玉琳路街道"
                            }
                        ]
                    },
                    {
                        "code": 340822,
                        "father_code": 340800,
                        "level": "District",
                        "name": "怀宁县",
                        "sub_districts": [
                            {
                                "code": 3408221050001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "茶岭镇"
                            },
                            {
                                "code": 340822100,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "高河镇"
                            },
                            {
                                "code": 3408221060001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "公岭镇"
                            },
                            {
                                "code": 340822107,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "黄墩镇"
                            },
                            {
                                "code": 3408221100001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "黄龙镇"
                            },
                            {
                                "code": 3408221130001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "洪铺镇"
                            },
                            {
                                "code": 3408221040001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "金拱镇"
                            },
                            {
                                "code": 3408221140001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "江镇镇"
                            },
                            {
                                "code": 3408222040001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "雷埠乡"
                            },
                            {
                                "code": 3408221120001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "腊树镇"
                            },
                            {
                                "code": 3408222000001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "凉亭乡"
                            },
                            {
                                "code": 3408221030001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "马庙镇"
                            },
                            {
                                "code": 3408221110001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "平山镇"
                            },
                            {
                                "code": 3408222030001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "清河乡"
                            },
                            {
                                "code": 3408222010001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "石镜乡"
                            },
                            {
                                "code": 340822101,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "石牌镇"
                            },
                            {
                                "code": 3408221080001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "三桥镇"
                            },
                            {
                                "code": 340822202,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "秀山乡"
                            },
                            {
                                "code": 3408221090001,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "小市镇"
                            },
                            {
                                "code": 340822102,
                                "father_code": 340822,
                                "level": "Town",
                                "name": "月山镇"
                            }
                        ]
                    },
                    {
                        "code": 3408820000001,
                        "father_code": 340800,
                        "level": "District",
                        "name": "潜山市",
                        "sub_districts": [
                            {
                                "code": 3408821050001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "槎水镇"
                            },
                            {
                                "code": 3408822030001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "痘姆乡"
                            },
                            {
                                "code": 3408821070001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "官庄镇"
                            },
                            {
                                "code": 3408821090001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "黄柏镇"
                            },
                            {
                                "code": 3408821080001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "黄泥镇"
                            },
                            {
                                "code": 3408821040001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "黄铺镇"
                            },
                            {
                                "code": 3408824000003,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "开发区"
                            },
                            {
                                "code": 3408822020001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "龙潭乡"
                            },
                            {
                                "code": 3408821000003,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "梅城镇"
                            },
                            {
                                "code": 3408821060001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "水吼镇"
                            },
                            {
                                "code": 3408822000001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "塔畈乡"
                            },
                            {
                                "code": 3408821100001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "天柱山镇"
                            },
                            {
                                "code": 3408821030001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "王河镇"
                            },
                            {
                                "code": 3408822040001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "五庙乡"
                            },
                            {
                                "code": 3408822010001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "油坝乡"
                            },
                            {
                                "code": 3408821020001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "余井镇"
                            },
                            {
                                "code": 3408821010001,
                                "father_code": 3408820000001,
                                "level": "Town",
                                "name": "源潭镇"
                            }
                        ]
                    },
                    {
                        "code": 340826,
                        "father_code": 340800,
                        "level": "District",
                        "name": "宿松县",
                        "sub_districts": [
                            {
                                "code": 3408262080001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "隘口乡"
                            },
                            {
                                "code": 3408262060001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "北浴乡"
                            },
                            {
                                "code": 3408262070001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "陈汉乡"
                            },
                            {
                                "code": 3408262010001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "程岭乡"
                            },
                            {
                                "code": 340826105,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "二郎镇"
                            },
                            {
                                "code": 340826101,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "复兴镇"
                            },
                            {
                                "code": 340826100,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "孚玉镇"
                            },
                            {
                                "code": 3408262000001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "高岭乡"
                            },
                            {
                                "code": 340826102,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "汇口镇"
                            },
                            {
                                "code": 3408262110001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "河塌乡"
                            },
                            {
                                "code": 3408264010001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "华阳河农场总场"
                            },
                            {
                                "code": 3408264000003,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "九成监狱管理分局"
                            },
                            {
                                "code": 3408262020001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "九姑乡"
                            },
                            {
                                "code": 3408262090001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "柳坪乡"
                            },
                            {
                                "code": 340826107,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "凉亭镇"
                            },
                            {
                                "code": 340826106,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "破凉镇"
                            },
                            {
                                "code": 3408262030001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "千岭乡"
                            },
                            {
                                "code": 3408262120001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "五里乡"
                            },
                            {
                                "code": 340826104,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "下仓镇"
                            },
                            {
                                "code": 340826103,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "许岭镇"
                            },
                            {
                                "code": 3408262050001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "佐坝乡"
                            },
                            {
                                "code": 3408262100001,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "趾凤乡"
                            },
                            {
                                "code": 340826108,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "长铺镇"
                            },
                            {
                                "code": 3408262040003,
                                "father_code": 340826,
                                "level": "Town",
                                "name": "洲头乡"
                            }
                        ]
                    },
                    {
                        "code": 340881,
                        "father_code": 340800,
                        "level": "District",
                        "name": "桐城市",
                        "sub_districts": [
                            {
                                "code": 3408811050001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "大关镇"
                            },
                            {
                                "code": 3408811020001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "范岗镇"
                            },
                            {
                                "code": 3408811100001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "黄甲镇"
                            },
                            {
                                "code": 3408811070001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "金神镇"
                            },
                            {
                                "code": 3408811000001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "孔城镇"
                            },
                            {
                                "code": 3408810030001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "龙眠街道"
                            },
                            {
                                "code": 3408810010001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "龙腾街道"
                            },
                            {
                                "code": 3408811010001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "吕亭镇"
                            },
                            {
                                "code": 3408811060001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "青草镇"
                            },
                            {
                                "code": 3408811040001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "双港镇"
                            },
                            {
                                "code": 340881401,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "桐城双新经济开发区"
                            },
                            {
                                "code": 3408811090001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "唐湾镇"
                            },
                            {
                                "code": 340881002,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "文昌街道"
                            },
                            {
                                "code": 3408811030001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "新渡镇"
                            },
                            {
                                "code": 3408811110001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "鲟鱼镇"
                            },
                            {
                                "code": 3408811080001,
                                "father_code": 340881,
                                "level": "Town",
                                "name": "嬉子湖镇"
                            }
                        ]
                    },
                    {
                        "code": 340825,
                        "father_code": 340800,
                        "level": "District",
                        "name": "太湖县",
                        "sub_districts": [
                            {
                                "code": 340825109,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "百里镇"
                            },
                            {
                                "code": 340825108,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "北中镇"
                            },
                            {
                                "code": 340825201,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "城西乡"
                            },
                            {
                                "code": 340825200,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "大石乡"
                            },
                            {
                                "code": 3408254000001,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "经济开发区"
                            },
                            {
                                "code": 340825202,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "江塘乡"
                            },
                            {
                                "code": 340825100,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "晋熙镇"
                            },
                            {
                                "code": 340825204,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "刘畈乡"
                            },
                            {
                                "code": 340825107,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "弥陀镇"
                            },
                            {
                                "code": 340825106,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "牛镇镇"
                            },
                            {
                                "code": 340825104,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "寺前镇"
                            },
                            {
                                "code": 340825105,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "天华镇"
                            },
                            {
                                "code": 340825203,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "汤泉乡"
                            },
                            {
                                "code": 340825102,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "新仓镇"
                            },
                            {
                                "code": 340825103,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "小池镇"
                            },
                            {
                                "code": 340825101,
                                "father_code": 340825,
                                "level": "Town",
                                "name": "徐桥镇"
                            }
                        ]
                    },
                    {
                        "code": 340827,
                        "father_code": 340800,
                        "level": "District",
                        "name": "望江县",
                        "sub_districts": [
                            {
                                "code": 340827104,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "高士镇"
                            },
                            {
                                "code": 340827100,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "华阳镇"
                            },
                            {
                                "code": 3408272010001,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "雷池乡"
                            },
                            {
                                "code": 3408272000001,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "凉泉乡"
                            },
                            {
                                "code": 340827103,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "赛口镇"
                            },
                            {
                                "code": 340827107,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "太慈镇"
                            },
                            {
                                "code": 340827105,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "鸦滩镇"
                            },
                            {
                                "code": 340827101,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "杨湾镇"
                            },
                            {
                                "code": 340827102,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "漳湖镇"
                            },
                            {
                                "code": 340827106,
                                "father_code": 340827,
                                "level": "Town",
                                "name": "长岭镇"
                            }
                        ]
                    },
                    {
                        "code": 340802,
                        "father_code": 340800,
                        "level": "District",
                        "name": "迎江区",
                        "sub_districts": [
                            {
                                "code": 3408020060001,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "滨江街道"
                            },
                            {
                                "code": 340802003,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "华中路街道"
                            },
                            {
                                "code": 340802100,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "老峰镇"
                            },
                            {
                                "code": 340802200,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "龙狮桥乡"
                            },
                            {
                                "code": 340802004,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "人民路街道"
                            },
                            {
                                "code": 340802002,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "新河路街道"
                            },
                            {
                                "code": 340802005,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "孝肃路街道"
                            },
                            {
                                "code": 340802202,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "新洲乡"
                            },
                            {
                                "code": 3408020010001,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "宜城路街道"
                            },
                            {
                                "code": 340802201,
                                "father_code": 340802,
                                "level": "Town",
                                "name": "长风乡"
                            }
                        ]
                    },
                    {
                        "code": 340811,
                        "father_code": 340800,
                        "level": "District",
                        "name": "宜秀区",
                        "sub_districts": [
                            {
                                "code": 340811200,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "白泽湖乡"
                            },
                            {
                                "code": 3408111000001,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "大龙山镇"
                            },
                            {
                                "code": 3408110010003,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "大桥街道"
                            },
                            {
                                "code": 3408110000003,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "菱北街道"
                            },
                            {
                                "code": 340811102,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "罗岭镇"
                            },
                            {
                                "code": 340811201,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "五横乡"
                            },
                            {
                                "code": 3408111010001,
                                "father_code": 340811,
                                "level": "Town",
                                "name": "杨桥镇"
                            }
                        ]
                    },
                    {
                        "code": 340828,
                        "father_code": 340800,
                        "level": "District",
                        "name": "岳西县",
                        "sub_districts": [
                            {
                                "code": 3408282030001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "包家乡"
                            },
                            {
                                "code": 340828105,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "白帽镇"
                            },
                            {
                                "code": 340828103,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "菖蒲镇"
                            },
                            {
                                "code": 340828101,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "店前镇"
                            },
                            {
                                "code": 3408282040001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "古坊乡"
                            },
                            {
                                "code": 3408282090001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "和平乡"
                            },
                            {
                                "code": 340828108,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "河图镇"
                            },
                            {
                                "code": 340828112,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "黄尾镇"
                            },
                            {
                                "code": 340828102,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "来榜镇"
                            },
                            {
                                "code": 3408282010001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "莲云乡"
                            },
                            {
                                "code": 340828200,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "毛尖山乡"
                            },
                            {
                                "code": 3408282020001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "青天乡"
                            },
                            {
                                "code": 3408282070001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "石关乡"
                            },
                            {
                                "code": 3408282050001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "田头乡"
                            },
                            {
                                "code": 340828100,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "天堂镇"
                            },
                            {
                                "code": 340828104,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "头陀镇"
                            },
                            {
                                "code": 340828109,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "五河镇"
                            },
                            {
                                "code": 3408282100001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "巍岭乡"
                            },
                            {
                                "code": 340828106,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "温泉镇"
                            },
                            {
                                "code": 340828107,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "响肠镇"
                            },
                            {
                                "code": 3408282080001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "姚河乡"
                            },
                            {
                                "code": 340828111,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "冶溪镇"
                            },
                            {
                                "code": 340828110,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "主簿镇"
                            },
                            {
                                "code": 3408281130001,
                                "father_code": 340828,
                                "level": "Town",
                                "name": "中关镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340300,
                "father_code": 34,
                "level": "City",
                "name": "蚌埠市",
                "sub_districts": [
                    {
                        "code": 340303,
                        "father_code": 340300,
                        "level": "District",
                        "name": "蚌山区",
                        "sub_districts": [
                            {
                                "code": 3403034029003,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "湖滨社区行政事务管理中心"
                            },
                            {
                                "code": 340303009,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "淮河社区行政事务管理中心"
                            },
                            {
                                "code": 340303005,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "宏业村街道"
                            },
                            {
                                "code": 340303004,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "黄庄街道"
                            },
                            {
                                "code": 340303006,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "龙湖新村街道"
                            },
                            {
                                "code": 340303002,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "青年街道"
                            },
                            {
                                "code": 340303400,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "胜利街道"
                            },
                            {
                                "code": 340303001,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "天桥街道"
                            },
                            {
                                "code": 340303003,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "纬二路街道"
                            },
                            {
                                "code": 340303201,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "雪华乡"
                            },
                            {
                                "code": 340303200,
                                "father_code": 340303,
                                "level": "Town",
                                "name": "燕山乡"
                            }
                        ]
                    },
                    {
                        "code": 340323,
                        "father_code": 340300,
                        "level": "District",
                        "name": "固镇县",
                        "sub_districts": [
                            {
                                "code": 3403234020001,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "安徽固镇经济开发区"
                            },
                            {
                                "code": 340323100,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 340323107,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "濠城镇"
                            },
                            {
                                "code": 340323106,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "湖沟镇"
                            },
                            {
                                "code": 340323103,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "连城镇"
                            },
                            {
                                "code": 340323104,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "刘集镇"
                            },
                            {
                                "code": 340323105,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "任桥镇"
                            },
                            {
                                "code": 340323200,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "石湖乡"
                            },
                            {
                                "code": 340323101,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "王庄镇"
                            },
                            {
                                "code": 340323102,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "新马桥镇"
                            },
                            {
                                "code": 340323201,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "杨庙乡"
                            },
                            {
                                "code": 340323202,
                                "father_code": 340323,
                                "level": "Town",
                                "name": "仲兴乡"
                            }
                        ]
                    },
                    {
                        "code": 340311,
                        "father_code": 340300,
                        "level": "District",
                        "name": "淮上区",
                        "sub_districts": [
                            {
                                "code": 340311102,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "曹老集镇"
                            },
                            {
                                "code": 340311001,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "淮滨街道"
                            },
                            {
                                "code": 3403111040001,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "沫河口镇"
                            },
                            {
                                "code": 3403111030001,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "梅桥镇"
                            },
                            {
                                "code": 340311101,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "吴小街镇"
                            },
                            {
                                "code": 340311100,
                                "father_code": 340311,
                                "level": "Town",
                                "name": "小蚌埠镇"
                            }
                        ]
                    },
                    {
                        "code": 340321,
                        "father_code": 340300,
                        "level": "District",
                        "name": "怀远县",
                        "sub_districts": [
                            {
                                "code": 3403214010001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "安徽怀远经济开发区"
                            },
                            {
                                "code": 3403211010001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "包集镇"
                            },
                            {
                                "code": 3403211100001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "白莲坡镇"
                            },
                            {
                                "code": 340321104,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "常坟镇"
                            },
                            {
                                "code": 3403211110001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "褚集镇"
                            },
                            {
                                "code": 3403211150001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "陈集镇"
                            },
                            {
                                "code": 3403211160001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "淝河镇"
                            },
                            {
                                "code": 3403211140001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "淝南镇"
                            },
                            {
                                "code": 3403211120001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "古城镇"
                            },
                            {
                                "code": 340321103,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "河溜镇"
                            },
                            {
                                "code": 3403211130001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "荆山镇"
                            },
                            {
                                "code": 340321100,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "榴城镇"
                            },
                            {
                                "code": 340321400,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "龙亢农场"
                            },
                            {
                                "code": 340321102,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "龙亢镇"
                            },
                            {
                                "code": 3403211170001,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "兰桥镇"
                            },
                            {
                                "code": 340321106,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "双桥集镇"
                            },
                            {
                                "code": 340321109,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "唐集镇"
                            },
                            {
                                "code": 340321108,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "万福镇"
                            },
                            {
                                "code": 340321107,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "魏庄镇"
                            },
                            {
                                "code": 340321205,
                                "father_code": 340321,
                                "level": "Town",
                                "name": "徐圩乡"
                            }
                        ]
                    },
                    {
                        "code": 340302,
                        "father_code": 340300,
                        "level": "District",
                        "name": "龙子湖区",
                        "sub_districts": [
                            {
                                "code": 340302006,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "曹山街道"
                            },
                            {
                                "code": 340302001,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "东风街道"
                            },
                            {
                                "code": 340302004,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "东升街道"
                            },
                            {
                                "code": 340302005,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "解放街道"
                            },
                            {
                                "code": 340302200,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "李楼乡"
                            },
                            {
                                "code": 340302002,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "延安街道"
                            },
                            {
                                "code": 340302003,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "治淮街道"
                            },
                            {
                                "code": 340302100,
                                "father_code": 340302,
                                "level": "Town",
                                "name": "长淮卫镇"
                            }
                        ]
                    },
                    {
                        "code": 340322,
                        "father_code": 340300,
                        "level": "District",
                        "name": "五河县",
                        "sub_districts": [
                            {
                                "code": 340322100,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 340322106,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "东刘集镇"
                            },
                            {
                                "code": 340322108,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "大新镇"
                            },
                            {
                                "code": 340322111,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "浍南镇"
                            },
                            {
                                "code": 3403222010001,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "临北回族乡"
                            },
                            {
                                "code": 340322112,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "申集镇"
                            },
                            {
                                "code": 340322104,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "双忠庙镇"
                            },
                            {
                                "code": 3403222000001,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "沱湖乡"
                            },
                            {
                                "code": 340322107,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "头铺镇"
                            },
                            {
                                "code": 340322109,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "武桥镇"
                            },
                            {
                                "code": 340322101,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "新集镇"
                            },
                            {
                                "code": 340322105,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "小圩镇"
                            },
                            {
                                "code": 340322103,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "小溪镇"
                            },
                            {
                                "code": 340322110,
                                "father_code": 340322,
                                "level": "Town",
                                "name": "朱顶镇"
                            }
                        ]
                    },
                    {
                        "code": 340304,
                        "father_code": 340300,
                        "level": "District",
                        "name": "禹会区",
                        "sub_districts": [
                            {
                                "code": 340304200,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "长青乡"
                            },
                            {
                                "code": 3403040050001,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "朝阳街道"
                            },
                            {
                                "code": 3403040010001,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "大庆街道"
                            },
                            {
                                "code": 3403040030001,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "钓鱼台街道"
                            },
                            {
                                "code": 3403044029003,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "高新技术开发区"
                            },
                            {
                                "code": 340304101,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "马城镇"
                            },
                            {
                                "code": 340304100,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "秦集镇"
                            },
                            {
                                "code": 3403040020001,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "纬四街道"
                            },
                            {
                                "code": 3403040040001,
                                "father_code": 340304,
                                "level": "Town",
                                "name": "张公山街道"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341600,
                "father_code": 34,
                "level": "City",
                "name": "亳州市",
                "sub_districts": [
                    {
                        "code": 341621,
                        "father_code": 341600,
                        "level": "District",
                        "name": "涡阳县",
                        "sub_districts": [
                            {
                                "code": 341621123,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "标里镇"
                            },
                            {
                                "code": 341621105,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "楚店镇"
                            },
                            {
                                "code": 341621120,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "陈大镇"
                            },
                            {
                                "code": 3416210010001,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "城关街道"
                            },
                            {
                                "code": 341621109,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "曹市镇"
                            },
                            {
                                "code": 341621116,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "丹城镇"
                            },
                            {
                                "code": 341621119,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "店集镇"
                            },
                            {
                                "code": 341621106,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "高公镇"
                            },
                            {
                                "code": 341621122,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "公吉寺镇"
                            },
                            {
                                "code": 341621108,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "高炉镇"
                            },
                            {
                                "code": 341621118,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "花沟镇"
                            },
                            {
                                "code": 341621115,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "临湖镇"
                            },
                            {
                                "code": 341621112,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "龙山镇"
                            },
                            {
                                "code": 341621117,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "马店集镇"
                            },
                            {
                                "code": 341621121,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "牌坊镇"
                            },
                            {
                                "code": 341621110,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "青疃镇"
                            },
                            {
                                "code": 341621111,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "石弓镇"
                            },
                            {
                                "code": 3416210040001,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "天静宫街道"
                            },
                            {
                                "code": 341621104,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "涡南镇"
                            },
                            {
                                "code": 341621114,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "新兴镇"
                            },
                            {
                                "code": 341621003,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "星园街道"
                            },
                            {
                                "code": 341621103,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "西阳镇"
                            },
                            {
                                "code": 341621113,
                                "father_code": 341621,
                                "level": "Town",
                                "name": "义门镇"
                            }
                        ]
                    },
                    {
                        "code": 341623,
                        "father_code": 341600,
                        "level": "District",
                        "name": "利辛县",
                        "sub_districts": [
                            {
                                "code": 3416231190001,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "城北镇"
                            },
                            {
                                "code": 341623100,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 341623116,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "程家集镇"
                            },
                            {
                                "code": 341623113,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "大李集镇"
                            },
                            {
                                "code": 341623108,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "巩店镇"
                            },
                            {
                                "code": 341623114,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "胡集镇"
                            },
                            {
                                "code": 341623101,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "阚疃镇"
                            },
                            {
                                "code": 341623104,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "旧城镇"
                            },
                            {
                                "code": 341623103,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "江集镇"
                            },
                            {
                                "code": 341623203,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "纪王场乡"
                            },
                            {
                                "code": 341623112,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "马店孜镇"
                            },
                            {
                                "code": 341623107,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "汝集镇"
                            },
                            {
                                "code": 341623106,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "孙集镇"
                            },
                            {
                                "code": 341623204,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "孙庙乡"
                            },
                            {
                                "code": 341623109,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "王人镇"
                            },
                            {
                                "code": 341623110,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "王市镇"
                            },
                            {
                                "code": 341623118,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "望疃镇"
                            },
                            {
                                "code": 341623105,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "西潘楼镇"
                            },
                            {
                                "code": 341623205,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "新张集乡"
                            },
                            {
                                "code": 341623111,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "永兴镇"
                            },
                            {
                                "code": 341623102,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "张村镇"
                            },
                            {
                                "code": 341623115,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "展沟镇"
                            },
                            {
                                "code": 341623117,
                                "father_code": 341623,
                                "level": "Town",
                                "name": "中疃镇"
                            }
                        ]
                    },
                    {
                        "code": 341622,
                        "father_code": 341600,
                        "level": "District",
                        "name": "蒙城县",
                        "sub_districts": [
                            {
                                "code": 3416221070001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "板桥集镇"
                            },
                            {
                                "code": 3416221110001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "楚村镇"
                            },
                            {
                                "code": 3416220030001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "城关街道"
                            },
                            {
                                "code": 3416221140001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "篱笆镇"
                            },
                            {
                                "code": 3416221100001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "立仓镇"
                            },
                            {
                                "code": 3416221120001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "乐土镇"
                            },
                            {
                                "code": 3416221080001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "马集镇"
                            },
                            {
                                "code": 3416220010001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "漆园街道"
                            },
                            {
                                "code": 3416221010001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "双涧镇"
                            },
                            {
                                "code": 3416221130001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "三义镇"
                            },
                            {
                                "code": 3416221040001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "坛城镇"
                            },
                            {
                                "code": 3416222010001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "王集乡"
                            },
                            {
                                "code": 3416221020001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "小涧镇"
                            },
                            {
                                "code": 3416221060001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "许疃镇"
                            },
                            {
                                "code": 3416222020001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "小辛集乡"
                            },
                            {
                                "code": 3416221090001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "岳坊镇"
                            },
                            {
                                "code": 3416220020001,
                                "father_code": 341622,
                                "level": "Town",
                                "name": "庄周街道"
                            }
                        ]
                    },
                    {
                        "code": 341602,
                        "father_code": 341600,
                        "level": "District",
                        "name": "谯城区",
                        "sub_districts": [
                            {
                                "code": 3416024000001,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "亳州市经济开发区"
                            },
                            {
                                "code": 341602113,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "城父镇"
                            },
                            {
                                "code": 341602112,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "大杨镇"
                            },
                            {
                                "code": 341602116,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "淝河镇"
                            },
                            {
                                "code": 341602117,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "古城镇"
                            },
                            {
                                "code": 341602100,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "古井镇"
                            },
                            {
                                "code": 341602111,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "观堂镇"
                            },
                            {
                                "code": 341602102,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "华佗镇"
                            },
                            {
                                "code": 341602001,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "花戏楼街道"
                            },
                            {
                                "code": 341602119,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "立德镇"
                            },
                            {
                                "code": 341602101,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "芦庙镇"
                            },
                            {
                                "code": 341602118,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "龙扬镇"
                            },
                            {
                                "code": 341602104,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "牛集镇"
                            },
                            {
                                "code": 3416024010001,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "谯城经济开发区"
                            },
                            {
                                "code": 341602108,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "谯东镇"
                            },
                            {
                                "code": 341602107,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "十八里镇"
                            },
                            {
                                "code": 341602115,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "双沟镇"
                            },
                            {
                                "code": 341602114,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "十河镇"
                            },
                            {
                                "code": 341602109,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "十九里镇"
                            },
                            {
                                "code": 341602110,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "沙土镇"
                            },
                            {
                                "code": 341602003,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "汤陵街道"
                            },
                            {
                                "code": 341602103,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "魏岗镇"
                            },
                            {
                                "code": 341602106,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "五马镇"
                            },
                            {
                                "code": 341602002,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "薛阁街道"
                            },
                            {
                                "code": 341602105,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "颜集镇"
                            },
                            {
                                "code": 341602200,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "张店乡"
                            },
                            {
                                "code": 341602201,
                                "father_code": 341602,
                                "level": "Town",
                                "name": "赵桥乡"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341100,
                "father_code": 34,
                "level": "City",
                "name": "滁州市",
                "sub_districts": [
                    {
                        "code": 341125,
                        "father_code": 341100,
                        "level": "District",
                        "name": "定远县",
                        "sub_districts": [
                            {
                                "code": 3411254000003,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "安徽定远经济开发区"
                            },
                            {
                                "code": 341125107,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "池河镇"
                            },
                            {
                                "code": 341125110,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "仓镇"
                            },
                            {
                                "code": 3411251000003,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "定城镇"
                            },
                            {
                                "code": 3411251150001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "大桥镇"
                            },
                            {
                                "code": 3411252040001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "二龙回族乡"
                            },
                            {
                                "code": 3411252050001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "范岗乡"
                            },
                            {
                                "code": 3411252010001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "拂晓乡"
                            },
                            {
                                "code": 3411251140001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "蒋集镇"
                            },
                            {
                                "code": 341125109,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "界牌集镇"
                            },
                            {
                                "code": 341125108,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "连江镇"
                            },
                            {
                                "code": 341125101,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "炉桥镇"
                            },
                            {
                                "code": 3411252020001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "能仁乡"
                            },
                            {
                                "code": 341125106,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "藕塘镇"
                            },
                            {
                                "code": 3411252030001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "七里塘乡"
                            },
                            {
                                "code": 341125111,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "三和集镇"
                            },
                            {
                                "code": 3411251130001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "桑涧镇"
                            },
                            {
                                "code": 341125103,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "吴圩镇"
                            },
                            {
                                "code": 341125112,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "西卅店镇"
                            },
                            {
                                "code": 341125102,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "永康镇"
                            },
                            {
                                "code": 3411252000001,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "严桥乡"
                            },
                            {
                                "code": 341125105,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "张桥镇"
                            },
                            {
                                "code": 341125104,
                                "father_code": 341125,
                                "level": "Town",
                                "name": "朱湾镇"
                            }
                        ]
                    },
                    {
                        "code": 341126,
                        "father_code": 341100,
                        "level": "District",
                        "name": "凤阳县",
                        "sub_districts": [
                            {
                                "code": 3411261100001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "板桥镇"
                            },
                            {
                                "code": 341126106,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "大庙镇"
                            },
                            {
                                "code": 3411261110001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "大溪河镇"
                            },
                            {
                                "code": 3411261000001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "府城镇"
                            },
                            {
                                "code": 3411261040001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "官塘镇"
                            },
                            {
                                "code": 3411262010001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "黄湾乡"
                            },
                            {
                                "code": 3411261090001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "红心镇"
                            },
                            {
                                "code": 341126105,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "刘府镇"
                            },
                            {
                                "code": 341126101,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "临淮关镇"
                            },
                            {
                                "code": 3411261020001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "武店镇"
                            },
                            {
                                "code": 3411261030001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "西泉镇"
                            },
                            {
                                "code": 3411264039001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "玄武街道"
                            },
                            {
                                "code": 3411261120001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "小溪河镇"
                            },
                            {
                                "code": 341126107,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "殷涧镇"
                            },
                            {
                                "code": 3411264029001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "中都街道"
                            },
                            {
                                "code": 3411261080001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "总铺镇"
                            },
                            {
                                "code": 3411261130001,
                                "father_code": 341126,
                                "level": "Town",
                                "name": "枣巷镇"
                            }
                        ]
                    },
                    {
                        "code": 341122,
                        "father_code": 341100,
                        "level": "District",
                        "name": "来安县",
                        "sub_districts": [
                            {
                                "code": 341122101,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "半塔镇"
                            },
                            {
                                "code": 3411221030001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "汊河镇"
                            },
                            {
                                "code": 3411221090001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "独山镇"
                            },
                            {
                                "code": 3411221040001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "大英镇"
                            },
                            {
                                "code": 3411221050001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "雷官镇"
                            },
                            {
                                "code": 3411221080001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "三城镇"
                            },
                            {
                                "code": 3411221060001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "施官镇"
                            },
                            {
                                "code": 341122102,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "水口镇"
                            },
                            {
                                "code": 3411221070001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "舜山镇"
                            },
                            {
                                "code": 341122100,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "新安镇"
                            },
                            {
                                "code": 3411222030001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "杨郢乡"
                            },
                            {
                                "code": 3411221100001,
                                "father_code": 341122,
                                "level": "Town",
                                "name": "张山镇"
                            }
                        ]
                    },
                    {
                        "code": 341102,
                        "father_code": 341100,
                        "level": "District",
                        "name": "琅琊区",
                        "sub_districts": [
                            {
                                "code": 3411020120001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "滁阳街道"
                            },
                            {
                                "code": 3411024029001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "凤凰街道"
                            },
                            {
                                "code": 341102004,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "丰山街道"
                            },
                            {
                                "code": 341102001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "琅琊街道"
                            },
                            {
                                "code": 341102006,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "清流街道"
                            },
                            {
                                "code": 3411020130001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "三官街道"
                            },
                            {
                                "code": 3411020100001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "西涧街道"
                            },
                            {
                                "code": 341102007,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "扬子街道"
                            },
                            {
                                "code": 341102009,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "紫薇街道"
                            },
                            {
                                "code": 3411020110001,
                                "father_code": 341102,
                                "level": "Town",
                                "name": "遵阳街道"
                            }
                        ]
                    },
                    {
                        "code": 341182,
                        "father_code": 341100,
                        "level": "District",
                        "name": "明光市",
                        "sub_districts": [
                            {
                                "code": 3411821020001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "管店镇"
                            },
                            {
                                "code": 3411821090001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "古沛镇"
                            },
                            {
                                "code": 3411821040001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "涧溪镇"
                            },
                            {
                                "code": 3411821110001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "柳巷镇"
                            },
                            {
                                "code": 3411820020001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "明东街道"
                            },
                            {
                                "code": 3411820010001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "明光街道"
                            },
                            {
                                "code": 3411820030001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "明南街道"
                            },
                            {
                                "code": 3411820040001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "明西街道"
                            },
                            {
                                "code": 3411821080001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "女山湖镇"
                            },
                            {
                                "code": 3411821100001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "潘村镇"
                            },
                            {
                                "code": 3411822000001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "泊岗乡"
                            },
                            {
                                "code": 3411821070001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "桥头镇"
                            },
                            {
                                "code": 3411821050001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "石坝镇"
                            },
                            {
                                "code": 3411821010001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "三界镇"
                            },
                            {
                                "code": 3411821060001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "苏巷镇"
                            },
                            {
                                "code": 3411821000001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "张八岭镇"
                            },
                            {
                                "code": 3411821030001,
                                "father_code": 341182,
                                "level": "Town",
                                "name": "自来桥镇"
                            }
                        ]
                    },
                    {
                        "code": 341103,
                        "father_code": 341100,
                        "level": "District",
                        "name": "南谯区",
                        "sub_districts": [
                            {
                                "code": 341103105,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "大柳镇"
                            },
                            {
                                "code": 341103002,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "大王街道"
                            },
                            {
                                "code": 341103103,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "黄泥岗镇"
                            },
                            {
                                "code": 341103003,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "龙蟠街道"
                            },
                            {
                                "code": 341103101,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "沙河镇"
                            },
                            {
                                "code": 3411031070001,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "施集镇"
                            },
                            {
                                "code": 3411030050000,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "同乐街道"
                            },
                            {
                                "code": 341103100,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "乌衣镇"
                            },
                            {
                                "code": 3411030040000,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "银花街道"
                            },
                            {
                                "code": 341103106,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "腰铺镇"
                            },
                            {
                                "code": 341103102,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "章广镇"
                            },
                            {
                                "code": 341103104,
                                "father_code": 341103,
                                "level": "Town",
                                "name": "珠龙镇"
                            }
                        ]
                    },
                    {
                        "code": 341124,
                        "father_code": 341100,
                        "level": "District",
                        "name": "全椒县",
                        "sub_districts": [
                            {
                                "code": 341124102,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "大墅镇"
                            },
                            {
                                "code": 341124103,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "二郎口镇"
                            },
                            {
                                "code": 341124101,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "古河镇"
                            },
                            {
                                "code": 341124109,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "六镇镇"
                            },
                            {
                                "code": 341124105,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "马厂镇"
                            },
                            {
                                "code": 341124106,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "石沛镇"
                            },
                            {
                                "code": 3411241070001,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "十字镇"
                            },
                            {
                                "code": 341124104,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "武岗镇"
                            },
                            {
                                "code": 341124100,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "襄河镇"
                            },
                            {
                                "code": 341124108,
                                "father_code": 341124,
                                "level": "Town",
                                "name": "西王镇"
                            }
                        ]
                    },
                    {
                        "code": 341181,
                        "father_code": 341100,
                        "level": "District",
                        "name": "天长市",
                        "sub_districts": [
                            {
                                "code": 341181101,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "汊涧镇"
                            },
                            {
                                "code": 341181103,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "大通镇"
                            },
                            {
                                "code": 3411810030001,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "广陵街道"
                            },
                            {
                                "code": 341181106,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "金集镇"
                            },
                            {
                                "code": 341181102,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "秦栏镇"
                            },
                            {
                                "code": 3411810040001,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "千秋街道"
                            },
                            {
                                "code": 341181108,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "仁和集镇"
                            },
                            {
                                "code": 341181105,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "石梁镇"
                            },
                            {
                                "code": 341181100,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "铜城镇"
                            },
                            {
                                "code": 3411811130001,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "万寿镇"
                            },
                            {
                                "code": 3411811120001,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "新街镇"
                            },
                            {
                                "code": 341181104,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "杨村镇"
                            },
                            {
                                "code": 3411811070001,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "永丰镇"
                            },
                            {
                                "code": 341181109,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "冶山镇"
                            },
                            {
                                "code": 341181110,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "郑集镇"
                            },
                            {
                                "code": 341181111,
                                "father_code": 341181,
                                "level": "Town",
                                "name": "张铺镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341700,
                "father_code": 34,
                "level": "City",
                "name": "池州市",
                "sub_districts": [
                    {
                        "code": 341721,
                        "father_code": 341700,
                        "level": "District",
                        "name": "东至县",
                        "sub_districts": [
                            {
                                "code": 341721102,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "大渡口镇"
                            },
                            {
                                "code": 341721101,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "东流镇"
                            },
                            {
                                "code": 341721106,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "葛公镇"
                            },
                            {
                                "code": 341721108,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "官港镇"
                            },
                            {
                                "code": 341721200,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "花园乡"
                            },
                            {
                                "code": 341721110,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "龙泉镇"
                            },
                            {
                                "code": 341721201,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "木塔乡"
                            },
                            {
                                "code": 341721111,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "泥溪镇"
                            },
                            {
                                "code": 341721202,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "青山乡"
                            },
                            {
                                "code": 341721103,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "胜利镇"
                            },
                            {
                                "code": 341721107,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "香隅镇"
                            },
                            {
                                "code": 341721100,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "尧渡镇"
                            },
                            {
                                "code": 341721105,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "洋湖镇"
                            },
                            {
                                "code": 341721109,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "昭潭镇"
                            },
                            {
                                "code": 341721104,
                                "father_code": 341721,
                                "level": "Town",
                                "name": "张溪镇"
                            }
                        ]
                    },
                    {
                        "code": 341702,
                        "father_code": 341700,
                        "level": "District",
                        "name": "贵池区",
                        "sub_districts": [
                            {
                                "code": 341702001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "池阳街道"
                            },
                            {
                                "code": 3417024010001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "池州经济技术开发区"
                            },
                            {
                                "code": 3417020060001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "墩上街道"
                            },
                            {
                                "code": 341702004,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "江口街道"
                            },
                            {
                                "code": 3417021020001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "涓桥镇"
                            },
                            {
                                "code": 341702003,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "里山街道"
                            },
                            {
                                "code": 3417021040001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "梅村镇"
                            },
                            {
                                "code": 3417021030001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "梅街镇"
                            },
                            {
                                "code": 3417020070001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "梅龙街道"
                            },
                            {
                                "code": 3417020050001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "马衙街道"
                            },
                            {
                                "code": 3417021010001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "牛头山镇"
                            },
                            {
                                "code": 3417021060001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "牌楼镇"
                            },
                            {
                                "code": 341702010,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "清风街道"
                            },
                            {
                                "code": 3417020080001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "秋江街道"
                            },
                            {
                                "code": 341702002,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "秋浦街道"
                            },
                            {
                                "code": 341702011,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "清溪街道"
                            },
                            {
                                "code": 3417021050001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "唐田镇"
                            },
                            {
                                "code": 3417021080001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "棠溪镇"
                            },
                            {
                                "code": 3417021070001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "乌沙镇"
                            },
                            {
                                "code": 341702009,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "杏花村街道"
                            },
                            {
                                "code": 3417021000001,
                                "father_code": 341702,
                                "level": "Town",
                                "name": "殷汇镇"
                            }
                        ]
                    },
                    {
                        "code": 341723,
                        "father_code": 341700,
                        "level": "District",
                        "name": "青阳县",
                        "sub_districts": [
                            {
                                "code": 341723202,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "杜村乡"
                            },
                            {
                                "code": 341723105,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "丁桥镇"
                            },
                            {
                                "code": 341723203,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "九华乡"
                            },
                            {
                                "code": 341723108,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "九华镇"
                            },
                            {
                                "code": 341723103,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "陵阳镇"
                            },
                            {
                                "code": 341723102,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "庙前镇"
                            },
                            {
                                "code": 341723101,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "木镇镇"
                            },
                            {
                                "code": 341723200,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "乔木乡"
                            },
                            {
                                "code": 341723100,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "蓉城镇"
                            },
                            {
                                "code": 341723104,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "新河镇"
                            },
                            {
                                "code": 3417231090001,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "酉华镇"
                            },
                            {
                                "code": 341723107,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "杨田镇"
                            },
                            {
                                "code": 341723106,
                                "father_code": 341723,
                                "level": "Town",
                                "name": "朱备镇"
                            }
                        ]
                    },
                    {
                        "code": 341722,
                        "father_code": 341700,
                        "level": "District",
                        "name": "石台县",
                        "sub_districts": [
                            {
                                "code": 341722103,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "丁香镇"
                            },
                            {
                                "code": 341722200,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "大演乡"
                            },
                            {
                                "code": 341722105,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "横渡镇"
                            },
                            {
                                "code": 341722201,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "矶滩乡"
                            },
                            {
                                "code": 341722101,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "七都镇"
                            },
                            {
                                "code": 341722100,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "仁里镇"
                            },
                            {
                                "code": 341722104,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "小河镇"
                            },
                            {
                                "code": 341722102,
                                "father_code": 341722,
                                "level": "Town",
                                "name": "仙寓镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341200,
                "father_code": 34,
                "level": "City",
                "name": "阜阳市",
                "sub_districts": [
                    {
                        "code": 341225,
                        "father_code": 341200,
                        "level": "District",
                        "name": "阜南县",
                        "sub_districts": [
                            {
                                "code": 3412254010001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "安徽阜南经济开发区"
                            },
                            {
                                "code": 3412251030001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "柴集镇"
                            },
                            {
                                "code": 3412251190001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "曹集镇"
                            },
                            {
                                "code": 3412251150001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "地城镇"
                            },
                            {
                                "code": 341225204,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "段郢乡"
                            },
                            {
                                "code": 3412251010001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "方集镇"
                            },
                            {
                                "code": 341225205,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "公桥乡"
                            },
                            {
                                "code": 341225209,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "郜台乡"
                            },
                            {
                                "code": 3412251110001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "黄岗镇"
                            },
                            {
                                "code": 3412251160001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "洪河桥镇"
                            },
                            {
                                "code": 3412251210001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "会龙镇"
                            },
                            {
                                "code": 3412251120001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "焦陂镇"
                            },
                            {
                                "code": 3412251200001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "鹿城镇"
                            },
                            {
                                "code": 341225208,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "老观乡"
                            },
                            {
                                "code": 3412251070001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "柳沟镇"
                            },
                            {
                                "code": 341225206,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "龙王乡"
                            },
                            {
                                "code": 3412251100001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "苗集镇"
                            },
                            {
                                "code": 3412251090001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "田集镇"
                            },
                            {
                                "code": 341225200,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "王店孜乡"
                            },
                            {
                                "code": 3412251180001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "王化镇"
                            },
                            {
                                "code": 3412251170001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "王家坝镇"
                            },
                            {
                                "code": 3412251140001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "王堰镇"
                            },
                            {
                                "code": 3412251040001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "新村镇"
                            },
                            {
                                "code": 341225201,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "许堂乡"
                            },
                            {
                                "code": 341225207,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "于集乡"
                            },
                            {
                                "code": 3412251020001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "中岗镇"
                            },
                            {
                                "code": 3412251080001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "赵集镇"
                            },
                            {
                                "code": 3412251060001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "朱寨镇"
                            },
                            {
                                "code": 3412251130001,
                                "father_code": 341225,
                                "level": "Town",
                                "name": "张寨镇"
                            }
                        ]
                    },
                    {
                        "code": 341282,
                        "father_code": 341200,
                        "level": "District",
                        "name": "界首市",
                        "sub_districts": [
                            {
                                "code": 341282200,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "邴集乡"
                            },
                            {
                                "code": 341282001,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "东城街道"
                            },
                            {
                                "code": 341282104,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "大黄镇"
                            },
                            {
                                "code": 341282110,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "代桥镇"
                            },
                            {
                                "code": 341282109,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "顾集镇"
                            },
                            {
                                "code": 341282100,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "光武镇"
                            },
                            {
                                "code": 341282201,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "靳寨乡"
                            },
                            {
                                "code": 341282102,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "芦村镇"
                            },
                            {
                                "code": 341282101,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "泉阳镇"
                            },
                            {
                                "code": 341282202,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "任寨乡"
                            },
                            {
                                "code": 341282111,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "舒庄镇"
                            },
                            {
                                "code": 341282106,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "陶庙镇"
                            },
                            {
                                "code": 341282105,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "田营镇"
                            },
                            {
                                "code": 341282107,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "王集镇"
                            },
                            {
                                "code": 341282002,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "西城街道"
                            },
                            {
                                "code": 341282103,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "新马集镇"
                            },
                            {
                                "code": 341282003,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "颍南街道"
                            },
                            {
                                "code": 341282108,
                                "father_code": 341282,
                                "level": "Town",
                                "name": "砖集镇"
                            }
                        ]
                    },
                    {
                        "code": 341221,
                        "father_code": 341200,
                        "level": "District",
                        "name": "临泉县",
                        "sub_districts": [
                            {
                                "code": 3412211110001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "艾亭镇"
                            },
                            {
                                "code": 3412211190001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "白庙镇"
                            },
                            {
                                "code": 3412210040001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "城东街道"
                            },
                            {
                                "code": 3412210010001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "城关街道"
                            },
                            {
                                "code": 3412211120001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "陈集镇"
                            },
                            {
                                "code": 3412210050001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "城南街道"
                            },
                            {
                                "code": 3412211070001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "单桥镇"
                            },
                            {
                                "code": 3412211200001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "关庙镇"
                            },
                            {
                                "code": 3412211220001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "高塘镇"
                            },
                            {
                                "code": 3412211050001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "滑集镇"
                            },
                            {
                                "code": 3412211180001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "黄岭镇"
                            },
                            {
                                "code": 3412211160001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "姜寨镇"
                            },
                            {
                                "code": 3412211040001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "老集镇"
                            },
                            {
                                "code": 3412211060001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "吕寨镇"
                            },
                            {
                                "code": 3412211170001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "庙岔镇"
                            },
                            {
                                "code": 3412211090001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "宋集镇"
                            },
                            {
                                "code": 341221203,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "土陂乡"
                            },
                            {
                                "code": 341221102,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "鲖城镇"
                            },
                            {
                                "code": 341221206,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "陶老乡"
                            },
                            {
                                "code": 3412211030001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "谭棚镇"
                            },
                            {
                                "code": 3412210030001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "田桥街道"
                            },
                            {
                                "code": 3412211150001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "瓦店镇"
                            },
                            {
                                "code": 3412211130001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "韦寨镇"
                            },
                            {
                                "code": 3412210020001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "邢塘街道"
                            },
                            {
                                "code": 341221101,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "杨桥镇"
                            },
                            {
                                "code": 3412211140001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "迎仙镇"
                            },
                            {
                                "code": 3412211080001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "长官镇"
                            },
                            {
                                "code": 3412211100001,
                                "father_code": 341221,
                                "level": "Town",
                                "name": "张新镇"
                            }
                        ]
                    },
                    {
                        "code": 341222,
                        "father_code": 341200,
                        "level": "District",
                        "name": "太和县",
                        "sub_districts": [
                            {
                                "code": 341222100,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 341222112,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "蔡庙镇"
                            },
                            {
                                "code": 341222123,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "大庙集镇"
                            },
                            {
                                "code": 341222107,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "大新镇"
                            },
                            {
                                "code": 3412221280001,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "二郎镇"
                            },
                            {
                                "code": 341222117,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "坟台镇"
                            },
                            {
                                "code": 341222109,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "关集镇"
                            },
                            {
                                "code": 341222116,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "宫集镇"
                            },
                            {
                                "code": 341222121,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "高庙镇"
                            },
                            {
                                "code": 3412221270001,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "郭庙镇"
                            },
                            {
                                "code": 341222118,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "洪山镇"
                            },
                            {
                                "code": 341222126,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "胡总镇"
                            },
                            {
                                "code": 341222101,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "旧县镇"
                            },
                            {
                                "code": 3412224000001,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "开发区管理委员会"
                            },
                            {
                                "code": 341222106,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "李兴镇"
                            },
                            {
                                "code": 3412221290001,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "马集镇"
                            },
                            {
                                "code": 341222114,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "苗老集镇"
                            },
                            {
                                "code": 341222105,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "倪邱镇"
                            },
                            {
                                "code": 341222103,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "皮条孙镇"
                            },
                            {
                                "code": 341222119,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "清浅镇"
                            },
                            {
                                "code": 341222124,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "阮桥镇"
                            },
                            {
                                "code": 341222111,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "双浮镇"
                            },
                            {
                                "code": 341222125,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "双庙镇"
                            },
                            {
                                "code": 341222110,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "三塔镇"
                            },
                            {
                                "code": 341222113,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "三堂镇"
                            },
                            {
                                "code": 341222122,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "桑营镇"
                            },
                            {
                                "code": 341222102,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "税镇镇"
                            },
                            {
                                "code": 341222120,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "五星镇"
                            },
                            {
                                "code": 341222108,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "肖口镇"
                            },
                            {
                                "code": 341222104,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "原墙镇"
                            },
                            {
                                "code": 341222201,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "赵集乡"
                            },
                            {
                                "code": 341222115,
                                "father_code": 341222,
                                "level": "Town",
                                "name": "赵庙镇"
                            }
                        ]
                    },
                    {
                        "code": 341203,
                        "father_code": 341200,
                        "level": "District",
                        "name": "颍东区",
                        "sub_districts": [
                            {
                                "code": 341203101,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "插花镇"
                            },
                            {
                                "code": 341203001,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "河东街道"
                            },
                            {
                                "code": 341203100,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "口孜镇"
                            },
                            {
                                "code": 341203104,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "老庙镇"
                            },
                            {
                                "code": 341203200,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "冉庙乡"
                            },
                            {
                                "code": 341203002,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "新华街道"
                            },
                            {
                                "code": 341203107,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "新乌江镇"
                            },
                            {
                                "code": 341203003,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "向阳街道"
                            },
                            {
                                "code": 341203106,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "杨楼孜镇"
                            },
                            {
                                "code": 341203102,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "袁寨镇"
                            },
                            {
                                "code": 341203105,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "正午镇"
                            },
                            {
                                "code": 341203103,
                                "father_code": 341203,
                                "level": "Town",
                                "name": "枣庄镇"
                            }
                        ]
                    },
                    {
                        "code": 341204,
                        "father_code": 341200,
                        "level": "District",
                        "name": "颍泉区",
                        "sub_districts": [
                            {
                                "code": 341204101,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "宁老庄镇"
                            },
                            {
                                "code": 341204102,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "闻集镇"
                            },
                            {
                                "code": 341204100,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "伍明镇"
                            },
                            {
                                "code": 341204103,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "行流镇"
                            },
                            {
                                "code": 341204002,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "周棚街道"
                            },
                            {
                                "code": 341204001,
                                "father_code": 341204,
                                "level": "Town",
                                "name": "中市街道"
                            }
                        ]
                    },
                    {
                        "code": 341226,
                        "father_code": 341200,
                        "level": "District",
                        "name": "颍上县",
                        "sub_districts": [
                            {
                                "code": 3412261090001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "半岗镇"
                            },
                            {
                                "code": 3412261150001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "八里河镇"
                            },
                            {
                                "code": 3412262040001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "垂岗乡"
                            },
                            {
                                "code": 3412261130001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "陈桥镇"
                            },
                            {
                                "code": 3412261160001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "迪沟镇"
                            },
                            {
                                "code": 3412261210001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "古城镇"
                            },
                            {
                                "code": 3412261080001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "耿棚镇"
                            },
                            {
                                "code": 3412262030001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "关屯乡"
                            },
                            {
                                "code": 3412262070001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "黄坝乡"
                            },
                            {
                                "code": 3412261140001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "黄桥镇"
                            },
                            {
                                "code": 3412261180001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "红星镇"
                            },
                            {
                                "code": 3412261120001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "江店孜镇"
                            },
                            {
                                "code": 3412261040001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "江口镇"
                            },
                            {
                                "code": 3412262000001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "建颍乡"
                            },
                            {
                                "code": 3412262060001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "刘集乡"
                            },
                            {
                                "code": 3412261200001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "鲁口镇"
                            },
                            {
                                "code": 3412261070001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "六十铺镇"
                            },
                            {
                                "code": 3412261020001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "南照镇"
                            },
                            {
                                "code": 3412261050001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "润河镇"
                            },
                            {
                                "code": 3412261190001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "十八里铺镇"
                            },
                            {
                                "code": 3412261000001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "慎城镇"
                            },
                            {
                                "code": 3412262050001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "赛涧回族乡"
                            },
                            {
                                "code": 3412262020001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "盛堂乡"
                            },
                            {
                                "code": 3412261100001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "王岗镇"
                            },
                            {
                                "code": 3412262010001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "五十铺乡"
                            },
                            {
                                "code": 3412261060001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "新集镇"
                            },
                            {
                                "code": 3412261010001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "谢桥镇"
                            },
                            {
                                "code": 3412261110001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "夏桥镇"
                            },
                            {
                                "code": 3412261170001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "西三十铺镇"
                            },
                            {
                                "code": 3412261030001,
                                "father_code": 341226,
                                "level": "Town",
                                "name": "杨湖镇"
                            }
                        ]
                    },
                    {
                        "code": 341202,
                        "father_code": 341200,
                        "level": "District",
                        "name": "颍州区",
                        "sub_districts": [
                            {
                                "code": 341202101,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "程集镇"
                            },
                            {
                                "code": 3412024029001,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "阜阳开发区京九路街道"
                            },
                            {
                                "code": 341202001,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "鼓楼街道"
                            },
                            {
                                "code": 341202104,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "九龙镇"
                            },
                            {
                                "code": 341202200,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "马寨乡"
                            },
                            {
                                "code": 341202003,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "清河街道"
                            },
                            {
                                "code": 341202102,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "三合镇"
                            },
                            {
                                "code": 341202105,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "三十里铺镇"
                            },
                            {
                                "code": 3412021060001,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "三塔集镇"
                            },
                            {
                                "code": 341202100,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "王店镇"
                            },
                            {
                                "code": 341202002,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "文峰街道"
                            },
                            {
                                "code": 341202005,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "西湖景区街道"
                            },
                            {
                                "code": 341202103,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "西湖镇"
                            },
                            {
                                "code": 3412024039003,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "袁集镇"
                            },
                            {
                                "code": 341202004,
                                "father_code": 341202,
                                "level": "Town",
                                "name": "颍西街道"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340600,
                "father_code": 34,
                "level": "City",
                "name": "淮北市",
                "sub_districts": [
                    {
                        "code": 340602,
                        "father_code": 340600,
                        "level": "District",
                        "name": "杜集区",
                        "sub_districts": [
                            {
                                "code": 340602102,
                                "father_code": 340602,
                                "level": "Town",
                                "name": "段园镇"
                            },
                            {
                                "code": 340602001,
                                "father_code": 340602,
                                "level": "Town",
                                "name": "高岳街道"
                            },
                            {
                                "code": 340602002,
                                "father_code": 340602,
                                "level": "Town",
                                "name": "矿山集街道"
                            },
                            {
                                "code": 340602100,
                                "father_code": 340602,
                                "level": "Town",
                                "name": "朔里镇"
                            },
                            {
                                "code": 340602101,
                                "father_code": 340602,
                                "level": "Town",
                                "name": "石台镇"
                            }
                        ]
                    },
                    {
                        "code": 340604,
                        "father_code": 340600,
                        "level": "District",
                        "name": "烈山区",
                        "sub_districts": [
                            {
                                "code": 3406040030001,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "百善街道"
                            },
                            {
                                "code": 340604102,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "古饶镇"
                            },
                            {
                                "code": 3406040020001,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "临海童街道"
                            },
                            {
                                "code": 340604100,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "烈山镇"
                            },
                            {
                                "code": 3406040040001,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "任楼街道"
                            },
                            {
                                "code": 3406041010001,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "宋町镇"
                            },
                            {
                                "code": 3406040010001,
                                "father_code": 340604,
                                "level": "Town",
                                "name": "杨庄街道"
                            }
                        ]
                    },
                    {
                        "code": 340621,
                        "father_code": 340600,
                        "level": "District",
                        "name": "濉溪县",
                        "sub_districts": [
                            {
                                "code": 340621108,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "百善镇"
                            },
                            {
                                "code": 340621101,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "韩村镇"
                            },
                            {
                                "code": 340621104,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "临涣镇"
                            },
                            {
                                "code": 340621102,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "刘桥镇"
                            },
                            {
                                "code": 340621107,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "南坪镇"
                            },
                            {
                                "code": 340621105,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "双堆集镇"
                            },
                            {
                                "code": 3406211090001,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "孙町镇"
                            },
                            {
                                "code": 340621110,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "四铺镇"
                            },
                            {
                                "code": 3406214010003,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "濉芜产业园"
                            },
                            {
                                "code": 3406214000003,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "濉溪县经济开发区"
                            },
                            {
                                "code": 340621100,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "濉溪镇"
                            },
                            {
                                "code": 340621106,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "铁佛镇"
                            },
                            {
                                "code": 340621103,
                                "father_code": 340621,
                                "level": "Town",
                                "name": "五沟镇"
                            }
                        ]
                    },
                    {
                        "code": 340603,
                        "father_code": 340600,
                        "level": "District",
                        "name": "相山区",
                        "sub_districts": [
                            {
                                "code": 3406034000003,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "安徽淮北相山经济开发区管理委员会"
                            },
                            {
                                "code": 340603002,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "东街道"
                            },
                            {
                                "code": 340603005,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "东山街道"
                            },
                            {
                                "code": 340603009,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "南黎街道"
                            },
                            {
                                "code": 3406031000003,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "渠沟镇"
                            },
                            {
                                "code": 340603010,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "曲阳街道"
                            },
                            {
                                "code": 340603008,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "任圩街道"
                            },
                            {
                                "code": 3406030110001,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "三堤口街道"
                            },
                            {
                                "code": 340603003,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "西街道"
                            },
                            {
                                "code": 340603001,
                                "father_code": 340603,
                                "level": "Town",
                                "name": "相南街道"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340100,
                "father_code": 34,
                "level": "City",
                "name": "合肥市",
                "sub_districts": [
                    {
                        "code": 3401110000003,
                        "father_code": 340100,
                        "level": "District",
                        "name": "包河区",
                        "sub_districts": [
                            {
                                "code": 3401110040003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "包公街道"
                            },
                            {
                                "code": 3401110080003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "滨湖世纪社区街道"
                            },
                            {
                                "code": 3401110020003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "常青街道"
                            },
                            {
                                "code": 3401111020003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "大圩镇"
                            },
                            {
                                "code": 3401111000003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "淝河镇"
                            },
                            {
                                "code": 3401110090003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "方兴社区街道"
                            },
                            {
                                "code": 3401110010003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "骆岗街道"
                            },
                            {
                                "code": 3401110110003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "同安街道"
                            },
                            {
                                "code": 3401110050003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "望湖街道"
                            },
                            {
                                "code": 3401110030003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "芜湖路街道"
                            },
                            {
                                "code": 3401110100003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "万年埠街道"
                            },
                            {
                                "code": 3401110060003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "义城街道"
                            },
                            {
                                "code": 3401110070003,
                                "father_code": 3401110000003,
                                "level": "Town",
                                "name": "烟墩街道"
                            }
                        ]
                    },
                    {
                        "code": 340121,
                        "father_code": 340100,
                        "level": "District",
                        "name": "长丰县",
                        "sub_districts": [
                            {
                                "code": 3401211100001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "杜集镇"
                            },
                            {
                                "code": 340121104,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "岗集镇"
                            },
                            {
                                "code": 340121200,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "罗塘乡"
                            },
                            {
                                "code": 340121105,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "双墩镇"
                            },
                            {
                                "code": 3401214000001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "双凤开发区"
                            },
                            {
                                "code": 340121100,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "水湖镇"
                            },
                            {
                                "code": 3401211090001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "陶楼镇"
                            },
                            {
                                "code": 340121103,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "吴山镇"
                            },
                            {
                                "code": 340121106,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "下塘镇"
                            },
                            {
                                "code": 3401211110001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "义井镇"
                            },
                            {
                                "code": 340121102,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "杨庙镇"
                            },
                            {
                                "code": 3401211120001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "左店镇"
                            },
                            {
                                "code": 3401212030001,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "造甲乡"
                            },
                            {
                                "code": 340121101,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "庄墓镇"
                            },
                            {
                                "code": 340121107,
                                "father_code": 340121,
                                "level": "Town",
                                "name": "朱巷镇"
                            }
                        ]
                    },
                    {
                        "code": 340181,
                        "father_code": 340100,
                        "level": "District",
                        "name": "巢湖市",
                        "sub_districts": [
                            {
                                "code": 3401810060001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "半汤街道"
                            },
                            {
                                "code": 3401811100001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "坝镇镇"
                            },
                            {
                                "code": 340181004,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "凤凰山街道"
                            },
                            {
                                "code": 3401811080001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "黄麓镇"
                            },
                            {
                                "code": 3401811090001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "槐林镇"
                            },
                            {
                                "code": 3401811000001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "栏杆集镇"
                            },
                            {
                                "code": 340181200,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "庙岗乡"
                            },
                            {
                                "code": 3401811060001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "散兵镇"
                            },
                            {
                                "code": 3401811010001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "苏湾镇"
                            },
                            {
                                "code": 3401810050001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "天河街道"
                            },
                            {
                                "code": 3401811070001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "烔炀镇"
                            },
                            {
                                "code": 3401810030001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "卧牛山街道"
                            },
                            {
                                "code": 3401811040001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "夏阁镇"
                            },
                            {
                                "code": 340181002,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "亚父街道"
                            },
                            {
                                "code": 3401811030001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "银屏镇"
                            },
                            {
                                "code": 3401811020001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "柘皋镇"
                            },
                            {
                                "code": 3401811050001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "中垾镇"
                            },
                            {
                                "code": 3401810010001,
                                "father_code": 340181,
                                "level": "Town",
                                "name": "中庙街道"
                            }
                        ]
                    },
                    {
                        "code": 340122,
                        "father_code": 340100,
                        "level": "District",
                        "name": "肥东县",
                        "sub_districts": [
                            {
                                "code": 340122107,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "八斗镇"
                            },
                            {
                                "code": 340122110,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "包公镇"
                            },
                            {
                                "code": 340122109,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "白龙镇"
                            },
                            {
                                "code": 340122111,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "陈集镇"
                            },
                            {
                                "code": 3401221010003,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "撮镇镇"
                            },
                            {
                                "code": 340122100,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "店埠镇"
                            },
                            {
                                "code": 3401224010001,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "肥东新城开发区"
                            },
                            {
                                "code": 340122106,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "古城镇"
                            },
                            {
                                "code": 3401224020003,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "合肥循环经济示范园"
                            },
                            {
                                "code": 3401221020001,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "梁园镇"
                            },
                            {
                                "code": 340122202,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "马湖乡"
                            },
                            {
                                "code": 340122206,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "牌坊回族满族乡"
                            },
                            {
                                "code": 3401221030003,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "桥头集镇"
                            },
                            {
                                "code": 340122105,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "石塘镇"
                            },
                            {
                                "code": 340122204,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "响导乡"
                            },
                            {
                                "code": 340122205,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "杨店乡"
                            },
                            {
                                "code": 340122108,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "元疃镇"
                            },
                            {
                                "code": 340122201,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "张集乡"
                            },
                            {
                                "code": 340122104,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "长临河镇"
                            },
                            {
                                "code": 340122200,
                                "father_code": 340122,
                                "level": "Town",
                                "name": "众兴乡"
                            }
                        ]
                    },
                    {
                        "code": 340123,
                        "father_code": 340100,
                        "level": "District",
                        "name": "肥西县",
                        "sub_districts": [
                            {
                                "code": 3401234000001,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "安徽肥西经济开发区"
                            },
                            {
                                "code": 340123109,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "丰乐镇"
                            },
                            {
                                "code": 340123200,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "高店乡"
                            },
                            {
                                "code": 340123103,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "官亭镇"
                            },
                            {
                                "code": 340123106,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "花岗镇"
                            },
                            {
                                "code": 340123201,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "铭传乡"
                            },
                            {
                                "code": 340123101,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "三河镇"
                            },
                            {
                                "code": 340123105,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "山南镇"
                            },
                            {
                                "code": 340123100,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "上派镇"
                            },
                            {
                                "code": 340123202,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "柿树岗乡"
                            },
                            {
                                "code": 340123108,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "桃花镇"
                            },
                            {
                                "code": 340123203,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "严店乡"
                            },
                            {
                                "code": 340123401,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "紫蓬山管委会"
                            },
                            {
                                "code": 340123107,
                                "father_code": 340123,
                                "level": "Town",
                                "name": "紫蓬镇"
                            }
                        ]
                    },
                    {
                        "code": 3401710000003,
                        "father_code": 340100,
                        "level": "District",
                        "name": "合肥高新技术产业开发区",
                        "sub_districts": [
                            {
                                "code": 3401714040003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "长宁社区服务中心"
                            },
                            {
                                "code": 3401714089003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "城西桥社区服务中心"
                            },
                            {
                                "code": 3401714030003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "蜀麓社区服务中心"
                            },
                            {
                                "code": 3401714010003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "天乐社区服务中心"
                            },
                            {
                                "code": 3401714050003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "小庙托管区"
                            },
                            {
                                "code": 3401714020003,
                                "father_code": 3401710000003,
                                "level": "Town",
                                "name": "兴园社区服务中心"
                            }
                        ]
                    },
                    {
                        "code": 3401720000003,
                        "father_code": 340100,
                        "level": "District",
                        "name": "合肥经济技术开发区",
                        "sub_districts": [
                            {
                                "code": 3401720020003,
                                "father_code": 3401720000003,
                                "level": "Town",
                                "name": "芙蓉社区管理委员会街道"
                            },
                            {
                                "code": 3401720040003,
                                "father_code": 3401720000003,
                                "level": "Town",
                                "name": "海恒社区管理委员会街道"
                            },
                            {
                                "code": 3401720030003,
                                "father_code": 3401720000003,
                                "level": "Town",
                                "name": "锦绣社区管理委员会街道"
                            },
                            {
                                "code": 3401720010003,
                                "father_code": 3401720000003,
                                "level": "Town",
                                "name": "莲花社区管理委员会街道"
                            }
                        ]
                    },
                    {
                        "code": 340124,
                        "father_code": 340100,
                        "level": "District",
                        "name": "庐江县",
                        "sub_districts": [
                            {
                                "code": 340124110,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "白湖镇"
                            },
                            {
                                "code": 340124108,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "白山镇"
                            },
                            {
                                "code": 3401244049001,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "东顾山街道"
                            },
                            {
                                "code": 340124112,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "矾山镇"
                            },
                            {
                                "code": 340124104,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "郭河镇"
                            },
                            {
                                "code": 3401244059001,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "岗湾街道"
                            },
                            {
                                "code": 340124105,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "金牛镇"
                            },
                            {
                                "code": 340124116,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "柯坦镇"
                            },
                            {
                                "code": 3401241000001,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "庐城镇"
                            },
                            {
                                "code": 340124113,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "罗河镇"
                            },
                            {
                                "code": 340124111,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "龙桥镇"
                            },
                            {
                                "code": 340124115,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "乐桥镇"
                            },
                            {
                                "code": 340124114,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "泥河镇"
                            },
                            {
                                "code": 340124109,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "盛桥镇"
                            },
                            {
                                "code": 340124106,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "石头镇"
                            },
                            {
                                "code": 340124103,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "汤池镇"
                            },
                            {
                                "code": 340124107,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "同大镇"
                            },
                            {
                                "code": 340124102,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "万山镇"
                            },
                            {
                                "code": 340124101,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "冶父山镇"
                            },
                            {
                                "code": 3401244069001,
                                "father_code": 340124,
                                "level": "Town",
                                "name": "移湖街道"
                            }
                        ]
                    },
                    {
                        "code": 340103,
                        "father_code": 340100,
                        "level": "District",
                        "name": "庐阳区",
                        "sub_districts": [
                            {
                                "code": 3401030010001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "亳州路街道"
                            },
                            {
                                "code": 340103100,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "大杨镇"
                            },
                            {
                                "code": 3401030040001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "海棠街道"
                            },
                            {
                                "code": 3401034000001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "庐阳工业区(林店街道)"
                            },
                            {
                                "code": 3401030020001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "双岗街道"
                            },
                            {
                                "code": 3401030120001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "四里河街道"
                            },
                            {
                                "code": 340103200,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "三十岗乡"
                            },
                            {
                                "code": 3401030090001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "三孝口街道"
                            },
                            {
                                "code": 3401030050001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "杏花村街道"
                            },
                            {
                                "code": 3401030030001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "杏林街道"
                            },
                            {
                                "code": 3401030060001,
                                "father_code": 340103,
                                "level": "Town",
                                "name": "逍遥津街道"
                            }
                        ]
                    },
                    {
                        "code": 3401040000003,
                        "father_code": 340100,
                        "level": "District",
                        "name": "蜀山区",
                        "sub_districts": [
                            {
                                "code": 3401040080003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "笔架山街道"
                            },
                            {
                                "code": 3401040020003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "稻香村街道"
                            },
                            {
                                "code": 3401044079003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "高刘街道"
                            },
                            {
                                "code": 3401040030003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "琥珀街道"
                            },
                            {
                                "code": 3401040070003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "荷叶地街道"
                            },
                            {
                                "code": 3401041000003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "井岗镇"
                            },
                            {
                                "code": 3401044069003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "临湖社区管理委员会街道"
                            },
                            {
                                "code": 3401041010003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "南岗镇"
                            },
                            {
                                "code": 3401040040003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "南七街道"
                            },
                            {
                                "code": 3401040010003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "三里庵街道"
                            },
                            {
                                "code": 3401044000003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "蜀山新产业园区"
                            },
                            {
                                "code": 3401040060003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "五里墩街道"
                            },
                            {
                                "code": 3401041020003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "小庙镇"
                            },
                            {
                                "code": 3401040050003,
                                "father_code": 3401040000003,
                                "level": "Town",
                                "name": "西园街道"
                            }
                        ]
                    },
                    {
                        "code": 340102,
                        "father_code": 340100,
                        "level": "District",
                        "name": "瑶海区",
                        "sub_districts": [
                            {
                                "code": 340102010,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "城东街道"
                            },
                            {
                                "code": 340102100,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "大兴镇"
                            },
                            {
                                "code": 340102012,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "方庙街道"
                            },
                            {
                                "code": 3401024010001,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "合肥龙岗综合经济开发区"
                            },
                            {
                                "code": 340102007,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "红光街道"
                            },
                            {
                                "code": 340102008,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "和平路街道"
                            },
                            {
                                "code": 3401020140001,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "嘉山路街道"
                            },
                            {
                                "code": 340102200,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "磨店街道"
                            },
                            {
                                "code": 340102001,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "明光路街道"
                            },
                            {
                                "code": 340102013,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "七里塘街道"
                            },
                            {
                                "code": 340102006,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "七里站街道"
                            },
                            {
                                "code": 340102004,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "三里街街道"
                            },
                            {
                                "code": 340102003,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "胜利路街道"
                            },
                            {
                                "code": 340102101,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "三十头街道"
                            },
                            {
                                "code": 340102005,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "铜陵路街道"
                            },
                            {
                                "code": 3401024029001,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "瑶海社区服务中心"
                            },
                            {
                                "code": 340102011,
                                "father_code": 340102,
                                "level": "Town",
                                "name": "长淮街道"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340400,
                "father_code": 34,
                "level": "City",
                "name": "淮南市",
                "sub_districts": [
                    {
                        "code": 340405,
                        "father_code": 340400,
                        "level": "District",
                        "name": "八公山区",
                        "sub_districts": [
                            {
                                "code": 340405100,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "八公山镇"
                            },
                            {
                                "code": 340405003,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "毕家岗街道"
                            },
                            {
                                "code": 3404054000003,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "妙山林场"
                            },
                            {
                                "code": 3404051210003,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "山王镇"
                            },
                            {
                                "code": 340405002,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "土坝孜街道"
                            },
                            {
                                "code": 340405001,
                                "father_code": 340405,
                                "level": "Town",
                                "name": "新庄孜街道"
                            }
                        ]
                    },
                    {
                        "code": 340402,
                        "father_code": 340400,
                        "level": "District",
                        "name": "大通区",
                        "sub_districts": [
                            {
                                "code": 340402001,
                                "father_code": 340402,
                                "level": "Town",
                                "name": "大通街道"
                            },
                            {
                                "code": 340402102,
                                "father_code": 340402,
                                "level": "Town",
                                "name": "九龙岗镇"
                            },
                            {
                                "code": 340402200,
                                "father_code": 340402,
                                "level": "Town",
                                "name": "孔店乡"
                            },
                            {
                                "code": 340402101,
                                "father_code": 340402,
                                "level": "Town",
                                "name": "洛河镇"
                            },
                            {
                                "code": 340402100,
                                "father_code": 340402,
                                "level": "Town",
                                "name": "上窑镇"
                            }
                        ]
                    },
                    {
                        "code": 340421,
                        "father_code": 340400,
                        "level": "District",
                        "name": "凤台县",
                        "sub_districts": [
                            {
                                "code": 340421100,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 3404211120001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "丁集镇"
                            },
                            {
                                "code": 3404211140001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "大兴镇"
                            },
                            {
                                "code": 3404211100001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "凤凰镇"
                            },
                            {
                                "code": 340421204,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "古店乡"
                            },
                            {
                                "code": 340421209,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "关店乡"
                            },
                            {
                                "code": 3404211080001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "桂集镇"
                            },
                            {
                                "code": 340421105,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "顾桥镇"
                            },
                            {
                                "code": 3404211090001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "焦岗湖镇"
                            },
                            {
                                "code": 3404212120001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "李冲回族乡"
                            },
                            {
                                "code": 3404211130001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "刘集镇"
                            },
                            {
                                "code": 340421106,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "毛集镇"
                            },
                            {
                                "code": 340421205,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "钱庙乡"
                            },
                            {
                                "code": 3404211150001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "尚塘镇"
                            },
                            {
                                "code": 3404211020001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "新集镇"
                            },
                            {
                                "code": 3404211070001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "夏集镇"
                            },
                            {
                                "code": 3404211110001,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "杨村镇"
                            },
                            {
                                "code": 340421104,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "岳张集镇"
                            },
                            {
                                "code": 340421103,
                                "father_code": 340421,
                                "level": "Town",
                                "name": "朱马店镇"
                            }
                        ]
                    },
                    {
                        "code": 340406,
                        "father_code": 340400,
                        "level": "District",
                        "name": "潘集区",
                        "sub_districts": [
                            {
                                "code": 340406202,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "古沟回族乡"
                            },
                            {
                                "code": 340406100,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "高皇镇"
                            },
                            {
                                "code": 340406108,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "贺疃镇"
                            },
                            {
                                "code": 340406106,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "夹沟镇"
                            },
                            {
                                "code": 3404061050001,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "架河镇"
                            },
                            {
                                "code": 340406104,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "芦集镇"
                            },
                            {
                                "code": 340406102,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "泥河镇"
                            },
                            {
                                "code": 340406103,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "潘集镇"
                            },
                            {
                                "code": 340406101,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "平圩镇"
                            },
                            {
                                "code": 3404061070001,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "祁集镇"
                            },
                            {
                                "code": 340406001,
                                "father_code": 340406,
                                "level": "Town",
                                "name": "田集街道"
                            }
                        ]
                    },
                    {
                        "code": 340422,
                        "father_code": 340400,
                        "level": "District",
                        "name": "寿县",
                        "sub_districts": [
                            {
                                "code": 340422107,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "安丰塘镇"
                            },
                            {
                                "code": 340422111,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "安丰镇"
                            },
                            {
                                "code": 340422200,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "八公山乡"
                            },
                            {
                                "code": 340422106,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "板桥镇"
                            },
                            {
                                "code": 340422109,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "保义镇"
                            },
                            {
                                "code": 340422113,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "茶庵镇"
                            },
                            {
                                "code": 340422120,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "大顺镇"
                            },
                            {
                                "code": 340422103,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "丰庄镇"
                            },
                            {
                                "code": 340422102,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "涧沟镇"
                            },
                            {
                                "code": 340422116,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "刘岗镇"
                            },
                            {
                                "code": 340422100,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "寿春镇"
                            },
                            {
                                "code": 340422114,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "三觉镇"
                            },
                            {
                                "code": 340422117,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "双庙集镇"
                            },
                            {
                                "code": 340422101,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "双桥镇"
                            },
                            {
                                "code": 340422203,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "陶店回族乡"
                            },
                            {
                                "code": 340422119,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "瓦埠镇"
                            },
                            {
                                "code": 340422118,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "小甸镇"
                            },
                            {
                                "code": 340422105,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "迎河镇"
                            },
                            {
                                "code": 340422108,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "堰口镇"
                            },
                            {
                                "code": 340422121,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "窑口镇"
                            },
                            {
                                "code": 340422115,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "炎刘镇"
                            },
                            {
                                "code": 340422110,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "隐贤镇"
                            },
                            {
                                "code": 340422201,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "张李乡"
                            },
                            {
                                "code": 340422112,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "众兴镇"
                            },
                            {
                                "code": 340422104,
                                "father_code": 340422,
                                "level": "Town",
                                "name": "正阳关镇"
                            }
                        ]
                    },
                    {
                        "code": 340403,
                        "father_code": 340400,
                        "level": "District",
                        "name": "田家庵区",
                        "sub_districts": [
                            {
                                "code": 340403101,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "安成镇"
                            },
                            {
                                "code": 340403102,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "曹庵镇"
                            },
                            {
                                "code": 340403007,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "洞山街道"
                            },
                            {
                                "code": 340403003,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "国庆街道"
                            },
                            {
                                "code": 340403006,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "公园街道"
                            },
                            {
                                "code": 340403004,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "淮滨街道"
                            },
                            {
                                "code": 340403008,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "龙泉街道"
                            },
                            {
                                "code": 340403009,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "泉山街道"
                            },
                            {
                                "code": 340403100,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "舜耕镇"
                            },
                            {
                                "code": 3404031030001,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "三和镇"
                            },
                            {
                                "code": 340403201,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "史院乡"
                            },
                            {
                                "code": 340403001,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "田东街道"
                            },
                            {
                                "code": 340403002,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "新淮街道"
                            },
                            {
                                "code": 340403005,
                                "father_code": 340403,
                                "level": "Town",
                                "name": "朝阳街道"
                            }
                        ]
                    },
                    {
                        "code": 340404,
                        "father_code": 340400,
                        "level": "District",
                        "name": "谢家集区",
                        "sub_districts": [
                            {
                                "code": 340404002,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "蔡家岗街道"
                            },
                            {
                                "code": 340404201,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "孤堆回族乡"
                            },
                            {
                                "code": 340404003,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "立新街道"
                            },
                            {
                                "code": 340404101,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "李郢孜镇"
                            },
                            {
                                "code": 340404005,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "平山街道"
                            },
                            {
                                "code": 340404200,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "孙庙乡"
                            },
                            {
                                "code": 340404102,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "唐山镇"
                            },
                            {
                                "code": 340404100,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "望峰岗镇"
                            },
                            {
                                "code": 340404001,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "谢家集街道"
                            },
                            {
                                "code": 340404004,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "谢三村街道"
                            },
                            {
                                "code": 340404103,
                                "father_code": 340404,
                                "level": "Town",
                                "name": "杨公镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341000,
                "father_code": 34,
                "level": "City",
                "name": "黄山市",
                "sub_districts": [
                    {
                        "code": 341003,
                        "father_code": 341000,
                        "level": "District",
                        "name": "黄山区",
                        "sub_districts": [
                            {
                                "code": 341003106,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "耿城镇"
                            },
                            {
                                "code": 341003100,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "甘棠镇"
                            },
                            {
                                "code": 341003105,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "焦村镇"
                            },
                            {
                                "code": 3410032010001,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "龙门乡"
                            },
                            {
                                "code": 341003107,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "三口镇"
                            },
                            {
                                "code": 341003103,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "谭家桥镇"
                            },
                            {
                                "code": 341003102,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "汤口镇"
                            },
                            {
                                "code": 341003104,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "太平湖镇"
                            },
                            {
                                "code": 341003108,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "乌石镇"
                            },
                            {
                                "code": 3410032040001,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "新丰乡"
                            },
                            {
                                "code": 3410032030001,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "新华乡"
                            },
                            {
                                "code": 3410032000001,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "新明乡"
                            },
                            {
                                "code": 341003101,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "仙源镇"
                            },
                            {
                                "code": 3410032050001,
                                "father_code": 341003,
                                "level": "Town",
                                "name": "永丰乡"
                            }
                        ]
                    },
                    {
                        "code": 341004,
                        "father_code": 341000,
                        "level": "District",
                        "name": "徽州区",
                        "sub_districts": [
                            {
                                "code": 341004103,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "呈坎镇"
                            },
                            {
                                "code": 341004202,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "富溪乡"
                            },
                            {
                                "code": 3410041980003,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "徽州区直辖村级区划"
                            },
                            {
                                "code": 341004102,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "潜口镇"
                            },
                            {
                                "code": 341004200,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "洽舍乡"
                            },
                            {
                                "code": 341004101,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "西溪南镇"
                            },
                            {
                                "code": 341004201,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "杨村乡"
                            },
                            {
                                "code": 3410041000003,
                                "father_code": 341004,
                                "level": "Town",
                                "name": "岩寺镇"
                            }
                        ]
                    },
                    {
                        "code": 341024,
                        "father_code": 341000,
                        "level": "District",
                        "name": "祁门县",
                        "sub_districts": [
                            {
                                "code": 341024106,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "安凌镇"
                            },
                            {
                                "code": 341024202,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "柏溪乡"
                            },
                            {
                                "code": 341024200,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "大坦乡"
                            },
                            {
                                "code": 341024107,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "凫峰镇"
                            },
                            {
                                "code": 341024208,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "古溪乡"
                            },
                            {
                                "code": 341024102,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "金字牌镇"
                            },
                            {
                                "code": 341024104,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "历口镇"
                            },
                            {
                                "code": 341024206,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "芦溪乡"
                            },
                            {
                                "code": 341024103,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "平里镇"
                            },
                            {
                                "code": 341024204,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "祁红乡"
                            },
                            {
                                "code": 341024100,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "祁山镇"
                            },
                            {
                                "code": 341024205,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "溶口乡"
                            },
                            {
                                "code": 341024210,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "箬坑乡"
                            },
                            {
                                "code": 341024105,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "闪里镇"
                            },
                            {
                                "code": 3410241080001,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "塔坊镇"
                            },
                            {
                                "code": 3410241090001,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "新安镇"
                            },
                            {
                                "code": 341024101,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "小路口镇"
                            },
                            {
                                "code": 341024207,
                                "father_code": 341024,
                                "level": "Town",
                                "name": "渚口乡"
                            }
                        ]
                    },
                    {
                        "code": 341021,
                        "father_code": 341000,
                        "level": "District",
                        "name": "歙县",
                        "sub_districts": [
                            {
                                "code": 341021102,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "北岸镇"
                            },
                            {
                                "code": 341021110,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "岔口镇"
                            },
                            {
                                "code": 3410212030001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "昌溪乡"
                            },
                            {
                                "code": 341021103,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "富堨镇"
                            },
                            {
                                "code": 3410211050003,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "桂林镇"
                            },
                            {
                                "code": 341021100,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "徽城镇"
                            },
                            {
                                "code": 3410212090001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "璜田乡"
                            },
                            {
                                "code": 3410212060001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "金川乡"
                            },
                            {
                                "code": 341021111,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "街口镇"
                            },
                            {
                                "code": 3410214000003,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "开发区类似乡级单位"
                            },
                            {
                                "code": 3410212000001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "坑口乡"
                            },
                            {
                                "code": 341021108,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "杞梓里镇"
                            },
                            {
                                "code": 3410212110001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "森村乡"
                            },
                            {
                                "code": 341021101,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "深渡镇"
                            },
                            {
                                "code": 3410212020001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "上丰乡"
                            },
                            {
                                "code": 3410212120001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "绍濂乡"
                            },
                            {
                                "code": 3410212130001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "石门乡"
                            },
                            {
                                "code": 3410212140001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "狮石乡"
                            },
                            {
                                "code": 3410211140001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "三阳镇"
                            },
                            {
                                "code": 341021112,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "王村镇"
                            },
                            {
                                "code": 3410212040001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "武阳乡"
                            },
                            {
                                "code": 3410212070001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "小川乡"
                            },
                            {
                                "code": 341021106,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "许村镇"
                            },
                            {
                                "code": 3410211130001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "雄村镇"
                            },
                            {
                                "code": 341021109,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "霞坑镇"
                            },
                            {
                                "code": 341021107,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "溪头镇"
                            },
                            {
                                "code": 3410212080001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "新溪口乡"
                            },
                            {
                                "code": 341021104,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "郑村镇"
                            },
                            {
                                "code": 3410212100001,
                                "father_code": 341021,
                                "level": "Town",
                                "name": "长陔乡"
                            }
                        ]
                    },
                    {
                        "code": 341002,
                        "father_code": 341000,
                        "level": "District",
                        "name": "屯溪区",
                        "sub_districts": [
                            {
                                "code": 341002004,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "老街街道"
                            },
                            {
                                "code": 341002102,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "黎阳镇"
                            },
                            {
                                "code": 341002100,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "屯光镇"
                            },
                            {
                                "code": 341002103,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "新潭镇"
                            },
                            {
                                "code": 341002001,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "昱东街道"
                            },
                            {
                                "code": 341002101,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "阳湖镇"
                            },
                            {
                                "code": 341002104,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "奕棋镇"
                            },
                            {
                                "code": 341002003,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "昱西街道"
                            },
                            {
                                "code": 341002002,
                                "father_code": 341002,
                                "level": "Town",
                                "name": "昱中街道"
                            }
                        ]
                    },
                    {
                        "code": 341022,
                        "father_code": 341000,
                        "level": "District",
                        "name": "休宁县",
                        "sub_districts": [
                            {
                                "code": 3410222110001,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "白际乡"
                            },
                            {
                                "code": 341022204,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "板桥乡"
                            },
                            {
                                "code": 341022104,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "东临溪镇"
                            },
                            {
                                "code": 341022206,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "鹤城乡"
                            },
                            {
                                "code": 3410222100001,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "璜尖乡"
                            },
                            {
                                "code": 341022100,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "海阳镇"
                            },
                            {
                                "code": 341022107,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "流口镇"
                            },
                            {
                                "code": 341022202,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "岭南乡"
                            },
                            {
                                "code": 3410222090001,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "龙田乡"
                            },
                            {
                                "code": 341022105,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "蓝田镇"
                            },
                            {
                                "code": 341022101,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "齐云山镇"
                            },
                            {
                                "code": 341022201,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "山斗乡"
                            },
                            {
                                "code": 341022109,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "商山镇"
                            },
                            {
                                "code": 341022102,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "万安镇"
                            },
                            {
                                "code": 341022103,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "五城镇"
                            },
                            {
                                "code": 341022108,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "汪村镇"
                            },
                            {
                                "code": 341022203,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "渭桥乡"
                            },
                            {
                                "code": 341022106,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "溪口镇"
                            },
                            {
                                "code": 341022208,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "榆村乡"
                            },
                            {
                                "code": 341022207,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "源芳乡"
                            },
                            {
                                "code": 3410221100001,
                                "father_code": 341022,
                                "level": "Town",
                                "name": "月潭湖镇"
                            }
                        ]
                    },
                    {
                        "code": 341023,
                        "father_code": 341000,
                        "level": "District",
                        "name": "黟县",
                        "sub_districts": [
                            {
                                "code": 341023100,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "碧阳镇"
                            },
                            {
                                "code": 341023101,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "宏村镇"
                            },
                            {
                                "code": 341023202,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "宏潭乡"
                            },
                            {
                                "code": 341023203,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "洪星乡"
                            },
                            {
                                "code": 3410231040001,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "柯村镇"
                            },
                            {
                                "code": 341023201,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "美溪乡"
                            },
                            {
                                "code": 341023103,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "西递镇"
                            },
                            {
                                "code": 341023102,
                                "father_code": 341023,
                                "level": "Town",
                                "name": "渔亭镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341500,
                "father_code": 34,
                "level": "City",
                "name": "六安市",
                "sub_districts": [
                    {
                        "code": 341522,
                        "father_code": 341500,
                        "level": "District",
                        "name": "霍邱县",
                        "sub_districts": [
                            {
                                "code": 3415224000001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "安徽霍邱经济开发区"
                            },
                            {
                                "code": 341522208,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "白莲乡"
                            },
                            {
                                "code": 341522100,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 3415221160001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "岔路镇"
                            },
                            {
                                "code": 3415221200001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "曹庙镇"
                            },
                            {
                                "code": 341522204,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "城西湖乡"
                            },
                            {
                                "code": 3415221170001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "冯井镇"
                            },
                            {
                                "code": 3415222100001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "冯瓴镇"
                            },
                            {
                                "code": 3415221230001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "范桥镇"
                            },
                            {
                                "code": 3415221140001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "高塘镇"
                            },
                            {
                                "code": 3415221090001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "扈胡镇"
                            },
                            {
                                "code": 341522101,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "河口镇"
                            },
                            {
                                "code": 3415221080001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "花园镇"
                            },
                            {
                                "code": 3415222030001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "临淮岗镇"
                            },
                            {
                                "code": 3415221030001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "临水镇"
                            },
                            {
                                "code": 3415221150001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "龙潭镇"
                            },
                            {
                                "code": 3415221060001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "马店镇"
                            },
                            {
                                "code": 3415221070001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "孟集镇"
                            },
                            {
                                "code": 3415221240001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "潘集镇"
                            },
                            {
                                "code": 3415221260001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "彭塔镇"
                            },
                            {
                                "code": 3415221050001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "石店镇"
                            },
                            {
                                "code": 3415221270001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "宋店镇"
                            },
                            {
                                "code": 341522207,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "邵岗乡"
                            },
                            {
                                "code": 341522206,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "三流乡"
                            },
                            {
                                "code": 341522201,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "王截流乡"
                            },
                            {
                                "code": 3415221130001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "乌龙镇"
                            },
                            {
                                "code": 3415221040001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "新店镇"
                            },
                            {
                                "code": 3415221190001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "夏店镇"
                            },
                            {
                                "code": 3415221020001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "周集镇"
                            },
                            {
                                "code": 3415221100001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "长集镇"
                            },
                            {
                                "code": 3415221180001,
                                "father_code": 341522,
                                "level": "Town",
                                "name": "众兴集镇"
                            }
                        ]
                    },
                    {
                        "code": 341525,
                        "father_code": 341500,
                        "level": "District",
                        "name": "霍山县",
                        "sub_districts": [
                            {
                                "code": 341525109,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "大化坪镇"
                            },
                            {
                                "code": 341525103,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "但家庙镇"
                            },
                            {
                                "code": 3415251120001,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "单龙寺镇"
                            },
                            {
                                "code": 341525201,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "东西溪乡"
                            },
                            {
                                "code": 341525101,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "佛子岭镇"
                            },
                            {
                                "code": 341525105,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "黑石渡镇"
                            },
                            {
                                "code": 341525100,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "衡山镇"
                            },
                            {
                                "code": 3415254000001,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "经济开发区"
                            },
                            {
                                "code": 341525107,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "落儿岭镇"
                            },
                            {
                                "code": 341525110,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "漫水河镇"
                            },
                            {
                                "code": 341525108,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "磨子潭镇"
                            },
                            {
                                "code": 341525111,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "上土市镇"
                            },
                            {
                                "code": 341525202,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "太平畈乡"
                            },
                            {
                                "code": 341525203,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "太阳乡"
                            },
                            {
                                "code": 341525102,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "下符桥镇"
                            },
                            {
                                "code": 341525104,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "与儿街镇"
                            },
                            {
                                "code": 341525106,
                                "father_code": 341525,
                                "level": "Town",
                                "name": "诸佛庵镇"
                            }
                        ]
                    },
                    {
                        "code": 341502,
                        "father_code": 341500,
                        "level": "District",
                        "name": "金安区",
                        "sub_districts": [
                            {
                                "code": 341502200,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "城北乡"
                            },
                            {
                                "code": 341502110,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "椿树镇"
                            },
                            {
                                "code": 341502105,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "东河口镇"
                            },
                            {
                                "code": 341502102,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "东桥镇"
                            },
                            {
                                "code": 341502002,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "东市街道"
                            },
                            {
                                "code": 341502204,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "横塘岗乡"
                            },
                            {
                                "code": 3415024000001,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "六安经济开发区"
                            },
                            {
                                "code": 341502100,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "木厂镇"
                            },
                            {
                                "code": 341502104,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "毛坦厂镇"
                            },
                            {
                                "code": 341502101,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "马头镇"
                            },
                            {
                                "code": 341502202,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "淠东乡"
                            },
                            {
                                "code": 341502005,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "清水河街道"
                            },
                            {
                                "code": 341502108,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "孙岗镇"
                            },
                            {
                                "code": 341502106,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "双河镇"
                            },
                            {
                                "code": 341502003,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "三里桥街道"
                            },
                            {
                                "code": 341502107,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "施桥镇"
                            },
                            {
                                "code": 341502109,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "三十铺镇"
                            },
                            {
                                "code": 341502004,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "望城街道"
                            },
                            {
                                "code": 341502201,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "翁墩乡"
                            },
                            {
                                "code": 341502205,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "先生店乡"
                            },
                            {
                                "code": 341502203,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "中店乡"
                            },
                            {
                                "code": 341502103,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "张店镇"
                            },
                            {
                                "code": 341502001,
                                "father_code": 341502,
                                "level": "Town",
                                "name": "中市街道"
                            }
                        ]
                    },
                    {
                        "code": 341524,
                        "father_code": 341500,
                        "level": "District",
                        "name": "金寨县",
                        "sub_districts": [
                            {
                                "code": 341524111,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "白塔畈镇"
                            },
                            {
                                "code": 3415241070001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "斑竹园镇"
                            },
                            {
                                "code": 3415241050001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "古碑镇"
                            },
                            {
                                "code": 3415242090001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "关庙乡"
                            },
                            {
                                "code": 341524208,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "果子园乡"
                            },
                            {
                                "code": 3415242040001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "槐树湾乡"
                            },
                            {
                                "code": 3415242050001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "花石乡"
                            },
                            {
                                "code": 3415241010001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "麻埠镇"
                            },
                            {
                                "code": 341524100,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "梅山镇"
                            },
                            {
                                "code": 341524109,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "南溪镇"
                            },
                            {
                                "code": 3415242110001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "全军乡"
                            },
                            {
                                "code": 3415241020001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "青山镇"
                            },
                            {
                                "code": 3415242060001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "沙河乡"
                            },
                            {
                                "code": 3415241100001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "双河镇"
                            },
                            {
                                "code": 3415242140001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "铁冲乡"
                            },
                            {
                                "code": 3415241080001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "汤家汇镇"
                            },
                            {
                                "code": 3415242070001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "桃岭乡"
                            },
                            {
                                "code": 3415241040001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "天堂寨镇"
                            },
                            {
                                "code": 3415241060001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "吴家店镇"
                            },
                            {
                                "code": 3415244000001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "现代产业园(经济开发区)"
                            },
                            {
                                "code": 3415242020001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "油坊店乡"
                            },
                            {
                                "code": 3415241030001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "燕子河镇"
                            },
                            {
                                "code": 3415242010001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "张冲乡"
                            },
                            {
                                "code": 3415242030001,
                                "father_code": 341524,
                                "level": "Town",
                                "name": "长岭乡"
                            }
                        ]
                    },
                    {
                        "code": 341523,
                        "father_code": 341500,
                        "level": "District",
                        "name": "舒城县",
                        "sub_districts": [
                            {
                                "code": 341523201,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "柏林乡"
                            },
                            {
                                "code": 341523105,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "百神庙镇"
                            },
                            {
                                "code": 341523100,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "城关镇"
                            },
                            {
                                "code": 341523200,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "春秋乡"
                            },
                            {
                                "code": 341523109,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "干汊河镇"
                            },
                            {
                                "code": 341523204,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "高峰乡"
                            },
                            {
                                "code": 341523106,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "杭埠镇"
                            },
                            {
                                "code": 341523113,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "河棚镇"
                            },
                            {
                                "code": 341523205,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "庐镇乡"
                            },
                            {
                                "code": 341523108,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "南港镇"
                            },
                            {
                                "code": 341523203,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "阙店乡"
                            },
                            {
                                "code": 341523104,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "千人桥镇"
                            },
                            {
                                "code": 3415234000001,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "舒城县经济开发区"
                            },
                            {
                                "code": 341523107,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "舒茶镇"
                            },
                            {
                                "code": 341523112,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "山七镇"
                            },
                            {
                                "code": 341523114,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "汤池镇"
                            },
                            {
                                "code": 341523202,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "棠树乡"
                            },
                            {
                                "code": 341523102,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "桃溪镇"
                            },
                            {
                                "code": 341523103,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "万佛湖镇"
                            },
                            {
                                "code": 341523111,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "五显镇"
                            },
                            {
                                "code": 341523101,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "晓天镇"
                            },
                            {
                                "code": 341523110,
                                "father_code": 341523,
                                "level": "Town",
                                "name": "张母桥镇"
                            }
                        ]
                    },
                    {
                        "code": 341503,
                        "father_code": 341500,
                        "level": "District",
                        "name": "裕安区",
                        "sub_districts": [
                            {
                                "code": 341503106,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "城南镇"
                            },
                            {
                                "code": 341503107,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "丁集镇"
                            },
                            {
                                "code": 341503104,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "独山镇"
                            },
                            {
                                "code": 341503200,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "单王乡"
                            },
                            {
                                "code": 341503110,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "分路口镇"
                            },
                            {
                                "code": 341503001,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "鼓楼街道"
                            },
                            {
                                "code": 341503108,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "固镇镇"
                            },
                            {
                                "code": 341503101,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "韩摆渡镇"
                            },
                            {
                                "code": 341503111,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "江家店镇"
                            },
                            {
                                "code": 3415034000001,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "六安市裕安区经济开发区"
                            },
                            {
                                "code": 341503205,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "罗集乡"
                            },
                            {
                                "code": 341503204,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "平桥乡"
                            },
                            {
                                "code": 341503201,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "青山乡"
                            },
                            {
                                "code": 341503202,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "石板冲乡"
                            },
                            {
                                "code": 341503100,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "苏埠镇"
                            },
                            {
                                "code": 341503103,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "顺河镇"
                            },
                            {
                                "code": 341503105,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "石婆店镇"
                            },
                            {
                                "code": 341503206,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "狮子岗乡"
                            },
                            {
                                "code": 341503102,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "新安镇"
                            },
                            {
                                "code": 341503203,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "西河口乡"
                            },
                            {
                                "code": 341503003,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "小华山街道"
                            },
                            {
                                "code": 341503109,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "徐集镇"
                            },
                            {
                                "code": 341503002,
                                "father_code": 341503,
                                "level": "Town",
                                "name": "西市街道"
                            }
                        ]
                    },
                    {
                        "code": 341504,
                        "father_code": 341500,
                        "level": "District",
                        "name": "叶集区",
                        "sub_districts": [
                            {
                                "code": 3415041030001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "洪集镇"
                            },
                            {
                                "code": 3415040020001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "平岗街道"
                            },
                            {
                                "code": 3415042000001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "孙岗乡"
                            },
                            {
                                "code": 3415040010001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "史河街道"
                            },
                            {
                                "code": 3415041020001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "三元镇"
                            },
                            {
                                "code": 3415041040001,
                                "father_code": 341504,
                                "level": "Town",
                                "name": "姚李镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340500,
                "father_code": 34,
                "level": "City",
                "name": "马鞍山市",
                "sub_districts": [
                    {
                        "code": 340506,
                        "father_code": 340500,
                        "level": "District",
                        "name": "博望区",
                        "sub_districts": [
                            {
                                "code": 340506100,
                                "father_code": 340506,
                                "level": "Town",
                                "name": "博望镇"
                            },
                            {
                                "code": 340506101,
                                "father_code": 340506,
                                "level": "Town",
                                "name": "丹阳镇"
                            },
                            {
                                "code": 340506102,
                                "father_code": 340506,
                                "level": "Town",
                                "name": "新市镇"
                            }
                        ]
                    },
                    {
                        "code": 340521,
                        "father_code": 340500,
                        "level": "District",
                        "name": "当涂县",
                        "sub_districts": [
                            {
                                "code": 3405211120001,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "大陇镇"
                            },
                            {
                                "code": 3405214020001,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "当涂大青山李白文化旅游区"
                            },
                            {
                                "code": 340521400,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "当涂经济开发区"
                            },
                            {
                                "code": 3405215000001,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "当涂现代农业示范区"
                            },
                            {
                                "code": 340521100,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "姑孰镇"
                            },
                            {
                                "code": 340521101,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "黄池镇"
                            },
                            {
                                "code": 340521105,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "护河镇"
                            },
                            {
                                "code": 340521111,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "湖阳镇"
                            },
                            {
                                "code": 340521202,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "江心乡"
                            },
                            {
                                "code": 340521110,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "年陡镇"
                            },
                            {
                                "code": 340521103,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "石桥镇"
                            },
                            {
                                "code": 340521106,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "太白镇"
                            },
                            {
                                "code": 340521104,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "塘南镇"
                            },
                            {
                                "code": 340521102,
                                "father_code": 340521,
                                "level": "Town",
                                "name": "乌溪镇"
                            }
                        ]
                    },
                    {
                        "code": 340503,
                        "father_code": 340500,
                        "level": "District",
                        "name": "花山区",
                        "sub_districts": [
                            {
                                "code": 3405034010001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "慈湖高新技术产业开发区"
                            },
                            {
                                "code": 3405030080001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "慈湖街道"
                            },
                            {
                                "code": 340503003,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "湖东路街道"
                            },
                            {
                                "code": 340503005,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "霍里街道"
                            },
                            {
                                "code": 3405030090001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "江东街道"
                            },
                            {
                                "code": 340503002,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "解放路街道"
                            },
                            {
                                "code": 3405030060001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "金家庄街道"
                            },
                            {
                                "code": 3405031010001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "濮塘镇"
                            },
                            {
                                "code": 340503001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "沙塘路街道"
                            },
                            {
                                "code": 3405030070001,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "塘西街道"
                            },
                            {
                                "code": 340503004,
                                "father_code": 340503,
                                "level": "Town",
                                "name": "桃源路街道"
                            }
                        ]
                    },
                    {
                        "code": 340522,
                        "father_code": 340500,
                        "level": "District",
                        "name": "含山县",
                        "sub_districts": [
                            {
                                "code": 340522100,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "环峰镇"
                            },
                            {
                                "code": 340522104,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "林头镇"
                            },
                            {
                                "code": 340522105,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "清溪镇"
                            },
                            {
                                "code": 340522103,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "陶厂镇"
                            },
                            {
                                "code": 340522102,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "铜闸镇"
                            },
                            {
                                "code": 340522106,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "仙踪镇"
                            },
                            {
                                "code": 340522101,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "运漕镇"
                            },
                            {
                                "code": 340522107,
                                "father_code": 340522,
                                "level": "Town",
                                "name": "昭关镇"
                            }
                        ]
                    },
                    {
                        "code": 340523,
                        "father_code": 340500,
                        "level": "District",
                        "name": "和县",
                        "sub_districts": [
                            {
                                "code": 3405231020001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "白桥镇"
                            },
                            {
                                "code": 3405231040001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "功桥镇"
                            },
                            {
                                "code": 3405231030001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "姥桥镇"
                            },
                            {
                                "code": 340523100,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "历阳镇"
                            },
                            {
                                "code": 3405231080001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "善厚镇"
                            },
                            {
                                "code": 3405231090001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "石杨镇"
                            },
                            {
                                "code": 3405231070001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "乌江镇"
                            },
                            {
                                "code": 3405231050001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "西埠镇"
                            },
                            {
                                "code": 3405231060001,
                                "father_code": 340523,
                                "level": "Town",
                                "name": "香泉镇"
                            }
                        ]
                    },
                    {
                        "code": 340504,
                        "father_code": 340500,
                        "level": "District",
                        "name": "雨山区",
                        "sub_districts": [
                            {
                                "code": 340504003,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "安民街道"
                            },
                            {
                                "code": 340504004,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "采石街道"
                            },
                            {
                                "code": 340504200,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "佳山乡"
                            },
                            {
                                "code": 340504001,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "平湖街道"
                            },
                            {
                                "code": 340504100,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "向山镇"
                            },
                            {
                                "code": 340504002,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "雨山街道"
                            },
                            {
                                "code": 340504101,
                                "father_code": 340504,
                                "level": "Town",
                                "name": "银塘镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341300,
                "father_code": 34,
                "level": "City",
                "name": "宿州市",
                "sub_districts": [
                    {
                        "code": 341321,
                        "father_code": 341300,
                        "level": "District",
                        "name": "砀山县",
                        "sub_districts": [
                            {
                                "code": 341321108,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "曹庄镇"
                            },
                            {
                                "code": 341321112,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "程庄镇"
                            },
                            {
                                "code": 341321100,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "砀城镇"
                            },
                            {
                                "code": 341321109,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "关帝庙镇"
                            },
                            {
                                "code": 341321104,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "葛集镇"
                            },
                            {
                                "code": 3413214020001,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "高铁新区"
                            },
                            {
                                "code": 341321107,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "官庄坝镇"
                            },
                            {
                                "code": 3413214000003,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "经济开发区"
                            },
                            {
                                "code": 3413211110001,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "良梨镇"
                            },
                            {
                                "code": 3413211020003,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "李庄镇"
                            },
                            {
                                "code": 341321103,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "唐寨镇"
                            },
                            {
                                "code": 3413214010001,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "薛楼板材加工园"
                            },
                            {
                                "code": 341321106,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "玄庙镇"
                            },
                            {
                                "code": 341321110,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "朱楼镇"
                            },
                            {
                                "code": 3413211010001,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "赵屯镇"
                            },
                            {
                                "code": 341321105,
                                "father_code": 341321,
                                "level": "Town",
                                "name": "周寨镇"
                            }
                        ]
                    },
                    {
                        "code": 341323,
                        "father_code": 341300,
                        "level": "District",
                        "name": "灵璧县",
                        "sub_districts": [
                            {
                                "code": 3413231130001,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "禅堂镇"
                            },
                            {
                                "code": 341323202,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "大路乡"
                            },
                            {
                                "code": 3413232030001,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "大庙镇"
                            },
                            {
                                "code": 341323112,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "冯庙镇"
                            },
                            {
                                "code": 341323111,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "高楼镇"
                            },
                            {
                                "code": 341323106,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "浍沟镇"
                            },
                            {
                                "code": 341323102,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "黄湾镇"
                            },
                            {
                                "code": 3413234000001,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "灵璧县经济开发区"
                            },
                            {
                                "code": 341323100,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "灵城镇"
                            },
                            {
                                "code": 341323103,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "娄庄镇"
                            },
                            {
                                "code": 341323101,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "韦集镇"
                            },
                            {
                                "code": 341323108,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "下楼镇"
                            },
                            {
                                "code": 3413231150001,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "向阳镇"
                            },
                            {
                                "code": 341323110,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "渔沟镇"
                            },
                            {
                                "code": 341323105,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "尹集镇"
                            },
                            {
                                "code": 341323107,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "游集镇"
                            },
                            {
                                "code": 3413231140001,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "虞姬镇"
                            },
                            {
                                "code": 341323104,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "杨疃镇"
                            },
                            {
                                "code": 341323201,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "朱集乡"
                            },
                            {
                                "code": 341323109,
                                "father_code": 341323,
                                "level": "Town",
                                "name": "朝阳镇"
                            }
                        ]
                    },
                    {
                        "code": 341324,
                        "father_code": 341300,
                        "level": "District",
                        "name": "泗县",
                        "sub_districts": [
                            {
                                "code": 341324103,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "草沟镇"
                            },
                            {
                                "code": 341324110,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "草庙镇"
                            },
                            {
                                "code": 341324102,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "丁湖镇"
                            },
                            {
                                "code": 341324101,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "墩集镇"
                            },
                            {
                                "code": 3413241120001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "大路口镇"
                            },
                            {
                                "code": 3413241130001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "大杨镇"
                            },
                            {
                                "code": 341324106,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "大庄镇"
                            },
                            {
                                "code": 3413244029001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "虹城街道"
                            },
                            {
                                "code": 341324109,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "黑塔镇"
                            },
                            {
                                "code": 341324105,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "黄圩镇"
                            },
                            {
                                "code": 341324108,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "刘圩镇"
                            },
                            {
                                "code": 3413241110001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "屏山镇"
                            },
                            {
                                "code": 341324100,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "泗城镇"
                            },
                            {
                                "code": 3413244039001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "泗水街道"
                            },
                            {
                                "code": 341324107,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "山头镇"
                            },
                            {
                                "code": 3413241140001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "瓦坊镇"
                            },
                            {
                                "code": 3413244019001,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "运河街道"
                            },
                            {
                                "code": 341324104,
                                "father_code": 341324,
                                "level": "Town",
                                "name": "长沟镇"
                            }
                        ]
                    },
                    {
                        "code": 341322,
                        "father_code": 341300,
                        "level": "District",
                        "name": "萧县",
                        "sub_districts": [
                            {
                                "code": 341322116,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "白土镇"
                            },
                            {
                                "code": 341322109,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "杜楼镇"
                            },
                            {
                                "code": 341322110,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "丁里镇"
                            },
                            {
                                "code": 341322107,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "大屯镇"
                            },
                            {
                                "code": 341322117,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "官桥镇"
                            },
                            {
                                "code": 341322101,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "黄口镇"
                            },
                            {
                                "code": 3413222010001,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "酒店镇"
                            },
                            {
                                "code": 341322100,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "龙城镇"
                            },
                            {
                                "code": 341322105,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "刘套镇"
                            },
                            {
                                "code": 341322106,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "马井镇"
                            },
                            {
                                "code": 3413221130001,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "青龙集镇"
                            },
                            {
                                "code": 341322204,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "石林乡"
                            },
                            {
                                "code": 3413221180001,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "圣泉镇"
                            },
                            {
                                "code": 3413222020001,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "孙圩子镇"
                            },
                            {
                                "code": 341322111,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "王寨镇"
                            },
                            {
                                "code": 341322104,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "新庄镇"
                            },
                            {
                                "code": 341322115,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "永堌镇"
                            },
                            {
                                "code": 341322103,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "闫集镇"
                            },
                            {
                                "code": 341322102,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "杨楼镇"
                            },
                            {
                                "code": 341322112,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "祖楼镇"
                            },
                            {
                                "code": 3413221190001,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "庄里镇"
                            },
                            {
                                "code": 341322108,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "赵庄镇"
                            },
                            {
                                "code": 341322114,
                                "father_code": 341322,
                                "level": "Town",
                                "name": "张庄寨镇"
                            }
                        ]
                    },
                    {
                        "code": 341302,
                        "father_code": 341300,
                        "level": "District",
                        "name": "埇桥区",
                        "sub_districts": [
                            {
                                "code": 341302008,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "北关街道"
                            },
                            {
                                "code": 3413020090003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "汴河街道"
                            },
                            {
                                "code": 3413022090001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "北杨寨乡"
                            },
                            {
                                "code": 3413021040003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "曹村镇"
                            },
                            {
                                "code": 341302011,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "城东街道"
                            },
                            {
                                "code": 3413021030001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "褚兰镇"
                            },
                            {
                                "code": 341302003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "道东街道"
                            },
                            {
                                "code": 3413021100001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "大店镇"
                            },
                            {
                                "code": 341302004,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "东关街道"
                            },
                            {
                                "code": 3413021140001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "大营镇"
                            },
                            {
                                "code": 3413021110001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "大泽乡镇"
                            },
                            {
                                "code": 3413021000001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "符离镇"
                            },
                            {
                                "code": 3413021090001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "灰古镇"
                            },
                            {
                                "code": 3413021160001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "蒿沟镇"
                            },
                            {
                                "code": 3413021050001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "夹沟镇"
                            },
                            {
                                "code": 3413024049001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "金海街道"
                            },
                            {
                                "code": 3413022020001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "解集镇"
                            },
                            {
                                "code": 3413021060001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "栏杆镇"
                            },
                            {
                                "code": 3413021010001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "芦岭镇"
                            },
                            {
                                "code": 3413022100001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "苗庵镇"
                            },
                            {
                                "code": 341302006,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "南关街道"
                            },
                            {
                                "code": 3413021130001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "蕲县镇"
                            },
                            {
                                "code": 341302010,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "三八街道"
                            },
                            {
                                "code": 3413021070001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "时村镇"
                            },
                            {
                                "code": 3413021150001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "顺河镇"
                            },
                            {
                                "code": 341302005,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "三里湾街道"
                            },
                            {
                                "code": 3413020399003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "宿州东部新城行政管理区"
                            },
                            {
                                "code": 3413024020003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "宿州高新技术产业开发区"
                            },
                            {
                                "code": 3413024030003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "宿州埇桥经济开发区"
                            },
                            {
                                "code": 3413022030001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "桃沟乡"
                            },
                            {
                                "code": 341302002,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "沱河街道"
                            },
                            {
                                "code": 3413021120001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "桃园镇"
                            },
                            {
                                "code": 3413022080001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "西二铺乡"
                            },
                            {
                                "code": 341302007,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "西关街道"
                            },
                            {
                                "code": 3413021080001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "永安镇"
                            },
                            {
                                "code": 341302001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "埇桥街道"
                            },
                            {
                                "code": 3413022070001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "永镇乡"
                            },
                            {
                                "code": 3413022000003,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "杨庄镇"
                            },
                            {
                                "code": 3413022010001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "支河乡"
                            },
                            {
                                "code": 3413021020001,
                                "father_code": 341302,
                                "level": "Town",
                                "name": "朱仙庄镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340700,
                "father_code": 34,
                "level": "City",
                "name": "铜陵市",
                "sub_districts": [
                    {
                        "code": 340711,
                        "father_code": 340700,
                        "level": "District",
                        "name": "郊区",
                        "sub_districts": [
                            {
                                "code": 3407110020001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "安矿办事处街道"
                            },
                            {
                                "code": 3407111030001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "陈瑶湖镇"
                            },
                            {
                                "code": 3407111010001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "大通镇"
                            },
                            {
                                "code": 3407112000001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "灰河乡"
                            },
                            {
                                "code": 3407111020001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "老洲镇"
                            },
                            {
                                "code": 3407110010001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "桥南办事处街道"
                            },
                            {
                                "code": 3407111000001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "铜山镇"
                            },
                            {
                                "code": 3407111040001,
                                "father_code": 340711,
                                "level": "Town",
                                "name": "周潭镇"
                            }
                        ]
                    },
                    {
                        "code": 340705,
                        "father_code": 340700,
                        "level": "District",
                        "name": "铜官区",
                        "sub_districts": [
                            {
                                "code": 3407054160001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "滨江社区街道"
                            },
                            {
                                "code": 3407054150001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "朝阳社区街道"
                            },
                            {
                                "code": 3407050050001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "东郊办事处街道"
                            },
                            {
                                "code": 3407054070001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "官塘社区街道"
                            },
                            {
                                "code": 3407054130001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "金口岭社区街道"
                            },
                            {
                                "code": 3407054170001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "金山社区街道"
                            },
                            {
                                "code": 3407054120001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "露采社区街道"
                            },
                            {
                                "code": 3407054110001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "螺蛳山社区街道"
                            },
                            {
                                "code": 3407054190001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "立新社区街道"
                            },
                            {
                                "code": 3407054050001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "人民社区街道"
                            },
                            {
                                "code": 3407054180001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "狮子山社区街道"
                            },
                            {
                                "code": 3407054020001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "天井湖社区街道"
                            },
                            {
                                "code": 3407054040001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "五松社区街道"
                            },
                            {
                                "code": 3407050060001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "新城办事处街道"
                            },
                            {
                                "code": 3407054060001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "幸福社区街道"
                            },
                            {
                                "code": 3407051000001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "西湖镇"
                            },
                            {
                                "code": 3407054080001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "学苑社区街道"
                            },
                            {
                                "code": 3407054090001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "阳光社区街道"
                            },
                            {
                                "code": 3407054030001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "映湖社区街道"
                            },
                            {
                                "code": 3407054100001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "友好社区街道"
                            },
                            {
                                "code": 3407054140001,
                                "father_code": 340705,
                                "level": "Town",
                                "name": "鹞山社区街道"
                            }
                        ]
                    },
                    {
                        "code": 340706,
                        "father_code": 340700,
                        "level": "District",
                        "name": "义安区",
                        "sub_districts": [
                            {
                                "code": 3407061040001,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "东联镇"
                            },
                            {
                                "code": 340706200,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "老洲乡"
                            },
                            {
                                "code": 340706101,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "顺安镇"
                            },
                            {
                                "code": 340706103,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "天门镇"
                            },
                            {
                                "code": 340706100,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "五松镇"
                            },
                            {
                                "code": 340706203,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "胥坝乡"
                            },
                            {
                                "code": 3407061050001,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "西联镇"
                            },
                            {
                                "code": 3407060010001,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "新桥街道"
                            },
                            {
                                "code": 340706102,
                                "father_code": 340706,
                                "level": "Town",
                                "name": "钟鸣镇"
                            }
                        ]
                    },
                    {
                        "code": 340722,
                        "father_code": 340700,
                        "level": "District",
                        "name": "枞阳县",
                        "sub_districts": [
                            {
                                "code": 3407221160001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "白柳镇"
                            },
                            {
                                "code": 340722205,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "白梅乡"
                            },
                            {
                                "code": 340722111,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "浮山镇"
                            },
                            {
                                "code": 3407221130001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "官埠桥镇"
                            },
                            {
                                "code": 340722106,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "横埠镇"
                            },
                            {
                                "code": 3407221120001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "会宫镇"
                            },
                            {
                                "code": 3407221150001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "金社镇"
                            },
                            {
                                "code": 3407221190001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "欧山镇"
                            },
                            {
                                "code": 340722109,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "麒麟镇"
                            },
                            {
                                "code": 3407221140001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "钱铺镇"
                            },
                            {
                                "code": 340722108,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "钱桥镇"
                            },
                            {
                                "code": 3407221200000,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "汤沟镇"
                            },
                            {
                                "code": 340722107,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "项铺镇"
                            },
                            {
                                "code": 340722110,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "义津镇"
                            },
                            {
                                "code": 3407221170001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "雨坛镇"
                            },
                            {
                                "code": 3407224000001,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "枞阳经济开发区"
                            },
                            {
                                "code": 3407221180000,
                                "father_code": 340722,
                                "level": "Town",
                                "name": "枞阳镇"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 340200,
                "father_code": 34,
                "level": "City",
                "name": "芜湖市",
                "sub_districts": [
                    {
                        "code": 3402120000001,
                        "father_code": 340200,
                        "level": "District",
                        "name": "繁昌区",
                        "sub_districts": [
                            {
                                "code": 3402124010001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "安徽繁昌工业园区"
                            },
                            {
                                "code": 3402121010001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "荻港镇"
                            },
                            {
                                "code": 3402121050001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "峨山镇"
                            },
                            {
                                "code": 3402121000001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "繁阳镇"
                            },
                            {
                                "code": 3402121030001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "平铺镇"
                            },
                            {
                                "code": 3402121020001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "孙村镇"
                            },
                            {
                                "code": 3402121040001,
                                "father_code": 3402120000001,
                                "level": "Town",
                                "name": "新港镇"
                            }
                        ]
                    },
                    {
                        "code": 340202,
                        "father_code": 340200,
                        "level": "District",
                        "name": "镜湖区",
                        "sub_districts": [
                            {
                                "code": 3402020200001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "大砻坊街道"
                            },
                            {
                                "code": 3402020120001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "方村街道"
                            },
                            {
                                "code": 3402020150001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "范罗山街道"
                            },
                            {
                                "code": 3402020210001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "荆山街道"
                            },
                            {
                                "code": 3402020190001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "天门山街道"
                            },
                            {
                                "code": 3402020180001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "汀棠街道"
                            },
                            {
                                "code": 3402020170001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "弋矶山街道"
                            },
                            {
                                "code": 3402020130001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "张家山街道"
                            },
                            {
                                "code": 3402020140001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "赭麓街道"
                            },
                            {
                                "code": 3402020160001,
                                "father_code": 340202,
                                "level": "Town",
                                "name": "赭山街道"
                            }
                        ]
                    },
                    {
                        "code": 340207,
                        "father_code": 340200,
                        "level": "District",
                        "name": "鸠江区",
                        "sub_districts": [
                            {
                                "code": 3402071040001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "白茆镇"
                            },
                            {
                                "code": 3402071020001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "二坝镇"
                            },
                            {
                                "code": 3402070030001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "官陡街道"
                            },
                            {
                                "code": 340207010,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "龙山街道"
                            },
                            {
                                "code": 3402070050001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "清水街道"
                            },
                            {
                                "code": 3402070010001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "四褐山街道"
                            },
                            {
                                "code": 3402071010001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "沈巷镇"
                            },
                            {
                                "code": 3402071030001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "汤沟镇"
                            },
                            {
                                "code": 340207009,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "万春街道"
                            },
                            {
                                "code": 3402070040001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "湾里街道"
                            },
                            {
                                "code": 3402070020001,
                                "father_code": 340207,
                                "level": "Town",
                                "name": "裕溪口街道"
                            }
                        ]
                    },
                    {
                        "code": 340223,
                        "father_code": 340200,
                        "level": "District",
                        "name": "南陵县",
                        "sub_districts": [
                            {
                                "code": 3402231050001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "工山镇"
                            },
                            {
                                "code": 3402231040001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "何湾镇"
                            },
                            {
                                "code": 3402231070001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "家发镇"
                            },
                            {
                                "code": 3402231000001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "籍山镇"
                            },
                            {
                                "code": 3402231030001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "三里镇"
                            },
                            {
                                "code": 3402231010001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "许镇镇"
                            },
                            {
                                "code": 3402231060001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "烟墩镇"
                            },
                            {
                                "code": 3402231020001,
                                "father_code": 340223,
                                "level": "Town",
                                "name": "弋江镇"
                            }
                        ]
                    },
                    {
                        "code": 3402810000001,
                        "father_code": 340200,
                        "level": "District",
                        "name": "无为市",
                        "sub_districts": [
                            {
                                "code": 3402811040001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "陡沟镇"
                            },
                            {
                                "code": 3402811140001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "福渡镇"
                            },
                            {
                                "code": 3402811180001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "高沟镇"
                            },
                            {
                                "code": 3402811160001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "赫店镇"
                            },
                            {
                                "code": 3402811170001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "红庙镇"
                            },
                            {
                                "code": 3402811190001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "鹤毛镇"
                            },
                            {
                                "code": 3402811220001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "洪巷镇"
                            },
                            {
                                "code": 3402811070001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "开城镇"
                            },
                            {
                                "code": 3402811210001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "昆山镇"
                            },
                            {
                                "code": 3402811100001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "刘渡镇"
                            },
                            {
                                "code": 3402811090001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "牛埠镇"
                            },
                            {
                                "code": 3402811120001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "泥汊镇"
                            },
                            {
                                "code": 3402811150001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "泉塘镇"
                            },
                            {
                                "code": 3402811050001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "石涧镇"
                            },
                            {
                                "code": 3402811200001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "十里墩镇"
                            },
                            {
                                "code": 3402811080001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "蜀山镇"
                            },
                            {
                                "code": 3402811000001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "无城镇"
                            },
                            {
                                "code": 3402811010001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "襄安镇"
                            },
                            {
                                "code": 3402811110001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "姚沟镇"
                            },
                            {
                                "code": 3402811060001,
                                "father_code": 3402810000001,
                                "level": "Town",
                                "name": "严桥镇"
                            }
                        ]
                    },
                    {
                        "code": 3402100000001,
                        "father_code": 340200,
                        "level": "District",
                        "name": "湾沚区",
                        "sub_districts": [
                            {
                                "code": 3402101030001,
                                "father_code": 3402100000001,
                                "level": "Town",
                                "name": "花桥镇"
                            },
                            {
                                "code": 3402101040001,
                                "father_code": 3402100000001,
                                "level": "Town",
                                "name": "红杨镇"
                            },
                            {
                                "code": 3402101020001,
                                "father_code": 3402100000001,
                                "level": "Town",
                                "name": "六郎镇"
                            },
                            {
                                "code": 3402101010001,
                                "father_code": 3402100000001,
                                "level": "Town",
                                "name": "陶辛镇"
                            },
                            {
                                "code": 3402101000001,
                                "father_code": 3402100000001,
                                "level": "Town",
                                "name": "湾沚镇"
                            }
                        ]
                    },
                    {
                        "code": 3402090000001,
                        "father_code": 340200,
                        "level": "District",
                        "name": "弋江区",
                        "sub_districts": [
                            {
                                "code": 3402090080001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "保定街道"
                            },
                            {
                                "code": 3402090050001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "白马街道"
                            },
                            {
                                "code": 3402091000001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "峨桥镇"
                            },
                            {
                                "code": 3402090100001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "高安街道"
                            },
                            {
                                "code": 3402090040001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "火龙街道"
                            },
                            {
                                "code": 3402090030001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "瀂港街道"
                            },
                            {
                                "code": 3402090090001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "龙湖街道"
                            },
                            {
                                "code": 3402090020001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "马塘街道"
                            },
                            {
                                "code": 3402090060001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "南瑞街道"
                            },
                            {
                                "code": 3402090070001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "三山街道"
                            },
                            {
                                "code": 3402090010001,
                                "father_code": 3402090000001,
                                "level": "Town",
                                "name": "中南街道"
                            }
                        ]
                    }
                ]
            },
            {
                "code": 341800,
                "father_code": 34,
                "level": "City",
                "name": "宣城市",
                "sub_districts": [
                    {
                        "code": 3418820000001,
                        "father_code": 341800,
                        "level": "District",
                        "name": "广德市",
                        "sub_districts": [
                            {
                                "code": 3418821010001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "柏垫镇"
                            },
                            {
                                "code": 3418820020001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "祠山街道"
                            },
                            {
                                "code": 3418822010001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "东亭乡"
                            },
                            {
                                "code": 3418822000001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "卢村乡"
                            },
                            {
                                "code": 3418821030001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "邱村镇"
                            },
                            {
                                "code": 3418822020001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "四合乡"
                            },
                            {
                                "code": 3418821020001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "誓节镇"
                            },
                            {
                                "code": 3418820030001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "升平街道"
                            },
                            {
                                "code": 3418820010001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "桐汭街道"
                            },
                            {
                                "code": 3418821000001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "桃州镇"
                            },
                            {
                                "code": 3418821040001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "新杭镇"
                            },
                            {
                                "code": 3418821050001,
                                "father_code": 3418820000001,
                                "level": "Town",
                                "name": "杨滩镇"
                            }
                        ]
                    },
                    {
                        "code": 341825,
                        "father_code": 341800,
                        "level": "District",
                        "name": "旌德县",
                        "sub_districts": [
                            {
                                "code": 341825104,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "白地镇"
                            },
                            {
                                "code": 3418251080001,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "版书镇"
                            },
                            {
                                "code": 341825101,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "蔡家桥镇"
                            },
                            {
                                "code": 341825100,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "旌阳镇"
                            },
                            {
                                "code": 341825103,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "庙首镇"
                            },
                            {
                                "code": 3418251070001,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "孙村镇"
                            },
                            {
                                "code": 341825102,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "三溪镇"
                            },
                            {
                                "code": 3418251060001,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "兴隆镇"
                            },
                            {
                                "code": 341825105,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "俞村镇"
                            },
                            {
                                "code": 3418251090001,
                                "father_code": 341825,
                                "level": "Town",
                                "name": "云乐镇"
                            }
                        ]
                    },
                    {
                        "code": 341823,
                        "father_code": 341800,
                        "level": "District",
                        "name": "泾县",
                        "sub_districts": [
                            {
                                "code": 341823105,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "蔡村镇"
                            },
                            {
                                "code": 341823201,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "昌桥乡"
                            },
                            {
                                "code": 341823108,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "丁家桥镇"
                            },
                            {
                                "code": 341823107,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "黄村镇"
                            },
                            {
                                "code": 341823100,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "泾川镇"
                            },
                            {
                                "code": 341823102,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "榔桥镇"
                            },
                            {
                                "code": 341823101,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "茂林镇"
                            },
                            {
                                "code": 341823104,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "琴溪镇"
                            },
                            {
                                "code": 341823103,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "桃花潭镇"
                            },
                            {
                                "code": 341823200,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "汀溪乡"
                            },
                            {
                                "code": 341823106,
                                "father_code": 341823,
                                "level": "Town",
                                "name": "云岭镇"
                            }
                        ]
                    },
                    {
                        "code": 341824,
                        "father_code": 341800,
                        "level": "District",
                        "name": "绩溪县",
                        "sub_districts": [
                            {
                                "code": 341824201,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "板桥头乡"
                            },
                            {
                                "code": 341824102,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "长安镇"
                            },
                            {
                                "code": 341824105,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "伏岭镇"
                            },
                            {
                                "code": 341824100,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "华阳镇"
                            },
                            {
                                "code": 341824202,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "家朋乡"
                            },
                            {
                                "code": 341824106,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "金沙镇"
                            },
                            {
                                "code": 341824203,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "荆州乡"
                            },
                            {
                                "code": 341824101,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "临溪镇"
                            },
                            {
                                "code": 341824103,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "上庄镇"
                            },
                            {
                                "code": 341824104,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "扬溪镇"
                            },
                            {
                                "code": 341824107,
                                "father_code": 341824,
                                "level": "Town",
                                "name": "瀛洲镇"
                            }
                        ]
                    },
                    {
                        "code": 341821,
                        "father_code": 341800,
                        "level": "District",
                        "name": "郎溪县",
                        "sub_districts": [
                            {
                                "code": 341821107,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "毕桥镇"
                            },
                            {
                                "code": 341821108,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "飞鲤镇"
                            },
                            {
                                "code": 341821100,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "建平镇"
                            },
                            {
                                "code": 3418211090001,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "凌笪镇"
                            },
                            {
                                "code": 3418214000001,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "郎溪经济开发区"
                            },
                            {
                                "code": 341821105,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "梅渚镇"
                            },
                            {
                                "code": 341821101,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "十字镇"
                            },
                            {
                                "code": 341821103,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "涛城镇"
                            },
                            {
                                "code": 341821102,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "新发镇"
                            },
                            {
                                "code": 3418211100001,
                                "father_code": 341821,
                                "level": "Town",
                                "name": "姚村镇"
                            }
                        ]
                    },
                    {
                        "code": 341881,
                        "father_code": 341800,
                        "level": "District",
                        "name": "宁国市",
                        "sub_districts": [
                            {
                                "code": 341881204,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "方塘乡"
                            },
                            {
                                "code": 341881100,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "港口镇"
                            },
                            {
                                "code": 341881003,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "河沥溪街道"
                            },
                            {
                                "code": 3418811060001,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "胡乐镇"
                            },
                            {
                                "code": 3418811050001,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "甲路镇"
                            },
                            {
                                "code": 341881101,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "梅林镇"
                            },
                            {
                                "code": 341881103,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "宁墩镇"
                            },
                            {
                                "code": 341881201,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "南极乡"
                            },
                            {
                                "code": 341881002,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "南山街道"
                            },
                            {
                                "code": 3418812030001,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "青龙乡"
                            },
                            {
                                "code": 341881202,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "万家乡"
                            },
                            {
                                "code": 341881004,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "汪溪街道"
                            },
                            {
                                "code": 341881001,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "西津街道"
                            },
                            {
                                "code": 341881104,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "仙霞镇"
                            },
                            {
                                "code": 3418811070001,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "霞西镇"
                            },
                            {
                                "code": 341881200,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "云梯畲族乡"
                            },
                            {
                                "code": 341881005,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "竹峰街道"
                            },
                            {
                                "code": 341881102,
                                "father_code": 341881,
                                "level": "Town",
                                "name": "中溪镇"
                            }
                        ]
                    },
                    {
                        "code": 341802,
                        "father_code": 341800,
                        "level": "District",
                        "name": "宣州区",
                        "sub_districts": [
                            {
                                "code": 341802003,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "鳌峰街道"
                            },
                            {
                                "code": 341802002,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "澄江街道"
                            },
                            {
                                "code": 3418022059003,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "飞彩街道"
                            },
                            {
                                "code": 3418021030001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "古泉镇"
                            },
                            {
                                "code": 3418022040001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "黄渡乡"
                            },
                            {
                                "code": 3418021040001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "洪林镇"
                            },
                            {
                                "code": 3418021050001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "寒亭镇"
                            },
                            {
                                "code": 341802010,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "金坝街道"
                            },
                            {
                                "code": 341802004,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "济川街道"
                            },
                            {
                                "code": 341802005,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "敬亭山街道"
                            },
                            {
                                "code": 3418021010001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "狸桥镇"
                            },
                            {
                                "code": 3418021070001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "孙埠镇"
                            },
                            {
                                "code": 3418021020001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "沈村镇"
                            },
                            {
                                "code": 3418021100001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "水东镇"
                            },
                            {
                                "code": 3418020060001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "双桥街道"
                            },
                            {
                                "code": 3418021000001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "水阳镇"
                            },
                            {
                                "code": 3418022069003,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "天湖街道"
                            },
                            {
                                "code": 3418021060001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "文昌镇"
                            },
                            {
                                "code": 3418022020001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "五星乡"
                            },
                            {
                                "code": 3418021130001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "溪口镇"
                            },
                            {
                                "code": 341802001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "西林街道"
                            },
                            {
                                "code": 3418021110001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "新田镇"
                            },
                            {
                                "code": 3418020090001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "向阳街道"
                            },
                            {
                                "code": 3418021090001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "杨柳镇"
                            },
                            {
                                "code": 3418022010001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "养贤乡"
                            },
                            {
                                "code": 3418022000001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "朱桥乡"
                            },
                            {
                                "code": 3418021120001,
                                "father_code": 341802,
                                "level": "Town",
                                "name": "周王镇"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

const changeProvinceListToCascader = (list) => {
    return list.map(info => {
        const obj = {
            id: info.code,
            value: info.name,
            label: info.name,
        };
        if(Array.isArray(info.sub_districts) && info.sub_districts.length !== 0) {
            obj.children = changeProvinceListToCascader(info.sub_districts);
        }
        return obj;
    })
}

const result = changeProvinceListToCascader(list);
console.log(result);