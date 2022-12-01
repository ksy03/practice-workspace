const headerIconList = [
    {
        title: "메인으로",
        icon: "ir-icon--home"
    }, 
    {
        title: "사용자정보",
        icon: "ir-icon--user"
    }, 
    {
        title: "사용자관리",
        icon: "ir-icon--user-management"
    }, 
    {
        title: "환경설정",
        icon: "ir-icon--preference"
    }, 
    {
        title: "정보",
        icon: "ir-icon--information-circle"
    }, 
    {
        title: "로그아웃",
        icon: "ir-icon--logout"
    }, 
]

const navList = [
    {
        icon: "ir-icon--square-four",
        text: "유형관리",
    },
    {
        icon: "ir-icon--list-items",
        text: "표준항목관리",
    },
    {
        icon: "ir-icon--item-tree",
        text: "상품구조관리",
    },
    {
        icon: "ir-icon--relation-rule",
        text: "관계규칙관리",
    },
    {
        icon: "ir-icon--rule",
        text: "상품정보관리",
    },
    {
        icon: "ir-icon--pattern-data",
        text: "패턴데이터관리",
    },
    {
        icon: "ir-icon--item-apply",
        text: "이관관리",
    },
    {
        icon: "ir-icon--chart",
        text: "상품룰정보",
    },
    {
        icon: "ir-icon--history-query",
        text: "변경이력조회",
    },
    {
        icon: "ir-icon--upload-to-cloud",
        text: "데이터업로드",
    },
]

const IS_ACTIVE = "is-active";

const createHeaderIcon = (title, icon, defaultActiveItem, mouseClickHandler, mouseEnterHandler, mouseLeaveHandler) => 
    $("<button/>").addClass("icon-button icon-button--md").attr("title", title)
    .append($("<i/>").addClass(["ir-icon", "ir-icon--white", icon === defaultActiveItem ? `${icon}-fill ${IS_ACTIVE}` : `${icon}-outline`]))
    .attr("id", `header_${title}`)
    .on("click", mouseClickHandler)
    .on("mouseenter", mouseEnterHandler)
    .on("mouseleave", mouseLeaveHandler);

const createNavList = (icon, text, defaultActiveItem, mouseClickHandler) => 
    $("<li/>").addClass(["clothes-line-nav__item", text === defaultActiveItem ? IS_ACTIVE : ""])
    .append($("<button/>").addClass("clothes-line-nav__button")
    .append($("<div/>").addClass("clothes-line-nav__item-panel")
    .append($("<i/>").addClass(["clothes-line-nav__icon", "ir-icon ir-icon--lg", icon]))
    .append($("<span/>").addClass("clothes-line-nav__badge").css("visibility", "hidden")))
    .append($("<span/>").addClass("clothes-line-nav__title").text(text)))
    .on("click", mouseClickHandler);


headerIconList.forEach((item) => {
    $("#header_icon").append(createHeaderIcon(item.title, item.icon, headerIconList[0].icon
    , function() {        
        const icon = $(this).find("i");
        
        $("#header_icon i").removeClass(IS_ACTIVE);        
        
        $("#header_icon i").each((_, item) => {                        
            if ( icon[0] === item )
                item.className += ` ${IS_ACTIVE}`;
            else            
                item.className = item.className.replace("fill", "outline");            
        })        
    }, function () {            
        const icon = $(this).find("i");       

        if (icon.hasClass("is-active")) return;

        icon.removeClass(`${item.icon}-outline`);
        icon.addClass(`${item.icon}-fill`);                
    }, function() {
        const icon = $(this).find("i");

        if (icon.hasClass("is-active")) return;

        icon.removeClass(`${item.icon}-fill`);
        icon.addClass(`${item.icon}-outline`);   
    }));
})

const serverPartsButton = $("#server-parts").find("button");

serverPartsButton.on("click", function() 
{
    serverPartsButton.removeClass(IS_ACTIVE)    
    $(this).addClass(IS_ACTIVE);
    
    $("#clothes_line_nav_list").find("li").each(( _, item ) => {
        item.className = item.className.replace(/clothes-line-nav__item--color-\d/g, "");
    })    
    $("#clothes_line_nav_list").find("li").addClass(`clothes-line-nav__item--color-${$(this).index()+1}`)        
})

navList.forEach((item) => {
    $("#clothes_line_nav_list").append(createNavList(item.icon, item.text, navList[0].text
    , function() {        
        $("#clothes_line_nav_list").find("li").removeClass(IS_ACTIVE);
        $(this).addClass(IS_ACTIVE);
    }));
})
