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

    secondNameJson: `{
        "count": 16,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитич",
            "id_7": "Михаилович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Александровна",
            "id_11": "Максимовна",
            "id_12": "Ивановна",
            "id_13": "Артемовна",
            "id_14": "Дмитриевна",
            "id_15": "Никитична",
            "id_16": "Олеговна"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 3,
        "list": {     
            "id_1": "Елена",
            "id_2": "Дарья",
            "id_3": "Галина"
        }
    }`,

    workJson: `{
        "count": 10,
        "list": {     
            "id_1": "Солдат",
            "id_2": "Слесарь",
            "id_3": "Просто Мужчина",
            "id_4": "Шахтер",
            "id_5": "Врач",
            "id_6": "Продавец",
            "id_7": "ВодительТройллебуса",
            "id_8": "Учительница",
            "id_9": "Медсестра",
            "id_10": "Доярка"
        }
    }`,

    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
   

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

   // randomWorkNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomWorkValue: function (json,maxWork,minWork) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(maxWork, minWork)}`;  // this = personGenerator
        //const prop = 'id_6';  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        gender = (this.randomIntNumber(1,0) < 0.5) ? this.GENDER_MALE : this.GENDER_FEMALE;
        //return (this.randomIntNumber(1,0) < 0.5) ? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;    

    },

    randomFirstName: function(gender) {

        //return this.randomValue(this.firstNameMaleJson);
        return (gender == 'Мужчина') ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },


     randomSurname: function(gender) {

       // return this.randomValue(this.surnameJson);
       return (gender == 'Мужчина') ? this.randomValue(this.surnameJson) : this.randomValue(this.surnameJson)+'а';
      
    },
     randomSecondName: function(gender) {
        //надо сделать более сложные условия, отчества не атк просто
        //return (gender == 'Мужчина') ? this.randomValue(this.firstNameMaleJson)+'ович' : this.randomValue(this.firstNameMaleJson)+'вна';
        //попробуем по другому
       // return (gender == 'Мужчина') ? this.randomWorkValue(this.secondNameJson,7,1) : this.randomWorkValue(this.secondNameJson,9,5);
       return (gender == 'Мужчина') ? this.randomWorkValue(this.secondNameJson,7,1) : this.randomWorkValue(this.secondNameJson,16,10);

       
    },

    randomWork: function() {

        //return this.randomWorkValue(this.workJson,10,1);
        return (gender == 'Мужчина') ? this.randomWorkValue(this.workJson,9,1) : this.randomWorkValue(this.workJson,10,5);

    },  

     randomBirthYear: function() {

        return this.randomIntNumber(1920,2005);

    },
     randomBirthDay: function() {

        month = (this.randomValue(this.monthJson));
        switch (month){
            case 'Января': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Марта': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Мая': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Июля': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Августа': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Октября': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Декабря': return this.randomIntNumber(31,1) + ' ' + month;
            break;
            case 'Февраля': return this.randomIntNumber(28,1) + ' ' + month;
            break;
            default:
                return this.randomIntNumber(30,1) + ' ' + month;   
        }
       // if (this.randomValue(this.monthJson) == 'Января'||'Марта'||'Мая'||'Июля') {
       //     return this.randomValue(this.monthJson)+'33';
//
       // }

        //return this.randomValue(this.monthJson);
        return month;

    },

  




    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(gender);
        this.person.surName = this.randomSurname(gender);
        this.person.secondName = this.randomSecondName(gender);
        this.person.birthYear = this.randomBirthYear();
        this.person.work = this.randomWork();
        this.person.birthDay = this.randomBirthDay();
        return this.person;
    }
};
