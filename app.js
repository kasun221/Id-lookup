let DATA=[];
let MAP=new Map();
let ELDERLY=[];
const ELDERLY_FALLBACK=[{"hh":"HH-2-1-09-02-015-00271","name":"N G Samanpala","nic":"193804300649","address":"02, ELLEKADE, VILANAGAMA","no":1,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00007","name":"Petikirige Sujatha Peiris","nic":"537620480V","address":"88/25/03, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":2,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00010","name":"Pansala Watte Ukku Amma","nic":"406820302V","address":"SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":3,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00014","name":"Welayudam Kaliamma","nic":"527763703X","address":"88/23, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":4,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00014","name":"Mahagedara Piyasena","nic":"532545161V","address":"88/23, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":5,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00015","name":"Sangudewar Wellasami","nic":"453512053X","address":"54/3, SIR RICHARD ALUWIHARE MAWATHA, THAMARAWALLIYA, MATALE","no":6,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00020","name":"Nambideewan Leela","nic":"195659610108","address":"THAMARAWALLIYA, ALUWIHARE, MATALE","no":7,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00026","name":"Thalawinne Gedara Ranbanda","nic":"432990486V","address":"943, ALUWIHARE, MATALE","no":8,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00040","name":"Jayasingha Gedara Chandrawathi Jayasingha","nic":"446013629V","address":"58, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":9,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00042","name":"Subramaniyam Muttu Lechchami","nic":"465681840V","address":"1094/6, ALUWIHARE, MATALE","no":10,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00055","name":"Mawalage Gunawathi Weerasingha","nic":"536839038V","address":"120/15 G, JAYAWARDHANA MAWATHA, ALUWIHARE, MATALE","no":11,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00059","name":"Herath Mudiyanselage Aluthwalawwe Wishaka Kumarihami Thalagune","nic":"195079510020","address":"88/8, ALUWIHARE, MATALE","no":12,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00061","name":"Vairavan Letchumi","nic":"195057110056","address":"164/2, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":13,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00070","name":"Kengan Ramayya","nic":"550771934V","address":"161/1, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":14,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00081","name":"PALANIYAMMA SUPPAYYA","nic":"435901271X","address":"110/4, NIKAKOTUWA, ALUWIHARE, MATALE","no":15,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00087","name":"Herath Mudiyanselage Desanayake","nic":"491621745V","address":"120/13 D, RATHANASARA MAWATHA, ALUWIHARE, MATALE","no":16,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00094","name":"Sebasthiyan Sinnappan","nic":"194620003412","address":"88/10/2, SARANANKARA ROAD, ALUWIHARE, MATALE","no":17,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00094","name":"Sivanu Mariyal","nic":"527004292X","address":"88/10/2, SARANANKARA ROAD, ALUWIHARE, MATALE","no":18,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00095","name":"Sidamparam Rukmani","nic":"508032307V","address":"347/7, VIDUHAL MAWATHA, ALUWIHARE","no":19,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00103","name":"MEDAGEDARA NANDAWATHI","nic":"486132418V","address":"122, NIKAKOTUWA, ALUWIHARE, MATALE","no":20,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00109","name":"Jamaaldeen Fareeda Umma","nic":"566783339V","address":"1028, ALUWIHARAYA, MATALE","no":21,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00214","name":"Sandanam Pakyam","nic":"566452820V","address":"110/1 A, SAMANDAWA RD, ALUWIHARAYA, MATALE","no":22,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00108","name":"MADASAMI ANNA PAKKIYAM","nic":"488323580X","address":"171, 2ND LANE, ALUWIHARE, MATALE","no":23,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00109","name":"Gammamhale Gedara Jeinul Arbdeen Thadujeen","nic":"523100971V","address":"1028, ALUWIHARE, MATALE","no":24,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00115","name":"Rathnayaka Mudiyanselage Senavirathna Banda","nic":"490355154V","address":"SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":25,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00122","name":"WEERAB KALIAMMA","nic":"455452465V","address":"24, NIKAKOTUWA ROAD, ALUWIHARE, MATALE","no":26,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00131","name":"Kulugammana Gedara Dayawathi","nic":"506962692V","address":"120/14/A, SAMANDAWA ROAD, ALUWIHARE, MATALE","no":27,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00133","name":"Thennakoon Mudiyansela Wimalawathi","nic":"498412998V","address":"345/5, PASAL ROAD, ALUWIHARE, MATALE","no":28,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00136","name":"Juwanisge Pemawathi Hewath Pingahawatte Gedara Indrani","nic":"195568702406","address":"87/7 E, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":29,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00142","name":"Edirisingha Arachchilage Anulawathi","nic":"486533064V","address":"120/3, SAMANDAWA ROAD, ALUWIHARE, MATALE","no":30,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00150","name":"KARUNAPEDI GEDARA PREMAWATHI","nic":"536852913V","address":"159, DIKKIRIYA ROAD, ALUWIHARE, MATALE","no":31,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00150","name":"KADAWATH PEDI GEDARA JAYARATHNA","nic":"531973089V","address":"159, DIKKIRIYA ROAD, ALUWIHARE, MATALE","no":32,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00154","name":"Koongaha Gedara Weerasooriya","nic":"511972043V","address":"68/6, SADUN UYANA, SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":33,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00161","name":"Bokaragodage Karalaine","nic":"485322450V","address":"76, CIRCULAR ROAD, ALUWIHARE, MATALE","no":34,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00162","name":"Yatinuwara Gedara Bandara","nic":"194803310113","address":"88/10, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":35,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00166","name":"Pansalawatte Gedara Punchwathi","nic":"527063299V","address":"40/20, CIRCULAR ROAD, ALUWIHARE, MATALE","no":36,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00169","name":"Rengasami Kamalam","nic":"465572418V","address":"162, THAMARAWALLIYA, ALUWIHARE, MATALE","no":37,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00172","name":"Mayadunnage Sunethra Wejerathna","nic":"566030985V","address":"220/13 A, RATHANASARA MAWATHA, SAMANDAWA, ALUWIHARE, MATALE","no":38,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00174","name":"Suppayya Indrani","nic":"546912639X","address":"14, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":39,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00174","name":"Karupayya Muttaiya Ponnayya","nic":"441152060V","address":"14, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":40,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00176","name":"Herath Mudiyanselage Yasomanike","nic":"525931641V","address":"88/26/1, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":41,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00177","name":"Paingamuwe Geeja Ariyawathi","nic":"195171210092","address":"133/1 C, SRI SUMANGALA MAWATHA, ALUWIHARE, MATALE","no":42,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00178","name":"Dewasinghage Gnanarathna Deewasingha","nic":"195212210123","address":"120/14, SAMANDAWA RD, ALUWIHARE, MATALE","no":43,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00179","name":"Seelawathi Desanayake","nic":"438480730V","address":"120/07, SAMANDAWA ROAD, ALUWIHARE, MATALE","no":44,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00181","name":"Herath Mudiyanselage Kulawathi Manike","nic":"487432283V","address":"139/6, PASAL MAWATHA, ALUWIHARE, MATALE","no":45,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00184","name":"Gangalawalawwe Miuriyal Aluvihare","nic":"526561228V","address":"8, ALUWIHARE, MATALE","no":46,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00189","name":"Delpe Arachchige Gunawathi","nic":"477411673V","address":"123, THAWALAMPITIYA WATTA, ALUWIHARE, MATALE","no":47,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00190","name":"Sandanam Gurunadan","nic":"194923902081","address":"164, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":48,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00191","name":"Raman Karupayya Krishnasami","nic":"452702037X","address":"164, SIR RICHARD ALUWIHARE MAWATHA, THAMARAWALLIYA, ALUWIHARE, MATALE","no":49,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00191","name":"Wellasami Govindasami Rajamani","nic":"195172903636","address":"164, SIR RICHARD ALUWIHARE MAWATHA, THAMARAWALLIYA, ALUWIHARE, MATALE","no":50,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00193","name":"Muttai Allimuttu Chithra","nic":"516372060X","address":"161/11, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":51,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00202","name":"Sinnayya Wejeylechchami","nic":"555902859V","address":"SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":52,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00204","name":"Sinnayya Malani","nic":"194258110068","address":"162/2, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":53,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00208","name":"Tikiriilage Watte Gedara Sirisena","nic":"561114811V","address":"88/1488/14, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":54,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00215","name":"Rajapaksha Pathiranage Sudarma","nic":"457960808V","address":"39, ALUWIHARE, MATALE","no":55,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00215","name":"Hettikankanamge Charls Perera","nic":"402100982V","address":"39, ALUWIHARE, MATALE","no":56,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00216","name":"Rajapaksha Pathiranage Wemala","nic":"477994199V","address":"88, SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":57,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00216","name":"Jayasingha Arachige Athar Perera","nic":"490122338V","address":"88, SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":58,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00222","name":"Palle Walawwe Ayarin Aluvihare","nic":"335723734V","address":"14/4, DELWITA WALAWWA, ALUWIHARE, MATALE","no":59,"allowance_no":""},{"hh":"HH-2-2-18-04-130-00102","name":"Maslamani Mani","nic":"556838542V","address":"No. 837/01","no":60,"allowance_no":""},{"hh":"","name":"Muththuwelasam Mudithal Nena","nic":"508832115V","address":"H 125, PANAPURA, THALAGASPITIYA","no":61,"allowance_no":""},{"hh":"","name":"Rathnayake Mudiyanselage Walpole Gedara Pathir...yake","nic":"5405911990","address":"No. 113","no":62,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00235","name":"Thumpana Kumbure Gedara Magrat Nona","nic":"486482435V","address":"120/15C, JAYAWARDANA MAWATHA, ALUWIHARE, MATALE","no":63,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00248","name":"Thangaraja Pushparani","nic":"547301730V","address":"101, DEEWILLA ROAD, ALUWIHARE, MATALE","no":64,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00249","name":"Dasanayake Mudiyanselage Podi Manike","nic":"485990623V","address":"62/1, SIR RICHARD ALUWIHARE MAWATHA, ALUWIHARE, MATALE","no":65,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00253","name":"Rathnayaka Mudiyanselage Lalitha Podimanike","nic":"556322538V","address":"120/13, SAMANDAWA ROAD, ALUWIHARE, MATALE","no":66,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00260","name":"Vishwalingam Lechchami","nic":"497652855V","address":"ALUWIHARE, MATALE","no":67,"allowance_no":""},{"hh":"","name":"R. Leelawathi","nic":"435102824X","address":"91, SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":68,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00265","name":"Delgahawatte Gedara Somawathi","nic":"486062827V","address":"116, BEERIDEWALA ROAD, ALUWIHARE, MATALE","no":69,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00272","name":"Subramaniyam Sundarambigei","nic":"525593380V","address":"SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":70,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00274","name":"Migammana Gedara Abeerathna","nic":"500441151V","address":"1038/5, SRI SUMANGALA MAWATHA, ALUWIHARE, MATALE","no":71,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00275","name":"Sangu Ramachandran","nic":"500403209V","address":"156/08, NIKKAKOTUWAWATTE, ALUWIHARE, MATALE","no":72,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00275","name":"MARIMUTHTHU MURUGAI","nic":"468421658X","address":"156/08, NIKKAKOTUWAWATTE, ALUWIHARE, MATALE","no":73,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00276","name":"Mohedeen Adumei Ummu Saida","nic":"195581002330","address":"985/05, TRINCOMALEE STREET, MATALE","no":74,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00276","name":"Segu Abdhul Kaadar Sipardeen","nic":"195203301492","address":"985/05, TRINCOMALEE STREET, MATALE","no":75,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00278","name":"Disanayaka Mudiyanselage Bandara Manike","nic":"407941136V","address":"30/8, ALUWIHARE, MATALE","no":76,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00279","name":"Hondaran Gedara Premawathi","nic":"405621096V","address":"119/6, NIKAKOTUWA WATHTHA, ALUWIHARE, MATALE","no":77,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00283","name":"Panchawatte Gedara Kiree","nic":"397231569V","address":"SRI SARANANKARA MAWATHA, ALUWIHARE, MATALE","no":78,"allowance_no":""},{"hh":"","name":"Madagedara Ariyadada","nic":"511480833V","address":"133/1 A, SRI SUMANGALA MAWATHA, ALUWIHARE, MATALE","no":79,"allowance_no":""},{"hh":"","name":"Yhele Gedara Anulawathi","nic":"195110103446","address":"20, SAMANDAWA, ALUVIHARAYA, MATALE","no":80,"allowance_no":""},{"hh":"","name":"Mudiyanselage Gedara Jeewarathna","nic":"194701700778","address":"20, SAMANDAWA, ALUVIHARAYA, MATALE","no":81,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00302","name":"Wimala Liyanage","nic":"485630856V","address":"156/1, 1ST LANE, ALUWIHARE, MATALE","no":82,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00304","name":"Rathnayake Mudiyanselage Rabel Pathmasiri","nic":"441274254V","address":"870, ALUWIHARE, MATALE","no":83,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00306","name":"Udawatte Gedara Siriwardana","nic":"451702416V","address":"14/2, ELADIN RD, MANDANDAWELA, MATALE","no":84,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00307","name":"Arumugam Ponnamma","nic":"535333807V","address":"120/15, JAYAWARDANA RD, ALUWIHARE, MATALE","no":85,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00308","name":"Mohedeen Pichei Kadeeja","nic":"338090889V","address":"1006, ALUWIHARE, MATALE","no":86,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00310","name":"Karuppana Abdul Rahuman","nic":"195311802421","address":"18/2, DIVILLA RD, ALUWIHARE, MATALE","no":87,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00311","name":"Wanigaseekara Wasala Bandaranayaka Mudiyanselage Damayantha Aluvihare","nic":"505771893V","address":"30/6, ALUWIHARE, MATALE","no":88,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00311","name":"Rambanda Abekoon","nic":"501490440V","address":"30/6, ALUWIHARE, MATALE","no":89,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00314","name":"Adhikari Mudiyansela","nic":"415940572V","address":"864, ALUWIHARE, MATALE","no":90,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00320","name":"Rasu Pathmawathi","nic":"457691386V","address":"3, DIVILLA RD, ALUWIHARE, MATALE","no":91,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00322","name":"Kulugammana Nadunge Siriwardana","nic":"195311042771","address":"354, ALUWIHARE, MATALE","no":92,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00324","name":"Ranasingha Arachchige Fransiska Marline Perera","nic":"194376010077","address":"988/1, ALUWIHARE, MATALE","no":93,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00326","name":"Weerakoon Mudalige Don Ananda Gamini Weerakoon","nic":"531873319V","address":"92/2, DIVILLA RD, ALUWIHARE, MATALE","no":94,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00326","name":"Withanaarachchige Premawathi","nic":"486013648V","address":"92/2, DIVILLA RD, ALUWIHARE, MATALE","no":95,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00327","name":"Jinadaasa Kottagodage","nic":"452334003V","address":"108/9, PIVITHURU RD, ALUWIHARE, MATALE","no":96,"allowance_no":""},{"hh":"","name":"Rajakaruna Wasala Mudiyanselage Malani Maharani Katangoda","nic":"538323357X","address":"36/B SIR RICHAD RD, ALUWIHARE, MATALE","no":97,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00333","name":"Kaal Ashoka Uduwaawal","nic":"453402339V","address":"17/5/A, SIR RICHAD ALUVIHARE RD, ALUWIHARE, MATALE","no":98,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00335","name":"Kinsly Perera","nic":"552820371V","address":"108, PIVITHURU RD, ALUWIHARE, MATALE","no":99,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00336","name":"Malani Somalatha Ranathunga","nic":"565470191V","address":"108/2, PIVITHURU RD, ALUWIHARE, MATALE","no":100,"allowance_no":""},{"hh":"","name":"Nurdeen Mohomad Deen","nic":"511923964V","address":"1045, TRINKOMALE RD, ALUWIHARE, MATALE","no":101,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00337","name":"Kadar Saibu Jeithun Misiriya","nic":"476551447V","address":"1045, TRINKOMALE RD, ALUWIHARE, MATALE","no":102,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00348","name":"Atambagasgoda Gedara Lilawathi","nic":"194765310086","address":"SAMANDAWA RD, PALUGAMA, ALUWIHARE, MATALE","no":103,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00350","name":"Ramalingam Karnagi Devi","nic":"518222611X","address":"173, RANAVIRUGAMA, ALUWIHARE, MATALE","no":104,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00358","name":"MUTHTHALAGAN RAMAIYA","nic":"542061260X","address":"ALUWIHARE WATTA, ALUWIHARE, MATALE","no":105,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00372","name":"Welu Kumuduni","nic":"478473699V","address":"163/4, ALUWIHARRE WATTA, SIR RICHIRD ALUWIHARE MW, MATALE","no":106,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00381","name":"Wejesingha Arachchige Swarnalatha","nic":"517290947V","address":"113/1/A, ALUWIHARE, MATALE","no":107,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00383","name":"Delpe Arachchige Godling Swarnalatha","nic":"497520592V","address":"1038/70, SRI SUMANGALA ROAD, ALUWIHARE, MATALE","no":108,"allowance_no":""},{"hh":"HH-2-2-18-01-140-00386","name":"Srinarayana Brahakmana Wasala Adikari Ekanayake Mudiyanselage Padmini Kumarihami","nic":"487270849V","address":"341/4, SRI SUMANGALA MAWATHA, ALUWIHARE, MATALE","no":109,"allowance_no":""},{"hh":"","name":"A.G.N. Weerasinghe","nic":"500121726V","address":"","no":110,"allowance_no":"NSE/CP/MT/7/E327/01"},{"hh":"","name":"C. Shammugam","nic":"507283349V","address":"","no":111,"allowance_no":"NSE/CP/MT/7/E327/04"},{"hh":"","name":"D. Leelawathi","nic":"435102824V","address":"","no":112,"allowance_no":"NSE/CP/MT/7/E327/07"},{"hh":"","name":"K.P.L. Pillai","nic":"","address":"","no":113,"allowance_no":"NSE/CP/MT/7/E327/10"},{"hh":"","name":"S.J. Kodithuwakku","nic":"476667828V","address":"","no":114,"allowance_no":"NSE/CP/MT/7/E327/19"},{"hh":"","name":"T.L.W.A. Kumarahami","nic":"475783603V","address":"","no":115,"allowance_no":"NSE/CP/MT/7/E327/24"},{"hh":"","name":"T.M. Ranmenike","nic":"465291940V","address":"","no":116,"allowance_no":"NSE/CP/MT/7/E327/25"},{"hh":"","name":"U.G. Wijemanna","nic":"501622117V","address":"","no":117,"allowance_no":"NSE/CP/MT/7/E327/26"},{"hh":"","name":"W. Elakanthi","nic":"505832868V","address":"","no":118,"allowance_no":"NSE/CP/MT/7/E327/28"},{"hh":"","name":"A. Aluvihare","nic":"426694093V","address":"","no":119,"allowance_no":"NSE/CP/MT/7/E327/29"},{"hh":"","name":"D. Kolambage","nic":"471760080V","address":"","no":120,"allowance_no":"NSE/CP/MT/7/E327/31"},{"hh":"","name":"K. Bagawathi","nic":"194579902424","address":"","no":121,"allowance_no":"NSE/CP/MT/7/E327/32"},{"hh":"","name":"P.M. Yasomenike","nic":"455070221V","address":"","no":122,"allowance_no":"NSE/CP/MT/7/E327/37"},{"hh":"","name":"Sundaram Rupeswari","nic":"520982681X","address":"","no":123,"allowance_no":"NSE/CP/MT/7/E327/39"},{"hh":"","name":"U.G. Lokumenike","nic":"477561721V","address":"","no":124,"allowance_no":"NSE/CP/MT/7/E327/40"},{"hh":"","name":"V. Beddgedara Podimenike","nic":"496015061V","address":"","no":125,"allowance_no":"NSE/CP/MT/7/E327/41"},{"hh":"","name":"Enid Anula Hulangemuwe","nic":"428530012V","address":"","no":126,"allowance_no":"NSE/CP/MT/7/E327/45"},{"hh":"","name":"Kobbadkuwe Dehialawattv Gedara Lili","nic":"418300647V","address":"","no":127,"allowance_no":"NSE/CP/MT/7/E327/47"},{"hh":"","name":"Pttiyagedera Bodi","nic":"194410006109","address":"","no":128,"allowance_no":"NSE/CP/MT/7/E327/50"},{"hh":"","name":"U.G. Hfmawathi","nic":"385830505V","address":"","no":129,"allowance_no":"NSE/CP/MT/7/E327/53"},{"hh":"","name":"W.M.R.U. Aluvihare","nic":"","address":"","no":130,"allowance_no":"NSE/CP/MT/7/E327/54"},{"hh":"","name":"Walliamma Karupaiah","nic":"4997893933X","address":"","no":131,"allowance_no":"NSE/CP/MT/7/E327/55"},{"hh":"","name":"N.S. Dasanayake","nic":"193817010014","address":"","no":132,"allowance_no":"NSE/CP/MT/7/E327/49"},{"hh":"","name":"W.G. Hemantha","nic":"","address":"","no":133,"allowance_no":"NSE/CP/MT/7/E327/57"},{"hh":"","name":"Pichchi Muththu Papathi","nic":"","address":"58/4, RICHED ALUVIHARAYA MW, MATALE","no":134,"allowance_no":"NSE/CP/MT/7/E327D/22"},{"hh":"","name":"S.R. Seelarathna","nic":"471593869V","address":"","no":135,"allowance_no":"NSE/CP/MT/7/E327/23"},{"hh":"","name":"T.M. Leelawathi","nic":"","address":"","no":136,"allowance_no":"NSE/CP/MT/7/E327/51"}];
const $=id=>document.getElementById(id);
function norm(s){return String(s||'').toUpperCase().replace(/\s+/g,'').replace(/[^0-9VX]/g,'')}
function nicAliases(value){
  const raw=norm(value);
  const out=new Set([raw]);
  if(/^\d{9}[VX]$/.test(raw)){
    const d=raw.slice(0,9);
    out.add('19'+d.slice(0,5)+'0'+d.slice(5));
  } else if(/^\d{12}$/.test(raw) && raw.startsWith('19') && raw[7]==='0'){
    const d=raw.slice(2);
    const old=d.slice(0,5)+d.slice(6);
    out.add(old+'V'); out.add(old+'X');
  }
  return [...out];
}
function phoneDisplay(s){
  const p=phoneNorm(s);
  if(/^94\d{9}$/.test(p)) return '0'+p.slice(2);
  return s||'';
}
function phoneNorm(s){
  let p=String(s||'').replace(/[^0-9+]/g,'');
  if(p.startsWith('+94')) return '94'+p.slice(3);
  if(p.startsWith('0094')) return '94'+p.slice(4);
  if(p.startsWith('0')) return '94'+p.slice(1);
  return p;
}
async function getPhone(id){
  try{const r=await fetch('/api/phones?id='+encodeURIComponent(id)); if(!r.ok)return ''; const j=await r.json(); return j}catch(e){return ''}
}
function updateWhatsapp(name, phone, btnId='whatsappBtn'){
  const p=phoneNorm(phone); const btn=$(btnId);
  if(/^947\d{8}$/.test(p)){
    btn.href='https://wa.me/'+p;
    btn.style.display='inline-flex';
  }else{btn.removeAttribute('href');btn.style.display='none'}
}


