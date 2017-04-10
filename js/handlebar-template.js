var text_json = {
	"spanish": {
		"index": {
			"nav": {
				"top": "Inicio",
				"about": "Acerca de",
				"authorities": "Autoridades",
				"activities": "Actividades",
				"map": "Donde estamos",
				"contact": "Contacto"

			},
			"header": {
				"branch": "Rama Estudiantil",
				"university" : "Universidad Tecnológica Nacional",
				"faculty": "Facultad Regional Córdoba",
				"about": "Enterate más"
			},
			"section_about": {
				"title": "Organización sin fines de lucro · Servicio de ingeniería · Centro de investigación educativa en Ciudad de Córdoba",
				"paragraph": "El IEEE es la asociación profesional más grande del mundo dedicada al avance de la innovación tecnológica y excelencia en beneficio de la humanidad. El IEEE y sus miembros inspiran una comunidad global a través de las altamente citadas publicaciones de IEEE, conferencias, estándares tecnológicos y actividades profesionales y educativas."
			},
			"section_authorities": {
				"title": "Autoridades",
				"precident": "Presidente",
				"precident_name": "El Preci",
				"viceprecident": "Vicepresidente",
				"viceprecident_name": "El otro preci",
				"treasurer": "Tesorero",
				"treasurer_name": "El de la plata",
				"secretary": "Secretario",
				"secretary_name": "El que toma nota"
			},
			"aside_phrase": {
				"title": "El conocimiento no es una vasija que se llena, sino un fuego que se enciende"
			},
			"section_activities":{
				"title": "Actividades"
			},
			"aside_cotact": {
				"title": "Contactate con nosotos.",
				"butom": "Contacto!"
			},
			"section_contact": {
				"title": "Contacto",
				"where": {
					"center": "Centro de Investigación en Informática para la Ingeniería (CIII)",
					"uny": "UNT - FRC ",
					"addr": "Maestro M. Lopez esq. Cruz Roja",
					"addr2": "Ciudad Universitaria",
					"addr3": "Córdoba, CP 5000"
				}, 
				"tel": "+54 9 351 El cel del Preci??",
				"mail": "ieee.rama.utn.frc@gmail.com"
			}
		}
	},
	"english": {
		"index": {
			"nav": {
				"top": "Home",
				"about": "About us",
				"authorities": "Authorities",
				"activities": "Activities",
				"map": "Where we are",
				"contact": "Contact"

			},
			"header": {
				"branch": "Student Branch",
				"university" : "National Technological University",
				"faculty": "Facultad Regional Córdoba",
				"about": "Learn more"
			},
			"section_about": {
				"title": "Non-profit organization · Engineering service · Educational research center in Córdoba City",
				"paragraph": "IEEE is the world's largest professional association dedicated to advancing technological innovation and excellence for the benefit of mankind. The IEEE and its members inspire a global community through the highly-cited IEEE publications, conferences , Technological standards and professional and educational activities."
			},
			"section_authorities": {
				"title": "Authorities",
				"precident": "President",
				"precident_name": "El Preci",
				"viceprecident": "Vice-President",
				"viceprecident_name": "El otro preci",
				"treasurer": "Treasurer",
				"treasurer_name": "El de la plata",
				"secretary": "Secretary",
				"secretary_name": "El que toma nota"
			},
			"aside_phrase": {
				"title": "The mind is not a vessel to be filled but a fire to be kindled"
			},
			"section_activities":{
				"title": "Activities"
			},
			"aside_cotact": {
				"title": "Contact with us.",
				"butom": "Contact!"
			},
			"section_contact": {
				"title": "Contact",
				"where":  {
					"center": "Center for Research in Computer Science for Engineering (CIII)",
					"uny": "UNT - FRC ",
					"addr": "Maestro M. Lopez intersection Cruz Roja",
					"addr2":"University City",
					"addr3":"Córdoba, CP 5000"},
				"tel": "+54 9 351 El cel del Preci??",
				"mail": "ieee.rama.utn.frc@gmail.com"
			}
		}
	}
} 
//$.getJSON("json/text.json", function(json) {
//   console.log(json); // this will show the info it in firebug console
//    text_json = json;
//});



function changeIdiom(laguague){
	var idiom = text_json;
	if (laguague == "ENG") {
		idiom = text_json.english;		
	}
	if (laguague == "ESP") {
		idiom = text_json.spanish;
	}
	console.log(idiom);
	var nav = idiom.index.nav;
	console.log(nav);
	var source = $("#nav-template").html();
	var template = Handlebars.compile(source);
	var data = nav;
	$("#sidebar-wrapper").html(template(data));

	var header = idiom.index.header
	var source = $("#header-template").html();
	var template = Handlebars.compile(source);
	var data = header;
	$("#top").html(template(data));

	var about = idiom.index.section_about;
	var source = $("#about-template").html();
	var template = Handlebars.compile(source);
	var data = about;
	$("#about").html(template(data));

	var authorities = idiom.index.section_authorities;
	var source = $("#authorities-template").html();
	var template = Handlebars.compile(source);
	var data = authorities;
	$("#authorities").html(template(data));

	var aside_phrase = idiom.index.aside_phrase;
	var source = $("#aside-phrase-template").html();
	var template = Handlebars.compile(source);
	var data = aside_phrase;
	$("#aside-phrase").html(template(data));

	var activities = idiom.index.section_activities;
	var source = $("#activities-template").html();
	var template = Handlebars.compile(source);
	var data = activities;
	$("#activities").html(template(data));

	var aside_cotact = idiom.index.aside_cotact;
	var source = $("#aside-contact-template").html();
	var template = Handlebars.compile(source);
	var data = aside_cotact;
	$("#aside-contact").html(template(data));

	var cotact = idiom.index.section_contact;
	var source = $("#contact-template").html();
	var template = Handlebars.compile(source);
	var data = cotact;
	$("#contact").html(template(data));
	location.reload();
};

$("#ESP").click(changeIdiom("ESP"));
$("#ENG").click(changeIdiom("ENG"));


