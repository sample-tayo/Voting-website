simplemaps_usmap_mapdata.hooksready = function () {
    simplemaps_usmap.load();

}

let total = [0, 0];
let hawaii = [0, 0];
let alaska = [0, 0];
let florida = [0, 0];
let newhampshire = [0, 0];
let vermont = [0, 0];
let maine = [0, 0];
let rhodeisland = [0, 0];
let newyork = [0, 0];
let pennsylvania = [0, 0];
let newjersey = [0, 0];
let delaware = [0, 0];
let maryland = [0, 0];
let virginia = [0, 0];
let westvirginia = [0, 0];
let ohio = [0, 0];
let indiana = [0, 0];
let illinois = [0, 0];
let connecticut = [0, 0];
let wisconsin = [0, 0];
let northcarolina = [0, 0];
let districtofcolumbia = [0, 0];
let massachusetts = [0, 0];
let tennessee = [0, 0];
let arkansas = [0, 0];
let missouri = [0, 0];
let georgia = [0, 0];
let southcarolina = [0, 0];
let kentucky = [0, 0];
let alabama = [0, 0];
let louisiana = [0, 0];
let mississippi = [0, 0];
let iowa = [0, 0];
let minnesota = [0, 0];
let oklahoma = [0, 0];
let texas = [0, 0];
let newmexico = [0, 0];
let kansas = [0, 0];
let nebraska = [0, 0];
let southdakota = [0, 0];
let northdakota = [0, 0];
let wyoming = [0, 0];
let montana = [0, 0];
let colorado = [0, 0];
let utah = [0, 0];
let arizona = [0, 0];
let nevada = [0, 0];
let oregon = [0, 0];
let washington = [0, 0];
let california = [0, 0];
let michigan = [0, 0];
let idaho = [0, 0];




function selectState() {
    var select = document.getElementById('select-state');
    var option = select.options[select.selectedIndex].value;
    // console.log(text);
    return option;

}

function selectPerson() {
    let person = document.querySelector('input[name="person"]:checked').value;
    return person;
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;

}

