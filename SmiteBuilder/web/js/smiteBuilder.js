function UrlLink(){this.i1=null;this.i2=null;this.i3=null;this.i4=null;this.i5=null;this.i6=null;this.g=null;this.l=null;this.setLink=function(){var e="http://www.smitebuilder.net/builder.jsp?"+"l="+$("#level").val();for(var t in this){if(t!="setLink"&&this[t]!=null){e+="&"+t+"="+this[t]}}$("#burl").val(e)}}function StatObj(){this.health=0;this.mana=0;this.speed=0;this.range=0;this.attack_sec=0;this.power_magical=0;this.power_physical=0;this.prot_magical=0;this.prot_physical=0;this.hp5=0;this.mp5=0;this.mag_lifesteal=0;this.mag_penetration=0;this.cooldown=0;this.focus=0;this.physical_lifesteal=0;this.physical_penetration=0;this.critical_chance=0;this.cost=0;this.sumStatObject=function(e){this.power_magical+=e.power_magical;this.mag_lifesteal+=e.mag_lifesteal;this.mag_penetration+=e.mag_penetration;this.mana+=e.mana;this.mp5+=e.mp5;this.cooldown+=e.cooldown;this.focus+=e.focus;this.power_physical+=e.power_physical;this.attack_sec+=e.attack_sec;this.physical_penetration+=e.physical_penetration;this.physical_lifesteal+=e.physical_lifesteal;this.critical_chance+=e.critical_chance;this.prot_magical+=e.prot_magical;this.prot_physical+=e.prot_physical;this.health+=e.health;this.hp5+=e.hp5;this.speed+=e.speed;if(e.cost){this.cost+=e.cost}if(e!=currentGod&&items){for(var t=0;t<slots.length;t++){var n=items[slots[t]];if(n&&n!=null){if(n.passive_modifier_1>0){this[n.passive_bonus_to_1]+=n.passive_modifier_1*this[n.passive_bonus_from_1]}if(n.passive_modifier_2>0){this[n.passive_bonus_to_2]+=n.passive_modifier_2*this[n.passive_bonus_from_2]}}}}}}function God(){this.name="";this.god_id=0;this.health_base=0;this.health=0;this.health_per=0;this.mana_base=0;this.mana=0;this.mana_per=0;this.speed_base=0;this.speed=0;this.speed_per=0;this.range_base=0;this.range=0;this.range_per=0;this.attack_sec_base=0;this.attack_sec=0;this.attack_sec_per=0;this.power_magical_base=0;this.power_magical=0;this.power_magical_per=0;this.power_physical_base=0;this.power_physical=0;this.power_physical_per=0;this.prot_magical_base=0;this.prot_magical=0;this.prot_magical_per=0;this.prot_physical_base=0;this.prot_physical=0;this.prot_physical_per=0;this.hp5_base=0;this.hp5=0;this.hp5_per=0;this.mp5_per=0;this.mp5=0;this.mp5_per=0;this.mag_lifesteal=0;this.mag_penetration=0;this.cooldown=0;this.focus=0;this.physical_lifesteal=0;this.physical_penetration=0;this.critical_chance=0;this.setGod=function(e){this.name=e.name;this.god_id=e.god_id;this.health_per=e.health_per;this.health_base=e.health_base;this.mana_per=e.mana_per;this.mana_base=e.mana_base;this.speed_base=e.speed_base;this.speed_per=e.speed_per;this.range_base=e.range_base;this.range_per=e.range_per;this.attack_sec_base=e.attack_sec_base;this.attack_sec_per=e.attack_sec_per;this.power_magical_base=e.power_magical_base;this.power_magical_per=e.power_magical_per;this.power_physical_base=e.power_physical_base;this.power_physical_per=e.power_physical_per;this.prot_magical_base=e.prot_magical_base;this.prot_magical_per=e.prot_magical_per;this.prot_physical_base=e.prot_physical_base;this.prot_physical_per=e.prot_physical_per;this.hp5_base=e.hp5_base;this.hp5_per=e.hp5_per;this.mp5_base=e.mp5_base;this.mp5_per=e.mp5_per};this.setLevel=function(e){this.health=this.health_base+e*this.health_per;this.mana=this.mana_base+e*this.mana_per;this.speed=this.speed_base+e*this.speed_per;this.range=this.range_base+e*this.range_per;this.attack_sec=this.attack_sec_base+e*this.attack_sec_per;this.power_magical=this.power_magical_base+e*this.power_magical_per;this.power_physical=this.power_physical_base+e*this.power_physical_per;this.prot_magical=this.prot_magical_base+e*this.prot_magical_per;this.prot_physical=this.prot_physical_base+e*this.prot_physical_per;this.hp5=this.hp5_base+e*this.hp5_per;this.mp5=this.mp5_base+e*this.mp5_per}}function itemObj(){this.health=0;this.mana=0;this.speed=0;this.range=0;this.attack_sec=0;this.attack_secP=0;this.power_magical=0;this.power_physical=0;this.prot_magical=0;this.prot_physical=0;this.hp5=0;this.mp5=0;this.mag_lifesteal=0;this.mag_penetration=0;this.cooldown=0;this.focus=0;this.physical_lifesteal=0;this.physical_penetration=0;this.critical_chance=0;this.speedP=0;this.mag_lifestealP=0;this.physical_lifestealP=0;this.mag_penetrationP=0;this.physical_penetrationP=0;this.critical_chanceP=0;this.cooldownP=0;this.cost=0}function calibrateAllStats(){statObj=new StatObj;statObj.sumStatObject(currentGod);var e=items.sumBonuses();statObj.sumStatObject(e);updatePageData()}function displayTT(e,t){var n=$(t).attr("rel");if(n&&n!=null){sendRequest("ajax/TooltipServlet?item="+n,catchItemTooltip);var r=parseInt($(".item-tooltip-tt").css("width"));var i=parseInt($(".item-tooltip-tt").css("height"));var s=e.pageX+r;var o=e.pageY+i;if(s>window.innerWidth&&o<window.innerHeight){$(".item-tooltip-tt").css({left:e.pageX-r,top:e.pageY+1,zIndex:99999}).stop().show(100)}else if(s<window.innerWidth&&o>window.innerHeight){$(".item-tooltip-tt").css({left:e.pageX+1,top:e.pageY-i,zIndex:99999}).stop().show(100)}else if(s>window.innerWidth&&o>window.innerHeight){$(".item-tooltip-tt").css({left:e.pageX-r,top:e.pageY-i,zIndex:99999}).stop().show(100)}else{$(".item-tooltip-tt").css({left:e.pageX+1,top:e.pageY+1,zIndex:99999}).stop().show(100)}}}function go(){$(document).tooltip();$(".stacks").change(function(){calibrateAllStats()});$("#i1 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#i2 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#i3 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#i4 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#i5 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#i6 a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$(".item-container a").hover(function(e){displayTT(e,this)},function(){$(".item-tooltip-tt").hide()});$("#burl").click(function(){$(this).select()});$("#level").change(function(){urlLink.setLink();var e=$("#level").val();if(e!=null&&e){var t=parseInt(e);if(t&&t>=1&&t<=20){if(currentGod.god_id!=0){currentGod.setLevel(t);calibrateAllStats()}else{alert("Select a valid God first!")}}else{alert("Select a valid leve [1-20]")}}});$("#god-menu-link").click(function(){$("#god-menu").fadeIn();$("body").append("<div id='fade'></div>");$("#fade").css({filter:"alpha(opacity=80)"}).fadeIn();var e=($("#god-menu").height()+10)/2;var t=($("#god-menu").width()+10)/2;$("#god-menu").css({"margin-top":-e,"margin-left":-t})});$("#god-container a").click(function(){setGod(this);urlLink.g=$(this).attr("rel");urlLink.setLink()});$(".item-dropdown").click(function(e){setItemSlot(this)});$(".item-dropdown .stacks").click(function(e){e.stopPropagation()});$(".about").click(function(){$("#about-me").fadeIn();$("body").append("<div id='fade'></div>");$("#fade").css({filter:"alpha(opacity=80)"}).fadeIn();var e=($("#about-me").height()+10)/2;var t=($("#about-me").width()+10)/2;$("#about-me").css({"margin-top":-e,"margin-left":-t})});$(".help").click(function(){$("#help-info").fadeIn();$("body").append("<div id='fade'></div>");$("#fade").css({filter:"alpha(opacity=80)"}).fadeIn();var e=($("#help-info").height()+10)/2;var t=($("#help-info").width()+10)/2;$("#help-info").css({"margin-top":-e,"margin-left":-t})});$(".item-container a").click(function(){setItem(this);urlLink[selectedItemDropdown]=$(this).attr("rel");urlLink.setLink()});$("ul#god-list a").click(function(){selectNewGod($(this).attr("attr"))});$(".about-exit a").click(function(){$("#fade , #about-me").fadeOut();$("#fade , #help-info").fadeOut()});$("#comment-foot a").click(function(){if(!comments_flg){$("#comment-foot a").html("[Hide Comments]");$("#hcb-comments").fadeIn();comments_flg=true}else{$("#comment-foot a").html("[Show Comments]");$("#hcb-comments").hide();comments_flg=false}});$(".ireset a").click(function(){var e=["bc","i1c","i2c","i3c","i4c","i5c","i6c"];var t=$(this).parent().attr("id");selectedItemDropdown=$(this).parent().parent().attr("id");$("#"+selectedItemDropdown+" a:first").html("Item "+selectedItemDropdown.substring(1,2));items[selectedItemDropdown]=null;var n=$("#"+selectedItemDropdown+" a:first").attr("rel");$("a[id='cid"+n+"']").removeClass("noClick");$("a[id='cid"+n+"']").css("opacity","");$("a[id='cid"+n+"']").css("filter","");calibrateAllStats();$("#"+t+" a").hide();$("#"+selectedItemDropdown+"s").hide();reset=true})}function setGod(e,t){var n=$(e).find(".god-pic").html();$("#god-menu-link a").html(n);selectNewGod($(e).attr("rel"));$("#fade , #god-menu").fadeOut()}function setItem(e,t,n){var r=e&&e!=null?e:"#"+n;if($(r).hasClass("noClick"))return;if(t&&t!=null){selectedItemDropdown=t}var i,s;i=$(r).find(".item-pic").html();s=$(r).attr("rel");sendItemData(selectedId,s,$("#level").val());$(r).addClass("noClick");$(r).css("opacity","0.5");$(r).css("filter","alpha(opacity=50");$("#"+selectedItemDropdown+" a:first").html(i);$("#"+selectedItemDropdown+" a:first").attr("rel",s);$("#"+selectedItemDropdown+"r a").show();$("#fade , #item-menu").fadeOut()}function setItemSlot(e,t){if(reset){reset=false;return}if(t&&t!=null){selectedItemDropdown=t}else{selectedItemDropdown=$(e).attr("id")}$("#"+selectedItemDropdown+"s").hide();var n=$("#"+selectedItemDropdown+" a:first").attr("rel");if(n){$("a[id='cid"+n+"']").removeClass("noClick");$("a[id='cid"+n+"']").css("opacity","");$("a[id='cid"+n+"']").css("filter","")}$("#item-menu").fadeIn();$("body").append("<div id='fade'></div>");$("#fade").css({filter:"alpha(opacity=80)"}).fadeIn();var r=($("#item-menu").height()+10)/2;var i=($("#item-menu").width()+10)/2;$("#item-menu").css({"margin-top":-r,"margin-left":-i})}function registerItemSelection(e){if(selectedItemDropdown&&selectedItemDropdown!=null){var t=$(e).find(".item-pic").html();var n=$(e).attr("rel");sendItemData(selectedId,n,$("#level").val());$(this).removeAttr("href");$(this).off("click");$(this).css("opacity","0.5");$(this).css("filter","alpha(opacity=50");$("#"+selectedItemDropdown+" a:first").html(t);$("#"+selectedItemDropdown+" a:first").attr("rel",n);$("#"+selectedItemDropdown+"r a").show()}$("#fade , #item-menu").fadeOut()}function selectNewGod(e){if(e){selectedId=e;sendData(e,1)}}function sendItemData(e,t,n){if(e&&t&&n&&e!=null&&t!=null&&n!=null){sendRequest("ajax/ProcessItem?id="+e+"&item="+t+"&level="+n,catchItemData)}else if(t){sendRequest("ajax/ProcessItem?item="+t,catchItemData)}}function sendItemArrayData(e,t,n){sendRequest("ajax/ProcessItemArray?item="+e+"&l="+t+"&g="+n,catchItemArrayData)}function sendData(e,t){if(e||t){sendRequest("ajax/ProcessData?id="+e+"&level="+t,catchData)}}function updatePageData(){var e=[{c:"power_magical",m:900},{c:"mag_lifesteal",m:65},{c:"mag_penetration",m:50},{c:"mana",m:4e3},{c:"mp5",m:100},{c:"cooldown",m:35},{c:"power_physical",m:500},{c:"attack_sec",m:2.5},{c:"physical_penetration",m:50},{c:"physical_lifesteal",m:65},{c:"critical_chance",m:80},{c:"prot_physical",m:325},{c:"prot_magical",m:325},{c:"health",m:5500},{c:"hp5",m:100},{c:"speed",m:1e3}];var t=new StatObj;t.sumStatObject(currentGod);for(var n=0;n<e.length;n++){var r=t[e[n].c];var i=getItemCategoryValue(e[n].c,1);var s=getItemCategoryValue(e[n].c,2);var o=getItemCategoryValue(e[n].c,3);var u=getItemCategoryValue(e[n].c,4);var a=getItemCategoryValue(e[n].c,5);var f=getItemCategoryValue(e[n].c,6);var l=r+i.total+s.total+o.total+u.total+a.total+f.total;processPageOutput(e[n].c,r,i,s,o,u,a,f,e[n].m,l);$("#cost-val").html(statObj.cost)}}function processPageOutput(e,t,n,r,i,s,o,u,a,f){var l=parseInt($(".graphic-td").css("width"));var c=0;var h=t/a*l;var p=getDivWidth(h,l,c,0);if(p==0)$("#"+e+" div.bc").css("border-right","");$("#"+e+" div.bc").css("width",getDivWidth(h,l,c,0));c+=h;var d=n.total/a*l;var v=getDivWidth(d,l,c,1);if(v==0)$("#"+e+" div.i1c").css("border-right","");$("#"+e+" div.i1c").css("width",v);c+=d;var m=r.total/a*l;var g=getDivWidth(m,l,c,2);if(g==0)$("#"+e+" div.i2c").css("border-right","");$("#"+e+" div.i2c").css("width",getDivWidth(m,l,c,2));c+=m;var y=i.total/a*l;var b=getDivWidth(y,l,c,3);if(b==0)$("#"+e+" div.i3c").css("border-right","");$("#"+e+" div.i3c").css("width",getDivWidth(y,l,c,3));c+=y;var w=s.total/a*l;var E=getDivWidth(w,l,c,4);if(E==0)$("#"+e+" div.i4c").css("border-right","");$("#"+e+" div.i4c").css("width",getDivWidth(w,l,c,4));c+=w;var S=o.total/a*l;var x=getDivWidth(S,l,c,5);if(x==0)$("#"+e+" div.i5c").css("border-right","");$("#"+e+" div.i5c").css("width",getDivWidth(S,l,c,5));c+=S;var T=u.total/a*l;var N=getDivWidth(T,l,c,6);if(N==0)$("#"+e+" div.i6c").css("border-right","");$("#"+e+" div.i6c").css("width",getDivWidth(T,l,c,6));c+=T;if(h>0){$("#"+e+" div.bc").css("border-right","1px solid #DDAA22");$("#"+e+" div.bc").attr("title","Base/Passive: +"+t.toFixed(2))}if(d>0){$("#"+e+" div.i1c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i1c").attr("title",n.name+": +"+n.total.toFixed(2))}if(m>0){$("#"+e+" div.i2c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i2c").attr("title",r.name+": +"+r.total.toFixed(2))}if(y>0){$("#"+e+" div.i3c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i3c").attr("title",i.name+": +"+i.total.toFixed(2))}if(w>0){$("#"+e+" div.i4c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i4c").attr("title",s.name+": +"+s.total.toFixed(2))}if(S>0){$("#"+e+" div.i5c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i5c").attr("title",o.name+": +"+o.total.toFixed(2))}if(T>0){$("#"+e+" div.i6c").css("border-right","1px solid #DDAA22");$("#"+e+" div.i6c").attr("title",u.name+": +"+u.total.toFixed(2))}$("#"+e+"-text").html("["+f.toFixed(2)+"/"+a+"]");if(f>=a)$("#"+e+"-text").css("color","#FF0000");if(f<a)$("#"+e+"-text").css("color","#ffffff")}function getDivWidth(e,t,n,r){if(n>=t){return 0}if(n<t){if(n+e>=t){return t-n-r}else{return e}}return 0}function getItemCategoryValue(e,t){var n=items["i"+t];var r=0;var i,s;if(n!=null){if(n[e]>0&&n[e]<1){r=statObj[e]*n[e]}else{r=n[e]}i=n.name;s=n.item_id;if(n.passive_modifier_1>0&&e==n.passive_bonus_to_1){r+=n.passive_modifier_1*statObj[n.passive_bonus_from_1]}if(n.passive_modifier_2>0&&e==n.passive_bonus_to_2){r+=n.passive_modifier_2*statObj[n.passive_bonus_from_2]}if(n.max_stacks>0){var o=$("#i"+t+"stacks").val();if(e==n.bonus_field_1){if(n.bonus_modifier_1>0){var u=n.bonus_modifier_1*o;r+=u}}if(e==n.bonus_field_2){if(n.bonus_modifier_2>0){var a=n.bonus_modifier_2*o;r+=a}}if(e==n.bonus_field_3){if(n.bonus_modifier_3>0){var f=n.bonus_modifier_3*o;r+=f}}}}return{total:r,name:i,id:s}}function catchData(e){characterObj=JSON.parse(e.responseText);currentGod.setGod(characterObj);$("#gs-name").html(characterObj.name);$("#gs-sub-desc").html(characterObj.sub_desc);$("#gs-origin").html(characterObj.origin);$("#gs-tags").html(characterObj.tags);currentGod.setLevel(1);$("#level").val("1");statObj=new StatObj;statObj.sumStatObject(currentGod);updatePageData()}function catchItemData(e){var t=JSON.parse(e.responseText);items[selectedItemDropdown]=t;var n=parseInt(t.max_stacks);if(n>0){$("#"+selectedItemDropdown+"stacks").html("");for(var r=0;r<=n;r++){$("#"+selectedItemDropdown+"stacks").append("<option value='"+r+"'>"+r+"</option>")}$("#"+selectedItemDropdown+"s").show()}calibrateAllStats()}function catchItemArrayData(e){var t=JSON.parse(e.responseText);var n=t["items"];for(var r in n){var i="i"+n[r].slot;items[i]=n[r];setItemArray(i,n[r].item_id);var s=parseInt(n[r].max_stacks);if(s>0){$("#"+i+"stacks").html("");for(var o=0;o<=s;o++){$("#"+i+"stacks").append("<option value='"+o+"'>"+o+"</option>")}$("#"+i+"s").show()}}var u=t["god"];characterObj=u;var a="#god-container a[rel='"+u.god_id+"']";var f=$(a).find(".god-pic").html();$("#god-menu-link a").html(f);$("#fade , #god-menu").fadeOut();currentGod.setGod(characterObj);$("#gs-name").html(characterObj.name);$("#gs-sub-desc").html(characterObj.sub_desc);$("#gs-origin").html(characterObj.origin);$("#gs-tags").html(characterObj.tags);currentGod.setLevel(u.level);$("#level").val(u.level);statObj=new StatObj;statObj.sumStatObject(currentGod);updatePageData();calibrateAllStats()}function setItemArray(e,t){var n="#cid"+t;if($(n).hasClass("noClick"))return;if(e&&e!=null){selectedItemDropdown=e}var r,i;r=$(n).find(".item-pic").html();i=$(n).attr("rel");$(n).addClass("noClick");$(n).css("opacity","0.5");$(n).css("filter","alpha(opacity=50");$("#"+selectedItemDropdown+" a:first").html(r);$("#"+selectedItemDropdown+" a:first").attr("rel",i);$("#"+selectedItemDropdown+"r a").show();$("#fade , #item-menu").fadeOut()}function processItemData(e,t){var n=JSON.parse(e.items);for(var r in n){var i="i"+n[r].slot;items[i]=n[r];var s=parseInt(n[r].max_stacks);if(s>0){$("#"+i+"stacks").html("");for(var o=0;o<=s;o++){$("#"+i+"stacks").append("<option value='"+o+"'>"+o+"</option>")}$("#"+i+"s").show()}}calibrateAllStats()}function catchItemTooltip(e){$(".item-tooltip-tt").html(e.responseText)}function sendRequest(e,t,n){var r=createXMLHTTPObject();if(!r)return;var i=n?"POST":"GET";r.open(i,e,true);r.setRequestHeader("User-Agent","XMLHTTP/1.0");if(n)r.setRequestHeader("Content-type","application/x-www-form-urlencoded");r.onreadystatechange=function(){if(r.readyState!=4)return;if(r.status!=200&&r.status!=304){alert("HTTP error "+r.status);return}t(r)};if(r.readyState==4)return;r.send(n)}function createXMLHTTPObject(){var e=false;for(var t=0;t<XMLHttpFactories.length;t++){try{e=XMLHttpFactories[t]()}catch(n){continue}break}return e}function checkGetUrl(){var e=$.urlParam("i1");var t=$.urlParam("i2");var n=$.urlParam("i3");var r=$.urlParam("i4");var i=$.urlParam("i5");var s=$.urlParam("i6");var o=$.urlParam("g");var u=$.urlParam("l");var a=$.urlParam("i1")+","+$.urlParam("i2")+","+$.urlParam("i3")+","+$.urlParam("i4")+","+$.urlParam("i5")+","+$.urlParam("i6");if(e||t||n||r||i||s||o||u){sendItemArrayData(a,$.urlParam("l"),$.urlParam("g"))}if(e!=0)urlLink["i1"]=e;if(t!=0)urlLink["i2"]=t;if(n!=0)urlLink["i3"]=n;if(r!=0)urlLink["i4"]=r;if(i!=0)urlLink["i5"]=i;if(s!=0)urlLink["i6"]=s;if(o!=0)urlLink["g"]=o;urlLink.setLink()}var characterObj;var selectedId=0;var selectedItemDropdown;var totalCost=0;var slots=["i1","i2","i3","i4","i5","i6"];var statObj=new StatObj;var currentGod=new God;var comments_flg=false;var reset=false;var itemBonuses=[];var urlLink=new UrlLink;var items={i1:null,i2:null,i3:null,i4:null,i5:null,i6:null,sumBonuses:function(){var e=new itemObj;for(var t=0;t<slots.length;t++){var n=this[slots[t]];var r=t+1;if(n!=null){n.speed<1?e.speedP+=n.speed:e.speed+=n.speed;n.attack_sec<1?e.attack_secP+=n.attack_sec:e.attack_sec+=n.attack_sec;n.mag_lifesteal<1?e.mag_lifestealP+=n.mag_lifesteal:e.mag_lifesteal+=n.mag_lifesteal;n.physical_lifesteal<1?e.physical_lifestealP+=n.physical_lifesteal:e.physical_lifesteal+=n.physical_lifesteal;n.mag_penetration<1?e.mag_penetrationP+=n.mag_penetration:e.mag_penetration+=n.mag_penetration;n.physical_penetration<1?e.physical_penetrationP+=n.physical_penetration:e.physical_penetration+=n.physical_penetration;n.critical_chance<1?e.critical_chanceP+=n.critical_chance:e.critical_chance+=n.critical_chance;n.cooldown<1?e.cooldownP+=n.cooldown:e.cooldown+=n.cooldown;e.cost+=n.cost;e.health+=n.health;e.mana+=n.mana;e.range+=n.range;e.power_magical+=parseInt(n.power_magical);e.power_physical+=n.power_physical;e.prot_magical+=n.prot_magical;e.prot_physical+=n.prot_physical;e.hp5+=n.hp5;e.mp5+=n.mp5;e.focus+=n.focus;if(n.max_stacks>0){var i=$("#i"+r+"stacks").val();var s=n.bonus_modifier_1*i;e[n.bonus_field_1]+=s;if(n.bonus_modifier_2>0){var o=n.bonus_modifier_2*i;e[n.bonus_field_2]+=o}if(n.bonus_modifier_3>0){var u=n.bonus_modifier_3*i;e[n.bonus_field_3]+=u}}$("#p-i"+r+" td:eq(0)").html("<img src='img/items/"+n.portrait_name+"'/>");$("#p-i"+r+" td:eq(1)").html(n.passive)}else if(n==null){$("#p-i"+r+" td:eq(0)").html("");$("#p-i"+r+" td:eq(1)").html("")}}return e}};$.urlParam=function(e){var t=(new RegExp("[\\?&]"+e+"=([^&#]*)")).exec(window.location.href);if(t!=null)return t[1]||0;else return 0};var XMLHttpFactories=[function(){return new XMLHttpRequest},function(){return new ActiveXObject("Msxml2.XMLHTTP")},function(){return new ActiveXObject("Msxml3.XMLHTTP")},function(){return new ActiveXObject("Microsoft.XMLHTTP")}];$(window).load(function(){$("#loadingBackground").fadeOut(1e3);go();checkGetUrl()})