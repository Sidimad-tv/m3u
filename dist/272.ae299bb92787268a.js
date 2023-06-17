"use strict";(global.webpackChunkesxiptv=global.webpackChunkesxiptv||[]).push([[272],{272:(b,P,o)=>{o.d(P,{d:()=>v});var A=o(73555),t=o(94650),U=o(76477),a=o(17326),p=o(31253),g=o(63336),f=o(31529),u=o(95334),d=o(15861),r=o(36895),m=o(24006),T=o(4859),E=o(56709),h=o(65412),C=o(97392),D=o(44144),y=o(89383),H=o(49465),M=o(52468),k=o(28555),O=o(59549);function F(l,e){1&l&&(t.TgZ(0,"mat-form-field",3),t._uU(1,"\n            "),t.TgZ(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._uU(5,"\n            "),t._UZ(6,"input",16),t._uU(7,"\n        "),t.qZA()),2&l&&(t.xp6(3),t.Oqu(t.lcZ(4,1,"HOME.PLAYLISTS.INFO_DIALOG.FROM_URL")))}function R(l,e){1&l&&(t.TgZ(0,"mat-form-field",17),t._uU(1,"\n            "),t.TgZ(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._uU(5,"\n            "),t._UZ(6,"input",18),t._uU(7,"\n            "),t.TgZ(8,"mat-hint"),t._uU(9),t.ALo(10,"translate"),t.qZA(),t._uU(11,"\n        "),t.qZA()),2&l&&(t.xp6(3),t.Oqu(t.lcZ(4,2,"HOME.PLAYLISTS.INFO_DIALOG.USER_AGENT")),t.xp6(6),t.Oqu(t.lcZ(10,4,"HOME.PLAYLISTS.INFO_DIALOG.CUSTOM_USER_AGENT")))}function J(l,e){1&l&&(t.TgZ(0,"mat-hint"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.hij("\n                ",t.lcZ(2,1,"HOME.PLAYLISTS.INFO_DIALOG.UPDATE_FAILED"),"\n            "))}function q(l,e){if(1&l&&(t.TgZ(0,"mat-form-field",3),t._uU(1,"\n            "),t.TgZ(2,"mat-label"),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._uU(5,"\n            "),t._UZ(6,"input",19),t._uU(7,"\n            "),t.YNc(8,J,3,3,"mat-hint",10),t._uU(9,"\n        "),t.qZA()),2&l){const i=t.oxw();t.xp6(3),t.hij("\n                ",t.lcZ(4,2,"HOME.PLAYLISTS.INFO_DIALOG.FILE_PATH"),"\n            "),t.xp6(5),t.Q6J("ngIf",2===i.playlist.updateState)}}function G(l,e){1&l&&(t.ynx(0),t._uU(1,"\n            "),t.TgZ(2,"mat-checkbox",20),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._uU(5,"\n            "),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"translate"),t.qZA(),t._uU(9,"\n        "),t.BQk()),2&l&&(t.xp6(3),t.hij("\n                ",t.lcZ(4,2,"HOME.PLAYLISTS.INFO_DIALOG.AUTO_UPDATE"),"\n            "),t.xp6(4),t.hij("\n                ",t.lcZ(8,4,"HOME.PLAYLISTS.INFO_DIALOG.AUTO_UPDATE_DESCRIPTION"),"\n            "))}class L{constructor(e,i,n,s,c,I){this.datePipe=e,this.formBuilder=i,this.dataService=n,this.playlistService=c,this.store=I,this.isElectron=this.dataService.isElectron,this.playlist=s}ngOnInit(){this.playlistDetails=this.formBuilder.group({_id:this.playlist._id,title:new m.NI(this.playlist.title,m.kI.required),userAgent:this.playlist.userAgent||"",filename:new m.NI({value:this.playlist.filename||"",disabled:!0}),count:new m.NI({value:this.playlist.count,disabled:!0}),importDate:new m.NI({value:this.datePipe.transform(this.playlist.importDate),disabled:!0}),url:new m.NI({value:this.playlist.url,disabled:!0}),filePath:new m.NI({value:this.playlist.filePath,disabled:!0}),autoRefresh:new m.NI(this.playlist.autoRefresh)})}saveChanges(e){this.store.dispatch(p.LQ({playlist:e}))}exportPlaylist(){var e=this;return(0,d.Z)(function*(){const i=yield(0,U.firstValueFrom)(e.playlistService.getRawPlaylistById(e.playlist._id)),n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(i)),n.setAttribute("download",e.playlist.title||"exported.m3u"),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)})()}static#t=this.\u0275fac=function(i){return new(i||L)(t.Y36(r.uU),t.Y36(m.QS),t.Y36(M.D),t.Y36(h.WI),t.Y36(H.c),t.Y36(k.yh))};static#n=this.\u0275cmp=t.Xpm({type:L,selectors:[["app-playlist-info"]],standalone:!0,features:[t._Bn([r.uU]),t.jDz],decls:71,vars:30,consts:[[3,"formGroup","ngSubmit"],["mat-dialog-title",""],[1,"mat-typography"],[1,"full-width"],["formControlName","title","matInput",""],["class","full-width",4,"ngIf"],["matInput","","formControlName","filename"],["matInput","","formControlName","importDate"],["matInput","","formControlName","count"],["class","full-width mb-10",4,"ngIf"],[4,"ngIf"],["align","end"],["mat-flat-button","","color","accent",3,"click"],[2,"flex","1 1 auto"],["mat-flat-button","","mat-dialog-close","","color","accent","type","submit",3,"disabled"],["mat-button","","mat-dialog-close","","cdkFocusInitial","","color","accent"],["matInput","","formControlName","url"],[1,"full-width","mb-10"],["formControlName","userAgent","matInput",""],["formControlName","filePath","matInput",""],["formControlName","autoRefresh",1,"full-width"]],template:function(i,n){1&i&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.saveChanges(n.playlistDetails.value)}),t._uU(1,"\n    "),t.TgZ(2,"h2",1),t._uU(3),t.ALo(4,"translate"),t.qZA(),t._uU(5,"\n    "),t.TgZ(6,"mat-dialog-content",2),t._uU(7,"\n        "),t.TgZ(8,"mat-form-field",3),t._uU(9,"\n            "),t.TgZ(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._uU(13,"\n            "),t._UZ(14,"input",4),t._uU(15,"\n        "),t.qZA(),t._uU(16,"\n        "),t.YNc(17,F,8,3,"mat-form-field",5),t._uU(18,"\n        "),t.TgZ(19,"mat-form-field",3),t._uU(20,"\n            "),t.TgZ(21,"mat-label"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t._uU(24,"\n            "),t._UZ(25,"input",6),t._uU(26,"\n        "),t.qZA(),t._uU(27,"\n        "),t.TgZ(28,"mat-form-field",3),t._uU(29,"\n            "),t.TgZ(30,"mat-label"),t._uU(31),t.ALo(32,"translate"),t.qZA(),t._uU(33,"\n            "),t._UZ(34,"input",7),t._uU(35,"\n        "),t.qZA(),t._uU(36,"\n        "),t.TgZ(37,"mat-form-field",3),t._uU(38,"\n            "),t.TgZ(39,"mat-label"),t._uU(40),t.ALo(41,"translate"),t.qZA(),t._uU(42,"\n            "),t._UZ(43,"input",8),t._uU(44,"\n        "),t.qZA(),t._uU(45,"\n        "),t.YNc(46,R,12,6,"mat-form-field",9),t._uU(47,"\n        "),t.YNc(48,q,10,4,"mat-form-field",5),t._uU(49,"\n        "),t.YNc(50,G,10,6,"ng-container",10),t._uU(51,"\n    "),t.qZA(),t._uU(52,"\n    "),t.TgZ(53,"mat-dialog-actions",11),t._uU(54,"\n        "),t.TgZ(55,"button",12),t.NdJ("click",function(){return n.exportPlaylist()}),t._uU(56),t.ALo(57,"translate"),t.qZA(),t._uU(58,"\n        "),t._UZ(59,"div",13),t._uU(60,"\n        "),t.TgZ(61,"button",14),t._uU(62),t.ALo(63,"translate"),t.qZA(),t._uU(64,"\n        "),t.TgZ(65,"button",15),t._uU(66),t.ALo(67,"translate"),t.qZA(),t._uU(68,"\n    "),t.qZA(),t._uU(69,"\n"),t.qZA(),t._uU(70,"\n")),2&i&&(t.Q6J("formGroup",n.playlistDetails),t.xp6(3),t.hij("\n        ",t.lcZ(4,14,"HOME.PLAYLISTS.INFO_DIALOG.PLAYLIST_DETAILS"),"\n    "),t.xp6(8),t.Oqu(t.lcZ(12,16,"HOME.PLAYLISTS.INFO_DIALOG.TITLE")),t.xp6(6),t.Q6J("ngIf",n.playlist.url),t.xp6(5),t.Oqu(t.lcZ(23,18,"HOME.PLAYLISTS.INFO_DIALOG.ORIGINAL_FILENAME")),t.xp6(9),t.Oqu(t.lcZ(32,20,"HOME.PLAYLISTS.INFO_DIALOG.IMPORT_DATE")),t.xp6(9),t.Oqu(t.lcZ(41,22,"HOME.PLAYLISTS.INFO_DIALOG.CHANNELS")),t.xp6(6),t.Q6J("ngIf",n.isElectron),t.xp6(2),t.Q6J("ngIf",n.playlist.filePath),t.xp6(2),t.Q6J("ngIf",n.isElectron&&(n.playlist.url||n.playlist.filePath)),t.xp6(6),t.hij("\n            ",t.lcZ(57,24,"HOME.PLAYLISTS.INFO_DIALOG.EXPORT_PLAYLIST"),"\n        "),t.xp6(5),t.Q6J("disabled",!n.playlistDetails.valid||n.playlistDetails.pristine),t.xp6(1),t.hij("\n            ",t.lcZ(63,26,"HOME.PLAYLISTS.INFO_DIALOG.SAVE"),"\n        "),t.xp6(4),t.hij("\n            ",t.lcZ(67,28,"HOME.PLAYLISTS.INFO_DIALOG.CLOSE"),"\n        "))},dependencies:[y.aw,y.X$,T.ot,T.lW,C.Ps,D.c,O.KE,O.bx,O.hX,D.Nt,E.p9,E.oG,r.ez,r.O5,m.UX,m._Y,m.Fj,m.JJ,m.JL,m.sg,m.u,h.Is,h.ZT,h.uh,h.xY,h.H8],encapsulation:2})}var Q=o(34793),w=o(17009),Z=o(96338),N=o(3238),Y=o(44850),j=o(20502),B=o(10266);function X(l,e){if(1&l&&(t.TgZ(0,"mat-icon",9),t.ALo(1,"translate"),t._uU(2,"cloud"),t.qZA()),2&l){const i=t.oxw();t.Q6J("matTooltip",t.lcZ(1,1,"HOME.PLAYLISTS.ADDED_VIA_URL")+" "+(null==i.item?null:i.item.url))}}function K(l,e){1&l&&(t.TgZ(0,"mat-icon",9),t.ALo(1,"translate"),t._uU(2,"folder"),t.qZA()),2&l&&t.Q6J("matTooltip",t.lcZ(1,1,"HOME.PLAYLISTS.ADDED_VIA_FILE"))}function V(l,e){if(1&l&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"date"),t.BQk()),2&l){const i=t.oxw();t.xp6(1),t.AsE("\n            | ",t.lcZ(2,2,"HOME.PLAYLISTS.ADDED"),":\n            ",t.lcZ(3,4,i.item.importDate),"\n        ")}}function z(l,e){if(1&l&&(t.ynx(0),t._uU(1),t.ALo(2,"translate"),t.ALo(3,"date"),t.BQk()),2&l){const i=t.oxw();t.xp6(1),t.AsE("\n            | ",t.lcZ(2,2,"HOME.PLAYLISTS.UPDATED"),":\n            ",t.xi3(3,4,i.item.updateDate,"MMMM d, yyyy, HH:mm"),"\n        ")}}function $(l,e){1&l&&(t.ynx(0),t._uU(1,"\n            "),t.TgZ(2,"mat-icon",10),t.ALo(3,"translate"),t._uU(4,"warning"),t.qZA(),t._uU(5,"\n        "),t.BQk()),2&l&&(t.xp6(2),t.Q6J("matTooltip",t.lcZ(3,2,"HOME.PLAYLISTS.INFO_DIALOG.UPDATE_FAILED"))("inline",!0))}function W(l,e){if(1&l){const i=t.EpF();t.TgZ(0,"button",11),t.NdJ("click",function(s){t.CHM(i);const c=t.oxw();return s.stopPropagation(),t.KtG(c.refreshClicked.emit(c.item))}),t.ALo(1,"translate"),t._uU(2,"\n        "),t.TgZ(3,"mat-icon"),t._uU(4,"sync"),t.qZA(),t._uU(5,"\n    "),t.qZA()}2&l&&t.Q6J("matTooltip",t.lcZ(1,1,"HOME.PLAYLISTS.REFRESH"))}class x{constructor(){this.playlistClicked=new t.vpe,this.refreshClicked=new t.vpe,this.removeClicked=new t.vpe,this.editPlaylistClicked=new t.vpe}static#t=this.\u0275fac=function(i){return new(i||x)};static#n=this.\u0275cmp=t.Xpm({type:x,selectors:[["app-playlist-item"]],inputs:{item:"item"},outputs:{playlistClicked:"playlistClicked",refreshClicked:"refreshClicked",removeClicked:"removeClicked",editPlaylistClicked:"editPlaylistClicked"},decls:41,vars:17,consts:[["cdkDrag","",3,"click"],["mat-list-icon","","cdkDragHandle","",1,"drag-icon"],["mat-list-icon","","class","upload-type-icon",3,"matTooltip",4,"ngIf"],["mat-line",""],["mat-line","",1,"meta"],[4,"ngIf"],["mat-icon-button","","class","refresh-btn","color","accent",3,"matTooltip","click",4,"ngIf"],["mat-icon-button","","color","accent",1,"edit-btn",3,"matTooltip","click"],["mat-icon-button","","color","accent",1,"delete-btn",3,"matTooltip","click"],["mat-list-icon","",1,"upload-type-icon",3,"matTooltip"],[3,"matTooltip","inline"],["mat-icon-button","","color","accent",1,"refresh-btn",3,"matTooltip","click"]],template:function(i,n){1&i&&(t.TgZ(0,"mat-list-item",0),t.NdJ("click",function(){return n.playlistClicked.emit(n.item._id)}),t._uU(1,"\n    "),t.TgZ(2,"mat-icon",1),t._uU(3,"drag_indicator"),t.qZA(),t._uU(4,"\n    "),t.YNc(5,X,3,3,"mat-icon",2),t._uU(6,"\n    "),t.YNc(7,K,3,3,"mat-icon",2),t._uU(8,"\n    "),t.TgZ(9,"div",3),t._uU(10),t.qZA(),t._uU(11,"\n    "),t.TgZ(12,"div",4),t._uU(13),t.ALo(14,"translate"),t.YNc(15,V,4,6,"ng-container",5),t._uU(16,"\n        "),t.YNc(17,z,4,7,"ng-container",5),t._uU(18,"\n        "),t.YNc(19,$,6,4,"ng-container",5),t._uU(20,"\n    "),t.qZA(),t._uU(21,"\n    "),t.YNc(22,W,6,3,"button",6),t._uU(23,"\n    "),t.TgZ(24,"button",7),t.NdJ("click",function(c){return c.stopPropagation(),n.editPlaylistClicked.emit(n.item)}),t.ALo(25,"translate"),t._uU(26,"\n        "),t.TgZ(27,"mat-icon"),t._uU(28,"edit"),t.qZA(),t._uU(29,"\n    "),t.qZA(),t._uU(30,"\n    "),t.TgZ(31,"button",8),t.NdJ("click",function(c){return c.stopPropagation(),n.removeClicked.emit(n.item._id)}),t.ALo(32,"translate"),t._uU(33,"\n        "),t.TgZ(34,"mat-icon"),t._uU(35,"delete"),t.qZA(),t._uU(36,"\n    "),t.qZA(),t._uU(37,"\n    "),t._UZ(38,"mat-divider"),t._uU(39,"\n"),t.qZA(),t._uU(40,"\n")),2&i&&(t.xp6(5),t.Q6J("ngIf",null==n.item?null:n.item.url),t.xp6(2),t.Q6J("ngIf",!(null!=n.item&&n.item.url)),t.xp6(3),t.Oqu(n.item.title||n.item.filename),t.xp6(3),t.AsE("\n        ",t.lcZ(14,11,"HOME.PLAYLISTS.CHANNELS"),": ",n.item.count,"\n        "),t.xp6(2),t.Q6J("ngIf",(null==n.item.importDate?null:n.item.importDate.length)>3),t.xp6(2),t.Q6J("ngIf",n.item.updateDate),t.xp6(2),t.Q6J("ngIf",2===n.item.updateState),t.xp6(3),t.Q6J("ngIf",n.item.url||n.item.filePath),t.xp6(2),t.Q6J("matTooltip",t.lcZ(25,13,"HOME.PLAYLISTS.SHOW_DETAILS")),t.xp6(7),t.Q6J("matTooltip",t.lcZ(32,15,"HOME.PLAYLISTS.REMOVE")))},dependencies:[r.O5,T.lW,C.Hw,Z.Tg,N.X2,Z.Nh,Y.d,B.gM,A.Zt,A.Bh,r.uU,y.X$],styles:["mat-list-item[_ngcontent-%COMP%]{cursor:pointer}.mat-list-base[_ngcontent-%COMP%]{padding-top:0!important}.meta[_ngcontent-%COMP%]{font-size:12px!important;color:#666;margin-top:2px!important}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.drag-icon[_ngcontent-%COMP%]{cursor:move;margin-left:-20px}@media only screen and (max-width: 480px){  .main-container .favorites-icon,   .main-container .upload-type-icon,   .main-container .refresh-btn,   .main-container .edit-btn,   .main-container .delete-btn{display:none}}"]})}function tt(l,e){1&l&&(t.TgZ(0,"mat-list-item"),t._uU(1,"\n            "),t.TgZ(2,"mat-icon",8),t._uU(3,"search"),t.qZA(),t._uU(4,"\n            "),t.TgZ(5,"div",9),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._uU(8,"\n            "),t.TgZ(9,"div",10),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._uU(12,"\n        "),t.qZA()),2&l&&(t.xp6(6),t.Oqu(t.lcZ(7,2,"HOME.PLAYLISTS.NO_PLAYLISTS")),t.xp6(4),t.hij("\n                ",t.lcZ(11,4,"HOME.PLAYLISTS.ADD_FIRST"),"\n            "))}function nt(l,e){if(1&l){const i=t.EpF();t.TgZ(0,"mat-list-item",11),t.NdJ("click",function(){t.CHM(i);const s=t.oxw(3);return t.KtG(s.getPlaylist("GLOBAL_FAVORITES"))}),t._uU(1,"\n            "),t.TgZ(2,"mat-icon",8),t._uU(3,"star"),t.qZA(),t._uU(4,"\n            "),t.TgZ(5,"div",9),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._uU(8,"\n            "),t.TgZ(9,"div",10),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._uU(12,"\n            "),t._UZ(13,"mat-divider"),t._uU(14,"\n        "),t.qZA()}2&l&&(t.xp6(6),t.hij("\n                ",t.lcZ(7,2,"HOME.PLAYLISTS.GLOBAL_FAVORITES"),"\n            "),t.xp6(4),t.hij("\n                ",t.lcZ(11,4,"HOME.PLAYLISTS.GLOBAL_FAVORITES_DESCRIPTION"),"\n            "))}function et(l,e){if(1&l){const i=t.EpF();t.TgZ(0,"app-playlist-item",12),t.NdJ("editPlaylistClicked",function(s){t.CHM(i);const c=t.oxw(3);return t.KtG(c.openInfoDialog(s))})("playlistClicked",function(s){t.CHM(i);const c=t.oxw(3);return t.KtG(c.getPlaylist(s))})("refreshClicked",function(s){t.CHM(i);const c=t.oxw(3);return t.KtG(c.refreshPlaylist(s))})("removeClicked",function(s){t.CHM(i);const c=t.oxw(3);return t.KtG(c.removeClicked(s))}),t.qZA()}2&l&&t.Q6J("item",e.$implicit)}function it(l,e){if(1&l){const i=t.EpF();t.TgZ(0,"div",13),t._uU(1,"\n            "),t.TgZ(2,"p"),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.TgZ(5,"button",14),t.NdJ("click",function(){t.CHM(i);const s=t.oxw(3);return t.KtG(s.migratePlaylists())}),t._uU(6,"\n                "),t.TgZ(7,"mat-icon"),t._uU(8,"playlist_add"),t.qZA(),t._uU(9,"\n                Migrate playlists"),t.qZA(),t._uU(10,"\xa0\n            "),t.TgZ(11,"button",14),t.NdJ("click",function(){t.CHM(i);const s=t.oxw(3);return t.KtG(s.deleteMigratedPlaylists())}),t._uU(12,"\n                "),t.TgZ(13,"mat-icon"),t._uU(14,"delete"),t.qZA(),t._uU(15,"\n                Delete all playlists\n            "),t.qZA(),t._uU(16,"\n        "),t.qZA()}if(2&l){const i=t.oxw(3);t.xp6(3),t.Oqu(i.migrationMessage)}}function lt(l,e){if(1&l){const i=t.EpF();t.TgZ(0,"mat-nav-list",3),t.NdJ("cdkDropListDropped",function(s){const I=t.CHM(i).ngIf,S=t.oxw(2);return t.KtG(S.drop(s,I))}),t._uU(1,"\n        "),t.YNc(2,tt,13,6,"mat-list-item",4),t._uU(3,"\n        "),t.YNc(4,nt,15,6,"mat-list-item",5),t._uU(5,"\n\n        "),t.YNc(6,et,1,1,"app-playlist-item",6),t._uU(7,"\n\n        "),t.YNc(8,it,17,1,"div",7),t._uU(9,"\n    "),t.qZA()}if(2&l){const i=e.ngIf,n=t.oxw(2);t.xp6(2),t.Q6J("ngIf",0===i.length),t.xp6(2),t.Q6J("ngIf",i.length>0),t.xp6(2),t.Q6J("ngForOf",i),t.xp6(2),t.Q6J("ngIf",n.isMigrationPossible)}}function at(l,e){if(1&l&&(t.ynx(0),t._uU(1,"\n    "),t.YNc(2,lt,10,4,"mat-nav-list",2),t.ALo(3,"async"),t._uU(4,"\n"),t.BQk()),2&l){const i=t.oxw();t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,i.playlists$))}}const ot=function(){return{width:"30%",height:"20px"}},st=function(){return{width:"50%",height:"10px"}};function ct(l,e){1&l&&(t.TgZ(0,"div",17),t._uU(1,"\n            "),t._UZ(2,"ngx-skeleton-loader",18),t._uU(3,"\n            "),t.TgZ(4,"div",19),t._uU(5,"\n                "),t._UZ(6,"ngx-skeleton-loader",20),t._uU(7,"\n                "),t._UZ(8,"ngx-skeleton-loader",20),t._uU(9,"\n            "),t.qZA(),t._uU(10,"\n            "),t.TgZ(11,"div",21),t._uU(12,"\n                "),t._UZ(13,"ngx-skeleton-loader",22),t._uU(14,"\n            "),t.qZA(),t._uU(15,"\n        "),t.qZA()),2&l&&(t.xp6(6),t.Q6J("theme",t.DdM(2,ot)),t.xp6(2),t.Q6J("theme",t.DdM(3,st)))}const rt=function(){return[]};function mt(l,e){1&l&&(t._uU(0,"\n    "),t.TgZ(1,"div",15),t._uU(2,"\n        "),t.YNc(3,ct,16,4,"div",16),t._uU(4,"\n    "),t.qZA(),t._uU(5,"\n")),2&l&&(t.xp6(3),t.Q6J("ngForOf",t.DdM(1,rt).constructor(10)))}class v{constructor(e,i,n,s,c,I,S,_t){this.dialog=e,this.dialogService=i,this.electronService=n,this.ngZone=s,this.router=c,this.snackBar=I,this.store=S,this.translate=_t,this.playlists$=this.store.select(g.Au).pipe((0,U.map)(_=>_.sort((pt,ut)=>pt.position-ut.position))),this.allPlaylistsLoaded$=this.store.select(g.fX),this.commandsList=[new a.I(f.KR,_=>{this.snackBar.open(_.message,null,{duration:2e3}),this.store.dispatch(p.CE({playlistId:_.playlist._id,playlist:_.playlist}))}),new a.I(f.gA,_=>{this.isMigrationPossible=_.result,this.migrationMessage=_.message||""}),new a.I(f.g1,_=>{this.store.dispatch(p.of({playlists:_.payload})),this.snackBar.open(`${_.payload.length} playlists were successfully migrated`,null,{duration:2e3})}),new a.I(f.CD,_=>{this.store.dispatch(p.Fe({playlists:_}))})],this.isMigrationPossible=!1,this.migrationMessage="",this.playlistClicked=new t.vpe}ngOnInit(){this.setRendererListeners(),this.electronService.isElectron&&this.electronService.sendIpcEvent(f.Xy)}setRendererListeners(){this.commandsList.forEach(e=>{this.electronService.isElectron&&this.electronService.listenOn(e.id,(i,n)=>this.ngZone.run(()=>e.callback(n)))})}openInfoDialog(e){this.dialog.open(L,{data:e})}drop(e,i){(0,A.bA)(i,e.previousIndex,e.currentIndex),this.store.dispatch(p.ye({positionUpdates:i.map((n,s)=>({id:n._id,changes:{position:s}}))}))}getPlaylist(e){this.router.navigate(["playlists",e]),this.playlistClicked.emit(e)}removeClicked(e){this.dialogService.openConfirmDialog({title:this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),message:this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),onConfirm:()=>this.removePlaylist(e)})}removePlaylist(e){this.store.dispatch(p.vg({playlistId:e}))}refreshPlaylist(e){this.electronService.sendIpcEvent(f.Q4,{id:e._id,title:e.title,...e.url?{url:e.url}:{filePath:e.filePath}})}migratePlaylists(){this.electronService.sendIpcEvent(f.Sc)}deleteMigratedPlaylists(){this.electronService.sendIpcEvent(f.M5)}ngOnDestroy(){this.electronService.isElectron&&this.commandsList.forEach(e=>this.electronService.removeAllListeners(e.id))}static#t=this.\u0275fac=function(i){return new(i||v)(t.Y36(h.uw),t.Y36(u.x),t.Y36(M.D),t.Y36(t.R0b),t.Y36(Q.F0),t.Y36(w.ux),t.Y36(k.yh),t.Y36(y.sK))};static#n=this.\u0275cmp=t.Xpm({type:v,selectors:[["app-recent-playlists"]],outputs:{playlistClicked:"playlistClicked"},decls:6,vars:4,consts:[[4,"ngIf","ngIfElse"],["skeletonView",""],["cdkDropList","",3,"cdkDropListDropped",4,"ngIf"],["cdkDropList","",3,"cdkDropListDropped"],[4,"ngIf"],[3,"click",4,"ngIf"],[3,"item","editPlaylistClicked","playlistClicked","refreshClicked","removeClicked",4,"ngFor","ngForOf"],["id","migration-container",4,"ngIf"],["mat-list-icon","",1,"favorites-icon"],["mat-line",""],["mat-line","",1,"meta"],[3,"click"],[3,"item","editPlaylistClicked","playlistClicked","refreshClicked","removeClicked"],["id","migration-container"],["mat-button","","color","accent",1,"migration-btn",3,"click"],["id","skeleton-container"],["class","skeleton-item",4,"ngFor","ngForOf"],[1,"skeleton-item"],["count","1","appearance","circle"],[1,"text"],["count","1",3,"theme"],[1,"actions"],["count","2","appearance","circle"]],template:function(i,n){if(1&i&&(t.YNc(0,at,5,3,"ng-container",0),t.ALo(1,"async"),t._uU(2,"\n\n"),t.YNc(3,mt,6,2,"ng-template",null,1,t.W1O),t._uU(5,"\n")),2&i){const s=t.MAs(4);t.Q6J("ngIf",t.lcZ(1,2,n.allPlaylistsLoaded$))("ngIfElse",s)}},dependencies:[r.sg,r.O5,T.lW,C.Hw,Z.Hk,Z.Tg,N.X2,Z.Nh,Y.d,A.Wj,j.xr,x,r.Ov,y.X$],styles:[".mat-list-base[_ngcontent-%COMP%]{padding-top:0}.meta[_ngcontent-%COMP%]{font-size:12px!important;color:#666;margin-top:2px!important}  .cdk-drag-preview .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit;width:100%;justify-content:space-between}  .cdk-drag-preview .mat-list-item-content .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding-left:16px}.favorites-icon[_ngcontent-%COMP%]{margin-left:16px}#skeleton-container[_ngcontent-%COMP%]{padding-top:10px}#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%]{display:flex;padding-left:25px;height:72px}#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex:1;align-self:center;padding-left:6px;flex-direction:column;display:flex}#migration-container[_ngcontent-%COMP%]{padding:10px;border:1px solid #999;border-radius:5px;margin:5px}#migration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:15px}#migration-container[_ngcontent-%COMP%]   .migration-btn[_ngcontent-%COMP%]{text-transform:uppercase}"]})}},95334:(b,P,o)=>{o.d(P,{x:()=>g});var A=o(4859),t=o(65412),U=o(89383),a=o(94650);class p{constructor(u){this.dialogData=u}static#t=this.\u0275fac=function(d){return new(d||p)(a.Y36(t.WI))};static#n=this.\u0275cmp=a.Xpm({type:p,selectors:[["ng-component"]],standalone:!0,features:[a.jDz],decls:18,vars:9,consts:[["mat-dialog-title",""],[1,"mat-typography"],["align","end"],["mat-flat-button","","color","accent",3,"mat-dialog-close"],["mat-button","","mat-dialog-close","","cdkFocusInitial","","color","accent"]],template:function(d,r){1&d&&(a._uU(0,"\n        "),a.TgZ(1,"h2",0),a._uU(2),a.qZA(),a._uU(3,"\n        "),a.TgZ(4,"mat-dialog-content",1),a._uU(5),a.qZA(),a._uU(6,"\n        "),a.TgZ(7,"mat-dialog-actions",2),a._uU(8,"\n            "),a.TgZ(9,"button",3),a._uU(10),a.ALo(11,"translate"),a.qZA(),a._uU(12,"\n            "),a.TgZ(13,"button",4),a._uU(14),a.ALo(15,"translate"),a.qZA(),a._uU(16,"\n        "),a.qZA(),a._uU(17,"\n    ")),2&d&&(a.xp6(2),a.hij("\n            ",r.dialogData.title,"\n        "),a.xp6(3),a.hij("\n            ",r.dialogData.message,"\n        "),a.xp6(4),a.Q6J("mat-dialog-close",!0),a.xp6(1),a.hij("\n                ",a.lcZ(11,5,(null==r.dialogData?null:r.dialogData.confirmLabel)||"YES"),"\n            "),a.xp6(4),a.hij("\n                ",a.lcZ(15,7,(null==r.dialogData?null:r.dialogData.cancelLabel)||"NO"),"\n            "))},dependencies:[A.ot,A.lW,t.Is,t.ZT,t.uh,t.xY,t.H8,U.aw,U.X$],encapsulation:2})}class g{constructor(u){this.dialog=u}openConfirmDialog(u){this.dialog.open(p,{data:u,width:"300px"}).afterClosed().subscribe(r=>r?u.onConfirm():null)}static#t=this.\u0275fac=function(d){return new(d||g)(a.LFG(t.uw))};static#n=this.\u0275prov=a.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}}}]);