const mon = Math.floor(Math.random() * 3);

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
            "id_1": "Владислав",
            "id_2": "Максим",
            "id_3": "Роман",
            "id_4": "Вадим",
            "id_5": "Шамиль",
            "id_6": "Евгений",
            "id_7": "Михаил",
            "id_8": "Артем",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Любовь",
            "id_2": "Марина",
            "id_3": "Анастасия",
            "id_4": "Анжелика",
            "id_5": "Ева",
            "id_6": "Майя",
            "id_7": "Алиса",
            "id_8": "Екатерина",
            "id_9": "Гвендолин",
            "id_10": "Гвиневра"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Владимиров",
            "id_2": "Алексеев",
            "id_3": "Вадимов",
            "id_4": "Владиславов",
            "id_5": "Шамильев",
            "id_6": "Кириллов",
            "id_7": "Денисов",
            "id_8": "Васильев",
            "id_9": "Романов",
            "id_10": "Максимов"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Шахтер",
            "id_2": "Взрывник",
            "id_3": "Вахтовик",
            "id_4": "Омоновец",
            "id_5": "Плотник",
            "id_6": "Электрик",
            "id_7": "Кинолог",
            "id_8": "Охранник",
            "id_9": "Пожарный",
            "id_10": "Полицейский"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Медсестра",
            "id_2": "Учительница",
            "id_3": "Стюардесса",
            "id_4": "Веб-дизайнер",
            "id_5": "Парикмахер",
            "id_6": "Переводчица",
            "id_7": "Связистка",
            "id_8": "Актриса",
            "id_9": "Певица",
            "id_10": "Воспитатель"
        }
    }`,
    

    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() { // Функция генерации месяцев, в которых 31 день
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() { // Функция генерации месяцев, в которых 30 дней
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() { // Функция генерации месяца Февраль
		let month = `февраля`
		return month;
	},

    rendomYear: function() { // Функция генерации Года
        return this.randomIntNumber(1970, 2000) + " г.р.,";
    },

    randomРrofession: function() { // Функция генерации мужских и женских Профессий
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31); // Генерация чисел в месяцах, в которых 31 день
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30); // Генерация чисел в месяцах, в которых 30 деней
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28); // Генерация чисел в месяце Февраль, в котором 28 дней
        }
        this.person.year = this.rendomYear(1950, 1990);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};