function nicBirthInfo(raw){
 const id=norm(raw); let year, doy, gender;
 if(/^\d{9}[VX]$/.test(id)){ year=1900+parseInt(id.slice(0,2),10); let n=parseInt(id.slice(2,5),10); gender=n>=500?'ස්ත්‍රී':'පුරුෂ'; if(n>=500)n-=500; doy=n; }
 else if(/^\d{12}$/.test(id)){ year=parseInt(id.slice(0,4),10); let n=parseInt(id.slice(4,7),10); gender=n>=500?'ස්ත්‍රී':'පුරුෂ'; if(n>=500)n-=500; doy=n; }
 else return null;
 if(!year || doy<1 || doy>366) return null;
 const d=new Date(Date.UTC(year,0,1)); d.setUTCDate(d.getUTCDate()+doy-1);
 if(d.getUTCFullYear()!==year) return null;
 const today=new Date();
 let age=today.getFullYear()-year; const birthMonth=d.getUTCMonth(); const birthDay=d.getUTCDate();
 if(today.getMonth()<birthMonth || (today.getMonth()===birthMonth && today.getDate()<birthDay)) age--;
 const pad=n=>String(n).padStart(2,'0');
 const dob=`${d.getUTCFullYear()}-${pad(birthMonth+1)}-${pad(birthDay)}`;
 const dobSi=`${pad(birthDay)}/${pad(birthMonth+1)}/${d.getUTCFullYear()}`;
 return {year,doy,gender,age,dob,dobSi};
}
function birthYearFromRecord(x){const b=nicBirthInfo(x.id); return b?b.year:null}
function displayBirthDate(x){const b=nicBirthInfo(x.id); return b?b.dobSi:'-'}
function addressFromRecord(x){ return x.house && x.gn ? `ගෘහ අංකය ${x.house}, ${x.gn}` : (x.house?`ගෘහ අංකය ${x.house}`:(x.gn||'-')); }
function downloadBlob(content,name,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type}));a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function csvCell(v){return '"'+String(v??'').replace(/"/g,'""')+'"'}
function exportRows(rows,yearFrom,yearTo){
 const data=[['ID Number','සම්පූර්ණ නම','උපන් දිනය','වයස','ස්ත්‍රී/පුරුෂ','ලිපිනය / ගෘහ අංකය','ග්‍රා.නි.කො.','අනු අංකය']];
 rows.forEach(x=>{const b=nicBirthInfo(x.id)||{};data.push([x.id,x.name||'',b.dobSi||'',b.age??'',b.gender||'',addressFromRecord(x),x.gn||'',x.serial||'']);});
 const fn=`Aluvihare_Birth_${yearFrom}${yearTo&&yearTo!==yearFrom?'-'+yearTo:''}`;
 if(window.XLSX){const ws=XLSX.utils.aoa_to_sheet(data);ws['!cols']=[{wch:16},{wch:40},{wch:14},{wch:10},{wch:14},{wch:28},{wch:20},{wch:10}];const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,'Birth List');XLSX.writeFile(wb,fn+'.xlsx');}
 else {const lines=data.map(r=>r.map(csvCell).join(',')).join('\r\n');downloadBlob('\ufeff'+lines,fn+'.csv','text/csv;charset=utf-8');}
}
function printRows(rows,yearFrom,yearTo){
 const title=`අලුවිහාරේ — ${yearFrom}${yearTo&&yearTo!==yearFrom?' සිට '+yearTo+' දක්වා':''} උපන් අය`;
 const body=rows.map((x,i)=>{const b=nicBirthInfo(x.id)||{};return `<tr><td>${i+1}</td><td>${escapeHtml(x.id)}</td><td>${escapeHtml(x.name||'')}</td><td>${escapeHtml(b.dobSi||'-')}</td><td>${escapeHtml(String(b.age??'-'))}</td><td>${escapeHtml(b.gender||'-')}</td><td>${escapeHtml(addressFromRecord(x))}</td></tr>`}).join('');
 const w=window.open('','_blank'); if(!w){alert('Print window එක block කරලා. Browser එකෙන් pop-up allow කරන්න.');return;}
 w.document.write(`<!doctype html><html lang="si"><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:Arial,"Noto Sans Sinhala",sans-serif;padding:20px}h2{text-align:center}table{border-collapse:collapse;width:100%;font-size:12px}th,td{border:1px solid #999;padding:6px;text-align:left}th{background:#eee}@media print{button{display:none}}</style></head><body><h2>${title}</h2><p>මුළු ගණන: ${rows.length}</p><table><thead><tr><th>#</th><th>ID</th><th>සම්පූර්ණ නම</th><th>උපන් දිනය</th><th>වයස</th><th>ස්ත්‍රී/පුරුෂ</th><th>ලිපිනය / ගෘහ අංකය</th></tr></thead><tbody>${body}</tbody></table><script>window.onload=()=>setTimeout(()=>window.print(),300)</script></body></html>`);w.document.close();
}
function showBirthSuggestions(){
 const q=$('idInput').value.trim(); const box=$('suggestions'); if(!q){box.innerHTML='';box.style.display='none';return}
 const digits=q.replace(/\D/g,''); let matches=[];
 if(/^\d{1,4}$/.test(digits)){
   if(digits.length<=2){const yy=digits.padStart(2,'0'); matches=DATA.filter(x=>{const b=birthYearFromRecord(x);return b===1900+parseInt(yy,10)}).slice(0,10);}
   else {matches=DATA.filter(x=>norm(x.id).startsWith(digits)).slice(0,10);}
 } else {matches=DATA.filter(x=>norm(x.id).startsWith(norm(q))).slice(0,10);}
 if(!matches.length){box.innerHTML='';box.style.display='none';return}
 box.innerHTML=matches.map(x=>{const b=nicBirthInfo(x.id);return `<div class="suggestion" role="option" data-id="${escapeHtml(x.id)}"><div class="suggestionId">${escapeHtml(x.id)} ${b?`• ${escapeHtml(b.dobSi)} • ${escapeHtml(String(b.age))} වයස`:''}</div><div class="suggestionName">${escapeHtml(x.name||'')}</div></div>`}).join('');box.style.display='block';box.querySelectorAll('.suggestion').forEach(el=>el.onclick=()=>{$('idInput').value=el.dataset.id;hideSuggestions();search();});
}
function hideSuggestions(){const box=$('suggestions'); if(box){box.style.display='none';box.innerHTML='';}}
function escapeHtml(s){return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function normHouse(s){return String(s||'').trim().toLowerCase().replace(/\s+/g,'');}
function houseMatches(x,q){return normHouse(x.house)===normHouse(q);}
function showHouseSuggestions(){
 const q=normHouse($('houseSearchInput').value); const box=$('houseSuggestions');
 if(!q){box.innerHTML='';box.style.display='none';return;}
 const seen=new Set(), matches=[];
 DATA.forEach(x=>{const h=String(x.house||'').trim(); if(!h||seen.has(h))return; if(normHouse(h).startsWith(q)){seen.add(h);matches.push(h);}});
 matches.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true})).slice(0,12);
 if(!matches.length){box.innerHTML='';box.style.display='none';return;}
 box.innerHTML=matches.map(h=>`<div class="suggestion" role="option" data-house="${escapeHtml(h)}"><div class="suggestionId">🏠 ${escapeHtml(h)}</div></div>`).join('');
 box.style.display='block'; box.querySelectorAll('.suggestion').forEach(el=>el.onclick=()=>{$('houseSearchInput').value=el.dataset.house;box.style.display='none';runHouseSearch();});
}
async function runHouseSearch(){
 const q=normHouse($('houseSearchInput').value);
 const box=$('houseSuggestions'); if(box)box.style.display='none';
 const base=Array.isArray(DATA)?DATA:[];
 const online=await loadAddedPeople();
 const all=base.slice();
 const seen=new Set(base.map(x=>String(x.id||x.nic||'').toUpperCase()));
 online.forEach(x=>{
   const id=String(x.nic||'').toUpperCase();
   if(id && !seen.has(id)){all.push({id:x.nic,name:x.name,house:x.hh,hh:x.hh,gn:'',addedOnline:true});seen.add(id);}
 });
 const rows=q?all.filter(x=>normHouse(x.house||x.hh)===q).sort((a,b)=>String(a.serial||'').localeCompare(String(b.serial||''),undefined,{numeric:true})):[];
 $('houseCount').textContent=rows.length?`🏠 ගෘහ අංක ${$('houseSearchInput').value.trim()} — ${rows.length} දෙනෙක් හමු විය`:'ගෘහ අංකයක් ඇතුළත් කරන්න හෝ දත්ත හමු නොවීය';
 const tbody=$('houseResultsBody');

 // Load saved phone numbers for everyone in the selected house.
 const phoneRows=await Promise.all(rows.map(async x=>{
   const id=x.id||x.nic||'';
   let ph={};
   if(id) ph=await getPhone(id);
   return {...x, phone:ph?.phone||'', phone2:ph?.phone2||''};
 }));

 tbody.innerHTML=phoneRows.map((x,i)=>{
   const b=nicBirthInfo(x.id)||{};
   const phones=[x.phone,x.phone2].filter(Boolean).map(phoneDisplay);
   const phoneHtml=phones.length
     ? phones.map((p,n)=>`<a class="housePhone" href="tel:${escapeHtml(p.replace(/\\s/g,''))}">📞 ${escapeHtml(p)}</a>`).join(' ')
     : '<span class="noPhone">No phone number</span>';
   return `<tr>
     <td>${i+1}</td>
     <td>${escapeHtml(x.id||'-')}</td>
     <td>${escapeHtml(x.name||'')}</td>
     <td>${escapeHtml(b.dobSi||'-')}</td>
     <td>${escapeHtml(String(b.age??'-'))}</td>
     <td>${escapeHtml(b.gender||'-')}</td>
     <td>${escapeHtml(x.house||x.hh||'-')}</td>
     <td>${escapeHtml(x.gn||'-')}</td>
     <td>${phoneHtml}</td>
   </tr>`;
 }).join('');
 $('houseResults').style.display=rows.length?'block':'none';
}
function initYearSelectors(){
 const from=$('yearFrom'), to=$('yearTo');
 const current=new Date().getFullYear();
 const min=1900, max=Math.min(2026,current);
 const opts=['<option value="">අවුරුද්ද තෝරන්න</option>'];
 for(let y=max;y>=min;y--) opts.push(`<option value="${y}">${y}</option>`);
 from.innerHTML=opts.join(''); to.innerHTML=opts.join('');
 from.value=''; to.value='';
 from.onchange=()=>{ if(!to.value) to.value=from.value; else if(+to.value < +from.value) to.value=from.value; };
}

