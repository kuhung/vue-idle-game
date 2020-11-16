/**
 * 副本配置
 * @author kuhung@foxmail.com
 */

export const dungeonsConfig = {
  data() {
    return {
      dungeonsArr: [
        {
          battleTime: 2000,
          name: '星落湖',
          time: '20',
          id: '1',
          eventNum: '5',
          lv: 1,
          needDPS: '2',
          eventType: [{
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 20,
              ATK: 1,
            },
            trophy: {
              gold: 10,
              equip: [
                1, 0, 0, 0
              ],
            }
          }, {
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 20,
              ATK: 1,
            },
            trophy: {
              gold: 10,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 20,
              ATK: 1,
            },
            trophy: {
              gold: 10,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 20,
              ATK: 1,
            },
            trophy: {
              gold: 10,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '打手丘丘人',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 40,
              ATK: 2,
            },
            trophy: {
              gold: 20,
              equip: [
                0.25, 0.55, 0.15, 0.05
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '风起地',
          time: '20',
          needDPS: '10',
          id: '2',
          eventNum: '5',
          lv: 5,
          eventType: [{
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 60,
              ATK: 4,
            },
            trophy: {
              gold: 20,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '大伟丘',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 60,
              ATK: 4,
            },
            trophy: {
              gold: 20,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 60,
              ATK: 4,
            },
            trophy: {
              gold: 20,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '打手丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 60,
              ATK: 4,
            },
            trophy: {
              gold: 20,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘萨满',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 80,
              ATK: 8,
            },
            trophy: {
              gold: 50,
              equip: [
                0.2, 0.4, 0.15, 0.05
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '清泉镇',
          time: '20',
          needDPS: '70',
          id: '2',
          eventNum: '5',
          lv: 15,
          eventType: [{
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 225,
              ATK: 40,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 225,
              ATK: 40,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '射手丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 225,
              ATK: 40,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘萨满',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 225,
              ATK: 40,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '愚人众·雷萤术士',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 550,
              ATK: 100,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '达达乌帕谷',
          time: '20',
          needDPS: '20',
          id: '2',
          eventNum: '5',
          lv: 10,
          eventType: [{
            name: '丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 80,
              ATK: 6,
            },
            trophy: {
              gold: 40,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘萨满',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 80,
              ATK: 9,
            },
            trophy: {
              gold: 40,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '大伟丘',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 80,
              ATK: 10,
            },
            trophy: {
              gold: 40,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, {
            name: '冰霜骗骗花',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 80,
              ATK: 10,
            },
            trophy: {
              gold: 40,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '愚人众先遣队',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 200,
              ATK: 15,
            },
            trophy: {
              gold: 100,
              equip: [
                0.2, 0.4, 0.35, 0.05
              ],
            }
          }, ]
        }

        , 
        {
          battleTime: 2000,
          name: '风龙废墟',
          time: '20',
          needDPS: '100',
          id: '4',
          eventNum: '5',
          lv: 20,
          eventType: [{
            name: '野猪',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 400,
              ATK: 70,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '大伟丘',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 400,
              ATK: 70,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '木盾丘丘暴徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 400,
              ATK: 70,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '火斧丘丘暴徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 400,
              ATK: 70,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '北风的狼王',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 700,
              ATK: 130,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '风龙废墟',
          time: '20',
          needDPS: '200',
          id: '4',
          eventNum: '5',
          lv: 25,
          desc:'',
          eventType: [{
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 1000,
              ATK: 140,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '火斧丘丘暴徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 1000,
              ATK: 140,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '冰深渊法师',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 1000,
              ATK: 160,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '遗迹守卫',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 1100,
              ATK: 200,
            },
            trophy: {
              gold: 150,
              equip: [
                0.2, 0.45, 0.25, 0.10
              ],
            }
          }, {
            name: '风魔龙 特瓦林',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 1500,
              ATK: 200,
            },
            trophy: {
              gold: 300,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '石门',
          time: '20',
          needDPS: '250',
          id: '4',
          eventNum: '5',
          lv: 30,
          desc:'',
          eventType: [{
            name: '射手丘丘人',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3000,
              ATK: 150,
            },
            trophy: {
              gold: 170,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '史莱姆',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3000,
              ATK: 150,
            },
            trophy: {
              gold: 170,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '丘丘萨满',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3000,
              ATK: 175,
            },
            trophy: {
              gold: 180,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '愚人众·雷萤术士',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3000,
              ATK: 175,
            },
            trophy: {
              gold: 180,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '幼岩龙蜥',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 3000,
              ATK: 250,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '第二脊椎',
          time: '20',
          needDPS: '300',
          id: '4',
          eventNum: '5',
          lv: 35,
          desc:'',
          eventType: [{
            name: '龙头炮',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3500,
              ATK: 320,
            },
            trophy: {
              gold: 250,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '龙头炮',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3500,
              ATK: 320,
            },
            trophy: {
              gold: 250,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '激光龙头炮',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3500,
              ATK: 350,
            },
            trophy: {
              gold: 250,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '激光龙头炮',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 3500,
              ATK: 350,
            },
            trophy: {
              gold: 250,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '长脚的罗特斯',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 3500,
              ATK: 400,
            },
            trophy: {
              gold: 800,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '天帷禁地',
          time: '20',
          needDPS: '350',
          id: '4',
          eventNum: '5',
          lv: 40,
          desc:'',
          eventType: [{
            name: '疯狂的信徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4000,
              ATK: 250,
            },
            trophy: {
              gold: 300,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '疯狂的信徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4000,
              ATK: 250,
            },
            trophy: {
              gold: 300,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: 'GBL女教徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4000,
              ATK: 300,
            },
            trophy: {
              gold: 300,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: 'GBL女教徒',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4000,
              ATK: 300,
            },
            trophy: {
              gold: 300,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '审判者马塞尔',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 475,
            },
            trophy: {
              gold: 600,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '根特外围',
          time: '20',
          needDPS: '400',
          id: '4',
          eventNum: '5',
          lv: 45,
          desc:'',
          eventType: [{
            name: '卡勒特普通士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4000,
              ATK: 450,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特普通士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4100,
              ATK: 450,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特普通士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 450,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特普通士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 450,
            },
            trophy: {
              gold: 400,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '纵火犯本汀克',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 550,
            },
            trophy: {
              gold: 1000,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        
        , {
          battleTime: 2000,
          name: '根特东门',
          time: '20',
          needDPS: '400',
          id: '4',
          eventNum: '5',
          lv: 50,
          desc:'',
          eventType: [{
            name: '卡勒特纵火兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 500,
            },
            trophy: {
              gold: 450,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特纵火兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4600,
              ATK: 500,
            },
            trophy: {
              gold: 450,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特改造士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4700,
              ATK: 500,
            },
            trophy: {
              gold: 450,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特改造士兵',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 4800,
              ATK: 500,
            },
            trophy: {
              gold: 450,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '机动队长苏雷德',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 4500,
              ATK: 600,
            },
            trophy: {
              gold: 1200,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        
        , {
          battleTime: 2000,
          name: '根特南门',
          time: '20',
          needDPS: '600',
          id: '4',
          eventNum: '5',
          lv: 55,
          desc:'',
          eventType: [{
            name: '卡勒特强化先锋卫队',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 5500,
              ATK: 550,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特间谍',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 5600,
              ATK: 550,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特强化先锋卫队',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 5100,
              ATK: 700,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '卡勒特间谍',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 5200,
              ATK: 700,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: 'GT-9600',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 5500,
              ATK: 900,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '补给线阻断战',
          time: '20',
          needDPS: '1000',
          id: '4',
          eventNum: '5',
          lv: 60,
          desc:'',
          eventType: [{
            name: '西克特·帕菲斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 6000,
              ATK: 700,
            },
            trophy: {
              gold: 600,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '裴特舒·帕菲斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 6000,
              ATK: 800,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '机械臂捷克',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 6000,
              ATK: 900,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.1, 0.05, 0
              ],
            }
          }, {
            name: '夜战司令官巴比伦',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 5800,
              ATK: 1000,
            },
            trophy: {
              gold: 500,
              equip: [
                0.2, 0.5, 0.25, 0.05
              ],
            }
          }, {
            name: '机械师吉赛尔',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 6000,
              ATK: 2100,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '黑雾之源',
          time: '20',
          needDPS: '1500',
          id: '4',
          eventNum: '5',
          lv: 70,
          desc:'',
          eventType: [{
            name: '吞噬魔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 7000,
              ATK: 1400,
            },
            trophy: {
              gold: 900,
              equip: [
                0.2, 0.1, 0.15, 0.05
              ],
            }
          }, {
            name: '吞噬魔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 7000,
              ATK: 1410,
            },
            trophy: {
              gold: 900,
              equip: [
                0.2, 0.1, 0.15, 0.05
              ],
            }
          }, {
            name: '吞噬魔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 7000,
              ATK: 1420,
            },
            trophy: {
              gold: 900,
              equip: [
                0.2, 0.1, 0.15, 0.05
              ],
            }
          }, {
            name: '吞噬魔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 7000,
              ATK: 1500,
            },
            trophy: {
              gold: 900,
              equip: [
                0.2, 0.1, 0.15, 0.05
              ],
            }
          }, {
            name: '歼灭之内尔贝',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 8000,
              ATK: 2400,
            },
            trophy: {
              gold: 2200,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '震颤的大地',
          time: '20',
          needDPS: '2000',
          id: '4',
          eventNum: '5',
          lv: 80,
          desc:'既然无法回收安徒恩的能量， 那就只能先破坏安徒恩的关节部位， 才能确保大部队的总攻。',
          eventType: [{
            name: '湮灭之弗雷伊内斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 8000,
              ATK: 3000,
            },
            trophy: {
              gold: 1000,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '湮灭之弗雷伊内斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 8000,
              ATK: 3100,
            },
            trophy: {
              gold: 1000,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '湮灭之弗雷伊内斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 8000,
              ATK: 3200,
            },
            trophy: {
              gold: 1000,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '湮灭之弗雷伊内斯',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 8000,
              ATK: 3300,
            },
            trophy: {
              gold: 1000,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '毁灭之塔伊奥利',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 12000,
              ATK: 3500,
            },
            trophy: {
              gold: 2500,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '擎天之柱',
          time: '20',
          needDPS: '2500',
          id: '4',
          eventNum: '5',
          lv: 90,
          desc:'安徒恩似乎打算退回魔界， 决不能让他这么轻易地回去！ 这么多的杀戮这么多的罪孽， 只有死亡才能赎清他的罪恶。 一定要阻止他返回魔界！ 向他的腿部发起进攻， 阻止他前进！',
          eventType: [{
            name: '火焰之克瑞夫',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 9000,
              ATK: 4510,
            },
            trophy: {
              gold: 1200,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '守门将克拉特',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 9000,
              ATK: 4600,
            },
            trophy: {
              gold: 800,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '火焰之克瑞夫',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 9100,
              ATK: 4700,
            },
            trophy: {
              gold: 1200,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '守门将克拉特',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 9100,
              ATK: 4800,
            },
            trophy: {
              gold: 1200,
              equip: [
                0.2, 0.1, 0.15, 0.1
              ],
            }
          }, {
            name: '炽炎',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 15000,
              ATK: 6200,
            },
            trophy: {
              gold: 3000,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }

        , {
          battleTime: 2000,
          name: '黑色火山',
          time: '20',
          needDPS: '3000',
          id: '4',
          eventNum: '5',
          lv: 100,
          desc:'黑色火山， 安徒恩的心脏所在之处， 他最脆弱的地方， 但同时也可以说是最强大的地方。',
          eventType: [{
            name: '阿托尔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 6750,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.1, 0.10, 0.05
              ],
            }
          }, {
            name: '梅尔塔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7050,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.1, 0.10, 0.05
              ],
            }
          }, {
            name: '魔眼赛尔',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7150,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.1, 0.10, 0.05
              ],
            }
          }, {
            name: '恐怖邪念体',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7250,
            },
            trophy: {
              gold: 1500,
              equip: [
                0.2, 0.5, 0.25, 0.1
              ],
            }
          }, {
            name: '克雷斯',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 15000,
              ATK: 10000,
            },
            trophy: {
              gold: 4000,
              equip: [
                0.2, 0.3, 0.35, 0.15
              ],
            }
          }, ]
        }
        , {
          battleTime: 2000,
          name: '无尽挑战',
          time: '20',
          type:'endless',
          needDPS: '3000',
          id: '4',
          eventNum: '5',
          lv: 1,
          desc:'这里是无尽挑战，挑战将不会有装备掉落，试试你的极限吧',
          eventType: [{
            name: '无尽梦魇',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 6750,
            },
            trophy: {
              gold: 1500,
              equip: [
                0, 0, 0, 0
              ],
            }
          }, {
            name: '无尽梦魇',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7050,
            },
            trophy: {
              gold: 1500,
              equip: [
                0, 0, 0, 0
              ],
            }
          }, {
            name: '无尽梦魇',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7150,
            },
            trophy: {
              gold: 1500,
              equip: [
                0, 0, 0, 0
              ],
            }
          }, {
            name: '无尽梦魇',
            type: 'monster',
            eventType: 'battle',
            attribute: {
              HP: 10000,
              ATK: 7250,
            },
            trophy: {
              gold: 1500,
              equip: [
                0, 0, 0, 0
              ],
            }
          }, {
            name: '无尽梦魇(boss)',
            type: 'boss',
            eventType: 'battle',
            attribute: {
              HP: 15000,
              ATK: 10000,
            },
            trophy: {
              gold: 4000,
              equip: [
                0, 0, 0, 0
              ],
            }
          }, ]
        }
      ]
    }
  },
  methods: {}
};