function vote() {
    let edwardvotesdisplay = document.getElementById('p-left');
    let muskvotesdisplay = document.getElementById('p-right');
    let edwardbar = document.getElementById('edward-bar');
    let muskbar = document.getElementById('musk-bar');
    // let votes = document.getElementById('vote');
    var state = selectState();
    var person = selectPerson();

    switch (state) {
        case '0':
            if (hawaii[0] + hawaii[1] < 10) {
                if (person === 'edward') {
                    hawaii[0] = hawaii[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    hawaii[1] = hawaii[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '1':
            if (alaska[0] + alaska[1] < 10) {
                if (person === 'edward') {
                    alaska[0] = alaska[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    alaska[1] = alaska[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '2':
            if (florida[0] + florida[1] < 10) {
                if (person === 'edward') {
                    florida[0] = florida[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    florida[1] = florida[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '3':
            if (newhampshire[0] + newhampshire[1] < 10) {
                if (person === 'edward') {
                    newhampshire[0] = newhampshire[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    newhampshire[1] = newhampshire[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '4':
            if (vermont[0] + vermont[1] < 10) {
                if (person === 'edward') {
                    vermont[0] = vermont[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    vermont[1] = vermont[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '5':
            if (maine[0] + maine[1] < 10) {
                if (person === 'edward') {
                    maine[0] = maine[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    maine[1] = maine[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '6':
            if (rhodeisland[0] + rhodeisland[1] < 10) {
                if (person === 'edward') {
                    rhodeisland[0] = rhodeisland[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    rhodeisland[1] = rhodeisland[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '7':
            if (newyork[0] + newyork[1] < 10) {
                if (person === 'edward') {
                    newyork[0] = newyork[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    newyork[1] = newyork[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '8':
            if (pennsylvania[0] + pennsylvania[1] < 10) {
                if (person === 'edward') {
                    pennsylvania[0] = pennsylvania[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    pennsylvania[1] = pennsylvania[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '9':
            if (newjersey[0] + newjersey[1] < 10) {
                if (person === 'edward') {
                    newjersey[0] = newjersey[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    newjersey[1] = newjersey[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '10':
            if (delaware[0] + delaware[1] < 10) {
                if (person === 'edward') {
                    delaware[0] = delaware[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    delaware[1] = delaware[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '11':
            if (maryland[0] + maryland[1] < 10) {
                if (person === 'edward') {
                    maryland[0] = maryland[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    maryland[1] = maryland[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '12':
            if (virginia[0] + virginia[1] < 10) {
                if (person === 'edward') {
                    virginia[0] = virginia[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    virginia[1] = virginia[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '13':
            if (westvirginia[0] + westvirginia[1] < 10) {
                if (person === 'edward') {
                    westvirginia[0] = westvirginia[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    westvirginia[1] = westvirginia[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '14':
            if (ohio[0] + ohio[1] < 10) {
                if (person === 'edward') {
                    ohio[0] = ohio[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    ohio[1] = ohio[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '15':
            if (indiana[0] + indiana[1] < 10) {
                if (person === 'edward') {
                    indiana[0] = indiana[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    indiana[1] = indiana[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '16':
            if (illinois[0] + illinois[1] < 10) {
                if (person === 'edward') {
                    illinois[0] = illinois[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    illinois[1] = illinois[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '17':
            if (connecticut[0] + connecticut[1] < 10) {
                if (person === 'edward') {
                    connecticut[0] = connecticut[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    connecticut[1] = connecticut[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '18':
            if (wisconsin[0] + wisconsin[1] < 10) {
                if (person === 'edward') {
                    wisconsin[0] = wisconsin[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    wisconsin[1] = wisconsin[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '19':
            if (northcarolina[0] + northcarolina[1] < 10) {
                if (person === 'edward') {
                    northcarolina[0] = northcarolina[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    northcarolina[1] = northcarolina[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '20':
            if (districtofcolumbia[0] + districtofcolumbia[1] < 10) {
                if (person === 'edward') {
                    districtofcolumbia[0] = districtofcolumbia[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    districtofcolumbia[1] = districtofcolumbia[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '21':
            if (massachusetts[0] + massachusetts[1] < 10) {
                if (person === 'edward') {
                    massachusetts[0] = massachusetts[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    massachusetts[1] = massachusetts[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '22':
            if (tennessee[0] + tennessee[1] < 10) {
                if (person === 'edward') {
                    tennessee[0] = tennessee[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    tennessee[1] = tennessee[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '23':
            if (arkansas[0] + arkansas[1] < 10) {
                if (person === 'edward') {
                    arkansas[0] = arkansas[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    arkansas[1] = arkansas[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '24':
            if (missouri[0] + missouri[1] < 10) {
                if (person === 'edward') {
                    missouri[0] = missouri[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    missouri[1] = missouri[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '25':
            if (georgia[0] + georgia[1] < 10) {
                if (person === 'edward') {
                    georgia[0] = georgia[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    georgia[1] = georgia[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '26':
            if (southcarolina[0] + southcarolina[1] < 10) {
                if (person === 'edward') {
                    southcarolina[0] = southcarolina[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    southcarolina[1] = southcarolina[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '27':
            if (kentucky[0] + kentucky[1] < 10) {
                if (person === 'edward') {
                    kentucky[0] = kentucky[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    kentucky[1] = kentucky[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '28':
            if (alabama[0] + alabama[1] < 10) {
                if (person === 'edward') {
                    alabama[0] = alabama[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    alabama[1] = alabama[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '29':
            if (louisiana[0] + louisiana[1] < 10) {
                if (person === 'edward') {
                    louisiana[0] = louisiana[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    louisiana[1] = louisiana[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '30':
            if (mississippi[0] + mississippi[1] < 10) {
                if (person === 'edward') {
                    mississippi[0] = mississippi[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    mississippi[1] = mississippi[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '31':
            if (iowa[0] + iowa[1] < 10) {
                if (person === 'edward') {
                    iowa[0] = iowa[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    iowa[1] = iowa[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '32':
            if (minnesota[0] + minnesota[1] < 10) {
                if (person === 'edward') {
                    minnesota[0] = minnesota[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    minnesota[1] = minnesota[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '33':
            if (oklahoma[0] + oklahoma[1] < 10) {
                if (person === 'edward') {
                    oklahoma[0] = oklahoma[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    oklahoma[1] = oklahoma[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '34':
            if (texas[0] + texas[1] < 10) {
                if (person === 'edward') {
                    texas[0] = texas[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    texas[1] = texas[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '35':
            if (newmexico[0] + newmexico[1] < 10) {
                if (person === 'edward') {
                    newmexico[0] = newmexico[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    newmexico[1] = newmexico[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '36':
            if (kansas[0] + kansas[1] < 10) {
                if (person === 'edward') {
                    kansas[0] = kansas[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    kansas[1] = kansas[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '37':
            if (nebraska[0] + nebraska[1] < 10) {
                if (person === 'edward') {
                    nebraska[0] = nebraska[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    nebraska[1] = nebraska[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '38':
            if (southdakota[0] + southdakota[1] < 10) {
                if (person === 'edward') {
                    southdakota[0] = southdakota[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    southdakota[1] = southdakota[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '39':
            if (northdakota[0] + northdakota[1] < 10) {
                if (person === 'edward') {
                    northdakota[0] = northdakota[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    northdakota[1] = northdakota[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '40':
            if (wyoming[0] + wyoming[1] < 10) {
                if (person === 'edward') {
                    wyoming[0] = wyoming[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    wyoming[1] = wyoming[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '41':
            if (montana[0] + montana[1] < 10) {
                if (person === 'edward') {
                    montana[0] = montana[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    montana[1] = montana[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '42':
            if (colorado[0] + colorado[1] < 10) {
                if (person === 'edward') {
                    colorado[0] = colorado[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    colorado[1] = colorado[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '43':
            if (utah[0] + utah[1] < 10) {
                if (person === 'edward') {
                    utah[0] = utah[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    utah[1] = utah[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '44':
            if (arizona[0] + arizona[1] < 10) {
                if (person === 'edward') {
                    arizona[0] = arizona[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    arizona[1] = arizona[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '45':
            if (nevada[0] + nevada[1] < 10) {
                if (person === 'edward') {
                    nevada[0] = nevada[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    nevada[1] = nevada[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '46':
            if (oregon[0] + oregon[1] < 10) {
                if (person === 'edward') {
                    oregon[0] = oregon[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    oregon[1] = oregon[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '47':
            if (washington[0] + washington[1] < 10) {
                if (person === 'edward') {
                    washington[0] = washington[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    washington[1] = washington[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '48':
            if (california[0] + california[1] < 10) {
                if (person === 'edward') {
                    california[0] = california[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    california[1] = california[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '49':
            if (michigan[0] + michigan[1] < 10) {
                if (person === 'edward') {
                    michigan[0] = michigan[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    michigan[1] = michigan[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;
        case '50':
            if (idaho[0] + idaho[1] < 10) {
                if (person === 'edward') {
                    idaho[0] = idaho[0] + 1;
                    total[0] = total[0] + 1;
                } else {
                    idaho[1] = idaho[1] + 1;
                    total[1] = total[1] + 1;
                }
            } else {
                alert("Maximum votes reached");
            }
            break;


        default:
            break;
    }

    console.log(hawaii[0] + '  ' + hawaii[1]);

    //First you Loop through the data object
    for (const key in simplemaps_usmap_mapdata.state_specific) {

        // Check if the name of a particular state is equal to Alaska
        if (simplemaps_usmap_mapdata.state_specific[key].name === 'Hawaii') {
            if (hawaii[0] > hawaii[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if (hawaii[0] < hawaii[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }

        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Alaska') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (alaska[0] > alaska[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();
            } else if ((alaska[0] < alaska[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Florida') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (florida[0] > florida[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((florida[0] < florida[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'New Hampshire') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (newhampshire[0] > newhampshire[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((newhampshire[0] < newhampshire[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Vermont') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (vermont[0] > vermont[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((vermont[0] < vermont[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Maine') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (maine[0] > maine[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((maine[0] < maine[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Rhode Island') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (rhodeisland[0] > rhodeisland[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((rhodeisland[0] < rhodeisland[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'New York') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (newyork[0] > newyork[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((newyork[0] < newyork[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Pennsylvania') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (pennsylvania[0] > pennsylvania[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((pennsylvania[0] < pennsylvania[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'New Jersey') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (newjersey[0] > newjersey[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();
                console.log('new jersey');

            } else if ((newjersey[0] < newjersey[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Delaware') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (delaware[0] > delaware[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((delaware[0] < delaware[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Maryland') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (maryland[0] > maryland[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((maryland[0] < maryland[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Virginia') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (virginia[0] > virginia[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((virginia[0] < virginia[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'West Virginia') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (westvirginia[0] > westvirginia[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((westvirginia[0] < westvirginia[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Ohio') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (ohio[0] > ohio[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((ohio[0] < ohio[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Indiana') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (indiana[0] > indiana[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((indiana[0] < indiana[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Illinois') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (illinois[0] > illinois[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((illinois[0] < illinois[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Connecticut') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (connecticut[0] > connecticut[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((connecticut[0] < connecticut[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Wisconsin') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (wisconsin[0] > wisconsin[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((wisconsin[0] < wisconsin[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'North Carolina') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (northcarolina[0] > northcarolina[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((northcarolina[0] < northcarolina[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'District of Columbia') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (districtofcolumbia[0] > districtofcolumbia[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((districtofcolumbia[0] < districtofcolumbia[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Massachusetts') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (massachusetts[0] > massachusetts[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((massachusetts[0] < massachusetts[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Tennessee') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (tennessee[0] > tennessee[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((tennessee[0] < tennessee[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Arkansas') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (arkansas[0] > arkansas[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((arkansas[0] < arkansas[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Missouri') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (missouri[0] > missouri[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((missouri[0] < missouri[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Georgia') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (georgia[0] > georgia[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((georgia[0] < georgia[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'South Carolina') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (southcarolina[0] > southcarolina[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((southcarolina[0] < southcarolina[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Kentucky') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (kentucky[0] > kentucky[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((kentucky[0] < kentucky[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Alabama') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (alabama[0] > alabama[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((alabama[0] < alabama[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Louisiana') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (louisiana[0] > louisiana[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((louisiana[0] < louisiana[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Mississippi') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (mississippi[0] > mississippi[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((mississippi[0] < mississippi[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Iowa') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (iowa[0] > iowa[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((iowa[0] < iowa[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Minnesota') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (minnesota[0] > minnesota[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((minnesota[0] < minnesota[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Oklahoma') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (oklahoma[0] > oklahoma[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((oklahoma[0] < oklahoma[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Texas') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (texas[0] > texas[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((texas[0] < texas[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'New Mexico') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (newmexico[0] > newmexico[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((newmexico[0] < newmexico[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Kansas') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (kansas[0] > kansas[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((kansas[0] < kansas[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Nebraska') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (nebraska[0] > nebraska[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((nebraska[0] < nebraska[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'South Dakota') {
            if (southdakota[0] > southdakota[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((southdakota[0] < southdakota[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'North Dakota') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (northdakota[0] > northdakota[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((northdakota[0] < northdakota[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Wyoming') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (wyoming[0] > wyoming[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((wyoming[0] < wyoming[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Montana') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (montana[0] > montana[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((montana[0] < montana[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Colorado') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (colorado[0] > colorado[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((colorado[0] < colorado[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Utah') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (utah[0] > utah[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((utah[0] < utah[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Arizona') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (arizona[0] > arizona[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((arizona[0] < arizona[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Nevada') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (nevada[0] > nevada[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((nevada[0] < nevada[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Oregon') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (oregon[0] > oregon[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((oregon[0] < oregon[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Washington') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (washington[0] > washington[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((washington[0] < washington[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'California') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (california[0] > california[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((california[0] < california[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Michigan') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (michigan[0] > michigan[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((michigan[0] < michigan[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        } else if (simplemaps_usmap_mapdata.state_specific[key].name === 'Idaho') {
            simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
            if (idaho[0] > idaho[1]) {
                simplemaps_usmap_mapdata.state_specific[key].color = '#ff4c55';
                simplemaps_usmap.load();

            } else if ((idaho[0] < idaho[1])) {
                simplemaps_usmap_mapdata.state_specific[key].color = 'rgb(37, 150, 190)';
                simplemaps_usmap.load();
            } else {
                simplemaps_usmap_mapdata.state_specific[key].color = 'default';
                simplemaps_usmap.load();
            }
        }


    }


    let totalbar = total[0] + total[1];

    let edwardpercent = percentage(total[0], totalbar);
    let muskpercentage = percentage(total[1], totalbar);

    edwardbar.style.width = edwardpercent + '%';
    muskbar.style.width = muskpercentage + '%';

    edwardvotesdisplay.innerHTML = total[0];
    muskvotesdisplay.innerHTML = total[1];

}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