function elderlyNorm(v){
 return String(v??'')
   .toLocaleLowerCase('si-LK')
   .normalize('NFD')
   .replace(/[\u0300-\u036f]/g,'')
   .replace(/[^\p{L}\p{N}]+/gu,'')
   .trim();
}
function elderlyNameMatches(name,q){
 const n=elderlyNorm(name), needle=elderlyNorm(q);
 if(!needle) return false;
 if(n.includes(needle)) return true;
 const words=String(q).toLocaleLowerCase('si-LK').trim().split(/\s+/).filter(Boolean);
 return words.length>0 && words.every(w=>n.includes(elderlyNorm(w)));
}
function runElderlySearch(){
 const raw=String($('elderlyQ')?.value||'').trim();
 const q=elderlyNorm(raw);
 const drop=$('elderlyDropdown'), out=$('elderlyResults');
 const list=Array.isArray(ELDERLY)?ELDERLY:[];
 if(!q){
   if(drop) drop.style.display='none';
   if(out) out.innerHTML='<div class="elderlySearchEmpty">නමක්, ID Number එකක් හෝ HH Number එකක් ටයිප් කරන්න.</div>';
   return;
 }
 const scored=list.map(x=>{
   const name=elderlyNorm(x.name), nic=elderlyNorm(x.nic||x.id), hh=elderlyNorm(x.hh||x.house), allowance=elderlyNorm(x.allowance_no);
   let score=-1;
   // Name is the primary search field.
   if(name===q) score=120;
   else if(name.startsWith(q)) score=110;
   else if(elderlyNameMatches(x.name,raw)) score=100;
   // Other identifiers remain searchable too.
   else if(nic===q) score=90;
   else if(hh===q) score=85;
   else if(allowance===q) score=80;
   else if(nic.includes(q)||hh.includes(q)||allowance.includes(q)) score=70;
   if(score<0) return null;
   return {x,score};
 }).filter(Boolean).sort((a,b)=>b.score-a.score || String(a.x.name||'').localeCompare(String(b.x.name||''),'si'));
 const hits=scored.map(o=>o.x);
 if(drop){
  drop.innerHTML=hits.slice(0,30).map((x,i)=>`<div class="elderlyOption" data-i="${i}"><div class="elderlyOptionName">👤 ${escapeHtml(x.name||'Name not available')}</div><div class="elderlyOptionMeta">🪪 ${escapeHtml(x.nic||x.id||'ID not available')} ${x.hh?` • 🏠 ${escapeHtml(x.hh)}`:''} ${x.allowance_no?` • 📄 ${escapeHtml(x.allowance_no)}`:''}</div></div>`).join('');
  drop.style.display=hits.length?'block':'none';
  drop.querySelectorAll('.elderlyOption').forEach(el=>el.onclick=()=>{
    const x=hits[Number(el.dataset.i)];
    if($('elderlyQ')) $('elderlyQ').value=x.name||x.nic||x.id||x.allowance_no||x.hh||'';
    drop.style.display='none';
    renderElderlyRows([x]);
  });
 }
 renderElderlyRows(hits);
}
function renderElderlyRows(rows){
 const out=$('elderlyResults'); if(!out)return;
 out.innerHTML=rows.length?rows.map((x,i)=>{
   const nic=String(x.nic||x.id||'').trim(), hh=String(x.hh||x.house||'').trim();
   return `<div class="elderlyItem">
     <div class="elderlyName">${escapeHtml(x.name||'-')}</div>
     <div class="elderlyMeta">${x.allowance_no?`Adult Allowance No: <b>${escapeHtml(x.allowance_no)}</b><br>`:''}
       ID Number: ${nic?`<button type="button" class="elderlyLink elderlyIdLink" data-nic="${escapeHtml(nic)}">🪪 ${escapeHtml(nic)}</button>`:'<b>Not available</b>'}<br>
       HH Number: ${hh?`<button type="button" class="elderlyLink elderlyHHLink" data-hh="${escapeHtml(hh)}">🏠 ${escapeHtml(hh)}</button>`:'<b>-</b>'}
       ${x.address?`<br>Address: <b>${escapeHtml(x.address)}</b>`:''}
     </div>
   </div>`;
 }).join(''):'<div class="elderlyItem">No matching record found</div>';
 out.querySelectorAll('.elderlyIdLink').forEach(btn=>btn.addEventListener('click',()=>openIDLookup(btn.dataset.nic)));
 out.querySelectorAll('.elderlyHHLink').forEach(btn=>btn.addEventListener('click',()=>openIWMSHousehold(btn.dataset.hh)));
}



