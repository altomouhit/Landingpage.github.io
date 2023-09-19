var url = "assets/js/json/",
	allmaillist = "";
const loader = document.querySelector("#elmLoader");
var getJSON = function(e, t) {
	var a = new XMLHttpRequest;
	a.open("GET", url + e, !0), a.responseType = "json", a.onload = function() {
		var e = a.status;
		200 === e ? (document.getElementById("elmLoader").innerHTML = "", t(null, a.response)) : t(e, a.response)
	}, a.send()
};

function loadMailData(e) {
	 Array.from(e).forEach(function(e, t) {
		var a = e.readed ? "" : "unread",
			l = e.starred ? "active" : "",
			c = e.counted ? "(" + e.counted + ")" : "";
		document.querySelector("#mail-list").innerHTML +=
		'<tr class="' + a + '">'+
		'<td class="">'+
			'<a href="javascript: void(0);"><span class="title-name">' + e.incidentNo +' </span>' + c + '</a>'+
		'</td>'+
		'<td>'+
			'<a href="javascript: void(0);"><span class="title-date">' + e.Date +' </span></a>'+
		'<td>'+
			'<a href="javascript: void(0);"><span class="title-callType">' + e.callType +' </span></a>'+
		'</td>'+
		'<td><a href="javascript: void(0);" class="subject">'+
			'<span class="subject-title">' + e.subCategory + '</span></a>'+
		'</td>'+
		'<td><a href="javascript: void(0);" class="subject"><span class="teaser">' + e.stationName + '</span></a></td>'+
		'<td class="col-mail col-mail">'+
			'<div class="date">' + e.incidentLocation + '</div>'+
		'</td>'+
	'</tr>',
        emailDetailShow(), emailDetailChange()
	})
}

function favouriteBtn() {
	Array.from(document.querySelectorAll(".favourite-btn")).forEach(function(e) {
		e.addEventListener("click", function() {
			e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active")
		})
	})
}

function emailDetailShow() {
	var a = document.getElementsByTagName("body")[0],
		t = (Array.from(document.querySelectorAll(".message-list a")).forEach(function(e) {
			e.addEventListener("click", function(t) {
				a.classList.add("email-detail-show"), Array.from(document.querySelectorAll(".message-list tr.unread")).forEach(function(e) {
					e.classList.contains("unread") && t.target.closest("tr").classList.remove("unread")
				})
			})
		}), Array.from(document.querySelectorAll(".close-btn-email")).forEach(function(e) {
			e.addEventListener("click", function() {
				a.classList.remove("email-detail-show")
			})
		}), !1),
		l = document.getElementsByClassName("email-menu-sidebar");
	Array.from(document.querySelectorAll(".email-menu-btn")).forEach(function(e) {
		e.addEventListener("click", function() {
			Array.from(l).forEach(function(e) {
				e.classList.add("menubar-show"), t = !0
			})
		})
	}), 
    favouriteBtn()
}


getJSON("mail-list.init.json", function(e, t) {
	null !== e ? console.log("Something went wrong: " + e) :
	 (allmaillist = t[0].primary, 
		loadMailData(allmaillist))
}), Array.from(document.querySelectorAll(".mail-list a")).forEach(function(l) {
	l.addEventListener("click", function() {
		var t, e, a = document.querySelector(".mail-list a.active");
		a && a.classList.remove("active"), l.classList.add("active"), l.querySelector(".mail-list-link").hasAttribute("data-type") ? (t = l.querySelector(".mail-list-link").innerHTML, e = allmaillist.filter(e => e.labeltype === t)) : (t = l.querySelector(".mail-list-link").innerHTML, document.getElementById("mail-list").innerHTML = "", e = "All" != t ? allmaillist.filter(e => e.tabtype === t) : allmaillist, document.getElementById("mail-filter-navlist").style.display = "All" != t && "Inbox" != t ? "none" : "block"), loadMailData(e), favouriteBtn()
	})
});

function removeItems() {
	document.getElementById("removeItemModal").addEventListener("show.bs.modal", function(e) {
		document.getElementById("delete-record").addEventListener("click", function() {
			Array.from(document.querySelectorAll(".message-list li")).forEach(function(e) {
				var t, a;
				e.classList.contains("active") && (t = e.querySelector(".form-check-input").value, a = t, allmaillist = allmaillist.filter(function(e) {
					return e.id != a
				}), e.remove())
			}), document.getElementById("btn-close").click(), document.getElementById("email-topbar-actions") && (document.getElementById("email-topbar-actions").style.display = "none"), checkall.indeterminate = !1, checkall.checked = !1
		})
	})
}

function removeSingleItem() {
	var a;
	document.querySelectorAll(".remove-mail").forEach(function(t) {
		t.addEventListener("click", function(e) {
			a = t.getAttribute("data-remove-id"), document.getElementById("delete-record").addEventListener("click", function() {
				var t;
				t = a, loadMailData(allmaillist = allmaillist.filter(function(e) {
					return e.id != t
				})), document.getElementById("close-btn-email").click()
			})
		})
	})
}

mailChatDetailElm = !1;

function emailDetailChange() {
	Array.from(document.querySelectorAll(".message-list tr")).forEach(function(c) {
		c.addEventListener("click", function() {
			var e = (document.querySelector(".remove-mail").setAttribute("data-remove-id", e), 
				c.querySelector(".title-name").innerHTML),
				a = (document.querySelector(".email-subject-title").innerHTML = e)
		})
	})
}
document.querySelectorAll(".email-chat-list a").forEach(function(l) {
	var e, t;
	l.classList.contains("active") && (document.getElementById("emailchat-detailElem").style.display = "block", e = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-name").innerHTML, t = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-image img").getAttribute("src"), document.querySelector(".email-chat-detail .profile-username").innerHTML = e, document.getElementById("users-conversation").querySelectorAll(".left .chat-avatar").forEach(function(e) {
		
	})), l.addEventListener("click", function(e) {
		document.getElementById("emailchat-detailElem").style.display = "block", mailChatDetailElm = !0;
		var t = document.querySelector(".email-chat-list a.active"),
			t = (t && t.classList.remove("active"), this.classList.add("active"), scrollToBottom("users-chat"), l.querySelector(".chatlist-user-name").innerHTML),
			a = l.querySelector(".chatlist-user-image img").getAttribute("src"),
			t = (document.querySelector(".email-chat-detail .profile-username").innerHTML = t, document.getElementById("users-conversation"));
		Array.from(t.querySelectorAll(".left .chat-avatar")).forEach(function(e) {
			a ? e.querySelector("img").setAttribute("src", a) : e.querySelector("img").setAttribute("src", dummyUserImage)
		})
	})
});

const triggerTabList = document.querySelectorAll("#mail-filter-navlist .nav-tabs button");

function resizeEvent() {
	var e;
	document.documentElement.clientWidth < 767 && ((e = document.querySelector(".email-chat-list a.active")) && e.classList.remove("active"))
}
triggerTabList.forEach(e => {
	const t = new bootstrap.Tab(e);
	e.addEventListener("click", e => {
		e.preventDefault();
		document.querySelector(".tab-content .tab-pane.show");
		t.show()
	})
}), resizeEvent(), window.onresize = resizeEvent;