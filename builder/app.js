import { IRTree, IRSelect } from "../ir-style/index.js"

/* Builder */
// const createNavItem = (icon, label) => `<li class="main-navbar__item">
// <a href="#" class="main-navbar__link" id="a_side_rule_open" title="${label}">
//     <i class="ir-icon ${icon}"></i>
//     <span class="main-navbar__text text--center" id="sp_side_rule_open">${label}</span>
// </a>
// </li>`

// $("#app_nav").append( createNavItem("ir-icon--rule-open", "A") )
//     .find( "a" ).on("click", () => alert(2))

const navItem = [{
    name: "룰 열기",
    icon: "ir-icon--rule-open"
}, {
    name: "룰 테스트",
    icon: "ir-icon--rule-test"
}, {
    name: "룰 이관",
    icon: "ir-icon--rule-apply",
}, {
    name: "항목 관리",
    icon: "ir-icon--item-management",
}, {
    name: "부가 기능",
    icon: "ir-icon--features"
}, {
    name: "자원 관리",
    icon: "ir-icon--resource-management"
}, {
    name: "함수",
    icon: "ir-icon--function"
}, {
    name: "관리자 환경",
    icon: "ir-icon--preference-outline"
}]

const floatingMenu = {
    "룰 테스트": ["룰 테스트", "실행경로 열기", "호출 로그", "시나리오 전체 리스트"],
    "부가 기능": ["룰 비교", "SQL 도구"],
    "자원 관리": ["데이터 모델", "사용자 관리", "역할 관리"],
}

const itemControls = [
    {
        title: "최상위 폴더 추가", 
        icon: "ir-icon--primary ir-icon--folder-add"        
    }, 
    {
        title: "폴더 추가", 
        icon: "ir-icon--folder-add"        
    }, 
    {
        title: "폴더 이름 변경", 
        icon: "ir-icon--edit"        
    }, 
    {
        title: "폴더 권한 변경", 
        icon: "ir-icon--folder-edit"        
    }, 
    {
        title: "폴더 권한", 
        icon: "ir-icon--folder-auth-info"        
    }, 
    {
        title: "폴더 삭제", 
        icon: "ir-icon--delete"        
    },     
]

/* PF의 DOM UI 요소 생성 방식 */
const createNavItem = (icon, label) => 
$("<li/>").addClass("main-navbar__item").css("cursor", "pointer")        
.append( $("<a/>").addClass("main-navbar__link").attr( { title: label } )
.append( $("<i/>").addClass( ["ir-icon", icon ]) )
.append( $("<span/>").addClass( ["main-navbar__text", "text--center"] ).text(label) ))        

const createFloatingMenu = (text) => `<a href="#" class="main-navbar__depth-link">${text}</a>`

const createIconButton = (title, icon, style) => `<button type="button" class="main-header__folder-controls-button" style="${style}" title="${title}">
<i class="ir-icon ${icon}"></i>
</button>`

const createMenuItem = (text, icon) => `<li class="menu__item">
    <button type="button" class="menu__button">
        <i class="menu__icon ir-icon ${icon}"></i>
        <span>${text}</span>
    </button>
</li>`

navItem.forEach((val) => {

    if ( val.name in floatingMenu )
    {
        $("#app_nav").append( createNavItem(val.icon, val.name)
        .append($("<div/>").addClass("main-navbar__depth")
            .append($("<ul/>").addClass("main-navbar__depth-list")
                .append($("<li/>").addClass("main-navbar__depth-item"))
                    .append(floatingMenu[val.name].map((name) => createFloatingMenu(name))))));
    } 
    else 
    {
        $("#app_nav").append(createNavItem(val.icon, val.name));
    }
});

new IRSelect({
    contextElement: $("#header_select")[0]    
})

itemControls.forEach((item, id) => {    
    if (id === 0)    
        $("#menu_group").before(createIconButton(item.title, item.icon));
    else
        $("#menu_group").before(createIconButton(item.title, item.icon, "display: none"));
})

$("#menu_list").append(createMenuItem("폴더 찾기(모든 폴더)", "ir-icon--folder-search"));

const IS_VISIBLE = "is-visible"
const menu = $("#menu_group").find(".menu");    

$("#btn_biz_more").on("click", () => {
    
    if (menu.hasClass(IS_VISIBLE))
        menu.removeClass(IS_VISIBLE);
    else
        menu.addClass(IS_VISIBLE);
    
    menu.attr("tabIndex", -1)[0].focus();
});

menu.on("blur", (ev) => {              
    if (ev.relatedTarget?.id !== "btn_biz_more")
        menu.removeClass(IS_VISIBLE);
});

const selectText = ["룰 이름", "룰 코드", "룰 벌칭", "룰 설명", "룰 내용", "최종 변경자", "최종 이관자", "최초 생성자"];
const nameSelect = new IRSelect({
    contextElement: $("#main_name_select")[0],
})

selectText.forEach((ev, id) => {
    nameSelect.addItem(id + "", ev)        
})

nameSelect.value = "0"

const tree = new IRTree( {
    contextElement: $("#folder_tree")[0],    
    data: {
        id: 0,
        name: "",
    },
} );

const NODE_ICON_COLOR = 'var(--blue)';
const NODE_ICON_CLASS = "ir-icon--folder-fill";

Array.from({length: 10}, (_, id) => {    
    const node = tree.addChild(null, id+1, {
        id: id+1,
        name: id+1,
    });
    node.iconColor = NODE_ICON_COLOR;
    node.iconClass = NODE_ICON_CLASS;

    Array.from({length: 5}, (_, id2) => {    
        const node2 = tree.addChild(node, id2+1, {
            id: id2+11,
            name: id2+1,
        });        
        node2.iconColor = NODE_ICON_COLOR;
        node2.iconClass = NODE_ICON_CLASS; 
    })
})

const toggle = $("#toggle_input")

const toggleHandler = () => {
    if (toggle[0].checked)
    {
        $("#div_table_rulelist").css("display", "none");
        $("#div_card_rulelist").css("display", "flex");
    }
    else
    {
        $("#div_table_rulelist").css("display", "flex");
        $("#div_card_rulelist").css("display", "none");
    }
}

tree.onSelectNode = () => {
    $("#folder_controls_left").find("button").css("display", "flex");
}

tree.onDblClick = (node) => {
    $("#main_button_group_right").css("display", "flex");
    $("#rule_add_button").css("display", "flex");
    $("#titlebar_title").html(node.data.name);
    $("#div_empty_rulelist").css("display", "none");    
    toggleHandler();
}

toggle.on("change", () => {        
    if (tree.selected != null)
        toggleHandler();
})

const tableBody = $("#div_table_rulelist").find("tbody");

tableBody.on("click", (ev) => {        
    $("#tooltip").addClass(IS_VISIBLE).css({
        top: ev.pageY + 10,
        left: ev.pageX + 10,
    });
    tableBody.attr("tabIndex", -1)[0].focus();    
})

tableBody.on("blur", () => {    
    $("#tooltip").removeClass(IS_VISIBLE);
})