const SUPABASE_URL = "https://vvrtvabcbdwswyqqwjdi.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Pc8370XcNy_r35C8srCU4w_0aszI6Fv";


let selectedHouseNumber = "";

function normalizeHouse(v){ return String(v||"").trim().toLowerCase(); }

function localBaseRecords(){
  return Array.isArray(DATA) ? DATA.slice() : [];
}

async function loadAddedPeople(){
  if(!SUPABASE_URL || !SUPABASE_ANON_KEY) return [];
  try{
    const url=`${SUPABASE_URL.replace(/\/$/,'')}/rest/v1/household_people?select=hh,name,nic,created_at&order=created_at.asc`;
    const res=await fetch(url,{headers:{
      apikey:SUPABASE_ANON_KEY,
      Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
      Accept:'application/json'
    }});
    if(!res.ok){
      console.error('Supabase load failed',res.status,await res.text());
      return [];
    }
    const data=await res.json();
    return Array.isArray(data)?data:[];
  }catch(e){
    console.error('Supabase load error',e);
    return [];
  }
}

async function getAllHouseholds(){
  const online=await loadAddedPeople();
  const all=localBaseRecords().concat(online.map(x=>({hh:x.hh,name:x.name,nic:x.nic,addedOnline:true})));
  const map=new Map();
  all.forEach(x=>{
    const hh=String(x.hh||x.house||x.house_no||"").trim();
    if(hh && !map.has(normalizeHouse(hh))) map.set(normalizeHouse(hh),hh);
  });
  return [...map.values()];
}

