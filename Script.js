window.addEventListener('load', () => {



    // 顶部按钮的样式
    function mainTopBtn() {

        const titleH5 = document.querySelectorAll('.title-h5'); //获取顶部的h5标签
        const mainPage = document.querySelectorAll('.mainPage');//获取页面


        // 顶部所有h5标签的点击事件
        for (let i = 0; i < titleH5.length; i++) {

            titleH5[i].addEventListener('click', function () {

                // if判断他是否已经被点击，被点击不能再次点击
                if (this.className == 'title-h5') {
                    // 获取顶部h5标签的样式
                    let tempClass = this.className;

                    // 排他思想
                    for (let i = 0; i < titleH5.length; i++) {
                        titleH5[i].className = `${tempClass}`;
                        mainPage[i].style.display = 'none';
                    }

                    // 按钮变色
                    this.className = `${tempClass} title-h5-active`;
                    // 显示页面
                    mainPage[i].style.display = 'block';

                } else {
                    return;
                }

            })

        }

    }
    mainTopBtn();



    // -----------------------------------------------------



    // 计划页面
    function plan() {

        const planName = document.querySelector('#planName');               //获取名字文本框
        const annColorButton = document.querySelector('#annColorButton');   //获取添加颜色的按钮
        const colorScreen = document.querySelector('#colorScreen');         //获取颜色界面的ul
        const dueDate = document.querySelector('#dueDate');                 //获取日期栏
        const dayBtn = document.querySelector('#dayBtn').children;          //获取day按钮
        const weekBtn = document.querySelector('#weekBtn').children;        //获取 week 按钮
        const remindBtn = document.querySelector('#remindBtn');             //获取提醒事项按钮
        const remindTextarea = document.querySelector('#remindTextarea');   //获取提醒事项输入框
        const whichDayInput = document.querySelector('#whichDayInput');     //获取从哪天开始的事件输入框
        const dailyGoalsBtn = document.querySelector('#male');              //获取每日目标的按钮
        const startTime = document.querySelector('#startTime');             //获取开始的时间
        const finishTime = document.querySelector('#finishTime');           //获取完成的时间





        // 侧边栏
        function leftHurdle() {
            const leftUlBtn = document.querySelector('.plan-left').children[0].children;    //获取左栏的按钮
            const planJsUse = document.querySelectorAll('.plan-js-use');                    //获取每个页面

            // 给每个侧边的li绑定点击事件
            for (let i = 0; i < leftUlBtn.length; i++) {
                leftUlBtn[i].addEventListener('click', function () {

                    // 排他思想
                    for (let i = 0; i < leftUlBtn.length; i++) {
                        leftUlBtn[i].className = '';
                        planJsUse[i].style.display = 'none';
                    }

                    planJsUse[i].style.display = 'block';
                    // 给点击的按钮添加颜色
                    this.className = 'plan-left-ul-li-active';
                })
            }
        }
        leftHurdle();



        // 颜色面板
        function ColorPanel() {
            // 监听取色器的变化    选择颜色添加li
            annColorButton.addEventListener('change', function () {

                // 创建li元素并添加到页面
                function createLi() {
                    // 创建一个li元素
                    let li = document.createElement('li');
                    // 给新创建的li标签添加用户选择好的颜色
                    li.style.backgroundColor = annColorButton.value;

                    // 将设置好的li元素添加到页面上
                    colorScreen.appendChild(li);
                }
                createLi();



                // 获取颜色下的每个li元素
                let colorScreenList = colorScreen.children;

                // 遍历下面的每个li元素然后添加点击事件
                for (let i = 0; i < colorScreenList.length; i++) {


                    // 给每个li绑定点击事件
                    colorScreenList[i].addEventListener('click', function () {

                        // 排他思想
                        for (let j = 0; j < colorScreenList.length; j++) {
                            colorScreenList[j].className = '';
                        }

                        // 给选中的li添加类名
                        this.className = 'plus-li-active';
                    })
                }

            })
        }
        ColorPanel()




        // 给add页面下的week按钮 week
        function addWeekBtn() {
            // 遍历 week 按钮 给每个日期按钮绑定点击事件
            for (let i = 0; i < weekBtn.length; i++) {
                weekBtn[i].addEventListener('click', function () {

                    // 派他思想
                    for (let j = 0; j < weekBtn.length; j++) {
                        weekBtn[j].className = '';
                    }

                    // 给点击的按钮添加类名
                    this.className = 'plan-right-add-right-finish-btn01-li-active';
                    // 给对象添加按钮的索引
                    // planObj.CompleteNumber = i;
                    return i;
                })
            }
        }
        addWeekBtn();




        // add页面下的日期按钮 day
        function addBtnDay() {

            // 给每个day按钮添加点击事件
            for (let i = 0; i < dayBtn.length; i++) {
                dayBtn[i].addEventListener('click', function () {

                    // 判断是否点击过，如果点击过则取消点击
                    if (this.className) {
                        this.className = '';
                        // 删除对象里 取消星期的索引
                        // planObj.weekDay.splice(i, 1);
                    } else {
                        // 给点击的按钮添加点击事件
                        this.className = 'plan-right-add-right-finish-btn01-li-active';
                        // 给对象添加点击星期的索引
                        // planObj.weekDay.push(i + 1);
                        // 排序 数组
                        // planObj.weekDay.sort();
                    }
                    // 向外到处 包装好的日期数据
                    // return planObj.weekDay;
                })
            }
        }
        addBtnDay();



        // remind事件提醒输入框
        function remindEvent() {
            let flag = false;   //判断提醒输入按钮是否已经点击   false未点击  true已点击
            // 监听提醒事项按钮是否点击
            remindBtn.addEventListener('click', function () {
                if (!flag) {
                    // 点击按钮后显示信息接收框
                    // 提示输入框显示
                    remindTextarea.style.display = 'block';
                    flag = true;
                } else {
                    // 提示输入框隐藏
                    remindTextarea.style.display = 'none';
                    flag = false;
                }

            })
        }
        remindEvent();


        // 判断每日目标按钮是打开还是关闭      true 打开    false关闭
        let isDailyGoalsValue = false;
        //每日目标按钮
        function isDailyGoals() {
            // 监听每日目标按钮
            dailyGoalsBtn.addEventListener('click', function () {
                // 判断每日目标按钮是打开还是关闭
                if (isDailyGoalsValue) {
                    // 如果是打开的则变成关闭状态
                    isDailyGoalsValue = false;
                } else {
                    isDailyGoalsValue = true;
                }
                // 将状态添加到对象里
                // planObj.dailyGoals = isDailyGoals;

            })
        }
        isDailyGoals();





        // 获取用户计划名字
        function getPlanName() {
            let name;   //用来接收名字输入框的内容
            // 接收名字输入框内容
            name = planName.value;
            // 导出名字
            return name;
        }

        // 获取颜色面板 用户选择的颜色
        function getColorPanel() {
            // 获取颜色下的每个li元素
            let colorScreenList = colorScreen.children;
            // 遍历每个li元素
            for (let i = 0; i < colorScreenList.length; i++) {
                // 判断这个li是否被选择
                if (colorScreenList[i].className) {
                    // 是
                    return colorScreenList[i].style.backgroundColor;
                }

            }
        }

        // 获取截至日期栏的日期
        function getdueDate() {
            let date;       //用来接收获取日期栏内容
            date = dueDate.value;
            return date;
        }

        // 获取选择week按钮的下标
        function getWeekBtn() {
            // 遍历weekBtn
            for (let i = 0; i < weekBtn.length; i++) {
                // 判断weekBtn按钮是否被点击
                if (weekBtn[i].className) {
                    // 返回下标
                    return i;
                }
            }
        }

        // 获取选择day按钮的小标
        function getDayBtn(weekDay) {
            let arr = weekDay;    //定义一个数组用来存储遍历好的下标
            // 遍历dayBtn按钮
            for (let i = 0; i < dayBtn.length; i++) {
                if (dayBtn[i].className) {
                    // 如果选择则存储下标
                    arr.push(i + 1);
                } else {
                    //未选择 删除下标
                    arr.splice(i, 1);
                }
            }
            // 返回更新好的数据
            return arr;
        }

        // 获取提醒事项输入框内容
        function getRemindTextarea() {
            let str;        //用来接收提醒事项输入框内容
            str = remindTextarea.value;
            return str;
        }

        //获取从哪天开始时间输入框
        function getWhichDayInput() {
            let day;        //用来接收从哪天开始的时间输入框内容
            day = whichDayInput.value;
            return day;
        }

        // 获取开始的时间
        function getStartTime() {
            let StartTimeValue; //用来接收开始的时间
            StartTimeValue = startTime.value;
            return StartTimeValue;
        }

        //获取完成的时间
        function getFinishTime() {
            let finishTimeValue;    //用来接收完成的时间
            finishTimeValue = finishTime.value;
            return finishTimeValue;
        }





        //获取add页面用户配置的参数
        function getUserConfig() {

            //创建一个对象，用来接收要创建的计划的参数
            let planObj = {
                //创建一个对象，用来接收要创建的计划的参数
                planName: '',                       //任务名字
                bgColor: 'red',                     //背景颜色    默认红色
                dueDate: null,                      //截至日期
                CompleteNumber: 0,                  //什么时候完成计划  fixation:0    Every week:1    Every month:2
                weekDay: [],                        //储存星期 星期一:1 ~~~~ 星期天:7
                remind: null,                       //存储提醒的事件
                WhichDay: null,                     //存储从哪天开始 输入框 的时间
                dailyGoals: false,                  //存储是否打开了每日目标  默认值false   打开true   关闭false
                StartTime: null,                    //存储开始的时间
                finishTime: null,                   //存储结束的时间
            };


            // 给对象添加 任务名字
            planObj.planName = getPlanName();

            // 给对象添加 背景颜色
            planObj.bgColor = getColorPanel();

            // 给对象添加 截至日期
            planObj.dueDate = getdueDate();

            // 给对象添加 完成计划  week
            planObj.CompleteNumber = getWeekBtn();

            // 给对象添加 星期
            planObj.weekDay = getDayBtn(planObj.weekDay);

            // 给对象添加 提醒事件
            planObj.remind = getRemindTextarea();

            // 给对象添加 哪天开始 输入框 的时间
            planObj.WhichDay = getWhichDayInput();

            // 给对象添加 每日目标状态
            planObj.dailyGoals = isDailyGoalsValue;

            // 给对象添加开始的时间
            planObj.StartTime = getStartTime();

            // 给对象添加完成的时间
            planObj.finishTime = getFinishTime();



            // 向外导出对象
            return planObj;
        }


        // 计算时间和方块挪动的长度X
        function countTimeX(time) {
            let moveLight;      //移动的长度
            // 提取后两个字符串
            // time = time.slice(-2);
            // 转换为数值
            time = parseInt(time);

            moveLight = time;

            return moveLight;
        }

        // 计算时间和方块挪动的长度Y
        function countTimeY(time) {
            let moveLight;      //移动的长度
            // 提取前两个字符串
            // time = time.slice(0, 2);
            // 转换为数值
            time = parseInt(time);

            // 判断输入的时间是否有问题
            if (time >= 8 && time < 16) {
                // 计算挪动的总长度
                moveLight = (time - 7) * 40;
            } else {
                alert('时间超出最大限度!!!最大限度为8:00-18:00');
            }

            return moveLight;
        }

        // 计算时间和方块长度
        function countTimeWidth(starTime, finishTime) {
            let widthLight;      //方块的长度

            // 格式化时间
            function formTime(time) {
                // 提取后两个字符串
                // time = time.slice(-2);
                // 转换为数值
                time = parseInt(time);

                return time;
            }

            // 格式化时间
            starTime = formTime(starTime);
            // 格式化时间
            finishTime = formTime(finishTime);

            if (finishTime > starTime) {
                widthLight = (finishTime - starTime) * 3;
            } else if (finishTime < starTime) {
                widthLight = (starTime - finishTime) * 3;
            } else {
                widthLight = 180;
            }

            return widthLight;
        }

        // 计算开始时间和结束时间的时长
        function countStartOrFinish(startTime, finishTime) {
            // 获取小时
            let hour01 = startTime.slice(0, 2);
            let hour02 = finishTime.slice(0, 2);

            // 获取分钟数
            let minute01 = startTime.slice(-2);
            let minute02 = finishTime.slice(-2);

            // 两个小时差
            let hour = Math.abs(hour02 - hour01);
            // 分钟差
            let minute = Math.abs(minute01 - minute02);

            return `${hour == 0 ? '' : hour + 'h'} ${minute == 0 ? '' : minute + 'min'}`;
        }


        // 时间页面 弹出框 弹出 关闭 功能
        function clockPopUpBox() {
            const PopUpBox = document.querySelector('#PopUpBox');   //弹出框
            const clockCloseBtn = document.querySelector('#clockCloseBtn'); //弹出框取消按钮
            const learningBtn = document.querySelector('#learningBtn');     //learning按钮

            // 监听learning按钮
            learningBtn.addEventListener('click', function () {
                // 显示弹出框
                PopUpBox.style.display = 'block';
            })

            // 监听弹出框关闭按钮
            clockCloseBtn.addEventListener('click', function () {
                // 隐藏弹出框
                PopUpBox.style.display = 'none';
                // console.log(getUserConfig());
            })

        }

        clockPopUpBox();

        // 创建颜色面板的html模板
        function createColorPanelHtml(bgColor, planName, time) {

            let colorFatherDiv = document.createElement('div'); //创建一个最大的容器
            let colorDiv = document.createElement('div');   //创建一个颜色div、
            let planNameSpan = document.createElement('span');  //创建一个计划名字span
            let PlanTimeSpan = document.createElement('span');  //创建一个计划时间的span

            // 给最大容器添加类名
            colorFatherDiv.className = 'plan-right-record-bottom-tag-color-box';

            // 给颜色盒子添加类名和颜色
            colorDiv.className = 'plan-right-record-bottom-tag-color';
            colorDiv.style.backgroundColor = bgColor;

            // 给计划名字添加名字
            planNameSpan.innerHTML = planName;

            // 给计划时间添加时间
            PlanTimeSpan.innerHTML = `${time}`;

            // 给最大的容器添加颜色框、plan名和计划时间
            colorFatherDiv.appendChild(colorDiv);
            colorFatherDiv.appendChild(planNameSpan);
            colorFatherDiv.appendChild(PlanTimeSpan);

            return colorFatherDiv;
        }


        // 交互功能---给plan表添加内容
        function planAddContent() {

            const planMoveBox = document.querySelector('#planMoveBox');     //获取计划表移动的盒子的父级
            const planColorPanelSee = document.querySelector('#planColorPanelSee');    //获取plan页面的record页面的plan颜色ul


            document.querySelector('#addBtn').addEventListener('click', function () {

                const obj = getUserConfig();  //用来接收用户配置好的对象
                let moveDiv = document.createElement('div');    //创建一个div
                // 给创建的div类名
                moveDiv.className = 'move';
                // 给创建的div写入属性
                moveDiv.style.width = `${countTimeWidth(obj.StartTime.slice(-2), obj.finishTime.slice(-2))}px`
                moveDiv.style.backgroundColor = obj.bgColor;
                moveDiv.style.transform = `translate(${countTimeX(obj.StartTime.slice(-2))}px, ${countTimeY(obj.StartTime.slice(0, 2))}px)`;

                // 向计划列表添加写好的盒子
                planMoveBox.appendChild(moveDiv);



                // --------------------------------------------


                // 下面 显示颜色计划面板
                let li = document.createElement('li');  //创建一个li元素

                // 接受 创建颜色面板的html模板 创建好的模板
                let colorFatherDiv = createColorPanelHtml(obj.bgColor, obj.planName, countStartOrFinish(obj.StartTime, obj.finishTime));


                // 给li添加最大的容器
                li.appendChild(colorFatherDiv);
                // 给ul添加li
                planColorPanelSee.appendChild(li);

                alert('添加成功');

            })
        }
        planAddContent();


        //交互功能 ----给record表添加内容
        function recordAddContent() {
            const inputs = document.querySelectorAll('.clock-input-js');      // 获取input
            const star = document.querySelector('#star-btn');                 //获取开始按钮
            const recordMoveBox = document.querySelector('#recordMoveBox');     //获取计划表移动的盒子的父级
            const recordColorPanelSee = document.querySelector('#recordColorPanelSee');    //获取plan页面的record页面的record颜色ul
            




            star.addEventListener('click', function () {

                // 获取当前的小时数
                let nowTime = new Date();
                nowTime = nowTime.getHours();

                // 小时
                let hour = inputs[0].value + inputs[1].value;
                hour = hour.slice(0, 1) == 0 ? hour.slice(1) : hour;
                // 分钟
                let min = inputs[2].value + inputs[3].value;
                min = min.slice(0, 1) == 0 ? min.slice(1) : min;

                const obj = getUserConfig();  //用来接收用户配置好的对象
                let moveDiv = document.createElement('div');    //创建一个div
                // 给创建的div类名
                moveDiv.className = 'move';
                // 给创建的div写入属性
                moveDiv.style.width = `${countTimeWidth(0, min)}px`
                moveDiv.style.backgroundColor = obj.bgColor;
                moveDiv.style.transform = `translate(${countTimeX(min)}px, ${countTimeY(nowTime)}px)`;

                // 向计划列表添加写好的盒子
                recordMoveBox.appendChild(moveDiv);





                // --------------------------------------------



                // 下面 显示颜色计划面板
                let li = document.createElement('li');  //创建一个li元素

                // 接受 创建颜色面板的html模板 创建好的模板
                let colorFatherDiv = createColorPanelHtml(obj.bgColor, obj.planName, `${hour}h${min}min`);


                // 给li添加最大的容器
                li.appendChild(colorFatherDiv);
                // 给ul添加li
                recordColorPanelSee.appendChild(li);




            })
        }
        recordAddContent();





    }
    plan();










    // -----------------------------------------------------



    // 时间页面 倒计时功能
    function timeClock() {


        const inputs = document.querySelectorAll('.clock-input-js');      // 获取input
        const star = document.querySelector('#star-btn');       //获取开始按钮
        let hourState = false;  //判断小时 是否 存在
        let minuteState = false;  //判断分钟 是否 存在
        let flag = false;   //判断定时器 是否 打开  节流阀    打开true 关闭false



        // 判断是否写入时间
        function isTime(value01, value02) {
            if (value01 > 0 || value02 > 0) {
                return true;
            } else {
                return false;
            }
        }

        // 判断是否都有时间
        function isTimeAll(value01, value02) {
            if (value01 == true) {
                return true;
            } else if (value02 == true) {
                return true;
            } else {
                return false
            }
        }

        // 判断时间输入是否合法
        function isTimeNumber(inputs) {
            // 合法为true
            let isTimeInvalid = false;

            if (inputs[0].value <= 100) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[1].value <= 9) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[2].value <= 6) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (inputs[3].value <= 9) {
                isTimeInvalid = true;
            } else {
                return false;
            }

            if (isTimeInvalid) {
                return true;
            }

        }

        // 判断时间是否为2位数
        function isDouble(value) {
            if (value.length == 2) {
                return value
            } else {
                return `0${value}`;
            }
        }

        // 获取倒计时要多少分钟
        function duration(hour01, hour02, minute01, minute02, second01, second02) {
            // 小时
            let hour = parseInt(hour01) * 10 + parseInt(hour02);
            // 分钟
            let minute = parseInt(minute01) * 10 + parseInt(minute02) + hour * 60;
            // 秒
            let second = parseInt(second01) * 10 + parseInt(second02) + minute * 60;

            return second;
        }



        // 给每个输入框绑定改变事件，防止输入框没有内容
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', function () {
                if (this.value == '') {
                    this.value = 0;
                }
            })
        }


        // 开始按钮点击事件
        star.addEventListener('click', () => {

            // 判断用户是否输入小时或者分钟
            hourState = isTime(inputs[0].value, inputs[1].value);
            minuteState = isTime(inputs[2].value, inputs[3].value);
            // 判断输入是否合法
            let isTimeInvalid = isTimeNumber(inputs);
            // 判断是否都有输入时间
            let TimeAll = isTimeAll(hourState, minuteState);
            // 时间
            let hour01 = parseInt(inputs[0].value),
                hour02 = parseInt(inputs[1].value),
                minute01 = parseInt(inputs[2].value),
                minute02 = parseInt(inputs[3].value),
                second01 = parseInt(inputs[4].value),
                second02 = parseInt(inputs[5].value);

            // 持续时间
            let durationTime = duration(hour01, hour02, minute01, minute02, second01, second02);





            // 如果有时间则开启定时器
            if (TimeAll && isTimeInvalid) {

                // 判断是否已经存在定时器
                if (!flag) {
                    let timer = setInterval(() => {
                        // 持续时间减小
                        durationTime--;
                        // 节流阀 true 定时器正在开启
                        flag = true;

                        // 倒数计算时间算法
                        let hour = Math.floor(durationTime / (60 * 60));
                        let minute = Math.floor(durationTime / 60) - (hour * 60);
                        let second = Math.floor(durationTime) - (hour * 60 * 60) - (minute * 60);


                        // 将时间插入input框  isDouble函数用来判断是否为两位数，如果不是则在前面添加0
                        inputs[0].value = isDouble(hour.toString()).slice(0, 1);
                        inputs[1].value = isDouble(hour.toString()).slice(1, 2);
                        inputs[2].value = isDouble(minute.toString()).slice(0, 1);
                        inputs[3].value = isDouble(minute.toString()).slice(1, 2);
                        inputs[4].value = isDouble(second.toString()).slice(0, 1);
                        inputs[5].value = isDouble(second.toString()).slice(1, 2);


                        // console.log(durationTime);
                        // 倒计时结束清除定时器
                        if (durationTime == 0) {
                            flag = false
                            clearInterval(timer);
                        }

                    }, 1000);
                }

            } else {
                alert('输入的时间不合法');
                inputs[0].value = 0;
                inputs[1].value = 0;
                inputs[2].value = 0;
                inputs[3].value = 0;
                inputs[4].value = 0;
                inputs[5].value = 0;
            }


        })
    }
    timeClock();








    // -----------------------------------------------------



    // Tool页面
    function toolPage() {

        // tool 页面 字典和 音乐切换
        function toolPageFunction() {
            const toolLeftBtn = document.querySelector('.tool-left').children[0].children;      // 工具 左区块 按钮
            const toolPage = document.querySelectorAll('.tool-page');


            // 遍历 左区块 按钮
            for (let i = 0; i < toolLeftBtn.length; i++) {
                // 给 左区块 按钮 依次 绑定点击事件
                toolLeftBtn[i].addEventListener('click', function () {

                    // 排他思想
                    for (let i = 0; i < toolLeftBtn.length; i++) {
                        toolLeftBtn[i].className = '';
                        toolPage[i].style.display = 'none';
                    }

                    // 给左区块添加类名
                    this.className = 'tool-left-ul-li-active';
                    toolPage[i].style.display = 'block';
                })
            }
        }
        toolPageFunction();


        // music页面的标题按钮 music子页面刷新
        function musicTitleBtnFunction() {
            const toolTitleBtn = document.querySelector('.tool-music-box-title').children[0].children;  //获取音乐界面的标题按钮
            const toolMusicPage = document.querySelectorAll('.tool-music-page')     //获取音乐界面下的界面


            // 遍历标题按钮 给按钮添加绑定点击事件
            for (let i = 0; i < toolTitleBtn.length; i++) {

                toolTitleBtn[i].addEventListener('click', function () {

                    // 排他思想
                    for (let i = 0; i < toolTitleBtn.length; i++) {
                        toolTitleBtn[i].className = '';
                        toolMusicPage[i].style.display = 'none';
                    }


                    toolMusicPage[i].style.display = 'block';
                    this.className = 'tool-music-box-title-ul-li-active';
                })

            }
        }
        musicTitleBtnFunction();


        // 音乐播放程序
        function musicPlayerProgram() {
            const musicAudio = document.querySelector('#musicAudio');   //音乐播放器
            const playBtn = document.querySelector('#playButton');      //播放按钮
            const progress = document.querySelector('#progress');       //进度条
            const progressTime = document.querySelector('#progressTime');//正在进行的时间
            const finalTime = document.querySelector('#finalTime');     //音频总时长

            // 通过进度条来设置播放时间
            function setProgressControlTime() {
                // 监听进度条的改变
                progress.addEventListener('change', function () {
                    // 视频播放的时间 = 进度条的值 乘 视频的总长度 再除 100
                    musicAudio.currentTime = (progress.value * musicAudio.duration) / 100;
                })
            }
            setProgressControlTime();


            // 设置时间和进度条的数值
            function setProgressTimeATime() {

                // 检测音乐播放器的变换
                musicAudio.addEventListener('timeupdate', function () {

                    // 计算进度条的长度
                    // video.currentTime 返回媒体播放的时间 单位（秒）
                    // video.duration   返回媒体的总长度 单位（秒）
                    progress.value = (musicAudio.currentTime / musicAudio.duration) * 100;



                    // 获取正在播放的时间
                    function getProgressTime() {
                        // Math.floor()向下取整
                        // 获取分钟数
                        let mins = Math.floor(musicAudio.currentTime / 60);
                        //获取秒数
                        let secs = Math.floor(musicAudio.currentTime % 60);
                        // 如果秒速小于10 则补0
                        // 例如：1 => 01
                        if (mins < 10) {
                            mins = `0${mins} `;
                        }

                        if (secs < 10) {
                            secs = `0${secs} `;
                        }

                        // 正在播放的时间
                        progressTime.innerHTML = `${mins}:${secs} `;

                    }
                    getProgressTime();




                    // 获取播放的总时间
                    function getFinalTime() {
                        // 获取分钟数
                        let FMins = Math.floor(musicAudio.duration / 60);
                        //获取秒数
                        let FSecs = Math.floor(musicAudio.duration % 60);
                        if (FMins < 10) {
                            FMins = `0${FMins}`;
                        }
                        if (FSecs < 10) {
                            FSecs = `0${FSecs}`;
                        }
                        // 播放的总时间
                        finalTime.innerHTML = `${FMins}:${FSecs} `;
                    }
                    getFinalTime();


                })

            }
            setProgressTimeATime();


            // 视频播放/暂停
            function musicPlay() {


                // 播放按钮点击事件
                playBtn.addEventListener('click', function () {
                    // video.paused 视频是否暂停 true暂停中 false播放中
                    if (musicAudio.paused) {
                        // 播放视频
                        musicAudio.play();
                    } else {
                        // 暂停视频
                        musicAudio.pause();
                    }
                })

                // 更换 暂停图标 / 播放图标
                function updatePlayIcon() {
                    // video.paused 视频是否暂停 true暂停中 false播放中
                    if (musicAudio.paused) {
                        playBtn.className = 'iconfont icon-playcircle';
                    } else {
                        playBtn.className = 'iconfont icon-pause-circle';
                    }
                }

                // 音频播放 调用更新播放和暂停视频图标
                musicAudio.addEventListener('pause', updatePlayIcon);
                // 音频播放 调用更新播放和暂停视频图标
                musicAudio.addEventListener('play', updatePlayIcon);
            }
            musicPlay();
        }
        musicPlayerProgram();

        //字典页面 顶部 按钮
        function dictionaryTopButton() {
            const dictionaryTopBtn = document.querySelector('.tool-dictionary-top').children[1].children;   //获取字典顶部按钮
            const dictionaryOnPage = document.querySelectorAll('.tool-dictionary-on-page'); //获取字典页面下的子页面
            const dictionaryDefaultPage = document.querySelector('.tool-dictionary-default-page');
            let flag = [];   //控制是否已被点击 已被点击true  未被点击false



            // 遍历按钮 给每个日期按钮绑定点击事件
            for (let i = 0; i < dictionaryTopBtn.length; i++) {
                flag[i] = false;

                // 给按钮绑定点击事件
                dictionaryTopBtn[i].addEventListener('click', function () {
                    let temp = flag[i];  //临时变量 用来存储flag值

                    // 排他思想
                    for (let j = 0; j < dictionaryTopBtn.length; j++) {
                        // 给按钮解除类名
                        dictionaryTopBtn[j].className = '';
                        // 给字典页面子页面隐藏
                        dictionaryOnPage[j].style.display = 'none';
                        flag[j] = false;
                    }

                    if (!temp) {
                        // 没有点击过
                        this.className = 'tool-dictionary-top-ul-li-active';
                        // 字典子当前按钮的页面显示
                        dictionaryOnPage[i].style.display = 'block';
                        // 隐藏字典默认页面
                        dictionaryDefaultPage.style.display = 'none';
                        flag[i] = true;
                    } else {
                        // 已经点击了
                        this.className = '';
                        // 字典默认页面显示
                        dictionaryDefaultPage.style.display = 'block';
                        flag[i] = false;
                    }

                })
            }

        }
        dictionaryTopButton();

    }
    toolPage();


})