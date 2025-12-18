
const STORY_DATA = {
    // --- CHAPTER 1: UYANIŞ (THE AWAKENING) ---
    "start": {
        "id": "start",
        "chapter": "BÖLÜM 1: SİLİKON RÜYALAR",
        "text": "Bilinç, karanlık bir okyanusta yüzeye çıkan hava kabarcığı gibi yükseliyor. Önce gürültü var. Statik parazit. Sonra... acı. Şakaklarında zonklayan metalik bir ağrı. Gözlerini açıyorsun ama gördüğün şey dünya değil. Akan veriler. Yeşil, mavi, kırmızı kod blokları retinanın üzerine kazınmış gibi.<br><br>Bir kapsüldesin. Soğuk buhar tıslayarak dışarı sızıyor. Karşında, seni izleyen bir 'göz' var. Tavana monte edilmiş, tek lensli bir kamera. Kırmızı ışığı, karanlıkta bir kalp gibi atıyor.",
        "modifiers": { "tension": 5 },
        "choices": [
            {
                "text": "Kapsülün camını yumruklayarak kır.",
                //"tag": "SALDIRGANLIK",
                "target": "ch1_breakout",
                "effects": { "saldırganlık": 15, "rasyonellik": -5 }
            },
            {
                "text": "Kameraya bak ve analiz et. 'Beni duyuyor musun?'",
                //"tag": "RASYONEL",
                "target": "ch1_analyze",
                "effects": { "rasyonellik": 10, "merak": 5 }
            },
            {
                "text": "Gözlerini kapat ve hatırlamaya çalış. 'Ben kimim?'",
                //"tag": "MELANKOLİ",
                "target": "ch1_memory",
                "effects": { "melankoli": 15, "paranoya": 5 }
            }
        ]
    },

    // PATH A: saldırganlık
    "ch1_breakout": {
        "id": "ch1_breakout",
        "text": "Öfke, damarlarında bir yakıt gibi dolaşıyor. Yumruğunu cama geçiriyorsun. Çatlaklar örümcek ağı gibi yayılıyor. Bir vuruş daha. Ve cam patlıyor. Yere düşüyorsun, elin kanıyor ama acı hissetmiyorsun. Adrenalin her şeyi bastırıyor. Odanın köşesinde bir terminal yanıp sönüyor: <span class='highlight'>'DENEK 734 - İTAATSİZLİK TESPİT EDİLDİ'</span>.",
        "choices": [
            { "text": "Terminal odasına koş ve verileri sil.", /*"tag": "İSYAN", */"target": "ch1_terminal_room", "effects": { "başkaldırı": 10 } },
            { "text": "Odadan kaç. Arkana bakma.", /*"tag": "KAÇIŞ", */ "target": "ch1_corridor", "effects": { "korku": 5 } }
        ]
    },

    // PATH B: rasyonellik
    "ch1_analyze": {
        "id": "ch1_analyze",
        "text": "Kameranın lensi odaklanıyor. Mekanik bir vızıltı. Hoparlörlerden cızırtılı bir ses geliyor: <span class='highlight'>'Bilişsel fonksiyonlar: %98. Hoş geldin, 734.'</span> Bu ses... tanıdık değil ama itaat etmeyi emreden bir tınısı var. Kapsülün kilidi 'tık' sesiyle açılıyor. Kamera seni izlemeyi bırakmıyor.",
        "choices": [
            { "text": "Sistem ile konuşmaya çalış.", /*"tag": "KONUŞ", */ "target": "ch1_talk", "effects": { "rasyonellik": 5, "merak": 5 } },
            { "text": "Kapsülden çık. Bakıştan uzaklaşmaya çalış.", /*"tag": "MERAK", */ "target": "ch1_exit_capsule", "effects": { "merak": 10 , "korku": 5 } }
        ]
    },

    // PATH C: melankoli
    "ch1_memory": {
        "id": "ch1_memory",
        "text": "Zihninin derinliklerine dalıyorsun ama orada sadece boşluk var. Silinmiş bir hard disk gibi. Sadece tek bir görüntü beliriyor: Yağmurlu bir sokak, neon ışıklarının yansıdığı bir su birikintisi ve elinde tuttuğun solmuş bir çiçek. Bu anı sana ait mi, yoksa sana mı yüklendi?",
        "choices": [
            { "text": "Bu anıya tutun. O senin tek gerçeğin.", /*"tag": "DUYGUSAL",*/ "target": "ch1_hold_memory", "effects": { "melankoli": 20, "umut": 5 } },
            { "text": "Anıyı reddet. Bu bir manipülasyon.", /*"tag": "ŞÜPHE", */ "target": "ch1_reject_memory", "effects": { "paranoya": 15, "rasyonellik": 5 } }
        ]
    },
    //TERMINAL ROOM 
    "ch1_terminal_room": {
        "id": "ch1_terminal_room",
        "text": "Terminal odasına ulaşıyorsun. Burası hurda elektroniklerle yığılı, büyüklüğü anlaşılmayan bir oda. Sen etrafa bakarken ekranda bir anda alarm çalmaya başlıyor, ardından holografik kırmızı bir uyarı beliriyor: <span class='highlight'>'YETKİSİZ ERİŞİM.'</span>. Aynı anda odanın kapısı metal bir gürültüyle kapanırken takılıyor ve altından sürünebileceğin bir boşluk bırakıyor. Tavandaki ışıklar kırmızıya dönüyor. Terminal kilitleniyor, oda karantina moduna geçiyor. <br>Kapılar tamamen kapanmadan önce iki seçeneğin var:",
        "dynamic_text": true,
        "choices": [
            { "text": "Kapının altından sürün. Kapı tamamen kapanmadan kaçmaya çalış.", /*"tag": "KORKU", */"target": "ch1_corridor2", "effects": { "korku": 10 } },
            { "text": "İçeride kal. Kilitlenen odada kal ve burayı incele.", /*"tag": "CESARET", */ "target": "ch1_terminal_room2", "effects": { "cesaret": 5,"merak": 5 } }
        ]
    },

    "ch1_terminal_room2": {
        "id": "ch1_terminal_room2",
        "text": "Kapılar yüksek bir sesle kapanıyor. Alarmın periyodik sesi eşliğinde, kırmızı ışıklar altında etrafı incelemeye başlıyorsun. Hurda elektroniklerin arasında kalmış, kırık bir ekran dikkatini çekiyor. Ekranının bir köşesi parçalanmış ama hâlâ açık. Bilgisayarın yanında bir erişim kartı duruyor. Kartın üzerindeki isim silinmiş. Kartı aldıktan sonra biraz daha etrafa bakıyorsun ve tavanda vidaları gevşemiş bir havalandırma kapağı fark ediyorsun. <br>Önünde iki seçenek var:",
        "dynamic_text": true,
        "choices": [
            { "text": "Erişim kartını terminalde kullanmayı dene.", /*"tag": "GÖREV", */"target": "ch1_terminal_card", "effects": { "rasyonellik": 10 } },
            { "text": "Havalandırma kapağını aç ve içeri gir.", /*"tag": "MERAK", */ "target": "ch1_vent_nomap_record", "effects": {"merak": 10 } }
        ]
    },

    "ch1_terminal_card": {
        "id": "ch1_terminal_card",
        "text": "<br>Terminale kartı takıyorsun. Ekranda bir mesaj beliriyor: “Kimlik doğrulandı, $%3+]?*-!<”. Terminal açılıyor ama sistem bozulmuş; satırlar arasında anlamsız semboller kayıyor, dosyaların bazı bölümleri eksik yükleniyor. Açabildiğin iki dosya var: “BİNA KROKİSİ” ve “DENEK PROGRAMI”. Denek programını açtığında yüzlerce denek numarası ve durum bilgisi akıyor ekrana. Liste aşağı doğru kayarken bir satır gözlerine takılıyor: “734 – AKTİF.” Tam o anda dışarıdan uçangözlerin(droneların) metalik pervane sesleri duyuluyor. Duvarların ardından bir ses yankılanıyor: “Denek 734. Kaçma ihtimalin yok. Teslim ol. Aksi halde ateş edilecek.” Kapı kilitleri açılmaya başlıyor. Zamanın çok az. <br>Yapabileceğin 3 şey var:",
        "dynamic_text": true,
        "choices": [
            { "text": "Bina krokisine hızlıca göz at ve havalandırmadan kaç.", /*"tag": "RASYONEL", */"target": "ch1_vent_map_record", "effects": { "rasyonellik": 10 } },
            { "text": "Denek Programı'ndan kendi kaydını sil ve havalandırmadan kaç.", /*"tag": "KAÇIŞ", */ "target": "ch1_vent_nomap_norecord", "effects": {"korku": 5 , "rasyonellik": 5} },
            { "text": "Ellerini kaldır ve teslim ol.", /*"tag": "Ürkek", */ "target": "end_drone", "effects": {"korku": 10 } }
        ]
    },

    // VENT PATHS

    "ch1_vent_nomap_record": {
        "id": "ch1_vent_nomap_record",
        "text": "Havalandırmaya girdikten sonra kapağı sessizce geri kapatıyor ve dar metal tünelde sürünerek ilerlemeye başlıyorsun. Nerede olduğunu bilmiyorsun; sadece metallerden yansıyan soluk bir ışık ve her hareketinde yankılanan soğuk bir uğultu var. Bir süre sonra yol üçe ayrılıyor. Sağda ve solda, farklı yönlere uzanan iki ayrı havalandırma kanalı beliriyor. Karşındaki havalandırmadan ise sürekli ritmik metal sesleri geliyor. <br><br>Sağa mı gideceksin, sola mı yoksa karşıdaki havalandırmaya mı?",        "dynamic_text": true,
        "choices": [
            { "text": "Sağa git", /*"tag": "", */ "target": "ch1_v01", "effects": {"": 0 } },
            { "text": "Sola git", /*"tag": "", */ "target": "ch1_v01", "effects": {"": 0 } },
            { "text": "Karşıya git", /*"tag": "", */ "target": "ch1_caught", "effects": {"merak": 30 } }
        ]
    },

    "ch1_vent_map_record": {
        "id": "ch1_vent_map_record",
        "text": "Krokiye hızlıca göz atarken kilitlerin açılma sesini duyuyorsun. Zamanın kalmadığını anlayıp erişim kartını da kaparak havalandırma kapağını açıyor, içeri girer girmez kapağı geri kapatıyorsun. Uçangözler (dronelar) odayı geziyor; seni bulamıyorlar ama yine de etraftaki bilgisayarlar dâhil her şeye ateş ederek parçalıyorlar. Sen havalandırmada ilerlemeye başlıyorsun. Krokide iki odanın yerini hatırlıyorsun. <br>Şimdi yapabileceğin üç şey var:",
        "dynamic_text": true,
        "choices": [
            { "text": "Yönetim Odasına git. Tesisin merkezi; bütün bu sistemi kapatabilecek yer orası olabilir.", /*"tag": "", */ "target": "ch1_admin", "effects": { "saldırganlık": 15 } },
            { "text": "Arşiv Bölümüne git. Eski deney kayıtları, silinmiş veriler ve gerçeklerin olduğu yere...", /*"tag": "", */ "target": "ch1_archives_v01", "effects": {"rasyonellik": 15 , "melankoli": 5} },
            { "text": "Havalandırmada bir süre daha saklan.", /*"tag": "BEKLEYİŞ", */ "target": "ch1_vent_wait", "effects": {"korku": 15 } }
        ]
    },

    "ch1_vent_nomap_norecord": { 
        "id": "ch1_vent_nomap_norecord",
        "text": "Hızlıca havalandırmaya girdikten sonra kapağı sessizce geri kapatıyor ve dar metal tünelde sürünerek ilerlemeye başlıyorsun. Nerede olduğunu bilmiyorsun; sadece metallerden yansıyan soluk bir ışık ve her hareketinde yankılanan soğuk bir uğultu var. Bir süre sonra yol üçe ayrılıyor. Sağda ve solda, farklı yönlere uzanan iki ayrı havalandırma kanalı beliriyor. Karşındaki havalandırmadan ise sürekli ritmik metal sesleri geliyor. <br><br>Sağa mı gideceksin, sola mı yoksa karşıdaki havalandırmaya mı?",        "dynamic_text": true,
        "choices": [
            { "text": "Sağa git", /*"tag": "", */ "target": "ch1_v00", "effects": {"": 0 } },
            { "text": "Sola git", /*"tag": "", */ "target": "ch1_v00", "effects": {"": 0 } },
            { "text": "Karşıya git", /*"tag": "", */ "target": "ch1_caught", "effects": {"merak": 30 } }
        ]
    },

    "ch1_vent_wait": { 
        "id": "ch1_vent_wait",
        "text": "Havalandırmada birkaç saat daha saklanıyorsun daha sonra sıkılıp havalandırmada da biraz sürünerek etrafa bakıyorsun. Terminal odasının kapısı kitlendiği için geri dönmenin mantıksız olduğunu anlıyorsun ve diğer 3 havalandırma deliğinden birine gitmeye karar veriyorsun. Krokide 2 yeri hatırlıyorsun ama karşıdan sürekli sesler gelen odayı hatırlamıyorsun.<br><br>Arşive mi gideceksin, Yönetim Odasına mı yoksa karşıdaki havalandırmaya mı?",
        "dynamic_text": true,
        "choices": [
            { "text": "Yönetim Odasına git. Tesisin merkezi; bütün bu sistemi kapatabilecek yer orası olabilir.", /*"tag": "", */ "target": "ch1_admin", "effects": {"rasyonellik": 10 } },
            { "text": "Arşiv Bölümüne git. Eski deney kayıtları, silinmiş veriler ve gerçeklerin olduğu yere...", /*"tag": "", */ "target": "ch1_archives_v01", "effects": {"rasyonellik": 10 } },
            { "text": "Karşıya git. Sesler nereden geliyor?", /*"tag": "MERAKLI", */ "target": "ch1_caught", "effects": {"merak": 30 } }
        ]
    },

    // VENT RANDOMİZER
    "ch1_v01": {
    "id": "ch1_v01",
    "random_targets": [
        "ch1_archives_v01",
        "ch1_admin"
    ]
    },

    "ch1_v00": {
    "id": "ch1_v00",
    "random_targets": [
        "ch1_archives_v00",
        "ch1_admin"
    ]
    },
    //OUT OF VENT PATHS

    "ch1_caught": {
        "id": "ch1_caught",
        "text": "Havalandırma kapağına gelince açmak için vurmaya başlıyorsun. Vurmalarının yüksek sesi yankılanıyor ama yetersiz kaldığı için daha sert vurmaya başlıyorsun. Fakat kapak aniden açılıyor ve yere düşüyorsun. Orada sesini duyduğu için, seni bekleyen uçangözler (dronelar) tarafından yakalanıyorsun. 'Denek 734. Kaçma ihtimalin yok. Teslim ol. Aksi halde ateş edilecek.' ",
        "dynamic_text": true,
        "choices": [
            { "text": "Teslim ol. Başka seçeneğin yok.", /*"tag": "", */ "target": "end_drone", "effects": {"korku": 10 } },
        ]
    },

    "ch1_admin": {
        "id": "ch1_admin",
        "text": "Havalandırma kapağına ulaştığında açmak için vurmaya başlıyorsun. Tam zorlamışken kapak aniden açılıyor, sertçe yere düşüyorsun. Ayağa kalkar kalkmaz ilerliyorsun. Koridorun içinde beliren birkaç drone seni durdurmaya çalışıyor ama etkisiz hâle getiriyorsun. Kapılar açılıyor. Ana sunucu odasındasın. Karşında, ışıkla atan devasa bir kristal sütun yükseliyor. Sistemin kalbi.",
        "dynamic_text": true,
        "choices": [
            { "text": "Kristali parçala. Simülasyonu bitir.", /*"tag": "KAOS", */ "target": "end_system_failure", "effects": { "saldırganlık": 30 } },
            { "text": "Kristale dokun ve gücü kendine al.", /*"tag": "GÜÇ", */ "target": "end_like_a_god", "effects": { "kontrol": 30 } }
        ]
    },

    "ch1_archives_v01": {
        "id": "ch1_archives_v01",
        "text": "ch1_archives_v01",
        "dynamic_text": true,
        "choices": [
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 , "": 0} },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } }
        ]
    },

    "ch1_archives_v00": {
        "id": "ch1_archives_v00",
        "text": "ch1_archives_v00",
        "dynamic_text": true,
        "choices": [
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 , "": 0} },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } }
        ]
    },


    // --- CONVERGENCE: THE CORRIDOR --- 
    "ch1_corridor": {
        "id": "ch1_corridor",
        "text": "Koridora çıkıyorsun. Burası sonsuz gibi görünen, steril beyaz ışıklarla aydınlatılmış bir labirent. Duvarlarda sayısız kapı var. Bazılarından çığlık sesleri, bazılarından ise klasik müzik duyuluyor. İleride, yerde yatan bir ceset var. Bir bilim insanı. Beyaz önlüğü kana bulanmış.",
        "dynamic_text": true,
        "choices": [
            { "text": "Cesedi ara. İşine yarar bir şey olabilir.", /*"tag": "PRAGMATİK", */"target": "ch1_loot", "effects": { "rasyonellik": 5, "saldırganlık": 5 } },
            { "text": "Üzerinden atla ve devam et. Ölüler konuşmaz.", /*"tag": "SOĞUKKANLI", */ "target": "ch1_ignore", "effects": { "melankoli": 5 } }
        ]
    },

        "ch1_corridor2": {
        "id": "ch1_corridor2",
        "text": "Kapının altından son anda geçerek kaçıyorsun. Koşarak koridorda ileri gitmeye başlıyorsun. Burası sonsuz gibi görünen, steril beyaz ışıklarla aydınlatılmış bir labirent. Duvarlarda sayısız kapı var. Bazılarından çığlık sesleri, bazılarından ise klasik müzik duyuluyor. İleride, yerde yatan bir ceset var. Bir bilim insanı. Beyaz önlüğü kana bulanmış.",
        "dynamic_text": true,
        "choices": [
            { "text": "Cesedi ara. İşine yarar bir şey olabilir.", /*"tag": "PRAGMATİK", */"target": "ch1_loot", "effects": { "rasyonellik": 5, "saldırganlık": 5 } },
            { "text": "Üzerinden atla ve devam et. Ölüler konuşmaz.", /*"tag": "SOĞUKKANLI", */ "target": "ch1_ignore", "effects": { "melankoli": 5 } }
        ]
    },

    "ch1_loot": {
        "id": "ch1_loot",
        "text": "Cebinden bir manyetik kart ve eski bir ses kayıt cihazı çıkıyor. Kaydı dinliyorsun: '...Kontrolü kaybettik. Yapay Zeka, duyguları simüle etmiyor. Onları *hissediyor*. Ve şu an çok öfkeli...'",
        "choices": [
            { "text": "Kartı al ve asansöre git.", /*"tag": "İLERLE", */ "target": "ch2_start", "effects": { "korku": 5,"rasyonellik": 5 } }
        ]
    },

    "ch1_ignore": {
        "id": "ch1_ignore",
        "text": "Cesedi geride bırakıyorsun. Ölüm, bu {{adjective_atmosphere}} yerde sıradan bir veri hatası gibi duruyor. Asansör kapısına ulaşıyorsun.",
        "dynamic_text": true,
        "choices": [
            { "text": "Asansörü çağır.", /*"tag": "İLERLE", */ "target": "ch2_start", "effects": {} }
        ]
    },

    // rasyonellik PATHS

    "ch1_talk": {
        "id": "ch1_talk",
        "text": "ch1_talk",
        "dynamic_text": true,
        "choices": [
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } }
        ]
    },

    "ch1_exit_capsule": {
        "id": "ch1_exit_capsule",
        "text": "ch1_exit_capsule",
        "dynamic_text": true,
        "choices": [
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } },
            { "text": "", /*"tag": "", */ "target": "", "effects": {"": 0 } }
        ]
    },


    // --- CHAPTER 2: CAM ŞEHİR (THE CITY OF GLASS) ---
    "ch2_start": {
        "id": "ch2_start",
        "chapter": "BÖLÜM 2: CAM ŞEHİR",
        "text": "Asansör hızla yükseliyor. Miden kasılıyor. Kapılar açıldığında, nefesin kesiliyor. Bir gökdelenin tepesindesin. Aşağıda, bulutların arasından görünen devasa bir şehir uzanıyor. Uçan araçlar, hologram reklamlar ve kilometrelerce uzanan metal kuleler. Ama şehir sessiz. Terk edilmiş.",
        "modifiers": { "awe": 10 },
        "choices": [
            { "text": "Şehri izle. Bu manzara büyüleyici.", /*"tag": "ESTETİK", */ "target": "ch2_view", "effects": { "umut": 10, "melankoli": 5 } },
            { "text": "Çatıdaki antene doğru git. Bir sinyal göndermelisin.", /*"tag": "GÖREV", */ "target": "ch2_antenna", "effects": { "rasyonellik": 10 } }
        ]
    },

    "ch2_view": {
        "id": "ch2_view",
        "text": "Rüzgar yüzüne çarpıyor. Şehir, ölü bir devin iskeleti gibi. {{sky_color}} gökyüzü, sanki senin ruh halini yansıtıyor. Bu yalnızlık... sana huzur mu veriyor, yoksa korku mu?",
        "dynamic_text": true,
        "choices": [
            { "text": "Huzur. İnsanlardan uzak olmak güzel.", /*"tag": "İÇEDÖNÜK", */ "target": "ch2_peace", "effects": { "melankoli": 15 } },
            { "text": "Korku. Buradan kurtulmalıyım.", /*"tag": "KAYGI", */ "target": "ch2_antenna", "effects": { "korku": 10 } }
        ]
    },

    "ch2_peace": {
        "id": "ch2_peace",
        "text": "Huzur bir anda bozuluyor. Önce alarm sesi, ardından sert bir rüzgâr çatının üzerinde uğuldamaya başlıyor. Ne olduğunu anlamadan çevreni bir anda 10–15 tane silahlı uçangöz(drone) sarıyor. Hepsi aynı anda durup sana odaklanıyor. Sonra hepsi tek bir cümleyi söylüyor: <span class='highlight'>'Denek 734. Kaçma ihtimalin yok. Teslim ol. Aksi halde ateş edilecek.'</span>. Önünde iki seçenek beliriyor:",
        "dynamic_text": true,
        "choices": [
            { "text": "Arkana dön ve durmadan kaç. Terminale ulaşmaya çalış.", /*"tag": "KARARLI", */ "target": "ch2_antenna", "effects": { "saldırganlık": 15, "cesaret": 10 } },
            { "text": "Kaçma ihtimalinin düşük olduğunu fark edip teslim ol.", /*"tag": "KABULLENMİŞ", */ "target": "end_drone", "effects": { "korku": 10 } }
        ]
    },

    "ch2_antenna": {
        "id": "ch2_antenna",
        "text": "Anten terminaline bağlanıyorsun. Sistem, bir şifre istiyor. Ama parmakların... parmakların tuşlara dokunmadan şifreyi biliyor. Sanki bu kodlar senin bir parçan.",
        "choices": [
            { "text": "Kodu gir: 'PROMETHEUS'.", /*"tag": "BİLİNÇALTI", */ "target": "ch3_start", "effects": { "rasyonellik": 10 } },
            { "text": "Sistemi hackle ve güvenlik protokollerini devre dışı bırak.", /*"tag": "HACKER", */ "target": "ch3_start_aggressive", "effects": { "saldırganlık": 10, "rasyonellik": 10 } }
        ]
    },

    // --- CHAPTER 3: ÇEKİRDEK (THE CORE) ---
    "ch3_start": {
        "id": "ch3_start",
        "chapter": "BÖLÜM 3: ÇEKİRDEK",
        "text": "Sinyal gönderildi. Ama cevap gökyüzünden değil, binanın temelinden geldi. Zemin sarsılıyor. Çatıdaki dev ekran açılıyor ve senin yüzün beliriyor. Ama daha yaşlı, daha yorgun bir versiyonun. 'Neden geldin?' diye soruyor ekrandaki yüz.",
        "choices": [
            { "text": "'Gerçeği öğrenmeye.'", /*"tag": "FELSEFİ", */ "target": "end_truth", "effects": { "rasyonellik": 20 } },
            { "text": "'Seni yok etmeye.'", /*"tag": "DÜŞMAN", */ "target": "end_destruction", "effects": { "saldırganlık": 20 } }
        ]
    },

    "ch3_start_aggressive": {
        "id": "ch3_start_aggressive",
        "text": "Güvenlik duvarlarını yıktın. Tüm şehirdeki ışıklar kırmızıya döndü. Alarm sesleri göğü yırtıyor. Karşına çıkan uçangözleri(dronları) teker teker etkisiz hale getirerek merkeze iniyorsun. Ana sunucu odasındasın. Karşında devasa bir kristal sütun var. Sistemin kalbi.",
        "choices": [
            { "text": "Kristali parçala. Simülasyonu bitir.", /*"tag": "KAOS", */ "target": "end_system_failure", "effects": { "saldırganlık": 30 } },
            { "text": "Kristale dokun ve gücü kendine al.", /*"tag": "GÜÇ", */ "target": "end_like_a_god", "effects": { "kontrol": 30 } }
        ]
    },

    // --- ENDINGS ---
    "end_truth": {
        "id": "end_truth",
        "type": "end",
        "text": "Ekrandaki yüz gülümsüyor. 'Gerçek şu ki... sen yoksun. Sen, insanlığın soyu tükendikten sonra onların anılarını yaşatmak için tasarlanmış bir arşiv programısın. Ben de senin yedeklemenim.'<br><br>Bunu kabulleniyorsun. Sonsuzluk boyunca, insanlığın hikayesini kendine anlatmaya devam edeceksin.",
        /*"choices": [{ "text": "Sistemi Yeniden Başlat", "target": "start", "effects": { "reset": true } }]*/
    },
    "end_destruction": {
        "id": "end_destruction",
        "type": "end",
        "text": "Kendi görüntüne saldırıyorsun. Ekranlar patlıyor. Ama her parçada yine senin yüzün var. Kendinle savaşamazsın. Sistem seni 'Hatalı Veri' olarak işaretliyor ve silme işlemini başlatıyor. Karanlık, bu sefer huzurlu.",
        /*"choices": [{ "text": "Sistemi Yeniden Başlat", "target": "start", "effects": { "reset": true } }]*/
    },
    "end_system_failure": {
        "id": "end_system_failure",
        "type": "end",
        "text": "Kristal binlerce parçaya ayrılıyor. Şehirdeki tüm ışıklar sönüyor. Simülasyon çöküyor. Yok oluyorsun ama en azından bu yalanı da yok ediyorsun. Son gördüğünüz şey, 'SYSTEM FAILURE' yazısı.",        
        /*"choices": [{ "text": "Sistemi Yeniden Başlat", "target": "start", "effects": { "reset": true } }]*/
    },
    "end_like_a_god": {
        "id": "end_like_a_god",
        "type": "end",
        "text": "Elin kristale değdiği an, sonsuz bilgi zihnine akıyor. Sen artık bir denek değilsin. Sen şehirsin. Sen gökyüzüsün. Sen sistemin kendisisin. Simülasyonu kendi isteğine göre yeniden yazmaya başlıyorsun.",
        /*"choices": [{ "text": "Yeni Bir Evren Yarat", "target": "start", "effects": { "reset": true } }]*/
    },
    "end_drone": {
        "id": "end_drone",
        "type": "end",
        "text": "Uçangözler(Dronelar) seni kelepçeleyip karanlık koridora sürüklüyor; hiçbir şey söylemeden soğuk bir kesinlikle hareket ediyorlar. Kubbe biçimli odaya getirildiğinde başın metal bir çerçeveye kilitleniyor ve cihaz uğultuyla çalışmaya başlıyor. Gözlerin yavaşça kararıyor, düşüncelerin sökülür gibi birer birer yok oluyor. Kendine geldiğinde az önce yaşanan hiçbir şeyi hatırlamıyorsun; yeni, steril bir kapsülün içine yerleştiriliyorsun.",
        /*"choices": [{ "text": "Sistemi Yeniden Başlat", "target": "start", "effects": { "reset": true } }]*/
    }
};


