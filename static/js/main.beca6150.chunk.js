(this.webpackJsonpstorymaker=this.webpackJsonpstorymaker||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){},50:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var a,o=n(5),c=n.n(o),s=n(26),r=n.n(s),i=(n(37),n(38),n(10)),h=n(14),d=n(16),l=n(12),u=n(30),p=n(21),m=function(t){return t[Math.floor(Math.random()*t.length)]},f=function(t){return t.replace(/^\w/,(function(t){return t.toUpperCase()}))},y=n(6),g=Object(d.withFilters)(d.Container,{bulge:u.a}),b=Object(d.withFilters)(d.Container,{matrix:p.a}),w={radius:200,strength:.5},v="rotate(".concat(40*Math.random()-20,"deg)"),j="rotate(".concat(40*Math.random()-20,"deg)"),k=[0,180,230],A=m(k),_=m(k),O=function(t){var e=600,n={width:e,height:e,options:{backgroundAlpha:0,antialias:!0}};return Object(y.jsx)("div",{className:"bauble ".concat(t.isLeadA?"lead-a":"lead-b"),style:{transform:t.isLeadA?v:j},children:Object(y.jsxs)(d.Stage,Object(h.a)(Object(h.a)({},n),{},{children:[Object(y.jsx)(b,{matrix:{enabled:!0},apply:function(e){return e.matrix.hue(t.isLeadA?A:_)},children:Object(y.jsx)(d.Sprite,{image:"".concat("/storymaker","/img/bauble.png"),anchor:.5,x:300,y:270})}),Object(y.jsx)(g,{bulge:w,children:Object(y.jsx)(d.Text,{text:t.name,anchor:.5,x:300,y:300,style:new l.d({align:"center",fontFamily:t.isLeadA?"'Comforter Brush', cursive":"'Great Vibes', cursive",fontSize:70,fontWeight:"400",fill:["#BF953F","#B38728"],padding:50})})})]}))})},B=(n(50),function(t){return Object(y.jsxs)("div",{className:"sides",children:[Object(y.jsx)(O,{name:t.story.leadA.name,isLeadA:!0}),Object(y.jsx)(O,{name:t.story.leadB.name,isLeadA:!1}),Object(y.jsx)("img",{className:"candycane",src:"".concat("/storymaker","/img/candycane.png")}),Object(y.jsx)("img",{className:"hotchoc",src:"".concat("/storymaker","/img/hotchoc.png")}),Object(y.jsx)("img",{className:"present1",src:"".concat("/storymaker","/img/present1.png")}),Object(y.jsx)("img",{className:"present2",src:"".concat("/storymaker","/img/present2.png")})]})}),S=function(t){return Object(y.jsx)("p",{children:t.text})},x=n(15);!function(t){t[t.DESTROY_THE_BUSINESS=0]="DESTROY_THE_BUSINESS",t[t.ENTER_THE_CONTEST=1]="ENTER_THE_CONTEST",t[t.SAVE_THE_BUSINESS=2]="SAVE_THE_BUSINESS"}(a||(a={}));var T=function(t){var e={second_interaction:[],start_drive:["".concat(t.leadA.name," goes back to ").concat(t.city,","),"to speak to ".concat(t.boss,", ").concat(t.leadA.pronoun3," boss at the ").concat(t.leadA.industry," firm.")],continue_drive:["In the spirit of Christmas, ".concat(t.boss," agrees to give the money needed,"),"and ".concat(t.leadA.name," returns to ").concat(t.town," to give the good news.")],low_point:["However, on ".concat(t.leadA.pronoun3," arrival,"),"".concat(t.leadB.name," informs ").concat(t.leadA.pronoun2," that ").concat(t.oldHelper," has fallen ill and requires an expensive operation."),"".concat(t.leadA.name," decides the money should go to ").concat(t.oldHelper,"'s medical bills,"),"leaving them back at square one."]};if(t.plot===a.SAVE_THE_BUSINESS){var n=["Because ".concat(t.leadA.pronoun1," heard the ").concat(t.shop," was going out of business,"),"and wanted to see if ".concat(t.leadA.pronoun1," could help save it,"),"because ".concat(t.leadA.pronoun1," always used to love it as a child.")];return[{second_interaction:n,start_drive:["".concat(t.leadA.name," returns to ").concat(t.city,","),"to speak to ".concat(t.boss,", ").concat(t.leadA.pronoun3," boss at the ").concat(t.leadA.industry," firm.")],continue_drive:["Initially ".concat(t.leadA.name," manages to convince ").concat(t.boss," of the charms of ").concat(t.town," and it's ").concat(t.shop,"."),"But they refuse to give the money needed to save it"],low_point:["".concat(t.leadA.name," quits on the spot, and returns to ").concat(t.town," empty handed.")]},{second_interaction:n,start_drive:["".concat(t.leadA.name," asks if there any local business people who could help fund the ").concat(t.shop,","),"".concat(t.oldHelper," says there is an old millionaire who lives just outside of town,"),"who made his money turning the local orphanage into ".concat(t.luxury,".")],continue_drive:["Filled with the spirit of Christmas, ".concat(t.leadA.name," and ").concat(t.leadB.name," go and visit the old man,"),"believing they can convince him to save the ".concat(t.shop,"."),"The old man is plesantly surprised, as he hasn't had guests in over 30 years."],low_point:["But as soon as ".concat(t.leadB.name," mentions the money,"),"he kicks them out, saying that he hates ".concat(t.town,", and all the local people.")]},{second_interaction:n,start_drive:["".concat(t.leadA.name," teaches ").concat(t.leadB.name," and ").concat(t.oldHelper," about raising money online."),"Being such small-town folk, they have never heard of such a thing,","but ".concat(t.leadA.name," is from ").concat(t.city,", so ").concat(t.leadA.pronoun1," understands how the modern world works.")],continue_drive:["He sets up a GoFundMe for them and goes to the press, using his contacts in the ".concat(t.leadA.industry," industry."),"The journalists agree to do a story on the plight of the ".concat(t.shop,".")],low_point:["But on the day the press was supposed to show up in ".concat(t.town,","),"a freak snowstorm hits ".concat(t.city,", and so the press goes there instead.")]},{second_interaction:n,start_drive:["".concat(t.leadA.name," and ").concat(t.leadB.name," decide to hold a raffle in the town square,"),"to raise money for the ".concat(t.shop,".")],continue_drive:["The townsfolk of ".concat(t.town," all come together to donate to donate prizes:"),"".concat(t.oldHelper," bakes a cake in shape of a snowman,"),"".concat(t.leadA.name," even manages to get some high-end gifts from ").concat(t.leadA.pronoun3," friends at the ").concat(t.leadA.industry," firm.")],low_point:["But just as the raffle is about to start,","".concat(t.cop," the grumpy local cop shows up,"),"and says they can't operate a raffle without a permit."]},Object(h.a)(Object(h.a)({},e),{},{second_interaction:n})]}if(t.plot===a.DESTROY_THE_BUSINESS){var o=["Because ".concat(t.leadA.pronoun3," ").concat(t.leadA.industry," company wants to buy out the ").concat(t.shop," when it goes under,"),"and turn it into ".concat(t.luxury,","),"and ".concat(t.leadA.pronoun1," is here to see if it's a good investment.")];return[{second_interaction:o,start_drive:["".concat(t.leadA.name," returns to ").concat(t.city,","),"to speak to ".concat(t.boss,", ").concat(t.leadA.pronoun3," boss at the ").concat(t.leadA.industry," firm.")],continue_drive:["".concat(t.leadA.name," tries to convince ").concat(t.boss," that buying the ").concat(t.town," ").concat(t.shop," would be a bad investment."),"".concat(t.boss," disagrees, and says they will demolish the ").concat(t.shop," next week")],low_point:["".concat(t.leadA.name," quits on the spot, and returns to ").concat(t.town," empty handed.")]},{second_interaction:o,start_drive:["".concat(t.leadA.name," decides to take the townsfolk of ").concat(t.town," to ").concat(t.city,"."),"They all pile into a minibus, and sing jolly Christmas songs the whole way there.","Old ".concat(t.oldHelper," even does a version of Last Christmas.")],continue_drive:["When the townsfolk of ".concat(t.town," arrive in ").concat(t.city,","),"".concat(t.leadA.name," takes them to the ").concat(t.leadA.industry," firm,"),'where they continue to sing and hold banners saving "Save our '.concat(t.shop,".")],low_point:["But ".concat(t.boss,", the boss of the ").concat(t.leadA.industry," business is not impressed,"),"and tells them that the ".concat(t.shop," is going to be turned into ").concat(t.luxury,","),"and there's nothing they can do about it."]},{second_interaction:o,start_drive:["".concat(t.leadA.name," returns to ").concat(t.city,","),"to sneak into the ".concat(t.leadA.industry," company's office,"),"and change their plans for the ".concat(t.shop,".")],continue_drive:["".concat(f(t.leadA.pronoun1)," uses ").concat(t.leadA.pronoun3," key card to get past security,"),"and finds the file in a filing cabinet."],low_point:["But just as ".concat(t.leadA.pronoun1," does so, the boss, ").concat(t.boss,", walks in."),"He says ".concat(t.leadA.name," needs to pack up ").concat(t.leadA.pronoun3," things."),"".concat(t.leadA.pronoun1,"'s fired.")]},{second_interaction:o,start_drive:["".concat(t.leadA.name," suggests throwing a good old-fashioned ").concat(t.contest," to raise funds."),"".concat(t.oldHelper," says there hasn't been one of those in ").concat(t.town," for years."),"".concat(t.leadB.name," likes the idea and offers to host it at the ").concat(t.shop,".")],continue_drive:["The next day, they excitedly get everything together for the traditional Christmas ".concat(t.contest," at the ").concat(t.shop,","),"but nobody shows up."],low_point:["They're too busy doing TikToks.","Has everyone forgotten the true meaning of Christmas?"]},Object(h.a)(Object(h.a)({},e),{},{second_interaction:o})]}var c=["".concat(f(t.leadA.pronoun1)," wants to enter the ").concat(t.shop,"'s ").concat(t.contest,","),"because it reminds ".concat(t.leadA.pronoun2," of ").concat(t.leadA.pronoun3," childhood."),"".concat(t.leadB.name," explains that there won't be a ").concat(t.contest,", because the ").concat(t.shop," can't afford to put it on,"),"and anyway, people just don't care about Christmas like they used to."];return[{second_interaction:c,start_drive:["".concat(t.leadA.name," convinces ").concat(t.leadB.name," they can raise the funds they need,"),"by having a special Christmas-themed sale at the ".concat(t.shop,","),"which will raise enough to save the business and hold the ".concat(t.contest," once again.")],continue_drive:["The people of ".concat(t.town," come together to raise the money,"),"united by the spirit of Christmas, everyone is preparing for the ".concat(t.contest,".")],low_point:["But the grumpy local cop, ".concat(t.cop,", shuts it down for not having the right permits.")]},{second_interaction:c,start_drive:["".concat(t.leadA.name," convinces ").concat(t.leadB.name," to contact ").concat(t.leadB.pronoun3," suppliers about sponsoring the contest."),"They go through a long list of suppliers for the ".concat(t.shop,","),"no luck."],continue_drive:["The last name on the list is a local millionaire who owns ".concat(t.luxury),"He agrees that his business can sponsor the ".concat(t.contest,".")],low_point:["But on the day of the contest, the sponsorship is pulled.","Because the millionaire's business has decided to restructure their marketing department,","and felt they wanted to go in another direction."]},{second_interaction:c,start_drive:["Cheekily, ".concat(t.oldHelper," says to ").concat(t.leadA.name),"if you're such a big shot in the ".concat(t.leadA.industry," game,"),"why don't you pay for the ".concat(t.contest,"?")],continue_drive:["".concat(t.leadA.name," laughs,"),"But ".concat(t.leadB.name," and ").concat(t.oldHelper," are looking at ").concat(t.leadA.pronoun2," straight."),"".concat(f(t.leadA.pronoun1)," agrees to fund the ").concat(t.contest,","),"and goes to the ".concat(t.town," Bank.")],low_point:["But as ".concat(t.leadA.pronoun1," tries to withdraw the cash,"),"".concat(t.leadA.pronoun3," card is swallowed by the machine,"),"because they suspect it might be fraud."]},{second_interaction:c,start_drive:["".concat(t.oldHelper," suggests they talk to ").concat(t.cop,", the cop."),"He may seem grumpy now, but they once went on a date in the 60s and he used to be nice."],continue_drive:["".concat(t.leadB.name," and ").concat(t.leadA.name," head down to the police station,"),"to ask ".concat(t.cop," if they could host the ").concat(t.contest," there.")],low_point:["".concat(t.oldHelper," was right."),"".concat(t.cop," is grumpy,"),"and says no right away.","And it's a good thing the ".concat(t.contest," isn't happening this year,"),"because it's no longer health and safety compliant."]},Object(h.a)(Object(h.a)({},e),{},{second_interaction:c})]},E=function(t){var e=["".concat(t.leadB.name," and ").concat(t.leadA.name," setup a tinsel-topped jar for people to leave donations,"),"under the big Christmas tree in the centre of ".concat(t.town,"."),"...","At first they only recieve a few small bills,","but one morning ".concat(t.leadA.name," goes to check the jar and cannot believe it,"),"Someone has left a cheque for all they money they need.","".concat(t.leadA.pronoun1," starts screaming, and the whole town comes rushing over."),"Who could it be from?"],n=[].concat(e,["Then, out of the crowd, emerges ".concat(t.oldHelper," sporting a top hat and a cane.")]),o=[].concat(e,["".concat(t.leadA.name," looks into the crowd,"),"".concat(t.leadA.pronoun1," can just make out a large figure walking away,"),"wearing a red suit."]);if(t.plot===a.SAVE_THE_BUSINESS){var c="raise the funds to save the ".concat(t.shop,",");return[{setup:c,final_push:["".concat(t.leadB.name," and ").concat(t.leadA.name," decide to put on Christmas talent show,"),"everyone from ".concat(t.town," attends the magical night,"),"where the townspeople show off their quirky talents.","Even the grumpy local cop, ".concat(t.cop,", who plays the piano,"),"and old ".concat(t.oldHelper,", who dances a jig."),"At the end of the night, ".concat(t.leadB.name," and ").concat(t.leadA.name," have saved enough money to keep the ").concat(t.shop," in business.")]},{setup:c,final_push:["".concat(t.leadA.name," suggests they have a traditional Christmas ").concat(t.contest,","),"".concat(t.leadB.name," and ").concat(t.oldHelper," say there hasn't been one in ").concat(t.town," for years."),"The ".concat(t.contest," brings the the people of ").concat(t.town," together,"),"and helps rememember the true spirit of Christmas.","At the end of the night, ".concat(t.leadB.name," and ").concat(t.leadA.name," have saved enough money to keep the ").concat(t.shop," in business.")]},{setup:c,final_push:["".concat(t.leadA.name," hires a minibus and takes all the townsfolk of ").concat(t.town," back to ").concat(t.city,"."),"They arrive outside the house of ".concat(t.boss,", ").concat(t.leadA.name,"'s boss at the ").concat(t.leadA.industry," company,"),"and start singing Christmas carols.","".concat(t.boss," is so overcome with the spirit of Christmas,"),"that he writes a cheque on the spot, enough to save the ".concat(t.shop,".")]},{setup:c,final_push:o},{setup:c,final_push:n}]}if(t.plot===a.DESTROY_THE_BUSINESS){var s="protect the ".concat(t.shop,",");return[{setup:s,final_push:["As the bulldozers arrive,","".concat(t.leadB.name,", ").concat(t.leadA.name," and the people of ").concat(t.town," sing Christmas carols outside the ").concat(t.shop,","),"Even the grumpy local cop, ".concat(t.cop,"."),"".concat(t.boss,", ").concat(t.leadA.name,"'s boss from the ").concat(t.leadA.industry," company jumps down from one of the bulldozers smoking a cigar."),"Overwhelmed by the spirit of Christmas in the town,","the demolition is called off,","and he agrees to give ".concat(t.leadB.name," and ").concat(t.leadA.name," the money they need to keep the ").concat(t.shop," in business.")]},{setup:s,final_push:["".concat(t.oldHelper," suggests they hit the old library to come up with some ideas."),"".concat(t.leadB.name," and ").concat(t.leadA.name," stay up all night looking for inspiration from the books,"),"Suddenly, ".concat(t.leadA.name," looks up at old black and white photograph of the ").concat(t.shop," on the wall,"),"and notices something.","".concat(f(t.leadA.pronoun1)," spreads a large map over the table and calls over ").concat(t.leadB.name,"."),"The ".concat(t.shop," falls into the boundries of a national park,"),"and so is protected by law from being demolished."]},{setup:s,final_push:["As the bulldozers roll in to demolish the ".concat(t.shop,","),"".concat(t.leadA.name,", ").concat(t.leadB.name," and ").concat(t.oldHelper," sit on the ground in front of it."),"".concat(t.cop,", the grumpy local cop, tells them that they need to move on."),"...","Just as they are about to move, a stretch limousine pulls up,","and out steps a fiery Southern lawyer, wearing a red suit and with a white beard.","He has a piece of paper that shows legally the land belons to the people of ".concat(t.town,"."),"".concat(t.boss,", ").concat(t.leadA.name,"'s boss at the ").concat(t.leadA.industry," company is furious,"),"but ".concat(t.cop," agrees the document is legally binding, and the demolition is called off.")]},{setup:s,final_push:["As the bulldozers roll in to demolish the ".concat(t.shop,","),"".concat(t.leadA.name,", ").concat(t.leadB.name," and ").concat(t.oldHelper," desperately look on."),"But then ".concat(t.cop,", the grumpy local cop, who usually hates Christmas,"),"pulls up in front of the bulldozers to block them,","saying that it's not in the spirit of Christmas.","".concat(t.boss,", ").concat(t.leadA.name,"'s boss at the ").concat(t.leadA.industry," company jumps down from one of the bulldozers,"),"realises the error of his ways, and agrees to donate to the ".concat(t.shop," instead of demolishing it.")]},{setup:s,final_push:n}]}var r="find the money needed to hold the ".concat(t.contest,","),i=["".concat(t.leadA.name," wins the contest as ").concat(t.leadA.pronoun1," came to do,"),"but more importantly everyone has fun."];return[{setup:"hold the ".concat(t.contest," anyway,"),final_push:["The ".concat(t.contest," goes ahead, and everyone in ").concat(t.town," attends."),"Just as they are getting started, ".concat(t.cop," and the other cops show up to call it off."),"However, when they see the Christmas spirit of the whole town,","they decide to let it go ahead anyway.","..."].concat(i)},{setup:"forget the expensive ".concat(t.contest,", and just have a good old fashion snowman building contest,"),final_push:["".concat(t.leadA.name," and ").concat(t.leadB.name," love the idea."),"The whole town of ".concat(t.town," attends the snowman building contest,"),"it turns out they don't need a fancy ".concat(t.contest," to remember the true spirit of Christmas."),"..."].concat(i)},{setup:r,final_push:["".concat(t.leadA.name," volunteers to be put into the old stocks in the town centre,"),"and charges people to throw snowballs at ".concat(t.leadA.pronoun2,"."),"The people of ".concat(t.town," absolutely love the idea,"),"and are soon taking it it turns in the stocks.","Even ".concat(t.cop,", the grumpy local cop has a go, and proves particularly popular."),"Enough money is raised to put on the ".concat(t.contest,"."),"..."].concat(i)},{setup:r,final_push:[].concat(Object(x.a)(o),["..."],i)},{setup:r,final_push:[].concat(Object(x.a)(n),["..."],i)}]},H=function(t){return t.plot===a.SAVE_THE_BUSINESS?{inciting_incident:"to save the local ".concat(t.shop)}:t.plot===a.DESTROY_THE_BUSINESS?{inciting_incident:"to demolish the local ".concat(t.shop)}:{inciting_incident:"to enter the ".concat(t.shop,"'s annual ").concat(t.contest)}},C=function(t){var e=H(t),n=function(t){return m(T(t))}(t),a=function(t){return m(E(t))}(t);if(e&&n&&a)return["- Act I -","Meet ".concat(t.leadA.name,". ").concat(f(t.leadA.pronoun1),"'s a high-flyer in the ").concat(t.leadA.industry," industry in ").concat(t.city,"."),"".concat(f(t.leadA.pronoun1)," works really long hours to make the big bucks, and so has no time for a relationship."),"This year, in early December, ".concat(t.leadA.pronoun1," needs to return to ").concat(t.leadA.pronoun3," small home-town of ").concat(t.town,","),"".concat(e.inciting_incident,"."),"...","".concat(t.leadB.name," never left ").concat(t.town,","),"after ".concat(t.leadB.pronoun1," inherited the ").concat(t.shop," from ").concat(t.leadB.pronoun3," parents, who died ").concat(t.accident,"."),"Christmas has always been special for ".concat(t.leadB.name,", because it reminds ").concat(t.leadB.pronoun2," of them."),"The ".concat(t.shop," is not doing well financially,"),"".concat(t.leadB.name," explains this to ").concat(t.leadB.pronoun3," only employee, ").concat(t.oldHelper,", an old friend of ").concat(t.leadB.pronoun3," parents."),"...","".concat(t.leadA.name," arrives back in ").concat(t.town," and is instantly shocked at how friendly everyone is compared to ").concat(t.city,"."),"In ".concat(t.leadA.pronoun3," first night in town, ").concat(t.meetCute),"They get in a big argument, exchange insults, and ".concat(t.leadB.name," calls ").concat(t.leadA.name," rude."),"...","- Act II -","The following morning, ".concat(t.leadA.name," arrives at the ").concat(t.shop," and ").concat(t.leadB.name," is surprised and angry."),"".concat(t.leadA.name," explains why ").concat(t.leadA.pronoun1," is here:")].concat(Object(x.a)(n.second_interaction),["...","That evening, despite being low on funds, ".concat(t.leadB.name," ").concat(t.heartWarmer," at the ").concat(t.shop,"."),"Everyone in ".concat(t.town," attends, including ").concat(t.leadA.name,", and the place is filled with Christmas spirit."),"..."],Object(x.a)(n.start_drive),["..."],Object(x.a)(n.continue_drive),["..."],Object(x.a)(n.low_point),["...","- Act III -","".concat(t.oldHelper," convinces ").concat(t.leadB.name," and ").concat(t.leadA.name," that they should ").concat(a.setup),"it's what ".concat(t.leadB.pronoun3," parents would have wanted."),"..."],Object(x.a)(a.final_push),["...","".concat(t.leadB.name," and ").concat(t.leadA.name," are both ecstatic"),"They realise they are in love, and have been all along.","They kiss.","- THE END -"])},N=n(23),I=n.n(N),q=n(31),M=function(t,e){var n=["".concat(t.name," accidentally kicks ").concat(e.name,"'s dog."),"".concat(t.name," takes taxi that ").concat(e.name," had hailed."),"".concat(t.name," bumps into ").concat(e.name," as ").concat(t.pronoun1," enters the coffee shop while on ").concat(t.pronoun3," phone."),"".concat(t.name," steals ").concat(e.name,"'s parking spot."),"".concat(t.name," spills hot chocolate all over ").concat(e.name,"."),"".concat(t.name," drops ").concat(t.pronoun3," wallet and they both bend down to pick it up, clashing heads."),"".concat(t.name," opens ").concat(t.pronoun3," car door without looking at it smacks into ").concat(e.name," as ").concat(e.pronoun1," cycle past."),"".concat(t.name," takes ").concat(e.name,"'s seat on the train."),"".concat(t.name," ignores ").concat(e.name,"'s plea to hold the lift door open."),"".concat(t.name," kicks football into ").concat(e.name,"'s head while playing five-a-side."),"As ".concat(e.name," is jogging in the park, ").concat(t.name," sprints past ").concat(e.pronoun2," too close causing ").concat(e.name," to fall into the pond."),"".concat(t.name," bumps ").concat(t.pronoun3," shopping trolley into ").concat(e.name,"'s."),"".concat(t.name," pushes ahead of ").concat(e.name," in the supermarket queue."),"".concat(t.name," orders before ").concat(e.name," at the bar."),"".concat(t.name," chooses the tree ").concat(e.name," was about to go for at the tree farm."),"".concat(t.name," catches ").concat(e.name,"'s scarf in the door by shutting it too quick."),"".concat(t.name," slips on icy pavement, knocking over ").concat(e.name,"."),"".concat(t.name," pays more than the sticker price for the last toy at a toyshop, leaving ").concat(e.name," empty handed."),"".concat(t.name," changes the song in the diner, it was ").concat(e.name,"'s favourite."),"".concat(t.name," won't let ").concat(e.name," jump the toilet queue even though ").concat(e.pronoun1,"'s desperate to go."),"".concat(t.name," won't give money to a busker even though ").concat(t.pronoun1," clearly have loads and the busker is ").concat(e.name,"'s friend."),"".concat(t.name," won't take a flyer from ").concat(e.name," and just walks right past ").concat(e.pronoun2,"."),"".concat(t.name," hits ").concat(e.name," with a newspaper as they try to swat a fly."),"".concat(t.name," writes ").concat(t.pronoun3," name with pee in the snow on ").concat(e.name,"'s drive."),"".concat(t.name," throws a snowball which hits ").concat(e.name," in the face."),"".concat(t.name," buys all the mince pies in the shop just as ").concat(e.name," arrives to buy some."),"".concat(t.name," knocks over ").concat(e.name,"'s snowman with ").concat(t.pronoun3," car."),"".concat(t.name," and ").concat(e.name," both go for the last can of cranberry sauce on the supermarket shelf."),"".concat(t.name," crashes ").concat(t.pronoun3," shopping trolley into ").concat(e.name,"'s."),"".concat(t.name," puts ").concat(t.pronoun3," hand out to hail a cab and accidentally punches ").concat(e.name," in the face."),"".concat(t.name," kneels to tie ").concat(t.pronoun3," shoe and ").concat(e.name," trips over them."),"".concat(t.name," almost runs ").concat(e.name," over because ").concat(t.pronoun1," was looking at ").concat(t.pronoun3," phone."),"".concat(t.name," gets the last pastry in the bakery, which ").concat(e.name," was looking forward to all day."),"".concat(t.name," hits a baseball through ").concat(e.name,"'s window."),"".concat(t.name," picks up ").concat(e.name,"'s phone from the coffee shop table by mistake."),"".concat(t.name," takes a shortcut and tramples through ").concat(e.name,"'s flower bed."),"".concat(t.name," picks up ").concat(e.name,"'s tab when ").concat(e.name," can't afford to pay for a drink."),"".concat(t.name," makes fun of ").concat(e.name,"'s badly decorated tree."),"".concat(t.name," loses control of ").concat(t.pronoun3," scooter and crashes into ").concat(e.name,"'s car."),"".concat(t.name," crashes into ").concat(e.name," while trying to do an ice-skating trick."),"".concat(e.name," accidentally drops ").concat(e.pronoun3," shopping bag in the road and ").concat(t.name," runs over it.")];return n[Math.floor(Math.random()*n.length)]},U=function(){var t=Object(o.useState)(null),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)(""),s=Object(i.a)(c,2),r=s[0],h=s[1],d=Object(o.useState)(),l=Object(i.a)(d,2),u=l[0],p=l[1],f=Object(o.useState)(),y=Object(i.a)(f,2),g=y[0],b=y[1],w=Object(o.useState)(""),v=Object(i.a)(w,2),j=v[0],k=v[1],A=Object(o.useState)(""),_=Object(i.a)(A,2),O=_[0],B=_[1],S=Object(o.useState)(""),x=Object(i.a)(S,2),T=x[0],E=x[1],H=Object(o.useState)(""),C=Object(i.a)(H,2),N=C[0],U=C[1],z=Object(o.useState)(""),F=Object(i.a)(z,2),D=F[0],L=F[1],R=Object(o.useState)(""),V=Object(i.a)(R,2),W=V[0],Y=V[1],J=Object(o.useState)(""),G=Object(i.a)(J,2),K=G[0],P=G[1],Q=Object(o.useState)(""),X=Object(i.a)(Q,2),Z=X[0],$=X[1],tt=Object(o.useState)(""),et=Object(i.a)(tt,2),nt=et[0],at=et[1],ot=function(){var t=Object(q.a)(I.a.mark((function t(e){var n,a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(o.useEffect)((function(){ct(),st(),rt(),it(),ht(),dt(),lt(),ut(),pt(),mt(),ft()}),[]),Object(o.useEffect)((function(){if(u&&g&&O&&j&&r&&D&&Z&&nt){var t={leadA:u,leadB:g,town:O,city:j,contest:r,oldHelper:D,cop:W,boss:K,shop:T,luxury:N,accident:Z,heartWarmer:nt,meetCute:M(u,g),plot:m([0,1,2])};a(t)}}),[u,g,O,j,r,D,Z,nt]);var ct=function(){var t=1===m([1,2]);ot("".concat("/storymaker","/data/").concat(t?"food":"objects",".json")).then((function(e){var n=m(e.words).word,a=m(t?["eating","cooking"]:["making","throwing","sculpting"]);h("".concat(n," ").concat(a," contest"))}))},st=function(){var t=1===m([1,2]);ot("".concat("/storymaker","/data/").concat(t?"m":"f","-names.json")).then((function(e){ot("".concat("/storymaker","/data/industries.json")).then((function(n){var a={name:m(e.names).name,pronoun1:t?"he":"she",pronoun2:t?"him":"her",pronoun3:t?"his":"her",industry:m(n.words).word};p(a),ot("".concat("/storymaker","/data/").concat(t?"f":"m","-names.json")).then((function(e){var n={name:m(e.names).name,pronoun1:t?"she":"he",pronoun2:t?"her":"him",pronoun3:t?"her":"his"};b(n)}))}))}))},rt=function(){ot("".concat("/storymaker","/data/objects.json")).then((function(t){var e=m(t.words).word;E("".concat(e," shop"))}))},it=function(){ot("".concat("/storymaker","/data/luxury.json")).then((function(t){var e=m(t.words).word;U("".concat(e))}))},ht=function(){ot("".concat("/storymaker","/data/cities.json")).then((function(t){var e=m(t.cities);k(e.city)}))},dt=function(){ot("".concat("/storymaker","/data/towns.json")).then((function(t){var e=m(t.towns);B(e.town)}))},lt=function(){var t=0===m([0,1]);ot("".concat("/storymaker","/data/").concat(t?"m":"f","-names.json")).then((function(t){L(m(t.names).name)}))},ut=function(){ot("".concat("/storymaker","/data/surnames.json")).then((function(t){Y("Chief ".concat(m(t.names).name))}))},pt=function(){ot("".concat("/storymaker","/data/surnames.json")).then((function(t){P("Mr. ".concat(m(t.names).name))}))},mt=function(){ot("".concat("/storymaker","/data/transport.json")).then((function(t){var e=m(t.words).word;$("in a tragic ".concat(e," accident"))}))},ft=function(){ot("".concat("/storymaker","/data/heart-warmer-adj.json")).then((function(t){var e=m(t.words).word;ot("".concat("/storymaker","/data/heart-warmer-nouns.json")).then((function(t){var n=m(t.words).word;at("".concat(m(["feeds","gives presents to"])," ").concat(e," ").concat(n))}))}))};return n},z=function(){var t=Object(o.useState)([]),e=Object(i.a)(t,2),n=e[0],a=e[1],c=Object(o.useState)(0),s=Object(i.a)(c,2),r=s[0],h=s[1],d=U();return Object(o.useEffect)((function(){if(d){var t=C(d);t&&a(t)}}),[d]),d?Object(y.jsxs)("div",{className:"page-wrapper",children:[Object(y.jsx)("div",{children:n.map((function(t,e){if(e<=r)return Object(y.jsx)(S,{text:t},e)}))}),Object(y.jsx)("button",{onClick:function(){h(r+1),setTimeout((function(){window.scrollTo({top:document.body.clientHeight,behavior:"smooth"})}),100)},children:"Next"}),Object(y.jsx)(B,{story:d})]}):Object(y.jsx)(y.Fragment,{})},F=n(32),D=n.n(F),L=function(){return Object(o.useEffect)((function(){D.a.load({google:{families:["Comforter Brush","Great Vibes"]}})}),[]),Object(y.jsx)("div",{className:"page",style:{backgroundImage:'url("'.concat("/storymaker",'/img/wood.jpg")')},children:Object(y.jsxs)("div",{className:"wrapper",children:[Object(y.jsx)("div",{className:"top",children:Object(y.jsx)("img",{src:"".concat("/storymaker","/img/paper_top.png")})}),Object(y.jsxs)("div",{className:"content",style:{backgroundImage:'url("'.concat("/storymaker",'/img/paper_body.png")')},children:[Object(y.jsx)("header",{children:Object(y.jsx)("h1",{children:"Story Maker"})}),Object(y.jsx)("main",{children:Object(y.jsx)(z,{})})]})]})})};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(L,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.beca6150.chunk.js.map