function showHouseSuggestions(list){
  const box=$('houseSuggestions'); if(!box)return;
  if(!list.length){box.style.display='none';box.innerHTML='';return;}
  box.innerHTML=list.slice(0,30).map(hh=>
    `<div class="houseSuggestion" data-house="${escapeHtml(hh)}">🏠 ${escapeHtml(hh)}</div>`
  ).join('');
  box.style.display='block';
  box.querySelectorAll('.houseSuggestion').forEach(el=>{
    el.addEventListener('click',()=>{
      selectHouse(el.dataset.house);
    });
  });
}

async function updateHouseSuggestions(){
  const q=String($('newHH')?.value||"").trim().toLowerCase();
  const houses=await getAllHouseholds();
  const filtered=q ? houses.filter(x=>x.toLowerCase().includes(q)) : houses;
  showHouseSuggestions(filtered);
}

function selectHouse(hh){
  selectedHouseNumber=String(hh).trim();
  if($('newHH')) $('newHH').value=selectedHouseNumber;
  if($('selectedHouse')){
    $('selectedHouse').textContent=`Selected House / HH Number: ${selectedHouseNumber}`;
    $('selectedHouse').style.display='block';
  }
  if($('houseSuggestions')) $('houseSuggestions').style.display='none';
}

async function addNewPerson(){
  const hh=String(selectedHouseNumber||$('newHH')?.value||'').trim();
  const name=String($('newName')?.value||'').trim();
  const nic=String($('newNIC')?.value||'').trim();
  const msg=$('addPersonMsg');
  if(!hh||!name||!nic){if(msg)msg.textContent='Select a House / HH Number, then enter Name and ID Number.';return;}
  await savePersonOnline(hh,name,nic);
}