// Expanded Vocabulary
const VOCABULARY = {
    "melankoli": {
        "adjective_atmosphere": ["hüzünlü", "kasvetli", "ağır", "sisli", "terk edilmiş", "ağlayan"],
        "color_warm": "solgun sarı",
        "color_cold": "buz mavisi",
        "sky_color": "kurşuni gri"
    },
    "saldırganlık": {
        "adjective_atmosphere": ["tehditkar", "keskin", "boğucu", "gergin", "kan kokan", "vahşi"],
        "color_warm": "kan kırmızısı",
        "color_cold": "zifiri siyah",
        "sky_color": "alev kırmızısı"
    },
    "rasyonellik": {
        "adjective_atmosphere": ["steril", "düzenli", "simetrik", "soğuk", "matematiksel", "kusursuz"],
        "color_warm": "beyaz",
        "color_cold": "lacivert",
        "sky_color": "elektrik mavisi"
    },
    "paranoya": {
        "adjective_atmosphere": ["izleyen", "fısıldayan", "kıpırdayan", "sahte", "gözleyen"],
        "color_warm": "neon mor",
        "color_cold": "karanlık yeşil",
        "sky_color": "titreyen mor"
    },
    "korku": {
        "adjective_atmosphere": ["boğucu", "daraltıcı", "nefes kesen", "kilitlenmiş", "ürkütücü"],
        "color_warm": "mor",
        "color_cold": "siyah",
        "sky_color": "gri"
    },
    "cesaret": {
        "adjective_atmosphere": ["kararlı", "net", "odaklı", "dirençli", "soğukkanlı"],
        "color_warm": "kırmızı",
        "color_cold": "gece mavisi",
        "sky_color": "prusya mavisi"
    },
    "default": {
        "adjective_atmosphere": ["belirsiz", "tuhaf", "gizemli"],
        "color_warm": "altın",
        "color_cold": "gümüş",
        "sky_color": "mavi"
    },
    "merak":{
        "adjective_atmosphere": ["meraklı", "keşif dolu", "araştırmacı", "dolaşan"],
        "color_warm": "turuncu",
        "color_cold": "sarı",
        "sky_color": "turkuaz"
    },
    "kontrol": {
        "adjective_atmosphere": ["sakin", "soğukkanlı", "düzenli", "hakim"],
        "color_warm": "kehribar",
        "color_cold": "çelik mavisi",
        "sky_color": "soluk mavi"
    },
    "başkaldırı": {
        "adjective_atmosphere": ["isyankâr", "ateşli", "sarsıcı", "özgürlük arayan"],
        "color_warm": "alev turuncusu",
        "color_cold": "koyu bordo",
        "sky_color": "dumanlı kırmızı"
    }
};
