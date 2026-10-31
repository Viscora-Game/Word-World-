// Word & World — Comprehensive Multi-Category & Multi-Language Dataset
export const CATEGORIES_DATA = {
  "tr": [
    {
      "id": "spor",
      "name": "Spor Dünyası",
      "iconKey": "trophy",
      "color": "from-emerald-500 to-teal-700",
      "description": "İlk 11 taktik sahaları, efsane futbolcular, NBA yıldızları ve Formula 1",
      "subcategories": [
        {
          "id": "ilk-11-takim",
          "name": "İlk 11 ile Takım Bul",
          "iconKey": "stadium",
          "badge": "Taktik Saha",
          "description": "Sahadaki ilk 11 dizilişine bakarak hangi kulüp veya milli takım olduğunu tahmin et!",
          "levels": [
            {
              "id": 1,
              "word": "YUNANİSTAN",
              "hint": "2004 Avrupa Şampiyonası finalinde ev sahibi Portekiz'i Charisteas'ın kafasıyla deviren Otto Rehhagel mucizesi",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "Euro 2004 Şampiyonu",
                "gk": "Nikopolidis",
                "def": [
                  "Seitaridis",
                  "Dellas",
                  "Kapsis",
                  "Fyssas"
                ],
                "mid": [
                  "Zagorakis",
                  "Basinas",
                  "Katsouranis",
                  "Giannakopoulos"
                ],
                "fwd": [
                  "Charisteas",
                  "Vryzas"
                ]
              }
            },
            {
              "id": 2,
              "word": "MANCHESTER",
              "hint": "1999 Camp Nou finalinde Bayern Münih'e karşı 90+1 ve 90+3'te gelen gollerle tarihi Treble yapan efsane kadro",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "1999 Şampiyonlar Ligi Şampiyonu",
                "gk": "Schmeichel",
                "def": [
                  "G.Neville",
                  "Johnsen",
                  "Stam",
                  "Irwin"
                ],
                "mid": [
                  "Beckham",
                  "Butt",
                  "Giggs",
                  "Blomqvist"
                ],
                "fwd": [
                  "Yorke",
                  "Cole"
                ]
              }
            },
            {
              "id": 3,
              "word": "BREZİLYA",
              "hint": "2002 Dünya Kupası finalinde Almanya'yı Ronaldo Fenomeno'nun 2 golüyle deviren ve 5. yıldızı takan 3R kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "3-4-1-2",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Şampiyonu",
                "gk": "Marcos",
                "def": [
                  "Lucio",
                  "Edmilson",
                  "Roque Junior"
                ],
                "mid": [
                  "Cafu",
                  "Gilberto Silva",
                  "Kleberson",
                  "Roberto Carlos"
                ],
                "fwd": [
                  "Ronaldinho",
                  "Rivaldo",
                  "Ronaldo"
                ]
              }
            },
            {
              "id": 4,
              "word": "AJAX",
              "hint": "1995 Viyana finalinde Milan'ı Kluivert'ın golüyle devirip namağlup Avrupa şampiyonu olan Louis van Gaal kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "3-4-3",
                "teamType": "Kulüp Takımı",
                "year": "1995 Şampiyonlar Ligi Şampiyonu",
                "gk": "Van der Sar",
                "def": [
                  "Reiziger",
                  "Blind",
                  "F.de Boer"
                ],
                "mid": [
                  "Rijkaard",
                  "Seedorf",
                  "Davids",
                  "Litmanen"
                ],
                "fwd": [
                  "Finidi",
                  "R.de Boer",
                  "Overmars"
                ]
              }
            },
            {
              "id": 5,
              "word": "VALENCİA",
              "hint": "2001 San Siro finalinde Bayern Münih'e penaltılarla elenen, üst üste iki kez final oynayan Hector Cuper kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2001 Şampiyonlar Ligi Finalisti",
                "gk": "Canizares",
                "def": [
                  "Angloma",
                  "Ayala",
                  "Pellegrino",
                  "Carboni"
                ],
                "mid": [
                  "Mendieta",
                  "Baraja",
                  "Kily Gonzalez"
                ],
                "fwd": [
                  "Aimar",
                  "Sanchez",
                  "Carew"
                ]
              }
            },
            {
              "id": 6,
              "word": "LEİCESTER",
              "hint": "2016 yılında 5000'e 1 oran verilmesine rağmen dünya futbol tarihinin en büyük peri masalını yazan Ranieri kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2016 Premier Lig Şampiyonu",
                "gk": "Schmeichel",
                "def": [
                  "Simpson",
                  "Morgan",
                  "Huth",
                  "Fuchs"
                ],
                "mid": [
                  "Mahrez",
                  "Drinkwater",
                  "Kante",
                  "Albrighton"
                ],
                "fwd": [
                  "Okazaki",
                  "Vardy"
                ]
              }
            },
            {
              "id": 7,
              "word": "SENEGAL",
              "hint": "2002 Dünya Kupası açılış maçında son şampiyon Fransa'yı devirip çeyrek finale kadar yürüyen Bruno Metsu kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-5-1",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Çeyrek Final",
                "gk": "Sylva",
                "def": [
                  "Coly",
                  "Diatta",
                  "Cisse",
                  "Daf"
                ],
                "mid": [
                  "N'Diaye",
                  "Diao",
                  "Bouba Diop",
                  "Fadiga",
                  "Camara"
                ],
                "fwd": [
                  "El Hadji Diouf"
                ]
              }
            },
            {
              "id": 8,
              "word": "MİLAN",
              "hint": "1994 Atina finalinde Johan Cruyff'un Barcelona Rüya Takımı'nı 4-0 darmadağın eden Fabio Capello kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "1994 Şampiyonlar Ligi Şampiyonu",
                "gk": "Rossi",
                "def": [
                  "Tassotti",
                  "Galli",
                  "Maldini",
                  "Panucci"
                ],
                "mid": [
                  "Boban",
                  "Albertini",
                  "Desailly",
                  "Donadoni"
                ],
                "fwd": [
                  "Savicevic",
                  "Massaro"
                ]
              }
            },
            {
              "id": 9,
              "word": "HOLLANDA",
              "hint": "1988 Münih finalinde Sovyetler'i Van Basten'in imkansız sıfır dereceden attığı vole golüyle deviren Rinus Michels kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "Euro 1988 Şampiyonu",
                "gk": "Van Breukelen",
                "def": [
                  "Van Aerle",
                  "Rijkaard",
                  "Koeman",
                  "Van Tiggelen"
                ],
                "mid": [
                  "Vanenburg",
                  "Wouters",
                  "Mühren",
                  "Erwin Koeman"
                ],
                "fwd": [
                  "Gullit",
                  "Van Basten"
                ]
              }
            },
            {
              "id": 10,
              "word": "VİLLARREAL",
              "hint": "2006'da Riquelme ve Forlan önderliğinde Şampiyonlar Ligi yarı finalinde Arsenal'e elenen Sarı Denizaltı kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2006 Şampiyonlar Ligi Yarı Final",
                "gk": "Barbosa",
                "def": [
                  "Venta",
                  "Pena",
                  "Alvarez",
                  "Arruabarrena"
                ],
                "mid": [
                  "Senna",
                  "Josico",
                  "Sorin"
                ],
                "fwd": [
                  "Riquelme",
                  "Forlan",
                  "Guille Franco"
                ]
              }
            },
            {
              "id": 11,
              "word": "PORTO",
              "hint": "2004 Şampiyonlar Ligi finalinde Monaco'yu 3-0 hezimete uğratan Jose Mourinho mucizesi",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2004 Şampiyonlar Ligi Şampiyonu",
                "gk": "Vitor Baia",
                "def": [
                  "Ferreira",
                  "Costa",
                  "Carvalho",
                  "Valente"
                ],
                "mid": [
                  "Costinha",
                  "Maniche",
                  "Mendes"
                ],
                "fwd": [
                  "Deco",
                  "Carlos Alberto",
                  "Derlei"
                ]
              }
            },
            {
              "id": 12,
              "word": "MONACO",
              "hint": "2004 Şampiyonlar Ligi finaline kadar Real Madrid ve Chelsea'yi eleyen Didier Deschamps kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-3",
                "teamType": "Kulüp Takımı",
                "year": "2004 Şampiyonlar Ligi Finalisti",
                "gk": "Roma",
                "def": [
                  "Ibarra",
                  "Rodriguez",
                  "Givet",
                  "Evra"
                ],
                "mid": [
                  "Cisse",
                  "Bernardi",
                  "Zikos"
                ],
                "fwd": [
                  "Giuly",
                  "Morientes",
                  "Rothen"
                ]
              }
            },
            {
              "id": 13,
              "word": "FRANSA",
              "hint": "1998 Dünya Kupası finalinde Brezilya'yı Zidane'ın 2 kafa golüyle 3-0 deviren şampiyon kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-2-1",
                "teamType": "Milli Takım",
                "year": "1998 Dünya Kupası Şampiyonu",
                "gk": "Barthez",
                "def": [
                  "Thuram",
                  "Leboeuf",
                  "Desailly",
                  "Lizarazu"
                ],
                "mid": [
                  "Karembeu",
                  "Deschamps",
                  "Petit"
                ],
                "fwd": [
                  "Zidane",
                  "Djorkaeff",
                  "Guivarc'h"
                ]
              }
            },
            {
              "id": 14,
              "word": "İSPANYA",
              "hint": "2010 Johannesburg finalinde Hollanda'yı uzatmalarda Iniesta'nın golüyle geçerek ilk dünya şampiyonluğunu kazanan kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Milli Takım",
                "year": "2010 Dünya Kupası Şampiyonu",
                "gk": "Casillas",
                "def": [
                  "Ramos",
                  "Pique",
                  "Puyol",
                  "Capdevila"
                ],
                "mid": [
                  "Busquets",
                  "Xabi Alonso"
                ],
                "fwd": [
                  "Pedro",
                  "Xavi",
                  "Iniesta",
                  "Villa"
                ]
              }
            },
            {
              "id": 15,
              "word": "TÜRKİYE",
              "hint": "2002 Dünya Kupası yarı finalinde Brezilya karşısına çıkan dünya üçüncüsü efsanevi milli kadromuz",
              "difficulty": "Kolay",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Yarı Final",
                "gk": "Rüştü",
                "def": [
                  "Fatih",
                  "Alpay",
                  "Bülent",
                  "Ümit D."
                ],
                "mid": [
                  "Tugay",
                  "Emre B.",
                  "Yıldıray",
                  "Hasan Şaş"
                ],
                "fwd": [
                  "Hakan Ş.",
                  "İlhan M."
                ]
              }
            },
            {
              "id": 16,
              "word": "LİVERPOOL",
              "hint": "2005 İstanbul finalinde Milan'a karşı 3-0'dan dönüp Şampiyonlar Ligi kupasını kaldıran mucize kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-4-1-1",
                "teamType": "Kulüp Takımı",
                "year": "2005 Şampiyonlar Ligi Şampiyonu",
                "gk": "Dudek",
                "def": [
                  "Finnan",
                  "Carragher",
                  "Hyypia",
                  "Traore"
                ],
                "mid": [
                  "Luis Garcia",
                  "Alonso",
                  "Gerrard",
                  "Riise"
                ],
                "fwd": [
                  "Kewell",
                  "Baros"
                ]
              }
            },
            {
              "id": 17,
              "word": "REALMADRİD",
              "hint": "2002 Hampden Park finalinde Leverkusen'e Zidane'ın sol ayak volesiyle 9. kupasını kazanan Los Galacticos kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2002 Şampiyonlar Ligi Şampiyonu",
                "gk": "Cesar Sanchez",
                "def": [
                  "Salgado",
                  "Hierro",
                  "Helguera",
                  "Roberto Carlos"
                ],
                "mid": [
                  "Figo",
                  "Makelele",
                  "Solari"
                ],
                "fwd": [
                  "Zidane",
                  "Raul",
                  "Morientes"
                ]
              }
            },
            {
              "id": 18,
              "word": "GALATASARAY",
              "hint": "17 Mayıs 2000'de Parken Stadı'nda Arsenal'i penaltılarla devirerek UEFA Kupası'nı kaldıran namağlup efsane kadro",
              "difficulty": "Kolay",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2000 UEFA Kupası Şampiyonu",
                "gk": "Taffarel",
                "def": [
                  "Capone",
                  "Bülent K.",
                  "Popescu",
                  "Ergün P."
                ],
                "mid": [
                  "Okan B.",
                  "Suat K.",
                  "Emre B.",
                  "Hagi"
                ],
                "fwd": [
                  "Arif E.",
                  "Hakan Şükür"
                ]
              }
            },
            {
              "id": 19,
              "word": "BARCELONA",
              "hint": "2011 Wembley finalinde Manchester United'ı sahadan silen Guardiola'nın Tiki-Taka şaheseri kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-3",
                "teamType": "Kulüp Takımı",
                "year": "2011 Şampiyonlar Ligi Şampiyonu",
                "gk": "Valdes",
                "def": [
                  "Alves",
                  "Mascherano",
                  "Pique",
                  "Abidal"
                ],
                "mid": [
                  "Xavi",
                  "Busquets",
                  "Iniesta"
                ],
                "fwd": [
                  "Pedro",
                  "Messi",
                  "Villa"
                ]
              }
            },
            {
              "id": 20,
              "word": "ARSENAL",
              "hint": "2003-2004 Premier Lig sezonunu hiç mağlup olmadan 49 maçlık seriyle bitiren The Invincibles kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2004 Yenilmezler",
                "gk": "Lehmann",
                "def": [
                  "Lauren",
                  "Toure",
                  "Campbell",
                  "Cole"
                ],
                "mid": [
                  "Ljungberg",
                  "Vieira",
                  "Gilberto",
                  "Pires"
                ],
                "fwd": [
                  "Bergkamp",
                  "Henry"
                ]
              }
            },
            {
              "id": 21,
              "word": "PARMA",
              "hint": "1999 Moskova finalinde Marsilya'yı 3-0 yenerek UEFA Kupası'nı kazanan, kalesinde genç Buffon'un devleştiği efsane İtalyan kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "3-5-2",
                "teamType": "Kulüp Takımı",
                "year": "1999 UEFA Kupası Şampiyonu",
                "gk": "Buffon",
                "def": [
                  "Thuram",
                  "Sensini",
                  "Cannavaro"
                ],
                "mid": [
                  "Fuser",
                  "Dino Baggio",
                  "Boghossian",
                  "Veron",
                  "Vanoli"
                ],
                "fwd": [
                  "Chiesa",
                  "Crespo"
                ]
              }
            },
            {
              "id": 22,
              "word": "DORTMUND",
              "hint": "1997 Münih finalinde son şampiyon Juventus'u Riedle ve 19 yaşındaki Ricken'in aşırtma golüyle 3-1 yıkan Ottmar Hitzfeld kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "3-5-2",
                "teamType": "Kulüp Takımı",
                "year": "1997 Şampiyonlar Ligi Şampiyonu",
                "gk": "Klos",
                "def": [
                  "Kohler",
                  "Sammer",
                  "Kree"
                ],
                "mid": [
                  "Reuter",
                  "Lambert",
                  "Paulo Sousa",
                  "Möller",
                  "Heinrich"
                ],
                "fwd": [
                  "Riedle",
                  "Chapuisat"
                ]
              }
            },
            {
              "id": 23,
              "word": "DEPORTİVO",
              "hint": "1999-2000 sezonunda Riazor'da devleri dize getirerek kulüp tarihinin tek La Liga şampiyonluğunu kazanan Super Depor kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Kulüp Takımı",
                "year": "2000 La Liga Şampiyonu",
                "gk": "Songo'o",
                "def": [
                  "Manuel Pablo",
                  "Naybet",
                  "Donato",
                  "Romero"
                ],
                "mid": [
                  "Mauro Silva",
                  "Flavio",
                  "Victor",
                  "Djalminha",
                  "Fran"
                ],
                "fwd": [
                  "Roy Makaay"
                ]
              }
            },
            {
              "id": 24,
              "word": "LEVERKUSEN",
              "hint": "2002 yılında lig, kupa ve Şampiyonlar Ligi'nde aynı sezon üç ikincilik yaşayarak tarihe geçen Klaus Toppmöller kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-1-4-1",
                "teamType": "Kulüp Takımı",
                "year": "2002 Şampiyonlar Ligi Finalisti",
                "gk": "Butt",
                "def": [
                  "Sebescen",
                  "Zivkovic",
                  "Lucio",
                  "Placente"
                ],
                "mid": [
                  "Ramelow",
                  "Schneider",
                  "Ballack",
                  "Bastürk",
                  "Ze Roberto"
                ],
                "fwd": [
                  "Neuville"
                ]
              }
            },
            {
              "id": 25,
              "word": "İNTER",
              "hint": "2010 Madrid finalinde Bayern Münih'i Diego Milito'nun iki golüyle devirip İtalya'nın ilk Treble zaferini kazanan Mourinho kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Kulüp Takımı",
                "year": "2010 Şampiyonlar Ligi Şampiyonu",
                "gk": "Julio Cesar",
                "def": [
                  "Maicon",
                  "Lucio",
                  "Samuel",
                  "Chivu"
                ],
                "mid": [
                  "Zanetti",
                  "Cambiasso",
                  "Eto'o",
                  "Sneijder",
                  "Pandev"
                ],
                "fwd": [
                  "Diego Milito"
                ]
              }
            }
          ]
        },
        {
          "id": "futbol-efsaneler",
          "name": "Futbol & Efsane İsimler",
          "iconKey": "soccer",
          "badge": "Efsaneler",
          "description": "Dünya ve Türk futbol tarihine damga vuran yıldızlar ve stadyumlar",
          "levels": [
            {
              "id": 1,
              "word": "RÜŞTÜ",
              "hint": "2002 Dünya Kupası üçüncülüğümüzde yüz boyası ve kurtarışlarıyla UEFA yılın 11'ine giren efsane Türk kaleci",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "GERRARD",
              "hint": "2005 İstanbul finalinde takımı 3-0 gerideyken tarihi geri dönüşü ateşleyen Liverpool kaptanı",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "DORTMUND",
              "hint": "Signal Iduna Park'ta 25 bin kişilik devasa Sarı Duvar tribünüyle tanınan Alman futbol devi",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ZİDANE",
              "hint": "2002 Şampiyonlar Ligi finalinde Leverkusen'e sol ayağıyla attığı voleyle tarihe geçen Fransız maestro",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "AJAX",
              "hint": "Cruyff ve Rinus Michels'in Total Futbol felsefesini dünyaya armağan eden Hollanda kulübü",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "MODRİC",
              "hint": "2018'de Ballon d'Or kazanan ve Hırvatistan'ı Dünya Kupası finaline taşıyan orta saha maestrosu",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BUFFON",
              "hint": "İtalya ile 2006 Dünya Kupası'nı kazanan, Juventus kalesini 20 yıldan fazla koruyan efsane eldiven",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "DROGBA",
              "hint": "2012 Şampiyonlar Ligi finalini son dakika kafası ve kupayı getiren penaltısıyla Chelsea'ye kazandıran Fildişili kral",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "CANNAVARO",
              "hint": "2006 Dünya Kupası şampiyonu İtalya'nın kaptanı olarak Ballon d'Or kazanan nadir savunma oyuncusu",
              "difficulty": "Zor"
            },
            {
              "id": 10,
              "word": "RONALDO",
              "hint": "El Fenomeno lakaplı, 2002 Dünya Kupası finalinde 2 gol atarak şampiyonluğu getiren Brezilyalı 9 numara",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "basketbol-nba",
          "name": "Basketbol & NBA",
          "iconKey": "basketball",
          "badge": "Parke Ateşi",
          "description": "NBA efsaneleri, hanedanlıklar ve unutulmaz şutlar",
          "levels": [
            {
              "id": 1,
              "word": "KOBE",
              "hint": "Black Mamba lakaplı, Los Angeles Lakers formasıyla bir maçta 81 sayı atan efsanevi süperstar",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "CURRY",
              "hint": "NBA tarihinde 3000 üçlük barajını geçen ilk oyuncu olan Golden State guardı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "CELTİCS",
              "hint": "Tarihinde 18 NBA şampiyonluğu ile lig rekorunu elinde bulunduran yeşil-beyazlı Boston takımı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "JORDAN",
              "hint": "Chicago Bulls ile 6 kez NBA şampiyonu olan ve tüm zamanların en büyüğü kabul edilen 23 numara",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "LEBRON",
              "hint": "Kareem Abdul-Jabbar'ı geçerek NBA tarihinin en çok sayı atan oyuncusu unvanını kazanan Kral",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SHAQ",
              "hint": "Durdurulamaz cüssesi ve smaçlarıyla pota camlarını kıran efsanevi dev pivot Shaquille O'Neal",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "NOWİTZKİ",
              "hint": "Tek ayak üstü fadeaway şutuyla Dallas Mavericks'i 2011'de tarihi şampiyonluğa taşıyan Alman yıldız",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "GİANNİS",
              "hint": "Milwaukee Bucks'ı 50 yıl sonra şampiyonluğa taşıyan Greek Freak lakaplı atletik forvet",
              "difficulty": "Zor"
            },
            {
              "id": 9,
              "word": "DUNCAN",
              "hint": "San Antonio Spurs ile 3 farklı dekatta 5 şampiyonluk yaşayan The Big Fundamental",
              "difficulty": "Zor"
            },
            {
              "id": 10,
              "word": "WARRİORS",
              "hint": "2015-2016 sezonunda 73 galibiyet 9 mağlubiyet alarak normal sezon rekorunu kıran San Francisco takımı",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "f1-motorspor",
          "name": "Formula 1 & Hız",
          "iconKey": "f1",
          "badge": "Pole Pozisyonu",
          "description": "Hız tutkusu, efsane pilotlar ve tarihi yarış pistleri",
          "levels": [
            {
              "id": 1,
              "word": "SENNA",
              "hint": "Yağmur yarışlarındaki ustalığıyla F1 tarihinin en tutkulu efsanesi sayılan Brezilyalı pilot",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "MONACO",
              "hint": "F1 takvimindeki en dar, lüks yatların ve kumarhanelerin arasından geçen sokak pisti",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "FERRARİ",
              "hint": "Şahlanan at amblemiyle Formula 1'in kuruluşundan beri her sezonda yarışmış tek İtalyan takım",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "HAMİLTON",
              "hint": "7 kez Dünya Şampiyonu olan ve 100'den fazla yarış galibiyeti elde eden İngiliz pilot",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SCHUMACHER",
              "hint": "Ferrari ile üst üste 5 kez olmak üzere toplam 7 dünya şampiyonluğu kazanan Alman efsane",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "VERSTAPPEN",
              "hint": "Red Bull ile rekorları altüst eden, bir sezonda en çok yarış kazanan Hollandalı pilot",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "SİLVERSTONE",
              "hint": "1950 yılında tarihteki ilk resmi Formula 1 yarışına ev sahipliği yapmış olan efsanevi İngiliz pisti",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "PİTSTOP",
              "hint": "F1 yarışlarında 4 lastiğin 2 saniyenin altında değiştirildiği pit alanı taktik operasyonu",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "SPA",
              "hint": "Belçika Ardenler ormanındaki meşhur Eau Rouge virajıyla tanınan en uzun pist",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "ALONSO",
              "hint": "2005 ve 2006'da Renault ile Michael Schumacher hegemonyasını yıkarak şampiyon olan İspanyol boğa",
              "difficulty": "Orta"
            }
          ]
        }
      ]
    },
    {
      "id": "dizi-film",
      "name": "Dizi & Sinema",
      "iconKey": "clapper",
      "color": "from-purple-500 to-indigo-600",
      "description": "Kült filmler, unutulmaz diziler, anime & manga evreni, animasyonlar ve sinema yıldızları",
      "subcategories": [
        {
          "id": "film-efsaneler",
          "name": "Film & Efsane Yapımlar",
          "iconKey": "film",
          "badge": "Kült Sinema",
          "description": "Sinema tarihine geçen dev bütçeli kült başyapıtlar",
          "levels": [
            {
              "id": 1,
              "word": "GODFATHER",
              "hint": "Marlon Brando'nun Vito Corleone'yi canlandırdığı, sinema tarihinin en büyük mafya başyapıtı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "İNCEPTİON",
              "hint": "İnsanların zihinlerine rüya içinde rüya katmanlarına inerek fikir yerleştirme operasyonu",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "GLADYATOR",
              "hint": "General Maximus'un Roma arenasında intikam peşinde koştuğu Ridley Scott başyapıtı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PARASİTE",
              "hint": "Yabancı dilde bir yapım olarak En İyi Film Oscar'ını kazanan ilk film olan Bong Joon-ho şaheseri",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "TİTANİC",
              "hint": "Asla batmaz denilen transatlantik gemisinin trajik batışını ve Jack ile Rose'u anlatan başyapıt",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "MATRİX",
              "hint": "Kırmızı hapı seçerek simülasyon dünyasından uyanan seçilmiş kişi Neo'nun hikayesi",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "AVATAR",
              "hint": "Pandora gezegenindeki Na'vi halkını ve kutsal Ağacı korumaya çalışan insanların hikayesi",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "INTERSTELLAR",
              "hint": "Solucan deliğinden geçerek insanlığa yeni bir yuva arayan Cooper ve kızı Murphy'nin destanı",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "BARBİE",
              "hint": "Greta Gerwig yönetmenliğinde Margot Robbie'nin başrolüyle gişe rekorları kıran pembe dünyalı 2023 filmi",
              "difficulty": "Kolay"
            },
            {
              "id": 10,
              "word": "LALALAND",
              "hint": "Los Angeles'ta caz piyanisti Sebastian ile oyuncu Mia'nın aşkını anlatan Oscar ödüllü müzikal film",
              "difficulty": "Kolay"
            },
            {
              "id": 11,
              "word": "HOGWARTS",
              "hint": "Harry Potter evreninde dört binadan oluşan ve Dumbledore'un yönettiği efsanevi cadılık ve büyücülük okulu",
              "difficulty": "Kolay"
            },
            {
              "id": 12,
              "word": "AMELİE",
              "hint": "Paris'in Montmartre semtinde başkalarının hayatını gizlice güzelleştirmeye çalışan hayalperest genç kadının filmi",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "kult-diziler",
          "name": "Diziler & Karakterler",
          "iconKey": "tv",
          "badge": "Dizi Maratonu",
          "description": "Televizyon tarihine geçen karakterler ve sürükleyici yapımlar",
          "levels": [
            {
              "id": 1,
              "word": "HEİSENBERG",
              "hint": "Breaking Bad dizisinde Walter White'ın uyuşturucu imparatorluğu kurarken kullandığı takma ad",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SHELBY",
              "hint": "Peaky Blinders dizisinde kasketlerinde jilet taşıyan Birmingham çetesinin lideri Thomas ve ailesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "STARK",
              "hint": "Game of Thrones'ta Kış Geliyor sözüyle bilinen, Kışyarı'nın kadim koruyucu hanedanı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "SOPRANO",
              "hint": "New Jersey mafya babasının psikiyatrist koltuğundaki seanslarını konu alan televizyon klasiği",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "SHERLOCK",
              "hint": "221B Baker Sokağı'nda yaşayan, dahi gözlem yeteneğiyle Scotland Yard'ı hayrete düşüren dedektif",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "DARK",
              "hint": "Winden kasabasındaki bir mağarada 33 yıllık döngülerle zamanda yolculuk yapılan karmaşık Alman dizisi",
              "difficulty": "Zor"
            },
            {
              "id": 7,
              "word": "BERLİN",
              "hint": "La Casa de Papel dizisinde İspanya Darphanesi soygununun lideri olan karizmatik Andres",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "LOST",
              "hint": "Gizemli bir Pasifik adasına düşen Oceanic 815 uçağı kazazedelerinin hayatta kalma mücadelesi",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "FRİENDS",
              "hint": "New York'taki Central Perk kafesinde buluşan Rachel, Monica, Phoebe, Joey, Chandler ve Ross altılısının efsane sitcomu",
              "difficulty": "Kolay"
            },
            {
              "id": 10,
              "word": "WEDNESDAY",
              "hint": "Addams Ailesi'nin gotik kızının Nevermore Akademisi'ndeki gizemleri çözdüğü Jenna Ortega başrollü dizi",
              "difficulty": "Kolay"
            },
            {
              "id": 11,
              "word": "SQUIDGAME",
              "hint": "Borç batağındaki 456 yarışmacının çocuk oyunlarıyla hayatta kalmaya çalıştığı Güney Kore fenomeni dizi",
              "difficulty": "Kolay"
            },
            {
              "id": 12,
              "word": "BRİDGERTON",
              "hint": "19. yüzyıl Londra sosyetesinde Lady Whistledown'un dedikodu bültenleriyle çalkalanan popüler dönem dizisi",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "oyuncular-yonetmenler",
          "name": "Oyuncular & Yönetmenler",
          "iconKey": "director",
          "badge": "Ustalar",
          "description": "Kamera önünün ve arkasının en büyük sinema dehaları",
          "levels": [
            {
              "id": 1,
              "word": "TARANTİNO",
              "hint": "Pulp Fiction, Kill Bill ve Django filmleriyle bilinen doğrusal olmayan kurgunun ustası",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "NOLAN",
              "hint": "Inception, Tenet, Oppenheimer ve Kara Şövalye gibi zihin büken filmlerin yönetmeni",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SCORSESE",
              "hint": "Taksi Şoförü, Goodfellas ve Para Avcısı filmlerinin Oscar ödüllü Amerikalı yönetmeni",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KUBRİCK",
              "hint": "2001 Bir Uzay Destanı, Otomatik Portakal ve Shining filmlerinin kusursuzluk takıntılı yönetmeni",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "DİCAPRİO",
              "hint": "Titanik, Başlangıç ve The Revenant filmlerinde rol alan Oscar ödüllü Amerikalı aktör",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "PACİNO",
              "hint": "Baba, Yaralı Yüz ve Kadın Kokusu filmlerindeki oyunculuğuyla efsaneleşen dev aktör Al Pacino",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "HİTCHCOCK",
              "hint": "Sapık ve Arka Pencere filmleriyle gerilim türünün babası kabul edilen İngiliz yönetmen",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "MİYAZAKİ",
              "hint": "Ruhların Kaçışı ve Prenses Mononoke'yi yaratan Studio Ghibli kurucusu anime ustası",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "HEPBURN",
              "hint": "Tiffany'de Kahvaltı ve Roma Tatili filmleriyle zarafetin ebedi simgesi haline gelen efsane aktris Audrey",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "ZENDAYA",
              "hint": "Euphoria dizisiyle Emmy ödülü kazanan, Dune ve Örümcek-Adam serilerinin genç süperstar aktrisi",
              "difficulty": "Kolay"
            },
            {
              "id": 11,
              "word": "STREEP",
              "hint": "Şeytan Marka Giyer ve Sophie'nin Seçimi dahil 21 kez Oscar'a aday gösterilerek rekor kıran usta aktris Meryl",
              "difficulty": "Orta"
            },
            {
              "id": 12,
              "word": "ROBBİE",
              "hint": "Barbie, Ben Tonya ve Para Avcısı filmleriyle hem başrol hem yapımcı olarak parlayan Avustralyalı yıldız Margot",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "oscar-sinema-tarihi",
          "name": "Ödüller & Sinema Tarihi",
          "iconKey": "medal",
          "badge": "Akademi",
          "description": "Oscar rekorları, festivaller ve unutulmaz sinema anları",
          "levels": [
            {
              "id": 1,
              "word": "OPPENHEİMER",
              "hint": "Manhattan Projesi ile ilk atom bombasını geliştiren teorik fizikçinin hayatını anlatan 2023 yapımı Oscar fatihi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SCHİNDLER",
              "hint": "2. Dünya Savaşı'nda 1200 Yahudi'nin hayatını kurtaran Alman sanayicinin gerçek hikayesi",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "CASABLANCA",
              "hint": "Tekrar çal Sam repliğiyle bilinen, Humphrey Bogart ve Ingrid Bergman'ın 1942 yapımı sinema klasiği",
              "difficulty": "Zor"
            },
            {
              "id": 4,
              "word": "FİGHTCLUB",
              "hint": "Tyler Durden ve Anlatıcı'nın sabun üreterek tüketim toplumuna başkaldırdığı David Fincher filmi",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "CANNES",
              "hint": "Fransız Rivierası'nda düzenlenen, sinemanın en prestijli Altın Palmiye ödülünün verildiği festival",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "OSCAR",
              "hint": "Sinema Sanatları ve Bilimleri Akademisi tarafından her yıl Los Angeles'ta dağıtılan altın heykelcik",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BENHUR",
              "hint": "Tarihte 11 Oscar kazanarak bu rekoru kıran ilk tarihi epik sinema başyapıtı",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "BİRDMAN",
              "hint": "Tek plan sekans gibi kurgulanarak En İyi Film Oscar'ını kazanan Alejandro Inarritu filmi",
              "difficulty": "Zor"
            },
            {
              "id": 9,
              "word": "WHİPLASH",
              "hint": "Acımasız caz orkestrası şefi Fletcher ile genç baterist Andrew arasındaki tutkulu mücadeleyi anlatan Oscar'lı film",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "NOMADLAND",
              "hint": "Chloe Zhao'ya En İyi Yönetmen, Frances McDormand'a 3. En İyi Kadın Oyuncu Oscar'ını kazandıran yol filmi",
              "difficulty": "Zor"
            },
            {
              "id": 11,
              "word": "ROMA",
              "hint": "Alfonso Cuaron'un 1970'ler Meksiko'sunda bir ev işçisi kadının hikayesini siyah-beyaz anlattığı 3 Oscar'lı başyapıt",
              "difficulty": "Orta"
            },
            {
              "id": 12,
              "word": "CHİCAGO",
              "hint": "Catherine Zeta-Jones ve Renee Zellweger'in başrolünde olduğu, 6 dalda Oscar kazanan 2002 yapımı caz müzikali",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "anime-manga",
          "name": "Anime & Manga Dünyası",
          "iconKey": "anime",
          "badge": "Japon Kültürü",
          "description": "Japon animasyon sanatının ve manga dünyasının en unutulmaz karakterleri ve serileri",
          "levels": [
            {
              "id": 1,
              "word": "NARUTO",
              "hint": "İçinde Dokuz Kuyruklu Tilki mühürlü olan, Hokage olma hayaliyle büyüyen turuncu tulumlu ninja",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "PİKACHU",
              "hint": "Pokemon evreninde Ash Ketchum'un omzundan inmeyen, yanaklarından elektrik saçan sarı sevimli dostu",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "TOTORO",
              "hint": "Studio Ghibli'nin simgesi haline gelen, yağmurda şemsiye tutan dev ve sevimli orman ruhu",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "SAİLORMOON",
              "hint": "Ay Işığı adına kötülükle savaşan Usagi Tsukino ve gezegen koruyucusu kızların efsanevi büyülü anime serisi",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "ONEPİECE",
              "hint": "Hasır Şapkalı Luffy ve tayfasının Korsanlar Kralı olmak için Grand Line denizlerinde çıktığı destansı macera",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "CHİHİRO",
              "hint": "Miyazaki'nin Oscar ödüllü Ruhların Kaçışı filminde anne ve babasını kurtarmak için ruhlar hamamında çalışan küçük kız",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "DEATHNOTE",
              "hint": "İsmi yazılan kişinin hayatını sonlandıran doğaüstü defteri bulan Light Yagami ile dedektif L'nin zeka savaşı",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "ACKERMAN",
              "hint": "Attack on Titan evreninde insanlığın en güçlü askerleri Mikasa ve Yüzbaşı Levi'nin taşıdığı efsanevi soyadı",
              "difficulty": "Zor"
            },
            {
              "id": 9,
              "word": "TANJİRO",
              "hint": "Demon Slayer (İblis Keser) serisinde iblise dönüşen kız kardeşi Nezuko'yu iyileştirmek için savaşan su nefesi ustası",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "GOKU",
              "hint": "Dragon Ball evreninde Süper Saiyan dönüşümü ve Kamehameha dalgasıyla tanınan efsanevi savaşçı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "animasyon-dunyasi",
          "name": "Animasyon & Pixar Klasiği",
          "iconKey": "wand",
          "badge": "Büyülü Ekran",
          "description": "Disney, Pixar ve DreamWorks dünyasının kalplere dokunan unutulmaz animasyonları",
          "levels": [
            {
              "id": 1,
              "word": "ELSA",
              "hint": "Karlar Ülkesi (Frozen) filminde buzdan saray inşa eden sihirli güçlere sahip Arendelle kraliçesi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "SHREK",
              "hint": "Bataklığında huzur ararken Eşek ve Çizmeli Kedi ile Prenses Fiona’yı kurtaran sevimli yeşil dev",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SİMBA",
              "hint": "Aslan Kral filminde babası Mufasa'nın ardından Hakuna Matata felsefesiyle büyüyüp tahtını geri alan genç aslan",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "RAPUNZEL",
              "hint": "Karmakarışık (Tangled) filminde yüksek bir kulede büyüyen, metrelerce uzunluktaki sihirli sarı saçlı prenses",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "MOANA",
              "hint": "Okyanusun seçtiği, yarı tanrı Maui ile birlikte adasını kurtarmak için yelken açan cesur Polinezyalı kız",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "WALLE",
              "hint": "Terk edilmiş Dünya'da tek başına çöpleri sıkıştırırken robot EVE'e aşık olan sevimli Pixar robotu",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "WOODY",
              "hint": "Oyuncak Hikayesi (Toy Story) serisinde Andy'nin en sevdiği kovboy bebeği ve Buzz Lightyear'ın en yakın dostu",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "MULAN",
              "hint": "Hasta babasının yerine kılık değiştirerek Çin ordusuna katılan ve ülkesini kurtaran efsanevi kadın savaşçı",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "ZOOTOPİA",
              "hint": "İlk tavşan polis memuru Judy Hopps ile kurnaz tilki Nick Wilde’ın birlikte suç çözdüğü hayvanlar metropolü",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "RATATOUİLLE",
              "hint": "Paris'in en ünlü restoranında aşçı şapkasının altına gizlenerek gurme yemekler pişiren fare Remy'nin hikayesi",
              "difficulty": "Zor"
            }
          ]
        }
      ]
    },
    {
      "id": "kozmetik",
      "name": "Moda, Kozmetik & Güzellik",
      "iconKey": "perfume",
      "color": "from-pink-500 to-rose-600",
      "description": "Makyaj sanatı, cilt bakımı sırları, dünyaca ünlü moda evleri, parfümler ve değerli taşlar",
      "subcategories": [
        {
          "id": "makyaj-kozmetik",
          "name": "Makyaj & Güzellik Sanatı",
          "iconKey": "lipstick",
          "badge": "Güzellik Çantası",
          "description": "Makyaj çantasının vazgeçilmez ürünleri, fırça teknikleri ve renk paletleri",
          "levels": [
            {
              "id": 1,
              "word": "RUJ",
              "hint": "Dudaklara renk, nem veya kadifemsi mat doku kazandıran makyaj çantasının en ikonik ürünü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ALLIK",
              "hint": "Elmacık kemiklerine taze, canlı ve pembe-şeftali tonlarında doğal bir ışıltı veren makyaj ürünü",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "RİMEL",
              "hint": "Kirpikleri tek tek ayırıp kıvırarak bakışlara derinlik ve hacim katan fırçalı göz makyajı ürünü",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PRİMER",
              "hint": "Fondöten öncesinde gözenek görünümünü pürüzsüzleştirip makyajın kalıcılığını uzatan makyaj bazı",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "KONTÜR",
              "hint": "Yüz hatlarını gölge ve ışık oyunlarıyla daha belirgin ve boyutlu gösterme makyaj tekniği",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "BRONZER",
              "hint": "Cilde yaz güneşinden yeni dönmüş gibi sıcak ve altın-kahve bir ışıltı kazandıran pudra veya krem ürün",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "MASKARA",
              "hint": "Kirpiklere ekstra uzunluk ve dolgunluk veren, suya dayanıklı çeşitleri de bulunan göz kozmetiği",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "EYELİNER",
              "hint": "Göz kapağının kirpik dibine ince ve keskin kuyruklu çizgi çekmek için kullanılan likit veya jel kalem",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "FONDÖTEN",
              "hint": "Cilt tonunu eşitleyip pürüzsüz bir tuval oluşturmak için yüze uygulanan sıvı veya kompakt ten ürünü",
              "difficulty": "Kolay"
            },
            {
              "id": 10,
              "word": "KAPATICI",
              "hint": "Göz altı halkalarını ve ciltteki ufak renk eşitsizliklerini aydınlatıp gizleyen yoğun pigmentli ürün",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "cilt-bakimi",
          "name": "Cilt & Saç Bakımı",
          "iconKey": "lotus",
          "badge": "Işıltılı Cilt",
          "description": "Serumlar, vitaminler, nemlendirici ritüeller ve modern cilt bakımı içerikleri",
          "levels": [
            {
              "id": 1,
              "word": "TONİK",
              "hint": "Yüz temizliğinden sonra gözenekleri arındırıp cildin pH dengesini tazeleyen sıvı bakım ürünü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "SERUM",
              "hint": "Yüksek konsantrasyonlu aktif içerikleri cildin alt katmanlarına hızla taşıyan damlalıklı bakım iksiri",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "MASKE",
              "hint": "Kil, kağıt veya jel formunda yüze uygulanıp cilde yoğun nem ya da arınma sağlayan haftalık bakım",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "KOLAJEN",
              "hint": "Cilde sıkılık, esneklik ve gençlik kazandıran, vücutta en bol bulunan yapısal güzellik proteini",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "RETİNOL",
              "hint": "İnce çizgileri azaltıp hücre yenilenmesini hızlandıran A vitamini türevi gece bakım bileşeni",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "PEELİNG",
              "hint": "Cilt yüzeyindeki ölü hücreleri nazikçe arındırarak alttaki parlak ve taze dokuyu ortaya çıkarma işlemi",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "KERATİN",
              "hint": "Saç tellerinin ve tırnakların güçlü, parlak ve kırılmaya dirençli olmasını sağlayan temel protein",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "MİSELER",
              "hint": "Mıknatıs gibi çalışan mikroskobik yağ kürecikleriyle makyajı ovalamadan nazikçe çözen temizleme suyu",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "PANTHENOL",
              "hint": "Cildi yatıştırıp bariyeri onaran ve nemi hapseden B5 provitamini içerikli bakım bileşeni",
              "difficulty": "Zor"
            },
            {
              "id": 10,
              "word": "NİASİNAMİD",
              "hint": "Gözenek görünümünü sıkılaştıran, cilt bariyerini güçlendiren ve renk tonunu eşitleyen B3 vitamini formu",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "moda-parfum",
          "name": "Moda İkonları & Parfümler",
          "iconKey": "perfume",
          "badge": "Haute Couture",
          "description": "Paris, Milano ve New York podyumlarına yön veren efsane moda ve parfüm evleri",
          "levels": [
            {
              "id": 1,
              "word": "DİOR",
              "hint": "1947'de New Look koleksiyonuyla kadın modasında devrim yapan, J'adore parfümüyle ünlü Paris moda evi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "VOGUE",
              "hint": "1892'den beri yayınlanan, Anna Wintour yönetiminde küresel moda dünyasının İncil'i kabul edilen dergi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "PRADA",
              "hint": "1913'te Milano'da kurulan, üçgen metal logosu ve Şeytan Marka Giyer filmindeki yeriyle ikonik İtalyan markası",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "GUCCİ",
              "hint": "Floransa’da kurulan, çift G logosu, yeşil-kırmızı şeridi ve Flora parfümüyle tanınan İtalyan moda devi",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "CHANEL",
              "hint": "Küçük siyah elbise, tüvit ceket ve dünyanın en ünlü No.5 parfümünü yaratan Coco'nun Fransız moda evi",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "HERMES",
              "hint": "Turuncu kutuları, ipek eşarpları ve yıllarca sıra beklenen efsanevi Birkin çantalarıyla ünlü Paris evi",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "SEPHORA",
              "hint": "Siyah-beyaz çizgili mağazalarıyla dünyaca ünlü kozmetik, parfüm ve cilt bakımı markalarını buluşturan güzellik zinciri",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "VERSACE",
              "hint": "Altın rengi Medusa başı logosu ve göz alıcı kırmızı halı tasarımlarıyla tanınan İtalyan moda imparatorluğu",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "VALENTİNO",
              "hint": "Kendine özgü tutkulu kırmızı elbiseleri ve Rockstud ayakkabı tasarımlarıyla ünlü Roma merkezli moda evi",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "BALENCİAGA",
              "hint": "İspanyol usta Cristobal tarafından kurulan, heykelsi kesimleri ve avangart sokak modasıyla tanınan lüks marka",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "taki-degerli-taslar",
          "name": "Mücevher, Takı & Kumaşlar",
          "iconKey": "diamond",
          "badge": "Zarafet",
          "description": "Göz kamaştıran değerli taşlar, zarif takılar ve en seçkin kumaş dokuları",
          "levels": [
            {
              "id": 1,
              "word": "İNCİ",
              "hint": "İstiridyelerin içinde sedef katmanlarıyla doğal olarak oluşan, zarafetin simgesi beyaz-krem mücevher tanesi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "İPEK",
              "hint": "Kozalardan elde edilen, parlaklığı ve yumuşak dokusuyla eşarp ve gece elbiselerinde kullanılan asil kumaş",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SAFİR",
              "hint": "Prenses Diana'nın nişan yüzüğüyle ölümsüzleşen, kadifemsi derin mavi rengiyle ünlü değerli taş",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "YAKUT",
              "hint": "Tutkunun ve asaletin simgesi olan, korindon ailesinin ateş kırmızısı rengindeki değerli mücevher taşı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SATEN",
              "hint": "Ön yüzü su gibi kaygan ve parlak dokunan, abiye elbiselerde ve kurdelelerde tercih edilen zarif kumaş",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "KAŞMİR",
              "hint": "Himalaya keçilerinin ince tüylerinden dokunan, hafif ama son derece sıcak tutan lüks triko yünü",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "KADİFE",
              "hint": "Yüzeyi yumuşacık kısa havlarla kaplı, ışığı derin ve asil biçimde yansıtan kraliyet kumaşı",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "ZÜMRÜT",
              "hint": "Kleopatra'nın en sevdiği taş olarak bilinen, büyüleyici koyu yeşil rengiyle ünlü değerli mücevher",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "AMETİST",
              "hint": "Leylak ile koyu menekşe arasındaki büyüleyici mor tonlarıyla tanınan kuvars grubu doğal taş",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "PIRLANTA",
              "hint": "Doğadaki en sert mineral olan elmasın 57 fasetli özel kesimle ışığı gökkuşağı gibi kırdığı tektaş mücevheri",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "genel-kultur",
      "name": "Genel Kültür & Tarih",
      "iconKey": "temple",
      "color": "from-amber-600 to-yellow-700",
      "description": "Antik medeniyetler, tarihi liderler, dönüm noktası savaşlar ve dünya mirası",
      "subcategories": [
        {
          "id": "antik-medeniyetler",
          "name": "Antik Medeniyetler",
          "iconKey": "pyramid",
          "badge": "İlk Çağ",
          "description": "Tarihin şafağında kurulan ilk şehirler, tapınaklar ve krallıklar",
          "levels": [
            {
              "id": 1,
              "word": "MEZOPOTAMYA",
              "hint": "Dicle ve Fırat nehirleri arasında kalan, medeniyetin beşiği sayılan bereketli hilal bölgesi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "KARTACA",
              "hint": "Hannibal'ın filleriyle Alpleri aşarak Roma'ya meydan okuduğu Kuzey Afrika denizci devleti",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "BABİL",
              "hint": "Dünyanın yedi harikasından biri olan Asma Bahçeleri ve Hammurabi Kanunları ile ünlü antik şehir",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "TRUVA",
              "hint": "Çanakkale Boğazı yakınlarında tahta at hilesiyle düşürülen, İlyada destanına konu efsanevi kent",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "MISIR",
              "hint": "Nil Nehri etrafında gelişen, firavunlar ve dev piramitlerle anılan en köklü uygarlık",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SPARTA",
              "hint": "Antik Yunan'da çocukların savaşçı olarak eğitildiği, Termopil Geçidi'nde 300 kişiyle direnen şehir devleti",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SÜMERLER",
              "hint": "Tarihte çivi yazısını, tekerleği ve ziggurat tapınaklarını ilk icat eden Mezopotamya uygarlığı",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GÖBEKLİTEPE",
              "hint": "Şanlıurfa'da bulunan, M.Ö. 9600 yılına tarihlenen tarihin bilinen en eski tapınak kompleksi",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "tarihi-liderler",
          "name": "Tarihi Liderler",
          "iconKey": "crown",
          "badge": "Hükümdarlar",
          "description": "Tarihin akışını değiştiren imparatorlar, fatihler ve kurucular",
          "levels": [
            {
              "id": 1,
              "word": "ATATÜRK",
              "hint": "Kurtuluş Savaşı'nı zafere ulaştırıp Türkiye Cumhuriyeti'ni kuran ulu önder Gazi Mustafa Kemal",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "FATİH",
              "hint": "21 yaşında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan 7. Osmanlı Padişahı Sultan Mehmed",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SEZAR",
              "hint": "Roma Cumhuriyeti'ni imparatorluğa dönüştüren, Senato'da Brütüs ve arkadaşlarınca suikasta uğrayan diktatör",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "İSKENDER",
              "hint": "Makedonya'dan Hindistan'a kadar uzanan devasa imparatorluğu 32 yaşında fetheden Büyük komutan",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NAPOLYON",
              "hint": "Fransız İhtilali sonrası tüm Avrupa'yı dize getiren ve Waterloo Savaşı'nda yenilen imparator",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "CENGİZHAN",
              "hint": "Bozkırdaki tüm kabileleri birleştirerek tarihin en büyük bitişik kara imparatorluğunu kuran Moğol hükümdarı",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "CHURCHİLL",
              "hint": "2. Dünya Savaşı'nda Birleşik Krallık başbakanı olarak radyo konuşmalarıyla halkına direnç veren lider",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "SALAHADDİN",
              "hint": "Hıttin Savaşı'nda Haçlı ordusunu yenerek Kudüs'ü 88 yıl sonra geri alan Eyyubi hükümdarı",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "savaslar-donum-noktalari",
          "name": "Savaşlar & Dönüm Noktaları",
          "iconKey": "swords",
          "badge": "Cepheler",
          "description": "Dünya haritalarını yeniden çizen tarihi muharebeler",
          "levels": [
            {
              "id": 1,
              "word": "ÇANAKKALE",
              "hint": "Çanakkale Geçilmez destanının yazıldığı, müttefik donanmalarının boğazda batırıldığı 1915 zaferi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "MALAZGİRT",
              "hint": "1071 yılında Sultan Alparslan'ın Bizans ordusunu yenerek Anadolu'nun kapılarını Türklere açtığı meydan savaşı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "WATERLOO",
              "hint": "1815 yılında Napolyon Bonapart'ın İngiliz ve Prusya ordularına son kez yenildiği Belçika kasabası",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "NORMANDİYA",
              "hint": "6 Haziran 1944 D-Day günü müttefik ordularının Nazi işgalindeki Fransa kıyılarına yaptığı dev çıkarma",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "İSTANBUL",
              "hint": "1453 yılında 53 günlük kuşatmanın ardından gemilerin karadan yürütülerek fethedildiği tarihi olay",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VİYANA",
              "hint": "Osmanlı ordusunun 1529 ve 1683 yıllarında kuşattığı fakat alamadığı Habsburg başkenti",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "STALİNGRAD",
              "hint": "2. Dünya Savaşı'nda Nazi ordularının Volga kıyısında kuşatılıp imha edildiği en kanlı dönüm noktası",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "KADEŞ",
              "hint": "M.Ö. 1274 yılında Mısır Firavunu II. Ramses ile Hititler arasında yapılan tarihin ilk yazılı barış antlaşması",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "dunya-tarihi",
          "name": "Dünya Tarihi & İcatlar",
          "iconKey": "scroll",
          "badge": "Uygarlık",
          "description": "İnsanlık tarihinin en büyük buluşları ve kültürel devrimleri",
          "levels": [
            {
              "id": 1,
              "word": "RÖNESANS",
              "hint": "14. yüzyılda İtalya'da başlayıp tüm Avrupa'ya yayılan bilim, sanat ve edebiyatta yeniden doğuş dönemi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "MATBAA",
              "hint": "Johannes Gutenberg'in hareketli harflerle kitap basımını yaygınlaştırarak bilgi devrimini başlatan icadı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "REFORM",
              "hint": "Martin Luther'in 95 tezini kilise kapısına asarak Katolik hegemonyasına karşı başlattığı dini hareket",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "SANAYİ",
              "hint": "Buhar makinesinin icadıyla 18. yüzyılda İngiltere'de başlayan ve kol gücünü fabrikalara devreden devrim",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "PUSULA",
              "hint": "Denizcilerin okyanuslarda yön bulmasını sağlayarak Coğrafi Keşifler çağını açan kadim Çin icadı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "ALFABE",
              "hint": "Tarihte seslere dayalı ilk 22 harfli yazı sistemini geliştiren antik denizci Fenikelilerin mirası",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "PARŞÖMEN",
              "hint": "Antik Bergama Krallığı'nda hayvan derisi işlenerek icat edilen, papirüsten çok daha dayanıklı yazı malzemesi",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "TEKERLEK",
              "hint": "M.Ö. 3500 civarında Mezopotamya'da icat edilerek taşımacılığı ve medeniyetin hızını değiştiren buluş",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "bilim",
      "name": "Bilim & Evren",
      "iconKey": "atom",
      "color": "from-cyan-500 to-blue-600",
      "description": "Biyoloji, derin uzay, kuantum fiziği, genetik ve bilimsel keşifler",
      "subcategories": [
        {
          "id": "bilim-dunyasi",
          "name": "Bilim Dünyası & Dahiler",
          "iconKey": "microscope",
          "badge": "Dahiler",
          "description": "Tarihi değiştiren dahi bilim insanları ve teorileri",
          "levels": [
            {
              "id": 1,
              "word": "EİNSTEİN",
              "hint": "Genel ve Özel Görelilik teorilerini kuran, E=mc² formülüyle fizik anlayışını yıkan Nobel ödüllü kuramcı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "NEWTON",
              "hint": "Başına elma düşmesi hikayesiyle bilinen, evrensel kütle çekim ve hareket yasalarını yazan dahi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "TESLA",
              "hint": "Alternatif akım (AC), radyo sinyalleri ve kablosuz elektrik üzerine sayısız patent geliştiren mucit",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "CURİE",
              "hint": "Radyoaktivite alanındaki çalışmalarıyla iki farklı bilim dalında (fizik ve kimya) Nobel alan tek insan",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "DARWİN",
              "hint": "Evrim teorisini ve Doğal Seçilim mekanizmasını Türlerin Kökeni kitabında açıklayan doğa bilimci",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "GALİLEO",
              "hint": "Teleskopla Jüpiter'in 4 uydusunu keşfedip Dünya'nın Güneş etrafında döndüğünü savunan İtalyan bilgin",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "TURİNG",
              "hint": "Enigma şifresini kırıp modern bilgisayar biliminin ve yapay zekanın babası kabul edilen matematikçi",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "HAWKİNG",
              "hint": "Kara deliklerin radyasyon yaydığını kanıtlayan ve Zamanın Kısa Tarihi kitabını yazan kozmolog",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "insan-genetik",
          "name": "İnsan & Genetik",
          "iconKey": "dna",
          "badge": "DNA Evreni",
          "description": "Hücre çekirdeği, genler ve insan bedeninin mucizeleri",
          "levels": [
            {
              "id": 1,
              "word": "MİTOKONDRİ",
              "hint": "Hücrenin oksijenli solunumla ATP enerjisi üreten ve kendi bağımsız DNA'sına sahip enerji santrali",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "PROTEİN",
              "hint": "Amino asitlerin peptit bağlarıyla birleşmesinden oluşan, kas ve dokuların temel yapı taşı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "HEMOGLOBİN",
              "hint": "Kırmızı kan hücrelerinde (alyuvarlar) demir mineraliyle oksijen taşıyan dev protein molekülü",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KROMOZOM",
              "hint": "İnsan vücut hücrelerinde 46 adet bulunan, DNA'nın histon proteinlerine sarılmış ipliksi paketi",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "NÖRON",
              "hint": "Beyin ve sinir sisteminde elektrokimyasal sinyallerle bilgi ileten milyarlarca sinir hücresi",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "EPİGENETİK",
              "hint": "DNA dizilimi değişmeden çevresel faktörlerle genlerin açılıp kapanmasını inceleyen modern biyoloji dalı",
              "difficulty": "Çok Zor"
            },
            {
              "id": 7,
              "word": "TELOMERAZ",
              "hint": "Kromozom uçlarındaki koruyucu telomer başlıklarını onararak yaşlanmayı yavaşlatan enzim",
              "difficulty": "Çok Zor"
            },
            {
              "id": 8,
              "word": "HİPOKAMPÜS",
              "hint": "Beynin temporal lobunda yer alan, kısa süreli anıları uzun süreli belleğe dönüştüren merkez",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "uzay-gezegenler",
          "name": "Uzay & Gezegenler",
          "iconKey": "planet",
          "badge": "Derin Uzay",
          "description": "Güneş sistemi, galaksiler, karadelikler ve nebulalar",
          "levels": [
            {
              "id": 1,
              "word": "ANDROMEDA",
              "hint": "Samanyolu galaksimize en yakın olan ve saniyede 110 km hızla bize doğru yaklaşan sarmal komşu galaksi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "JÜPİTER",
              "hint": "Güneş Sistemi'ndeki diğer tüm gezegenlerin toplamından daha ağır olan, Büyük Kırmızı Leke fırtınalı gaz devi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "KARADELİK",
              "hint": "Işığın bile kaçamayacağı kadar devasa bir kütleçekim kuvvetine sahip çökmüş yıldız kalıntısı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "SÜPERNOVA",
              "hint": "Büyük kütleli bir yıldızın ömrünün sonunda nükleer yakıtını tüketerek akıl almaz şiddetle patlaması",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "VOYAGER",
              "hint": "1977 yılında fırlatılan ve yıldızlararası uzaya çıkan insan yapımı en uzak uzay sondası",
              "difficulty": "Zor"
            },
            {
              "id": 6,
              "word": "NEBULA",
              "hint": "Uzayda yeni yıldızların ve gezegenlerin doğduğu devasa gaz, toz ve plazma bulutu (Bulutsu)",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "HUBBLE",
              "hint": "1990 yılından beri Dünya yörüngesinde dönerek evrenin derinliklerinden görüntüler toplayan uzay teleskobu",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "JAMESWEBB",
              "hint": "Lagrange 2 noktasında altın kaplama aynalarıyla Büyük Patlama'dan sonraki ilk yıldızları gözleyen teleskop",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "fizik-kimya",
          "name": "Fizik & Kimya",
          "iconKey": "flask",
          "badge": "Madde & Enerji",
          "description": "Atom altı parçacıklar, termodinamik ve kimyasal elementler",
          "levels": [
            {
              "id": 1,
              "word": "KUANTUM",
              "hint": "Atom altı düzeyde enerjinin paketler halinde yayıldığını ve olasılık dalgalarını açıklayan modern fizik alanı",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "ELEKTRON",
              "hint": "Atom çekirdeğinin etrafındaki orbitallerde dönen negatif yüklü temel parçacık",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "FOTON",
              "hint": "Işığın ve elektromanyetik radyasyonun kütlesiz kuantumu olan temel enerji parçacığı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ENTROPİ",
              "hint": "Termodinamiğin ikinci yasası gereği izole bir sistemde düzensizliğin sürekli artma eğilimi",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "GRAVİTASYON",
              "hint": "Kütlesi olan tüm cisimlerin birbirini uzay-zaman eğriliği sayesinde çekmesi olgusu",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "İZOTOP",
              "hint": "Proton sayısı aynı fakat nötron sayısı farklı olan aynı kimyasal elementin varyantları",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "RADYASYON",
              "hint": "Dalgalar veya parçacıklar şeklinde uzayda yayılan yüksek enerjili elektromanyetik salınım",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "HİDROJEN",
              "hint": "Evrendeki atomların %75'ini oluşturan, periyodik tablonun en hafif ve 1 numaralı elementi",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "cografya",
      "name": "Coğrafya & Dünya",
      "iconKey": "globe",
      "color": "from-teal-500 to-cyan-700",
      "description": "Ülkeler, başkentler, ikonik landmarklar, yüce dağlar ve okyanuslar",
      "subcategories": [
        {
          "id": "ulkeler-baskentler",
          "name": "Ülkeler & Başkentler",
          "iconKey": "globe",
          "badge": "Gezgin",
          "description": "Dünya haritasındaki şaşırtıcı başkentler ve ülkeler",
          "levels": [
            {
              "id": 1,
              "word": "CANBERRA",
              "hint": "Sidney ve Melbourne arasındaki rekabet yüzünden 1908'de uzlaşma başkenti seçilen Avustralya şehri",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "İSVİÇRE",
              "hint": "Resmi bir başkenti bulunmayan, Bern şehrinin federal merkez statüsünde olduğu Alp ülkesi",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "REYKJAVİK",
              "hint": "Gayzerler, volkanlar ve buzullar ülkesi İzlanda'nın dünyanın en kuzeyindeki başkenti",
              "difficulty": "Zor"
            },
            {
              "id": 4,
              "word": "JAPONYA",
              "hint": "Güneşin Doğduğu Ülke olarak anılan, 6800 adadan oluşan Doğu Asya ada ülkesi",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BREZİLYA",
              "hint": "Amazon Yağmur Ormanları'nın çoğuna ev sahipliği yapan ve başkenti Brasilia olan Güney Amerika devi",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "MADAGASKAR",
              "hint": "Afrika kıtasının doğusunda baobab ağaçları ve lemurlarıyla ünlü devasa ada devleti",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "KANADA",
              "hint": "Dünyanın en uzun kıyı şeridine sahip olan ve başkenti Ottawa olan Kuzey Amerika ülkesi",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "NORVEÇ",
              "hint": "Fiyortları, Kuzey Işıkları ve gece yarısı güneşiyle bilinen İskandinav krallığı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "sehirler-landmarklar",
          "name": "Şehirler & Landmarklar",
          "iconKey": "landmark",
          "badge": "Şehir Simgeleri",
          "description": "Dünyanın en çok ziyaret edilen ikonik yapıları ve tarihi anıtları",
          "levels": [
            {
              "id": 1,
              "word": "MACHUPİCCHU",
              "hint": "Peru And Dağları'nın zirvesinde sisler arasına gizlenmiş 15. yüzyıl İnka antik kenti",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "STONEHENGE",
              "hint": "İngiltere'de 5000 yıl önce dikilen gündönümlerini hesaplayan dev megalit taş dairesi",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "PETRA",
              "hint": "Ürdün kanyonlarındaki pembe kayalara oyulmuş El-Hazne tapınağına sahip Nebati başkenti",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KOLEZYUM",
              "hint": "Antik Roma'da 50 bin seyircinin gladyatör dövüşlerini izlediği devasa amfitiyatro",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "TAÇMAHAL",
              "hint": "Şah Cihan'ın eşi Mümtaz Mahal için Agra şehrinde beyaz mermerden yaptırdığı anıt mezar",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "AYASOFYA",
              "hint": "İstanbul'da 537 yılında inşa edilen, kubbesiyle mimarlık tarihini değiştiren anıt yapı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "EYFEL",
              "hint": "1889 Paris Evrensel Sergisi için Gustave Eiffel tarafından inşa edilen demir kule",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "PİRAMİT",
              "hint": "Mısır Gize platosunda firavun Keops için 2.3 milyon kireçtaşı blokla yapılan dev anıt",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "daglar-doga-harikalari",
          "name": "Dağlar & Doğa Harikaları",
          "iconKey": "mountain",
          "badge": "Zirveler",
          "description": "Dünyanın en yüksek zirveleri, kanyonları ve jeolojik oluşumları",
          "levels": [
            {
              "id": 1,
              "word": "HİMALAYA",
              "hint": "Everest dahil olmak üzere Dünya'nın en yüksek 14 zirvesine ev sahipliği yapan Asya dağ sırası",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "EVEREST",
              "hint": "Deniz seviyesinden 8848 metre yüksekliğiyle Dünya'nın çatısı kabul edilen zirve",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "KAPADOKYA",
              "hint": "Volkanik tüflerin rüzgar ve yağmurla aşınmasıyla oluşan peribacaları diyarı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PAMUKKALE",
              "hint": "Denizli'de kalsiyum oksitli termal suların oluşturduğu bembeyaz traverten terasları",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "FUJİ",
              "hint": "Japonya'nın kusursuz konik siluetiyle bilinen ve kutsal kabul edilen aktif stratovolkanı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "KİLİMANJARO",
              "hint": "Tanzanya'da ekvatorun hemen altında tek başına yükselen ve tepesinde kar bulunan sönmüş yanardağ",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "AĞRI",
              "hint": "5137 metre yüksekliğiyle Türkiye'nin en yüksek noktası olan efsanevi volkanik dağ",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "BÜYÜKKANYON",
              "hint": "ABD Arizona eyaletinde Colorado Nehri'nin milyonlarca yılda yardığı devasa jeolojik kanyon",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "denizler-nehirler",
          "name": "Denizler & Nehirler",
          "iconKey": "waves",
          "badge": "Mavi Gezegen",
          "description": "Okyanus çukurları, derin göller ve can damarı nehirler",
          "levels": [
            {
              "id": 1,
              "word": "BAYKAL",
              "hint": "Sibirya'da bulunan, 1642 metreyle dünyanın en derin ve en eski tatlı su gölü",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "MARİANA",
              "hint": "Pasifik Okyanusu'nda 11.000 metre derinliğe inen Dünya yüzeyinin en derin çukuru",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "CEBELİTARIK",
              "hint": "Akdeniz ile Atlas Okyanusu'nu birbirine bağlayan tarihi stratejik boğaz",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "AMAZON",
              "hint": "Taşıdığı su hacmi bakımından dünyanın en büyük ve en çok kolu olan nehri",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NİL",
              "hint": "Afrika kıtası boyunca 6650 km akarak Akdeniz'e dökülen dünyanın en uzun nehri",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VOLGA",
              "hint": "Rusya topraklarından doğup Hazar Denizi'ne dökülen Avrupa kıtasının en uzun nehri",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "TUNA",
              "hint": "Almanya Kara Ormanlar'dan doğup 10 ülkeden geçerek Karadeniz'e ulaşan nehir",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "BOĞAZİÇİ",
              "hint": "Asya ile Avrupa kıtalarını birbirinden ayıran İstanbul'un eşsiz su yolu",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "doga",
      "name": "Hayvanlar & Doğa",
      "iconKey": "paw",
      "color": "from-emerald-600 to-green-700",
      "description": "Vahşi yaşam, okyanus derinlikleri, kuşlar ve yeryüzünün botanik harikaları",
      "subcategories": [
        {
          "id": "vahsi-hayvanlar",
          "name": "Vahşi Hayvanlar",
          "iconKey": "lion",
          "badge": "Yaban Hayat",
          "description": "Savanalardan tropik ormanlara yırtıcılar ve dev memeliler",
          "levels": [
            {
              "id": 1,
              "word": "JAGUAR",
              "hint": "Güney Amerika yağmur ormanlarının en güçlü çene basıncına sahip benekli büyük kedisi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ÇİTA",
              "hint": "0'dan 100 km hıza 3 saniyede ulaşabilen karadaki en hızlı memeli hayvan",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BOZAYI",
              "hint": "Kuzey Amerika ve Avrasya ormanlarında yaşayan, kış uykusuna yatan devasa omnivor memeli",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PANDA",
              "hint": "Günde 12 saatten fazla bambu yiyerek beslenen Çin'in milli simgesi sevimli ayı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SIRTLAN",
              "hint": "Kemikleri bile kırabilen çenesi ve kahkaha benzeri sesleriyle bilinen Afrika avcısı",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "ŞEMPANZE",
              "hint": "DNA yapısı insana %98.8 oranında benzeyen, alet kullanabilen primat türü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BUKALEMUN",
              "hint": "Gözlerini birbirinden bağımsız hareket ettirebilen ve renk değiştiren sürüngen",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "GORİL",
              "hint": "Afrika yağmur ormanlarında yaşayan primatlar familyasının en büyük ve kaslı üyesi",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "deniz-canlilari",
          "name": "Deniz Canlıları",
          "iconKey": "dolphin",
          "badge": "Okyanus",
          "description": "Mercan resiflerinden abisal derinliklere denizlerin sakinleri",
          "levels": [
            {
              "id": 1,
              "word": "BALİNA",
              "hint": "30 metre boyu ve 150 ton ağırlığıyla yeryüzünde yaşamış en büyük canlı olan Mavi türü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ORKA",
              "hint": "Siyah-beyaz renkleri ve zekalarıyla denizlerin zirve yırtıcısı olan Katil Balina",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "AHTAPOT",
              "hint": "Üç kalbi ve mavi kanı olan, kollarındaki vantuzlarla cisimleri tadan zeki yumuşakça",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "DENİZATI",
              "hint": "Doğumu dişinin değil erkek bireyin gerçekleştirdiği tek deniz canlısı",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "MERCAN",
              "hint": "Büyük Set Resifi gibi devasa su altı ekosistemlerini oluşturan kireçtaşlı koloniyal canlı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VATOZ",
              "hint": "Kumun altına gizlenen, kanat gibi yüzgeçleriyle su altında süzülen kıkırdaklı balık",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "DENİZANASI",
              "hint": "Vücudunun %95'i su olan, beyni ve kemikleri bulunmayan ışıldayan jelimsi canlı",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KÖPEKBALIĞI",
              "hint": "Sudaki bir damla kanı kilometrelerce öteden koklayabilen keskin dişli kıkırdaklı avcı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "kuslar-dunyasi",
          "name": "Kuşlar",
          "iconKey": "bird",
          "badge": "Göklerin Efendisi",
          "description": "Göçmen kuşlar, yırtıcılar ve rengarenk kanatlar",
          "levels": [
            {
              "id": 1,
              "word": "ALBATROS",
              "hint": "3.5 metreye varan kanat açıklığıyla haftalarca kanat çırpmadan okyanusta süzülen kuş",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "PELİKAN",
              "hint": "Gagasının altındaki esnek kesesinde balık ve su depolayan iri su kuşu",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BAYKUŞ",
              "hint": "Başını 270 derece döndürebilen ve tamamen sessiz uçabilen gece avcısı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ŞAHİN",
              "hint": "Avına dalış yaparken saatte 300 km hıza yaklaşabilen keskin gözlü yırtıcı kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "FLAMİNGO",
              "hint": "Beslendiği karides ve alglerdeki karotenoid maddesi nedeniyle pembe renk alan zarif kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "PAPAĞAN",
              "hint": "İnsan seslerini ve melodileri taklit edebilen rengarenk tropikal zeki kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SİNEKKUŞU",
              "hint": "Saniyede 80 kez kanat çırparak havada asılı kalabilen ve geriye doğru uçabilen minik kuş",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "KARTAL",
              "hint": "Yüksek dağ zirvelerinde yuva yapan ve pek çok milletin gücü simgeleyen arması olan yırtıcı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "bitkiler-doga",
          "name": "Bitkiler & Doğa",
          "iconKey": "tree",
          "badge": "Botanik",
          "description": "Asırlık anıt ağaçlar, çiçekler ve doğanın yeşil mimarisi",
          "levels": [
            {
              "id": 1,
              "word": "BAOBAB",
              "hint": "Gövdesinde 120 bin litreye kadar su depolayabilen Madagaskar'ın efsanevi Hayat Ağacı",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SEKVOYA",
              "hint": "100 metreyi aşan boyları ve 3000 yıllık ömürleriyle dünyanın en devasa ağaç türü",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "LOTUS",
              "hint": "Çamurlu sularda yetişmesine rağmen yapraklarının mikro yapısıyla kendi kendini temizleyen kutsal nilüfer",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ORKİDE",
              "hint": "25 binden fazla türe sahip, simetrik ve zarif taç yapraklarıyla bilinen narin çiçek familyası",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "KAKTÜS",
              "hint": "Yapraklarını dikenlere dönüştürerek çölde su kaybını sıfıra indiren etli gövdeli bitki",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "BAMBU",
              "hint": "Bazı türleri günde 90 cm uzayabilen, hafif ve son derece dayanıklı odunsu otsu bitki",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MANGROV",
              "hint": "Tuzlu deniz suyunda kökleri suyun üstünde kalarak kıyı erozyonunu önleyen tropik orman ağacı",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "ZEYTİN",
              "hint": "Akdeniz medeniyetlerinin barış ve bilgelik simgesi kabul ettiği bin yıllık ölümsüz ağaç",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "muzik",
      "name": "Müzik Dünyası",
      "iconKey": "music",
      "color": "from-fuchsia-600 to-purple-800",
      "description": "Efsane sanatçılar, müzik grupları, türler ve enstrümanlar tarihi",
      "subcategories": [
        {
          "id": "efsane-sanatcilar",
          "name": "Efsane Sanatçılar",
          "iconKey": "microphone",
          "badge": "İkonlar",
          "description": "Müzik tarihine damga vuran solo sanatçılar ve besteciler",
          "levels": [
            {
              "id": 1,
              "word": "MERCURY",
              "hint": "Bohemian Rhapsody şarkısını besteleyen ve 4 oktavlık ses genişliğine sahip Queen solisti Freddie",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "JACKSON",
              "hint": "Thriller albümüyle tüm zamanların en çok satan albüm rekorunu kıran Popun Kralı Michael",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "ELVİS",
              "hint": "Rock and Roll müziğin Kralı lakaplı, Jailhouse Rock ile tanınan unutulmaz Amerikan ikon",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MADONNA",
              "hint": "Like a Virgin ve Vogue şarkılarıyla pop müziğin kraliçesi kabul edilen kadın sanatçı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BOWİE",
              "hint": "Ziggy Stardust alter egosu ve Space Oddity şarkısıyla bilinen bukalemun lakaplı İngiliz müzisyen",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "BEETHOVEN",
              "hint": "Tamamen işitme yetisini kaybetmesine rağmen 9. Senfoni şaheserini besteleyen Alman dahi",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "MOZART",
              "hint": "5 yaşında beste yapmaya başlayan ve 600'den fazla eser bırakan Avusturyalı klasik müzik dehası",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "CHOPİN",
              "hint": "Piyanonun şairi olarak anılan, Noktürnleri ve Baladlarıyla ünlü Polonyalı romantik besteci",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "muzik-gruplari",
          "name": "Müzik Grupları",
          "iconKey": "guitar",
          "badge": "Efsane Gruplar",
          "description": "Stadyumları dolduran dünya devi rock ve pop grupları",
          "levels": [
            {
              "id": 1,
              "word": "BEATLES",
              "hint": "John Lennon ve Paul McCartney önderliğinde Liverpool'dan çıkıp dünyayı kasıp kavuran dörtlü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "QUEEN",
              "hint": "We Will Rock You ve Don't Stop Me Now marşlarını yaratan İngiliz rock efsanesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "PİNKFLOYD",
              "hint": "The Dark Side of the Moon ve The Wall albümleriyle progresif rock müziğin zirvesi",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "METALLİCA",
              "hint": "Master of Puppets ve Enter Sandman ile trash metal türünün öncüsü olan Los Angeles grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NİRVANA",
              "hint": "Kurt Cobain önderliğinde Smells Like Teen Spirit ile 90'ların Grunge akımını başlatan grup",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "COLDPLAY",
              "hint": "Yellow, Viva La Vida ve Fix You şarkılarıyla bilinen Chris Martin'in İngiliz grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MANGA",
              "hint": "2010 Eurovision'da We Could Be The Same şarkısıyla Türkiye'ye ikincilik getiren rock grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "DUMAN",
              "hint": "Kaan Tangöze solistliğinde Türk rock müziğine damga vuran efsanevi grup",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "muzik-turleri",
          "name": "Müzik Türleri",
          "iconKey": "headphones",
          "badge": "Ritimler",
          "description": "New Orleans cazından elektronik müziğe türlerin kökeni",
          "levels": [
            {
              "id": 1,
              "word": "JAZZ",
              "hint": "20. yüzyıl başında New Orleans'ta doğan, doğaçlama ve saksafon sololarıyla bilinen tür",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "BLUES",
              "hint": "Mississippi Deltası'nda pamuk tarlalarındaki hüzün ve kederden doğan 12 ölçülü müzik",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "REGGAE",
              "hint": "Jamaika kökenli, Bob Marley ile dünyaya yayılan ve kendine has aksak ritmi olan müzik türü",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "FLAMENKO",
              "hint": "İspanya Endülüs bölgesine özgü, kastanyet, akustik gitar ve tutkulu dansla icra edilen tür",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "OPERA",
              "hint": "Tüm metinleri müzikle bestelenmiş, orkestra eşliğinde sahnede oynanan dramatik tiyatro",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "ELEKTRONİK",
              "hint": "Synthesizer ve bilgisayarlarla üretilen, dans kulüplerini kasıp kavuran modern müzik türü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SENFONİ",
              "hint": "Büyük senfoni orkestraları için genellikle 4 bölüm halinde bestelenen geniş çaplı müzik formu",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "TÜRKÜ",
              "hint": "Anadolu halkının acılarını, aşklarını ve kahramanlıklarını anlatan anonim ezgiler",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "enstrumanlar-tarih",
          "name": "Enstrümanlar & Müzik Tarihi",
          "iconKey": "piano",
          "badge": "Tınılar",
          "description": "Telli, tuşlu, üflemeli ve vurmalı müzik aletlerinin hikayesi",
          "levels": [
            {
              "id": 1,
              "word": "PİYANO",
              "hint": "Bartolomeo Cristofori tarafından İtalya'da icat edilen 88 tuşlu çekiçli telli enstrüman",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "KEMAN",
              "hint": "Stradivarius ustalarının Cremona'da kusursuzlaştırdığı 4 telli yaylı enstrüman",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SAKSOFON",
              "hint": "1840'larda Adolphe Sax tarafından metal gövdeli fakat kamışlı olarak tasarlanan caz çalgısı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ÇELLO",
              "hint": "Viyolonsel olarak da bilinen, bacaklar arasına alınarak oturarak çalınan bas yaylı çalgı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BAĞLAMA",
              "hint": "Anadolu ozanlarının ve aşıkların yüzyıllardır mızrapla çaldığı milli telli sazımız",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "KLARNET",
              "hint": "Tek kamışlı ağızlığı olan, Türk sanat müziği ve Balkan ritimlerinde büyüleyici çalgı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "ARMONİKA",
              "hint": "Nefes verip alarak çalınan, blues ve kovboy ezgilerinin vazgeçilmez cep enstrümanı",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GİTAR",
              "hint": "Akustik, klasik ve elektro çeşitleriyle dünyada en yaygın çalınan 6 telli enstrüman",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "mutfak",
      "name": "Dünya Mutfağı",
      "iconKey": "chef",
      "color": "from-orange-600 to-amber-700",
      "description": "Türk lezzetleri, Avrupa klasikleri, dünya sokak lezzetleri ve tatlılar",
      "subcategories": [
        {
          "id": "turk-mutfagi",
          "name": "Türk Mutfağı",
          "iconKey": "meal",
          "badge": "Lezzet Mirası",
          "description": "Gaziantep'ten Hatay'a, saray mutfağından ocakbaşına zengin miras",
          "levels": [
            {
              "id": 1,
              "word": "İSKENDER",
              "hint": "Bursa'da döner etin pideler üzerine serilip tereyağı ve domates sosuyla servis edildiği kebap",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "LAHMACUN",
              "hint": "Taş fırında çıtır çıtır pişirilen, kıymalı harcıyla Türk pizzası olarak da anılan lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BAKLAVA",
              "hint": "Gaziantep ile özdeşleşen, 40 kat ince yufka arasına Antep fıstığı konularak şerbetlenen tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MANTI",
              "hint": "Kayseri ile meşhur olan, minik hamurların içine kıyma konularak sarımsaklı yoğurtla sunulan yemek",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "KÜNEFE",
              "hint": "Hatay yöresine özgü, tel kadayıf arasına özel tuzsuz peynir konularak şerbetlenen sıcak tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SARMA",
              "hint": "Asma yapraklarının içine pirinçli ve baharatlı harç konularak kalem gibi incecik sarılan lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MENEMEN",
              "hint": "Domates, yeşil biber ve yumurtanın tavada tereyağıyla pişirildiği meşhur kahvaltı yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KÖFTE",
              "hint": "Akçaabat, İnegöl ve Tekirdağ çeşitleriyle Türkiye'nin dört bir yanında sevilen kıyma yemeği",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "avrupa-mutfagi",
          "name": "Avrupa Mutfağı",
          "iconKey": "croissant",
          "badge": "Kıta Lezzetleri",
          "description": "İtalya, Fransa ve İspanya'nın dünyaca ünlü ikonik tatları",
          "levels": [
            {
              "id": 1,
              "word": "PİZZA",
              "hint": "Napoli kökenli, incecik açılmış mayalı hamur üzerine domates sosu ve mozzarella konulan İtalyan şaheseri",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "RİSOTTO",
              "hint": "Arborio pirincinin et suyunda nişastasını salarak yavaş yavaş pişirildiği kremamsı İtalyan yemeği",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "KRUVASAN",
              "hint": "Fransız kahvaltılarının simgesi haline gelen, bol tereyağlı kat kat hilal şeklindeki çörek",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MAKARNA",
              "hint": "Spagetti, fettuccine ve penne çeşitleriyle durum buğdayı irmiğinden yapılan İtalyan klasiği",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "LAZANYA",
              "hint": "Geniş hamur plakaları arasına bolonez sos ve beşamel konularak fırınlanan katmanlı yemek",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "TİRAMİSU",
              "hint": "Kedi dili bisküvilerinin espressoya batırılıp mascarpone peyniri ve kakaoyla hazırlandığı tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "PAELLA",
              "hint": "Valensiya yöresine özgü, safranla sarartılmış pirincin deniz ürünleriyle geniş tavada pişirildiği yemek",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GULAŞ",
              "hint": "Macaristan'ın milli yemeği olan, bol soğan ve tatlı kırmızı toz biberle pişirilen dana yahni",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "dunya-yemekleri",
          "name": "Dünya Yemekleri",
          "iconKey": "cutlery",
          "badge": "Sokak & Kültür",
          "description": "Asya sokak lezzetlerinden Meksika ateşine global tatlar",
          "levels": [
            {
              "id": 1,
              "word": "SUSHI",
              "hint": "Sirke aromalı pirincin çiğ balık veya sebzelerle nori yosununa sarıldığı Japon mutfak sanatı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "TACO",
              "hint": "Mısır veya buğday tortillası içerisine et, fasulye, salsa ve avokado konularak katlanan Meksika yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "RAMEN",
              "hint": "Et suyunda buğday erişteleri, haşlanmış yumurta ve yeşil soğanla servis edilen Japon çorbası",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "BURGER",
              "hint": "İki yuvarlak ekmek arasına kıyma köftesi, peynir ve soslar konularak yapılan küresel sandviç",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NOODLE",
              "hint": "Uzak Doğu mutfağında wok tavada sebzeler ve soya sosuyla hızlıca kavrulan şerit hamur",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "BURRİTO",
              "hint": "Meksika mutfağında silindir şeklinde sıkıca sarılmış büyük un tortillası dürümü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "KÖRİ",
              "hint": "Zerdeçal, zencefil ve kimyon gibi yoğun baharatlarla hazırlanan Güney Asya soslu yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KİMCİ",
              "hint": "Kore mutfağının simgesi olan, acı biber ve sarımsakla fermente edilmiş Çin lahanası turşusu",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "tatlilar-icecekler",
          "name": "Tatlılar & İçecekler",
          "iconKey": "cake",
          "badge": "Kahve & Tatlı",
          "description": "Kahve ritüelleri, dünya çayları ve meşhur tatlılar",
          "levels": [
            {
              "id": 1,
              "word": "KAHVE",
              "hint": "Etiyopya'da keşfedilip Osmanlı sarayından tüm dünyaya yayılan kavrulmuş çekirdek içeceği",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ESPRESSO",
              "hint": "İnce çekilmiş kahve tozunun içerisinden yüksek basınçlı sıcak su geçirilerek yapılan yoğun İtalyan kahvesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "MATCHA",
              "hint": "Gölgede yetiştirilen yeşil çay yapraklarının taş değirmenlerde öğütülmesiyle elde edilen Japon toz çayı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ÇİKOLATA",
              "hint": "Kakao çekirdeklerinin işlenmesiyle elde edilen, Azteklerin Tanrıların İçeceği dediği tatlı lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SUFLE",
              "hint": "Dışı pişmiş, içi akışkan sıcak çikolatayla doldurulan porselen kapta servis edilen Fransız tatlısı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "GELATO",
              "hint": "Geleneksel dondurmaya göre daha az hava ve yağ içeren yoğun kıvamlı İtalyan dondurması",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "ÇAY",
              "hint": "Rize yamaçlarında yetişen, ince belli bardakta tavşan kanı demlenen milli içeceğimiz",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "WAFFLE",
              "hint": "Belçika kökenli, petek desenli sıcak hamur üzerine meyveler ve çikolata sosu serilen tatlı",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    }
  ],
  "en": [
    {
      "id": "spor",
      "name": "Spor Dünyası",
      "iconKey": "trophy",
      "color": "from-emerald-500 to-teal-700",
      "description": "İlk 11 taktik sahaları, efsane futbolcular, NBA yıldızları ve Formula 1",
      "subcategories": [
        {
          "id": "ilk-11-takim",
          "name": "İlk 11 ile Takım Bul",
          "iconKey": "stadium",
          "badge": "Taktik Saha",
          "description": "Sahadaki ilk 11 dizilişine bakarak hangi kulüp veya milli takım olduğunu tahmin et!",
          "levels": [
            {
              "id": 1,
              "word": "YUNANİSTAN",
              "hint": "2004 Avrupa Şampiyonası finalinde ev sahibi Portekiz'i Charisteas'ın kafasıyla deviren Otto Rehhagel mucizesi",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "Euro 2004 Şampiyonu",
                "gk": "Nikopolidis",
                "def": [
                  "Seitaridis",
                  "Dellas",
                  "Kapsis",
                  "Fyssas"
                ],
                "mid": [
                  "Zagorakis",
                  "Basinas",
                  "Katsouranis",
                  "Giannakopoulos"
                ],
                "fwd": [
                  "Charisteas",
                  "Vryzas"
                ]
              }
            },
            {
              "id": 2,
              "word": "MANCHESTER",
              "hint": "1999 Camp Nou finalinde Bayern Münih'e karşı 90+1 ve 90+3'te gelen gollerle tarihi Treble yapan efsane kadro",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "1999 Şampiyonlar Ligi Şampiyonu",
                "gk": "Schmeichel",
                "def": [
                  "G.Neville",
                  "Johnsen",
                  "Stam",
                  "Irwin"
                ],
                "mid": [
                  "Beckham",
                  "Butt",
                  "Giggs",
                  "Blomqvist"
                ],
                "fwd": [
                  "Yorke",
                  "Cole"
                ]
              }
            },
            {
              "id": 3,
              "word": "BREZİLYA",
              "hint": "2002 Dünya Kupası finalinde Almanya'yı Ronaldo Fenomeno'nun 2 golüyle deviren ve 5. yıldızı takan 3R kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "3-4-1-2",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Şampiyonu",
                "gk": "Marcos",
                "def": [
                  "Lucio",
                  "Edmilson",
                  "Roque Junior"
                ],
                "mid": [
                  "Cafu",
                  "Gilberto Silva",
                  "Kleberson",
                  "Roberto Carlos"
                ],
                "fwd": [
                  "Ronaldinho",
                  "Rivaldo",
                  "Ronaldo"
                ]
              }
            },
            {
              "id": 4,
              "word": "AJAX",
              "hint": "1995 Viyana finalinde Milan'ı Kluivert'ın golüyle devirip namağlup Avrupa şampiyonu olan Louis van Gaal kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "3-4-3",
                "teamType": "Kulüp Takımı",
                "year": "1995 Şampiyonlar Ligi Şampiyonu",
                "gk": "Van der Sar",
                "def": [
                  "Reiziger",
                  "Blind",
                  "F.de Boer"
                ],
                "mid": [
                  "Rijkaard",
                  "Seedorf",
                  "Davids",
                  "Litmanen"
                ],
                "fwd": [
                  "Finidi",
                  "R.de Boer",
                  "Overmars"
                ]
              }
            },
            {
              "id": 5,
              "word": "VALENCİA",
              "hint": "2001 San Siro finalinde Bayern Münih'e penaltılarla elenen, üst üste iki kez final oynayan Hector Cuper kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2001 Şampiyonlar Ligi Finalisti",
                "gk": "Canizares",
                "def": [
                  "Angloma",
                  "Ayala",
                  "Pellegrino",
                  "Carboni"
                ],
                "mid": [
                  "Mendieta",
                  "Baraja",
                  "Kily Gonzalez"
                ],
                "fwd": [
                  "Aimar",
                  "Sanchez",
                  "Carew"
                ]
              }
            },
            {
              "id": 6,
              "word": "LEİCESTER",
              "hint": "2016 yılında 5000'e 1 oran verilmesine rağmen dünya futbol tarihinin en büyük peri masalını yazan Ranieri kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2016 Premier Lig Şampiyonu",
                "gk": "Schmeichel",
                "def": [
                  "Simpson",
                  "Morgan",
                  "Huth",
                  "Fuchs"
                ],
                "mid": [
                  "Mahrez",
                  "Drinkwater",
                  "Kante",
                  "Albrighton"
                ],
                "fwd": [
                  "Okazaki",
                  "Vardy"
                ]
              }
            },
            {
              "id": 7,
              "word": "SENEGAL",
              "hint": "2002 Dünya Kupası açılış maçında son şampiyon Fransa'yı devirip çeyrek finale kadar yürüyen Bruno Metsu kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-5-1",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Çeyrek Final",
                "gk": "Sylva",
                "def": [
                  "Coly",
                  "Diatta",
                  "Cisse",
                  "Daf"
                ],
                "mid": [
                  "N'Diaye",
                  "Diao",
                  "Bouba Diop",
                  "Fadiga",
                  "Camara"
                ],
                "fwd": [
                  "El Hadji Diouf"
                ]
              }
            },
            {
              "id": 8,
              "word": "MİLAN",
              "hint": "1994 Atina finalinde Johan Cruyff'un Barcelona Rüya Takımı'nı 4-0 darmadağın eden Fabio Capello kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "1994 Şampiyonlar Ligi Şampiyonu",
                "gk": "Rossi",
                "def": [
                  "Tassotti",
                  "Galli",
                  "Maldini",
                  "Panucci"
                ],
                "mid": [
                  "Boban",
                  "Albertini",
                  "Desailly",
                  "Donadoni"
                ],
                "fwd": [
                  "Savicevic",
                  "Massaro"
                ]
              }
            },
            {
              "id": 9,
              "word": "HOLLANDA",
              "hint": "1988 Münih finalinde Sovyetler'i Van Basten'in imkansız sıfır dereceden attığı vole golüyle deviren Rinus Michels kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "Euro 1988 Şampiyonu",
                "gk": "Van Breukelen",
                "def": [
                  "Van Aerle",
                  "Rijkaard",
                  "Koeman",
                  "Van Tiggelen"
                ],
                "mid": [
                  "Vanenburg",
                  "Wouters",
                  "Mühren",
                  "Erwin Koeman"
                ],
                "fwd": [
                  "Gullit",
                  "Van Basten"
                ]
              }
            },
            {
              "id": 10,
              "word": "VİLLARREAL",
              "hint": "2006'da Riquelme ve Forlan önderliğinde Şampiyonlar Ligi yarı finalinde Arsenal'e elenen Sarı Denizaltı kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2006 Şampiyonlar Ligi Yarı Final",
                "gk": "Barbosa",
                "def": [
                  "Venta",
                  "Pena",
                  "Alvarez",
                  "Arruabarrena"
                ],
                "mid": [
                  "Senna",
                  "Josico",
                  "Sorin"
                ],
                "fwd": [
                  "Riquelme",
                  "Forlan",
                  "Guille Franco"
                ]
              }
            },
            {
              "id": 11,
              "word": "PORTO",
              "hint": "2004 Şampiyonlar Ligi finalinde Monaco'yu 3-0 hezimete uğratan Jose Mourinho mucizesi",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2004 Şampiyonlar Ligi Şampiyonu",
                "gk": "Vitor Baia",
                "def": [
                  "Ferreira",
                  "Costa",
                  "Carvalho",
                  "Valente"
                ],
                "mid": [
                  "Costinha",
                  "Maniche",
                  "Mendes"
                ],
                "fwd": [
                  "Deco",
                  "Carlos Alberto",
                  "Derlei"
                ]
              }
            },
            {
              "id": 12,
              "word": "MONACO",
              "hint": "2004 Şampiyonlar Ligi finaline kadar Real Madrid ve Chelsea'yi eleyen Didier Deschamps kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-3-3",
                "teamType": "Kulüp Takımı",
                "year": "2004 Şampiyonlar Ligi Finalisti",
                "gk": "Roma",
                "def": [
                  "Ibarra",
                  "Rodriguez",
                  "Givet",
                  "Evra"
                ],
                "mid": [
                  "Cisse",
                  "Bernardi",
                  "Zikos"
                ],
                "fwd": [
                  "Giuly",
                  "Morientes",
                  "Rothen"
                ]
              }
            },
            {
              "id": 13,
              "word": "FRANSA",
              "hint": "1998 Dünya Kupası finalinde Brezilya'yı Zidane'ın 2 kafa golüyle 3-0 deviren şampiyon kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-2-1",
                "teamType": "Milli Takım",
                "year": "1998 Dünya Kupası Şampiyonu",
                "gk": "Barthez",
                "def": [
                  "Thuram",
                  "Leboeuf",
                  "Desailly",
                  "Lizarazu"
                ],
                "mid": [
                  "Karembeu",
                  "Deschamps",
                  "Petit"
                ],
                "fwd": [
                  "Zidane",
                  "Djorkaeff",
                  "Guivarc'h"
                ]
              }
            },
            {
              "id": 14,
              "word": "İSPANYA",
              "hint": "2010 Johannesburg finalinde Hollanda'yı uzatmalarda Iniesta'nın golüyle geçerek ilk dünya şampiyonluğunu kazanan kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Milli Takım",
                "year": "2010 Dünya Kupası Şampiyonu",
                "gk": "Casillas",
                "def": [
                  "Ramos",
                  "Pique",
                  "Puyol",
                  "Capdevila"
                ],
                "mid": [
                  "Busquets",
                  "Xabi Alonso"
                ],
                "fwd": [
                  "Pedro",
                  "Xavi",
                  "Iniesta",
                  "Villa"
                ]
              }
            },
            {
              "id": 15,
              "word": "TÜRKİYE",
              "hint": "2002 Dünya Kupası yarı finalinde Brezilya karşısına çıkan dünya üçüncüsü efsanevi milli kadromuz",
              "difficulty": "Kolay",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Milli Takım",
                "year": "2002 Dünya Kupası Yarı Final",
                "gk": "Rüştü",
                "def": [
                  "Fatih",
                  "Alpay",
                  "Bülent",
                  "Ümit D."
                ],
                "mid": [
                  "Tugay",
                  "Emre B.",
                  "Yıldıray",
                  "Hasan Şaş"
                ],
                "fwd": [
                  "Hakan Ş.",
                  "İlhan M."
                ]
              }
            },
            {
              "id": 16,
              "word": "LİVERPOOL",
              "hint": "2005 İstanbul finalinde Milan'a karşı 3-0'dan dönüp Şampiyonlar Ligi kupasını kaldıran mucize kadro",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-4-1-1",
                "teamType": "Kulüp Takımı",
                "year": "2005 Şampiyonlar Ligi Şampiyonu",
                "gk": "Dudek",
                "def": [
                  "Finnan",
                  "Carragher",
                  "Hyypia",
                  "Traore"
                ],
                "mid": [
                  "Luis Garcia",
                  "Alonso",
                  "Gerrard",
                  "Riise"
                ],
                "fwd": [
                  "Kewell",
                  "Baros"
                ]
              }
            },
            {
              "id": 17,
              "word": "REALMADRİD",
              "hint": "2002 Hampden Park finalinde Leverkusen'e Zidane'ın sol ayak volesiyle 9. kupasını kazanan Los Galacticos kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-1-2",
                "teamType": "Kulüp Takımı",
                "year": "2002 Şampiyonlar Ligi Şampiyonu",
                "gk": "Cesar Sanchez",
                "def": [
                  "Salgado",
                  "Hierro",
                  "Helguera",
                  "Roberto Carlos"
                ],
                "mid": [
                  "Figo",
                  "Makelele",
                  "Solari"
                ],
                "fwd": [
                  "Zidane",
                  "Raul",
                  "Morientes"
                ]
              }
            },
            {
              "id": 18,
              "word": "GALATASARAY",
              "hint": "17 Mayıs 2000'de Parken Stadı'nda Arsenal'i penaltılarla devirerek UEFA Kupası'nı kaldıran namağlup efsane kadro",
              "difficulty": "Kolay",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2000 UEFA Kupası Şampiyonu",
                "gk": "Taffarel",
                "def": [
                  "Capone",
                  "Bülent K.",
                  "Popescu",
                  "Ergün P."
                ],
                "mid": [
                  "Okan B.",
                  "Suat K.",
                  "Emre B.",
                  "Hagi"
                ],
                "fwd": [
                  "Arif E.",
                  "Hakan Şükür"
                ]
              }
            },
            {
              "id": 19,
              "word": "BARCELONA",
              "hint": "2011 Wembley finalinde Manchester United'ı sahadan silen Guardiola'nın Tiki-Taka şaheseri kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-3-3",
                "teamType": "Kulüp Takımı",
                "year": "2011 Şampiyonlar Ligi Şampiyonu",
                "gk": "Valdes",
                "def": [
                  "Alves",
                  "Mascherano",
                  "Pique",
                  "Abidal"
                ],
                "mid": [
                  "Xavi",
                  "Busquets",
                  "Iniesta"
                ],
                "fwd": [
                  "Pedro",
                  "Messi",
                  "Villa"
                ]
              }
            },
            {
              "id": 20,
              "word": "ARSENAL",
              "hint": "2003-2004 Premier Lig sezonunu hiç mağlup olmadan 49 maçlık seriyle bitiren The Invincibles kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-4-2",
                "teamType": "Kulüp Takımı",
                "year": "2004 Yenilmezler",
                "gk": "Lehmann",
                "def": [
                  "Lauren",
                  "Toure",
                  "Campbell",
                  "Cole"
                ],
                "mid": [
                  "Ljungberg",
                  "Vieira",
                  "Gilberto",
                  "Pires"
                ],
                "fwd": [
                  "Bergkamp",
                  "Henry"
                ]
              }
            },
            {
              "id": 21,
              "word": "PARMA",
              "hint": "1999 Moskova finalinde Marsilya'yı 3-0 yenerek UEFA Kupası'nı kazanan, kalesinde genç Buffon'un devleştiği efsane İtalyan kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "3-5-2",
                "teamType": "Kulüp Takımı",
                "year": "1999 UEFA Kupası Şampiyonu",
                "gk": "Buffon",
                "def": [
                  "Thuram",
                  "Sensini",
                  "Cannavaro"
                ],
                "mid": [
                  "Fuser",
                  "Dino Baggio",
                  "Boghossian",
                  "Veron",
                  "Vanoli"
                ],
                "fwd": [
                  "Chiesa",
                  "Crespo"
                ]
              }
            },
            {
              "id": 22,
              "word": "DORTMUND",
              "hint": "1997 Münih finalinde son şampiyon Juventus'u Riedle ve 19 yaşındaki Ricken'in aşırtma golüyle 3-1 yıkan Ottmar Hitzfeld kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "3-5-2",
                "teamType": "Kulüp Takımı",
                "year": "1997 Şampiyonlar Ligi Şampiyonu",
                "gk": "Klos",
                "def": [
                  "Kohler",
                  "Sammer",
                  "Kree"
                ],
                "mid": [
                  "Reuter",
                  "Lambert",
                  "Paulo Sousa",
                  "Möller",
                  "Heinrich"
                ],
                "fwd": [
                  "Riedle",
                  "Chapuisat"
                ]
              }
            },
            {
              "id": 23,
              "word": "DEPORTİVO",
              "hint": "1999-2000 sezonunda Riazor'da devleri dize getirerek kulüp tarihinin tek La Liga şampiyonluğunu kazanan Super Depor kadrosu",
              "difficulty": "Çok Zor",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Kulüp Takımı",
                "year": "2000 La Liga Şampiyonu",
                "gk": "Songo'o",
                "def": [
                  "Manuel Pablo",
                  "Naybet",
                  "Donato",
                  "Romero"
                ],
                "mid": [
                  "Mauro Silva",
                  "Flavio",
                  "Victor",
                  "Djalminha",
                  "Fran"
                ],
                "fwd": [
                  "Roy Makaay"
                ]
              }
            },
            {
              "id": 24,
              "word": "LEVERKUSEN",
              "hint": "2002 yılında lig, kupa ve Şampiyonlar Ligi'nde aynı sezon üç ikincilik yaşayarak tarihe geçen Klaus Toppmöller kadrosu",
              "difficulty": "Zor",
              "lineup": {
                "formation": "4-1-4-1",
                "teamType": "Kulüp Takımı",
                "year": "2002 Şampiyonlar Ligi Finalisti",
                "gk": "Butt",
                "def": [
                  "Sebescen",
                  "Zivkovic",
                  "Lucio",
                  "Placente"
                ],
                "mid": [
                  "Ramelow",
                  "Schneider",
                  "Ballack",
                  "Bastürk",
                  "Ze Roberto"
                ],
                "fwd": [
                  "Neuville"
                ]
              }
            },
            {
              "id": 25,
              "word": "İNTER",
              "hint": "2010 Madrid finalinde Bayern Münih'i Diego Milito'nun iki golüyle devirip İtalya'nın ilk Treble zaferini kazanan Mourinho kadrosu",
              "difficulty": "Orta",
              "lineup": {
                "formation": "4-2-3-1",
                "teamType": "Kulüp Takımı",
                "year": "2010 Şampiyonlar Ligi Şampiyonu",
                "gk": "Julio Cesar",
                "def": [
                  "Maicon",
                  "Lucio",
                  "Samuel",
                  "Chivu"
                ],
                "mid": [
                  "Zanetti",
                  "Cambiasso",
                  "Eto'o",
                  "Sneijder",
                  "Pandev"
                ],
                "fwd": [
                  "Diego Milito"
                ]
              }
            }
          ]
        },
        {
          "id": "futbol-efsaneler",
          "name": "Futbol & Efsane İsimler",
          "iconKey": "soccer",
          "badge": "Efsaneler",
          "description": "Dünya ve Türk futbol tarihine damga vuran yıldızlar ve stadyumlar",
          "levels": [
            {
              "id": 1,
              "word": "RÜŞTÜ",
              "hint": "2002 Dünya Kupası üçüncülüğümüzde yüz boyası ve kurtarışlarıyla UEFA yılın 11'ine giren efsane Türk kaleci",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "GERRARD",
              "hint": "2005 İstanbul finalinde takımı 3-0 gerideyken tarihi geri dönüşü ateşleyen Liverpool kaptanı",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "DORTMUND",
              "hint": "Signal Iduna Park'ta 25 bin kişilik devasa Sarı Duvar tribünüyle tanınan Alman futbol devi",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ZİDANE",
              "hint": "2002 Şampiyonlar Ligi finalinde Leverkusen'e sol ayağıyla attığı voleyle tarihe geçen Fransız maestro",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "AJAX",
              "hint": "Cruyff ve Rinus Michels'in Total Futbol felsefesini dünyaya armağan eden Hollanda kulübü",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "MODRİC",
              "hint": "2018'de Ballon d'Or kazanan ve Hırvatistan'ı Dünya Kupası finaline taşıyan orta saha maestrosu",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BUFFON",
              "hint": "İtalya ile 2006 Dünya Kupası'nı kazanan, Juventus kalesini 20 yıldan fazla koruyan efsane eldiven",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "DROGBA",
              "hint": "2012 Şampiyonlar Ligi finalini son dakika kafası ve kupayı getiren penaltısıyla Chelsea'ye kazandıran Fildişili kral",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "CANNAVARO",
              "hint": "2006 Dünya Kupası şampiyonu İtalya'nın kaptanı olarak Ballon d'Or kazanan nadir savunma oyuncusu",
              "difficulty": "Zor"
            },
            {
              "id": 10,
              "word": "RONALDO",
              "hint": "El Fenomeno lakaplı, 2002 Dünya Kupası finalinde 2 gol atarak şampiyonluğu getiren Brezilyalı 9 numara",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "basketbol-nba",
          "name": "Basketbol & NBA",
          "iconKey": "basketball",
          "badge": "Parke Ateşi",
          "description": "NBA efsaneleri, hanedanlıklar ve unutulmaz şutlar",
          "levels": [
            {
              "id": 1,
              "word": "KOBE",
              "hint": "Black Mamba lakaplı, Los Angeles Lakers formasıyla bir maçta 81 sayı atan efsanevi süperstar",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "CURRY",
              "hint": "NBA tarihinde 3000 üçlük barajını geçen ilk oyuncu olan Golden State guardı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "CELTİCS",
              "hint": "Tarihinde 18 NBA şampiyonluğu ile lig rekorunu elinde bulunduran yeşil-beyazlı Boston takımı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "JORDAN",
              "hint": "Chicago Bulls ile 6 kez NBA şampiyonu olan ve tüm zamanların en büyüğü kabul edilen 23 numara",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "LEBRON",
              "hint": "Kareem Abdul-Jabbar'ı geçerek NBA tarihinin en çok sayı atan oyuncusu unvanını kazanan Kral",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SHAQ",
              "hint": "Durdurulamaz cüssesi ve smaçlarıyla pota camlarını kıran efsanevi dev pivot Shaquille O'Neal",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "NOWİTZKİ",
              "hint": "Tek ayak üstü fadeaway şutuyla Dallas Mavericks'i 2011'de tarihi şampiyonluğa taşıyan Alman yıldız",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "GİANNİS",
              "hint": "Milwaukee Bucks'ı 50 yıl sonra şampiyonluğa taşıyan Greek Freak lakaplı atletik forvet",
              "difficulty": "Zor"
            },
            {
              "id": 9,
              "word": "DUNCAN",
              "hint": "San Antonio Spurs ile 3 farklı dekatta 5 şampiyonluk yaşayan The Big Fundamental",
              "difficulty": "Zor"
            },
            {
              "id": 10,
              "word": "WARRİORS",
              "hint": "2015-2016 sezonunda 73 galibiyet 9 mağlubiyet alarak normal sezon rekorunu kıran San Francisco takımı",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "f1-motorspor",
          "name": "Formula 1 & Hız",
          "iconKey": "f1",
          "badge": "Pole Pozisyonu",
          "description": "Hız tutkusu, efsane pilotlar ve tarihi yarış pistleri",
          "levels": [
            {
              "id": 1,
              "word": "SENNA",
              "hint": "Yağmur yarışlarındaki ustalığıyla F1 tarihinin en tutkulu efsanesi sayılan Brezilyalı pilot",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "MONACO",
              "hint": "F1 takvimindeki en dar, lüks yatların ve kumarhanelerin arasından geçen sokak pisti",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "FERRARİ",
              "hint": "Şahlanan at amblemiyle Formula 1'in kuruluşundan beri her sezonda yarışmış tek İtalyan takım",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "HAMİLTON",
              "hint": "7 kez Dünya Şampiyonu olan ve 100'den fazla yarış galibiyeti elde eden İngiliz pilot",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SCHUMACHER",
              "hint": "Ferrari ile üst üste 5 kez olmak üzere toplam 7 dünya şampiyonluğu kazanan Alman efsane",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "VERSTAPPEN",
              "hint": "Red Bull ile rekorları altüst eden, bir sezonda en çok yarış kazanan Hollandalı pilot",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "SİLVERSTONE",
              "hint": "1950 yılında tarihteki ilk resmi Formula 1 yarışına ev sahipliği yapmış olan efsanevi İngiliz pisti",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "PİTSTOP",
              "hint": "F1 yarışlarında 4 lastiğin 2 saniyenin altında değiştirildiği pit alanı taktik operasyonu",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "SPA",
              "hint": "Belçika Ardenler ormanındaki meşhur Eau Rouge virajıyla tanınan en uzun pist",
              "difficulty": "Orta"
            },
            {
              "id": 10,
              "word": "ALONSO",
              "hint": "2005 ve 2006'da Renault ile Michael Schumacher hegemonyasını yıkarak şampiyon olan İspanyol boğa",
              "difficulty": "Orta"
            }
          ]
        }
      ]
    },
    {
      "id": "dizi-film",
      "name": "Dizi & Sinema",
      "iconKey": "clapper",
      "color": "from-purple-500 to-indigo-600",
      "description": "Cult movies, hit TV series, anime & manga universe, classic animations, and cinema icons",
      "subcategories": [
        {
          "id": "film-efsaneler",
          "name": "Film & Efsane Yapımlar",
          "iconKey": "film",
          "badge": "Kült Sinema",
          "description": "Sinema tarihine geçen dev bütçeli kült başyapıtlar",
          "levels": [
            {
              "id": 1,
              "word": "GODFATHER",
              "hint": "Marlon Brando'nun Vito Corleone'yi canlandırdığı, sinema tarihinin en büyük mafya başyapıtı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "İNCEPTİON",
              "hint": "İnsanların zihinlerine rüya içinde rüya katmanlarına inerek fikir yerleştirme operasyonu",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "GLADYATOR",
              "hint": "General Maximus'un Roma arenasında intikam peşinde koştuğu Ridley Scott başyapıtı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PARASİTE",
              "hint": "Yabancı dilde bir yapım olarak En İyi Film Oscar'ını kazanan ilk film olan Bong Joon-ho şaheseri",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "TİTANİC",
              "hint": "Asla batmaz denilen transatlantik gemisinin trajik batışını ve Jack ile Rose'u anlatan başyapıt",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "MATRİX",
              "hint": "Kırmızı hapı seçerek simülasyon dünyasından uyanan seçilmiş kişi Neo'nun hikayesi",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "AVATAR",
              "hint": "Pandora gezegenindeki Na'vi halkını ve kutsal Ağacı korumaya çalışan insanların hikayesi",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "INTERSTELLAR",
              "hint": "Solucan deliğinden geçerek insanlığa yeni bir yuva arayan Cooper ve kızı Murphy'nin destanı",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "BARBIE",
              "hint": "Greta Gerwig's 2023 box-office phenomenon starring Margot Robbie in a vibrant pink world",
              "difficulty": "Easy"
            },
            {
              "id": 10,
              "word": "LALALAND",
              "hint": "Oscar-winning musical romance following jazz pianist Sebastian and aspiring actress Mia in Los Angeles",
              "difficulty": "Easy"
            },
            {
              "id": 11,
              "word": "HOGWARTS",
              "hint": "Legendary school of witchcraft and wizardry divided into four houses in the Harry Potter universe",
              "difficulty": "Easy"
            },
            {
              "id": 12,
              "word": "AMELIE",
              "hint": "Whimsical French classic about a shy Montmartre waitress who secretly orchestrates joy for those around her",
              "difficulty": "Medium"
            }
          ]
        },
        {
          "id": "kult-diziler",
          "name": "Diziler & Karakterler",
          "iconKey": "tv",
          "badge": "Dizi Maratonu",
          "description": "Televizyon tarihine geçen karakterler ve sürükleyici yapımlar",
          "levels": [
            {
              "id": 1,
              "word": "HEİSENBERG",
              "hint": "Breaking Bad dizisinde Walter White'ın uyuşturucu imparatorluğu kurarken kullandığı takma ad",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SHELBY",
              "hint": "Peaky Blinders dizisinde kasketlerinde jilet taşıyan Birmingham çetesinin lideri Thomas ve ailesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "STARK",
              "hint": "Game of Thrones'ta Kış Geliyor sözüyle bilinen, Kışyarı'nın kadim koruyucu hanedanı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "SOPRANO",
              "hint": "New Jersey mafya babasının psikiyatrist koltuğundaki seanslarını konu alan televizyon klasiği",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "SHERLOCK",
              "hint": "221B Baker Sokağı'nda yaşayan, dahi gözlem yeteneğiyle Scotland Yard'ı hayrete düşüren dedektif",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "DARK",
              "hint": "Winden kasabasındaki bir mağarada 33 yıllık döngülerle zamanda yolculuk yapılan karmaşık Alman dizisi",
              "difficulty": "Zor"
            },
            {
              "id": 7,
              "word": "BERLİN",
              "hint": "La Casa de Papel dizisinde İspanya Darphanesi soygununun lideri olan karizmatik Andres",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "LOST",
              "hint": "Gizemli bir Pasifik adasına düşen Oceanic 815 uçağı kazazedelerinin hayatta kalma mücadelesi",
              "difficulty": "Kolay"
            },
            {
              "id": 9,
              "word": "FRIENDS",
              "hint": "Iconic sitcom following six New York pals gathering on the orange couch at Central Perk",
              "difficulty": "Easy"
            },
            {
              "id": 10,
              "word": "WEDNESDAY",
              "hint": "Hit mystery series starring Jenna Ortega as the gothic Addams daughter at Nevermore Academy",
              "difficulty": "Easy"
            },
            {
              "id": 11,
              "word": "SQUIDGAME",
              "hint": "Global South Korean survival drama where 456 indebted players compete in deadly childhood games",
              "difficulty": "Easy"
            },
            {
              "id": 12,
              "word": "BRIDGERTON",
              "hint": "Regency-era London romance drama narrated through the scandalous pamphlets of Lady Whistledown",
              "difficulty": "Medium"
            }
          ]
        },
        {
          "id": "oyuncular-yonetmenler",
          "name": "Oyuncular & Yönetmenler",
          "iconKey": "director",
          "badge": "Ustalar",
          "description": "Kamera önünün ve arkasının en büyük sinema dehaları",
          "levels": [
            {
              "id": 1,
              "word": "TARANTİNO",
              "hint": "Pulp Fiction, Kill Bill ve Django filmleriyle bilinen doğrusal olmayan kurgunun ustası",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "NOLAN",
              "hint": "Inception, Tenet, Oppenheimer ve Kara Şövalye gibi zihin büken filmlerin yönetmeni",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SCORSESE",
              "hint": "Taksi Şoförü, Goodfellas ve Para Avcısı filmlerinin Oscar ödüllü Amerikalı yönetmeni",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KUBRİCK",
              "hint": "2001 Bir Uzay Destanı, Otomatik Portakal ve Shining filmlerinin kusursuzluk takıntılı yönetmeni",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "DİCAPRİO",
              "hint": "Titanik, Başlangıç ve The Revenant filmlerinde rol alan Oscar ödüllü Amerikalı aktör",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "PACİNO",
              "hint": "Baba, Yaralı Yüz ve Kadın Kokusu filmlerindeki oyunculuğuyla efsaneleşen dev aktör Al Pacino",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "HİTCHCOCK",
              "hint": "Sapık ve Arka Pencere filmleriyle gerilim türünün babası kabul edilen İngiliz yönetmen",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "MİYAZAKİ",
              "hint": "Ruhların Kaçışı ve Prenses Mononoke'yi yaratan Studio Ghibli kurucusu anime ustası",
              "difficulty": "Orta"
            },
            {
              "id": 9,
              "word": "HEPBURN",
              "hint": "Timeless Hollywood icon Audrey, celebrated for Breakfast at Tiffany's and Roman Holiday",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "ZENDAYA",
              "hint": "Emmy-winning Euphoria star and leading actress of the Dune and Spider-Man blockbusters",
              "difficulty": "Easy"
            },
            {
              "id": 11,
              "word": "STREEP",
              "hint": "Record-breaking 21-time Oscar nominee Meryl, star of The Devil Wears Prada and Sophie's Choice",
              "difficulty": "Medium"
            },
            {
              "id": 12,
              "word": "ROBBIE",
              "hint": "Australian actress and producer Margot, acclaimed for Barbie, I Tonya, and The Wolf of Wall Street",
              "difficulty": "Easy"
            }
          ]
        },
        {
          "id": "oscar-sinema-tarihi",
          "name": "Ödüller & Sinema Tarihi",
          "iconKey": "medal",
          "badge": "Akademi",
          "description": "Oscar rekorları, festivaller ve unutulmaz sinema anları",
          "levels": [
            {
              "id": 1,
              "word": "OPPENHEİMER",
              "hint": "Manhattan Projesi ile ilk atom bombasını geliştiren teorik fizikçinin hayatını anlatan 2023 yapımı Oscar fatihi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SCHİNDLER",
              "hint": "2. Dünya Savaşı'nda 1200 Yahudi'nin hayatını kurtaran Alman sanayicinin gerçek hikayesi",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "CASABLANCA",
              "hint": "Tekrar çal Sam repliğiyle bilinen, Humphrey Bogart ve Ingrid Bergman'ın 1942 yapımı sinema klasiği",
              "difficulty": "Zor"
            },
            {
              "id": 4,
              "word": "FİGHTCLUB",
              "hint": "Tyler Durden ve Anlatıcı'nın sabun üreterek tüketim toplumuna başkaldırdığı David Fincher filmi",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "CANNES",
              "hint": "Fransız Rivierası'nda düzenlenen, sinemanın en prestijli Altın Palmiye ödülünün verildiği festival",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "OSCAR",
              "hint": "Sinema Sanatları ve Bilimleri Akademisi tarafından her yıl Los Angeles'ta dağıtılan altın heykelcik",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BENHUR",
              "hint": "Tarihte 11 Oscar kazanarak bu rekoru kıran ilk tarihi epik sinema başyapıtı",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "BİRDMAN",
              "hint": "Tek plan sekans gibi kurgulanarak En İyi Film Oscar'ını kazanan Alejandro Inarritu filmi",
              "difficulty": "Zor"
            },
            {
              "id": 9,
              "word": "WHIPLASH",
              "hint": "Oscar-winning drama about an ambitious jazz drummer pushed to the brink by ruthless instructor Fletcher",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "NOMADLAND",
              "hint": "Academy Award Best Picture winner directed by Chloe Zhao and starring Frances McDormand",
              "difficulty": "Hard"
            },
            {
              "id": 11,
              "word": "ROMA",
              "hint": "Alfonso Cuaron's 3-time Oscar-winning black-and-white masterpiece set in 1970s Mexico City",
              "difficulty": "Medium"
            },
            {
              "id": 12,
              "word": "CHICAGO",
              "hint": "Dazzling 2002 jazz musical starring Catherine Zeta-Jones and Renee Zellweger that won 6 Oscars",
              "difficulty": "Medium"
            }
          ]
        },
        {
          "id": "anime-manga",
          "name": "Anime & Manga Universe",
          "iconKey": "anime",
          "badge": "Otaku Legends",
          "description": "Iconic heroes, Studio Ghibli classics, and legendary Japanese anime series",
          "levels": [
            {
              "id": 1,
              "word": "NARUTO",
              "hint": "Orange-clad leaf village ninja dreaming of becoming Hokage while carrying the Nine-Tails",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "PIKACHU",
              "hint": "Ash Ketchum's loyal electric-type yellow companion and the global mascot of Pokemon",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "TOTORO",
              "hint": "Beloved giant forest spirit holding an umbrella in the rain, emblem of Studio Ghibli",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "SAILORMOON",
              "hint": "Magical girl classic starring Usagi Tsukino fighting evil by moonlight alongside the Sailor Guardians",
              "difficulty": "Medium"
            },
            {
              "id": 5,
              "word": "ONEPIECE",
              "hint": "Monkey D. Luffy and the Straw Hat Pirates' grand voyage in search of the ultimate treasure",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "CHIHIRO",
              "hint": "Brave young girl working in a spirit bathhouse to save her parents in Miyazaki's Spirited Away",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "DEATHNOTE",
              "hint": "Psychological thriller pitting Light Yagami and his supernatural notebook against detective L",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "ACKERMAN",
              "hint": "Fierce clan surname shared by humanity's strongest soldiers Mikasa and Levi in Attack on Titan",
              "difficulty": "Hard"
            },
            {
              "id": 9,
              "word": "TANJIRO",
              "hint": "Kind-hearted Demon Slayer swordsman fighting to cure his sister Nezuko",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "GOKU",
              "hint": "Saiyan martial artist famous for the Kamehameha wave and Super Saiyan transformations in Dragon Ball",
              "difficulty": "Easy"
            }
          ]
        },
        {
          "id": "animasyon-dunyasi",
          "name": "Animation & Pixar Classics",
          "iconKey": "wand",
          "badge": "Magic Screen",
          "description": "Heartwarming animated masterpieces from Disney, Pixar, and DreamWorks",
          "levels": [
            {
              "id": 1,
              "word": "ELSA",
              "hint": "Queen of Arendelle with magical ice powers who sings Let It Go in Disney's Frozen",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "SHREK",
              "hint": "Lovable green ogre who teams up with Donkey to rescue Princess Fiona",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "SIMBA",
              "hint": "Young lion prince who grows up with Hakuna Matata before reclaiming Pride Rock",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "RAPUNZEL",
              "hint": "Spirited princess with magical golden hair locked in a hidden tower in Disney's Tangled",
              "difficulty": "Easy"
            },
            {
              "id": 5,
              "word": "MOANA",
              "hint": "Wayfinding Polynesian voyager chosen by the ocean who sails with demigod Maui",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "WALLE",
              "hint": "Lonely waste-collecting Pixar robot on an abandoned Earth who falls in love with EVE",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "WOODY",
              "hint": "Pull-string cowboy sheriff and loyal leader of Andy's room in Pixar's Toy Story",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "MULAN",
              "hint": "Heroic young woman who disguises herself as a soldier to take her father's place in China",
              "difficulty": "Easy"
            },
            {
              "id": 9,
              "word": "ZOOTOPIA",
              "hint": "Vibrant mammal metropolis where rookie bunny officer Judy Hopps teams up with sly fox Nick Wilde",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "RATATOUILLE",
              "hint": "Pixar tale of culinary prodigy rat Remy cooking gourmet dishes beneath a chef's hat in Paris",
              "difficulty": "Hard"
            }
          ]
        }
      ]
    },
    {
      "id": "kozmetik",
      "name": "Fashion, Beauty & Cosmetics",
      "iconKey": "perfume",
      "color": "from-pink-500 to-rose-600",
      "description": "Makeup artistry, skincare essentials, haute couture fashion houses, perfumes, and gemstones",
      "subcategories": [
        {
          "id": "makyaj-kozmetik",
          "name": "Makeup & Beauty Artistry",
          "iconKey": "lipstick",
          "badge": "Glam Kit",
          "description": "Essential beauty bag favorites, brush techniques, and iconic makeup staples",
          "levels": [
            {
              "id": 1,
              "word": "GLOSS",
              "hint": "Luminous lip product applied alone or over lipstick for a mirror-like shine",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "BLUSH",
              "hint": "Rosy or peach-toned cheek product swept onto the cheekbones for a fresh, healthy flush",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "LINER",
              "hint": "Precision pencil or liquid pen used to define the lash line or craft a sharp winged eye",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "PRIMER",
              "hint": "Smoothing base applied before foundation to blur pores and lock makeup in place all day",
              "difficulty": "Medium"
            },
            {
              "id": 5,
              "word": "POWDER",
              "hint": "Finely milled translucent or pressed formula used to set concealer and control shine",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "BRONZER",
              "hint": "Sun-kissed warm powder or cream swept across the forehead and cheeks for a golden glow",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "CONTOUR",
              "hint": "Sculpting makeup technique using cool shadows and highlights to define facial structure",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "MASCARA",
              "hint": "Wand-applied lash product designed to lengthen, curl, and volumize eyelashes",
              "difficulty": "Easy"
            },
            {
              "id": 9,
              "word": "LIPSTICK",
              "hint": "Classic bullet cosmetic in satin, matte, or sheer finishes that colors and defines the lips",
              "difficulty": "Easy"
            },
            {
              "id": 10,
              "word": "CONCEALER",
              "hint": "High-coverage complexion wand used to brighten under-eyes and camouflage blemishes",
              "difficulty": "Medium"
            }
          ]
        },
        {
          "id": "cilt-bakimi",
          "name": "Skincare & Hair Rituals",
          "iconKey": "lotus",
          "badge": "Glass Skin",
          "description": "Hydrating serums, active vitamins, and restorative self-care essentials",
          "levels": [
            {
              "id": 1,
              "word": "TONER",
              "hint": "Refreshing liquid step applied after cleansing to balance skin pH and prep for hydration",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "SERUM",
              "hint": "Lightweight dropper treatment packed with concentrated actives that target specific skin needs",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "LOTION",
              "hint": "Silky hydrating emulsion smoothed onto face or body to soften and replenish moisture",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "RETINOL",
              "hint": "Gold-standard Vitamin A derivative celebrated for smoothing fine lines and renewing skin texture",
              "difficulty": "Medium"
            },
            {
              "id": 5,
              "word": "KERATIN",
              "hint": "Protective structural protein that strengthens hair strands, nails, and outer skin layers",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "PEPTIDE",
              "hint": "Short chain of amino acids in skincare that signals skin to look firmer, plumper, and smoother",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "COLLAGEN",
              "hint": "Essential structural protein responsible for youthful skin bounce, firmness, and elasticity",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "CERAMIDE",
              "hint": "Skin-identical lipid molecule that seals the moisture barrier and protects against dryness",
              "difficulty": "Medium"
            },
            {
              "id": 9,
              "word": "SQUALANE",
              "hint": "Weightless botanical emollient that mimics natural skin oils for non-greasy deep softness",
              "difficulty": "Hard"
            },
            {
              "id": 10,
              "word": "NIACINAMIDE",
              "hint": "Multi-tasking Vitamin B3 active loved for refining pores, calming redness, and brightening tone",
              "difficulty": "Hard"
            }
          ]
        },
        {
          "id": "moda-parfum",
          "name": "Fashion Houses & Perfumes",
          "iconKey": "perfume",
          "badge": "Haute Couture",
          "description": "Legendary Paris, Milan, and New York luxury houses and iconic fragrances",
          "levels": [
            {
              "id": 1,
              "word": "DIOR",
              "hint": "Parisian couture house founded in 1947 behind the New Look silhouette and J'adore fragrance",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "VOGUE",
              "hint": "Iconic fashion magazine founded in 1892 and long helmed by Anna Wintour as style's global bible",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "PRADA",
              "hint": "Milanese luxury house founded in 1913, famous for its triangle emblem and nylon-leather minimalism",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "GUCCI",
              "hint": "Florentine luxury label recognized worldwide by its interlocking GG monogram and horsebit loafers",
              "difficulty": "Easy"
            },
            {
              "id": 5,
              "word": "CHANEL",
              "hint": "Legendary French house founded by Coco, creator of the little black dress, tweed suit, and No. 5",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "HERMES",
              "hint": "Storied Parisian atelier renowned for silk scarves, orange boxes, and the coveted Birkin bag",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "SEPHORA",
              "hint": "Global black-and-white-striped beauty retailer curating prestige makeup, fragrance, and skincare",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "VERSACE",
              "hint": "Bold Italian fashion house symbolized by the golden Medusa emblem and glamorous runway gowns",
              "difficulty": "Medium"
            },
            {
              "id": 9,
              "word": "VALENTINO",
              "hint": "Roman haute couture maison celebrated for its signature scarlet red gowns and Rockstud heels",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "BALENCIAGA",
              "hint": "Luxury house founded by Spanish couturier Cristobal, famed for sculptural silhouettes",
              "difficulty": "Hard"
            }
          ]
        },
        {
          "id": "taki-degerli-taslar",
          "name": "Jewelry, Gems & Fine Fabrics",
          "iconKey": "diamond",
          "badge": "Elegance",
          "description": "Precious gemstones, timeless jewelry pieces, and luxurious textile weaves",
          "levels": [
            {
              "id": 1,
              "word": "SILK",
              "hint": "Lustrous natural fiber spun from cocoons, prized for centuries in evening gowns and scarves",
              "difficulty": "Easy"
            },
            {
              "id": 2,
              "word": "RUBY",
              "hint": "Fiery crimson gemstone from the corundum family symbolizing passion and royal heritage",
              "difficulty": "Easy"
            },
            {
              "id": 3,
              "word": "PEARL",
              "hint": "Iridescent organic gem formed inside oysters, a timeless emblem of bridal and classic grace",
              "difficulty": "Easy"
            },
            {
              "id": 4,
              "word": "SATIN",
              "hint": "Glossy weave with a liquid-smooth surface on one side, favored for bridal dresses and ribbons",
              "difficulty": "Easy"
            },
            {
              "id": 5,
              "word": "VELVET",
              "hint": "Plush woven fabric with a dense, ultra-soft pile associated with royal eveningwear",
              "difficulty": "Easy"
            },
            {
              "id": 6,
              "word": "EMERALD",
              "hint": "Lush vivid-green beryl gemstone treasured since Cleopatra's reign in ancient Egypt",
              "difficulty": "Medium"
            },
            {
              "id": 7,
              "word": "DIAMOND",
              "hint": "Hardest natural mineral on Earth, cut into brilliant facets for solitaire engagement rings",
              "difficulty": "Easy"
            },
            {
              "id": 8,
              "word": "CASHMERE",
              "hint": "Featherlight, ultra-warm luxury yarn combed from fine Himalayan goat undercoats",
              "difficulty": "Medium"
            },
            {
              "id": 9,
              "word": "AMETHYST",
              "hint": "Violet-purple quartz gemstone admired in jewelry from delicate lilac to deep royal plum",
              "difficulty": "Medium"
            },
            {
              "id": 10,
              "word": "SAPPHIRE",
              "hint": "Deep celestial-blue gemstone immortalized by Princess Diana's iconic oval halo ring",
              "difficulty": "Medium"
            }
          ]
        }
      ]
    },
    {
      "id": "genel-kultur",
      "name": "Genel Kültür & Tarih",
      "iconKey": "temple",
      "color": "from-amber-600 to-yellow-700",
      "description": "Antik medeniyetler, tarihi liderler, dönüm noktası savaşlar ve dünya mirası",
      "subcategories": [
        {
          "id": "antik-medeniyetler",
          "name": "Antik Medeniyetler",
          "iconKey": "pyramid",
          "badge": "İlk Çağ",
          "description": "Tarihin şafağında kurulan ilk şehirler, tapınaklar ve krallıklar",
          "levels": [
            {
              "id": 1,
              "word": "MEZOPOTAMYA",
              "hint": "Dicle ve Fırat nehirleri arasında kalan, medeniyetin beşiği sayılan bereketli hilal bölgesi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "KARTACA",
              "hint": "Hannibal'ın filleriyle Alpleri aşarak Roma'ya meydan okuduğu Kuzey Afrika denizci devleti",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "BABİL",
              "hint": "Dünyanın yedi harikasından biri olan Asma Bahçeleri ve Hammurabi Kanunları ile ünlü antik şehir",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "TRUVA",
              "hint": "Çanakkale Boğazı yakınlarında tahta at hilesiyle düşürülen, İlyada destanına konu efsanevi kent",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "MISIR",
              "hint": "Nil Nehri etrafında gelişen, firavunlar ve dev piramitlerle anılan en köklü uygarlık",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SPARTA",
              "hint": "Antik Yunan'da çocukların savaşçı olarak eğitildiği, Termopil Geçidi'nde 300 kişiyle direnen şehir devleti",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SÜMERLER",
              "hint": "Tarihte çivi yazısını, tekerleği ve ziggurat tapınaklarını ilk icat eden Mezopotamya uygarlığı",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GÖBEKLİTEPE",
              "hint": "Şanlıurfa'da bulunan, M.Ö. 9600 yılına tarihlenen tarihin bilinen en eski tapınak kompleksi",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "tarihi-liderler",
          "name": "Tarihi Liderler",
          "iconKey": "crown",
          "badge": "Hükümdarlar",
          "description": "Tarihin akışını değiştiren imparatorlar, fatihler ve kurucular",
          "levels": [
            {
              "id": 1,
              "word": "ATATÜRK",
              "hint": "Kurtuluş Savaşı'nı zafere ulaştırıp Türkiye Cumhuriyeti'ni kuran ulu önder Gazi Mustafa Kemal",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "FATİH",
              "hint": "21 yaşında İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan 7. Osmanlı Padişahı Sultan Mehmed",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SEZAR",
              "hint": "Roma Cumhuriyeti'ni imparatorluğa dönüştüren, Senato'da Brütüs ve arkadaşlarınca suikasta uğrayan diktatör",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "İSKENDER",
              "hint": "Makedonya'dan Hindistan'a kadar uzanan devasa imparatorluğu 32 yaşında fetheden Büyük komutan",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NAPOLYON",
              "hint": "Fransız İhtilali sonrası tüm Avrupa'yı dize getiren ve Waterloo Savaşı'nda yenilen imparator",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "CENGİZHAN",
              "hint": "Bozkırdaki tüm kabileleri birleştirerek tarihin en büyük bitişik kara imparatorluğunu kuran Moğol hükümdarı",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "CHURCHİLL",
              "hint": "2. Dünya Savaşı'nda Birleşik Krallık başbakanı olarak radyo konuşmalarıyla halkına direnç veren lider",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "SALAHADDİN",
              "hint": "Hıttin Savaşı'nda Haçlı ordusunu yenerek Kudüs'ü 88 yıl sonra geri alan Eyyubi hükümdarı",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "savaslar-donum-noktalari",
          "name": "Savaşlar & Dönüm Noktaları",
          "iconKey": "swords",
          "badge": "Cepheler",
          "description": "Dünya haritalarını yeniden çizen tarihi muharebeler",
          "levels": [
            {
              "id": 1,
              "word": "ÇANAKKALE",
              "hint": "Çanakkale Geçilmez destanının yazıldığı, müttefik donanmalarının boğazda batırıldığı 1915 zaferi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "MALAZGİRT",
              "hint": "1071 yılında Sultan Alparslan'ın Bizans ordusunu yenerek Anadolu'nun kapılarını Türklere açtığı meydan savaşı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "WATERLOO",
              "hint": "1815 yılında Napolyon Bonapart'ın İngiliz ve Prusya ordularına son kez yenildiği Belçika kasabası",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "NORMANDİYA",
              "hint": "6 Haziran 1944 D-Day günü müttefik ordularının Nazi işgalindeki Fransa kıyılarına yaptığı dev çıkarma",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "İSTANBUL",
              "hint": "1453 yılında 53 günlük kuşatmanın ardından gemilerin karadan yürütülerek fethedildiği tarihi olay",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VİYANA",
              "hint": "Osmanlı ordusunun 1529 ve 1683 yıllarında kuşattığı fakat alamadığı Habsburg başkenti",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "STALİNGRAD",
              "hint": "2. Dünya Savaşı'nda Nazi ordularının Volga kıyısında kuşatılıp imha edildiği en kanlı dönüm noktası",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "KADEŞ",
              "hint": "M.Ö. 1274 yılında Mısır Firavunu II. Ramses ile Hititler arasında yapılan tarihin ilk yazılı barış antlaşması",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "dunya-tarihi",
          "name": "Dünya Tarihi & İcatlar",
          "iconKey": "scroll",
          "badge": "Uygarlık",
          "description": "İnsanlık tarihinin en büyük buluşları ve kültürel devrimleri",
          "levels": [
            {
              "id": 1,
              "word": "RÖNESANS",
              "hint": "14. yüzyılda İtalya'da başlayıp tüm Avrupa'ya yayılan bilim, sanat ve edebiyatta yeniden doğuş dönemi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "MATBAA",
              "hint": "Johannes Gutenberg'in hareketli harflerle kitap basımını yaygınlaştırarak bilgi devrimini başlatan icadı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "REFORM",
              "hint": "Martin Luther'in 95 tezini kilise kapısına asarak Katolik hegemonyasına karşı başlattığı dini hareket",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "SANAYİ",
              "hint": "Buhar makinesinin icadıyla 18. yüzyılda İngiltere'de başlayan ve kol gücünü fabrikalara devreden devrim",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "PUSULA",
              "hint": "Denizcilerin okyanuslarda yön bulmasını sağlayarak Coğrafi Keşifler çağını açan kadim Çin icadı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "ALFABE",
              "hint": "Tarihte seslere dayalı ilk 22 harfli yazı sistemini geliştiren antik denizci Fenikelilerin mirası",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "PARŞÖMEN",
              "hint": "Antik Bergama Krallığı'nda hayvan derisi işlenerek icat edilen, papirüsten çok daha dayanıklı yazı malzemesi",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "TEKERLEK",
              "hint": "M.Ö. 3500 civarında Mezopotamya'da icat edilerek taşımacılığı ve medeniyetin hızını değiştiren buluş",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "bilim",
      "name": "Bilim & Evren",
      "iconKey": "atom",
      "color": "from-cyan-500 to-blue-600",
      "description": "Biyoloji, derin uzay, kuantum fiziği, genetik ve bilimsel keşifler",
      "subcategories": [
        {
          "id": "bilim-dunyasi",
          "name": "Bilim Dünyası & Dahiler",
          "iconKey": "microscope",
          "badge": "Dahiler",
          "description": "Tarihi değiştiren dahi bilim insanları ve teorileri",
          "levels": [
            {
              "id": 1,
              "word": "EİNSTEİN",
              "hint": "Genel ve Özel Görelilik teorilerini kuran, E=mc² formülüyle fizik anlayışını yıkan Nobel ödüllü kuramcı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "NEWTON",
              "hint": "Başına elma düşmesi hikayesiyle bilinen, evrensel kütle çekim ve hareket yasalarını yazan dahi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "TESLA",
              "hint": "Alternatif akım (AC), radyo sinyalleri ve kablosuz elektrik üzerine sayısız patent geliştiren mucit",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "CURİE",
              "hint": "Radyoaktivite alanındaki çalışmalarıyla iki farklı bilim dalında (fizik ve kimya) Nobel alan tek insan",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "DARWİN",
              "hint": "Evrim teorisini ve Doğal Seçilim mekanizmasını Türlerin Kökeni kitabında açıklayan doğa bilimci",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "GALİLEO",
              "hint": "Teleskopla Jüpiter'in 4 uydusunu keşfedip Dünya'nın Güneş etrafında döndüğünü savunan İtalyan bilgin",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "TURİNG",
              "hint": "Enigma şifresini kırıp modern bilgisayar biliminin ve yapay zekanın babası kabul edilen matematikçi",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "HAWKİNG",
              "hint": "Kara deliklerin radyasyon yaydığını kanıtlayan ve Zamanın Kısa Tarihi kitabını yazan kozmolog",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "insan-genetik",
          "name": "İnsan & Genetik",
          "iconKey": "dna",
          "badge": "DNA Evreni",
          "description": "Hücre çekirdeği, genler ve insan bedeninin mucizeleri",
          "levels": [
            {
              "id": 1,
              "word": "MİTOKONDRİ",
              "hint": "Hücrenin oksijenli solunumla ATP enerjisi üreten ve kendi bağımsız DNA'sına sahip enerji santrali",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "PROTEİN",
              "hint": "Amino asitlerin peptit bağlarıyla birleşmesinden oluşan, kas ve dokuların temel yapı taşı",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "HEMOGLOBİN",
              "hint": "Kırmızı kan hücrelerinde (alyuvarlar) demir mineraliyle oksijen taşıyan dev protein molekülü",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KROMOZOM",
              "hint": "İnsan vücut hücrelerinde 46 adet bulunan, DNA'nın histon proteinlerine sarılmış ipliksi paketi",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "NÖRON",
              "hint": "Beyin ve sinir sisteminde elektrokimyasal sinyallerle bilgi ileten milyarlarca sinir hücresi",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "EPİGENETİK",
              "hint": "DNA dizilimi değişmeden çevresel faktörlerle genlerin açılıp kapanmasını inceleyen modern biyoloji dalı",
              "difficulty": "Çok Zor"
            },
            {
              "id": 7,
              "word": "TELOMERAZ",
              "hint": "Kromozom uçlarındaki koruyucu telomer başlıklarını onararak yaşlanmayı yavaşlatan enzim",
              "difficulty": "Çok Zor"
            },
            {
              "id": 8,
              "word": "HİPOKAMPÜS",
              "hint": "Beynin temporal lobunda yer alan, kısa süreli anıları uzun süreli belleğe dönüştüren merkez",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "uzay-gezegenler",
          "name": "Uzay & Gezegenler",
          "iconKey": "planet",
          "badge": "Derin Uzay",
          "description": "Güneş sistemi, galaksiler, karadelikler ve nebulalar",
          "levels": [
            {
              "id": 1,
              "word": "ANDROMEDA",
              "hint": "Samanyolu galaksimize en yakın olan ve saniyede 110 km hızla bize doğru yaklaşan sarmal komşu galaksi",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "JÜPİTER",
              "hint": "Güneş Sistemi'ndeki diğer tüm gezegenlerin toplamından daha ağır olan, Büyük Kırmızı Leke fırtınalı gaz devi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "KARADELİK",
              "hint": "Işığın bile kaçamayacağı kadar devasa bir kütleçekim kuvvetine sahip çökmüş yıldız kalıntısı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "SÜPERNOVA",
              "hint": "Büyük kütleli bir yıldızın ömrünün sonunda nükleer yakıtını tüketerek akıl almaz şiddetle patlaması",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "VOYAGER",
              "hint": "1977 yılında fırlatılan ve yıldızlararası uzaya çıkan insan yapımı en uzak uzay sondası",
              "difficulty": "Zor"
            },
            {
              "id": 6,
              "word": "NEBULA",
              "hint": "Uzayda yeni yıldızların ve gezegenlerin doğduğu devasa gaz, toz ve plazma bulutu (Bulutsu)",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "HUBBLE",
              "hint": "1990 yılından beri Dünya yörüngesinde dönerek evrenin derinliklerinden görüntüler toplayan uzay teleskobu",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "JAMESWEBB",
              "hint": "Lagrange 2 noktasında altın kaplama aynalarıyla Büyük Patlama'dan sonraki ilk yıldızları gözleyen teleskop",
              "difficulty": "Zor"
            }
          ]
        },
        {
          "id": "fizik-kimya",
          "name": "Fizik & Kimya",
          "iconKey": "flask",
          "badge": "Madde & Enerji",
          "description": "Atom altı parçacıklar, termodinamik ve kimyasal elementler",
          "levels": [
            {
              "id": 1,
              "word": "KUANTUM",
              "hint": "Atom altı düzeyde enerjinin paketler halinde yayıldığını ve olasılık dalgalarını açıklayan modern fizik alanı",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "ELEKTRON",
              "hint": "Atom çekirdeğinin etrafındaki orbitallerde dönen negatif yüklü temel parçacık",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "FOTON",
              "hint": "Işığın ve elektromanyetik radyasyonun kütlesiz kuantumu olan temel enerji parçacığı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ENTROPİ",
              "hint": "Termodinamiğin ikinci yasası gereği izole bir sistemde düzensizliğin sürekli artma eğilimi",
              "difficulty": "Zor"
            },
            {
              "id": 5,
              "word": "GRAVİTASYON",
              "hint": "Kütlesi olan tüm cisimlerin birbirini uzay-zaman eğriliği sayesinde çekmesi olgusu",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "İZOTOP",
              "hint": "Proton sayısı aynı fakat nötron sayısı farklı olan aynı kimyasal elementin varyantları",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "RADYASYON",
              "hint": "Dalgalar veya parçacıklar şeklinde uzayda yayılan yüksek enerjili elektromanyetik salınım",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "HİDROJEN",
              "hint": "Evrendeki atomların %75'ini oluşturan, periyodik tablonun en hafif ve 1 numaralı elementi",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "cografya",
      "name": "Coğrafya & Dünya",
      "iconKey": "globe",
      "color": "from-teal-500 to-cyan-700",
      "description": "Ülkeler, başkentler, ikonik landmarklar, yüce dağlar ve okyanuslar",
      "subcategories": [
        {
          "id": "ulkeler-baskentler",
          "name": "Ülkeler & Başkentler",
          "iconKey": "globe",
          "badge": "Gezgin",
          "description": "Dünya haritasındaki şaşırtıcı başkentler ve ülkeler",
          "levels": [
            {
              "id": 1,
              "word": "CANBERRA",
              "hint": "Sidney ve Melbourne arasındaki rekabet yüzünden 1908'de uzlaşma başkenti seçilen Avustralya şehri",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "İSVİÇRE",
              "hint": "Resmi bir başkenti bulunmayan, Bern şehrinin federal merkez statüsünde olduğu Alp ülkesi",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "REYKJAVİK",
              "hint": "Gayzerler, volkanlar ve buzullar ülkesi İzlanda'nın dünyanın en kuzeyindeki başkenti",
              "difficulty": "Zor"
            },
            {
              "id": 4,
              "word": "JAPONYA",
              "hint": "Güneşin Doğduğu Ülke olarak anılan, 6800 adadan oluşan Doğu Asya ada ülkesi",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BREZİLYA",
              "hint": "Amazon Yağmur Ormanları'nın çoğuna ev sahipliği yapan ve başkenti Brasilia olan Güney Amerika devi",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "MADAGASKAR",
              "hint": "Afrika kıtasının doğusunda baobab ağaçları ve lemurlarıyla ünlü devasa ada devleti",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "KANADA",
              "hint": "Dünyanın en uzun kıyı şeridine sahip olan ve başkenti Ottawa olan Kuzey Amerika ülkesi",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "NORVEÇ",
              "hint": "Fiyortları, Kuzey Işıkları ve gece yarısı güneşiyle bilinen İskandinav krallığı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "sehirler-landmarklar",
          "name": "Şehirler & Landmarklar",
          "iconKey": "landmark",
          "badge": "Şehir Simgeleri",
          "description": "Dünyanın en çok ziyaret edilen ikonik yapıları ve tarihi anıtları",
          "levels": [
            {
              "id": 1,
              "word": "MACHUPİCCHU",
              "hint": "Peru And Dağları'nın zirvesinde sisler arasına gizlenmiş 15. yüzyıl İnka antik kenti",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "STONEHENGE",
              "hint": "İngiltere'de 5000 yıl önce dikilen gündönümlerini hesaplayan dev megalit taş dairesi",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "PETRA",
              "hint": "Ürdün kanyonlarındaki pembe kayalara oyulmuş El-Hazne tapınağına sahip Nebati başkenti",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "KOLEZYUM",
              "hint": "Antik Roma'da 50 bin seyircinin gladyatör dövüşlerini izlediği devasa amfitiyatro",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "TAÇMAHAL",
              "hint": "Şah Cihan'ın eşi Mümtaz Mahal için Agra şehrinde beyaz mermerden yaptırdığı anıt mezar",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "AYASOFYA",
              "hint": "İstanbul'da 537 yılında inşa edilen, kubbesiyle mimarlık tarihini değiştiren anıt yapı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "EYFEL",
              "hint": "1889 Paris Evrensel Sergisi için Gustave Eiffel tarafından inşa edilen demir kule",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "PİRAMİT",
              "hint": "Mısır Gize platosunda firavun Keops için 2.3 milyon kireçtaşı blokla yapılan dev anıt",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "daglar-doga-harikalari",
          "name": "Dağlar & Doğa Harikaları",
          "iconKey": "mountain",
          "badge": "Zirveler",
          "description": "Dünyanın en yüksek zirveleri, kanyonları ve jeolojik oluşumları",
          "levels": [
            {
              "id": 1,
              "word": "HİMALAYA",
              "hint": "Everest dahil olmak üzere Dünya'nın en yüksek 14 zirvesine ev sahipliği yapan Asya dağ sırası",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "EVEREST",
              "hint": "Deniz seviyesinden 8848 metre yüksekliğiyle Dünya'nın çatısı kabul edilen zirve",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "KAPADOKYA",
              "hint": "Volkanik tüflerin rüzgar ve yağmurla aşınmasıyla oluşan peribacaları diyarı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PAMUKKALE",
              "hint": "Denizli'de kalsiyum oksitli termal suların oluşturduğu bembeyaz traverten terasları",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "FUJİ",
              "hint": "Japonya'nın kusursuz konik siluetiyle bilinen ve kutsal kabul edilen aktif stratovolkanı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "KİLİMANJARO",
              "hint": "Tanzanya'da ekvatorun hemen altında tek başına yükselen ve tepesinde kar bulunan sönmüş yanardağ",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "AĞRI",
              "hint": "5137 metre yüksekliğiyle Türkiye'nin en yüksek noktası olan efsanevi volkanik dağ",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "BÜYÜKKANYON",
              "hint": "ABD Arizona eyaletinde Colorado Nehri'nin milyonlarca yılda yardığı devasa jeolojik kanyon",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "denizler-nehirler",
          "name": "Denizler & Nehirler",
          "iconKey": "waves",
          "badge": "Mavi Gezegen",
          "description": "Okyanus çukurları, derin göller ve can damarı nehirler",
          "levels": [
            {
              "id": 1,
              "word": "BAYKAL",
              "hint": "Sibirya'da bulunan, 1642 metreyle dünyanın en derin ve en eski tatlı su gölü",
              "difficulty": "Zor"
            },
            {
              "id": 2,
              "word": "MARİANA",
              "hint": "Pasifik Okyanusu'nda 11.000 metre derinliğe inen Dünya yüzeyinin en derin çukuru",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "CEBELİTARIK",
              "hint": "Akdeniz ile Atlas Okyanusu'nu birbirine bağlayan tarihi stratejik boğaz",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "AMAZON",
              "hint": "Taşıdığı su hacmi bakımından dünyanın en büyük ve en çok kolu olan nehri",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NİL",
              "hint": "Afrika kıtası boyunca 6650 km akarak Akdeniz'e dökülen dünyanın en uzun nehri",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VOLGA",
              "hint": "Rusya topraklarından doğup Hazar Denizi'ne dökülen Avrupa kıtasının en uzun nehri",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "TUNA",
              "hint": "Almanya Kara Ormanlar'dan doğup 10 ülkeden geçerek Karadeniz'e ulaşan nehir",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "BOĞAZİÇİ",
              "hint": "Asya ile Avrupa kıtalarını birbirinden ayıran İstanbul'un eşsiz su yolu",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "doga",
      "name": "Hayvanlar & Doğa",
      "iconKey": "paw",
      "color": "from-emerald-600 to-green-700",
      "description": "Vahşi yaşam, okyanus derinlikleri, kuşlar ve yeryüzünün botanik harikaları",
      "subcategories": [
        {
          "id": "vahsi-hayvanlar",
          "name": "Vahşi Hayvanlar",
          "iconKey": "lion",
          "badge": "Yaban Hayat",
          "description": "Savanalardan tropik ormanlara yırtıcılar ve dev memeliler",
          "levels": [
            {
              "id": 1,
              "word": "JAGUAR",
              "hint": "Güney Amerika yağmur ormanlarının en güçlü çene basıncına sahip benekli büyük kedisi",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ÇİTA",
              "hint": "0'dan 100 km hıza 3 saniyede ulaşabilen karadaki en hızlı memeli hayvan",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BOZAYI",
              "hint": "Kuzey Amerika ve Avrasya ormanlarında yaşayan, kış uykusuna yatan devasa omnivor memeli",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "PANDA",
              "hint": "Günde 12 saatten fazla bambu yiyerek beslenen Çin'in milli simgesi sevimli ayı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SIRTLAN",
              "hint": "Kemikleri bile kırabilen çenesi ve kahkaha benzeri sesleriyle bilinen Afrika avcısı",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "ŞEMPANZE",
              "hint": "DNA yapısı insana %98.8 oranında benzeyen, alet kullanabilen primat türü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "BUKALEMUN",
              "hint": "Gözlerini birbirinden bağımsız hareket ettirebilen ve renk değiştiren sürüngen",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "GORİL",
              "hint": "Afrika yağmur ormanlarında yaşayan primatlar familyasının en büyük ve kaslı üyesi",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "deniz-canlilari",
          "name": "Deniz Canlıları",
          "iconKey": "dolphin",
          "badge": "Okyanus",
          "description": "Mercan resiflerinden abisal derinliklere denizlerin sakinleri",
          "levels": [
            {
              "id": 1,
              "word": "BALİNA",
              "hint": "30 metre boyu ve 150 ton ağırlığıyla yeryüzünde yaşamış en büyük canlı olan Mavi türü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ORKA",
              "hint": "Siyah-beyaz renkleri ve zekalarıyla denizlerin zirve yırtıcısı olan Katil Balina",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "AHTAPOT",
              "hint": "Üç kalbi ve mavi kanı olan, kollarındaki vantuzlarla cisimleri tadan zeki yumuşakça",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "DENİZATI",
              "hint": "Doğumu dişinin değil erkek bireyin gerçekleştirdiği tek deniz canlısı",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "MERCAN",
              "hint": "Büyük Set Resifi gibi devasa su altı ekosistemlerini oluşturan kireçtaşlı koloniyal canlı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "VATOZ",
              "hint": "Kumun altına gizlenen, kanat gibi yüzgeçleriyle su altında süzülen kıkırdaklı balık",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "DENİZANASI",
              "hint": "Vücudunun %95'i su olan, beyni ve kemikleri bulunmayan ışıldayan jelimsi canlı",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KÖPEKBALIĞI",
              "hint": "Sudaki bir damla kanı kilometrelerce öteden koklayabilen keskin dişli kıkırdaklı avcı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "kuslar-dunyasi",
          "name": "Kuşlar",
          "iconKey": "bird",
          "badge": "Göklerin Efendisi",
          "description": "Göçmen kuşlar, yırtıcılar ve rengarenk kanatlar",
          "levels": [
            {
              "id": 1,
              "word": "ALBATROS",
              "hint": "3.5 metreye varan kanat açıklığıyla haftalarca kanat çırpmadan okyanusta süzülen kuş",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "PELİKAN",
              "hint": "Gagasının altındaki esnek kesesinde balık ve su depolayan iri su kuşu",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BAYKUŞ",
              "hint": "Başını 270 derece döndürebilen ve tamamen sessiz uçabilen gece avcısı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ŞAHİN",
              "hint": "Avına dalış yaparken saatte 300 km hıza yaklaşabilen keskin gözlü yırtıcı kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "FLAMİNGO",
              "hint": "Beslendiği karides ve alglerdeki karotenoid maddesi nedeniyle pembe renk alan zarif kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "PAPAĞAN",
              "hint": "İnsan seslerini ve melodileri taklit edebilen rengarenk tropikal zeki kuş",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SİNEKKUŞU",
              "hint": "Saniyede 80 kez kanat çırparak havada asılı kalabilen ve geriye doğru uçabilen minik kuş",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "KARTAL",
              "hint": "Yüksek dağ zirvelerinde yuva yapan ve pek çok milletin gücü simgeleyen arması olan yırtıcı",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "bitkiler-doga",
          "name": "Bitkiler & Doğa",
          "iconKey": "tree",
          "badge": "Botanik",
          "description": "Asırlık anıt ağaçlar, çiçekler ve doğanın yeşil mimarisi",
          "levels": [
            {
              "id": 1,
              "word": "BAOBAB",
              "hint": "Gövdesinde 120 bin litreye kadar su depolayabilen Madagaskar'ın efsanevi Hayat Ağacı",
              "difficulty": "Orta"
            },
            {
              "id": 2,
              "word": "SEKVOYA",
              "hint": "100 metreyi aşan boyları ve 3000 yıllık ömürleriyle dünyanın en devasa ağaç türü",
              "difficulty": "Zor"
            },
            {
              "id": 3,
              "word": "LOTUS",
              "hint": "Çamurlu sularda yetişmesine rağmen yapraklarının mikro yapısıyla kendi kendini temizleyen kutsal nilüfer",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "ORKİDE",
              "hint": "25 binden fazla türe sahip, simetrik ve zarif taç yapraklarıyla bilinen narin çiçek familyası",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "KAKTÜS",
              "hint": "Yapraklarını dikenlere dönüştürerek çölde su kaybını sıfıra indiren etli gövdeli bitki",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "BAMBU",
              "hint": "Bazı türleri günde 90 cm uzayabilen, hafif ve son derece dayanıklı odunsu otsu bitki",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MANGROV",
              "hint": "Tuzlu deniz suyunda kökleri suyun üstünde kalarak kıyı erozyonunu önleyen tropik orman ağacı",
              "difficulty": "Zor"
            },
            {
              "id": 8,
              "word": "ZEYTİN",
              "hint": "Akdeniz medeniyetlerinin barış ve bilgelik simgesi kabul ettiği bin yıllık ölümsüz ağaç",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "muzik",
      "name": "Müzik Dünyası",
      "iconKey": "music",
      "color": "from-fuchsia-600 to-purple-800",
      "description": "Efsane sanatçılar, müzik grupları, türler ve enstrümanlar tarihi",
      "subcategories": [
        {
          "id": "efsane-sanatcilar",
          "name": "Efsane Sanatçılar",
          "iconKey": "microphone",
          "badge": "İkonlar",
          "description": "Müzik tarihine damga vuran solo sanatçılar ve besteciler",
          "levels": [
            {
              "id": 1,
              "word": "MERCURY",
              "hint": "Bohemian Rhapsody şarkısını besteleyen ve 4 oktavlık ses genişliğine sahip Queen solisti Freddie",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "JACKSON",
              "hint": "Thriller albümüyle tüm zamanların en çok satan albüm rekorunu kıran Popun Kralı Michael",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "ELVİS",
              "hint": "Rock and Roll müziğin Kralı lakaplı, Jailhouse Rock ile tanınan unutulmaz Amerikan ikon",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MADONNA",
              "hint": "Like a Virgin ve Vogue şarkılarıyla pop müziğin kraliçesi kabul edilen kadın sanatçı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BOWİE",
              "hint": "Ziggy Stardust alter egosu ve Space Oddity şarkısıyla bilinen bukalemun lakaplı İngiliz müzisyen",
              "difficulty": "Orta"
            },
            {
              "id": 6,
              "word": "BEETHOVEN",
              "hint": "Tamamen işitme yetisini kaybetmesine rağmen 9. Senfoni şaheserini besteleyen Alman dahi",
              "difficulty": "Orta"
            },
            {
              "id": 7,
              "word": "MOZART",
              "hint": "5 yaşında beste yapmaya başlayan ve 600'den fazla eser bırakan Avusturyalı klasik müzik dehası",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "CHOPİN",
              "hint": "Piyanonun şairi olarak anılan, Noktürnleri ve Baladlarıyla ünlü Polonyalı romantik besteci",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "muzik-gruplari",
          "name": "Müzik Grupları",
          "iconKey": "guitar",
          "badge": "Efsane Gruplar",
          "description": "Stadyumları dolduran dünya devi rock ve pop grupları",
          "levels": [
            {
              "id": 1,
              "word": "BEATLES",
              "hint": "John Lennon ve Paul McCartney önderliğinde Liverpool'dan çıkıp dünyayı kasıp kavuran dörtlü",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "QUEEN",
              "hint": "We Will Rock You ve Don't Stop Me Now marşlarını yaratan İngiliz rock efsanesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "PİNKFLOYD",
              "hint": "The Dark Side of the Moon ve The Wall albümleriyle progresif rock müziğin zirvesi",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "METALLİCA",
              "hint": "Master of Puppets ve Enter Sandman ile trash metal türünün öncüsü olan Los Angeles grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NİRVANA",
              "hint": "Kurt Cobain önderliğinde Smells Like Teen Spirit ile 90'ların Grunge akımını başlatan grup",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "COLDPLAY",
              "hint": "Yellow, Viva La Vida ve Fix You şarkılarıyla bilinen Chris Martin'in İngiliz grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MANGA",
              "hint": "2010 Eurovision'da We Could Be The Same şarkısıyla Türkiye'ye ikincilik getiren rock grubu",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "DUMAN",
              "hint": "Kaan Tangöze solistliğinde Türk rock müziğine damga vuran efsanevi grup",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "muzik-turleri",
          "name": "Müzik Türleri",
          "iconKey": "headphones",
          "badge": "Ritimler",
          "description": "New Orleans cazından elektronik müziğe türlerin kökeni",
          "levels": [
            {
              "id": 1,
              "word": "JAZZ",
              "hint": "20. yüzyıl başında New Orleans'ta doğan, doğaçlama ve saksafon sololarıyla bilinen tür",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "BLUES",
              "hint": "Mississippi Deltası'nda pamuk tarlalarındaki hüzün ve kederden doğan 12 ölçülü müzik",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "REGGAE",
              "hint": "Jamaika kökenli, Bob Marley ile dünyaya yayılan ve kendine has aksak ritmi olan müzik türü",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "FLAMENKO",
              "hint": "İspanya Endülüs bölgesine özgü, kastanyet, akustik gitar ve tutkulu dansla icra edilen tür",
              "difficulty": "Orta"
            },
            {
              "id": 5,
              "word": "OPERA",
              "hint": "Tüm metinleri müzikle bestelenmiş, orkestra eşliğinde sahnede oynanan dramatik tiyatro",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "ELEKTRONİK",
              "hint": "Synthesizer ve bilgisayarlarla üretilen, dans kulüplerini kasıp kavuran modern müzik türü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "SENFONİ",
              "hint": "Büyük senfoni orkestraları için genellikle 4 bölüm halinde bestelenen geniş çaplı müzik formu",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "TÜRKÜ",
              "hint": "Anadolu halkının acılarını, aşklarını ve kahramanlıklarını anlatan anonim ezgiler",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "enstrumanlar-tarih",
          "name": "Enstrümanlar & Müzik Tarihi",
          "iconKey": "piano",
          "badge": "Tınılar",
          "description": "Telli, tuşlu, üflemeli ve vurmalı müzik aletlerinin hikayesi",
          "levels": [
            {
              "id": 1,
              "word": "PİYANO",
              "hint": "Bartolomeo Cristofori tarafından İtalya'da icat edilen 88 tuşlu çekiçli telli enstrüman",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "KEMAN",
              "hint": "Stradivarius ustalarının Cremona'da kusursuzlaştırdığı 4 telli yaylı enstrüman",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "SAKSOFON",
              "hint": "1840'larda Adolphe Sax tarafından metal gövdeli fakat kamışlı olarak tasarlanan caz çalgısı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ÇELLO",
              "hint": "Viyolonsel olarak da bilinen, bacaklar arasına alınarak oturarak çalınan bas yaylı çalgı",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "BAĞLAMA",
              "hint": "Anadolu ozanlarının ve aşıkların yüzyıllardır mızrapla çaldığı milli telli sazımız",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "KLARNET",
              "hint": "Tek kamışlı ağızlığı olan, Türk sanat müziği ve Balkan ritimlerinde büyüleyici çalgı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "ARMONİKA",
              "hint": "Nefes verip alarak çalınan, blues ve kovboy ezgilerinin vazgeçilmez cep enstrümanı",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GİTAR",
              "hint": "Akustik, klasik ve elektro çeşitleriyle dünyada en yaygın çalınan 6 telli enstrüman",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    },
    {
      "id": "mutfak",
      "name": "Dünya Mutfağı",
      "iconKey": "chef",
      "color": "from-orange-600 to-amber-700",
      "description": "Türk lezzetleri, Avrupa klasikleri, dünya sokak lezzetleri ve tatlılar",
      "subcategories": [
        {
          "id": "turk-mutfagi",
          "name": "Türk Mutfağı",
          "iconKey": "meal",
          "badge": "Lezzet Mirası",
          "description": "Gaziantep'ten Hatay'a, saray mutfağından ocakbaşına zengin miras",
          "levels": [
            {
              "id": 1,
              "word": "İSKENDER",
              "hint": "Bursa'da döner etin pideler üzerine serilip tereyağı ve domates sosuyla servis edildiği kebap",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "LAHMACUN",
              "hint": "Taş fırında çıtır çıtır pişirilen, kıymalı harcıyla Türk pizzası olarak da anılan lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "BAKLAVA",
              "hint": "Gaziantep ile özdeşleşen, 40 kat ince yufka arasına Antep fıstığı konularak şerbetlenen tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MANTI",
              "hint": "Kayseri ile meşhur olan, minik hamurların içine kıyma konularak sarımsaklı yoğurtla sunulan yemek",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "KÜNEFE",
              "hint": "Hatay yöresine özgü, tel kadayıf arasına özel tuzsuz peynir konularak şerbetlenen sıcak tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "SARMA",
              "hint": "Asma yapraklarının içine pirinçli ve baharatlı harç konularak kalem gibi incecik sarılan lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "MENEMEN",
              "hint": "Domates, yeşil biber ve yumurtanın tavada tereyağıyla pişirildiği meşhur kahvaltı yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KÖFTE",
              "hint": "Akçaabat, İnegöl ve Tekirdağ çeşitleriyle Türkiye'nin dört bir yanında sevilen kıyma yemeği",
              "difficulty": "Kolay"
            }
          ]
        },
        {
          "id": "avrupa-mutfagi",
          "name": "Avrupa Mutfağı",
          "iconKey": "croissant",
          "badge": "Kıta Lezzetleri",
          "description": "İtalya, Fransa ve İspanya'nın dünyaca ünlü ikonik tatları",
          "levels": [
            {
              "id": 1,
              "word": "PİZZA",
              "hint": "Napoli kökenli, incecik açılmış mayalı hamur üzerine domates sosu ve mozzarella konulan İtalyan şaheseri",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "RİSOTTO",
              "hint": "Arborio pirincinin et suyunda nişastasını salarak yavaş yavaş pişirildiği kremamsı İtalyan yemeği",
              "difficulty": "Orta"
            },
            {
              "id": 3,
              "word": "KRUVASAN",
              "hint": "Fransız kahvaltılarının simgesi haline gelen, bol tereyağlı kat kat hilal şeklindeki çörek",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "MAKARNA",
              "hint": "Spagetti, fettuccine ve penne çeşitleriyle durum buğdayı irmiğinden yapılan İtalyan klasiği",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "LAZANYA",
              "hint": "Geniş hamur plakaları arasına bolonez sos ve beşamel konularak fırınlanan katmanlı yemek",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "TİRAMİSU",
              "hint": "Kedi dili bisküvilerinin espressoya batırılıp mascarpone peyniri ve kakaoyla hazırlandığı tatlı",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "PAELLA",
              "hint": "Valensiya yöresine özgü, safranla sarartılmış pirincin deniz ürünleriyle geniş tavada pişirildiği yemek",
              "difficulty": "Orta"
            },
            {
              "id": 8,
              "word": "GULAŞ",
              "hint": "Macaristan'ın milli yemeği olan, bol soğan ve tatlı kırmızı toz biberle pişirilen dana yahni",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "dunya-yemekleri",
          "name": "Dünya Yemekleri",
          "iconKey": "cutlery",
          "badge": "Sokak & Kültür",
          "description": "Asya sokak lezzetlerinden Meksika ateşine global tatlar",
          "levels": [
            {
              "id": 1,
              "word": "SUSHI",
              "hint": "Sirke aromalı pirincin çiğ balık veya sebzelerle nori yosununa sarıldığı Japon mutfak sanatı",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "TACO",
              "hint": "Mısır veya buğday tortillası içerisine et, fasulye, salsa ve avokado konularak katlanan Meksika yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "RAMEN",
              "hint": "Et suyunda buğday erişteleri, haşlanmış yumurta ve yeşil soğanla servis edilen Japon çorbası",
              "difficulty": "Kolay"
            },
            {
              "id": 4,
              "word": "BURGER",
              "hint": "İki yuvarlak ekmek arasına kıyma köftesi, peynir ve soslar konularak yapılan küresel sandviç",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "NOODLE",
              "hint": "Uzak Doğu mutfağında wok tavada sebzeler ve soya sosuyla hızlıca kavrulan şerit hamur",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "BURRİTO",
              "hint": "Meksika mutfağında silindir şeklinde sıkıca sarılmış büyük un tortillası dürümü",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "KÖRİ",
              "hint": "Zerdeçal, zencefil ve kimyon gibi yoğun baharatlarla hazırlanan Güney Asya soslu yemeği",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "KİMCİ",
              "hint": "Kore mutfağının simgesi olan, acı biber ve sarımsakla fermente edilmiş Çin lahanası turşusu",
              "difficulty": "Orta"
            }
          ]
        },
        {
          "id": "tatlilar-icecekler",
          "name": "Tatlılar & İçecekler",
          "iconKey": "cake",
          "badge": "Kahve & Tatlı",
          "description": "Kahve ritüelleri, dünya çayları ve meşhur tatlılar",
          "levels": [
            {
              "id": 1,
              "word": "KAHVE",
              "hint": "Etiyopya'da keşfedilip Osmanlı sarayından tüm dünyaya yayılan kavrulmuş çekirdek içeceği",
              "difficulty": "Kolay"
            },
            {
              "id": 2,
              "word": "ESPRESSO",
              "hint": "İnce çekilmiş kahve tozunun içerisinden yüksek basınçlı sıcak su geçirilerek yapılan yoğun İtalyan kahvesi",
              "difficulty": "Kolay"
            },
            {
              "id": 3,
              "word": "MATCHA",
              "hint": "Gölgede yetiştirilen yeşil çay yapraklarının taş değirmenlerde öğütülmesiyle elde edilen Japon toz çayı",
              "difficulty": "Orta"
            },
            {
              "id": 4,
              "word": "ÇİKOLATA",
              "hint": "Kakao çekirdeklerinin işlenmesiyle elde edilen, Azteklerin Tanrıların İçeceği dediği tatlı lezzet",
              "difficulty": "Kolay"
            },
            {
              "id": 5,
              "word": "SUFLE",
              "hint": "Dışı pişmiş, içi akışkan sıcak çikolatayla doldurulan porselen kapta servis edilen Fransız tatlısı",
              "difficulty": "Kolay"
            },
            {
              "id": 6,
              "word": "GELATO",
              "hint": "Geleneksel dondurmaya göre daha az hava ve yağ içeren yoğun kıvamlı İtalyan dondurması",
              "difficulty": "Kolay"
            },
            {
              "id": 7,
              "word": "ÇAY",
              "hint": "Rize yamaçlarında yetişen, ince belli bardakta tavşan kanı demlenen milli içeceğimiz",
              "difficulty": "Kolay"
            },
            {
              "id": 8,
              "word": "WAFFLE",
              "hint": "Belçika kökenli, petek desenli sıcak hamur üzerine meyveler ve çikolata sosu serilen tatlı",
              "difficulty": "Kolay"
            }
          ]
        }
      ]
    }
  ]
};

export const UI_STRINGS = {
  "tr": {
    "gameTitle": "Word & World",
    "play": "Oyna",
    "playNow": "OYUNA BAŞLA",
    "levelsOpen": "SEVİYE AÇIK",
    "masterHunter": "Usta Avcı",
    "streakDays": "GÜN",
    "completed": "Tamamlandı",
    "totalStars": "Toplam Yıldız",
    "tacticalPitch": "İlk 11 Sahası",
    "hint": "İpucu",
    "viewPitch": "Sahadaki İlk 11 Dizilişini Gör",
    "formation": "Diziliş",
    "gk": "Kaleci",
    "def": "Defans",
    "mid": "Orta Saha",
    "fwd": "Forvet",
    "notEnoughLetters": "Yetersiz harf sayısı!",
    "wordNotFound": "Kelime listede yok!",
    "victoryTitle": "Harika Tahmin!",
    "nextLevel": "Sonraki Seviye",
    "backToMenu": "Menüye Dön",
    "replayLevel": "Tekrar Oyna",
    "developerTitle": "Geliştirici & Yayıncı",
    "developerCompany": "Viscora Games",
    "parentStudio": "Cyber Core Interactive",
    "contactSupport": "Destek & İletişim",
    "copyEmail": "E-postayı Kopyala",
    "copiedToast": "E-posta panoya kopyalandı!",
    "privacyPolicy": "Gizlilik Politikası",
    "termsOfService": "Kullanım Koşulları",
    "privacyBody": "Word & World, oyuncularımızın kişisel gizliliğine mutlak saygı duyar. Oyunumuz hiçbir kişisel veri, rehber veya konum bilgisi toplamaz. Google Play Aile Politikası, COPPA ve GDPR gerekliliklerine tamamen uygundur. Tüm ilerleme cihazınızda yerel olarak saklanır.",
    "termsBody": "Word & World, Cyber Core Interactive bünyesinde geliştirilmiş olup Viscora Games etiketiyle yayınlanmaktadır. Oyun içi tüm görsel ve işitsel haklar saklıdır.",
    "settings": "Ayarlar",
    "howToPlay": "Nasıl Oynanır",
    "aboutGame": "Hakkında",
    "language": "Dil Seçimi",
    "sound": "Ses",
    "soundEffects": "Ses Efektleri",
    "vibration": "Titreşim",
    "soundOn": "Açık",
    "soundOff": "Kapalı",
    "resetProgress": "İlerlemeyi Sıfırla",
    "resetAllProgress": "Tüm Verileri Sıfırla",
    "resetSuccess": "Tüm ilerleme sıfırlandı!",
    "confirmReset": "Tüm seviye ilerlemenizi ve yıldızlarınızı sıfırlamak istediğinize emin misiniz?",
    "shareGame": "Oyunu Paylaş",
    "rateGame": "Google Play'de Değerlendir",
    "shareSuccess": "Bağlantı kopyalandı!",
    "version": "Sürüm",
    "build": "Yapı",
    "home": "Ana Sayfa",
    "map": "Dünyalar",
    "quests": "Günlük",
    "dailyMission": "GÜNLÜK GÖREV",
    "worldAdventure": "DÜNYA SERÜVENİ",
    "close": "Kapat",
    "enter": "ONAY",
    "backspace": "SİL",
    "correctBadge": "Doğru",
    "presentBadge": "Yeri Yanlış",
    "absentBadge": "Kelime Dışı",
    "allCategoriesCompleted": "Tüm Seviyeler Tamamlandı!",
    "allLevelsCompleted": "Bu kategorideki tüm seviyeler tamamlandı!",
    "level": "Bölüm",
    "levels": "Bölüm",
    "lettersShort": "Harf",
    "remainingAttempts": "Hak",
    "wordSolvedIn": "denemede çözüldü",
    "wordWas": "DOĞRU KELİME",
    "gameOver": "GİZEM ÇÖZÜLEMEDİ",
    "perfect": "KUSURSUZ KEŞİF!",
    "great": "HARİKA BAŞARI!",
    "good": "BÖLÜMÜ GEÇTİN!",
    "replay": "TEKRAR DENE",
    "backToLevels": "BÖLÜMLER",
    "dailyStarted": "Günün Meydan Okuması Başladı!",
    "letterHintToast": "Harf Sabitlendi",
    "allLettersRevealed": "Tüm harfler zaten biliniyor!",
    "themes": "Temalar",
    "themeStudio": "Kozmetik & Tema Atölyesi"
  },
  "en": {
    "gameTitle": "Word & World",
    "play": "Play",
    "playNow": "PLAY NOW",
    "levelsOpen": "Levels Open",
    "masterHunter": "Master Hunter",
    "streakDays": "DAYS",
    "completed": "Completed",
    "totalStars": "Total Stars",
    "tacticalPitch": "Starting XI Pitch",
    "hint": "Hint",
    "viewPitch": "Inspect Pitch",
    "formation": "Formation",
    "gk": "Goalkeeper",
    "def": "Defenders",
    "mid": "Midfielders",
    "fwd": "Attackers",
    "notEnoughLetters": "Not enough letters!",
    "wordNotFound": "Word not found!",
    "victoryTitle": "Brilliant Guess!",
    "nextLevel": "Next Level",
    "backToMenu": "Return to Menu",
    "replayLevel": "Play Again",
    "developerTitle": "Developer & Publisher",
    "developerCompany": "Viscora Games",
    "parentStudio": "Cyber Core Interactive",
    "contactSupport": "Support & Contact",
    "copyEmail": "Copy Email",
    "copiedToast": "Email copied to clipboard!",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service",
    "privacyBody": "Word & World is dedicated to protecting player privacy. We do not collect personal data, contacts, or location details. The game is fully compliant with Google Play Families Policy, COPPA, and GDPR. All progress is stored locally on your device.",
    "termsBody": "Word & World is developed under Cyber Core Interactive and published under the Viscora Games label. All game art and audio rights are reserved.",
    "settings": "Settings",
    "howToPlay": "How to Play",
    "aboutGame": "About",
    "language": "Language",
    "sound": "Sound",
    "soundEffects": "Sound Effects",
    "vibration": "Vibration",
    "soundOn": "On",
    "soundOff": "Off",
    "resetProgress": "Reset Progress",
    "resetAllProgress": "Reset All Data",
    "resetSuccess": "All progress reset!",
    "confirmReset": "Are you sure you want to reset all game data and stars?",
    "shareGame": "Share Game",
    "rateGame": "Rate on Google Play",
    "shareSuccess": "Link copied!",
    "version": "Version",
    "build": "Build",
    "home": "Home",
    "map": "Worlds",
    "quests": "Daily",
    "dailyMission": "DAILY QUEST",
    "worldAdventure": "WORLD EXPEDITION",
    "close": "Close",
    "enter": "ENTER",
    "backspace": "DEL",
    "correctBadge": "Correct",
    "presentBadge": "Wrong Spot",
    "absentBadge": "Not in Word",
    "allCategoriesCompleted": "All Levels Completed!",
    "allLevelsCompleted": "All levels in this category completed!",
    "level": "Level",
    "levels": "Levels",
    "lettersShort": "Ltr",
    "remainingAttempts": "Left",
    "wordSolvedIn": "attempts",
    "wordWas": "CORRECT WORD",
    "gameOver": "MYSTERY UNSOLVED",
    "perfect": "PERFECT DISCOVERY!",
    "great": "GREAT SUCCESS!",
    "good": "LEVEL CLEARED!",
    "replay": "TRY AGAIN",
    "backToLevels": "LEVELS",
    "dailyStarted": "Daily Challenge Started!",
    "letterHintToast": "Letter Pinned",
    "allLettersRevealed": "All letters already uncovered!",
    "themes": "Themes",
    "themeStudio": "Theme & Style Studio"
  }
};
