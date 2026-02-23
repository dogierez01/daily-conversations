const lessonData = {
    "01_Airport_Check-in.wav": [
        { speaker: "traveler", text: "Hello, I want to check in for my flight to Barcelona.", dict: { "Hello": "Merhaba", "want": "istemek", "check": "kayıt", "flight": "uçuş", "Barcelona": "Barselona" } },
        { speaker: "official", text: "Hello. Can I see your passport and ticket, please?", dict: { "passport": "pasaport", "see": "görmek", "ticket": "bilet", "please": "lütfen" } },
        { speaker: "traveler", text: "Yes, here is my passport and my ticket.", dict: { "here": "işte" } },
        { speaker: "official", text: "Thank you. Do you have any bags to check?", dict: { "bags": "çantalar", "any": "hiç" } },
        { speaker: "traveler", text: "Yes, I have one big suitcase.", dict: { "one": "bir", "big": "büyük", "suitcase": "valiz" } },
        { speaker: "official", text: "Perfect. Here is your boarding pass. Have a good flight.", dict: { "Perfect": "Harika", "boarding": "biniş", "pass": "kartı", "good": "iyi" } }
    ],
    "02_Boarding_and_Seating.wav": [
        { speaker: "traveler", text: "Excuse me, where is seat 14B?", dict: { "Excuse": "Affedersiniz", "where": "nerede", "seat": "koltuk" } },
        { speaker: "official", text: "Hello. It is in the middle of the plane, on the right.", dict: { "middle": "orta", "plane": "uçak", "right": "sağ" } },
        { speaker: "traveler", text: "Thank you. Can I put my bag here?", dict: { "put": "koymak", "here": "buraya" } },
        { speaker: "official", text: "Yes, you can put it in the overhead cabin.", dict: { "overhead": "başüstü", "cabin": "kabin" } },
        { speaker: "traveler", text: "Okay, I will put it up there.", dict: { "there": "oraya" } },
        { speaker: "official", text: "Let me help you with that.", dict: { "help": "yardım" } }
    ],
    "03_Initial_Flight_Attendant.wav": [
        { speaker: "traveler", text: "Excuse me, can I have some water?", dict: { "water": "su" } },
        { speaker: "official", text: "Yes, of course. Do you want ice?", dict: { "course": "elbette", "ice": "buz" } },
        { speaker: "traveler", text: "No ice, please. Just water.", dict: { "Just": "Sadece" } },
        { speaker: "official", text: "Here is your water.", dict: { "Here": "İşte" } },
        { speaker: "traveler", text: "Thank you very much.", dict: { "much": "çok" } },
        { speaker: "official", text: "You are welcome. Let me know if you need anything else.", dict: { "welcome": "rica ederim", "anything": "herhangi bir şey" } }
    ],
    "04_In-Flight_Request.wav": [
        { speaker: "traveler", text: "Excuse me, I am very cold.", dict: { "cold": "soğuk" } },
        { speaker: "official", text: "Oh, I am sorry. Do you need a blanket?", dict: { "blanket": "battaniye" } },
        { speaker: "traveler", text: "Yes, please. A blanket would be great.", dict: { "great": "harika" } },
        { speaker: "official", text: "I will bring one for you right now.", dict: { "bring": "getirmek" } },
        { speaker: "traveler", text: "Thank you, that is very kind.", dict: { "kind": "nazik" } },
        { speaker: "official", text: "Here is your blanket. Stay warm.", dict: { "warm": "sıcak" } }
    ],
    "05_Passport_Control.wav": [
        { speaker: "traveler", text: "Hello, here is my passport.", dict: { "passport": "pasaport" } },
        { speaker: "official", text: "Thank you. Why are you visiting Barcelona?", dict: { "Why": "Neden", "visiting": "ziyaret" } },
        { speaker: "traveler", text: "I am here for a holiday.", dict: { "holiday": "tatil" } },
        { speaker: "official", text: "How many days will you stay?", dict: { "days": "günler", "stay": "kalmak" } },
        { speaker: "traveler", text: "I will stay for seven days.", dict: { "seven": "yedi" } },
        { speaker: "official", text: "Welcome to Spain. Enjoy your trip.", dict: { "Spain": "İspanya", "trip": "seyahat" } }
    ],
    "06_Customs_Clearance.wav": [
        { speaker: "official", text: "Hello. Do you have anything to declare?", dict: { "declare": "beyan" } },
        { speaker: "traveler", text: "No, I do not have anything to declare.", dict: { "declare": "beyan" } },
        { speaker: "official", text: "What is inside your bag?", dict: { "inside": "içinde", "bag": "çanta" } },
        { speaker: "traveler", text: "Just my clothes and personal things.", dict: { "clothes": "kıyafetler", "personal": "kişisel" } },
        { speaker: "official", text: "Okay, you can pass. Have a good day.", dict: { "pass": "geçmek" } },
        { speaker: "traveler", text: "Thank you very much.", dict: { "much": "çok" } }
    ],
    "07_Finding_Transportation.wav": [
        { speaker: "traveler", text: "Hello, how much is a taxi to the city center?", dict: { "taxi": "taksi", "center": "merkezi" } },
        { speaker: "official", text: "It is about thirty euros.", dict: { "thirty": "otuz", "euros": "avro" } },
        { speaker: "traveler", text: "Okay, can you take me to the Grand Hotel?", dict: { "Hotel": "Otel" } },
        { speaker: "official", text: "Yes, of course. Put your bags in the back.", dict: { "back": "arka" } },
        { speaker: "traveler", text: "Thank you. How long does it take?", dict: { "long": "uzun", "take": "sürmek" } },
        { speaker: "official", text: "It takes about thirty minutes.", dict: { "minutes": "dakika" } }
    ],
    "08_Hotel_Check-in.wav": [
        { speaker: "traveler", text: "Hello, I have a reservation under the name Ali.", dict: { "reservation": "rezervasyon", "name": "isim" } },
        { speaker: "official", text: "Welcome. Let me find your reservation.", dict: { "find": "bulmak" } },
        { speaker: "traveler", text: "Here is my passport and credit card.", dict: { "credit": "kredi", "card": "kart" } },
        { speaker: "official", text: "Thank you. Your room is on the fourth floor.", dict: { "fourth": "dördüncü", "floor": "kat" } },
        { speaker: "traveler", text: "What time is breakfast in the morning?", dict: { "breakfast": "kahvaltı" } },
        { speaker: "official", text: "Breakfast is from 7 AM to 10 AM.", dict: { "from": "den" } }
    ],
    "09_Room_Problem_Arises.wav": [
        { speaker: "traveler", text: "Hello, reception? The air conditioning in my room is not working.", dict: { "reception": "resepsiyon", "air": "hava", "conditioning": "klima" } },
        { speaker: "official", text: "I am sorry to hear that. What is your room number?", dict: { "number": "numara" } },
        { speaker: "traveler", text: "I am in room 405. It is very hot.", dict: { "hot": "sıcak" } },
        { speaker: "official", text: "I will send someone to fix it right now.", dict: { "fix": "tamir" } },
        { speaker: "traveler", text: "Thank you, I will wait in the room.", dict: { "wait": "beklemek" } },
        { speaker: "official", text: "They will be there in five minutes.", dict: { "minutes": "dakika" } }
    ],
    "10_Solving_the_Room_Problem.wav": [
        { speaker: "official", text: "Hello, I am here to fix the air conditioning.", dict: { "fix": "tamir" } },
        { speaker: "traveler", text: "Great, please come in. It is not turning on.", dict: { "turning": "dönmek" } },
        { speaker: "official", text: "Let me check the remote control. Ah, the battery is dead.", dict: { "remote": "uzaktan", "control": "kumanda", "battery": "pil" } },
        { speaker: "traveler", text: "Oh, is that the only problem?", dict: { "only": "sadece" } },
        { speaker: "official", text: "Yes, I changed the batteries. It works now.", dict: { "changed": "değiştirdi" } },
        { speaker: "traveler", text: "Thank you so much for your fast help.", dict: { "fast": "hızlı" } }
    ],
    "11_Car_Rental.wav": [
        { speaker: "traveler", text: "Hello, I want to rent a small car for two days.", dict: { "rent": "kiralamak", "small": "küçük" } },
        { speaker: "official", text: "Okay. Can I see your driver's license, please?", dict: { "driver": "sürücü", "license": "ehliyet" } },
        { speaker: "traveler", text: "Yes, here is my license from Turkey.", dict: { "Turkey": "Türkiye" } },
        { speaker: "official", text: "Thank you. With insurance, it is eighty euros a day.", dict: { "insurance": "sigorta", "eighty": "seksen" } },
        { speaker: "traveler", text: "That is fine. I will pay with my credit card.", dict: { "pay": "ödemek" } },
        { speaker: "official", text: "Here are your keys. The car is outside.", dict: { "keys": "anahtarlar", "outside": "dışarıda" } }
    ],
    "12_Fancy_Dinner.wav": [
        { speaker: "traveler", text: "Good evening. I want a table for one person, please.", dict: { "evening": "akşam", "table": "masa" } },
        { speaker: "official", text: "Good evening. Do you have a reservation?", dict: { "reservation": "rezervasyon" } },
        { speaker: "traveler", text: "No, I do not have a reservation.", dict: { "do": "yapmak" } },
        { speaker: "official", text: "We are very busy, but I have a small table near the window.", dict: { "busy": "meşgul", "near": "yakın" } },
        { speaker: "traveler", text: "That table is perfect, thank you.", dict: { "perfect": "kusursuz" } },
        { speaker: "official", text: "Please follow me, I will give you the menu.", dict: { "follow": "takip", "menu": "menü" } }
    ],
    "13_Restaurant_Problem.wav": [
        { speaker: "traveler", text: "Excuse me, my soup is completely cold.", dict: { "soup": "çorba", "cold": "soğuk" } },
        { speaker: "official", text: "I am so sorry, sir. Let me take it back to the kitchen.", dict: { "sir": "beyefendi", "kitchen": "mutfak" } },
        { speaker: "traveler", text: "Thank you. Can I also have some more bread?", dict: { "bread": "ekmek" } },
        { speaker: "official", text: "Of course. I will bring hot soup and fresh bread immediately.", dict: { "fresh": "taze", "immediately": "hemen" } },
        { speaker: "traveler", text: "I appreciate it. I am very hungry.", dict: { "appreciate": "minnettar", "hungry": "aç" } },
        { speaker: "official", text: "It will only take two minutes, I promise.", dict: { "promise": "söz" } }
    ],
    "14_Falling_Ill.wav": [
        { speaker: "traveler", text: "Hello, I feel very sick. My stomach hurts a lot.", dict: { "sick": "hasta", "stomach": "mide", "hurts": "ağrıyor" } },
        { speaker: "official", text: "Oh no, I am sorry. Do you need a doctor?", dict: { "doctor": "doktor" } },
        { speaker: "traveler", text: "I think I need to go to the hospital.", dict: { "hospital": "hastane" } },
        { speaker: "official", text: "I can call a taxi to take you to the nearest hospital.", dict: { "nearest": "en yakın" } },
        { speaker: "traveler", text: "Yes, please call a taxi quickly.", dict: { "quickly": "çabuk" } },
        { speaker: "official", text: "The taxi is waiting outside for you right now.", dict: { "waiting": "bekliyor" } }
    ],
    "15_Hospital_Visit.wav": [
        { speaker: "official", text: "Hello, my stomach hurts a lot.", dict: { "stomach": "mide", "hurts": "ağrıyor" } },
        { speaker: "traveler", text: "Where exactly does it hurt? Point to the place.", dict: { "exactly": "tam olarak", "place": "yer" } },
        { speaker: "official", text: "It hurts right here, in the middle.", dict: { "middle": "orta" } },
        { speaker: "traveler", text: "It looks like a stomach bug from something you ate.", dict: { "bug": "mikrop", "ate": "yedi" } },
        { speaker: "official", text: "What should I do? Will I be okay?", dict: { "should": "meli" } },
        { speaker: "traveler", text: "Yes, I will give you a prescription for some medicine.", dict: { "prescription": "reçete", "medicine": "ilaç" } }
    ],
    "16_Pharmacy_Run.wav": [
        { speaker: "traveler", text: "Hello, I have this prescription from the doctor.", dict: { "prescription": "reçete" } },
        { speaker: "official", text: "Let me see. Yes, we have this medicine.", dict: { "medicine": "ilaç" } },
        { speaker: "traveler", text: "How many times a day should I take it?", dict: { "times": "kez" } },
        { speaker: "official", text: "Take one pill every morning and one every night after food.", dict: { "pill": "hap", "food": "yemek" } },
        { speaker: "traveler", text: "Okay, how much is it?", dict: { "much": "kadar" } },
        { speaker: "official", text: "It is fifteen euros. Feel better soon!", dict: { "fifteen": "on beş", "soon": "yakında" } }
    ],
    "17_Police_Station_Report.wav": [
        { speaker: "traveler", text: "Hello, I want to report a lost wallet.", dict: { "report": "rapor", "lost": "kayıp", "wallet": "cüzdan" } },
        { speaker: "official", text: "Where and when did you lose it?", dict: { "Where": "Nerede", "lose": "kaybetmek" } },
        { speaker: "traveler", text: "I think I lost it near the hospital yesterday.", dict: { "near": "yakın", "yesterday": "dün" } },
        { speaker: "official", text: "What color was the wallet and what was inside?", dict: { "color": "renk", "inside": "içinde" } },
        { speaker: "traveler", text: "It was black, with my ID card and fifty euros.", dict: { "black": "siyah", "fifty": "elli" } },
        { speaker: "official", text: "Please fill out this form with your details.", dict: { "fill": "doldurmak", "form": "form" } }
    ],
    "18_Shoe_Shopping.wav": [
        { speaker: "traveler", text: "Hello, do you have these shoes in size 42?", dict: { "shoes": "ayakkabılar", "size": "numara" } },
        { speaker: "official", text: "Let me check in the back. Yes, we have them.", dict: { "back": "arka" } },
        { speaker: "traveler", text: "Can I try them on, please?", dict: { "try": "denemek" } },
        { speaker: "official", text: "Of course, please sit down here.", dict: { "sit": "oturmak" } },
        { speaker: "traveler", text: "They are very comfortable. I will buy them.", dict: { "comfortable": "rahat", "buy": "satın almak" } },
        { speaker: "official", text: "Great choice. That will be sixty euros, please.", dict: { "choice": "seçim", "sixty": "altmış" } }
    ],
    "19_Returning_the_Car.wav": [
        { speaker: "traveler", text: "Hello, I am here to return my rental car.", dict: { "return": "iade", "rental": "kiralık" } },
        { speaker: "official", text: "Hello. Did you fill the gas tank?", dict: { "gas": "benzin", "tank": "depo" } },
        { speaker: "traveler", text: "Yes, the tank is completely full.", dict: { "completely": "tamamen", "full": "dolu" } },
        { speaker: "official", text: "Let me check the car for any damage. Everything looks good.", dict: { "damage": "hasar", "good": "iyi" } },
        { speaker: "traveler", text: "Here are the keys. Have a nice day.", dict: { "keys": "anahtarlar" } },
        { speaker: "official", text: "Thank you. Your deposit will be returned today.", dict: { "deposit": "depozito", "returned": "iade" } }
    ],
    "20_Arranging_Airport_Transfer.wav": [
        { speaker: "traveler", text: "Hello, I need to go to the airport tomorrow morning.", dict: { "airport": "havaalanı", "tomorrow": "yarın" } },
        { speaker: "official", text: "What time is your flight, sir?", dict: { "time": "saat", "flight": "uçuş" } },
        { speaker: "traveler", text: "My flight is at 10 AM, so I want to leave at 7 AM.", dict: { "leave": "ayrılmak" } },
        { speaker: "official", text: "I will book a taxi for you at 7 AM.", dict: { "book": "ayırtmak", "taxi": "taksi" } },
        { speaker: "traveler", text: "How much will the taxi cost?", dict: { "cost": "maliyet" } },
        { speaker: "official", text: "It is a flat rate of thirty-five euros.", dict: { "flat": "sabit", "rate": "oran" } }
    ],
    "21_Taxi_to_the_Airport.wav": [
        { speaker: "traveler", text: "Good morning. To the airport, please. Terminal 1.", dict: { "airport": "havaalanı" } },
        { speaker: "official", text: "Good morning. Seatbelt on, please.", dict: { "Seatbelt": "emniyet kemeri" } },
        { speaker: "traveler", text: "Yes, my seatbelt is on. Is there much traffic?", dict: { "traffic": "trafik" } },
        { speaker: "official", text: "No, the roads are clear this morning.", dict: { "roads": "yollar", "clear": "açık" } },
        { speaker: "traveler", text: "That is good. Here is the money for the ride.", dict: { "money": "para", "ride": "yolculuk" } },
        { speaker: "official", text: "Thank you. Have a safe flight back home!", dict: { "safe": "güvenli", "home": "ev" } }
    ]
};