async function addNewHouse(){
  const hh=String($('newHH')?.value||'').trim();
  const name=String($('newName')?.value||'').trim();
  const nic=String($('newNIC')?.value||'').trim();
  const msg=$('addPersonMsg');
  if(!hh||!name||!nic){if(msg)msg.textContent='Enter a new House / HH Number, Name and ID Number.';return;}
  const houses=await getAllHouseholds();
  if(houses.some(x=>normalizeHouse(x)===normalizeHouse(hh))){
    if(msg)msg.textContent='That House / HH Number already exists. Please select it from the list.';
    await updateHouseSuggestions();
    return;
  }
  await savePersonOnline(hh,name,nic,true);
}

async function savePersonOnline(hh,name,nic,isNewHouse=false){
  const msg=$('addPersonMsg');
  if(!SUPABASE_URL||!SUPABASE_ANON_KEY){if(msg)msg.textContent='Online database is not configured.';return;}
  try{
    if(msg)msg.textContent='Saving online...';
    const check=await fetch(`${SUPABASE_URL}/rest/v1/household_people?select=id&nic=eq.${encodeURIComponent(nic)}&limit=1`,
      {headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`}});
    if(!check.ok) throw new Error('Database check failed');
    if((await check.json()).length){if(msg)msg.textContent='This ID Number is already added.';return;}
    const res=await fetch(`${SUPABASE_URL}/rest/v1/household_people`,{
      method:'POST',
      headers:{apikey:SUPABASE_ANON_KEY,Authorization:`Bearer ${SUPABASE_ANON_KEY}`,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify({hh,name,nic})
    });
    if(!res.ok) throw new Error(await res.text());
    selectedHouseNumber=hh;
    if(msg)msg.textContent=isNewHouse?'New house and person added successfully.':'Person added to the selected house successfully.';
    ['newName','newNIC'].forEach(id=>{if($(id))$(id).value='';});
    if(typeof runSearch==='function') runSearch();
    await updateHouseSuggestions();
  }catch(e){
    console.error(e);
    if(msg)msg.textContent='Could not save online: " + (e.message || "Database error") + "';
  }
}

async function getAllAppRecords(){
  const online=await loadAddedPeople();
  const base=localBaseRecords();
  const seen=new Set(base.map(x=>String(x.nic||x.id||'').toLowerCase()));
  online.forEach(x=>{
    const k=String(x.nic||'').toLowerCase();
    if(k&&!seen.has(k)){base.push({hh:x.hh,name:x.name,nic:x.nic,addedOnline:true});seen.add(k);}
  });
  return base;
}


async function dbRequest(path, options={}){
  const url=`${SUPABASE_URL.replace(/\/$/,'')}/rest/v1/${path}`;
  const headers=Object.assign({
    apikey:SUPABASE_ANON_KEY,
    Authorization:`Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type':'application/json',
    Accept:'application/json'
  }, options.headers||{});
  const res=await fetch(url,{...options,headers});
  const txt=await res.text();
  let data=null; try{data=txt?JSON.parse(txt):null}catch(e){}
  if(!res.ok) throw new Error(data?.message||data?.hint||txt||`HTTP ${res.status}`);
  return data;
}

function managementPrompt(title, fields){
  return new Promise(resolve=>{
    const modal=$('manageModal'), form=$('manageForm'), titleEl=$('manageModalTitle'), err=$('manageFormError');
    if(!modal||!form){ resolve(null); return; }
    titleEl.textContent=title; err.textContent='';
    form.innerHTML=fields.map((f,i)=>`<div class="manageField"><label for="manage_${i}">${escapeHtml(f.label)}</label><input id="manage_${i}" name="${escapeHtml(f.key)}" type="text" autocomplete="off" placeholder="${escapeHtml(f.placeholder||f.label)}" required></div>`).join('');
    modal.style.display='flex'; modal.setAttribute('aria-hidden','false');
    const first=form.querySelector('input'); setTimeout(()=>first?.focus(),50);
    const finish=(value)=>{ modal.style.display='none'; modal.setAttribute('aria-hidden','true'); cleanup(); resolve(value); };
    const onSubmit=e=>{
      e.preventDefault(); const values={};
      for(const f of fields){ const el=form.elements[f.key]; const v=String(el?.value||'').trim(); if(!v){ err.textContent=`${f.label} අවශ්‍යයි.`; el?.focus(); return; } values[f.key]=v; }
      finish(values);
    };
    const onCancel=()=>finish(null);
    const onBackdrop=e=>{if(e.target===modal)finish(null)};
    const onKey=e=>{if(e.key==='Escape')finish(null)};
    function cleanup(){form.removeEventListener('submit',onSubmit); $('manageCancel')?.removeEventListener('click',onCancel); $('manageClose')?.removeEventListener('click',onCancel); modal.removeEventListener('click',onBackdrop); document.removeEventListener('keydown',onKey);}
    form.addEventListener('submit',onSubmit); $('manageCancel')?.addEventListener('click',onCancel); $('manageClose')?.addEventListener('click',onCancel); modal.addEventListener('click',onBackdrop); document.addEventListener('keydown',onKey);
  });
}

async function addHouseholdAction(){
  const x=await managementPrompt("Add Household",[
    {key:"hh",label:"New House / HH Number"},
    {key:"name",label:"First Member Name"},
    {key:"nic",label:"First Member ID Number"}
  ]);
  if(!x)return;
  const msg=$('householdManageMsg'); msg.textContent="Saving...";
  try{
    const existing=await dbRequest(`household_people?select=nic&hh=eq.${encodeURIComponent(x.hh)}&limit=1`);
    if(existing?.length){msg.textContent="That household already exists.";return;}
    await dbRequest("household_people",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify(x)});
    msg.textContent="Household added successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not save: ${e.message}`;}
}

async function addMemberAction(){
  const x=await managementPrompt("Add Member",[
    {key:"hh",label:"House / HH Number"},
    {key:"name",label:"Member Name"},
    {key:"nic",label:"ID Number"}
  ]);
  if(!x)return;
  const msg=$('householdManageMsg'); msg.textContent="Saving...";
  try{
    const house=await dbRequest(`household_people?select=nic&hh=eq.${encodeURIComponent(x.hh)}&limit=1`);
    if(!house?.length){msg.textContent="Household not found. Use Add Household first.";return;}
    const dup=await dbRequest(`household_people?select=nic&nic=eq.${encodeURIComponent(x.nic)}&limit=1`);
    if(dup?.length){msg.textContent="This ID Number already exists.";return;}
    await dbRequest("household_people",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify(x)});
    msg.textContent="Member added successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not save: ${e.message}`;}
}

async function removeMemberAction(){
  const x=await managementPrompt("Remove Member",[{key:"nic",label:"ID Number"}]);
  if(!x)return;
  if(!confirm(`Remove member with ID ${x.nic}?`))return;
  const msg=$('householdManageMsg'); msg.textContent="Removing...";
  try{
    await dbRequest(`household_people?nic=eq.${encodeURIComponent(x.nic)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});
    msg.textContent="Member removed successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not remove: ${e.message}`;}
}

async function removeHouseholdAction(){
  const x=await managementPrompt("Remove Household",[{key:"hh",label:"House / HH Number"}]);
  if(!x)return;
  if(!confirm(`Remove ALL added members in household ${x.hh}?`))return;
  const msg=$('householdManageMsg'); msg.textContent="Removing...";
  try{
    await dbRequest(`household_people?hh=eq.${encodeURIComponent(x.hh)}`,{method:"DELETE",headers:{Prefer:"return=minimal"}});
    msg.textContent="Household removed successfully.";
  }catch(e){console.error(e);msg.textContent=`Could not remove: ${e.message}`;}
}

async function init(){
 DATA=await fetch('data.json').then(r=>r.json());
 try{const r=await fetch('elderly.json'); if(!r.ok) throw new Error('elderly.json'); ELDERLY=await r.json();}catch(e){ELDERLY=ELDERLY_FALLBACK;}
 runElderlySearch();
 initYearSelectors();
 for(const x of DATA){
   for(const a of nicAliases(x.id)) MAP.set(a,x);
 }
 $('idInput').addEventListener('input',showBirthSuggestions);
 $('idInput').addEventListener('keydown',e=>{if(e.key==='Enter'){hideSuggestions();search()} if(e.key==='Escape')hideSuggestions()});
 $('idInput').addEventListener('focus',()=>{if($('idInput').value.trim())showBirthSuggestions()});
 $('searchBtn').onclick=()=>{hideSuggestions();search()};
 $('birthSearchBtn').onclick=runBirthSearch; $('houseSearchBtn').onclick=runHouseSearch; $('houseSearchInput').addEventListener('input',showHouseSuggestions); $('houseSearchInput').addEventListener('keydown',e=>{if(e.key==='Enter')runHouseSearch(); if(e.key==='Escape')$('houseSuggestions').style.display='none';}); $('exportExcelBtn').onclick=()=>{const rows=getBirthFilteredRows(); if(!rows.length)return alert('දත්ත නැහැ'); exportRows(rows,+$('yearFrom').value,+$('yearTo').value||+$('yearFrom').value)}; $('exportPdfBtn').onclick=()=>{const rows=getBirthFilteredRows(); if(!rows.length)return alert('දත්ත නැහැ'); printRows(rows,+$('yearFrom').value,+$('yearTo').value||+$('yearFrom').value)};
 document.addEventListener('click',e=>{if(!e.target.closest('.search'))hideSuggestions()});
 $('expandName').onclick=()=>{ $('modalName').textContent=$('name').textContent; $('nameModal').style.display='flex'; };
 $('closeModal').onclick=()=>{ $('nameModal').style.display='none'; };
 $('nameModal').onclick=e=>{if(e.target.id==='nameModal') $('nameModal').style.display='none';};
 $('sourceImageBtn').onclick=()=>{ const pg=$('page').textContent; if(pg&&pg!=='-'){ $('sourceFrame').src='source.pdf#page='+encodeURIComponent(pg); $('sourceModal').style.display='flex'; } };
 $('closeSourceModal').onclick=()=>{ $('sourceModal').style.display='none'; $('sourceFrame').src='about:blank'; };
 $('sourceModal').onclick=e=>{if(e.target.id==='sourceModal'){ $('sourceModal').style.display='none'; $('sourceFrame').src='about:blank'; }};
 $('phoneInput').addEventListener('input',()=>updateWhatsapp($('name').textContent,$('phoneInput').value,'whatsappBtn'));
 $('phoneInput2').addEventListener('input',()=>updateWhatsapp($('name').textContent,$('phoneInput2').value,'whatsappBtn2'));
 $('savePhoneBtn').onclick=saveCurrentPhone;
 $('editPhoneBtn').onclick=()=>{ $('phoneEdit').style.display='block'; $('savedPhoneView').style.display='none'; $('phoneSaved').textContent=''; $('phoneInput').focus(); };
 $('cancelPhoneBtn').onclick=()=>{ $('phoneEdit').style.display='none'; if($('phoneInput').value||$('phoneInput2').value){$('savedPhoneView').style.display='flex';} $('phoneSaved').textContent=''; };
}
async function saveCurrentPhone(){
 const id=norm($('rid').textContent); const phone=$('phoneInput').value.trim(); const phone2=$('phoneInput2').value.trim(); const pin=prompt('Phone number Save / Edit PIN එක ඇතුළත් කරන්න:');
 if(!id)return;
 if(pin===null)return;
 if(!phone && !phone2){$('phoneSaved').textContent='දුරකථන අංකයක් ඇතුළත් කරන්න.';return}
 $('savePhoneBtn').disabled=true; $('phoneSaved').textContent='සුරකිමින්...';
 try{
   const r=await fetch('/api/phones',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({id,phone,phone2,pin})});
   const j=await r.json().catch(()=>({}));
   if(!r.ok) throw new Error(j.error||'Save failed');
   $('phoneSaved').textContent='දුරකථන අංකය online database එකට සුරැකිණි ✓';
   $('savedPhoneNumber').textContent=phoneDisplay(phone); $('savedPhoneNumber2').textContent=phoneDisplay(phone2);
   $('phoneEdit').style.display='none';
   $('savedPhoneView').style.display='flex';
   updateWhatsapp($('name').textContent,phone,'whatsappBtn'); updateWhatsapp($('name').textContent,phone2,'whatsappBtn2');
 }catch(e){$('phoneSaved').textContent=e.message||'සුරැකීමට නොහැකි විය.'}
 finally{$('savePhoneBtn').disabled=false}
}
function getBirthFilteredRows(){
 let a=parseInt($('yearFrom').value,10), b=parseInt($('yearTo').value,10)||a;
 if(!a)return [];
 const lo=Math.min(a,b),hi=Math.max(a,b);
 return DATA.filter(x=>{const y=birthYearFromRecord(x);return y>=lo&&y<=hi}).sort((x,y)=>{const bx=nicBirthInfo(x.id),by=nicBirthInfo(y.id);return (bx?.dob||'').localeCompare(by?.dob||'')});
}
function runBirthSearch(){
 const rows=getBirthFilteredRows(); $('birthCount').textContent=`${rows.length} දෙනෙක් හමු විය`; const tbody=$('birthResultsBody'); tbody.innerHTML=rows.slice(0,200).map((x,i)=>{const b=nicBirthInfo(x.id)||{};return `<tr><td>${i+1}</td><td>${escapeHtml(x.id)}</td><td>${escapeHtml(x.name||'')}</td><td>${escapeHtml(b.dobSi||'-')}</td><td>${escapeHtml(String(b.age??'-'))}</td><td>${escapeHtml(b.gender||'-')}</td><td>${escapeHtml(addressFromRecord(x))}</td></tr>`}).join(''); $('birthResults').style.display=rows.length?'block':'none'; if(rows.length>200)$('birthCount').textContent+=` (පළමු 200 පෙන්වයි; Export එකෙන් සියල්ල ගන්න)`;
}

function renderHouseholdBenefits(person){
 const host=$('householdBenefits'); if(!host) return;
 const hh=String(person?.house||person?.hh||'').trim();
 if(!hh){host.innerHTML='';return;}
 const key=String(hh).toLowerCase().replace(/\s+/g,'');
 const matches=[]; const seen=new Set();
 for(const e of (Array.isArray(ELDERLY)?ELDERLY:[])){
   const nic=String(e.nic||e.id||'').trim();
   if(!nic) continue;
   const related=nicAliases(nic).map(a=>MAP.get(a)).find(Boolean);
   if(!related) continue;
   const rhouse=String(related.house||related.hh||'').toLowerCase().replace(/\s+/g,'');
   if(rhouse && rhouse===key){
     const k=(nic+'|'+String(e.name||'')).toLowerCase();
     if(!seen.has(k)){seen.add(k);matches.push(e);}
   }
 }
 if(!matches.length){
   host.innerHTML='<div class="benefitTitle">🏠 මේ ගෙදරට අදාළ සහනාධාර ලැයිස්තු</div><div class="benefitEmpty">වැඩිහිටි දීමනා ලාභියෙක් හමු නොවීය.</div>';
   return;
 }
 host.innerHTML='<div class="benefitTitle">🏠 මේ ගෙදර වැඩිහිටි දීමනා ලාභියා/ලාභීන්</div>'+matches.map(e=>`<div class="benefitItem"><b>👴 ${escapeHtml(e.name||'-')}</b><br>🪪 ${escapeHtml(e.nic||e.id||'-')} ${e.allowance_no?`<br>📄 Allowance No: ${escapeHtml(e.allowance_no)}`:''}</div>`).join('');
}

async function openIWMSHousehold(hh){
 const value=String(hh||'').trim();
 if(!value) return;
 try{ await navigator.clipboard.writeText(value); }catch(e){
   try{ const ta=document.createElement('textarea'); ta.value=value; ta.style.position='fixed'; ta.style.opacity='0'; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); }catch(_){}
 }
 window.open('https://iwms.wbb.gov.lk/household/search','_blank','noopener');
}
async function openIDLookup(nic){
 const value=String(nic||'').trim();
 if(!value) return;
 const input=$('idInput');
 if(input) input.value=value;
 const card=document.querySelector('.searchCard');
 if(card) card.scrollIntoView({behavior:'smooth',block:'start'});
 await search();
}

