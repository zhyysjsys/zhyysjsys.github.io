// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const topNavItems = document.querySelectorAll('.nav-item');
    const sideNav = document.getElementById('side-nav');
    const content = document.getElementById('content');

    const navData = {
        home: ['创作目的', '选择类别'],
        noodles: ['餐厅类型', '选择餐厅'],
        'japanese-korean': ['餐厅类型', '选择餐厅'],
        'fast-food': ['餐厅类型', '选择餐厅'],
        dumplings: ['餐厅类型', '选择餐厅'],
        banquet: ['餐厅类型', '选择餐厅']
    };

    topNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.getAttribute('data-section');
            updateSideNav(section);
        });
    });

    function updateSideNav(section) {
        sideNav.innerHTML = '';
        const sideNavItems = navData[section];
        sideNavItems.forEach(sideItem => {
            const div = document.createElement('div');
            div.className = 'side-nav-item';
            div.textContent = sideItem;
            div.addEventListener('click', () => updateContent(section, sideItem));
            sideNav.appendChild(div);
        });
        content.innerHTML = '<img class="img-active" src="https://img.51miz.com/Element/00/83/91/92/3fd6d0c5_E839192_c8bfd8a0.png"><h2>欢迎您！请选择一个项目以显示详细内容。</h2>';
    }

    function updateContent(section, sideItem) {
        if (section === 'home' && sideItem === '创作目的') {
            content.innerHTML = `
               
                <iframe src="lunbo.html" width="600" height="400"></iframe>
                <h2>创作目的</h2>
                <p>在SUIBE校园里，常常能见到这样的场景：午后的阳光透过树叶的缝隙，斑驳地洒在学生们匆匆赶往食堂的路上。然而，对于许多SUIBEers来说，这短暂的午餐时间却成了一种甜蜜的烦恼。他们面对着琳琅满目的菜肴，心中充满了纠结和犹豫。</p>
                <p>这既是一种对美食的渴望，也是一种对选择的恐惧。他们希望能够找到一种既符合自己口味又充满新意的食物，但往往因为选择太多而犹豫不决。这种纠结不仅让他们感到焦虑，也让他们在享受美食的旅程上充满挑战。</p>
                <p>因此，我们提供此页面，利用随机转盘帮助SUIBEers选择吃什么。（考虑方便性，仅距离学校1000m内）</p>
            `;
            startCarousel();
        } else if (section === 'home' && sideItem === '选择类别') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/choosetotal.html" target="_blank">点击这里进行选择</a>
            `;
        }else if (section === 'noodles' && sideItem === '选择餐厅') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/choosenoddlefinal.html" target="_blank">点击这里进行选择</a>
            `;
        }else if (section === 'japanese-korean' && sideItem === '选择餐厅') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/chooseJandSK.html" target="_blank">点击这里进行选择</a>
            `;
        }else if (section === 'fast-food' && sideItem === '选择餐厅') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/choosefastfood.html" target="_blank">点击这里进行选择</a>
            `;
        }else if (section === 'dumplings' && sideItem === '选择餐厅') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/choosedumplings.html" target="_blank">点击这里进行选择</a>
            `;
        }
        else if (section === 'dumplings' && sideItem === '选择餐厅') {
            content.innerHTML = `
                <h2>把选择交给命运吧！</h2>
                <a href="https://zhyysjsys.github.io/chooseeight.html" target="_blank">点击这里进行选择</a>
            `;
        } else if (section === 'noodles' && sideItem === '餐厅类型') {
            content.innerHTML = `
                <img class="image-link" src="https://img.zcool.cn/community/0138cb5bbd73f9a801213dea9b620d.jpg@1280w_1l_2o_100sh.jpg">
                <table style="width:100%" border=1 cellspacing=0>
                    <tr>
                        <td><b>店名</b></td>
                        <td><b>均价</b></td>
                        <td><b>地址</b></td>
                    </tr>
                    <tr>
                        <td>许记手工面</td>
                        <td>20元/人</td>
                        <td>文汇路242弄205号2楼</td>
                    </tr>
                    <tr>
                        <td>巷子面</td>
                        <td>22元/人</td>
                        <td>文汇路166号1002室</td>
                    </tr>
                    <tr>
                        <td>面香源</td>
                        <td>20元/人</td>
                        <td>文汇路338弄108号</td>
                    </tr>
                    <tr>
                        <td>子固路拌粉</td>
                        <td>27元/人</td>
                        <td>文汇路318号</td>
                    </tr>
                    <tr>
                        <td>阿牛家酸辣粉</td>
                        <td>21元/人</td>
                        <td>文汇路344号</td>
                    </tr>
                    <tr>
                        <td>三江源美食</td>
                        <td>23元/人</td>
                        <td>文汇路338弄118号</td>
                    </tr>
                </table>
            `;
        }else if (section === 'japanese-korean' && sideItem === '餐厅类型') {
            content.innerHTML = `
                <img class="image-link" src="https://img.zcool.cn/community/010320554362240000019ae917b326.jpg@1280w_1l_2o_100sh.jpg">
                <table style="width:100%" border=1 cellspacing=0>
                    <tr>
                        <td><b>店名</b></td>
                        <td><b>均价</b></td>
                        <td><b>地址</b></td>
                    </tr>
                <tr>
                    <td>麦兜饭宝</td>
                    <td>30元/人</td>
                    <td>文汇路166号1018室</td>
                </tr>
                <tr>
                    <td>山七屋日式料理</td>
                    <td>60元/人</td>
                    <td>文汇路166号1021室</td>
                </tr>
                <tr>
                    <td>李先生的首尔小馆</td>
                    <td>59元/人</td>
                    <td>文汇路242弄207号</td>
                </tr>
                <tr>
                    <td>文火屋</td>
                    <td>35元/人</td>
                    <td>文汇路338弄101号2室</td>
                </tr>
                <tr>
                    <td>the Frypan韩国炸鸡啤酒</td>
                    <td>29元/人</td>
                    <td>文汇路256号</td>
                </tr>
                <tr>
                    <td>浅奈日式咖喱蛋包饭</td>
                    <td>18元/人</td>
                    <td>文汇路258号3区</td>
                </tr>
                </table>
            `;
        } else if (section === 'fast-food' && sideItem === '餐厅类型') {
            content.innerHTML = `
                <img class="image-link" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.bjjoaGp-Y1M7vFKik-Ss4AHaE9?rs=1&pid=ImgDetMainelse ">
                <table style="width:100%" border=1 cellspacing=0>
                <tr>
                    <td><b>店名</b></td>
                    <td><b>均价</b></td>
                    <td><b>地址</b></td>
                    </tr>
                <tr>
                    <td>麦当劳</td>
                    <td>26元/人</td>
                    <td>文汇路218号2楼</td>
                </tr>
                <tr>
                    <td>S~SHAKE炙烤厚牛肉汉堡</td>
                    <td>29元/人</td>
                    <td>文汇路228号</td>
                </tr>
                <tr>
                    <td>塔斯汀中国汉堡</td>
                    <td>19元/人</td>
                    <td>文汇路148-150号</td>
                </tr>
                <tr>
                    <td>卡麦奇汉堡</td>
                    <td>16元/人</td>
                    <td>文汇路116号</td>
                </tr>
                </table>
            `;
        } else if (section === 'dumplings' && sideItem === '餐厅类型') {
            content.innerHTML = `
                <img class="image-link" src="https://pic.nximg.cn/file/20230323/25620456_132224428105_2.jpg">
                <table style="width:100%" border=1 cellspacing=0>
            <tr>
                <td><b>店名</b></td>
                <td><b>均价</b></td>
                <td><b>地址</b></td>
            </tr>
            <tr>
                <td>吉祥馄饨</td>
                <td>18元/人</td>
                <td>文汇路166弄7号</td>
            </tr>
            <tr>
                <td>袁记云饺</td>
                <td>14元/人</td>
                <td>文汇路352号</td>
            </tr>
            <tr>
                <td>老上海馄饨</td>
                <td>20元/人</td>
                <td>文汇路336号</td>
            </tr>
            <tr>
                <td>招财罐罐.馄饨鸡汤饭</td>
                <td>20元/人</td>
                <td>文汇路354号</td>
            </tr>
        </table>
            `;
        } else if (section === 'banquet' && sideItem === '餐厅类型') {
            content.innerHTML = `
                <img class="image-link" src="https://ts1.cn.mm.bing.net/th/id/R-C.3180cd3dab1a4b169dfef3313e4c8c3f?rik=smHWT0t4YOfTmA&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f50127%2f3618.jpg_wh860.jpg&ehk=471k4DabkhEX66Z5Pp2s4sIuWEMYKEJScA7J%2bZT7BOk%3d&risl=&pid=ImgRaw&r=0">
                <table style="width:100%" border=1 cellspacing=0>
                <tr>
                    <td><b>店名</b></td>
                    <td><b>均价</b></td>
                    <td><b>地址</b></td>
                </tr>
                <tr>
                    <td>东北一家人</td>
                    <td>54元/人</td>
                    <td>文汇路242弄201号206室</td>
                </tr>
                <tr>
                    <td>核桃炭火烤肉</td>
                    <td>78元/人</td>
                    <td>文汇路242弄201号204室</td>
                </tr>
                <tr>
                    <td>今牛潮汕牛肉火锅</td>
                    <td>57元/人</td>
                    <td>文汇路338弄105—1号</td>
                </tr>
                <tr>
                    <td>Lesvila花园餐厅</td>
                    <td>70元/人</td>
                    <td>文汇路142-146号</td>
                </tr>
                <tr>
                    <td>暖纪餐厅</td>
                    <td>44元/人</td>
                    <td>文汇路172号</td>
                </tr>
                <tr>
                    <td>肥猫烤鱼</td>
                    <td>57元/人</td>
                    <td>文汇路338弄2楼203室</td>
                </tr>
                <tr>
                    <td>北乡缘餐馆</td>
                    <td>51元/人</td>
                    <td>文汇路338弄2楼203室</td>
                </tr>
                <tr>
                    <td>阿康烧烤</td>
                    <td>67元/人</td>
                    <td>文汇路2弄204号</td>
                </tr>
                </table>
            `;}
        else{
            content.innerHTML = `<h2>${sideItem}的详细内容</h2><p>这里是${sideItem}的具体内容。</p>`;
        }
    }

    // 默认加载首页导航
    updateSideNav('home');
});
