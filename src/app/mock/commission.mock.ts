import { ICommission } from "../models/commission.interface";

export const LIST_COMMISSION: ICommission [] = [
{
    "id":1, 
    "idGroup":1, 
    "name": "Class 1 Angular",
    "idCourse": {"id":1,"name": "Angular","profesor": "Juan", inscripcion: true},
    "subscriptions": 
        [
            {"id":1,"first_name": "Joanna","last_name": "Fischer","email":"jfischer0@deliciousdays.com","gender": "Female","avatar":"https://robohash.org/nihilmolestiaenumquam.png?size=50x50&set=set1","group": "Senior"},
            {"id":2,"first_name": "Emilee","last_name": "Jahnke","email":"ejahnke1@intel.com","gender": "Female","avatar":"https://robohash.org/aliquamfugiatratione.png?size=50x50&set=set1","group": "Junior"},
            {"id":3,"first_name": "Aleksandr","last_name": "Juleff","email":"ajuleff2@weebly.com","gender": "Male","avatar":"https://robohash.org/voluptasimpeditlaborum.png?size=50x50&set=set1","group": "Junior"},
            {"id":4,"first_name": "Pail","last_name": "MacIlurick","email":"pmacilurick3@photobucket.com","gender": "Male","avatar":"https://robohash.org/enimmagnamlibero.png?size=50x50&set=set1","group": "Junior"},
        ],
    "fechaInicio" : new Date(2022, 0, 1),
    "fechaFin" : new Date(2022, 0, 1)
},
{
    "id":2, 
    "idGroup":1, 
    "name": "Class 2 Angular",
    "idCourse": {"id":1,"name": "Angular","profesor": "Ramon", inscripcion: true},
    "subscriptions": 
        [
            {"id":5,"first_name": "Janis","last_name": "McCrossan","email":"jmccrossan4@lulu.com","gender": "Female","avatar":"https://robohash.org/sedrecusandaesunt.png?size=50x50&set=set1","group": "Senior"},
            {"id":6,"first_name": "Birk","last_name": "Mungane","email":"bmungane5@cargocollective.com","gender": "Male","avatar":"https://robohash.org/suntteneturducimus.png?size=50x50&set=set1","group": "Senior"},
            {"id":7,"first_name": "Early","last_name": "Dunbobin","email":"edunbobin6@irs.gov","gender": "Male","avatar":"https://robohash.org/veletpossimus.png?size=50x50&set=set1","group": "Senior"},
            {"id":8,"first_name": "Jennine","last_name": "Naulty","email":"jnaulty7@sbwire.com","gender": "Female","avatar":"https://robohash.org/nullavelnesciunt.png?size=50x50&set=set1","group": "Senior"},
            {"id":9,"first_name": "Matthus","last_name": "Dowson","email":"mdowson8@last.fm","gender": "Male","avatar":"https://robohash.org/autlaborumet.png?size=50x50&set=set1","group": "Senior"},
        ],
    "fechaInicio" : new Date(2022, 0, 1),
    "fechaFin" : new Date(2022, 0, 1)
},
]