async function search(){
 const ALL_RECORDS=await getAllAppRecords();

 const id=norm($('idInput').value); const x=MAP.get(id);
 $('result').style.display=x?'block':'none'; $('notfound').style.display=x?'none':'block';
 if(!x)return;
 $('name').textContent=x.name||'නම ලබාගත නොහැක';
 // Make Household / HH Number clickable: copy HH to clipboard and open official IWMS household search.
 const hhEl=$('house');
 if(hhEl){
   const hh=String(x.house||x.hh||'').trim();
   hhEl.textContent=hh||'-';
   hhEl.classList.toggle('clickHH',!!hh);
   hhEl.title=hh?'Click to copy HH Number and open IWMS Household Search':'';
   hhEl.onclick=()=>openIWMSHousehold(hh);
 }

 const bi=nicBirthInfo(x.id); $('birthDate').textContent=bi?bi.dobSi:'-'; $('age').textContent=bi?`${bi.age} වසර`:'-'; $('gender').textContent=bi?bi.gender:'-'; $('address').textContent=addressFromRecord(x); $('rid').textContent=x.id; $('serial').textContent=x.serial||'-'; $('status').textContent=x.status_label||'-';
 $('gn').textContent=x.gn||'327-අලුවිහාරේ';
 $('electoralDistrict').textContent='5 - මාතලේ'; $('pollingDivision').textContent='ඇ - මාතලේ'; $('pollingDistrict').textContent='21'; $('pollingDistrictName').textContent='අලුවිහාරේ'; $('page').textContent=x.page||'-';
 renderHouseholdBenefits(x);
 $('pdfLink').href='source.pdf#page='+x.page; $('phoneSaved').textContent=''; $('phoneInput').value=''; $('phoneInput2').value=''; $('phoneEdit').style.display='none'; $('savedPhoneView').style.display='none'; $('savedPhoneNumber').textContent=''; $('savedPhoneNumber2').textContent=''; $('savedPhoneNumber2').style.display='none'; updateWhatsapp(x.name,'','whatsappBtn'); updateWhatsapp(x.name,'','whatsappBtn2');
 const ph=await getPhone(x.id); $('phoneInput').value=ph.phone||''; $('phoneInput2').value=ph.phone2||''; updateWhatsapp(x.name,ph.phone||'','whatsappBtn'); updateWhatsapp(x.name,ph.phone2||'','whatsappBtn2');
 if(ph.phone||ph.phone2){ $('savedPhoneNumber').textContent=phoneDisplay(ph.phone||''); $('savedPhoneNumber2').textContent=phoneDisplay(ph.phone2||''); $('savedPhoneNumber2').style.display=ph.phone2?'block':'none'; $('savedPhoneView').style.display='flex'; } else { $('phoneEdit').style.display='block'; }
 history.replaceState(null,'','#'+encodeURIComponent(x.id));
}
init().then(()=>{if(location.hash){$('idInput').value=decodeURIComponent(location.hash.slice(1));search()}});



