const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Инна",
            "id_4": "Анна",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Мария",
            "id_8": "Дана",
            "id_9": "Елена",
            "id_10": "Алевтина"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Юрьев",
            "id_7": "Михаилов",
            "id_8": "Давидов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,


    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "электрик",
            "id_2": "сантехник",
            "id_3": "монтажник",
            "id_4": "дровосек",
            "id_5": "инструктор по вождению",
            "id_6": "слесарь",
            "id_7": "сварщик",
            "id_8": "инженер",
            "id_9": "дворник",
            "id_10": "архитектор"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "экономист",
            "id_2": "эколог",
            "id_3": "бухгалтер",
            "id_4": "врач",
            "id_5": "ветеринар",
            "id_6": "повар",
            "id_7": "воспитатель",
            "id_8": "уборщица",
            "id_9": "дизайнер",
            "id_10": "стилист"
        }
    }`,



    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',


    randomGender: function () {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomFirstName: function() { // имя
        if (this.person.gender =='Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
        } else{
        return this.randomValue (this.firstNameFemaleJson);
        }
    },

     randomSurname: function() { // фамилия
        if (this.person.gender =='Мужчина'){
        return this.randomValue(this.surnameJson);
        } else{
            return this.randomValue(this.surnameJson) + "а";
        }

    },

    randomPatronymic: function () { // отчество
        if (this.person.gender== 'Мужчина'){
            return this.randomValue(this.patronymicJson) + "ич";
            } else {
                return this.randomValue(this.patronymicJson) + "на";
            }
    },

    randomProfession: function () { // профессия
         if (this.person.gender =='Мужчина') {
            return this.randomValue(this.professionMaleJson);
            } else{
            return this.randomValue (this.professionFemaleJson);
            }
    },

    randomMonth31: function randomMonth() { // месяц 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { // 30 дней
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { // Февраль
		let month = `февраля`
		return month;
	},

    rendomYear: function() { // Года
        return this.randomIntNumber(1960, 1999) + " г.р.";
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        if (Math.floor(Math.random() * 3) == 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); 
        } else if (Math.floor(Math.random() * 3) == 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); 
        } else if (Math.floor(Math.random() * 3)  == 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); 
        }
        this.person.year = this.rendomYear(1960, 1999);
        return this.person;
    }
};