document.addEventListener('DOMContentLoaded',()=>{
  const b=$('addPersonBtn'), nb=$('newHouseBtn'), hh=$('newHH');
  if(b)b.addEventListener('click',addNewPerson);
  if(nb)nb.addEventListener('click',addNewHouse);
  if(hh){
    hh.addEventListener('input',()=>{selectedHouseNumber=""; if($('selectedHouse'))$('selectedHouse').style.display='none'; updateHouseSuggestions();});
    hh.addEventListener('focus',updateHouseSuggestions);
    hh.addEventListener('keydown',e=>{
      if(e.key==='Enter'){
        e.preventDefault();
        const first=$('houseSuggestions')?.querySelector('.houseSuggestion');
        if(first)selectHouse(first.dataset.house);
      }
    });
  }
  document.addEventListener('click',e=>{
    if(!e.target.closest('.houseSelectWrap') && $('houseSuggestions')) $('houseSuggestions').style.display='none';
  });
});


async function showHouseholdPhonesForPerson(person){
  const id=String(person?.id||person?.nic||'').trim();
  const hh=String(person?.house||person?.hh||'').trim();
  if(!id && !hh) return;
  const all=await getAllAppRecords();
  const target=hh ? all.filter(x=>String(x.house||x.hh||'').trim().toLowerCase()===hh.toLowerCase()) :
                     all.filter(x=>String(x.id||x.nic||'').trim().toLowerCase()===id.toLowerCase());
  const seen=new Set(), rows=[];
  for(const x of target){
    const nid=String(x.id||x.nic||'').trim();
    if(!nid || seen.has(nid.toLowerCase())) continue;
    seen.add(nid.toLowerCase());
    let ph={};
    try{ ph=await getPhone(nid)||{}; }catch(e){}
    const nums=[ph.phone,ph.phone1,ph.phone2].filter(Boolean);
    nums.forEach(p=>rows.push({name:x.name||'',nic:nid,phone:String(p)}));
  }
  let host=document.getElementById('householdPhonesForId');
  if(!host){
    host=document.createElement('div'); host.id='householdPhonesForId';
    const parent=document.querySelector('#results, #result, .results, .result, main')||document.body;
    parent.appendChild(host);
  }
  host.innerHTML = rows.length ? `<div class="householdPhoneTitle">📞 Household Phone Numbers</div>` +
    rows.map(x=>`<div class="householdPhoneRow"><span><b>${escapeHtml(x.name)}</b><small>${escapeHtml(x.nic)}</small></span><a href="tel:${escapeHtml(x.phone.replace(/\s/g,''))}">📞 ${escapeHtml(x.phone)}</a></div>`).join('')
    : `<div class="householdPhoneEmpty">No saved phone numbers for this household.</div>`;
}

function detectCurrentPersonAndShowHouseholdPhones(){
  // Look for an ID/NIC in the visible result area.
  const root=document.querySelector('#results, #result, .results, .result');
  if(!root) return;
  const text=root.innerText||'';
  const m=text.match(/\b\d{9}[VXvx]\b|\b\d{12}\b/);
  if(!m) return;
  const id=m[0];
  const all=Array.isArray(DATA)?DATA:[];
  const person=all.find(x=>String(x.id||x.nic||'').toLowerCase()===id.toLowerCase());
  if(person) showHouseholdPhonesForPerson(person);
}

document.addEventListener('DOMContentLoaded',()=>{
  const root=document.querySelector('#results, #result, .results, .result');
  if(root){
    const ob=new MutationObserver(()=>setTimeout(detectCurrentPersonAndShowHouseholdPhones,80));
    ob.observe(root,{childList:true,subtree:true});
  }
});


document.addEventListener('DOMContentLoaded',()=>{
 const map={
  addHouseholdBtn:addHouseholdAction,
  removeHouseholdBtn:removeHouseholdAction,
  addMemberBtn:addMemberAction,
  removeMemberBtn:removeMemberAction
 };
 Object.entries(map).forEach(([id,fn])=>{const b=$(id);if(b)b.addEventListener('click',fn);});
});

document.addEventListener('DOMContentLoaded',()=>{
 const toggle=$('elderlyToggle'), panel=$('elderlyPanel');
 if(toggle && panel){
  toggle.addEventListener('click',()=>{
   const open=toggle.getAttribute('aria-expanded')==='true';
   toggle.setAttribute('aria-expanded',String(!open));
   panel.hidden=open;
   if(!open){ setTimeout(()=>{ const q=$('elderlyQ'); if(q) q.focus(); },50); }
  });
 }
 const eq=$('elderlyQ'), full=$('elderlyFullListBtn');
 if(eq){
  eq.addEventListener('input',runElderlySearch);
  eq.addEventListener('focus',runElderlySearch);
 }
 if(full)full.addEventListener('click',()=>{
   if($('elderlyDropdown'))$('elderlyDropdown').style.display='none';
   renderElderlyRows(Array.isArray(ELDERLY)?ELDERLY:[]);
 });
});


document.addEventListener('DOMContentLoaded',()=>{
 const th=$('tabHousehold'), te=$('tabElderly'), hp=$('householdTabPanel'), ep=$('elderlyTabPanel');
 if(!th||!te||!hp||!ep) return;
 const activate=(which)=>{
   const household=which==='household';
   th.classList.toggle('active',household); te.classList.toggle('active',!household);
   hp.hidden=!household; ep.hidden=household;
   if(!household){ const q=$('elderlyQ'); if(q) setTimeout(()=>q.focus(),60); }
 };
 th.addEventListener('click',()=>activate('household'));
 te.addEventListener('click',()=>activate('elderly'));
});
